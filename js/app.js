/**
 * ROJDEV // MARCOS MARTÍNEZ — INTERACTIVE ARCHITECTURE & PARALLAX ENGINE
 * - Interactive 3D Topographic & Node Field Canvas
 * - GSAP + ScrollTrigger + Lenis Smooth Scroll + Native Fallbacks
 * - Interactive CLI Terminal + Command Palette (Ctrl+K) + <dialog> Blueprints
 * - Modern Web Guidance compliant: contentvisibilityautostatechange,
 *   <meta name="color-scheme"> two-state toggle, & IntersectionObserver fallbacks
 */

(function () {
  "use strict";

  const DATA = window.ROJDEV_DATA;
  let currentLang = localStorage.getItem("rojdev-lang") || "es";
  let currentFilter = "all";
  let activeJobIndex = 0;
  let activeTierIndex = 0;
  let scrollVelocity = 0;

  /* ========================================================================
     1. BOOT PRELOADER SEQUENCE
     ======================================================================== */
  function initPreloader() {
    const preloader = document.getElementById("preloader");
    const counterEl = document.getElementById("preloader-counter");
    const barEl = document.getElementById("preloader-bar");
    if (!preloader) return;

    let progress = 0;
    const start = performance.now();
    const duration = 1150;

    function tick(now) {
      const elapsed = now - start;
      progress = Math.min(100, Math.round((elapsed / duration) * 100));
      if (counterEl) counterEl.textContent = String(progress).padStart(3, "0");
      if (barEl) barEl.style.width = `${progress}%`;

      if (progress < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          preloader.classList.add("is-loaded");
          setTimeout(() => preloader.setAttribute("aria-hidden", "true"), 900);
        }, 140);
      }
    }
    requestAnimationFrame(tick);
  }

  /* ========================================================================
     2. THEME TOGGLE (Modern Web Guidance `dark-mode-toggle` exact pattern)
     ======================================================================== */
  function initThemeToggle() {
    const meta = document.querySelector('meta[name="color-scheme"]');
    const btn = document.getElementById("theme-toggle-btn");
    if (!meta || !btn) return;

    function getSystemScheme() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function getRenderedScheme() {
      const stored = localStorage.getItem("color-scheme");
      if (stored === "dark" || stored === "light") return stored;
      return getSystemScheme();
    }

    btn.addEventListener("click", () => {
      const rendered = getRenderedScheme();
      const target = rendered === "dark" ? "light" : "dark";
      const sys = getSystemScheme();

      try {
        if (target !== sys) {
          localStorage.setItem("color-scheme", target);
          meta.content = target;
        } else {
          localStorage.removeItem("color-scheme");
          meta.content = "light dark";
        }
      } catch (_) {
        meta.content = target;
      }
      drawSkillRadar();
    });

    window.addEventListener("storage", (e) => {
      if (e.key === "color-scheme") {
        meta.content = e.newValue ?? "light dark";
        drawSkillRadar();
      }
    });
  }

  /* ========================================================================
     3. INTERACTIVE 3D TOPOGRAPHIC & NODE NETWORK CANVAS (PARALLAX DEPTH)
     ======================================================================== */
  function initTopologyCanvas() {
    const canvas = document.getElementById("webgl-topology-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = width * 0.5;
    let mouseY = height * 0.5;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;
    let scrollY = window.scrollY;
    let isRunning = true;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const NODE_COUNT = window.innerWidth < 768 ? 38 : 72;
    const nodes = Array.from({ length: NODE_COUNT }, (_, i) => ({
      x: (Math.random() - 0.5) * width * 1.5,
      y: (Math.random() - 0.5) * height * 2.2,
      z: Math.random() * 900 + 100,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2 + 1,
      isAccent: i % 5 === 0
    }));

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });

    window.addEventListener("mousemove", (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    }, { passive: true });

    window.addEventListener("scroll", () => {
      scrollY = window.scrollY;
    }, { passive: true });

    document.addEventListener("visibilitychange", () => {
      isRunning = !document.hidden;
      if (isRunning && !prefersReducedMotion) requestAnimationFrame(render);
    });

    function render() {
      if (!isRunning) return;
      ctx.clearRect(0, 0, width, height);

      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      const cx = width * 0.5 + (mouseX - width * 0.5) * 0.08;
      const cy = height * 0.5 + (mouseY - height * 0.5) * 0.08;
      const fov = 520;

      const projected = [];

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          n.z -= 0.4 + Math.min(Math.abs(scrollVelocity) * 0.08, 4.5);
          if (n.z < 60) n.z = 980;
          if (n.x > width) n.x = -width;
          if (n.x < -width) n.x = width;
          if (n.y > height) n.y = -height;
          if (n.y < -height) n.y = height;
        }

        const parallaxY = n.y - (scrollY * 0.18) % height;
        const scale = fov / (fov + n.z);
        const px = cx + n.x * scale;
        const py = cy + parallaxY * scale;

        projected.push({
          px,
          py,
          scale,
          alpha: Math.max(0.08, Math.min(0.75, (1000 - n.z) / 950)),
          radius: n.radius * scale * 1.4,
          isAccent: n.isAccent
        });
      }

      // Draw architectural connections
      for (let i = 0; i < projected.length; i++) {
        const a = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const b = projected[j];
          const dx = a.px - b.px;
          const dy = a.py - b.py;
          const dist = Math.hypot(dx, dy);
          if (dist < 145) {
            const lineAlpha = (1 - dist / 145) * 0.16 * Math.min(a.alpha, b.alpha);
            ctx.strokeStyle = a.isAccent
              ? `rgba(255, 59, 29, ${lineAlpha * 1.6})`
              : `rgba(16, 185, 129, ${lineAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(a.px, a.py);
            ctx.lineTo(b.px, b.py);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.fillStyle = p.isAccent
          ? `rgba(255, 59, 29, ${p.alpha})`
          : `rgba(16, 185, 129, ${p.alpha * 0.85})`;
        ctx.beginPath();
        ctx.arc(p.px, p.py, Math.max(1, p.radius), 0, Math.PI * 2);
        ctx.fill();
      }

      if (!prefersReducedMotion) {
        requestAnimationFrame(render);
      }
    }

    render();
  }

  /* ========================================================================
     4. CUSTOM MAGNETIC CURSOR & CARD SPOTLIGHT
     ======================================================================== */
  function initCustomCursor() {
    const dot = document.getElementById("cursor-dot");
    const ring = document.getElementById("cursor-ring");
    const label = document.getElementById("cursor-label");
    if (!dot || !ring || window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    function animateCursor() {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    document.addEventListener("mouseover", (e) => {
      const interactive = e.target.closest("[data-cursor]");
      if (interactive) {
        document.body.classList.add("cursor-hover");
        if (label) label.textContent = interactive.getAttribute("data-cursor") || "EXPLORE";
      }
    });

    document.addEventListener("mouseout", (e) => {
      const interactive = e.target.closest("[data-cursor]");
      if (interactive) {
        document.body.classList.remove("cursor-hover");
      }
    });

    // Spotlight coordinates for bento cards
    document.addEventListener("mousemove", (e) => {
      const card = e.target.closest(".bento-project-card");
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      }
    }, { passive: true });
  }

  /* ========================================================================
     5. RENDER DYNAMIC SECTIONS & BILINGUAL CONTENT (ES / EN)
     ======================================================================== */
  function renderAllContent() {
    const t = DATA.i18n[currentLang];
    document.documentElement.lang = currentLang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const path = el.getAttribute("data-i18n").split(".");
      let val = t;
      for (const k of path) {
        if (val && k in val) val = val[k];
      }
      if (typeof val === "string") el.textContent = val;
    });

    const cliInput = document.getElementById("cli-input");
    if (cliInput) cliInput.placeholder = t.hero.terminal.placeholder;

    const langLabel = document.getElementById("lang-toggle-label");
    if (langLabel) langLabel.textContent = currentLang.toUpperCase();

    renderHeroMetrics(t);
    renderMarquee(t);
    renderArchitectureSection(t);
    renderExperienceSection(t);
    renderHorizontalShowcase(t);
    renderArchiveGrid(t);
    renderArsenalSection(t);
  }

  function renderHeroMetrics(t) {
    const container = document.getElementById("hero-metrics-grid");
    if (!container) return;
    container.innerHTML = t.hero.metrics
      .map(
        (m) => `
      <div class="metric-item">
        <span class="metric-value">${m.value}</span>
        <span class="metric-label">${m.label}</span>
        <span class="metric-sub">${m.sub}</span>
      </div>
    `
      )
      .join("");
  }

  function renderMarquee(t) {
    const track = document.getElementById("marquee-track");
    if (!track) return;
    const items = [...t.marquee, ...t.marquee];
    track.innerHTML = items
      .map(
        (item) => `
      <div class="marquee-item">
        <span>${item}</span>
        <span class="marquee-sep">✦</span>
      </div>
    `
      )
      .join("");
  }

  function renderArchitectureSection(t) {
    const listEl = document.getElementById("arch-tiers-list");
    const stackEl = document.getElementById("iso-stack");
    if (!listEl || !stackEl) return;

    stackEl.innerHTML = t.arch.tiers
      .map(
        (tier, idx) => `
      <div class="iso-plate ${idx === activeTierIndex ? "is-active" : ""}" data-tier="${idx}" data-cursor="TIER 0${4 - idx}">
        <span class="iso-plate-code">${tier.tier}</span>
        <strong class="iso-plate-title">${tier.name.split("·")[0].trim()}</strong>
        <span class="iso-plate-sub">${tier.metric}</span>
      </div>
    `
      )
      .join("");

    listEl.innerHTML = t.arch.tiers
      .map(
        (tier, idx) => `
      <article class="arch-tier-card scroll-reveal-item ${idx === activeTierIndex ? "is-active" : ""}" data-tier-card="${idx}" data-cursor="INSPECT">
        <div class="arch-tier-top">
          <span class="arch-tier-code">${tier.tier}</span>
          <span class="arch-tier-metric">${tier.metric}</span>
        </div>
        <h3 class="arch-tier-name">${tier.name}</h3>
        <p class="arch-tier-summary">${tier.summary}</p>
        <div class="arch-tier-specs">
          ${tier.specs.map((s) => `<span class="spec-chip">${s}</span>`).join("")}
        </div>
      </article>
    `
      )
      .join("");

    const setActiveTier = (idx) => {
      activeTierIndex = idx;
      document.querySelectorAll(".iso-plate").forEach((el, i) => el.classList.toggle("is-active", i === idx));
      document.querySelectorAll(".arch-tier-card").forEach((el, i) => el.classList.toggle("is-active", i === idx));
    };

    stackEl.querySelectorAll(".iso-plate").forEach((plate) => {
      plate.addEventListener("mouseenter", () => setActiveTier(Number(plate.dataset.tier)));
      plate.addEventListener("click", () => setActiveTier(Number(plate.dataset.tier)));
    });

    listEl.querySelectorAll(".arch-tier-card").forEach((card) => {
      card.addEventListener("mouseenter", () => setActiveTier(Number(card.dataset.tierCard)));
      card.addEventListener("click", () => setActiveTier(Number(card.dataset.tierCard)));
    });
  }

  function renderExperienceSection(t) {
    const dossiersEl = document.getElementById("exp-dossiers-column");
    const navDotsEl = document.getElementById("exp-hud-nav-dots");
    if (!dossiersEl || !navDotsEl) return;

    navDotsEl.innerHTML = t.experience.jobs
      .map(
        (job, idx) => `
      <button type="button" class="exp-step-btn ${idx === activeJobIndex ? "is-active" : ""}" data-exp-jump="${idx}">
        <span>${job.index} // ${job.company.split("(")[0].trim()}</span>
        <span>→</span>
      </button>
    `
      )
      .join("");

    dossiersEl.innerHTML = t.experience.jobs
      .map(
        (job, idx) => `
      <article id="job-${job.id}" class="exp-dossier-card scroll-reveal-item ${idx === activeJobIndex ? "is-active" : ""}" data-job-index="${idx}">
        <div class="dossier-top-meta">
          <span class="dossier-index-badge">CHAPTER ${job.index} · ${job.status}</span>
          <span class="dossier-period-pill">${job.period} · ${job.location}</span>
        </div>
        <h3 class="dossier-role-title">${job.role}</h3>
        <div class="dossier-company-row">@ ${job.company}</div>
        <p class="dossier-summary">${job.summary}</p>

        <div class="dossier-blueprint">
          <div class="dossier-blueprint-title">${t.experience.blueprintLabel}: ${job.blueprint.title}</div>
          <div class="blueprint-nodes-flow">
            ${job.blueprint.nodes
              .map(
                (node, nIdx) => `
              <span class="bp-node">${node}</span>
              ${nIdx < job.blueprint.nodes.length - 1 ? '<span class="bp-arrow">→</span>' : ""}
            `
              )
              .join("")}
          </div>
        </div>

        <ul class="dossier-bullets">
          ${job.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>

        <div class="dossier-tech-cloud">
          ${job.tech.map((item) => `<span class="spec-chip">${item}</span>`).join("")}
        </div>
      </article>
    `
      )
      .join("");

    updateExperienceHud(activeJobIndex);

    navDotsEl.querySelectorAll("[data-exp-jump]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-exp-jump"));
        const targetJob = t.experience.jobs[idx];
        const card = document.getElementById(`job-${targetJob.id}`);
        if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-job-index"));
            if (!Number.isNaN(idx)) {
              activeJobIndex = idx;
              updateExperienceHud(idx);
            }
          }
        });
      },
      { threshold: 0.45 }
    );

    dossiersEl.querySelectorAll(".exp-dossier-card").forEach((c) => observer.observe(c));
  }

  function updateExperienceHud(idx) {
    const t = DATA.i18n[currentLang];
    const job = t.experience.jobs[idx] || t.experience.jobs[0];
    const numEl = document.getElementById("exp-hud-num");
    const compEl = document.getElementById("exp-hud-company");
    const roleEl = document.getElementById("exp-hud-role");
    const scoreEl = document.getElementById("exp-hud-score");
    const fillEl = document.getElementById("exp-hud-fill");
    const textEl = document.getElementById("exp-hud-impact-text");

    if (numEl) numEl.textContent = job.index;
    if (compEl) compEl.textContent = job.company;
    if (roleEl) roleEl.textContent = job.role;
    if (scoreEl) scoreEl.textContent = job.impactScore;
    if (fillEl) fillEl.style.width = job.impactScore;
    if (textEl) textEl.textContent = job.impactText;

    document.querySelectorAll(".exp-dossier-card").forEach((el, i) => el.classList.toggle("is-active", i === idx));
    document.querySelectorAll(".exp-step-btn").forEach((el, i) => el.classList.toggle("is-active", i === idx));
  }

  function renderHorizontalShowcase(t) {
    const track = document.getElementById("horizontal-showcase-track");
    if (!track) return;
    const featured = DATA.projects.filter((p) => p.featured);

    track.innerHTML = featured
      .map((p) => {
        const loc = p[currentLang];
        const repoActionHtml =
          !p.isPrivate && p.repoUrl
            ? `<a href="${p.repoUrl}" target="_blank" rel="noopener noreferrer" class="hud-pill-btn" data-cursor="GITHUB">
                <span>${t.showcase.sourceBtn} ↗</span>
              </a>`
            : `<span class="hud-pill-btn" style="opacity:0.75;cursor:default;">
                <span>${t.showcase.privateBadge}</span>
              </span>`;

        return `
        <article class="showcase-monolith-card" data-project-id="${p.id}">
          <div class="showcase-visual-banner">
            <div class="showcase-visual-grid"></div>
            <div class="showcase-visual-glow" style="background: ${p.accent}"></div>
            <div class="showcase-banner-top">
              <span class="showcase-sys-code">${p.code} // ${p.id.toUpperCase()}</span>
              <span class="showcase-year">${p.year}</span>
            </div>
            <div class="showcase-diagram-flow">
              ${p.diagram
                .map(
                  (node, i) => `
                <div class="diagram-step-box">
                  <span>NODE 0${i + 1}</span>
                  <strong>${node}</strong>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
          <div class="showcase-card-body">
            <span class="showcase-type-label">${loc.type}</span>
            <h3 class="showcase-title">${loc.title}</h3>
            <p class="showcase-desc">${loc.description}</p>
            <div class="showcase-tech-row">
              ${p.tech.map((tech) => `<span class="spec-chip">${tech}</span>`).join("")}
            </div>
            <div class="showcase-actions">
              <button type="button" class="hud-pill-btn" data-open-modal="${p.id}" data-cursor="BLUEPRINT">
                <span>⬡ ${t.showcase.inspectBtn}</span>
              </button>
              ${repoActionHtml}
              ${
                p.liveUrl
                  ? `<a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="hud-pill-btn" data-cursor="LIVE">
                      <span>${t.showcase.demoBtn} ↗</span>
                    </a>`
                  : ""
              }
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  function renderArchiveGrid(t) {
    const grid = document.getElementById("archive-bento-grid");
    if (!grid) return;

    const filtered =
      currentFilter === "all"
        ? DATA.projects
        : DATA.projects.filter((p) => p.category === currentFilter);

    grid.innerHTML = filtered
      .map((p) => {
        const loc = p[currentLang];
        const statusBadge =
          !p.isPrivate && p.repoUrl
            ? `<span style="color:var(--accent-emerald);">${t.archive.publicLabel}</span>`
            : `<span style="color:var(--text-muted);">${t.archive.privateLabel}</span>`;

        return `
        <article class="bento-project-card scroll-reveal-item" data-open-modal="${p.id}" data-cursor="BLUEPRINT">
          <div>
            <div class="bento-top-bar">
              <span class="bento-code">${p.code} // ${p.year}</span>
              <span class="bento-type">${loc.type}</span>
            </div>
            <h3 class="bento-title">${loc.title}</h3>
            <p class="bento-tagline">${loc.tagline}</p>
          </div>
          <div class="bento-footer">
            <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">
              ${p.tech
                .slice(0, 5)
                .map((item) => `<span class="spec-chip">${item}</span>`)
                .join("")}
            </div>
            <div class="bento-links-row">
              <span class="bento-blueprint-trigger">⬡ ${t.archive.viewBlueprint} →</span>
              ${statusBadge}
            </div>
          </div>
        </article>
      `;
      })
      .join("");
  }

  function renderArsenalSection(t) {
    const container = document.getElementById("arsenal-modules-grid");
    if (!container) return;

    container.innerHTML = t.arsenal.categories
      .map(
        (cat) => `
      <article class="arsenal-module-card scroll-reveal-item">
        <span class="module-code">${cat.code}</span>
        <h3 class="module-title">${cat.name}</h3>
        <p class="module-desc">${cat.desc}</p>
        <div class="skill-bars-list">
          ${cat.items
            .map(
              (s) => `
            <div>
              <div class="skill-bar-top">
                <span class="skill-name">${s.name}</span>
                <span class="skill-detail">${s.detail} · ${s.level}%</span>
              </div>
              <div class="skill-track">
                <div class="skill-fill" style="--skill-pct: ${s.level}%"></div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </article>
    `
      )
      .join("");

    drawSkillRadar();
  }

  /* ========================================================================
     6. SKILL RADAR CANVAS + CONTENT-VISIBILITY LIFECYCLE (Modern Web Guidance)
     ======================================================================== */
  let radarAngle = 0;
  let radarRunning = true;

  function drawSkillRadar() {
    const canvas = document.getElementById("skill-radar-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const size = 300;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const maxR = 100;
    const axes = [
      { label: "Odoo 16–19", val: 0.97 },
      { label: "Backend/DDD", val: 0.95 },
      { label: "Ubuntu/Proxmox", val: 0.95 },
      { label: "Docker/DevOps", val: 0.96 },
      { label: "PostgreSQL", val: 0.95 },
      { label: "React/Vue", val: 0.92 }
    ];

    const isLight =
      document.querySelector('meta[name="color-scheme"]')?.content === "light" ||
      (document.querySelector('meta[name="color-scheme"]')?.content === "light dark" &&
        window.matchMedia("(prefers-color-scheme: light)").matches);

    const strokeGrid = isLight ? "rgba(11, 13, 19, 0.16)" : "rgba(243, 241, 236, 0.16)";
    const textCol = isLight ? "#0b0d13" : "#f3f1ec";

    ctx.clearRect(0, 0, size, size);

    [0.33, 0.66, 1].forEach((ring) => {
      ctx.beginPath();
      axes.forEach((_, i) => {
        const ang = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
        const x = cx + Math.cos(ang) * maxR * ring;
        const y = cy + Math.sin(ang) * maxR * ring;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.closePath();
      ctx.strokeStyle = strokeGrid;
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    ctx.font = "600 10px 'JetBrains Mono', monospace";
    ctx.fillStyle = textCol;
    ctx.textAlign = "center";

    axes.forEach((axis, i) => {
      const ang = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
      const x = cx + Math.cos(ang) * maxR;
      const y = cy + Math.sin(ang) * maxR;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = strokeGrid;
      ctx.stroke();

      const lx = cx + Math.cos(ang) * (maxR + 25);
      const ly = cy + Math.sin(ang) * (maxR + 20) + 3;
      ctx.fillText(axis.label, lx, ly);
    });

    ctx.beginPath();
    axes.forEach((axis, i) => {
      const ang = (Math.PI * 2 * i) / axes.length - Math.PI / 2;
      const pulse = 1 + Math.sin(radarAngle + i) * 0.015;
      const r = maxR * axis.val * pulse;
      const x = cx + Math.cos(ang) * r;
      const y = cy + Math.sin(ang) * r;
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.fillStyle = "rgba(255, 59, 29, 0.24)";
    ctx.fill();
    ctx.strokeStyle = "#ff3b1d";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  function initArsenalVisibilityLifecycle() {
    const arsenalSection = document.getElementById("arsenal");
    if (!arsenalSection) return;

    function radarLoop() {
      if (!radarRunning) return;
      radarAngle += 0.04;
      drawSkillRadar();
      requestAnimationFrame(radarLoop);
    }

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      drawSkillRadar();
      return;
    }

    arsenalSection.addEventListener("contentvisibilityautostatechange", (event) => {
      if (event.skipped) {
        radarRunning = false;
      } else {
        if (!radarRunning) {
          radarRunning = true;
          requestAnimationFrame(radarLoop);
        }
      }
    });

    if (!("contentVisibility" in document.documentElement.style)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (!radarRunning) {
                radarRunning = true;
                requestAnimationFrame(radarLoop);
              }
            } else {
              radarRunning = false;
            }
          });
        },
        { rootMargin: "200px" }
      );
      observer.observe(arsenalSection);
    } else {
      requestAnimationFrame(radarLoop);
    }
  }

  /* ========================================================================
     7. INTERACTIVE HERO CLI TERMINAL
     ======================================================================== */
  function initCliTerminal() {
    const bodyEl = document.getElementById("cli-body");
    const inputEl = document.getElementById("cli-input");
    const formEl = document.getElementById("cli-form");
    if (!bodyEl || !inputEl || !formEl) return;

    function printLine(html) {
      const div = document.createElement("div");
      div.className = "cli-output-line";
      div.innerHTML = html;
      bodyEl.appendChild(div);
      bodyEl.scrollTop = bodyEl.scrollHeight;
    }

    function executeCommand(rawCmd) {
      const cmd = rawCmd.trim().toLowerCase();
      if (!cmd) return;

      printLine(`<span class="cmd-prompt">marcos@rojdev:~$</span> ${rawCmd}`);

      switch (cmd) {
        case "help":
          printLine(
            `<span class="cmd-cyan">Comandos disponibles / Available commands:</span><br>` +
              `· <span class="cmd-accent">whoami</span>     → Perfil profesional & rol actual<br>` +
              `· <span class="cmd-accent">experience</span> → Historial laboral (Corpoeureka, Portuguesa Unida, ACICA, Alcaldía)<br>` +
              `· <span class="cmd-accent">projects</span>   → Listar sistemas & contribuciones Open Source<br>` +
              `· <span class="cmd-accent">odoo</span>       → Desarrollo en Odoo ERP (v16 a v19)<br>` +
              `· <span class="cmd-accent">portuguesa</span> → Inspeccionar arquitectura DDD de Portuguesa Unida<br>` +
              `· <span class="cmd-accent">stack</span>      → Ver arquitectura de 4 capas (Proxmox → Ubuntu Server → Odoo)<br>` +
              `· <span class="cmd-accent">contact</span>    → Datos de contacto directo<br>` +
              `· <span class="cmd-accent">clear</span>      → Limpiar consola`
          );
          break;

        case "whoami":
          printLine(
            `<span class="cmd-accent">Marcos Martínez (@rojdev)</span> — Desarrollador de Software & Desarrollador Odoo.<br>` +
              `<span class="cmd-muted">Actual:</span> Desarrollador de Software y Odoo (<span class="cmd-cyan">v16 a v19</span>) en <span class="cmd-cyan">Corpoeureka</span>.<br>` +
              `<span class="cmd-muted">Stack:</span> Odoo v16–v19, Laravel 12, Bun/Hono (DDD), React 19, Node.js SMB2, Proxmox VE, Ubuntu Server & Docker.`
          );
          break;

        case "experience":
          printLine(
            `<span class="cmd-cyan">[01] Corpoeureka (Actual)</span> — Desarrollador de Software & Odoo ERP (v16 a v19, Facturación Fiscal, Jaspersoft)<br>` +
              `<span class="cmd-cyan">[02] Portuguesa Unida & SOS Venezuela</span> — Open Source Contributor (Clean Architecture + DDD en 11 capas, MapLibre GL, Scrapers Python)<br>` +
              `<span class="cmd-cyan">[03] ACICA (Grupo ACICA · Tedoin · Sutecon)</span> — Coordinador TI & Full Stack / Backend (Clúster 2 nodos Docker/Ubuntu, Control Ventas Laravel 12 + MinIO, API Publicidad SMB2 para Odoo)<br>` +
              `<span class="cmd-cyan">[04] Alcaldía del Municipio Páez</span> — Software Developer & SysAdmin (SACWAN Quasar, Bot Python, SIA Indicadores)`
          );
          break;

        case "projects":
          printLine(
            DATA.projects
              .map(
                (p) =>
                  `· <span class="cmd-accent">${p.code}</span> ${p[currentLang].title} ${
                    p.isPrivate ? '<span class="cmd-muted">[Privado]</span>' : '<span class="cmd-cyan">[Open Source]</span>'
                  }`
              )
              .join("<br>")
          );
          break;

        case "odoo":
          printLine(
            `<span class="cmd-accent">ODOO ERP DEVELOPMENT (v16, v17, v18 & v19):</span><br>` +
              `✓ Desarrollo de módulos y addons personalizados (Python, ORM, OWL Framework)<br>` +
              `✓ Migración técnica de módulos desde Odoo v16 hasta v19<br>` +
              `✓ Integración de facturación digital en Venezuela vía REST/SOAP<br>` +
              `✓ Formatos de factura en forma libre con Jaspersoft Studio y QWeb<br>` +
              `✓ Autor de <span class="cmd-cyan">Odoo Debug Pro (Manifest V3)</span>`
          );
          break;

        case "portuguesa":
          openProjectModal("portuguesa-unida");
          printLine(`<span class="cmd-cyan">Abriendo plano arquitectónico de Portuguesa Unida (Clean Architecture + DDD & MapLibre GL)...</span>`);
          break;

        case "stack":
          printLine(
            `<span class="cmd-cyan">TIER 04:</span> Odoo v16–v19 · Laravel 12 · Bun/Hono DDD · React 19 · Vue 3<br>` +
              `<span class="cmd-cyan">TIER 03:</span> Docker Compose · PostgreSQL 17 · MinIO S3 · Redis<br>` +
              `<span class="cmd-cyan">TIER 02:</span> Ubuntu Server LTS · NGINX · Apache · SSL · Systemd<br>` +
              `<span class="cmd-cyan">TIER 01:</span> Proxmox VE Bare-Metal Hypervisor · KVM / LXC`
          );
          break;

        case "contact":
          printLine(
            `📧 Email: <a href="mailto:marcos.rojdev@gmail.com" class="cmd-accent">marcos.rojdev@gmail.com</a><br>` +
              `💼 LinkedIn: <a href="https://www.linkedin.com/in/marcos-martinez-rojdev/" target="_blank" class="cmd-cyan">linkedin.com/in/marcos-martinez-rojdev</a><br>` +
              `🐙 GitHub: <a href="https://github.com/rojdev" target="_blank" class="cmd-cyan">github.com/rojdev</a>`
          );
          break;

        case "clear":
          bodyEl.innerHTML = "";
          break;

        default:
          printLine(
            `<span class="cmd-muted">Comando no reconocido: '${rawCmd}'. Escribe <span class="cmd-accent">help</span> para ver las opciones.</span>`
          );
      }
    }

    printLine(
      `<span class="cmd-prompt">marcos@rojdev-ubuntu:~$</span> systemctl status rojdev-architecture.service<br>` +
        `<span class="cmd-cyan">● rojdev-architecture.service</span> - Enterprise Backend, Odoo ERP (v16–v19) & Ubuntu Server Stack<br>` +
        `   Loaded: loaded (/etc/systemd/system/rojdev.service; <span class="cmd-prompt">enabled</span>)<br>` +
        `   Active: <span class="cmd-prompt">active (running)</span> · Role: <span class="cmd-accent">SOFTWARE & ODOO DEVELOPER</span><br>` +
        `   Stack : Odoo v16–v19 · Laravel 12 · Bun/Hono DDD · Docker · Proxmox VE · Ubuntu Server`
    );

    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      const val = inputEl.value;
      inputEl.value = "";
      executeCommand(val);
    });

    document.querySelectorAll("[data-cli-cmd]").forEach((chip) => {
      chip.addEventListener("click", () => {
        executeCommand(chip.getAttribute("data-cli-cmd"));
      });
    });
  }

  /* ========================================================================
     8. GSAP + SCROLLTRIGGER + LENIS SMOOTH SCROLL & NATIVE PARALLAX FALLBACKS
     ======================================================================== */
  function initScrollAndParallax() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let lenis = null;
    if (typeof window.Lenis !== "undefined") {
      lenis = new window.Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true
      });

      lenis.on("scroll", (e) => {
        scrollVelocity = e.velocity || 0;
        if (window.ScrollTrigger) window.ScrollTrigger.update();
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);
    }

    if (typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined") {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const showcaseSection = document.getElementById("showcase");
      const track = document.getElementById("horizontal-showcase-track");
      const viewport = document.getElementById("horizontal-track-viewport");

      if (showcaseSection && track && viewport && window.innerWidth >= 1024) {
        viewport.style.overflowX = "visible";
        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth + 120),
          ease: "none",
          scrollTrigger: {
            trigger: showcaseSection,
            pin: true,
            scrub: 1,
            end: () => `+=${track.scrollWidth - window.innerWidth + 120}`,
            invalidateOnRefresh: true
          }
        });
      }

      document.querySelectorAll("[data-parallax-speed]").forEach((el) => {
        const speed = parseFloat(el.getAttribute("data-parallax-speed") || "0.2");
        gsap.to(el, {
          y: () => -180 * speed,
          ease: "none",
          scrollTrigger: {
            trigger: el.closest("section") || document.body,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });
    }

    if (!CSS.supports("(animation-timeline: view()) and (animation-range: entry)")) {
      const heroWrapper = document.querySelector(".hero-parallax-wrapper");
      const heroLayers = document.querySelectorAll(".hero-parallax-layer");

      if (heroWrapper && heroLayers.length) {
        const onHeroScroll = () => {
          const scrollY = window.scrollY;
          const rect = heroWrapper.getBoundingClientRect();
          const wrapperTop = rect.top + scrollY;
          const wrapperHeight = rect.height;
          const winH = window.innerHeight;

          if (scrollY >= wrapperTop - winH && scrollY <= wrapperTop + wrapperHeight) {
            const pct = (scrollY - (wrapperTop - winH)) / (wrapperHeight + winH);
            heroLayers.forEach((layer, index) => {
              const offset = (index + 1) * 110 * pct;
              layer.style.transform = `translateY(${offset}px)`;
            });
          }
        };

        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                window.addEventListener("scroll", onHeroScroll, { passive: true });
              } else {
                window.removeEventListener("scroll", onHeroScroll);
              }
            });
          },
          { threshold: 0 }
        );
        obs.observe(heroWrapper);
        onHeroScroll();
      }
    }

    if (!CSS.supports("(animation-timeline: scroll()) and (animation-range: 0% 100%)")) {
      const progressBar = document.getElementById("scroll-progress-bar");
      if (progressBar) {
        window.addEventListener(
          "scroll",
          () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const ratio = max > 0 ? window.scrollY / max : 0;
            progressBar.style.transform = `scaleX(${Math.min(1, Math.max(0, ratio))})`;
          },
          { passive: true }
        );
      }
    }
  }

  /* ========================================================================
     9. PROJECT BLUEPRINT MODAL (<dialog>) & CTRL+K COMMAND PALETTE
     ======================================================================== */
  function openProjectModal(projectId) {
    const dialog = document.getElementById("blueprint-dialog");
    const content = document.getElementById("blueprint-dialog-content");
    if (!dialog || !content) return;

    const project = DATA.projects.find((p) => p.id === projectId);
    if (!project) return;

    const t = DATA.i18n[currentLang];
    const loc = project[currentLang];

    const repoFooterBtn =
      !project.isPrivate && project.repoUrl
        ? `<a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="btn-magnetic btn-primary">
            <span>${t.modal.repoBtn} ↗</span>
          </a>`
        : `<span class="hud-pill-btn" style="padding:0.85rem 1.25rem;opacity:0.85;cursor:default;">
            <span>${t.modal.privateNotice}</span>
          </span>`;

    content.innerHTML = `
      <div class="dialog-top-bar">
        <div>
          <span class="bento-code">${project.code} // ${project.year} · ${loc.type}</span>
          <h2 class="dossier-role-title" style="margin-top:0.25rem;">${loc.title}</h2>
        </div>
        <button type="button" class="hud-pill-btn" id="close-blueprint-btn">${t.modal.close}</button>
      </div>

      <p class="dossier-summary">${loc.description}</p>

      <div class="dossier-blueprint">
        <div class="dossier-blueprint-title">${t.modal.architecture}</div>
        <div class="blueprint-nodes-flow">
          ${project.diagram
            .map(
              (n, idx) => `
            <span class="bp-node">${n}</span>
            ${idx < project.diagram.length - 1 ? '<span class="bp-arrow">→</span>' : ""}
          `
            )
            .join("")}
        </div>
      </div>

      <h3 class="arch-tier-code" style="margin-bottom:0.75rem;">${t.modal.highlights}</h3>
      <ul class="dossier-bullets">
        ${loc.highlights.map((h) => `<li>${h}</li>`).join("")}
      </ul>

      <h3 class="arch-tier-code" style="margin-bottom:0.75rem;">${t.modal.stack}</h3>
      <div class="dossier-tech-cloud" style="margin-bottom:1.75rem;">
        ${project.tech.map((item) => `<span class="spec-chip">${item}</span>`).join("")}
      </div>

      <div class="showcase-actions">
        ${repoFooterBtn}
        ${
          project.liveUrl
            ? `<a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-magnetic btn-secondary">
                <span>${t.modal.liveBtn} ↗</span>
              </a>`
            : ""
        }
      </div>
    `;

    dialog.showModal();
    document.getElementById("close-blueprint-btn")?.addEventListener("click", () => dialog.close());
  }

  function initModalsAndCommandPalette() {
    const bpDialog = document.getElementById("blueprint-dialog");
    const cmdDialog = document.getElementById("cmd-palette-dialog");
    const cmdInput = document.getElementById("cmd-search-input");
    const cmdList = document.getElementById("cmd-list");

    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-open-modal]");
      if (trigger) {
        if (e.target.closest("a")) return;
        openProjectModal(trigger.getAttribute("data-open-modal"));
      }
    });

    [bpDialog, cmdDialog].forEach((dlg) => {
      if (!dlg) return;
      dlg.addEventListener("click", (e) => {
        if (e.target === dlg) dlg.close();
      });
    });

    function buildCommandItems(query = "") {
      if (!cmdList) return;
      const q = query.trim().toLowerCase();
      const actions = [
        { label: "Ir a Experiencia Laboral (Corpoeureka, Portuguesa Unida, ACICA, Alcaldía)", tag: "NAV", run: () => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }) },
        { label: "Ir a Arquitectura de 4 Capas (Proxmox → Ubuntu Server → Odoo v16–v19)", tag: "NAV", run: () => document.getElementById("architecture")?.scrollIntoView({ behavior: "smooth" }) },
        { label: "Ir a Casos de Estudio Horizontal", tag: "NAV", run: () => document.getElementById("showcase")?.scrollIntoView({ behavior: "smooth" }) },
        { label: "Cambiar Idioma (ES ⇄ EN)", tag: "I18N", run: () => toggleLanguage() },
        { label: "Cambiar Tema Visual (Dark ⇄ Light)", tag: "THEME", run: () => document.getElementById("theme-toggle-btn")?.click() },
        { label: "Copiar Email (marcos.rojdev@gmail.com)", tag: "CONTACT", run: () => copyEmailToClipboard() },
        ...DATA.projects.map((p) => ({
          label: `Proyecto: ${p[currentLang].title}`,
          tag: p.code,
          run: () => openProjectModal(p.id)
        }))
      ].filter((item) => item.label.toLowerCase().includes(q) || item.tag.toLowerCase().includes(q));

      cmdList.innerHTML = actions
        .map(
          (a, i) => `
        <li>
          <button type="button" class="cmd-item-btn" data-cmd-idx="${i}">
            <span>${a.label}</span>
            <span class="spec-chip">${a.tag}</span>
          </button>
        </li>
      `
        )
        .join("");

      cmdList.querySelectorAll("[data-cmd-idx]").forEach((btn, idx) => {
        btn.addEventListener("click", () => {
          cmdDialog.close();
          actions[idx].run();
        });
      });
    }

    document.getElementById("cmd-palette-btn")?.addEventListener("click", () => {
      if (!cmdDialog) return;
      buildCommandItems("");
      cmdDialog.showModal();
      cmdInput?.focus();
    });

    cmdInput?.addEventListener("input", () => buildCommandItems(cmdInput.value));

    window.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (!cmdDialog) return;
        if (cmdDialog.open) cmdDialog.close();
        else {
          buildCommandItems("");
          cmdDialog.showModal();
          cmdInput?.focus();
        }
      }
    });
  }

  /* ========================================================================
     10. LIVE GITHUB TELEMETRY FETCHER & LOCAL CLOCK
     ======================================================================== */
  async function initGitHubTelemetry() {
    const statusEl = document.getElementById("gh-sync-status");
    const reposListEl = document.getElementById("gh-live-repos-list");

    try {
      const reposRes = await fetch("https://api.github.com/users/rojdev/repos?sort=updated&per_page=10");

      if (reposRes.ok && reposListEl) {
        const repos = await reposRes.json();
        const publicRepos = Array.isArray(repos)
          ? repos.filter((r) => !r.private && r.name !== "rojdev" && r.name !== "rojdev.github.io")
          : [];

        if (publicRepos.length > 0) {
          const contributed = [
            {
              name: "Portuguesa Unida (sos-logistica)",
              html_url: "https://github.com/Josemigg16/sos-logistica-vzla",
              language: "TypeScript / DDD"
            },
            {
              name: "sos-venezuela-data",
              html_url: "https://github.com/CalitoTech/sos-venezuela-data",
              language: "Python / ETL"
            }
          ];
          const combined = [...contributed, ...publicRepos].slice(0, 6);
          reposListEl.innerHTML = combined
            .map(
              (r) => `
            <a href="${r.html_url}" target="_blank" rel="noopener noreferrer" class="gh-repo-pill" data-cursor="PUBLIC REPO">
              <span>${r.name}</span>
              <span style="color:var(--accent-emerald)">${r.language || "Open Source"} ↗</span>
            </a>
          `
            )
            .join("");
        }
        if (statusEl) {
          statusEl.textContent = DATA.i18n[currentLang].arsenal.githubSynced;
        }
      }
    } catch (_) {
      // Fallback already rendered in HTML
    }
  }

  function initLiveClock() {
    const clockEl = document.getElementById("live-vet-clock");
    if (!clockEl) return;

    function updateClock() {
      try {
        const fmt = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Caracas",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false
        }).format(new Date());
        clockEl.textContent = `VET ${fmt}`;
      } catch (_) {
        clockEl.textContent = "VET UTC-4";
      }
    }
    updateClock();
    setInterval(updateClock, 1000);
  }

  /* ========================================================================
     11. UI CONTROLS: LANGUAGE SWITCH, ARCHIVE FILTERS, 3D STACK, EMAIL COPY
     ======================================================================== */
  function toggleLanguage() {
    currentLang = currentLang === "es" ? "en" : "es";
    try {
      localStorage.setItem("rojdev-lang", currentLang);
    } catch (_) {}
    renderAllContent();
  }

  function copyEmailToClipboard() {
    const btn = document.getElementById("copy-email-btn");
    const label = document.getElementById("copy-email-label");
    const t = DATA.i18n[currentLang];
    navigator.clipboard?.writeText(DATA.profile.email);
    if (label) {
      label.textContent = t.contact.emailCopied;
      if (btn) btn.style.borderColor = "var(--accent-emerald)";
      setTimeout(() => {
        label.textContent = DATA.i18n[currentLang].contact.copyEmail;
        if (btn) btn.style.borderColor = "";
      }, 2400);
    }
  }

  function initUIControls() {
    document.getElementById("lang-toggle-btn")?.addEventListener("click", toggleLanguage);
    document.getElementById("copy-email-btn")?.addEventListener("click", copyEmailToClipboard);

    const explodeBtn = document.getElementById("iso-explode-btn");
    const isoStack = document.getElementById("iso-stack");
    if (explodeBtn && isoStack) {
      explodeBtn.addEventListener("click", () => {
        const exploded = isoStack.classList.toggle("is-exploded");
        const t = DATA.i18n[currentLang];
        explodeBtn.textContent = exploded ? t.arch.collapseBtn : t.arch.explodeBtn;
      });
    }

    document.querySelectorAll("[data-archive-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        currentFilter = btn.getAttribute("data-archive-filter") || "all";
        document.querySelectorAll("[data-archive-filter]").forEach((b) => b.classList.toggle("is-active", b === btn));
        renderArchiveGrid(DATA.i18n[currentLang]);
      });
    });
  }

  /* ========================================================================
     INITIALIZATION ENTRYPOINT
     ======================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    initPreloader();
    initThemeToggle();
    renderAllContent();
    initTopologyCanvas();
    initCustomCursor();
    initCliTerminal();
    initUIControls();
    initModalsAndCommandPalette();
    initArsenalVisibilityLifecycle();
    initLiveClock();
    initGitHubTelemetry();
    initScrollAndParallax();
  });
})();
