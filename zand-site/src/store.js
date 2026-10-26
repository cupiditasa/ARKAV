import { PRICE_DATA_KEY } from "./price-sync.mjs";

const enc = new TextEncoder();
const iterations = 310000;
const cookieName = "__Host-zand_session";
const statuses = new Set(["pending", "confirmed", "preparing", "shipped", "delivered", "cancelled"]);

class ApiError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}
const fail = (status, message) => { throw new ApiError(status, message); };
const time = () => new Date().toISOString();
const reply = (data, status = 200, headers = {}) => Response.json(data, {
  status, headers: { "Cache-Control": "no-store", ...headers },
});
const text = (v, max = 240) => String(v ?? "").trim().slice(0, max);
const digits = (v) => String(v ?? "").replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g, d => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)));
const username = (v) => text(v, 32).toLowerCase();
const validUsername = (v) => /^[a-z0-9._-]{3,32}$/.test(v);
const validPassword = (v) => typeof v === "string" && v.length >= 10 && v.length <= 128;
function phone(value) {
  let p = digits(value).replace(/[\s()\-]/g, "");
  if (p.startsWith("+98")) p = "0" + p.slice(3);
  else if (p.startsWith("0098")) p = "0" + p.slice(4);
  else if (p.startsWith("98")) p = "0" + p.slice(2);
  return /^09\d{9}$/.test(p) ? p : "";
}
async function bodyOf(request) {
  if (Number(request.headers.get("Content-Length") || 0) > 16000) fail(413, "اطلاعات فرم بیش از حد مجاز است.");
  try { const b = await request.json(); return b && typeof b === "object" && !Array.isArray(b) ? b : null; }
  catch { return null; }
}
function sameOrigin(request) {
  const origin = request.headers.get("Origin");
  return (!origin || origin === new URL(request.url).origin) && request.headers.get("Sec-Fetch-Site") !== "cross-site";
}
const hex = (v) => Array.from(v, b => b.toString(16).padStart(2, "0")).join("");
const hexBytes = (v) => new Uint8Array((String(v).match(/.{2}/g) || []).map(b => parseInt(b, 16)));
function randomHex(length = 32) { const b = new Uint8Array(length); crypto.getRandomValues(b); return hex(b); }
async function hash(v) { return hex(new Uint8Array(await crypto.subtle.digest("SHA-256", enc.encode(v)))); }
async function passwordHash(password, salt) {
  const key = await crypto.subtle.importKey("raw", enc.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits({ name: "PBKDF2", salt: hexBytes(salt), iterations, hash: "SHA-256" }, key, 256);
  return hex(new Uint8Array(bits));
}
function equal(a, b) {
  const x = enc.encode(String(a ?? "")), y = enc.encode(String(b ?? ""));
  let d = x.length ^ y.length;
  for (let i = 0; i < Math.max(x.length, y.length); i++) d |= (x[i] || 0) ^ (y[i] || 0);
  return d === 0;
}
function cookieToken(request) {
  const part = (request.headers.get("Cookie") || "").split(";").map(x => x.trim()).find(x => x.startsWith(cookieName + "="));
  return part ? part.slice(cookieName.length + 1) : "";
}
const setCookie = token => `${cookieName}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=2592000`;
const expiredCookie = `${cookieName}=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0`;
async function newSession(user, env) {
  const token = randomHex();
  await env.DB.prepare("INSERT INTO sessions (id,user_id,token_hash,expires_at,created_at) VALUES (?,?,?,?,?)")
    .bind(crypto.randomUUID(), user.id, await hash(token), new Date(Date.now() + 30 * 86400000).toISOString(), time()).run();
  return setCookie(token);
}
async function currentUser(request, env) {
  const token = cookieToken(request);
  if (!token) return null;
  return env.DB.prepare(`SELECT u.id,u.username,u.first_name AS firstName,u.last_name AS lastName,u.phone,
    u.role,u.profile_complete AS profileComplete FROM sessions s JOIN users u ON u.id=s.user_id
    WHERE s.token_hash=? AND s.expires_at>? LIMIT 1`).bind(await hash(token), time()).first();
}
async function auth(request, env, role = "customer", complete = true) {
  const u = await currentUser(request, env);
  if (!u || (role && u.role !== role)) fail(401, "برای ادامه وارد حساب مناسب شوید.");
  if (complete && u.role === "customer" && !u.profileComplete) fail(403, "ابتدا اطلاعات حساب خود را کامل کنید.");
  return u;
}
function publicUser(u) {
  return { id:u.id, username:u.username, firstName:u.firstName || u.first_name || "",
    lastName:u.lastName || u.last_name || "", phone:u.phone || "", role:u.role,
    profileComplete:Boolean(u.profileComplete ?? u.profile_complete) };
}
async function audit(env, admin, action, type, id, before = null, after = null) {
  await env.DB.prepare(`INSERT INTO admin_audit_log
    (id,admin_id,action,target_type,target_id,before_json,after_json,created_at) VALUES (?,?,?,?,?,?,?,?)`)
    .bind(crypto.randomUUID(),admin.id,action,type,String(id),before && JSON.stringify(before),after && JSON.stringify(after),time()).run();
}

function parseCatalog(source) {
  const mark = "window.CATALOG_PRODUCTS=", start = source.indexOf(mark), end = source.lastIndexOf("];");
  if (start < 0 || end <= start) throw new Error("catalog_invalid");
  const list = JSON.parse(source.slice(start + mark.length, end + 1));
  return list.map(p => ({
    id:String(p.id), name:String(p.name || ""), category:String(p.category || "سایر"),
    brand:String(p.brand || ""), basePrice:Number(p.basePrice) || null,
    cartonCount:Math.max(1,Number(p.cartonCount) || 1), minCartons:Math.max(1,Number(p.minCartons) || 1),
    description:String(p.description || ""), image:String(p.image || ""), source:String(p.source || ""),
    type:p.type === "coffee" ? "coffee" : "carton",
  }));
}
async function seed(env) {
  const asset = await env.ASSETS.fetch("https://assets.local/zand/catalog.js");
  if (!asset.ok) throw new Error("catalog_unavailable");
  const catalogText = await asset.text();
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(catalogText));
  const revision = [...new Uint8Array(digest)].map(byte => byte.toString(16).padStart(2,"0")).join("");
  const previous = await env.DB.prepare("SELECT value FROM settings WHERE key='catalog_revision'").first();
  if (previous?.value === revision) return;
  const catalog = parseCatalog(catalogText), stamp = time();
  const existing = (await env.DB.prepare("SELECT id,name,category,brand,base_price,carton_count,min_cartons,description,image,source,price_mode,is_active,deleted_at FROM products").all()).results || [];
  const byId = new Map(existing.map(row => [String(row.id), row]));
  const statements = [];
  for (const p of catalog) {
    const current = byId.get(String(p.id));
    if (!current) {
      statements.push(env.DB.prepare("INSERT OR IGNORE INTO products (id,name,category,brand,base_price,price_mode,carton_count,min_cartons,description,image,source,type,is_active,created_at,updated_at) VALUES (?,?,?,?,?,'source',?,?,?,?,?,?,1,?,?)").bind(p.id,p.name,p.category,p.brand,p.basePrice,p.cartonCount,p.minCartons,p.description,p.image,p.source,p.type,stamp,stamp));
      continue;
    }
    const fields = ["name","category","brand","base_price","carton_count","min_cartons","description","image","source"];
    const next = [p.name,p.category,p.brand,p.basePrice,p.cartonCount,p.minCartons,p.description,p.image,p.source];
    if (current.price_mode === "source" && !current.deleted_at && fields.some((key, i) => String(current[key] ?? "") !== String(next[i] ?? ""))) {
      statements.push(env.DB.prepare("UPDATE products SET name=?,category=?,brand=?,base_price=?,carton_count=?,min_cartons=?,description=?,image=?,source=?,updated_at=? WHERE id=? AND price_mode='source' AND deleted_at IS NULL").bind(...next,stamp,p.id));
    }
  }
  const currentSourceIds = new Set(catalog.filter(p => dastavvalSource(p.source)).map(p => String(p.id)));
  for (const row of existing) {
    if (dastavvalSource(row.source) && !currentSourceIds.has(String(row.id)) && Number(row.is_active) === 1 && row.price_mode === "source") {
      statements.push(env.DB.prepare("UPDATE products SET is_active=0,updated_at=? WHERE id=? AND price_mode='source'").bind(stamp,row.id));
    }
  }
  statements.push(env.DB.prepare("INSERT INTO settings (key,value,updated_at) VALUES ('catalog_revision',?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(revision,stamp));
  for (let i=0;i<statements.length;i+=40) await env.DB.batch(statements.slice(i,i+40));
}
async function products(env, paused = false) {
  await seed(env);
  const clause = paused ? "deleted_at IS NULL" : "deleted_at IS NULL AND is_active=1";
  return (await env.DB.prepare(`SELECT * FROM products WHERE ${clause} ORDER BY category,name`).all()).results || [];
}
function billboardId(id) { return String(id || "").startsWith("billboard-"); }
function dastavvalSource(source) {
  try { return /(^|\.)dastavval\.com$/i.test(new URL(source || "").hostname); } catch { return false; }
}
function catalogItem(p) {
  return { id:p.id,name:p.name,category:p.category,brand:p.brand || "",basePrice:p.base_price == null ? null : Number(p.base_price),
    cartonCount:Number(p.carton_count)||1,minCartons:Number(p.min_cartons)||1,description:p.description||"",
    image:p.image||"",source:p.source||"",type:p.type === "coffee" ? "coffee" : "carton",isBillboard:billboardId(p.id) };
}
async function rules(env) {
  const [g,c] = await Promise.all([
    env.DB.prepare("SELECT value FROM settings WHERE key='global_margin'").first(),
    env.DB.prepare("SELECT category,margin_percent FROM category_margin_rules").all(),
  ]);
  return { global:Number(g?.value||10), categories:new Map((c.results||[]).map(x=>[x.category,Number(x.margin_percent)])) };
}
const margin = (p,r) => p.margin_percent == null ? (r.categories.get(p.category) ?? r.global) : Number(p.margin_percent);
const finalPrice = (price, pct) => Math.round(Number(price) * (1 + Number(pct)/100));

export async function dynamicCatalog(request, env) {
  const assetUrl = new URL("/zand/catalog.js", request.url);
  try {
    const rows = await products(env);
    const asset = await env.ASSETS.fetch(assetUrl);
    if (!asset.ok) return asset;
    const source = await asset.text(), mark = "window.CATALOG_PRODUCTS=", start=source.indexOf(mark), end=source.lastIndexOf("];");
    if(start<0 || end<=start) return new Response("Catalog unavailable",{status:503});
    const body=source.slice(0,start)+mark+JSON.stringify(rows.map(catalogItem))+";"+source.slice(end+2);
    return new Response(body,{headers:{"Content-Type":"application/javascript; charset=utf-8","Cache-Control":"no-store","X-Content-Type-Options":"nosniff"}});
  } catch { return env.ASSETS.fetch(assetUrl); }
}
export async function currentPrices(env) {
  const snapshot=(env.PRICES && await env.PRICES.get(PRICE_DATA_KEY,"json")) || {schemaVersion:1,generatedAt:null,sources:{},items:{}};
  if(!env.DB) return {...snapshot,items:Object.fromEntries(Object.entries(snapshot.items||{}).map(([id,p])=>[id,{...p,marginPercent:10,customerPrice:finalPrice(p.sourcePrice,10)}]))};
  const [rows,r]=await Promise.all([products(env),rules(env)]);
  const items={};
  for(const p of rows) {
    if(p.deleted_at) continue;
    const pct=dastavvalSource(p.source)?10:margin(p,r);
    if(p.price_mode==="manual" && Number(p.base_price)>0) {
      items[p.id]={source:"manual",sourcePrice:Number(p.base_price),updatedAt:p.updated_at,isManual:true,marginPercent:pct,customerPrice:finalPrice(p.base_price,pct)};
    } else if(p.price_mode==="source" && snapshot.items?.[p.id]) {
      const price=snapshot.items[p.id];
      const sourceMargin = dastavvalSource(p.source) ? 10 : pct;
      items[p.id]={...price,marginPercent:sourceMargin,customerPrice:finalPrice(price.sourcePrice,sourceMargin)};
    } else if (p.price_mode==="source" && Number(p.base_price)>0) {
      const stamp=Date.parse(p.updated_at||"");
      if (Number.isFinite(stamp) && Date.now()-stamp<=36*60*60*1000 && stamp<=Date.now()+300000) {
        const sourceMargin=pct, source=billboardId(p.id)?"dastavval-billboard":"catalog";
        items[p.id]={source,sourceProductId:p.id,sourcePrice:Number(p.base_price),updatedAt:p.updated_at,marginPercent:sourceMargin,customerPrice:finalPrice(p.base_price,sourceMargin)};
      }
    }
  }
  return {...snapshot,items};
}
export async function syncCatalog(env) {
  return (await products(env,true)).filter(p=>!p.deleted_at && Number(p.is_active)===1).map(catalogItem);
}

async function register(request,env) {
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات فرم خوانده نشد.");
  const name=username(b.username);
  if(!validUsername(name)) fail(400,"نام کاربری باید ۳ تا ۳۲ نویسهٔ انگلیسی، عدد، نقطه، خط تیره یا زیرخط باشد.");
  if(!validPassword(b.password)) fail(400,"گذرواژه باید بین ۱۰ تا ۱۲۸ نویسه باشد.");
  if(b.password!==b.passwordConfirm) fail(400,"تکرار گذرواژه با گذرواژه یکسان نیست.");
  const salt=randomHex(16), user={id:crypto.randomUUID(),username:text(b.username,32),role:"customer",profile_complete:0};
  try { await env.DB.prepare(`INSERT INTO users (id,username,username_norm,password_salt,password_hash,role,profile_complete,created_at)
    VALUES (?,?,?,?,?,'customer',0,?)`).bind(user.id,user.username,name,salt,await passwordHash(b.password,salt),time()).run(); }
  catch { fail(409,"این نام کاربری قبلاً ثبت شده است."); }
  return reply({user:publicUser(user)},201,{"Set-Cookie":await newSession(user,env)});
}
async function login(request,env) {
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات فرم خوانده نشد.");
  const name=username(b.username);
  if(!validUsername(name)||!validPassword(b.password)) fail(401,"نام کاربری یا گذرواژه درست نیست.");
  const key=await hash(name), now=Math.floor(Date.now()/1000);
  const a=await env.DB.prepare("SELECT attempts,window_started_at FROM login_attempts WHERE username_hash=?").bind(key).first();
  if(a&&a.window_started_at>now-900&&a.attempts>=8) fail(429,"تلاش ناموفق زیاد بوده است؛ ۱۵ دقیقهٔ دیگر دوباره تلاش کنید.");
  const u=await env.DB.prepare("SELECT * FROM users WHERE username_norm=? LIMIT 1").bind(name).first();
  const candidate=await passwordHash(b.password,u?.password_salt||"00000000000000000000000000000000");
  if(!u||!equal(candidate,u.password_hash)) {
    await env.DB.prepare(`INSERT INTO login_attempts (username_hash,attempts,window_started_at) VALUES (?,1,?)
      ON CONFLICT(username_hash) DO UPDATE SET attempts=CASE WHEN window_started_at<=? THEN 1 ELSE attempts+1 END,
      window_started_at=CASE WHEN window_started_at<=? THEN excluded.window_started_at ELSE window_started_at END`)
      .bind(key,now,now-900,now-900).run();
    fail(401,"نام کاربری یا گذرواژه درست نیست.");
  }
  await env.DB.prepare("DELETE FROM login_attempts WHERE username_hash=?").bind(key).run();
  return reply({user:publicUser(u)},200,{"Set-Cookie":await newSession(u,env)});
}
async function profile(request,env,u) {
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات فرم خوانده نشد.");
  const first=text(b.firstName,60), last=text(b.lastName,80), p=phone(b.phone);
  if(!first||!last) fail(400,"نام و نام خانوادگی را وارد کنید.");
  if(!p) fail(400,"شمارهٔ تماس معتبر نیست.");
  try { await env.DB.prepare("UPDATE users SET first_name=?,last_name=?,phone=?,phone_norm=?,profile_complete=1 WHERE id=? AND role='customer'")
    .bind(first,last,p,p,u.id).run(); } catch { fail(409,"این شمارهٔ تماس قبلاً برای حساب دیگری ثبت شده است."); }
  const updated=await env.DB.prepare("SELECT id,username,first_name AS firstName,last_name AS lastName,phone,role,profile_complete AS profileComplete FROM users WHERE id=?").bind(u.id).first();
  return reply({user:publicUser(updated)});
}
async function bootstrap(request,env) {
  if(!env.ADMIN_SETUP_SECRET) fail(503,"کلید راه‌اندازی مدیر در تنظیمات Worker ثبت نشده است.");
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات فرم خوانده نشد.");
  if(!equal(await hash(b.setupSecret||""),await hash(env.ADMIN_SETUP_SECRET))) fail(403,"کلید راه‌اندازی درست نیست.");
  const exists=await env.DB.prepare("SELECT COUNT(*) AS n FROM users WHERE role='admin'").first();
  if(Number(exists?.n||0)) fail(409,"حساب مدیر اولیه قبلاً ساخته شده است.");
  const name=username(b.username), p=phone(b.phone), first=text(b.firstName,60), last=text(b.lastName,80);
  if(!validUsername(name)||!validPassword(b.password)||b.password!==b.passwordConfirm) fail(400,"نام کاربری یا گذرواژه معتبر نیست.");
  if(!p||!first||!last) fail(400,"نام، نام خانوادگی و شمارهٔ تماس معتبر را وارد کنید.");
  const salt=randomHex(16), u={id:crypto.randomUUID(),username:text(b.username,32),first_name:first,last_name:last,phone:p,role:"admin",profile_complete:1};
  try { await env.DB.prepare(`INSERT INTO users (id,username,username_norm,password_salt,password_hash,first_name,last_name,phone,phone_norm,role,profile_complete,created_at)
    VALUES (?,?,?,?,?,?,?,?,?,'admin',1,?)`).bind(u.id,u.username,name,salt,await passwordHash(b.password,salt),first,last,p,p,time()).run(); }
  catch { fail(409,"نام کاربری یا شمارهٔ تماس قبلاً ثبت شده است."); }
  return reply({user:publicUser(u)},201,{"Set-Cookie":await newSession(u,env)});
}

async function addresses(request,env,u,id=null) {
  if(request.method==="GET") return reply({addresses:(await env.DB.prepare("SELECT * FROM addresses WHERE user_id=? ORDER BY is_default DESC,created_at DESC").bind(u.id).all()).results||[]});
  if(request.method==="DELETE") {
    const r=await env.DB.prepare("DELETE FROM addresses WHERE id=? AND user_id=?").bind(id,u.id).run();
    if(!r.meta?.changes) fail(404,"آدرس پیدا نشد.");
    return reply({ok:true});
  }
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات فرم خوانده نشد.");
  const row={label:text(b.label||"آدرس",40),recipient:text(b.recipientName||[u.firstName,u.lastName].join(" "),100),
    recipientPhone:phone(b.recipientPhone||u.phone),province:text(b.province,80),city:text(b.city,80),
    postal:digits(b.postalCode).replace(/\D/g,"").slice(0,10),address:text(b.address,600),isDefault:b.isDefault?1:0};
  if(!row.recipient||!row.recipientPhone||!row.province||!row.city||row.postal.length!==10||row.address.length<8) fail(400,"اطلاعات کامل آدرس را وارد کنید.");
  const stamp=time(), aid=id||crypto.randomUUID(), stmts=[];
  if(id && !await env.DB.prepare("SELECT id FROM addresses WHERE id=? AND user_id=?").bind(id,u.id).first()) fail(404,"آدرس پیدا نشد.");
  if(row.isDefault) stmts.push(env.DB.prepare("UPDATE addresses SET is_default=0 WHERE user_id=?").bind(u.id));
  if(id) stmts.push(env.DB.prepare(`UPDATE addresses SET label=?,recipient_name=?,recipient_phone=?,province=?,city=?,postal_code=?,address=?,is_default=?,updated_at=? WHERE id=? AND user_id=?`)
    .bind(row.label,row.recipient,row.recipientPhone,row.province,row.city,row.postal,row.address,row.isDefault,stamp,id,u.id));
  else stmts.push(env.DB.prepare(`INSERT INTO addresses (id,user_id,label,recipient_name,recipient_phone,province,city,postal_code,address,is_default,created_at,updated_at)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?)`).bind(aid,u.id,row.label,row.recipient,row.recipientPhone,row.province,row.city,row.postal,row.address,row.isDefault,stamp,stamp));
  await env.DB.batch(stmts);
  return reply({address:await env.DB.prepare("SELECT * FROM addresses WHERE id=?").bind(aid).first()},id?200:201);
}
async function orders(env,userId=null) {
  const q=userId?env.DB.prepare("SELECT o.*,u.username FROM orders o JOIN users u ON u.id=o.user_id WHERE o.user_id=? ORDER BY o.created_at DESC LIMIT 100").bind(userId)
    :env.DB.prepare("SELECT o.*,u.username,u.first_name AS firstName,u.last_name AS lastName,u.phone FROM orders o JOIN users u ON u.id=o.user_id ORDER BY o.created_at DESC LIMIT 200");
  const list=(await q.all()).results||[];
  for(const o of list) o.history=(await env.DB.prepare("SELECT status,note,created_at FROM order_status_history WHERE order_id=? ORDER BY created_at").bind(o.id).all()).results||[];
  return list;
}
async function createOrder(request,env,u) {
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات سفارش خوانده نشد.");
  const details=text(b.details,3000), note=text(b.customerNote,1200);
  if(details.length<6) fail(400,"شرح سفارش را وارد کنید.");
  const address=await env.DB.prepare("SELECT * FROM addresses WHERE id=? AND user_id=?").bind(text(b.addressId,80),u.id).first();
  if(!address) fail(400,"یک آدرس ثبت‌شده را انتخاب کنید.");
  const id=crypto.randomUUID(), stamp=time(), snap=JSON.stringify({label:address.label,recipientName:address.recipient_name,
    recipientPhone:address.recipient_phone,province:address.province,city:address.city,postalCode:address.postal_code,address:address.address});
  await env.DB.batch([
    env.DB.prepare("INSERT INTO orders (id,user_id,address_id,address_snapshot,details,customer_note,status,created_at,updated_at) VALUES (?,?,?,?,?,?,'pending',?,?)").bind(id,u.id,address.id,snap,details,note,stamp,stamp),
    env.DB.prepare("INSERT INTO order_status_history (id,order_id,status,note,actor_id,created_at) VALUES (?,?,'pending','',?,?)").bind(crypto.randomUUID(),id,u.id,stamp),
  ]);
  return reply({id,status:"pending"},201);
}
async function supportThreads(env,userId=null) {
  const q=userId?env.DB.prepare("SELECT * FROM support_threads WHERE user_id=? ORDER BY updated_at DESC LIMIT 100").bind(userId)
    :env.DB.prepare("SELECT t.*,u.username,u.first_name AS firstName,u.last_name AS lastName,u.phone FROM support_threads t JOIN users u ON u.id=t.user_id ORDER BY t.updated_at DESC LIMIT 100");
  const list=(await q.all()).results||[];
  if(!list.length) return list;
  const ids=list.map(x=>x.id), qs=ids.map(()=>"?").join(",");
  const msgs=(await env.DB.prepare(`SELECT m.*,u.username,u.role,u.first_name AS firstName FROM support_messages m JOIN users u ON u.id=m.sender_id WHERE m.thread_id IN (${qs}) ORDER BY m.created_at`).bind(...ids).all()).results||[];
  const grouped=new Map();
  for(const m of msgs) { if(!grouped.has(m.thread_id)) grouped.set(m.thread_id,[]); grouped.get(m.thread_id).push(m); }
  return list.map(t=>({...t,messages:grouped.get(t.id)||[]}));
}
async function createSupport(request,env,u) {
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات پیام خوانده نشد.");
  const subject=text(b.subject,120), message=text(b.message,3000);
  if(!subject||message.length<3) fail(400,"موضوع و متن پیام را وارد کنید.");
  const orderId=text(b.orderId,80)||null;
  if(orderId&&!await env.DB.prepare("SELECT id FROM orders WHERE id=? AND user_id=?").bind(orderId,u.id).first()) fail(404,"سفارش پیدا نشد.");
  const id=crypto.randomUUID(), stamp=time();
  await env.DB.batch([
    env.DB.prepare("INSERT INTO support_threads (id,user_id,order_id,subject,status,created_at,updated_at) VALUES (?,?,?,?,'open',?,?)").bind(id,u.id,orderId,subject,stamp,stamp),
    env.DB.prepare("INSERT INTO support_messages (id,thread_id,sender_id,body,created_at) VALUES (?,?,?,?,?)").bind(crypto.randomUUID(),id,u.id,message,stamp),
  ]);
  return reply({id},201);
}

function pct(v) { const n=Number(v); return Number.isInteger(n)&&n>=5&&n<=30?n:null; }
const webUrl = v => { if(!v) return true; try { return ["https:","http:"].includes(new URL(v).protocol); } catch { return false; } };
function productFields(b,partial=false) {
  const out={}, map={name:["name",180],category:["category",100],brand:["brand",100],description:["description",1000],image:["image",1000],source:["source",1000]};
  for(const [k,[col,max]] of Object.entries(map)) if(!partial||Object.hasOwn(b,k)) out[col]=text(b[k],max);
  for(const [k,col] of [["type","type"],["priceMode","price_mode"]]) if(!partial||Object.hasOwn(b,k)) out[col]=b[k];
  if(!partial||Object.hasOwn(b,"cartonCount")) out.carton_count=Math.max(1,Math.floor(Number(b.cartonCount)||1));
  if(!partial||Object.hasOwn(b,"minCartons")) out.min_cartons=Math.max(1,Math.floor(Number(b.minCartons)||1));
  if(!partial||Object.hasOwn(b,"basePrice")) out.base_price=b.basePrice==null||b.basePrice===""?null:Math.floor(Number(digits(b.basePrice)));
  if(!partial||Object.hasOwn(b,"marginPercent")) out.margin_percent=b.marginPercent==null||b.marginPercent===""?null:pct(b.marginPercent);
  if(!partial||Object.hasOwn(b,"isActive")) out.is_active=b.isActive?1:0;
  if((out.name!==undefined&&!out.name)||(out.category!==undefined&&!out.category)) fail(400,"نام کالا و گروه آن لازم است.");
  if(out.type!==undefined&&!["coffee","carton"].includes(out.type)) fail(400,"نوع کالا را انتخاب کنید.");
  if(out.price_mode!==undefined&&!["source","manual","quote"].includes(out.price_mode)) fail(400,"روش قیمت‌گذاری را انتخاب کنید.");
  if(out.base_price!==undefined&&out.base_price!==null&&(!Number.isFinite(out.base_price)||out.base_price<1)) fail(400,"قیمت پایه معتبر نیست.");
  if(out.margin_percent===null&&b.marginPercent!=null&&b.marginPercent!=="") fail(400,"درصد سود باید بین ۵ تا ۳۰ باشد.");
  if(out.image!==undefined&&!webUrl(out.image)) fail(400,"نشانی تصویر معتبر نیست.");
  if(out.source!==undefined&&!webUrl(out.source)) fail(400,"نشانی مرجع معتبر نیست.");
  if(out.price_mode==="manual"&&!(out.base_price>0)) fail(400,"قیمت پایه را وارد کنید.");
  return out;
}
async function adminProducts(env) {
  const [list,r]=await Promise.all([products(env,true),rules(env)]);
  return reply({products:list.filter(p=>!p.deleted_at).map(p=>({...catalogItem(p),isActive:Boolean(p.is_active),priceMode:p.price_mode,
    marginPercent:p.margin_percent==null?null:Number(p.margin_percent),effectiveMargin:margin(p,r)})),globalMargin:r.global});
}
async function productMutation(request,env,admin,id=null) {
  if(request.method==="GET") return adminProducts(env);
  if(request.method==="DELETE") {
    const old=await env.DB.prepare("SELECT * FROM products WHERE id=? AND deleted_at IS NULL").bind(id).first();
    if(!old) fail(404,"کالا پیدا نشد.");
    const stamp=time(); await env.DB.prepare("UPDATE products SET is_active=0,deleted_at=?,updated_at=? WHERE id=?").bind(stamp,stamp,id).run();
    await audit(env,admin,"product.archive","product",id,old,null); return reply({ok:true});
  }
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات فرم خوانده نشد.");
  const f=productFields(b,Boolean(id)), stamp=time();
  if(!id) {
    id=text(b.id,80)||crypto.randomUUID();
    await env.DB.prepare(`INSERT INTO products (id,name,category,brand,base_price,price_mode,carton_count,min_cartons,description,image,source,type,is_active,margin_percent,created_at,updated_at)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).bind(id,f.name,f.category,f.brand,f.base_price,f.price_mode,f.carton_count,f.min_cartons,f.description,f.image,f.source,f.type,f.is_active??1,f.margin_percent,stamp,stamp).run();
    await audit(env,admin,"product.create","product",id,null,f);
    return reply({id},201);
  }
  const old=await env.DB.prepare("SELECT * FROM products WHERE id=? AND deleted_at IS NULL").bind(id).first();
  if(!old) fail(404,"کالا پیدا نشد.");
  const entries=Object.entries(f); if(!entries.length) fail(400,"تغییری دریافت نشد.");
  const sql=entries.map(([k])=>k+"=?").join(",");
  await env.DB.prepare(`UPDATE products SET ${sql},updated_at=? WHERE id=?`).bind(...entries.map(x=>x[1]),stamp,id).run();
  const after=await env.DB.prepare("SELECT * FROM products WHERE id=?").bind(id).first();
  await audit(env,admin,"product.update","product",id,old,after); return reply({product:after});
}
async function pricing(request,env,admin) {
  if(request.method==="GET") {
    const r=await rules(env), c=(await env.DB.prepare("SELECT category,margin_percent AS marginPercent FROM category_margin_rules ORDER BY category").all()).results||[];
    return reply({globalMargin:r.global,categories:c});
  }
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات تنظیمات خوانده نشد.");
  const n=pct(b.marginPercent); if(n==null) fail(400,"درصد سود باید بین ۵ تا ۳۰ باشد.");
  const stamp=time();
  if(b.scope==="global") {
    const old=await env.DB.prepare("SELECT value FROM settings WHERE key='global_margin'").first();
    await env.DB.prepare("INSERT INTO settings(key,value,updated_at) VALUES('global_margin',?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at").bind(String(n),stamp).run();
    await audit(env,admin,"pricing.global","setting","global_margin",old,{marginPercent:n}); return reply({globalMargin:n});
  }
  if(b.scope==="category") {
    const cat=text(b.category,100); if(!cat) fail(400,"گروه کالا را انتخاب کنید.");
    const old=await env.DB.prepare("SELECT margin_percent FROM category_margin_rules WHERE category=?").bind(cat).first();
    await env.DB.prepare("INSERT INTO category_margin_rules(category,margin_percent,updated_at) VALUES(?,?,?) ON CONFLICT(category) DO UPDATE SET margin_percent=excluded.margin_percent,updated_at=excluded.updated_at").bind(cat,n,stamp).run();
    await audit(env,admin,"pricing.category","category",cat,old,{marginPercent:n}); return reply({ok:true});
  }
  fail(400,"نوع تنظیم قیمت معتبر نیست.");
}
async function changeOrder(request,env,admin,id) {
  const b=await bodyOf(request); if(!b) fail(400,"اطلاعات سفارش خوانده نشد.");
  if(!statuses.has(b.status)) fail(400,"وضعیت سفارش معتبر نیست.");
  const old=await env.DB.prepare("SELECT status FROM orders WHERE id=?").bind(id).first(); if(!old) fail(404,"سفارش پیدا نشد.");
  const note=text(b.adminNote,1200), stamp=time();
  await env.DB.batch([
    env.DB.prepare("UPDATE orders SET status=?,admin_note=?,updated_at=? WHERE id=?").bind(b.status,note,stamp,id),
    env.DB.prepare("INSERT INTO order_status_history(id,order_id,status,note,actor_id,created_at) VALUES(?,?,?,?,?,?)").bind(crypto.randomUUID(),id,b.status,note,admin.id,stamp),
  ]);
  await audit(env,admin,"order.status","order",id,old,{status:b.status,note}); return reply({ok:true});
}
async function replySupport(request,env,admin,id) {
  const b=await bodyOf(request); if(!b) fail(400,"متن پاسخ را وارد کنید.");
  const msg=text(b.message,3000); if(msg.length<2) fail(400,"متن پاسخ کوتاه است.");
  if(!await env.DB.prepare("SELECT id FROM support_threads WHERE id=?").bind(id).first()) fail(404,"گفت‌وگو پیدا نشد.");
  const stamp=time();
  await env.DB.batch([
    env.DB.prepare("INSERT INTO support_messages(id,thread_id,sender_id,body,created_at) VALUES(?,?,?,?,?)").bind(crypto.randomUUID(),id,admin.id,msg,stamp),
    env.DB.prepare("UPDATE support_threads SET status='answered',updated_at=? WHERE id=?").bind(stamp,id),
  ]);
  await audit(env,admin,"support.reply","support_thread",id,null,{status:"answered"}); return reply({ok:true});
}

export async function handleApi(request,env) {
  const path=new URL(request.url).pathname.replace(/\/$/,"")||"/", method=request.method.toUpperCase();
  try {
    if(!env.DB) fail(503,"پایگاه دادهٔ فروشگاه متصل نیست.");
    if(method!=="GET"&&method!=="HEAD"&&!sameOrigin(request)) fail(403,"درخواست نامعتبر است.");
    if(path==="/api/auth/register"&&method==="POST") return register(request,env);
    if(path==="/api/auth/login"&&method==="POST") return login(request,env);
    if(path==="/api/auth/logout"&&method==="POST") {
      const t=cookieToken(request); if(t) await env.DB.prepare("DELETE FROM sessions WHERE token_hash=?").bind(await hash(t)).run();
      return reply({ok:true},200,{"Set-Cookie":expiredCookie});
    }
    if(path==="/api/auth/me"&&method==="GET") return reply({user:await currentUser(request,env)});
    if(path==="/api/admin/bootstrap"&&method==="POST") return bootstrap(request,env);
    if(path==="/api/me/profile"&&method==="PATCH") return profile(request,env,await auth(request,env,"customer",false));
    if(path==="/api/me/addresses"&&["GET","POST"].includes(method)) return addresses(request,env,await auth(request,env),null);
    const am=path.match(/^\/api\/me\/addresses\/([^/]+)$/);
    if(am&&["PATCH","DELETE"].includes(method)) return addresses(request,env,await auth(request,env),decodeURIComponent(am[1]));
    if(path==="/api/me/orders"&&method==="GET") return reply({orders:await orders(env,(await auth(request,env)).id)});
    if(path==="/api/me/orders"&&method==="POST") return createOrder(request,env,await auth(request,env));
    if(path==="/api/me/support"&&method==="GET") return reply({threads:await supportThreads(env,(await auth(request,env)).id)});
    if(path==="/api/me/support"&&method==="POST") return createSupport(request,env,await auth(request,env));
    if(path==="/api/admin/products"&&["GET","POST"].includes(method)) return productMutation(request,env,await auth(request,env,"admin"),null);
    const pm=path.match(/^\/api\/admin\/products\/([^/]+)$/);
    if(pm&&["PATCH","DELETE"].includes(method)) return productMutation(request,env,await auth(request,env,"admin"),decodeURIComponent(pm[1]));
    if(path==="/api/admin/pricing"&&["GET","PUT"].includes(method)) return pricing(request,env,await auth(request,env,"admin"));
    if(path==="/api/admin/orders"&&method==="GET") { await auth(request,env,"admin"); return reply({orders:await orders(env)}); }
    const om=path.match(/^\/api\/admin\/orders\/([^/]+)$/);
    if(om&&method==="PATCH") return changeOrder(request,env,await auth(request,env,"admin"),decodeURIComponent(om[1]));
    if(path==="/api/admin/support"&&method==="GET") { await auth(request,env,"admin"); return reply({threads:await supportThreads(env)}); }
    const sm=path.match(/^\/api\/admin\/support\/([^/]+)$/);
    if(sm&&method==="POST") return replySupport(request,env,await auth(request,env,"admin"),decodeURIComponent(sm[1]));
    return reply({error:"مسیر پیدا نشد."},404);
  } catch(e) {
    if(e instanceof ApiError) return reply({error:e.message},e.status);
    console.error(JSON.stringify({event:"store_api_error",path}));
    return reply({error:"انجام درخواست ممکن نشد؛ دوباره تلاش کنید."},500);
  }
}
