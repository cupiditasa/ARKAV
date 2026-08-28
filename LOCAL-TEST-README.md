# ARKAV browser-test-v1

این پوشه یک نسخهٔ آزمایشی مستقل از پروژهٔ اصلی است و با `upload-ready` قاطی نمی‌شود.

## اجرای تست محلی

در همین پوشه اجرا کنید:

```powershell
npm.cmd install
npm.cmd run dev
```

سپس آدرس `http://127.0.0.1:4177` را باز کنید. برای تست خروجی production:

```powershell
npm.cmd run build
npm.cmd run preview -- --port 4178
```

## آپلود

پس از build، پوشهٔ `upload-ready` مخصوص همین نسخه ساخته می‌شود. فایل `index.html` ورودی GitHub Pages است؛
`NOVA-OPEN-ME.html` هم برای تست محلی نگه داشته شده است.

این نسخه از فونت‌های داخلی استفاده می‌کند و Google Fonts خارجی ندارد.
