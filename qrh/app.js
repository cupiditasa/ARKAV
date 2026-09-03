const views = {
  library: document.getElementById('library-view'),
  support: document.getElementById('support-view'),
  license: document.getElementById('license-view'),
  install: document.getElementById('install-view')
};
const toast = document.getElementById('toast');
function showToast(message) {
  toast.textContent = message;
  toast.classList.remove('hidden');
  toast.classList.add('show');
  setTimeout(() => { toast.classList.add('hidden'); toast.classList.remove('show'); }, 2800);
}
function setView(name) {
  Object.entries(views).forEach(([key, el]) => el.classList.toggle('hidden', key !== name));
  document.querySelectorAll('.nav-item').forEach(btn => btn.classList.toggle('active', btn.dataset.view === name));
}
document.querySelectorAll('[data-view]').forEach(el => el.addEventListener('click', () => setView(el.dataset.view)));
document.getElementById('contact-btn').addEventListener('click', () => showToast('پیام شما ثبت شد؛ تا پایان روز کاری پاسخ می‌دهیم.'));
document.getElementById('buy-btn').addEventListener('click', () => {
  window.open('https://payping.net/d/Kwrq', '_blank', 'noopener,noreferrer');
});

const reader = document.getElementById('reader');
const range = document.getElementById('page-range');
const pageNum = document.getElementById('page-num');
const pageFootNum = document.getElementById('page-foot-num');
let page = 1;
function renderPage() {
  range.value = page;
  pageNum.textContent = page.toLocaleString('fa-IR');
  pageFootNum.textContent = page.toLocaleString('fa-IR');
}
document.getElementById('open-reader').addEventListener('click', () => {
  const pageShell = document.querySelector('.pdf-page');
  if (!pageShell.querySelector('iframe')) {
    pageShell.innerHTML = '<iframe title="نمایش نمونهٔ PDF کتاب" src="QRH_sample_100.pdf#toolbar=0&navpanes=0"></iframe>';
  }
  reader.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});
document.getElementById('close-reader').addEventListener('click', () => { reader.classList.add('hidden'); document.body.style.overflow = ''; });
document.getElementById('prev-page').addEventListener('click', () => { page = Math.max(1, page - 1); renderPage(); });
document.getElementById('next-page').addEventListener('click', () => { page = Math.min(100, page + 1); renderPage(); });
range.addEventListener('input', e => { page = Number(e.target.value); renderPage(); });
