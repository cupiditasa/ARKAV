(() => {
  "use strict";

  let pose = null;
  let target = null;
  let activeId = null;
  let frame = 0;
  let previousTime = 0;

  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
  const svgMarkup = '<svg class="liquid-menu" aria-hidden="true" focusable="false"><defs><linearGradient id="zand-liquid-bead" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="color-mix(in srgb,var(--liquid-tint) 76%,white)"/><stop offset=".52" stop-color="color-mix(in srgb,var(--liquid-tint) 92%,white)"/><stop offset="1" stop-color="color-mix(in srgb,var(--liquid-tint) 68%,var(--liquid-shade))"/></linearGradient><filter id="zand-liquid-shadow" x="-45%" y="-45%" width="190%" height="200%"><feDropShadow dx="0" dy="4" stdDeviation="3.5" flood-color="#1b3022" flood-opacity=".26"/></filter></defs><path class="liquid-track"/><path class="liquid-socket-fill"/><path class="liquid-contour"/><ellipse class="liquid-floor"/><ellipse class="liquid-bead" fill="url(#zand-liquid-bead)" filter="url(#zand-liquid-shadow)"/><ellipse class="liquid-glint"/></svg>';

  function ensureSvg(root) {
    let svg = root.querySelector(".liquid-menu");
    if (!svg) {
      root.insertAdjacentHTML("afterbegin", svgMarkup);
      svg = root.querySelector(".liquid-menu");
    }
    return svg;
  }

  function measure(root, button, horizontal) {
    const icon = button.querySelector(".icon");
    const iconWidth = icon ? icon.offsetWidth : 48;
    const iconHeight = icon ? icon.offsetHeight : 48;
    const iconLeft = button.offsetLeft + (icon ? icon.offsetLeft : 0);
    const iconTop = button.offsetTop + (icon ? icon.offsetTop : 0);
    const centerX = iconLeft + iconWidth / 2;
    const centerY = iconTop + iconHeight / 2 - (button.classList.contains("active") ? 4 : 0);
    const radius = Math.min(iconWidth / 2 + 5, iconHeight / 2 + 5, button.offsetHeight / 2 - 2, 34);
    return { x: centerX, y: centerY, r: Math.max(20, radius), horizontal };
  }

  function fmt(value) {
    return Number(value.toFixed(2));
  }

  function point(center, u, p, along, across) {
    return [fmt(center.x + u[0] * along + p[0] * across), fmt(center.y + u[1] * along + p[1] * across)];
  }

  function pair(p) {
    return p[0] + " " + p[1];
  }

  function makeSocket(center, radius, halfRail, horizontal, outward, velocity) {
    const u = horizontal ? [1, 0] : [0, 1];
    const p = horizontal ? [0, -1] : [outward, 0];
    const cross = u[0] * p[1] - u[1] * p[0];
    const R = radius + halfRail;
    const reach = Math.sqrt(Math.max(0, R * R - halfRail * halfRail));
    const angle = Math.asin(halfRail / R);
    const arcControl = (4 / 3) * R * Math.tan((Math.PI - 2 * angle) / 4);
    const amount = Math.abs(velocity);
    const baseShoulder = radius * 0.36;
    const trail = baseShoulder * (1 + 0.45 * amount);
    const lead = baseShoulder * (1 - 0.22 * amount);
    const before = velocity >= 0 ? trail : lead;
    const after = velocity >= 0 ? lead : trail;

    const start = point(center, u, p, -(reach + before), halfRail);
    const left = point(center, u, p, -reach, halfRail);
    const right = point(center, u, p, reach, halfRail);
    const end = point(center, u, p, reach + after, halfRail);
    const tangentIn = [u[0] * halfRail + p[0] * reach, u[1] * halfRail + p[1] * reach];
    const tangentOut = [u[0] * halfRail - p[0] * reach, u[1] * halfRail - p[1] * reach];
    const tangentLength = Math.hypot(tangentIn[0], tangentIn[1]);
    const tin = [tangentIn[0] / tangentLength, tangentIn[1] / tangentLength];
    const tout = [tangentOut[0] / tangentLength, tangentOut[1] / tangentLength];
    const c1 = point(center, u, p, -(reach + before * 0.45), halfRail);
    const c2 = [fmt(left[0] - tin[0] * arcControl), fmt(left[1] - tin[1] * arcControl)];
    const c3 = [fmt(right[0] + tout[0] * arcControl), fmt(right[1] + tout[1] * arcControl)];
    const c4 = point(center, u, p, reach + after * 0.45, halfRail);
    const arc = "A " + fmt(R) + " " + fmt(R) + " 0 0 " + (cross < 0 ? "1" : "0") + " " + pair(right);
    const open = "M " + pair(start) + " C " + pair(c1) + " " + pair(c2) + " " + pair(left) + " " + arc + " C " + pair(c3) + " " + pair(c4) + " " + pair(end);
    return { open, closed: open + " L " + pair(start) + " Z" };
  }

  function drawTrack(root, svg, buttons, selected, motionVelocity) {
    const width = Math.max(root.scrollWidth, root.clientWidth, 1);
    const height = Math.max(root.scrollHeight, root.clientHeight, 1);
    svg.setAttribute("viewBox", "0 0 " + width + " " + height);
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);

    const centers = buttons.map(button => {
      const icon = button.querySelector(".icon");
      const left = button.offsetLeft + (icon ? icon.offsetLeft : 0);
      const top = button.offsetTop + (icon ? icon.offsetTop : 0);
      return [left + (icon ? icon.offsetWidth : 48) / 2, top + (icon ? icon.offsetHeight : 48) / 2];
    });
    const horizontal = centers.length > 1 && Math.abs(centers[1][0] - centers[0][0]) > Math.abs(centers[1][1] - centers[0][1]);
    svg.querySelector(".liquid-track").setAttribute("d", centers.map((center, index) => (index ? "L " : "M ") + fmt(center[0]) + " " + fmt(center[1])).join(" "));
    const tint = selected.style.getPropertyValue("--tint") || "#d8f080";
    const shade = selected.style.getPropertyValue("--shade") || "#47613b";
    svg.style.setProperty("--liquid-tint", tint);
    svg.style.setProperty("--liquid-shade", shade);
    return { horizontal, width, height };
  }

  function paint(root, svg, buttons, selected, speedX, speedY) {
    const measureInfo = drawTrack(root, svg, buttons, selected, 0);
    const horizontal = measureInfo.horizontal;
    const icon = selected.querySelector(".icon");
    const iconLeft = selected.offsetLeft + (icon ? icon.offsetLeft : 0);
    const iconTop = selected.offsetTop + (icon ? icon.offsetTop : 0);
    const center = {
      x: pose.x,
      y: pose.y,
      r: target.r
    };
    const alongSpeed = horizontal ? speedX : speedY;
    const lean = clamp(alongSpeed / 1050, -1, 1);
    const iconCenterX = iconLeft + (icon ? icon.offsetWidth : 48) / 2;
    const outward = iconCenterX >= measureInfo.width / 2 ? 1 : -1;
    const socket = makeSocket(center, center.r, 2.2, horizontal, outward, lean);
    svg.querySelector(".liquid-socket-fill").setAttribute("d", socket.closed);
    svg.querySelector(".liquid-contour").setAttribute("d", socket.open);

    const bead = svg.querySelector(".liquid-bead");
    const glint = svg.querySelector(".liquid-glint");
    const floor = svg.querySelector(".liquid-floor");
    const speed = Math.hypot(speedX, speedY);
    const stretch = 1 + clamp(speed / 1050, 0, 1) * 0.15;
    const rx = center.r * (horizontal ? stretch : 1 / stretch);
    const ry = center.r * (horizontal ? 1 / stretch : stretch);
    bead.setAttribute("cx", fmt(center.x));
    bead.setAttribute("cy", fmt(center.y));
    bead.setAttribute("rx", fmt(rx));
    bead.setAttribute("ry", fmt(ry));
    glint.setAttribute("cx", fmt(center.x - center.r * 0.12));
    glint.setAttribute("cy", fmt(center.y - center.r * 0.39));
    glint.setAttribute("rx", fmt(center.r * 0.38));
    glint.setAttribute("ry", fmt(center.r * 0.15));
    floor.setAttribute("cx", fmt(center.x));
    floor.setAttribute("cy", fmt(center.y + center.r * 0.75));
    floor.setAttribute("rx", fmt(center.r * 0.63));
    floor.setAttribute("ry", fmt(center.r * 0.11));
    floor.style.opacity = String(0.2 + clamp(speed / 1000, 0, 1) * 0.2);
  }

  function stopFrame() {
    if (frame) cancelAnimationFrame(frame);
    frame = 0;
  }

  function tick(now) {
    if (!pose || !target) {
      frame = 0;
      return;
    }
    const root = document.querySelector("#cats");
    const selected = root && Array.from(root.querySelectorAll(".cat")).find(button => button.dataset.cat === activeId);
    if (!root || !selected) {
      frame = 0;
      return;
    }

    const dt = clamp((now - previousTime) / 1000, 0.001, 0.032);
    previousTime = now;
    const omega = 19;
    const ax = (target.x - pose.x) * omega * omega - 2 * omega * pose.vx;
    const ay = (target.y - pose.y) * omega * omega - 2 * omega * pose.vy;
    pose.vx += ax * dt;
    pose.vy += ay * dt;
    pose.x += pose.vx * dt;
    pose.y += pose.vy * dt;

    if (Math.hypot(target.x - pose.x, target.y - pose.y) < 0.16 && Math.hypot(pose.vx, pose.vy) < 2.5) {
      pose.x = target.x;
      pose.y = target.y;
      pose.vx = 0;
      pose.vy = 0;
      paint(root, root.querySelector(".liquid-menu"), Array.from(root.querySelectorAll(".cat")), selected, 0, 0);
      frame = 0;
      return;
    }

    paint(root, root.querySelector(".liquid-menu"), Array.from(root.querySelectorAll(".cat")), selected, pose.vx, pose.vy);
    frame = requestAnimationFrame(tick);
  }

  function update(id, instant = false) {
    const root = document.querySelector("#cats");
    if (!root) return;
    const buttons = Array.from(root.querySelectorAll(".cat"));
    const selected = buttons.find(button => button.dataset.cat === id);
    if (!selected) return;

    const svg = ensureSvg(root);
    const info = drawTrack(root, svg, buttons, selected, 0);
    const measured = measure(root, selected, info.horizontal);
    const color = selected.style.getPropertyValue("--tint") || "#d8f080";
    target = { x: measured.x, y: measured.y, r: measured.r, horizontal: info.horizontal, color };
    activeId = id;

    if (!pose || instant || reduceMotion()) {
      stopFrame();
      pose = { x: target.x, y: target.y, vx: 0, vy: 0 };
      paint(root, svg, buttons, selected, 0, 0);
      return;
    }

    if (!frame) {
      previousTime = performance.now();
      frame = requestAnimationFrame(tick);
    }
  }

  function refresh() {
    if (activeId) update(activeId, true);
  }

  window.updateZandLiquidMenu = update;
  window.addEventListener("resize", refresh, { passive: true });
  window.addEventListener("load", refresh, { once: true });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
  if (document.fonts && document.fonts.addEventListener) document.fonts.addEventListener("loadingdone", refresh);
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(refresh);
    const observeRoot = () => {
      const root = document.querySelector("#cats");
      if (root && observerTarget !== root) {
        if (observerTarget) observer.unobserve(observerTarget);
        observerTarget = root;
        observer.observe(root);
      }
    };
    let observerTarget = null;
    document.addEventListener("DOMContentLoaded", observeRoot, { once: true });
    observeRoot();
  }
})();