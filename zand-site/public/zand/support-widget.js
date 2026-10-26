(() => {
  "use strict";
  const $=(selector,root=document)=>root.querySelector(selector);
  const key="zandSupportGuestV1",apiBase=location.hostname==="arkav.ir"?"/zand":"";
  const esc=value=>String(value??"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const stamp=value=>{const date=new Date(value||Date.now());return Number.isNaN(date.getTime())?"":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{dateStyle:"short",timeStyle:"short"}).format(date);};
  const token=()=>Array.from(crypto.getRandomValues(new Uint8Array(32))).map(byte=>byte.toString(16).padStart(2,"0")).join("");
  const readGuest=()=>{try{return JSON.parse(localStorage.getItem(key)||"null");}catch{return null;}};
  const saveGuest=value=>{try{localStorage.setItem(key,JSON.stringify(value));return true;}catch{return false;}};
  async function api(path,body,method="POST"){
    let response;
    try{response=await fetch(apiBase+path,{method,credentials:"include",cache:"no-store",headers:body===undefined?{"Accept":"application/json"}:{"Accept":"application/json","Content-Type":"application/json"},body:body===undefined?undefined:JSON.stringify(body)});}
    catch{throw new Error("ارتباط با سرور برقرار نشد.");}
    const data=await response.json().catch(()=>({}));
    if(!response.ok)throw new Error(data.error||"ارسال پیام انجام نشد.");
    return data;
  }
  const launcher=$("#zandSupportLauncher"),panel=$("#zandSupportPanel"),form=$("#zandSupportForm");
  const transcript=$("#zandSupportTranscript"),status=$("#zandSupportStatus"),guestFields=$("#zandSupportGuestFields");
  const nameInput=$("#zandSupportName"),phoneInput=$("#zandSupportPhone"),subjectInput=$("#zandSupportSubject"),messageInput=$("#zandSupportMessage");
  const picker=$("#zandSupportThreadPicker"),select=$("#zandSupportThreadSelect"),send=$("#zandSupportSend");
  if(!launcher||!panel||!form)return;
  let user=null,accountThreads=[],guestThread=null,selection="new",loading=false;
  let guest=readGuest()||{token:token(),firstName:"",phone:"",subject:"",cachedMessages:[],pending:[]};
  guest.token=/^[a-f0-9]{64}$/i.test(guest.token||"")?guest.token:token();
  guest.cachedMessages=Array.isArray(guest.cachedMessages)?guest.cachedMessages:[];
  guest.pending=Array.isArray(guest.pending)?guest.pending:[];
  nameInput.value=guest.firstName||"";
  phoneInput.value=guest.phone||"";
  function setStatus(message,kind=""){status.textContent=message||"";status.className="zand-support-status"+(kind?" "+kind:"");}
  function allThreads(){return [...(guestThread?[guestThread]:[]),...accountThreads];}
  function selectedThread(){if(selection==="guest")return guestThread;if(selection.startsWith("account:"))return accountThreads.find(t=>t.id===selection.slice(8))||null;return null;}
  function visibleMessages(thread){
    if(!thread)return [];
    const saved=thread.messages||[];
    if(thread.source!=="guest")return saved;
    const sent=new Set(saved.map(m=>m.clientMessageId).filter(Boolean));
    return [...saved,...guest.pending.filter(m=>!sent.has(m.clientMessageId))].sort((a,b)=>String(a.created_at||a.createdAt||"").localeCompare(String(b.created_at||b.createdAt||"")));
  }
  function renderTranscript(){
    const thread=selectedThread(),messages=visibleMessages(thread);
    transcript.innerHTML=!thread||!messages.length?'<div class="zand-support-welcome"><b>سلام، خوش آمدید</b>برای خرید عمده، پیگیری سفارش یا مشاورهٔ فروش پیام بگذارید.<small>کارشناسان بازرگانی زند پاسخ‌گوی شما هستند.</small></div>':
      messages.map(m=>'<article class="zand-support-bubble '+(m.role==="admin"?"is-admin":"")+(m.pending?" pending":"")+'"><strong>'+esc(m.role==="admin"?"پشتیبانی":(m.firstName||user?.firstName||"شما"))+'</strong><p>'+esc(m.body)+'</p><small>'+stamp(m.created_at||m.createdAt)+(m.pending?" · در صف ارسال":"")+'</small></article>').join("");
    transcript.scrollTop=transcript.scrollHeight;
    const isAccount=selection.startsWith("account:"),isGuest=selection==="guest"&&Boolean(guestThread),needsGuest=!user||!user.profileComplete;
    guestFields.hidden=!needsGuest||isAccount;
    nameInput.required=needsGuest&&!isAccount;phoneInput.required=needsGuest&&!isAccount;
    if(!needsGuest){nameInput.value=user?.firstName||"";phoneInput.value=user?.phone||"";}
    if(isGuest){subjectInput.value=guestThread.subject||guest.subject||"";subjectInput.disabled=true;subjectInput.required=false;}
    else if(isAccount){subjectInput.value=selectedThread()?.subject||"";subjectInput.disabled=true;subjectInput.required=false;}
    else{subjectInput.disabled=false;subjectInput.required=true;if(!subjectInput.value&&guest.subject)subjectInput.value=guest.subject;}
    picker.hidden=allThreads().length===0;
    $("#zandSupportNew").hidden=!user?.profileComplete;
    $("#zandSupportNote").textContent=user?.profileComplete?"گفت‌وگوهای حساب شما در پنل ذخیره می‌شوند؛ سابقهٔ مهمان همین مرورگر هم در دسترس است.":"پیام مهمان روی همین دستگاه نگه‌داری و برای پشتیبان ارسال می‌شود.";
    $(".zand-support-account").hidden=Boolean(user?.profileComplete);
  }
  function renderPicker(){
    const all=allThreads();
    select.innerHTML=all.map(t=>'<option value="'+(t.source==="guest"?"guest":"account:"+esc(t.id))+'">'+(t.source==="guest"?"گفت‌وگوی مهمان · ":"")+esc(t.subject||"پشتیبانی")+' · '+esc(t.status==="answered"?"پاسخ جدید":t.status==="closed"?"بسته":"باز")+'</option>').join("");
    if(user?.profileComplete)select.insertAdjacentHTML("afterbegin",'<option value="new">پیام جدید</option>');
    if(!all.length)select.innerHTML='<option value="new">پیام جدید</option>';
    const allowed=Array.from(select.options,option=>option.value);
    if(!allowed.includes(selection)){
      const latest=all.find(t=>t.status!=="closed")||all[0];
      selection=user?.profileComplete?(latest?(latest.source==="guest"?"guest":"account:"+latest.id):"new"):(guestThread?"guest":"new");
    }
    select.value=selection;renderTranscript();
  }
  async function loadGuestHistory(){
    if(!guest.token)return;
    try{
      const result=await api("/api/support/guest",{action:"history",token:guest.token});
      guestThread=result.thread;
      if(guestThread){guest.cachedMessages=guestThread.messages||[];guest.threadId=guestThread.id;guest.subject=guestThread.subject;guest.status=guestThread.status;guest.updated_at=guestThread.updated_at;}
      else if(guest.pending.length||guest.cachedMessages.length)guestThread={id:guest.threadId||"guest-local",source:"guest",subject:guest.subject||"گفت‌وگوی پشتیبانی",status:guest.status||"open",updated_at:guest.updated_at||new Date().toISOString(),messages:guest.cachedMessages,localOnly:true};
      saveGuest(guest);
    }catch{
      guestThread=guest.cachedMessages.length||guest.pending.length?{id:guest.threadId||"guest-local",source:"guest",subject:guest.subject||"گفت‌وگوی پشتیبانی",status:guest.status||"open",
        updated_at:guest.updated_at||new Date().toISOString(),messages:guest.cachedMessages,localOnly:true}:null;
    }
  }
  async function flushPending(){
    if(!guest.pending.length)return;
    let delivered=false;
    for(const pending of [...guest.pending]){
      try{
        const result=await api("/api/support/guest",{action:"send",token:guest.token,firstName:guest.firstName,phone:guest.phone,subject:guest.subject||"مشاوره و پشتیبانی",message:pending.body,clientMessageId:pending.clientMessageId});
        guest.pending=guest.pending.filter(item=>item.clientMessageId!==pending.clientMessageId);
        guest.cachedMessages=guest.cachedMessages.map(item=>item.clientMessageId===pending.clientMessageId?{...item,pending:false}:item);
        if(result.threadId)guest.threadId=result.threadId;saveGuest(guest);delivered=true;
      }catch{break;}
    }
    await loadGuestHistory();
    if(delivered&&!panel.hidden){selection="guest";renderPicker();setStatus("پیام ذخیره‌شده ارسال شد.","success");}
  }
  async function refreshState(){
    if(loading)return;loading=true;
    try{
      try{const auth=await api("/api/auth/me",undefined,"GET");user=auth.user?.profileComplete?auth.user:null;}catch{user=null;}
      accountThreads=[];
      if(user){try{const data=await api("/api/me/support",undefined,"GET");accountThreads=data.threads||[];}catch{accountThreads=[];}}
      await loadGuestHistory();await flushPending();renderPicker();
      if(user?.profileComplete){nameInput.value=user.firstName||"";phoneInput.value=user.phone||"";}
    }finally{loading=false;}
  }
  launcher.addEventListener("click",async()=>{panel.hidden=false;launcher.setAttribute("aria-expanded","true");await refreshState();messageInput.focus();});
  $("#zandSupportClose").addEventListener("click",()=>{panel.hidden=true;launcher.setAttribute("aria-expanded","false");launcher.focus();});
  document.addEventListener("keydown",event=>{if(event.key==="Escape"&&!panel.hidden){panel.hidden=true;launcher.setAttribute("aria-expanded","false");launcher.focus();}});
  select.addEventListener("change",()=>{selection=select.value;renderTranscript();});
  $("#zandSupportNew").addEventListener("click",()=>{selection="new";subjectInput.value="";renderPicker();subjectInput.focus();});
  document.querySelectorAll("[data-support-topic]").forEach(button=>button.addEventListener("click",()=>{
    if(user?.profileComplete){selection="new";subjectInput.disabled=false;subjectInput.value=button.dataset.supportTopic;renderPicker();subjectInput.focus();}
    else if(guestThread){selection="guest";renderPicker();setStatus("موضوع گفت‌وگوی قبلی حفظ شد؛ پیام تازه‌تان را بنویسید.");}
    else{selection="new";subjectInput.value=button.dataset.supportTopic;subjectInput.focus();}
  }));
  form.addEventListener("submit",async event=>{
    event.preventDefault();if(send.disabled)return;
    const message=messageInput.value.trim();if(message.length<3){setStatus("متن پیام را بنویسید.","error");messageInput.focus();return;}
    const active=selectedThread(),isGuest=selection==="guest"||(!user?.profileComplete&&!selection.startsWith("account:"));
    if(!active&&user?.profileComplete&&!subjectInput.value.trim()){setStatus("موضوع پیام را انتخاب یا وارد کنید.","error");subjectInput.focus();return;}
    if(isGuest){
      if(!user?.profileComplete){guest.firstName=nameInput.value.trim();guest.phone=phoneInput.value.trim();}
      else if(!guest.firstName||!guest.phone){guest.firstName=user.firstName||"";guest.phone=user.phone||"";}
      if(!guest.firstName||!guest.phone){setStatus("نام و شمارهٔ تماس را کامل کنید.","error");return;}
      guest.subject=guestThread?.subject||subjectInput.value.trim()||"مشاوره و پشتیبانی";
      const pending={clientMessageId:crypto.randomUUID(),body:message,role:"customer",firstName:guest.firstName,createdAt:new Date().toISOString(),pending:true};
      guest.pending.push(pending);guest.cachedMessages=[...guest.cachedMessages,pending].slice(-100);saveGuest(guest);
      guestThread=guestThread||{id:guest.threadId||"guest-local",source:"guest",subject:guest.subject,status:"open",updated_at:new Date().toISOString(),messages:[]};
      selection="guest";renderPicker();messageInput.value="";setStatus("پیام در صف ارسال قرار گرفت.","success");send.disabled=true;
      try{
        const result=await api("/api/support/guest",{action:"send",token:guest.token,firstName:guest.firstName,phone:guest.phone,subject:guest.subject,message,clientMessageId:pending.clientMessageId});
        guest.pending=guest.pending.filter(item=>item.clientMessageId!==pending.clientMessageId);
        guest.cachedMessages=guest.cachedMessages.map(item=>item.clientMessageId===pending.clientMessageId?{...item,pending:false}:item);
        if(result.threadId)guest.threadId=result.threadId;guest.updated_at=new Date().toISOString();saveGuest(guest);
        await loadGuestHistory();selection="guest";renderPicker();setStatus("پیام برای پشتیبانی ارسال شد.","success");
      }catch(error){setStatus("پیام روی همین دستگاه ذخیره شد؛ با اتصال دوباره ارسال می‌شود. "+error.message,"error");}
      finally{send.disabled=false;}
      return;
    }
    send.disabled=true;setStatus("در حال ارسال پیام…");
    try{
      if(selection.startsWith("account:"))await api("/api/me/support/"+encodeURIComponent(active.id),{message});
      else{const result=await api("/api/me/support",{subject:subjectInput.value.trim(),message});if(result.id)selection="account:"+result.id;}
      messageInput.value="";setStatus("پیام برای پشتیبانی ارسال شد.","success");
      const data=await api("/api/me/support",undefined,"GET");accountThreads=data.threads||[];renderPicker();
    }catch(error){setStatus(error.message,"error");}
    finally{send.disabled=false;}
  });
  window.addEventListener("online",()=>{void flushPending();});
  saveGuest(guest);
})();
