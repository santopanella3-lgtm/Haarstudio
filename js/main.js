/* =========================================================
   Haarstudio Galerie da Lucia – Interaktionen
   ========================================================= */
(function () {
  "use strict";

  /* ---- Mobile-Navigation ---- */
  var toggle = document.querySelector(".nav-toggle");
  var body = document.body;
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = body.classList.toggle("nav-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.querySelectorAll(".nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        body.classList.remove("nav-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---- Header beim Runterscrollen ausblenden, beim Hochscrollen zeigen ---- */
  var header = document.querySelector(".site-header");
  if (header) {
    var lastY = window.pageYOffset || 0;
    var ticking = false;

    function onScroll() {
      var y = window.pageYOffset || 0;
      var delta = y - lastY;

      // kleine Bewegungen ignorieren (z. B. iOS-Bounce)
      if (Math.abs(delta) > 6) {
        if (delta > 0 && y > header.offsetHeight) {
          header.classList.add("is-hidden");   // runter -> ausblenden
        } else {
          header.classList.remove("is-hidden"); // hoch -> einblenden
        }
        lastY = y;
      }
      ticking = false;
    }

    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---- Oeffnungszeiten: heutigen Tag markieren ---- */
  // Reihenfolge der Tabellenzeilen: Mo .. So
  document.querySelectorAll(".hours-table").forEach(function (table) {
    var jsDay = new Date().getDay();            // 0 = So, 1 = Mo ...
    var rowIndex = jsDay === 0 ? 6 : jsDay - 1; // Zeilenindex 0..6 (Mo..So)
    var rows = table.querySelectorAll("tbody tr");
    if (rows[rowIndex]) rows[rowIndex].classList.add("today");
  });

  /* ---- Reveal beim Scrollen ---- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Team-Slider ---- */
  var teamSlider = document.querySelector("[data-team-slider]");
  if (teamSlider) {
    var track = teamSlider.querySelector(".team-slider__track");
    var slides = teamSlider.querySelectorAll(".team-slide");
    var dots = teamSlider.querySelectorAll(".team-slider__dot");
    var navBtns = teamSlider.querySelectorAll(".team-slider__nav");
    var viewport = teamSlider.querySelector(".team-slider__viewport");
    var count = slides.length;
    var idx = 0;

    function showSlide(n) {
      idx = (n % count + count) % count;
      track.style.transform = "translateX(-" + idx * 100 + "%)";
      dots.forEach(function (d, i) {
        d.classList.toggle("is-active", i === idx);
        d.setAttribute("aria-selected", i === idx ? "true" : "false");
      });
      slides.forEach(function (s, i) {
        s.setAttribute("aria-hidden", i === idx ? "false" : "true");
      });
    }

    navBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        showSlide(idx + (btn.getAttribute("data-dir") === "prev" ? -1 : 1));
      });
    });
    dots.forEach(function (d) {
      d.addEventListener("click", function () {
        showSlide(parseInt(d.getAttribute("data-go"), 10) || 0);
      });
    });
    teamSlider.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { showSlide(idx - 1); }
      else if (e.key === "ArrowRight") { showSlide(idx + 1); }
    });

    // einfache Wisch-Geste auf Touch
    if (viewport) {
      var startX = null;
      viewport.addEventListener("touchstart", function (e) {
        startX = e.touches[0].clientX;
      }, { passive: true });
      viewport.addEventListener("touchend", function (e) {
        if (startX === null) return;
        var dx = e.changedTouches[0].clientX - startX;
        if (Math.abs(dx) > 45) { showSlide(idx + (dx < 0 ? 1 : -1)); }
        startX = null;
      });
    }

    showSlide(0);
  }

  /* ---- Galerie-Slider (mehrere pro Seite möglich) ---- */
  document.querySelectorAll("[data-gallery-slider]").forEach(function (gallerySlider) {
    var gTrack = gallerySlider.querySelector(".gallery-slider__track");
    var gSlides = gallerySlider.querySelectorAll(".gallery-slide");
    var gDots = gallerySlider.querySelectorAll(".gallery-slider__dot");
    var gPrev = gallerySlider.querySelector(".gallery-slider__nav--prev");
    var gNext = gallerySlider.querySelector(".gallery-slider__nav--next");
    var gCurrent = gallerySlider.querySelector("[data-current]");
    var gView = gallerySlider.querySelector(".gallery-slider__viewport");
    var gCount = gSlides.length;
    var gIdx = 0;

    if (!gTrack || !gCount) { return; }

    function gShow(n) {
      gIdx = (n % gCount + gCount) % gCount;
      gDots.forEach(function (d, i) { d.classList.toggle("is-active", i === gIdx); });
      gSlides.forEach(function (s, i) {
        s.classList.toggle("is-active", i === gIdx);
        s.setAttribute("aria-hidden", i === gIdx ? "false" : "true");
      });
      if (gCurrent) { gCurrent.textContent = gIdx + 1; }
    }

    if (gPrev) { gPrev.addEventListener("click", function () { gShow(gIdx - 1); }); }
    if (gNext) { gNext.addEventListener("click", function () { gShow(gIdx + 1); }); }
    gDots.forEach(function (d, i) { d.addEventListener("click", function () { gShow(i); }); });
    gallerySlider.addEventListener("keydown", function (e) {
      if (e.key === "ArrowLeft") { gShow(gIdx - 1); }
      else if (e.key === "ArrowRight") { gShow(gIdx + 1); }
    });

    if (gView) {
      var gStartX = null;
      gView.addEventListener("touchstart", function (e) {
        gStartX = e.touches[0].clientX;
      }, { passive: true });
      gView.addEventListener("touchend", function (e) {
        if (gStartX === null) { return; }
        var dx = e.changedTouches[0].clientX - gStartX;
        if (Math.abs(dx) > 45) { gShow(gIdx + (dx < 0 ? 1 : -1)); }
        gStartX = null;
      });
    }

    gShow(0);
  });

  /* ---- Galerie-Lightbox ---- */
  var galleryLinks = document.querySelectorAll("[data-lightbox]");
  if (galleryLinks.length) {
    var lb = document.createElement("div");
    lb.className = "lightbox";
    lb.innerHTML =
      '<button class="lightbox__close" aria-label="Schliessen">&times;</button><img alt="">';
    document.body.appendChild(lb);
    var lbImg = lb.querySelector("img");
    var closeBtn = lb.querySelector(".lightbox__close");

    function openLb(src, alt) {
      lbImg.src = src;
      lbImg.alt = alt || "";
      lb.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    function closeLb() {
      lb.classList.remove("open");
      document.body.style.overflow = "";
    }
    galleryLinks.forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        openLb(a.getAttribute("href"), a.querySelector("img") ? a.querySelector("img").alt : "");
      });
    });
    closeBtn.addEventListener("click", closeLb);
    lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLb();
    });
  }

  /* ---- Karte erst nach Klick laden (DSGVO) ---- */
  document.querySelectorAll("[data-map-consent]").forEach(function (box) {
    var btn = box.querySelector("[data-map-load]");
    if (!btn) { return; }
    btn.addEventListener("click", function () {
      var frame = document.createElement("iframe");
      frame.className = "map-embed";
      frame.title = box.getAttribute("data-map-title") || "Karte";
      frame.loading = "lazy";
      frame.referrerPolicy = "no-referrer";
      frame.src = box.getAttribute("data-map-src");
      box.replaceWith(frame);
    });
  });

  /* ---- Aktuelles Jahr im Footer ---- */
  var yearEl = document.querySelector("[data-year]");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
