(() => {
  "use strict";
  const $ = (s, root=document) => root.querySelector(s);
  const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));
  const esc = v => String(v ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  const fa = v => String(v ?? "").replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
  const date = v => { const d=new Date(v); return Number.isNaN(d.getTime())?"":new Intl.DateTimeFormat("fa-IR-u-ca-persian",{dateStyle:"medium",timeStyle:"short"}).format(d); };
  const statusNames = {pending:"در انتظار بررسی",confirmed:"تأیید شده",preparing:"در حال آماده‌سازی",shipped:"ارسال شده",delivered:"تحویل شده",cancelled:"لغو شده",open:"باز",answered:"پاسخ داده شد",closed:"بسته"};
  const setStatus = (el,msg,kind="") => { if(el){el.textContent=msg||"";el.className="status"+(kind?" "+kind:"");} };
  async function api(path, data, method) {
    const options={method:method|| (data===undefined?"GET":"POST"),credentials:"same-origin",cache:"no-store",headers:{Accept:"application/json"}};
    if(data!==undefined){options.headers["Content-Type"]="application/json";options.body=JSON.stringify(data);}
    let response;
    try { response=await fetch(path,options); } catch { throw new Error("ارتباط با سرور برقرار نشد."); }
    const result=await response.json().catch(()=>({}));
    if(!response.ok) throw new Error(result.error||"درخواست انجام نشد.");
    return result;
  }
  function values(form) { return Object.fromEntries(new FormData(form).entries()); }
  function show(el,on=true){el?.classList.toggle("hidden",!on);}
  function optionsMargin(select, selected) {
    select.innerHTML='<option value="">پیروی از گروه / عمومی</option>'+Array.from({length:26},(_,i)=>i+5).map(n=>'<option value="'+n+'">'+fa(n)+'٪</option>').join("");
    if(selected!=null) select.value=String(selected);
  }

  async function accountPage() {
    const authView=$("#auth-view"), profileView=$("#profile-view"), customerView=$("#customer-view");
    const loginForm=$("#login-form"), registerForm=$("#register-form"), profileForm=$("#profile-form");
    let user=null, addressRows=[], orderRows=[];
    const loginSubmit=loginForm.querySelector('button[type="submit"]'), registerSubmit=registerForm.querySelector('button[type="submit"]'), profileSubmit=profileForm.querySelector('button[type="submit"]');
    const checkPhone=value=>{let p=String(value||"").replace(/[۰-۹]/g,d=>String("۰۱۲۳۴۵۶۷۸۹".indexOf(d))).replace(/[٠-٩]/g,d=>String("٠١٢٣٤٥٦٧٨٩".indexOf(d))).replace(/[\s()-]/g,"");if(p.startsWith("+98"))p="0"+p.slice(3);else if(p.startsWith("0098"))p="0"+p.slice(4);else if(p.startsWith("98"))p="0"+p.slice(2);return /^09\d{9}$/.test(p);};
    const updateButtons=()=>{loginSubmit.disabled=!(loginForm.elements.username.value.trim()&&loginForm.elements.password.value.length>=10);registerSubmit.disabled=!( /^[A-Za-z0-9._-]{3,32}$/.test(registerForm.elements.username.value.trim())&&registerForm.elements.password.value.length>=10&&registerForm.elements.password.value===registerForm.elements.passwordConfirm.value);profileSubmit.disabled=!(profileForm.elements.firstName.value.trim()&&profileForm.elements.lastName.value.trim()&&checkPhone(profileForm.elements.phone.value));};
    [loginForm,registerForm,profileForm].forEach(form=>form.addEventListener("input",updateButtons));updateButtons();
    function showAccount() {
      show(authView,!user); show(profileView,Boolean(user&&!user.profileComplete)); show(customerView,Boolean(user&&user.profileComplete));
      if(user?.profileComplete) {
        $("#customer-name").textContent=[user.firstName,user.lastName].filter(Boolean).join(" ")||user.username;
        $("#customer-identity").textContent="@"+user.username+" · "+user.phone;
      }
    }
    async function loadAddresses() {
      const r=await api("/api/me/addresses"); addressRows=r.addresses||[];
      $("#addresses-list").innerHTML=addressRows.length?addressRows.map(a=>'<article class="address-box"><div class="row"><div><strong>'+esc(a.label)+(a.is_default?' · پیش‌فرض':'')+'</strong><p>'+esc(a.province)+'، '+esc(a.city)+' · '+esc(a.address)+'<br>'+esc(a.recipient_name)+' · '+esc(a.recipient_phone)+' · '+esc(a.postal_code)+'</p></div><div class="product-actions"><button class="button small" data-edit-address="'+esc(a.id)+'" type="button">ویرایش</button><button class="button danger small" data-delete-address="'+esc(a.id)+'" type="button">حذف</button></div></div></article>').join(""):'<p class="empty">هنوز آدرسی ثبت نکرده‌اید.</p>';
      const select=$("#order-address"), chosen=select.value;
      select.innerHTML='<option value="">انتخاب آدرس ارسال</option>'+addressRows.map(a=>'<option value="'+esc(a.id)+'">'+esc(a.label)+' · '+esc(a.city)+(a.is_default?' · پیش‌فرض':'')+'</option>').join("");
      if(addressRows.some(a=>a.id===chosen)) select.value=chosen;
      else if(addressRows.length) select.value=(addressRows.find(a=>a.is_default)||addressRows[0]).id;
    }
    function renderOrders() {
      $("#orders-list").innerHTML=orderRows.length?orderRows.map(o=>'<article class="order-box"><div class="row"><div><strong>سفارش '+esc(o.id.slice(0,8))+'</strong><p>'+esc(o.details)+'</p><p class="meta">'+date(o.created_at)+' · '+esc(JSON.parse(o.address_snapshot||"{}").city||"")+'</p></div><span class="tag">'+esc(statusNames[o.status]||o.status)+'</span></div>'+(o.admin_note?'<p class="message admin">'+esc(o.admin_note)+'</p>':'')+'<div class="meta">'+(o.history||[]).map(h=>esc(statusNames[h.status]||h.status)+' · '+date(h.created_at)).join("  ←  ")+'</div></article>').join(""):'<p class="empty">هنوز سفارشی ثبت نشده است.</p>';
      const select=$("#support-order"), previous=select.value;
      select.innerHTML='<option value="">بدون سفارش</option>'+orderRows.map(o=>'<option value="'+esc(o.id)+'">سفارش '+esc(o.id.slice(0,8))+' · '+esc(statusNames[o.status]||o.status)+'</option>').join("");
      if(orderRows.some(o=>o.id===previous)) select.value=previous;
    }
    function renderThreads(threads) {
      $("#threads-list").innerHTML=threads.length?threads.map(t=>'<article class="thread-box"><div class="row"><div><strong>'+esc(t.subject)+'</strong><p class="meta">'+date(t.updated_at)+' · '+esc(statusNames[t.status]||t.status)+'</p></div><span class="tag">'+(t.order_id?'مرتبط با سفارش':'پشتیبانی')+'</span></div>'+(t.messages||[]).map(m=>'<div class="message '+(m.role==="admin"?"admin":"")+'"><strong>'+esc(m.role==="admin"?"پشتیبانی":(m.firstName||"شما"))+'</strong><br>'+esc(m.body)+'<div class="meta">'+date(m.created_at)+'</div></div>').join("")+'</article>').join(""):'<p class="empty">پیامی ثبت نشده است.</p>';
    }
    async function refreshCustomer() {
      try {
        const [a,o,s]=await Promise.all([api("/api/me/addresses"),api("/api/me/orders"),api("/api/me/support")]);
        addressRows=a.addresses||[]; orderRows=o.orders||[];
        await loadAddresses(); renderOrders(); renderThreads(s.threads||[]);
      } catch(e) { setStatus($("#order-status"),e.message,"error"); }
    }
    $$(".tabs [data-auth-tab]").forEach(button=>button.addEventListener("click",()=>{
      $$(".tabs [data-auth-tab]").forEach(b=>b.classList.toggle("active",b===button));
      show(loginForm,button.dataset.authTab==="login"); show(registerForm,button.dataset.authTab==="register");
    }));
    loginForm.addEventListener("submit",async e=>{
      e.preventDefault();setStatus($("#login-status"),"در حال ورود…");
      try { const r=await api("/api/auth/login",values(loginForm)); user=r.user; showAccount(); if(user.profileComplete) await refreshCustomer(); }
      catch(err){setStatus($("#login-status"),err.message,"error");}
    });
    registerForm.addEventListener("submit",async e=>{
      e.preventDefault();setStatus($("#register-status"),"در حال ساخت حساب…");
      try { const r=await api("/api/auth/register",values(registerForm)); user=r.user; showAccount(); profileForm.elements.firstName.focus(); }
      catch(err){setStatus($("#register-status"),err.message,"error");}
    });
    profileForm.addEventListener("submit",async e=>{
      e.preventDefault();setStatus($("#profile-status"),"در حال ذخیره…");
      try { const r=await api("/api/me/profile",values(profileForm),"PATCH"); user=r.user; showAccount(); await refreshCustomer(); }
      catch(err){setStatus($("#profile-status"),err.message,"error");}
    });
    $("#logout").addEventListener("click",async()=>{await api("/api/auth/logout",{});user=null;showAccount();});
    $$(".tabs [data-section]").forEach(button=>button.addEventListener("click",()=>{
      $$(".tabs [data-section]").forEach(b=>b.classList.toggle("active",b===button));
      ["orders","addresses","support"].forEach(k=>show($("#section-"+k),button.dataset.section===k));
    }));
    $("#refresh-orders").addEventListener("click",refreshCustomer);
    $("#address-form").addEventListener("submit",async e=>{
      e.preventDefault();const form=e.currentTarget,b=values(form),id=b.id;delete b.id;b.isDefault=form.elements.isDefault.checked;
      setStatus($("#address-status"),"در حال ذخیره…");
      try { await api("/api/me/addresses"+(id?"/"+encodeURIComponent(id):""),b,id?"PATCH":"POST"); form.reset();form.elements.id.value="";$("#address-form-title").textContent="ثبت آدرس جدید";show($("#cancel-address-edit"),false);setStatus($("#address-status"),"آدرس ذخیره شد.","success");await loadAddresses(); }
      catch(err){setStatus($("#address-status"),err.message,"error");}
    });
    $("#cancel-address-edit").addEventListener("click",()=>{$("#address-form").reset();$("#address-form").elements.id.value="";$("#address-form-title").textContent="ثبت آدرس جدید";show($("#cancel-address-edit"),false);});
    $("#addresses-list").addEventListener("click",async e=>{
      const del=e.target.closest("[data-delete-address]"), edit=e.target.closest("[data-edit-address]");
      if(del){try{await api("/api/me/addresses/"+encodeURIComponent(del.dataset.deleteAddress),undefined,"DELETE");await loadAddresses();}catch(err){setStatus($("#address-status"),err.message,"error");}}
      if(edit){const a=addressRows.find(x=>x.id===edit.dataset.editAddress);if(!a)return;const f=$("#address-form");f.elements.id.value=a.id;f.elements.label.value=a.label;f.elements.recipientName.value=a.recipient_name;f.elements.recipientPhone.value=a.recipient_phone;f.elements.province.value=a.province;f.elements.city.value=a.city;f.elements.postalCode.value=a.postal_code;f.elements.address.value=a.address;f.elements.isDefault.checked=Boolean(a.is_default);$("#address-form-title").textContent="ویرایش آدرس";show($("#cancel-address-edit"),true);f.scrollIntoView({behavior:"smooth",block:"center"});}
    });
    $("#order-form").addEventListener("submit",async e=>{
      e.preventDefault();setStatus($("#order-status"),"در حال ثبت درخواست…");
      try{await api("/api/me/orders",values(e.currentTarget));e.currentTarget.elements.details.value="";e.currentTarget.elements.customerNote.value="";setStatus($("#order-status"),"درخواست سفارش ثبت شد.","success");const r=await api("/api/me/orders");orderRows=r.orders||[];renderOrders();}
      catch(err){setStatus($("#order-status"),err.message,"error");}
    });
    $("#support-form").addEventListener("submit",async e=>{
      e.preventDefault();setStatus($("#support-status"),"در حال ارسال…");
      try{await api("/api/me/support",values(e.currentTarget));e.currentTarget.reset();setStatus($("#support-status"),"پیام برای پشتیبانی ارسال شد.","success");const r=await api("/api/me/support");renderThreads(r.threads||[]);}
      catch(err){setStatus($("#support-status"),err.message,"error");}
    });
    try { const r=await api("/api/auth/me"); user=r.user; showAccount(); if(user?.profileComplete) await refreshCustomer(); }
    catch { showAccount(); }
  }

  async function adminPage() {
    const authView=$("#admin-auth"), appView=$("#admin-view");
    function showAdmin(user) {
      show(authView,!user);show(appView,Boolean(user));
      if(user){$("#admin-name").textContent=[user.firstName,user.lastName].filter(Boolean).join(" ")||"مدیر";$("#admin-identity").textContent="@"+user.username;}
    }
    function setTab(key) {
      $$(".tabs [data-admin-section]").forEach(b=>b.classList.toggle("active",b.dataset.adminSection===key));
      ["products","pricing","orders","support"].forEach(k=>show($("#admin-"+k),k===key));
    }
    function renderProducts(list) {
      $("#products-list").innerHTML=list.length?list.map(p=>'<article class="product-row"><div><strong>'+esc(p.name)+'</strong><div class="meta">'+esc(p.category)+' · '+esc(p.brand)+' · '+(p.isActive?'فعال':'متوقف')+'</div></div><div><span class="tag">سود '+fa(p.effectiveMargin)+'٪</span><div class="meta">'+esc(p.priceMode==='source'?'مرجع روزانه':p.priceMode==='manual'?'قیمت دستی':'استعلام')+'</div></div><div class="product-actions"><button class="button small" data-edit-product="'+esc(p.id)+'" type="button">ویرایش</button><button class="button small soft" data-toggle-product="'+esc(p.id)+'" data-active="'+p.isActive+'" type="button">'+(p.isActive?'خاموش':'روشن')+'</button><button class="button danger small" data-archive-product="'+esc(p.id)+'" type="button">حذف</button></div></article>').join(""):'<p class="empty">محصولی ثبت نشده است.</p>';
      const categories=[...new Set(list.map(p=>p.category))].sort((a,b)=>a.localeCompare(b,"fa"));
      const catSelect=$("#category-margin-form").elements.category, old=catSelect.value;
      catSelect.innerHTML='<option value="">انتخاب گروه</option>'+categories.map(c=>'<option>'+esc(c)+'</option>').join("");if(categories.includes(old))catSelect.value=old;
      optionsMargin($("#product-form").elements.marginPercent,null);
      optionsMargin($("#global-margin-form").elements.marginPercent);
      optionsMargin($("#category-margin-form").elements.marginPercent);
    }
    function renderAdminOrders(list) {
      $("#admin-orders-list").innerHTML=list.length?list.map(o=>'<article class="order-box"><div class="row"><div><strong>'+esc([o.firstName,o.lastName].filter(Boolean).join(" ")||o.username)+' · '+esc(o.phone)+'</strong><p>'+esc(o.details)+'</p><p class="meta">سفارش '+esc(o.id)+' · '+date(o.created_at)+' · '+esc((JSON.parse(o.address_snapshot||"{}").city||""))+'</p></div><span class="tag">'+esc(statusNames[o.status]||o.status)+'</span></div><form class="order-admin-form form-grid" data-order="'+esc(o.id)+'"><label class="field">وضعیت<select name="status">'+Object.entries(statusNames).filter(([k])=>statusesAdmin.has(k)).map(([k,v])=>'<option value="'+k+'" '+(o.status===k?'selected':'')+'>'+v+'</option>').join("")+'</select></label><label class="field">پاسخ به مشتری<input name="adminNote" maxlength="1200" value="'+esc(o.admin_note||"")+'"></label><div class="field full actions"><button class="button soft" type="submit">ذخیرهٔ وضعیت</button></div></form></article>').join(""):'<p class="empty">سفارشی ثبت نشده است.</p>';
    }
    function renderAdminSupport(list) {
      $("#admin-support-list").innerHTML=list.length?list.map(t=>'<article class="thread-box"><div class="row"><div><strong>'+esc([t.firstName,t.lastName].filter(Boolean).join(" ")||t.username)+' · '+esc(t.phone)+'</strong><p>'+esc(t.subject)+(t.order_id?' · سفارش '+esc(t.order_id.slice(0,8)):'')+'</p></div><span class="tag">'+esc(statusNames[t.status]||t.status)+'</span></div>'+(t.messages||[]).map(m=>'<div class="message '+(m.role==="admin"?"admin":"")+'"><strong>'+esc(m.role==="admin"?"مدیریت":([m.firstName,m.username].filter(Boolean).join(" ")))+'</strong><br>'+esc(m.body)+'<div class="meta">'+date(m.created_at)+'</div></div>').join("")+'<form class="support-reply form-grid" data-thread="'+esc(t.id)+'"><label class="field full">پاسخ<textarea name="message" maxlength="3000" required></textarea></label><div class="field full actions"><button class="button soft" type="submit">ارسال پاسخ</button></div></form></article>').join(""):'<p class="empty">پیام پشتیبانی وجود ندارد.</p>';
    }
    async function reload() {
      setStatus($("#admin-status"),"در حال دریافت اطلاعات…");
      try {
        const [p,pr,o,s]=await Promise.all([api("/api/admin/products"),api("/api/admin/pricing"),api("/api/admin/orders"),api("/api/admin/support")]);
        renderProducts(p.products||[]);$("#global-margin-form").elements.marginPercent.value=String(pr.globalMargin||10);
        renderAdminOrders(o.orders||[]);renderAdminSupport(s.threads||[]);setStatus($("#admin-status"),"اطلاعات به‌روز شد.","success");
      } catch(e){setStatus($("#admin-status"),e.message,"error");}
    }
    $$(".tabs [data-admin-auth]").forEach(b=>b.addEventListener("click",()=>{
      $$(".tabs [data-admin-auth]").forEach(x=>x.classList.toggle("active",x===b));
      show($("#admin-login-form"),b.dataset.adminAuth==="login");show($("#admin-setup-form"),b.dataset.adminAuth==="setup");
    }));
    $("#admin-login-form").addEventListener("submit",async e=>{
      e.preventDefault();setStatus($("#admin-login-status"),"در حال ورود…");
      try{const r=await api("/api/auth/login",values(e.currentTarget));if(r.user.role!=="admin"){await api("/api/auth/logout",{});throw new Error("این حساب دسترسی مدیر ندارد.");}showAdmin(r.user);await reload();}
      catch(err){setStatus($("#admin-login-status"),err.message,"error");}
    });
    $("#admin-setup-form").addEventListener("submit",async e=>{
      e.preventDefault();setStatus($("#admin-setup-status"),"در حال ساخت مدیر…");
      try{const r=await api("/api/admin/bootstrap",values(e.currentTarget));showAdmin(r.user);await reload();}
      catch(err){setStatus($("#admin-setup-status"),err.message,"error");}
    });
    $("#admin-logout").addEventListener("click",async()=>{await api("/api/auth/logout",{});showAdmin(null);});
    $$(".tabs [data-admin-section]").forEach(b=>b.addEventListener("click",()=>setTab(b.dataset.adminSection)));
    $("#reload-admin").addEventListener("click",reload);
    $("#product-form").addEventListener("submit",async e=>{
      e.preventDefault();const form=e.currentTarget,b=values(form),id=b.id;delete b.id;b.isActive=form.elements.isActive.checked;b.basePrice=b.basePrice||null;b.marginPercent=b.marginPercent||null;
      setStatus($("#product-status"),"در حال ذخیره…");
      try{await api("/api/admin/products"+(id?"/"+encodeURIComponent(id):""),b,id?"PATCH":"POST");form.reset();form.elements.id.value="";form.elements.isActive.checked=true;$("#product-form-title").textContent="افزودن کالا";show($("#cancel-product-edit"),false);setStatus($("#product-status"),"کالا ذخیره شد.","success");await reload();}
      catch(err){setStatus($("#product-status"),err.message,"error");}
    });
    $("#cancel-product-edit").addEventListener("click",()=>{$("#product-form").reset();$("#product-form").elements.id.value="";$("#product-form-title").textContent="افزودن کالا";show($("#cancel-product-edit"),false);});
    $("#products-list").addEventListener("click",async e=>{
      const edit=e.target.closest("[data-edit-product]"),toggle=e.target.closest("[data-toggle-product]"),archive=e.target.closest("[data-archive-product]");
      const productsList=(await api("/api/admin/products")).products||[];
      if(edit){const p=productsList.find(x=>x.id===edit.dataset.editProduct);if(!p)return;const f=$("#product-form");for(const k of ["name","category","brand","type","priceMode","basePrice","cartonCount","minCartons","description","image","source","marginPercent"])f.elements[k].value=p[k]??"";f.elements.id.value=p.id;f.elements.isActive.checked=p.isActive;$("#product-form-title").textContent="ویرایش کالا";show($("#cancel-product-edit"),true);f.scrollIntoView({behavior:"smooth",block:"start"});}
      if(toggle){try{await api("/api/admin/products/"+encodeURIComponent(toggle.dataset.toggleProduct),{isActive:toggle.dataset.active!=="true"},"PATCH");await reload();}catch(err){setStatus($("#admin-status"),err.message,"error");}}
      if(archive&&confirm("این کالا بایگانی و از فروشگاه پنهان شود؟")){try{await api("/api/admin/products/"+encodeURIComponent(archive.dataset.archiveProduct),undefined,"DELETE");await reload();}catch(err){setStatus($("#admin-status"),err.message,"error");}}
    });
    $("#global-margin-form").addEventListener("submit",async e=>{
      e.preventDefault();setStatus($("#global-margin-status"),"در حال ذخیره…");
      try{await api("/api/admin/pricing",{scope:"global",marginPercent:e.currentTarget.elements.marginPercent.value},"PUT");setStatus($("#global-margin-status"),"سود عمومی ذخیره شد.","success");await reload();}
      catch(err){setStatus($("#global-margin-status"),err.message,"error");}
    });
    $("#category-margin-form").addEventListener("submit",async e=>{
      e.preventDefault();setStatus($("#category-margin-status"),"در حال ذخیره…");
      try{await api("/api/admin/pricing",{scope:"category",category:e.currentTarget.elements.category.value,marginPercent:e.currentTarget.elements.marginPercent.value},"PUT");setStatus($("#category-margin-status"),"قانون گروه ذخیره شد.","success");await reload();}
      catch(err){setStatus($("#category-margin-status"),err.message,"error");}
    });
    $("#admin-orders-list").addEventListener("submit",async e=>{
      const form=e.target.closest(".order-admin-form");if(!form)return;e.preventDefault();
      try{await api("/api/admin/orders/"+encodeURIComponent(form.dataset.order),values(form),"PATCH");await reload();}
      catch(err){setStatus($("#admin-status"),err.message,"error");}
    });
    $("#admin-support-list").addEventListener("submit",async e=>{
      const form=e.target.closest(".support-reply");if(!form)return;e.preventDefault();
      try{await api("/api/admin/support/"+encodeURIComponent(form.dataset.thread),values(form));await reload();}
      catch(err){setStatus($("#admin-status"),err.message,"error");}
    });
    const statusesAdmin=new Set(["pending","confirmed","preparing","shipped","delivered","cancelled"]);
    try{const r=await api("/api/auth/me");if(r.user?.role==="admin"){showAdmin(r.user);await reload();}else showAdmin(null);}
    catch{showAdmin(null);}
  }
  if(document.body.dataset.panel==="admin") adminPage(); else accountPage();
})();
