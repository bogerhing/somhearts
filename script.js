/* ============================================================
   MOONELLE NIGHTS — script.js
   ============================================================ */

'use strict';

/* ============================================================
   PRODUCT DATA
   ============================================================ */
const PRODUCTS = [
  {
    id: 1,
    name: 'Celestine Satin Set',
    category: 'Satin Sets',
    price: '$89',
    badge: 'bestseller',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSF-Hg5wukn3NNZ68VsfpqRNnsHSQ_2uJkV_sNQkwZQEuf7Ya7VfuNMjcjMDLO7Js8i2CJgWz37fx_WJ7j-Mvq1l6e_G5jfvnpSaeAl3jw3QxiXMOdCrX9Q',
    description: 'Draped in blush satin, this two-piece set glides effortlessly. The cami top features delicate adjustable straps and a lace-trimmed hem, paired with relaxed wide-leg shorts.',
    features: ['100% Mulberry Satin', 'Adjustable Straps', 'Lace Trim Detail', 'Hand Wash Recommended']
  },
  {
    id: 2,
    name: 'Ivory Dream Set',
    category: 'Satin Sets',
    price: '$95',
    badge: 'new',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTyLNHITjb5pmLGyduPDeCNkzwVDu1wuGpP3TM4rmQf0s00PVIgpyYTm7J0FRRax8bIezwYEjgBk-Ylby_KQop4r5moxIC-',
    description: 'Ivory cream satin that feels weightless against your skin. This elegant cami and shorts duo is finished with silk-touch piping and a monogrammed charm.',
    features: ['Premium Satin Blend', 'Piped Edges', 'Built-in Shelf Bra', 'Machine Washable']
  },
  {
    id: 3,
    name: 'Rosewood Pajama Set',
    category: 'Pajama Sets',
    price: '$79',
    badge: null,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR1sU6w0veVA-bs_oNXAiT4GcseSaDVFoVetoKs5kMEh_c0AUr90lFoj9q0OwlM97SugnT8ZIFap2-iuak-Qigp4GVha5ZDUgw3VvnOAj8SjuzrBQZYZdIN',
    description: 'A timeless rosewood pajama set crafted from ultra-soft modal fabric. Button-front top with a relaxed fit pant — the ultimate luxury loungewear.',
    features: ['Modal & Cotton Blend', 'Mother-of-Pearl Buttons', 'Elastic Waistband', 'Relaxed Fit']
  },
  {
    id: 4,
    name: 'Midnight Lace Robe',
    category: 'Robes',
    price: '$119',
    badge: 'new',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0eyZ1uHWw4CDfNrhAYxj-q3ncVwM6jV6xjaAd2d56v7S0seNDVH8aErlhQVOxyh0VGhIlMFfpgYE9ylcNC__raw9LOST7YeXU358Kq3AXRXT78OtmCpwu6g',
    description: 'A floor-length robe wrapped in lustrous ivory satin with delicate lace trim at the cuffs and hem. Secured with a satin self-tie belt.',
    features: ['Satin with Lace Detail', 'Floor-Length Cut', 'Self-Tie Belt', 'Dry Clean Recommended']
  },
  {
    id: 5,
    name: 'Blush Cloud Dress',
    category: 'Sleep Dresses',
    price: '$69',
    badge: null,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQHj2-19NRI5vc6w7Zm6DiCLwjDVhz_VZqbPXqx1S9VHvsz8K_k2lbrfrGur8fypY93k16gf2_ywHi9FZotneGwoMZR53HE',
    description: 'This blush sleep dress flows with every movement. Crafted from whisper-weight fabric with a gathered neckline and feminine flutter sleeves.',
    features: ['Soft Jersey Fabric', 'Gathered Neckline', 'Flutter Sleeves', 'Knee-Length Cut']
  },
  {
    id: 6,
    name: 'Golden Hour Set',
    category: 'Satin Sets',
    price: '$99',
    badge: 'sale',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT3CPke2nTq8Tm5mea4ZlL6RksuB9RwW9zBXZjbmLA2KRWe47juTyMMxpm7MBVrtGPn81kaQhu8fJdSPet7-WIqq0pruSvZrTs6yPRPpKLQiTUCrRdFEDYA',
    description: 'Warm champagne-gold satin with bias-cut silhouette for an effortlessly luxurious look. Includes a matching eye mask in a gift-ready pouch.',
    features: ['Gold Satin Blend', 'Bias-Cut Design', 'Includes Eye Mask', 'Gift Pouch Included']
  },
  {
    id: 7,
    name: 'Mocha Ribbed Set',
    category: 'Pajama Sets',
    price: '$75',
    badge: null,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTj53WzOkku-e_iLcATCteRSzdovYFbCTa9QCG0Vcrzhp3RGLiL6_7KCXdVYbIvMWXeUtNpnv2Zp1unS7clGjkcfBDe5YbckA',
    description: 'A rich mocha ribbed set made from organic cotton. Relaxed crop top with wide-leg pants — cozy meets chic in this everyday essential.',
    features: ['Organic Cotton Rib', 'Crop Top Style', 'Wide-Leg Pants', 'OEKO-TEX Certified']
  },
  {
    id: 8,
    name: 'Mauve Velvet Robe',
    category: 'Robes',
    price: '$129',
    badge: 'bestseller',
    image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSOHRD3shjmM0FIe6Jj_G0thQ_GF7TedzcHZQ5hz3CEmQ_WozJdfCKzsM0LNk04ZLjYkrTYiIDTfCiWuNkev-GPvnckrG86pSw9_1XSLdJxPcBC_azwiPcq',
    description: 'Luxuriate in the velvety softness of this mauve robe. Deep shawl collar, side pockets, and a thick wrap belt make it the ultimate wrap-up ritual.',
    features: ['Plush Velour Fabric', 'Deep Shawl Collar', 'Side Pockets', 'Kimono Silhouette']
  },
  {
    id: 9,
    name: 'Linen Whisper Dress',
    category: 'Sleep Dresses',
    price: '$59',
    badge: null,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSHc0UmIrZNs5AmNzK7bqK7pzb6AbuOmpw7vJgNIhB8zBOu6FjHys2u875P_Fyp8tHVWGNXhM9VrnCrwI-9W3UNYM7VGKhmFkdeLnhaWYuxJ9oqikRbZuM-',
    description: 'Breathable linen-blend sleep dress in soft sage. Spaghetti straps, loose A-line silhouette, and a subtle slit make this a summer favourite.',
    features: ['Linen-Cotton Blend', 'Spaghetti Straps', 'A-Line Silhouette', 'Side Slit']
  },
  {
    id: 10,
    name: 'Daydream Pajama Set',
    category: 'Pajama Sets',
    price: '$85',
    badge: 'new',
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQQ5jmL76rgNRhBh5n2R9SFQJSpq2t28vkcTsbvOXLV2j6utWi5mTY0vIVYuzJkfr9VLugtBN3O47coO8XHvEIFnplFr_ME4g',
    description: 'Delicate floral print on a cream cotton ground. Long-sleeve shirt and wide-leg trouser — made for slow mornings and softer evenings.',
    features: ['100% Cotton Print', 'Long-Sleeve Shirt', 'Wide-Leg Trouser', 'Machine Washable']
  },
  {
    id: 11,
    name: 'Pearl Satin Slip',
    category: 'Sleep Dresses',
    price: '$65',
    badge: null,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjHWO_e9L_hm4Ad-ThrzFK_ggzi9B0PpvqJS0TygvgLvmTbuVj-Q2Yl89COd8p44zI_54IZupTfFc7hUplaQuZyOs82qogJgN5HfO48RH3W9mGFt9EofC0tA',
    description: 'A classic pearl satin slip dress with a V-neckline and adjustable straps. Glides over your body like silk, elegantly minimalist.',
    features: ['Charmeuse Satin', 'Deep V-Neckline', 'Adjustable Straps', 'Midi Length']
  },
  {
    id: 12,
    name: 'Cashmere Dream Robe',
    category: 'Robes',
    price: '$129',
    badge: 'new',
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRzAQqwwxiG1eU_Va4QGu8HElHLPGffvE4QsZIrFk920e2_VlJncw8v7QOCwZgevD0aGVBbCL3kefrmUBbA9ysCa6Npe9SbSBleGf_rQYh4Fq4gShMOUCNhew',
    description: 'The ultimate gift to yourself — a cashmere-blend robe with contrast piping in champagne. Generous length, dual pockets, and unbelievably cozy.',
    features: ['Cashmere Blend', 'Contrast Piping', 'Dual Side Pockets', 'Ankle Length']
  }
];

/* ============================================================
   NAVBAR
   ============================================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-close');
  const overlay = document.querySelector('.nav-overlay');

  function openNav() {
    mobileNav && mobileNav.classList.add('open');
    overlay && overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
  function closeNav() {
    mobileNav && mobileNav.classList.remove('open');
    overlay && overlay.classList.remove('show');
    document.body.style.overflow = '';
  }

  hamburger && hamburger.addEventListener('click', openNav);
  mobileClose && mobileClose.addEventListener('click', closeNav);
  overlay && overlay.addEventListener('click', closeNav);

  // Set active link
  const links = document.querySelectorAll('.nav-links a, .mobile-nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================================
   HERO
   ============================================================ */
function initHero() {
  const heroBg = document.querySelector('.hero-bg');
  const heroContent = document.querySelector('.hero-content');

  if (heroBg) {
    setTimeout(() => heroBg.classList.add('loaded'), 100);
  }
  if (heroContent) {
    setTimeout(() => heroContent.classList.add('visible'), 300);
  }
}

/* ============================================================
   SCROLL ANIMATIONS
   ============================================================ */
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.querySelector('.back-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   PRODUCT MODAL
   ============================================================ */
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const backdrop = document.getElementById('product-modal');
  if (!backdrop) return;

  backdrop.querySelector('.modal-img-wrap img').src = product.image;
  backdrop.querySelector('.modal-img-wrap img').alt = product.name;
  backdrop.querySelector('.modal-category').textContent = product.category;
  backdrop.querySelector('.modal-name').textContent = product.name;
  backdrop.querySelector('.modal-price').textContent = product.price;
  backdrop.querySelector('.modal-desc').textContent = product.description;

  const featuresList = backdrop.querySelector('.modal-features');
  featuresList.innerHTML = '';
  product.features.forEach(f => {
    const div = document.createElement('div');
    div.className = 'modal-feature';
    div.textContent = f;
    featuresList.appendChild(div);
  });

  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const backdrop = document.getElementById('product-modal');
  if (!backdrop) return;
  backdrop.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   ORDER POPUP
   ============================================================ */
function openOrderPopup() {
  closeProductModal();
  const popup = document.getElementById('order-popup');
  if (!popup) return;
  setTimeout(() => {
    popup.classList.add('open');
    document.body.style.overflow = 'hidden';
  }, 200);
}

function closeOrderPopup() {
  const popup = document.getElementById('order-popup');
  if (!popup) return;
  popup.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   RENDER PRODUCTS
   ============================================================ */
function renderProducts(containerId, count, categoryFilter) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let products = [...PRODUCTS];
  if (categoryFilter) {
    products = products.filter(p => p.category === categoryFilter);
  }
  if (count) {
    products = products.slice(0, count);
  }

  container.innerHTML = '';
  products.forEach((product, i) => {
    const card = document.createElement('div');
    card.className = 'product-card fade-up';
    card.style.transitionDelay = (i * 0.08) + 's';
    card.setAttribute('data-id', product.id);

    const badgeHtml = product.badge
      ? `<span class="product-badge ${product.badge}">${product.badge}</span>`
      : '';

    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${badgeHtml}
        <div class="product-overlay">
          <button class="btn btn-white">Quick View</button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-category">${product.category}</div>
        <div class="product-name">${product.name}</div>
        <div class="product-price">${product.price}</div>
      </div>
    `;

    card.addEventListener('click', () => openProductModal(product.id));
    container.appendChild(card);
  });

  // Trigger scroll observer for new cards
  initScrollAnimations();
}

/* ============================================================
   NEWSLETTER FORM
   ============================================================ */
function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form, .footer-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        showToast('✦ You\'re on the list! Welcome to Moonelle.');
        input.value = '';
      }
    });
  });
}

/* ============================================================
   CONTACT FORM
   ============================================================ */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('✦ Message sent! We\'ll be in touch soon.');
    form.reset();
  });
}

/* ============================================================
   TOAST
   ============================================================ */
function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

/* ============================================================
   MODAL EVENT LISTENERS
   ============================================================ */
function initModals() {
  // Product modal close
  const productModal = document.getElementById('product-modal');
  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) closeProductModal();
    });
    const closeBtn = productModal.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeProductModal);

    const orderBtn = productModal.querySelector('.order-btn');
    if (orderBtn) orderBtn.addEventListener('click', openOrderPopup);
  }

  // Order popup close
  const orderPopup = document.getElementById('order-popup');
  if (orderPopup) {
    orderPopup.addEventListener('click', (e) => {
      if (e.target === orderPopup) closeOrderPopup();
    });
    const closeBtn = orderPopup.querySelector('.modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeOrderPopup);
    const dismissBtn = orderPopup.querySelector('.dismiss-btn');
    if (dismissBtn) dismissBtn.addEventListener('click', closeOrderPopup);
  }

  // Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeOrderPopup();
    }
  });
}

/* ============================================================
   SHOP PAGE — FILTER / SORT
   ============================================================ */
function initShopFilters() {
  const container = document.getElementById('shop-products');
  if (!container) return;

  let activeCategories = [];

  function applyFilters() {
    const cards = container.querySelectorAll('.product-card');
    cards.forEach(card => {
      const id = parseInt(card.getAttribute('data-id'));
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return;
      const visible = activeCategories.length === 0 || activeCategories.includes(product.category);
      card.style.display = visible ? '' : 'none';
    });
  }

  document.querySelectorAll('.filter-item input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', () => {
      const cat = cb.closest('.filter-item').querySelector('.filter-label')?.textContent?.trim();
      if (!cat) return;
      if (cb.checked) {
        if (!activeCategories.includes(cat)) activeCategories.push(cat);
      } else {
        activeCategories = activeCategories.filter(c => c !== cat);
      }
      applyFilters();
    });
  });

  const sortSelect = document.querySelector('.sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      const val = sortSelect.value;
      const cards = [...container.querySelectorAll('.product-card')];
      cards.sort((a, b) => {
        const idA = parseInt(a.getAttribute('data-id'));
        const idB = parseInt(b.getAttribute('data-id'));
        const pA = PRODUCTS.find(p => p.id === idA);
        const pB = PRODUCTS.find(p => p.id === idB);
        if (!pA || !pB) return 0;
        const priceA = parseInt(pA.price.replace(/[^0-9]/g, ''));
        const priceB = parseInt(pB.price.replace(/[^0-9]/g, ''));
        if (val === 'price-low') return priceA - priceB;
        if (val === 'price-high') return priceB - priceA;
        return idA - idB;
      });
      cards.forEach(c => container.appendChild(c));
    });
  }
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHero();
  initScrollAnimations();
  initBackToTop();
  initModals();
  initNewsletterForms();
  initContactForm();
  initShopFilters();

  // Render products on pages that need them
  renderProducts('featured-products', 8);
  renderProducts('shop-products');
  renderProducts('arrivals-products', 12);
});
