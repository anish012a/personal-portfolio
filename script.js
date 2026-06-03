const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const assetBase = 'images/';

const portfolioAssets = [
    {
        src: 'index.jpg',
        title: 'Study in Canada Campaign',
        category: 'Marketing',
        filter: 'marketing',
        description: 'Lead-generation campaign creative with a clear hierarchy and action-led message.'
    },
    {
        src: '691949554_122183064116743567_82088808901871838_n.jpg',
        title: 'AR Clothing Product Shot',
        category: 'Website Design',
        filter: 'website-design',
        description: 'Product-led fashion visual used to support e-commerce presentation.'
    },
    {
        src: '8d194c28-26ec-470c-9cd0-4f0802efe8c1.png',
        title: 'AR New Year Creative',
        category: 'Social Media',
        filter: 'social-media',
        description: 'High-impact social post artwork for brand awareness and seasonal engagement.'
    },
    {
        src: '9f6d35fd-ac49-47fa-9f1b-17e48c230d41.png',
        title: 'Campaign Conversion Visual',
        category: 'Marketing',
        filter: 'marketing',
        description: 'Promotional visual designed for campaign testing and message clarity.'
    },
    {
        src: 'profile.jpg',
        title: 'AR Clothing Zone Brand Art',
        category: 'Branding',
        filter: 'branding',
        description: 'Brand-focused creative built around visual identity, energy, and recognition.'
    },
    {
        src: 'ChatGPT Image Apr 1, 2026, 12_20_41 PM.png',
        title: 'Feature Presentation Card',
        category: 'Website Design',
        filter: 'website-design',
        description: 'Website-ready visual for communicating a product or service feature quickly.'
    },
    {
        src: 'ChatGPT Image Apr 3, 2026, 09_25_45 AM.png',
        title: 'Landing Page Composition',
        category: 'Website Design',
        filter: 'website-design',
        description: 'Responsive landing-page concept with strong image balance and clean spacing.'
    },
    {
        src: 'ChatGPT Image Apr 15, 2026, 08_49_19 PM.png',
        title: 'Brand Story Frame',
        category: 'Branding',
        filter: 'branding',
        description: 'Editorial brand visual created for a story-led service or product section.'
    },
    {
        src: 'ChatGPT Image Feb 26, 2026, 02_51_42 PM.png',
        title: 'Social Campaign Variant',
        category: 'Social Media',
        filter: 'social-media',
        description: 'Variant-based post design suitable for campaign testing across platforms.'
    },
    {
        src: 'ChatGPT Image Feb 26, 2026, 11_34_33 PM.png',
        title: 'Lead Magnet Cover',
        category: 'Marketing',
        filter: 'marketing',
        description: 'Content-led campaign cover with a conversion-focused visual structure.'
    },
    {
        src: 'ChatGPT Image May 12, 2026, 10_41_55 AM.png',
        title: 'Analytics Snapshot',
        category: 'Marketing',
        filter: 'marketing',
        description: 'Data-led visual for summarising performance insights at a glance.'
    },
    {
        src: 'ChatGPT Image May 17, 2026, 01_19_26 PM.png',
        title: 'Video Thumbnail',
        category: 'Social Media',
        filter: 'social-media',
        description: 'Thumbnail artwork built for video visibility and audience click-through.'
    },
    {
        src: 'ChatGPT Image May 7, 2026, 03_06_46 PM.png',
        title: 'Carousel Slide',
        category: 'Social Media',
        filter: 'social-media',
        description: 'Carousel design for story-driven social engagement and message sequencing.'
    },
    {
        src: 'ChatGPT Image May 7, 2026, 04_33_53 PM.png',
        title: 'Service Promo',
        category: 'Marketing',
        filter: 'marketing',
        description: 'Promotional creative designed for service awareness and audience action.'
    },
    {
        src: 'ChatGPT Image May 7, 2026, 04_52_26 PM.png',
        title: 'Case Study Cover',
        category: 'Branding',
        filter: 'branding',
        description: 'Portfolio-ready cover artwork for presenting a detailed brand case study.'
    },
    {
        src: 'd62c86d8-3b87-40e6-b28b-d7f5852cea4a.png',
        title: 'Creative Spotlight',
        category: 'Branding',
        filter: 'branding',
        description: 'High-contrast brand visual with premium spacing and memorable composition.'
    },
    {
        src: 'e97fb72d-c8a3-47f3-b24c-cf94cf7dbda6.png',
        title: 'Website Interface Highlight',
        category: 'Website Design',
        filter: 'website-design',
        description: 'Clean interface composition designed to read well on desktop and mobile.'
    },
    {
        src: 'festive-campaign-art.png',
        title: 'Festive Campaign Artwork',
        category: 'Social Media',
        filter: 'social-media',
        description: 'Seasonal post design tailored for community relevance and engagement.'
    }
];

let animationObserver;
let filteredGalleryAssets = [...portfolioAssets];
let currentLightboxIndex = 0;
let lastFocusedElement = null;

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    body.classList.toggle('dark-mode', savedTheme ? savedTheme === 'dark' : prefersDark);
}

function initNavigation() {
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    if (menuToggle && navMobile) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMobile.classList.toggle('active');
            menuToggle.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });
    }

    navLinksMobile.forEach((link) => {
        link.addEventListener('click', closeMobileNav);
    });

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMobileNav();
        });
    });

    document.addEventListener('scroll', () => {
        if (navMobile?.classList.contains('active')) {
            closeMobileNav();
        }
    }, { passive: true });
}

function closeMobileNav() {
    menuToggle?.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
    navMobile?.classList.remove('active');
}

function resolveAsset(fileName) {
    return encodeURI(`${assetBase}${fileName}`);
}

function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxCategory = document.getElementById('lightboxCategory');
    const lightboxDescription = document.getElementById('lightboxDescription');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    const galleryFilterButtons = document.querySelectorAll('.gallery-filter-btn');

    if (!galleryGrid || !lightbox || !lightboxImage || !lightboxClose || !lightboxPrev || !lightboxNext) {
        return;
    }

    const renderGallery = (filter = 'all') => {
        filteredGalleryAssets = filter === 'all'
            ? [...portfolioAssets]
            : portfolioAssets.filter((asset) => asset.filter === filter);

        galleryGrid.innerHTML = '';

        filteredGalleryAssets.forEach((asset, index) => {
            const card = document.createElement('button');
            card.type = 'button';
            card.className = 'gallery-item';
            card.setAttribute('aria-label', `Open gallery preview for ${asset.title}`);
            card.innerHTML = `
                <div class="gallery-media">
                    <img src="${resolveAsset(asset.src)}" alt="${asset.title}" loading="eager" decoding="sync" fetchpriority="high">
                </div>
                <div class="gallery-overlay">
                    <span class="gallery-category">${asset.category}</span>
                    <h3>${asset.title}</h3>
                    <p>${asset.description}</p>
                </div>
            `;

            card.addEventListener('click', () => openLightbox(index));
            galleryGrid.appendChild(card);
            registerAnimatedElement(card);
        });
    };

    const openLightbox = (index) => {
        if (!filteredGalleryAssets.length) return;

        currentLightboxIndex = (index + filteredGalleryAssets.length) % filteredGalleryAssets.length;
        const asset = filteredGalleryAssets[currentLightboxIndex];
        lastFocusedElement = document.activeElement;

        lightboxImage.src = resolveAsset(asset.src);
        lightboxImage.alt = asset.title;
        if (lightboxTitle) lightboxTitle.textContent = asset.title;
        if (lightboxCategory) lightboxCategory.textContent = asset.category;
        if (lightboxDescription) lightboxDescription.textContent = asset.description;

        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        body.style.overflow = 'hidden';
        lightboxClose.focus();
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        lightboxImage.removeAttribute('src');
        body.style.overflow = '';

        if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
            lastFocusedElement.focus();
        }
    };

    const stepLightbox = (step) => {
        openLightbox(currentLightboxIndex + step);
    };

    galleryFilterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            galleryFilterButtons.forEach((item) => {
                item.classList.remove('active');
                item.setAttribute('aria-pressed', 'false');
            });

            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');
            renderGallery(button.dataset.galleryFilter || 'all');
        });
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxPrev.addEventListener('click', () => stepLightbox(-1));
    lightboxNext.addEventListener('click', () => stepLightbox(1));

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('active')) return;

        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'ArrowLeft') stepLightbox(-1);
        if (event.key === 'ArrowRight') stepLightbox(1);
    });

    renderGallery();
}

function initProjectFiltering() {
    const projectFilterButtons = document.querySelectorAll('.project-filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (!projectFilterButtons.length || !projectCards.length) return;

    projectFilterButtons.forEach((button) => {
        button.addEventListener('click', () => {
            projectFilterButtons.forEach((item) => {
                item.classList.remove('active');
                item.setAttribute('aria-pressed', 'false');
            });

            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');

            const filter = button.dataset.projectFilter || 'all';
            projectCards.forEach((card) => {
                const matches = filter === 'all' || card.dataset.category === filter;
                card.classList.toggle('hidden', !matches);
            });
        });
    });
}

function initCaseStudyToggle() {
    const toggle = document.querySelector('.case-study-toggle');
    const panel = document.getElementById('arCaseStudy');

    if (!toggle || !panel) return;

    toggle.addEventListener('click', () => {
        const isOpen = !panel.hidden;
        panel.hidden = isOpen;
        toggle.setAttribute('aria-expanded', String(!isOpen));
    });
}

function initContactForm() {
    if (!contactForm || !formMessage) return;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const service = document.getElementById('service')?.value;
        const message = document.getElementById('message')?.value.trim();

        if (!name || !email || !message) {
            showFormMessage('Please complete your name, email, and message.', 'error');
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        console.info('Portfolio contact form captured locally:', { name, email, service, message });
        contactForm.reset();
        showFormMessage(`Thanks, ${name}. Your note is ready for follow-up. Please use the social links for direct contact while this static form is connected.`, 'success');
    });
}

function showFormMessage(text, type) {
    formMessage.textContent = text;
    formMessage.classList.remove('success', 'error');
    formMessage.classList.add(type);
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function initScrollAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const animatedSelector = '.fade-up, .service-card, .timeline-item, .gallery-item, .project-card, .skill-category, .featured-media, .featured-copy, .contact-info, .contact-form, .skill-item';

    if (prefersReducedMotion) {
        document.querySelectorAll(animatedSelector).forEach((element) => {
            element.classList.add('is-visible');
        });
        return;
    }

    animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    document.querySelectorAll(animatedSelector).forEach(registerAnimatedElement);

    window.setTimeout(() => {
        document.querySelectorAll(animatedSelector).forEach((element) => {
            element.classList.add('is-visible');
        });
    }, 1400);
}

function registerAnimatedElement(element) {
    if (!element) return;

    if (animationObserver) {
        animationObserver.observe(element);
        return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        element.classList.add('is-visible');
    }
}

function createBackToTopButton() {
    const button = document.createElement('button');
    button.id = 'backToTop';
    button.type = 'button';
    button.setAttribute('aria-label', 'Back to top');
    button.textContent = 'Top';

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        button.style.display = window.scrollY > 420 ? 'flex' : 'none';
    }, { passive: true });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initActiveNavLink() {
    const sections = document.querySelectorAll('main section[id]');

    const updateActiveLink = () => {
        let current = '';

        sections.forEach((section) => {
            if (window.scrollY >= section.offsetTop - 180) {
                current = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    };

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink, { passive: true });
}

function initPage() {
    initTheme();
    initNavigation();
    initGallery();
    initProjectFiltering();
    initCaseStudyToggle();
    initContactForm();
    initScrollAnimations();
    initActiveNavLink();
    createBackToTopButton();
}

document.addEventListener('DOMContentLoaded', initPage);
