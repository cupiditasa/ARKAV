(() => {
  const panel = document.querySelector("#categories");
  const layout = document.querySelector(".catalog-layout");
  const collapse = document.querySelector("#categoryPanelToggle");
  const drawerTrigger = document.querySelector("#categoryDrawerTrigger");
  const overlay = document.querySelector("#categoryDrawerOverlay");
  if (!panel || !layout) return;

  const setCollapsed = (collapsed, persist = true) => {
    panel.classList.toggle("is-collapsed", collapsed);
    layout.classList.toggle("is-collapsed", collapsed);
    if (collapse) {
      collapse.setAttribute("aria-expanded", String(!collapsed));
      collapse.setAttribute("aria-label", collapsed ? "بازکردن پنل دسته‌بندی" : "کوچک‌کردن پنل دسته‌بندی");
      collapse.title = collapsed ? "بازکردن پنل دسته‌بندی" : "کوچک‌کردن پنل دسته‌بندی";
    }
    if (persist) {
      try { localStorage.setItem("zand-category-minimized", collapsed ? "1" : "0"); } catch (_) {}
    }
  };

  try {
    if (matchMedia("(min-width: 741px)").matches) {
      setCollapsed(localStorage.getItem("zand-category-minimized") === "1");
    }
  } catch (_) {}

  collapse?.addEventListener("click", () => setCollapsed(!panel.classList.contains("is-collapsed")));

  const setDrawerOpen = (open) => {
    panel.classList.toggle("drawer-open", open);
    overlay?.classList.toggle("is-visible", open);
    document.body.classList.toggle("category-drawer-open", open);
    drawerTrigger?.setAttribute("aria-expanded", String(open));
    const triggerText = drawerTrigger?.querySelector("span");
    const triggerIcon = drawerTrigger?.querySelector("use");
    if (triggerText) triggerText.textContent = open ? "\u0628\u0633\u062a\u0646" : "\u062f\u0633\u062a\u0647\u200c\u0647\u0627";
    if (triggerIcon) triggerIcon.setAttribute("href", "./cupiditas-dimensional-icons.svg#" + (open ? "cu3-close" : "cu3-menu"));
    drawerTrigger?.setAttribute("aria-label", open ? "بستن دسته‌بندی‌ها" : "بازکردن دسته‌بندی‌ها");
  };

  drawerTrigger?.addEventListener("click", () => setDrawerOpen(!panel.classList.contains("drawer-open")));
  overlay?.addEventListener("click", () => setDrawerOpen(false));
  panel.addEventListener("click", (event) => {
    if (event.target.closest(".cat") && matchMedia("(max-width: 740px)").matches) setDrawerOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && panel.classList.contains("drawer-open")) setDrawerOpen(false);
  });
  window.addEventListener("resize", () => {
    if (matchMedia("(max-width: 740px)").matches) {
      setCollapsed(false, false);
      setDrawerOpen(false);
    } else {
      let saved = false;
      try { saved = localStorage.getItem("zand-category-minimized") === "1"; } catch (_) {}
      setCollapsed(saved, false);
      setDrawerOpen(false);
    }
  }, { passive: true });

  window.updateZandCategoryTheme = (tint, shade) => {
    const products = document.querySelector("#products");
    if (!products) return;
    document.documentElement.style.setProperty("--selected-accent", tint);
    document.documentElement.style.setProperty("--selected-shade", shade);
    products.style.setProperty("--category-accent", tint);
    products.style.setProperty("--category-shade", shade);
    products.dataset.categoryTheme = tint;
  };
  setDrawerOpen(false);
})();
