const views = {
  library: document.getElementById('library-view'),
  support: document.getElementById('support-view'),
  license: document.getElementById('license-view'),
  install: document.getElementById('install-view')
};
const toast = document.getElementById('toast');
const chatEndpoint = String(window.ARKAV_CHAT_ENDPOINT || document.querySelector('meta[name="arkav-chat-endpoint"]')?.content || '').trim();
const chatMessages = document.getElementById('qrh-chat-messages');
const chatForm = document.getElementById('qrh-chat-form');
const chatInput = document.getElementById('qrh-chat-input');
const chatShell = document.getElementById('qrh-chat');
const chatStatus = document.getElementById('qrh-chat-status');

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  setTimeout(() => { toast.classList.add('hidden'); toast.classList.remove('show'); }, 2800);
}

function setView(name) {
  Object.entries(views).forEach(([key, el]) => el?.classList.toggle('hidden', key !== name));
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === name));
}

function appendChatMessage(message, role) {
  if (!chatMessages) return;
  const bubble = document.createElement('div');
  bubble.className = `qrh-chat-message ${role}`;
  bubble.textContent = message;
  chatMessages.appendChild(bubble);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function localArkavReply(message) {
  const text = message.toLowerCase();
  if (text.includes('خرید') || text.includes('قیمت') || text.includes('لایسنس') || text.includes('پرداخت')) {
    return 'برای خرید لایسنس کامل QRH روی بخش «خرید و فعال‌سازی» بزنید؛ پرداخت از طریق PayPing انجام می‌شود و سپس به همین صفحه برمی‌گردید.';
  }
  if (text.includes('فعال') || text.includes('ورود') || text.includes('دسترسی') || text.includes('رمز')) {
    return 'برای فعال‌سازی، بعد از خرید کد لایسنس را در بخش «فعال‌سازی» وارد کنید. اگر کد را دریافت نکرده‌اید، شمارهٔ پرداخت را برای پشتیبانی بفرستید.';
  }
  if (text.includes('مطالعه') || text.includes('خواندن') || text.includes('pdf') || text.includes('پی‌دی‌اف')) {
    return 'از بخش «کتابخانه» می‌توانید پیش‌نمایش را باز کنید. نسخهٔ کامل بعد از فعال‌سازی در دسترس شما قرار می‌گیرد.';
  }
  if (text.includes('راهنما') || text.includes('چطور') || text.includes('چگونه')) {
    return 'از منوی سمت راست بین کتابخانه، پشتیبانی، دسترسی کامل و فعال‌سازی جابه‌جا شوید. هرجا گیر کردید، همین‌جا سؤال کنید.';
  }
  return 'پیامتان را دریافت کردم. دربارهٔ خرید، فعال‌سازی، ورود یا مطالعهٔ QRH سؤال کنید تا راهنمایی‌تان کنم.';
}

async function askArkavSupport(message) {
  const cleanMessage = String(message || '').trim();
  if (!cleanMessage) return;
  appendChatMessage(cleanMessage, 'user');
  if (chatShell) chatShell.classList.add('is-thinking');
  if (chatStatus) chatStatus.textContent = 'THINKING';
  try {
    let answer = '';
    if (chatEndpoint) {
      const response = await fetch(chatEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: cleanMessage, scene: 'inner-core', project: 'arkav', source: 'qrh-support' })
      });
      if (!response.ok) throw new Error(`Chat request failed: ${response.status}`);
      const data = await response.json();
      answer = String(data.answer || data.reply || data.message || data.output_text || '').trim();
      if (!answer) throw new Error('Empty chat response');
    } else {
      await new Promise(resolve => setTimeout(resolve, 380));
      answer = localArkavReply(cleanMessage);
    }
    appendChatMessage(answer, 'bot');
  } catch (error) {
    appendChatMessage('ارتباط با سرویس هوش مصنوعی برقرار نشد؛ اما می‌توانم دربارهٔ خرید، فعال‌سازی و مطالعهٔ QRH راهنمایی‌تان کنم.', 'bot');
  } finally {
    if (chatShell) chatShell.classList.remove('is-thinking');
    if (chatStatus) chatStatus.textContent = 'LISTENING';
  }
}

function openSupportChat() {
  setView('support');
  chatShell?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  chatInput?.focus();
}

document.querySelectorAll('[data-view]').forEach(el => el.addEventListener('click', () => setView(el.dataset.view)));
document.getElementById('contact-btn')?.addEventListener('click', openSupportChat);
document.querySelectorAll('[data-support-action]').forEach(button => button.addEventListener('click', () => {
  const action = button.dataset.supportAction;
  openSupportChat();
  if (action === 'guide') askArkavSupport('چطور از کتاب QRH استفاده کنم؟');
  if (action === 'faq') askArkavSupport('سؤالات متداول درباره QRH چیست؟');
}));
chatForm?.addEventListener('submit', event => {
  event.preventDefault();
  const message = chatInput?.value.trim();
  if (!message) return;
  chatInput.value = '';
  askArkavSupport(message);
});

document.getElementById('buy-btn')?.addEventListener('click', () => {
  window.open('https://payping.net/d/Kwrq', '_blank', 'noopener,noreferrer');
});

const reader = document.getElementById('reader');
const range = document.getElementById('page-range');
const pageNum = document.getElementById('page-num');
const pageFootNum = document.getElementById('page-foot-num');
let page = 1;
function renderPage() {
  if (range) range.value = page;
  if (pageNum) pageNum.textContent = page.toLocaleString('fa-IR');
  if (pageFootNum) pageFootNum.textContent = page.toLocaleString('fa-IR');
}
document.getElementById('open-reader')?.addEventListener('click', () => {
  const pageShell = document.querySelector('.pdf-page');
  if (pageShell && !pageShell.querySelector('iframe')) {
    pageShell.innerHTML = '<iframe title="نمایش نمونهٔ PDF کتاب" src="QRH_sample_100.pdf#toolbar=0&navpanes=0"></iframe>';
  }
  reader?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});
document.getElementById('close-reader')?.addEventListener('click', () => { reader?.classList.add('hidden'); document.body.style.overflow = ''; });
document.getElementById('prev-page')?.addEventListener('click', () => { page = Math.max(1, page - 1); renderPage(); });
document.getElementById('next-page')?.addEventListener('click', () => { page = Math.min(100, page + 1); renderPage(); });
range?.addEventListener('input', e => { page = Number(e.target.value); renderPage(); });
