const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuToggle = document.getElementById('menuToggle');
const navMobile = document.getElementById('navMobile');
const navLinksMobile = document.querySelectorAll('.nav-link-mobile');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
const assetBase = 'images/';

const portfolioAssets = [
    {
        src: 'index.jpg',
        title: 'Brand Hero Visual',
        category: 'Web Design',
        description: 'Premium landing-page hero artwork built to anchor the visual story.'
    },
    {
        src: '691949554_122183064116743567_82088808901871838_n.jpg',
        title: 'Campaign Banner',
        category: 'Marketing',
        description: 'Attention-grabbing promo creative for client-facing campaign use.'
    },
    {
        src: '8d194c28-26ec-470c-9cd0-4f0802efe8c1.png',
        title: 'UI Social Tile',
        category: 'Social Media',
        description: 'Crisp social design with strong hierarchy and a clean call to action.'
    },
    {
        src: '9f6d35fd-ac49-47fa-9f1b-17e48c230d41.png',
        title: 'Performance Ad',
        category: 'Advertising',
        description: 'Conversion-focused ad creative shaped for fast campaign testing.'
    },
    {
        src: 'b56cee19-2be4-4109-aaaa-26a5781f9364.png',
        title: 'Website Screen',
        category: 'Web Design',
        description: 'Polished screen composition for modern website presentation.'
    },
    {
        src: 'ChatGPT Image Apr 1, 2026, 12_20_41 PM.png',
        title: 'Product Feature Card',
        category: 'UI/UX',
        description: 'Feature-focused visual designed to communicate value quickly.'
    },
    {
        src: 'ChatGPT Image Apr 3, 2026, 09_25_45 AM.png',
        title: 'Landing Page Split',
        category: 'Web Design',
        description: 'Responsive landing page mockup with a strong visual rhythm.'
    },
    {
        src: 'ChatGPT Image Apr 15, 2026, 08_49_19 PM.png',
        title: 'Brand Story Frame',
        category: 'Branding',
        description: 'Editorial layout for a brand story or service overview section.'
    },
    {
        src: 'ChatGPT Image Feb 26, 2026, 02_51_42 PM.png',
        title: 'Social Campaign Variant',
        category: 'Social Media',
        description: 'Variant-based post design for quick A/B testing across channels.'
    },
    {
        src: 'ChatGPT Image Feb 26, 2026, 11_34_33 PM.png',
        title: 'Lead Magnet Cover',
        category: 'Content',
        description: 'Lead-generation creative with clear messaging hierarchy.'
    },
    {
        src: 'ChatGPT Image May 12, 2026, 10_41_55 AM.png',
        title: 'Analytics Snapshot',
        category: 'Reporting',
        description: 'Data-led visual summarising campaign performance at a glance.'
    },
    {
        src: 'ChatGPT Image May 17, 2026, 01_19_26 PM.png',
        title: 'Video Thumbnail',
        category: 'Motion',
        description: 'Thumbnail artwork for video content with strong click-through appeal.'
    },
    {
        src: 'ChatGPT Image May 7, 2026, 03_06_46 PM.png',
        title: 'Carousel Slide',
        category: 'Social Media',
        description: 'Carousel layout built for story-driven social engagement.'
    },
    {
        src: 'ChatGPT Image May 7, 2026, 04_33_53 PM.png',
        title: 'Service Promo',
        category: 'Marketing',
        description: 'Promotional visual created for service awareness and lead capture.'
    },
    {
        src: 'ChatGPT Image May 7, 2026, 04_52_26 PM.png',
        title: 'Case Study Cover',
        category: 'Portfolio',
        description: 'Hero cover designed to support a detailed case-study story.'
    },
    {
        src: 'd62c86d8-3b87-40e6-b28b-d7f5852cea4a.png',
        title: 'Creative Spotlight',
        category: 'Branding',
        description: 'High-impact visual with strong contrast and premium spacing.'
    },
    {
        src: 'e97fb72d-c8a3-47f3-b24c-cf94cf7dbda6.png',
        title: 'UI Highlight',
        category: 'UI/UX',
        description: 'Clean interface composition that reads well on desktop and mobile.'
    },
    {
        src: 'festive-campaign-art.png',
        title: 'Festive Campaign Art',
        category: 'Social Media',
        description: 'Seasonal post design tailored for community and festive engagement.'
    },
    {
        src: 'index.jpg',
        title: 'Motion Reel Preview',
        category: 'Motion',
        description: 'A motion-led portfolio beat reserved for future video case studies.'
    }
];

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        body.classList.toggle('dark-mode', savedTheme === 'dark');
        return;
    }

    body.classList.toggle('dark-mode', prefersDark);
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
            menuToggle.classList.toggle('active');
            navMobile.classList.toggle('active');
        });
    }

    navLinksMobile.forEach((link) => {
        link.addEventListener('click', () => {
            menuToggle?.classList.remove('active');
            navMobile?.classList.remove('active');
        });
    });

    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href?.startsWith('#')) return;

            const target = document.querySelector(href);
            if (!target) return;

            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            menuToggle?.classList.remove('active');
            navMobile?.classList.remove('active');
        });
    });

    document.addEventListener('scroll', () => {
        if (navMobile?.classList.contains('active')) {
            menuToggle?.classList.remove('active');
            navMobile.classList.remove('active');
        }
    });
}

function initGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');

    if (!galleryGrid || !lightbox || !lightboxImage || !lightboxClose || !lightboxPrev || !lightboxNext) {
        return;
    }

    const resolveAsset = (fileName) => encodeURI(`${assetBase}${fileName}`);
    let currentIndex = 0;

    const renderCard = (asset, index) => {
        const card = document.createElement('button');
        card.type = 'button';
        card.className = 'gallery-item';
        card.setAttribute('aria-label', `Open portfolio item: ${asset.title}`);
        card.innerHTML = `
            <span class="gallery-index">${String(index + 1).padStart(2, '0')}</span>
            <div class="gallery-media">
                <img src="${resolveAsset(asset.src)}" alt="${asset.title}" loading="lazy" decoding="async">
            </div>
            <div class="gallery-overlay">
                <div class="gallery-overlay-copy">
                    <span class="gallery-category">${asset.category}</span>
                    <h3>${asset.title}</h3>
                    <p>${asset.description}</p>
                </div>
                <span class="gallery-cta">View Project &rarr;</span>
            </div>
        `;

        card.addEventListener('click', () => openLightbox(index));
        return card;
    };

    const openLightbox = (index) => {
        currentIndex = (index + portfolioAssets.length) % portfolioAssets.length;
        const asset = portfolioAssets[currentIndex];
        lightboxImage.src = resolveAsset(asset.src);
        lightboxImage.alt = asset.title;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        body.style.overflow = '';
    };

    const stepLightbox = (step) => {
        openLightbox(currentIndex + step);
    };

    galleryGrid.innerHTML = '';
    portfolioAssets.forEach((asset, index) => {
        galleryGrid.appendChild(renderCard(asset, index));
    });

    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    lightboxPrev.addEventListener('click', () => stepLightbox(-1));
    lightboxNext.addEventListener('click', () => stepLightbox(1));

    document.addEventListener('keydown', (event) => {
        if (!lightbox.classList.contains('active')) return;

        if (event.key === 'Escape') {
            closeLightbox();
        }

        if (event.key === 'ArrowLeft') {
            stepLightbox(-1);
        }

        if (event.key === 'ArrowRight') {
            stepLightbox(1);
        }
    });
}

function initProjectFiltering() {
    if (!filterBtns.length || !projectCards.length) return;

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            filterBtns.forEach((button) => button.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach((card) => {
                const isMatch = filter === 'all' || card.getAttribute('data-category') === filter;
                card.classList.toggle('hidden', !isMatch);

                if (isMatch) {
                    card.style.animation = 'fadeIn 0.6s ease-out';
                }
            });
        });
    });
}

function initContactForm() {
    if (!contactForm || !formMessage) return;

    let isSubmitting = false;

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (isSubmitting) return;
        isSubmitting = true;

        const name = document.getElementById('name')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const message = document.getElementById('message')?.value.trim();
        const submitBtn = contactForm.querySelector('button[type="submit"]');

        if (!name || !email || !message) {
            showFormMessage('Please fill in all fields', 'error');
            isSubmitting = false;
            return;
        }

        if (!isValidEmail(email)) {
            showFormMessage('Please enter a valid email', 'error');
            isSubmitting = false;
            return;
        }

        console.log('Form Data:', { name, email, message });
        contactForm.reset();
        showFormMessage('Message sent successfully!', 'success');

        if (submitBtn) {
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                isSubmitting = false;
            }, 1000);
        } else {
            isSubmitting = false;
        }

        setTimeout(() => {
            formMessage.classList.remove('success', 'error');
            formMessage.textContent = '';
        }, 3000);
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
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.skill-item, .experience-card, .project-card').forEach((element) => {
        observer.observe(element);
    });
}

function createBackToTopButton() {
    const button = document.createElement('button');
    button.id = 'backToTop';
    button.type = 'button';
    button.setAttribute('aria-label', 'Back to top');
    button.textContent = 'TOP';
    button.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 999px;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        z-index: 99;
        display: none;
        transition: all 0.3s ease;
        box-shadow: 0 12px 30px rgba(0, 102, 255, 0.3);
    `;

    document.body.appendChild(button);

    window.addEventListener('scroll', () => {
        const visible = window.pageYOffset > 300;
        button.style.display = visible ? 'flex' : 'none';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
    });

    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initActiveNavLink() {
    window.addEventListener('scroll', () => {
        let current = '';

        document.querySelectorAll('section').forEach((section) => {
            if (pageYOffset >= section.offsetTop - 200) {
                current = section.getAttribute('id') || '';
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    });
}

function initPage() {
    initTheme();
    initNavigation();
    initGallery();
    initProjectFiltering();
    initContactForm();
    initScrollAnimations();
    initActiveNavLink();
    createBackToTopButton();
    console.log('Portfolio loaded successfully!');
}

document.addEventListener('DOMContentLoaded', initPage);
