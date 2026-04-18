/* ========================================
   ASIA STORE - Main JavaScript
   Handles: Navigation, Animations, 3D Effects, Scroll Reveals
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language
    initLanguage();

    // Init all modules
    initHeader();
    initScrollReveal();
    init3DCards();
    initParallax();
    initCounters();
    initPageTransition();
    initMagneticButtons();
    initParticles();
});

/* ---- HEADER ---- */
function initHeader() {
    const header = document.querySelector('.header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.header__nav');

    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // Mobile toggle
    menuToggle?.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        nav?.classList.toggle('open');
        document.body.style.overflow = nav?.classList.contains('open') ? 'hidden' : '';
    });

    // Close mobile menu on link click
    document.querySelectorAll('.header__nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle?.classList.remove('active');
            nav?.classList.remove('open');
            document.body.style.overflow = '';
        });
    });

    // Language switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    // Search functionality
    const searchForm = document.querySelector('.search-bar');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchForm.querySelector('input').value.trim();
            if (query) {
                const basePath = window.location.pathname.includes('/pages/') ? '' : 'pages/';
                window.location.href = `${basePath}products.html?search=${encodeURIComponent(query)}`;
            }
        });
    }

}

/* ---- SCROLL REVEAL ---- */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

/* ---- 3D CARD TILT ---- */
function init3DCards() {
    const cards = document.querySelectorAll('.product-card, .tilt-3d');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / centerY * -8;
            const rotateY = (x - centerX) / centerX * 8;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

            // Move shine/highlight
            const shine = card.querySelector('.card-shine');
            if (shine) {
                shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.15), transparent 60%)`;
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

/* ---- PARALLAX ---- */
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = parseFloat(el.dataset.parallax) || 0.5;
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

            if (isVisible) {
                const yPos = (rect.top - window.innerHeight) * speed;
                el.style.transform = `translateY(${yPos}px)`;
            }
        });
    });
}

/* ---- COUNTER ANIMATION ---- */
function initCounters() {
    const counters = document.querySelectorAll('[data-counter]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.counter);
                const suffix = entry.target.dataset.counterSuffix || '';
                const prefix = entry.target.dataset.counterPrefix || '';
                animateCounter(entry.target, target, prefix, suffix);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
}

function animateCounter(el, target, prefix, suffix) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(start + (target - start) * eased);

        el.textContent = prefix + current.toLocaleString() + suffix;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

/* ---- PAGE TRANSITION ---- */
function initPageTransition() {
    const links = document.querySelectorAll('a[href]');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const transition = document.querySelector('.page-transition');
                if (transition) {
                    transition.classList.add('active');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 600);
                } else {
                    window.location.href = href;
                }
            });
        }
    });
}

/* ---- MAGNETIC BUTTONS ---- */
function initMagneticButtons() {
    const magnetics = document.querySelectorAll('.magnetic');

    magnetics.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });

        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });
}

/* ---- PARTICLES ---- */
function initParticles() {
    const containers = document.querySelectorAll('.particles-container');

    containers.forEach(container => {
        const count = parseInt(container.dataset.particles) || 15;

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.setProperty('--x', `${(Math.random() - 0.5) * 300}px`);
            particle.style.setProperty('--y', `${-Math.random() * 400 - 100}px`);
            particle.style.setProperty('--size', `${Math.random() * 4 + 2}px`);
            particle.style.setProperty('--duration', `${Math.random() * 6 + 5}s`);
            particle.style.setProperty('--delay', `${Math.random() * 5}s`);
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.bottom = `${Math.random() * 20}%`;
            container.appendChild(particle);
        }
    });
}

/* ---- SMOOTH SCROLL FOR ANCHORS ---- */
document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (anchor) {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

/* ---- PRODUCT FILTER ---- */
function filterProducts(category) {
    const cards = document.querySelectorAll('.product-card');
    const tabs = document.querySelectorAll('.filter-tab');

    tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.filter === category);
    });

    cards.forEach((card, index) => {
        const cardCat = card.dataset.category;
        const cardTitle = card.querySelector('.product-card__title')?.textContent.toLowerCase() || '';
        const searchQuery = new URLSearchParams(window.location.search).get('search')?.toLowerCase() || '';
        
        const matchesCategory = category === 'all' || cardCat === category;
        const matchesSearch = !searchQuery || cardTitle.includes(searchQuery);
        
        const show = matchesCategory && matchesSearch;

        if (show) {
            card.style.display = '';
            card.style.animation = `fadeInUp 0.5s ${index * 0.1}s forwards`;
        } else {
            card.style.display = 'none';
        }
    });
}

// Check for search in URL on load
window.addEventListener('load', () => {
    const searchQuery = new URLSearchParams(window.location.search).get('search');
    if (searchQuery) {
        filterProducts('all'); // This will now handle the search inside the function
    }
});

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
