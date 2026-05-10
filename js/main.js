/* ========================================
   ASIA STORE - Main JavaScript
   Premium Interactions & Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  initHeader();
  initScrollReveal();
  init3DCards();
  initParallax();
  initCounters();
  initPageTransition();
  initMagneticButtons();
  initParticles();
  initCustomCursor();
  initFAQ();
  initResponsiveGrid();
});

/* =============================================
   HEADER
   ============================================= */
function initHeader() {
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('mainNav');

  // Scroll effect
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.pageYOffset > 40);
  }, { passive: true });

  // Mobile toggle
  menuToggle?.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav?.classList.toggle('open');
    document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : '';
  });

  // Close menu on nav link click
  document.querySelectorAll('.header__nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menuToggle?.classList.remove('active');
      nav?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Language switcher
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Search form
  const searchForm = document.getElementById('searchForm');
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = document.getElementById('searchInput');
      const query = input?.value.trim();
      if (query) {
        const isInPages = window.location.pathname.includes('/pages/');
        const base = isInPages ? '' : 'pages/';
        window.location.href = `${base}products.html?search=${encodeURIComponent(query)}`;
      }
    });
  }

  // Close mobile menu on outside click
  document.addEventListener('click', (e) => {
    if (nav?.classList.contains('open') && !nav.contains(e.target) && !menuToggle?.contains(e.target)) {
      menuToggle?.classList.remove('active');
      nav.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur');

  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}

/* =============================================
   3D CARD TILT
   ============================================= */
function init3DCards() {
  const cards = document.querySelectorAll('.product-card, .tilt-3d');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;

      const rotX = ((y - cy) / cy) * -9;
      const rotY = ((x - cx) / cx) * 9;

      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-8px) scale(1.02)`;
      card.style.transition = 'transform 0.1s ease';

      // Move card shine
      const shine = card.querySelector('.card-shine');
      if (shine) {
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.18), transparent 60%)`;
        shine.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
      card.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)';
      const shine = card.querySelector('.card-shine');
      if (shine) shine.style.opacity = '0';
    });
  });
}

/* =============================================
   PARALLAX
   ============================================= */
function initParallax() {
  const elements = document.querySelectorAll('[data-parallax]');
  if (!elements.length) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    elements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.4;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const pos = (rect.top - window.innerHeight) * speed;
        el.style.transform = `translateY(${pos}px)`;
      }
    });
  }, { passive: true });
}

/* =============================================
   COUNTER ANIMATION
   ============================================= */
function initCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.counter);
        const suffix = el.dataset.counterSuffix || '';
        const prefix = el.dataset.counterPrefix || '';
        animateCounter(el, target, prefix, suffix);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

function animateCounter(el, target, prefix, suffix) {
  const duration = 2200;
  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(target * eased);

    el.textContent = prefix + current.toLocaleString('ar-EG') + suffix;

    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = prefix + target.toLocaleString('ar-EG') + suffix;
  }

  requestAnimationFrame(update);
}

/* =============================================
   PAGE TRANSITIONS
   ============================================= */
function initPageTransition() {
  const transition = document.getElementById('pageTransition');
  if (!transition) return;

  // Leaving animation on navigation
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto') && !href.startsWith('tel')) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        transition.classList.remove('leaving');
        transition.classList.add('entering');

        // Set delays on each panel
        transition.querySelectorAll('.panel').forEach((panel, i) => {
          panel.style.animationDelay = `${i * 0.04}s`;
        });

        setTimeout(() => {
          window.location.href = href;
        }, 600);
      });
    }
  });

  // Page has loaded - play leaving animation
  setTimeout(() => {
    transition.classList.remove('entering');
    transition.classList.add('leaving');
    transition.querySelectorAll('.panel').forEach((panel, i) => {
      panel.style.animationDelay = `${i * 0.04}s`;
    });
    setTimeout(() => {
      transition.style.pointerEvents = 'none';
      transition.classList.remove('leaving');
    }, 500);
  }, 100);
}

/* =============================================
   MAGNETIC BUTTONS
   ============================================= */
function initMagneticButtons() {
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}

/* =============================================
   PARTICLES
   ============================================= */
function initParticles() {
  document.querySelectorAll('.particles-container').forEach(container => {
    const count = parseInt(container.dataset.particles) || 12;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.cssText = `
        --px: ${(Math.random() - 0.5) * 280}px;
        --py: ${-Math.random() * 380 - 80}px;
        --size: ${Math.random() * 4 + 2}px;
        --duration: ${Math.random() * 6 + 5}s;
        --delay: ${Math.random() * 5}s;
        left: ${Math.random() * 100}%;
        bottom: ${Math.random() * 20}%;
      `;
      container.appendChild(p);
    }
  });
}

/* =============================================
   CUSTOM CURSOR
   ============================================= */
function initCustomCursor() {
  const dot = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');

  if (!dot || !ring) return;

  // Only on non-touch devices
  if (window.matchMedia('(hover: none)').matches) return;

  document.body.classList.add('has-mouse');

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
  });

  // Smooth ring follow
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover state on interactive elements
  const hoverEls = document.querySelectorAll('a, button, .product-card, .category-card, .feature-card, .filter-tab');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform = 'scale(2.5)';
      dot.style.background = 'var(--color-primary-light)';
      ring.style.width = '60px';
      ring.style.height = '60px';
      ring.style.borderColor = 'var(--color-primary)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform = 'scale(1)';
      dot.style.background = 'var(--color-primary)';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.borderColor = 'rgba(27, 198, 180, 0.5)';
    });
  });

  // Hide cursor on mouse leave
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
}

/* =============================================
   FAQ ACCORDION
   ============================================= */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const isOpen = item.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));

      // Toggle current
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* =============================================
   RESPONSIVE TWO-COL GRID
   ============================================= */
function initResponsiveGrid() {
  const grids = document.querySelectorAll('.responsive-two-col');
  const mq = window.matchMedia('(max-width: 768px)');

  function apply(m) {
    grids.forEach(g => {
      g.style.gridTemplateColumns = m.matches ? '1fr' : '1fr 1fr';
    });
  }

  apply(mq);
  mq.addEventListener('change', apply);
}

/* =============================================
   PRODUCT FILTER
   ============================================= */
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-card');
  const tabs = document.querySelectorAll('.filter-tab');

  tabs.forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === category);
  });

  let visible = 0;
  cards.forEach((card, index) => {
    const match = category === 'all' || card.dataset.category === category;
    if (match) {
      card.style.display = '';
      card.style.animation = `fadeInUp 0.45s ${index * 0.05}s both`;
      visible++;
    } else {
      card.style.display = 'none';
    }
  });

  const noResults = document.getElementById('noResults');
  if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
}

/* =============================================
   SMOOTH ANCHOR SCROLL
   ============================================= */
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor) {
    e.preventDefault();
    const id = anchor.getAttribute('href');
    const target = document.querySelector(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

/* =============================================
   ADD TO CART BUTTON FEEDBACK
   ============================================= */
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn--primary[data-i18n="add_to_cart"]');
  if (btn) {
    const original = btn.textContent;
    btn.textContent = '✅ تمت الإضافة!';
    btn.style.background = 'var(--color-success)';
    btn.classList.add('cart-bounce');
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = '';
      btn.classList.remove('cart-bounce');
    }, 1800);
  }
});

/* =============================================
   INJECT ANIMATIONS CSS (if not exists)
   ============================================= */
(function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .product-card, .tilt-3d { cursor: none; }
    .search-bar input { caret-color: var(--color-primary); }
  `;
  document.head.appendChild(style);
})();

/* =============================================
   WINDOW LOAD
   ============================================= */
window.addEventListener('load', () => {
  // Handle URL search param on products page
  const searchParam = new URLSearchParams(window.location.search).get('search');
  if (searchParam) {
    filterProducts('all');
    const input = document.getElementById('productSearchInput');
    if (input) {
      input.value = searchParam;
      if (typeof filterProductsLive === 'function') filterProductsLive(searchParam);
    }
  }

  // Open first FAQ by default (if present)
  const firstFaq = document.querySelector('.faq-item');
  if (firstFaq) firstFaq.classList.add('open');
});
