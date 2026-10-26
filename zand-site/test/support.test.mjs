import { test } from "node:test";
import assert from "node:assert/strict";
import { createHash, webcrypto } from "node:crypto";
import { handleApi } from "../src/store.js";

globalThis.crypto ||= webcrypto;
const uuid=()=>crypto.randomUUID();
const hash=value=>createHash("sha256").update(value).digest("hex");

class Statement {
  constructor(db,sql,args=[]){this.db=db;this.sql=sql;this.args=args;}
  bind(...args){this.args=args;return this;}
  async first(){
    const sql=this.sql.toLowerCase(),a=this.args;
    if(sql.includes("from sessions s join users u"))return this.db.sessions.get(a[0])||null;
    if(sql.includes("from support_threads where id=? and user_id=?"))return this.db.threads.find(row=>row.id===a[0]&&row.user_id===a[1])||null;
    if(sql.includes("from support_threads where id=?"))return this.db.threads.find(row=>row.id===a[0])||null;
    if(sql.includes("from guest_support_threads where token_hash=?"))return this.db.guestThreads.find(row=>row.token_hash===a[0])||null;
    if(sql.includes("from guest_support_threads where id=?"))return this.db.guestThreads.find(row=>row.id===a[0])||null;
    if(sql.includes("from guest_support_messages where thread_id=? and client_message_id=?"))return this.db.guestMessages.find(row=>row.thread_id===a[0]&&row.client_message_id===a[1])||null;
    return null;
  }
  async all(){
    const sql=this.sql.toLowerCase(),a=this.args;
    if(sql.includes("from support_threads t join users"))return {results:[]};
    if(sql.includes("from support_threads where user_id"))return {results:this.db.threads.filter(row=>row.user_id===a[0])};
    if(sql.includes("from guest_support_threads"))return {results:[...this.db.guestThreads]};
    if(sql.includes("from guest_support_messages"))return {results:this.db.guestMessages.filter(row=>a.includes(row.thread_id))};
    if(sql.includes("from support_messages"))return {results:this.db.accountMessages.filter(row=>a.includes(row.thread_id)).map(row=>({...row,role:row.sender_id===this.db.customer.id?"customer":"admin",firstName:row.sender_id===this.db.customer.id?this.db.customer.firstName:"مدیر"}))};
    return {results:[]};
  }
  async run(){
    const sql=this.sql.toLowerCase(),a=this.args;
    if(sql.includes("insert or ignore into guest_support_threads")){
      if(!this.db.guestThreads.some(row=>row.token_hash===a[1]))this.db.guestThreads.push({id:a[0],token_hash:a[1],first_name:a[2],phone:a[3],subject:a[4],status:"open",created_at:a[5],updated_at:a[6]});
    }else if(sql.includes("update guest_support_threads set first_name")){
      const row=this.db.guestThreads.find(item=>item.id===a[3]);if(row){row.first_name=a[0];row.phone=a[1];row.updated_at=a[2];}
    }else if(sql.includes("insert or ignore into guest_support_messages")){
      if(!this.db.guestMessages.some(row=>row.thread_id===a[1]&&row.client_message_id===a[3]))this.db.guestMessages.push({id:a[0],thread_id:a[1],sender_role:"customer",sender_name:a[2],sender_id:null,client_message_id:a[3],body:a[4],created_at:a[5]});
    }else if(sql.includes("insert into guest_support_messages"))this.db.guestMessages.push({id:a[0],thread_id:a[1],sender_role:"admin",sender_name:"پشتیبانی",sender_id:a[2],client_message_id:null,body:a[3],created_at:a[4]});
    else if(sql.includes("update guest_support_threads set status='answered'")){const row=this.db.guestThreads.find(item=>item.id===a[1]);if(row){row.status="answered";row.updated_at=a[0];}}
    else if(sql.includes("insert into support_messages"))this.db.accountMessages.push({id:a[0],thread_id:a[1],sender_id:a[2],body:a[3],created_at:a[4]});
    else if(sql.includes("update support_threads set status='open'")){const row=this.db.threads.find(item=>item.id===a[1]);if(row){row.status="open";row.updated_at=a[0];}}
    return {success:true,meta:{changes:1}};
  }
}
class MemoryD1 {
  constructor(){
    this.guestThreads=[];this.guestMessages=[];this.threads=[];this.accountMessages=[];this.sessions=new Map();
    this.admin={id:"admin-1",username:"manager",firstName:"مدیر",lastName:"",phone:"09121112222",role:"admin",profileComplete:1};
    this.customer={id:"customer-1",username:"customer",firstName:"سارا",lastName:"مشتری",phone:"09123334444",role:"customer",profileComplete:1};
    this.sessions.set(hash("admin-token"),this.admin);this.sessions.set(hash("customer-token"),this.customer);
  }
  prepare(sql){return new Statement(this,sql);}
  async batch(statements){const result=[];for(const statement of statements)result.push(await statement.run());return result;}
}
function post(path,body,headers={}){return new Request("https://zandbazar.ir"+path,{method:"POST",headers:{Origin:"https://zandbazar.ir","Content-Type":"application/json",...headers},body:JSON.stringify(body)});}
function get(path,headers={}){return new Request("https://zandbazar.ir"+path,{method:"GET",headers});}
async function payload(response){return {status:response.status,body:await response.json()};}

test("guest history is private to its device token and persists",async()=>{
  const db=new MemoryD1(),env={DB:db},token="a".repeat(64),clientMessageId=uuid();
  const sent=await payload(await handleApi(post("/api/support/guest",{action:"send",token,firstName:"سارا",phone:"۰۹۱۲۱۲۳۴۵۶۷",subject:"استعلام عمده",message:"قیمت قهوه را می‌خواهم",clientMessageId}),env));
  assert.equal(sent.status,201);
  const history=await payload(await handleApi(post("/api/support/guest",{action:"history",token}),env));
  assert.equal(history.body.thread.messages.length,1);assert.equal(history.body.thread.messages[0].body,"قیمت قهوه را می‌خواهم");
  assert.equal(Object.hasOwn(history.body.thread,"token_hash"),false);
  const stranger=await payload(await handleApi(post("/api/support/guest",{action:"history",token:"b".repeat(64)}),env));
  assert.equal(stranger.body.thread,null);
});

test("guest retries with the same message id do not duplicate it",async()=>{
  const db=new MemoryD1(),env={DB:db},token="c".repeat(64),clientMessageId=uuid();
  const body={action:"send",token,firstName:"مهدی",phone:"09121112222",subject:"مشاوره",message:"برای سفارش عمده تماس بگیرید",clientMessageId};
  await handleApi(post("/api/support/guest",body),env);await handleApi(post("/api/support/guest",body),env);
  assert.equal(db.guestThreads.length,1);assert.equal(db.guestMessages.length,1);
});

test("admin can see and answer a guest ticket",async()=>{
  const db=new MemoryD1(),env={DB:db},token="d".repeat(64),cookie={Cookie:"__Host-zand_session=admin-token"};
  await handleApi(post("/api/support/guest",{action:"send",token,firstName:"لیلا",phone:"09121112222",subject:"پیگیری سفارش",message:"سفارشم را پیگیری می‌کنم",clientMessageId:uuid()}),env);
  const list=await payload(await handleApi(get("/api/admin/support",cookie),env));
  assert.equal(list.status,200);assert.equal(list.body.threads.length,1);
  const id=list.body.threads[0].id;
  const answer=await payload(await handleApi(post("/api/admin/support/"+id,{message:"کارشناس تا امروز پاسخ می‌دهد"},cookie),env));
  assert.equal(answer.status,200);
  const history=await payload(await handleApi(post("/api/support/guest",{action:"history",token}),env));
  assert.equal(history.body.thread.status,"answered");assert.equal(history.body.thread.messages.at(-1).role,"admin");
  assert.equal(history.body.thread.messages.at(-1).body,"کارشناس تا امروز پاسخ می‌دهد");
});

test("account users can reply only to their own ticket",async()=>{
  const db=new MemoryD1(),env={DB:db},id=uuid();db.threads.push({id,user_id:db.customer.id,status:"answered"});
  const own=await payload(await handleApi(post("/api/me/support/"+id,{message:"ممنون، یک مورد دیگر دارم"},{Cookie:"__Host-zand_session=customer-token"}),env));
  assert.equal(own.status,200);assert.equal(db.accountMessages.length,1);assert.equal(db.threads[0].status,"open");
  const other=await payload(await handleApi(post("/api/me/support/"+id,{message:"سلام"},{Cookie:"__Host-zand_session=admin-token"}),env));
  assert.equal(other.status,401);
});

test("guest contact validation and origin checks are enforced",async()=>{
  const env={DB:new MemoryD1()},token="e".repeat(64);
  const invalid=await payload(await handleApi(post("/api/support/guest",{action:"send",token,firstName:"",phone:"bad",subject:"استعلام",message:"متن کافی",clientMessageId:uuid()}),env));
  assert.equal(invalid.status,400);
  const cross=await payload(await handleApi(post("/api/support/guest",{action:"history",token},{Origin:"https://evil.example"}),env));
  assert.equal(cross.status,403);
});
