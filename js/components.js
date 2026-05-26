// ==========================================================================
// DYNAMIC UI COMPONENT RENDERERS (Khadi Store Ratlam)
// ==========================================================================

// Helper: SVG Icons to avoid Lucide load delays
const ICONS = {
  search: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
  user: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
  heart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>',
  cart: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>',
  menu: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>',
  whatsapp: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  phone: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>',
  mapPin: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>',
  truck: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
  close: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  trash: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>'
};

// Global Autocomplete Event setup
function initAutocompleteSearch() {
  const searchInput = document.getElementById('global-search');
  const dropdown = document.getElementById('autocomplete-results');
  if (!searchInput || !dropdown) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      dropdown.classList.remove('active');
      return;
    }

    const filtered = store.getProducts().filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(query))
    ).slice(0, 5);

    if (filtered.length === 0) {
      dropdown.innerHTML = '<div style="padding: 15px; font-size:13px; color:#6B5B52;">No products found</div>';
    } else {
      dropdown.innerHTML = filtered.map(p => `
        <div class="autocomplete-item" onclick="navigateTo('#product?id=${p.id}')">
          <img src="${p.image}" alt="${p.name}">
          <div class="item-info">
            <div class="item-title">${p.name}</div>
            <div class="item-price">₹${p.price}</div>
          </div>
        </div>
      `).join('');
    }
    dropdown.classList.add('active');
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const query = searchInput.value.trim();
      dropdown.classList.remove('active');
      navigateTo(`#shop?search=${encodeURIComponent(query)}`);
    }
  });
}

// --- Render Header & Sticky Floats ---
function renderHeader() {
  const cartCount = store.getCart().reduce((sum, i) => sum + i.qty, 0);
  const wishlistCount = store.getWishlist().length;

  const headerHtml = `
    <div class="container">
      <div class="header-top">
        <a href="#" class="logo" onclick="navigateTo('#')">
          🌿 Khadi Store Ratlam <span>Pure & Handspun</span>
        </a>
        
        <div class="search-container">
          <input type="text" id="global-search" class="search-bar" placeholder="Search fabrics, face packs, honey...">
          <button class="search-icon-btn">${ICONS.search}</button>
          <div id="autocomplete-results" class="autocomplete-dropdown"></div>
        </div>

        <div class="header-actions">
          <a href="#admin" class="action-btn desktop-only" title="Admin Dashboard" onclick="navigateTo('#admin')">
            ${ICONS.user}
            <span style="font-size:11px; font-weight:600; margin-left:5px;">Admin</span>
          </a>
          <a href="#shop?wishlist=true" class="action-btn desktop-only" title="Wishlist" onclick="navigateTo('#shop?wishlist=true')">
            ${ICONS.heart}
            ${wishlistCount > 0 ? `<span class="badge">${wishlistCount}</span>` : ''}
          </a>
          <button class="action-btn" title="Shopping Cart" onclick="toggleCartDrawer(true)">
            ${ICONS.cart}
            ${cartCount > 0 ? `<span class="badge">${cartCount}</span>` : ''}
          </button>
          <button class="mobile-toggle" onclick="toggleMobileMenu()">${ICONS.menu}</button>
        </div>
      </div>
    </div>
    <nav class="container">
      <ul class="nav-menu" id="nav-menu">
        <li class="nav-item"><a href="#" class="nav-link" onclick="navigateTo('#')">Home</a></li>
        <li class="nav-item">
          <a href="#shop?category=Ready to Wear" class="nav-link" onclick="navigateTo('#shop?category=Ready to Wear')">Ready to Wear</a>
          <div class="nav-dropdown">
            <a href="#shop?category=Ready to Wear&subcategory=Stoles" class="dropdown-link" onclick="navigateTo('#shop?category=Ready to Wear&subcategory=Stoles & Scarves')">Stoles & Scarves</a>
            <a href="#shop?category=Ready to Wear&subcategory=Jackets" class="dropdown-link" onclick="navigateTo('#shop?category=Ready to Wear&subcategory=Men\'s Jackets')">Men's Jackets</a>
            <a href="#shop?category=Ready to Wear&subcategory=Kurta" class="dropdown-link" onclick="navigateTo('#shop?category=Ready to Wear&subcategory=Kurta')">Kurtas</a>
            <a href="#shop?category=Ready to Wear&subcategory=Dhoti" class="dropdown-link" onclick="navigateTo('#shop?category=Ready to Wear&subcategory=Dhoti')">Dhoti</a>
            <a href="#shop?category=Ready to Wear&subcategory=Towels" class="dropdown-link" onclick="navigateTo('#shop?category=Ready to Wear&subcategory=Towels')">Towels & Bedsheets</a>
          </div>
        </li>
        <li class="nav-item">
          <a href="#shop?category=Fabrics" class="nav-link" onclick="navigateTo('#shop?category=Fabrics')">Fabrics</a>
          <div class="nav-dropdown">
            <a href="#shop?category=Fabrics&subcategory=Silk" class="dropdown-link" onclick="navigateTo('#shop?category=Fabrics&subcategory=Silk')">Silk Fabric</a>
            <a href="#shop?category=Fabrics&subcategory=Cotton" class="dropdown-link" onclick="navigateTo('#shop?category=Fabrics&subcategory=Cotton')">Cotton & Linen</a>
            <a href="#shop?category=Fabrics&subcategory=Denim" class="dropdown-link" onclick="navigateTo('#shop?category=Fabrics&subcategory=Khadi Denim')">Khadi Denim</a>
            <a href="#shop?category=Fabrics&subcategory=Woolen" class="dropdown-link" onclick="navigateTo('#shop?category=Fabrics&subcategory=Woolen')">Woolen Cloth</a>
          </div>
        </li>
        <li class="nav-item"><a href="#shop?category=Skin" class="nav-link" onclick="navigateTo('#shop?category=Skin')">Skin Care</a></li>
        <li class="nav-item"><a href="#shop?category=Hair" class="nav-link" onclick="navigateTo('#shop?category=Hair')">Hair Care</a></li>
        <li class="nav-item"><a href="#shop?category=Face" class="nav-link" onclick="navigateTo('#shop?category=Face')">Face Care</a></li>
        <li class="nav-item">
          <a href="#" class="nav-link" onclick="event.preventDefault()">More ▾</a>
          <div class="nav-dropdown">
            <a href="#shop?category=Health %26 Foods" class="dropdown-link" onclick="navigateTo('#shop?category=Health %26 Foods')">Foods & Honey</a>
            <a href="#shop?category=Pooja" class="dropdown-link" onclick="navigateTo('#shop?category=Pooja')">Pooja & Itra</a>
            <a href="#b2b" class="dropdown-link" onclick="navigateTo('#b2b')">B2B Wholesale</a>
            <a href="#blog" class="dropdown-link" onclick="navigateTo('#blog')">Artisan Blogs</a>
          </div>
        </li>
        <li class="nav-item"><a href="#contact" class="nav-link" onclick="navigateTo('#contact')">Visit Us</a></li>
        <li class="nav-item mobile-only"><a href="#shop?wishlist=true" class="nav-link" onclick="navigateTo('#shop?wishlist=true')">My Wishlist</a></li>
        <li class="nav-item mobile-only"><a href="#admin" class="nav-link" onclick="navigateTo('#admin')">Admin Panel</a></li>
      </ul>
    </nav>
  `;
  document.getElementById('header-app').innerHTML = headerHtml;
  initAutocompleteSearch();
}

function renderStickyFloats() {
  const floatsHtml = `
    <div class="sticky-float-container">
      <a href="https://wa.me/919876543210?text=Hi,%20I%20want%20help%20selecting%20products." target="_blank" class="float-btn whatsapp">
        ${ICONS.whatsapp}
        <span class="tooltip">WhatsApp Help</span>
      </a>
      <a href="tel:${store.getSettings().storePhone}" class="float-btn call desktop-only">
        ${ICONS.phone}
        <span class="tooltip">Call Helpline</span>
      </a>
      <button onclick="scrollToVisitSection()" class="float-btn visit desktop-only">
        ${ICONS.mapPin}
        <span class="tooltip">Visit Store</span>
      </button>
      <button onclick="openTrackOrderModal()" class="float-btn track desktop-only">
        ${ICONS.truck}
        <span class="tooltip">Track Order</span>
      </button>
    </div>
  `;
  document.getElementById('floats-app').innerHTML = floatsHtml;
}

// --- Home Page Renderer ---
function renderHome() {
  // Banners data
  const settings = store.getSettings();
  const banners = [
    { image: settings.banner1 || "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200", title: "Handspun Khadi Collection", desc: "Experience the cool breathability and rustic elegance of organic handloom garments directly from MP weaver cooperatives.", link: "#shop?category=Ready to Wear" },
    { image: settings.banner2 || "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=1200", title: "Pure Ayurvedic Elixirs", desc: "Chemical-free body washes, cold-pressed sandalwood soaps, and rose waters prepared in small batches.", link: "#shop?category=Face" },
    { image: settings.banner3 || "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1200", title: "Wild Forest Honey & Wellness", desc: "Unpasteurized pure honey and traditional Chyawanprash cooked with fresh Amla berries.", link: "#shop?category=Health %26 Foods" }
  ];

  // Best sellers (rated 4.8+)
  const bestSellers = store.getProducts().filter(p => p.rating >= 4.8).slice(0, 4);
  const newArrivals = store.getProducts().slice(-4).reverse();
  const blogs = store.getBlogs().slice(0, 3);

  const recentlyViewed = store.getRecentlyViewed();
  const recentHtml = recentlyViewed.length > 0 ? `
    <!-- Recently Viewed Section -->
    <div class="section-title-wrap">
      <span class="section-subtitle">Based on your browsing</span>
      <h2 class="section-title">Recently Viewed</h2>
    </div>
    <div class="product-grid" style="margin-bottom:60px;">
      ${recentlyViewed.map(p => renderProductCard(p)).join('')}
    </div>
  ` : '';

  const homeHtml = `
    <!-- Hero Slider -->
    <div class="hero-slider" id="hero-slider">
      ${banners.map((b, idx) => `
        <div class="hero-slide ${idx === 0 ? 'active' : ''}">
          <div class="hero-image-overlay"></div>
          <img src="${b.image}" alt="${b.title}">
          <div class="hero-content">
            <span class="hero-subtitle">100% Traditional & Pure</span>
            <h2 class="hero-title">${b.title}</h2>
            <p class="hero-desc">${b.desc}</p>
            <a href="${b.link}" onclick="navigateTo('${b.link}'); return false;" class="btn-primary">Explore Shop</a>
          </div>
        </div>
      `).join('')}
      <div class="hero-nav" id="hero-dots">
        ${banners.map((_, idx) => `<span class="hero-dot ${idx === 0 ? 'active' : ''}" onclick="setHeroSlide(${idx})"></span>`).join('')}
      </div>
    </div>

    <div class="container">
      <!-- Quick Categories -->
      <div class="section-title-wrap">
        <span class="section-subtitle">Discover Our Range</span>
        <h2 class="section-title">Shop by Category</h2>
      </div>
      <div class="categories-grid">
        <div class="category-card" onclick="navigateTo('#shop?category=Ready to Wear')">
          <div class="category-card-icon">🧥</div>
          <div class="category-card-title">Ready to Wear</div>
        </div>
        <div class="category-card" onclick="navigateTo('#shop?category=Fabrics')">
          <div class="category-card-icon">🧵</div>
          <div class="category-card-title">Pure Fabrics</div>
        </div>
        <div class="category-card" onclick="navigateTo('#shop?category=Skin')">
          <div class="category-card-icon">🧴</div>
          <div class="category-card-title">Skin Care</div>
        </div>
        <div class="category-card" onclick="navigateTo('#shop?category=Hair')">
          <div class="category-card-icon">🌿</div>
          <div class="category-card-title">Hair Care</div>
        </div>
        <div class="category-card" onclick="navigateTo('#shop?category=Face')">
          <div class="category-card-icon">🌸</div>
          <div class="category-card-title">Face Care</div>
        </div>
        <div class="category-card" onclick="navigateTo('#shop?category=Health %26 Foods')">
          <div class="category-card-icon">🍯</div>
          <div class="category-card-title">Foods & Honey</div>
        </div>
        <div class="category-card" onclick="navigateTo('#shop?category=Pooja')">
          <div class="category-card-icon">🕯️</div>
          <div class="category-card-title">Pooja & Itra</div>
        </div>
        <div class="category-card" onclick="navigateTo('#b2b')">
          <div class="category-card-icon">💼</div>
          <div class="category-card-title">B2B Wholesale</div>
        </div>
      </div>

      <!-- Shop by Concern (Ayurvedic highlight) -->
      <div class="concerns-container">
        <div class="section-title-wrap" style="margin-top:0;">
          <span class="section-subtitle">Targeted Ayurvedic Solutions</span>
          <h2 class="section-title">Shop by Concern</h2>
        </div>
        <div class="concerns-chips-wrap">
          <button class="concern-chip" onclick="navigateTo('#shop?concern=Hair Fall')">💆‍♀️ Hair Fall</button>
          <button class="concern-chip" onclick="navigateTo('#shop?concern=Dry Skin')">❄️ Dry Skin</button>
          <button class="concern-chip" onclick="navigateTo('#shop?concern=Acne')">✨ Acne Care</button>
          <button class="concern-chip" onclick="navigateTo('#shop?concern=Pigmentation')">☀️ Pigmentation</button>
          <button class="concern-chip" onclick="navigateTo('#shop?concern=Body Pain')">🧴 Muscle Relief</button>
          <button class="concern-chip" onclick="navigateTo('#shop?concern=Immunity')">🍋 Immunity Boost</button>
          <button class="concern-chip" onclick="navigateTo('#shop?concern=Summer Wear')">🌤️ Summer wear</button>
          <button class="concern-chip" onclick="navigateTo('#shop?concern=Winter Wear')">🧣 Winter warmth</button>
        </div>
      </div>

      <!-- Best Sellers -->
      <div class="section-title-wrap">
        <span class="section-subtitle">Highly Rated Products</span>
        <h2 class="section-title">Our Best Sellers</h2>
      </div>
      <div class="product-grid">
        ${bestSellers.map(p => renderProductCard(p)).join('')}
      </div>

      <!-- New Arrivals -->
      <div class="section-title-wrap">
        <span class="section-subtitle">Freshly Handloomed & Cooked</span>
        <h2 class="section-title">New Arrivals</h2>
      </div>
      <div class="product-grid">
        ${newArrivals.map(p => renderProductCard(p)).join('')}
      </div>

      <!-- Store Visit section -->
      <div id="store-visit-section" class="checkout-section" style="margin:80px 0; background-color:var(--color-bg-secondary);">
        <div class="product-detail-layout" style="margin:0; align-items:center;">
          <div>
            <h2 style="font-size:32px; font-weight:700; margin-bottom:15px;">Experience Our Store</h2>
            <p style="color:var(--color-text-muted); margin-bottom:20px;">
              Visit the offline sanctuary of **Khadi Store Ratlam**. Touch the softness of handspun cotton, test organic sandalwood oils in person, and receive personalized Ayurvedic recommendations from our family weavers.
            </p>
            <div style="display:flex; flex-direction:column; gap:10px; font-size:14px; font-weight:500;">
              <p>📍 <b>Address:</b> ${store.getSettings().storeAddress}</p>
              <p>⏰ <b>Timings:</b> ${store.getSettings().timings}</p>
              <p>📞 <b>Phone:</b> ${store.getSettings().storePhone}</p>
            </div>
            <a href="https://maps.google.com/?q=Khadi+Store+Ratlam+Station+Road" target="_blank" class="btn-primary" style="margin-top:25px;">Get Directions</a>
          </div>
          <div style="border-radius:var(--border-radius-md); overflow:hidden; border:1px solid var(--color-border); height:320px;">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117075.76077382025!2d74.95484803923485!3d23.330541708892182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963fe896580f1ad%3A0xe1db0bc7df716492!2sRatlam%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1716634812345!5m2!1sen!2sin" 
              width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>

      ${recentHtml}

      <!-- Blogs Section -->
      <div class="section-title-wrap">
        <span class="section-subtitle">Wellness & Heritage Knowledge</span>
        <h2 class="section-title">From the Khadi Blog</h2>
      </div>
      <div class="blog-grid" style="margin-bottom:60px;">
        ${blogs.map(b => `
          <div class="blog-card">
            <div class="blog-card-img"><img src="${b.image}" alt="${b.title}"></div>
            <div class="blog-card-content">
              <span class="blog-card-date">${b.date}</span>
              <h3 class="blog-card-title">${b.title}</h3>
              <p class="blog-card-excerpt">${b.excerpt}</p>
              <a href="#blog?post=${b.slug}" onclick="navigateTo('#blog?post=${b.slug}'); return false;" class="blog-card-btn">Read Article</a>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Customer Reviews list -->
      <div class="section-title-wrap">
        <span class="section-subtitle">Loved by patrons</span>
        <h2 class="section-title">Customer Testimonials</h2>
      </div>
      <div class="blog-grid" style="margin-bottom:30px;">
        <div class="b2b-feature-card" style="padding:24px;">
          <div style="color:var(--color-accent-gold); font-size:18px; margin-bottom:10px;">★★★★★</div>
          <p style="font-style:italic; font-size:14px; margin-bottom:15px; color:var(--color-text-muted);">
            "The Amla Bhringraj hair oil stopped my hair fall within a few applications. Unbelievably pure quality, reminds me of the oil my grandmother used to make at home."
          </p>
          <div style="font-weight:600; font-size:13px;">— Radhika S., Indore</div>
        </div>
        <div class="b2b-feature-card" style="padding:24px;">
          <div style="color:var(--color-accent-gold); font-size:18px; margin-bottom:10px;">★★★★★</div>
          <p style="font-style:italic; font-size:14px; margin-bottom:15px; color:var(--color-text-muted);">
            "I bought 10 meters of Indigo Denim fabric for stitching a custom jacket. The fabric is thick yet so breathable. Incredible quality Khadi."
          </p>
          <div style="font-weight:600; font-size:13px;">— Mayur D., Ratlam</div>
        </div>
        <div class="b2b-feature-card" style="padding:24px;">
          <div style="color:var(--color-accent-gold); font-size:18px; margin-bottom:10px;">★★★★★</div>
          <p style="font-style:italic; font-size:14px; margin-bottom:15px; color:var(--color-text-muted);">
            "Their Kannauj Rose Water is real steam-distilled water. It has a mild smell and does not burn like chemical toners. Fully satisfied."
          </p>
          <div style="font-weight:600; font-size:13px;">— Priya P., Bhopal</div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('main-app').innerHTML = homeHtml;
  startHeroAutoplay();
}

// --- Product Card Renderer ---
function renderProductCard(p) {
  const isWish = store.isInWishlist(p.id);
  const outOfStock = p.inventory <= 0;
  
  return `
    <div class="product-card">
      ${outOfStock ? `<span class="product-card-badge" style="background-color:var(--color-text-muted);">Sold Out</span>` : (p.originalPrice > p.price ? `<span class="product-card-badge">Sale</span>` : '')}
      <button class="product-card-wishlist ${isWish ? 'active' : ''}" onclick="event.stopPropagation(); handleWishlistToggle('${p.id}')">
        ★
      </button>
      <div class="product-card-img-wrap" onclick="navigateTo('#product?id=${p.id}')">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
      </div>
      <div class="product-card-content">
        <span class="product-card-category">${p.category}</span>
        <h3 class="product-card-title" onclick="navigateTo('#product?id=${p.id}')">${p.name}</h3>
        
        <div class="product-card-rating">
          ★ ${p.rating} <span>(${p.reviewsCount || 10 + Math.floor(Math.random()*40)})</span>
        </div>

        <div class="product-card-bottom">
          <div class="product-card-price">
            <span class="price-current">₹${p.price}</span>
            ${p.originalPrice > p.price ? `<span class="price-original">₹${p.originalPrice}</span>` : ''}
          </div>
          ${outOfStock ? '' : `
            <button class="btn-add-cart" onclick="event.stopPropagation(); handleAddToCart('${p.id}')" title="Add to Cart">
              +
            </button>
          `}
        </div>
      </div>
    </div>
  `;
}

// --- Shop Page Renderer ---
function renderShop(selectedCategory = '', activeConcern = '', searchString = '', filterWishlist = false) {
  const allProducts = store.getProducts();
  let filtered = [...allProducts];

  // Search logic
  if (searchString) {
    const q = searchString.toLowerCase();
    filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || (p.subcategory && p.subcategory.toLowerCase().includes(q)));
  }

  // Category filter
  if (selectedCategory) {
    filtered = filtered.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase());
  }

  // Concern filter
  if (activeConcern) {
    filtered = filtered.filter(p => p.concerns && p.concerns.map(c => c.toLowerCase()).includes(activeConcern.toLowerCase()));
  }

  // Wishlist filter
  if (filterWishlist) {
    const wishes = store.getWishlist();
    filtered = filtered.filter(p => wishes.includes(p.id));
  }

  // Active Category Chips mapping (Concerns based on category)
  const categoryKeys = Object.keys(INITIAL_CONCERNS);
  const matchedCatKey = categoryKeys.find(k => k.toLowerCase() === selectedCategory.toLowerCase());
  const concernsChips = matchedCatKey ? INITIAL_CONCERNS[matchedCatKey] : [];

  const shopHtml = `
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-subtitle">Heritage Handcrafts</span>
        <h2 class="section-title">
          ${filterWishlist ? 'Your Wishlist' : (selectedCategory ? `${selectedCategory}` : (searchString ? `Search results for "${searchString}"` : 'All Products'))}
        </h2>
      </div>

      <!-- Category Filter Chips -->
      <div class="shop-categories-chips">
        <div class="shop-chip ${!selectedCategory && !filterWishlist ? 'active' : ''}" onclick="navigateTo('#shop')">All Products</div>
        <div class="shop-chip ${selectedCategory === 'Ready to Wear' ? 'active' : ''}" onclick="navigateTo('#shop?category=Ready to Wear')">Ready to Wear</div>
        <div class="shop-chip ${selectedCategory === 'Fabrics' ? 'active' : ''}" onclick="navigateTo('#shop?category=Fabrics')">Pure Fabrics</div>
        <div class="shop-chip ${selectedCategory === 'Skin' ? 'active' : ''}" onclick="navigateTo('#shop?category=Skin')">Skin Care</div>
        <div class="shop-chip ${selectedCategory === 'Hair' ? 'active' : ''}" onclick="navigateTo('#shop?category=Hair')">Hair Care</div>
        <div class="shop-chip ${selectedCategory === 'Face' ? 'active' : ''}" onclick="navigateTo('#shop?category=Face')">Face Care</div>
        <div class="shop-chip ${selectedCategory === 'Health & Foods' ? 'active' : ''}" onclick="navigateTo('#shop?category=Health %26 Foods')">Foods & Honey</div>
        <div class="shop-chip ${selectedCategory === 'Pooja' ? 'active' : ''}" onclick="navigateTo('#shop?category=Pooja')">Pooja & Itra</div>
        <div class="shop-chip ${filterWishlist ? 'active' : ''}" onclick="navigateTo('#shop?wishlist=true')">My Wishlist</div>
      </div>

      <!-- Concern chips inside active category -->
      ${concernsChips.length > 0 ? `
        <div class="shop-chips-container">
          <span style="font-size:13px; font-weight:600; color:var(--color-text-muted); align-self:center; margin-right:10px;">Select Concern:</span>
          <div class="shop-chip ${!activeConcern ? 'active' : ''}" onclick="navigateTo('#shop?category=${selectedCategory}')">Show All</div>
          ${concernsChips.map(c => `
            <div class="shop-chip ${activeConcern.toLowerCase() === c.name.toLowerCase() ? 'active' : ''}" 
              onclick="navigateTo('#shop?category=${selectedCategory}&concern=${c.name}')">
              ${c.name}
            </div>
          `).join('')}
        </div>
      ` : ''}

      <div class="shop-layout">
        <!-- Sidebar filters -->
        <div class="shop-sidebar">
          <div class="filter-group">
            <h3 class="filter-title">Categories</h3>
            <ul class="filter-list">
              <li class="filter-item" onclick="navigateTo('#shop')">
                <input type="checkbox" ${!selectedCategory && !filterWishlist ? 'checked' : ''} readOnly> All Categories
              </li>
              <li class="filter-item" onclick="navigateTo('#shop?category=Ready to Wear')">
                <input type="checkbox" ${selectedCategory === 'Ready to Wear' ? 'checked' : ''} readOnly> Ready to Wear
              </li>
              <li class="filter-item" onclick="navigateTo('#shop?category=Fabrics')">
                <input type="checkbox" ${selectedCategory === 'Fabrics' ? 'checked' : ''} readOnly> Pure Fabrics
              </li>
              <li class="filter-item" onclick="navigateTo('#shop?category=Skin')">
                <input type="checkbox" ${selectedCategory === 'Skin' ? 'checked' : ''} readOnly> Skin Care
              </li>
              <li class="filter-item" onclick="navigateTo('#shop?category=Hair')">
                <input type="checkbox" ${selectedCategory === 'Hair' ? 'checked' : ''} readOnly> Hair Care
              </li>
              <li class="filter-item" onclick="navigateTo('#shop?category=Face')">
                <input type="checkbox" ${selectedCategory === 'Face' ? 'checked' : ''} readOnly> Face Care
              </li>
              <li class="filter-item" onclick="navigateTo('#shop?category=Health %26 Foods')">
                <input type="checkbox" ${selectedCategory === 'Health & Foods' ? 'checked' : ''} readOnly> Foods & Honey
              </li>
              <li class="filter-item" onclick="navigateTo('#shop?category=Pooja')">
                <input type="checkbox" ${selectedCategory === 'Pooja' ? 'checked' : ''} readOnly> Pooja & Itra
              </li>
            </ul>
          </div>
          
          <div class="filter-group">
            <h3 class="filter-title">Concerns</h3>
            <div style="display:flex; flex-direction:column; gap:8px; font-size:13px;">
              <a href="#shop?concern=Hair Fall" onclick="navigateTo('#shop?concern=Hair Fall'); return false;" style="${activeConcern === 'Hair Fall' ? 'font-weight:700; color:var(--color-accent-gold-dark);' : 'color:var(--color-text-muted);'}">💇‍♀️ Hair Fall</a>
              <a href="#shop?concern=Dry Skin" onclick="navigateTo('#shop?concern=Dry Skin'); return false;" style="${activeConcern === 'Dry Skin' ? 'font-weight:700; color:var(--color-accent-gold-dark);' : 'color:var(--color-text-muted);'}">❄️ Dry Skin</a>
              <a href="#shop?concern=Acne" onclick="navigateTo('#shop?concern=Acne'); return false;" style="${activeConcern === 'Acne' ? 'font-weight:700; color:var(--color-accent-gold-dark);' : 'color:var(--color-text-muted);'}">✨ Acne Care</a>
              <a href="#shop?concern=Pigmentation" onclick="navigateTo('#shop?concern=Pigmentation'); return false;" style="${activeConcern === 'Pigmentation' ? 'font-weight:700; color:var(--color-accent-gold-dark);' : 'color:var(--color-text-muted);'}">☀️ Pigmentation</a>
              <a href="#shop?concern=Body Pain" onclick="navigateTo('#shop?concern=Body Pain'); return false;" style="${activeConcern === 'Body Pain' ? 'font-weight:700; color:var(--color-accent-gold-dark);' : 'color:var(--color-text-muted);'}">🧴 Muscle Relief</a>
              <a href="#shop?concern=Immunity" onclick="navigateTo('#shop?concern=Immunity'); return false;" style="${activeConcern === 'Immunity' ? 'font-weight:700; color:var(--color-accent-gold-dark);' : 'color:var(--color-text-muted);'}">🍋 Immunity Boost</a>
            </div>
          </div>
        </div>

        <!-- Product Listings -->
        <div>
          <div class="shop-content-header">
            <span class="shop-results-count">Showing ${filtered.length} products</span>
            <select class="shop-sort-select" onchange="handleShopSort(this.value)">
              <option value="popularity">Popularity</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Average Rating</option>
            </select>
          </div>
          
          ${filtered.length === 0 ? `
            <div style="text-align:center; padding: 60px 0;">
              <h3 style="font-size:22px; color:var(--color-text-muted); margin-bottom:15px;">No products match your filter</h3>
              <button onclick="navigateTo('#shop')" class="btn-primary">Clear Filters</button>
            </div>
          ` : `
            <div class="product-grid" id="shop-products-grid">
              ${filtered.map(p => renderProductCard(p)).join('')}
            </div>
          `}
        </div>
      </div>
    </div>
  `;
  document.getElementById('main-app').innerHTML = shopHtml;
}

// --- Product Details Renderer ---
function renderProductDetail(productId) {
  const p = store.getProductById(productId);
  if (!p) {
    document.getElementById('main-app').innerHTML = `<div class="container" style="padding:100px 0; text-align:center;"><h2>Product not found</h2></div>`;
    return;
  }

  // Track product browsing history
  store.addRecentlyViewed(p.id);

  const discount = p.originalPrice > p.price ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
  const isWish = store.isInWishlist(p.id);
  const related = store.getProducts().filter(item => item.category === p.category && item.id !== p.id).slice(0, 4);

  // Retrieve other recently viewed items (excluding current product)
  const recentlyViewed = store.getRecentlyViewed().filter(item => item.id !== p.id);
  const recentHtml = recentlyViewed.length > 0 ? `
    <div class="section-title-wrap">
      <span class="section-subtitle">Based on your browsing</span>
      <h2 class="section-title">Recently Viewed</h2>
    </div>
    <div class="product-grid" style="margin-bottom:60px;">
      ${recentlyViewed.map(item => renderProductCard(item)).join('')}
    </div>
  ` : '';

  const detailHtml = `
    <div class="container">
      <div class="product-detail-layout">
        <!-- Gallery -->
        <div class="product-gallery">
          <div class="product-main-view">
            <img id="main-product-img" src="${p.image}" alt="${p.name}">
          </div>
          <div class="product-thumbnails">
            <div class="thumb-item active" onclick="setProductMainImage('${p.image}', this)">
              <img src="${p.image}" alt="${p.name}">
            </div>
            ${p.video ? `
              <div class="thumb-item" onclick="setProductMainVideo('${p.video}', this)">
                <div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background-color:#000; color:#fff; font-size:20px;">▶</div>
              </div>
            ` : ''}
            <div class="thumb-item" onclick="setProductMainImage('https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300', this)">
              <img src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=300" alt="Texture Details">
            </div>
          </div>
        </div>

        <!-- Info column -->
        <div class="product-info-wrap">
          <div class="prod-meta-tags">
            <span class="prod-tag">${p.category}</span>
            ${p.subcategory ? `<span class="prod-tag">${p.subcategory}</span>` : ''}
            ${p.concerns ? p.concerns.map(c => `<span class="prod-tag" style="background-color:var(--color-bg-secondary); color:var(--color-text-primary);">${c}</span>`).join('') : ''}
          </div>
          
          <h1 class="prod-title">${p.name}</h1>
          
          <div class="product-card-rating" style="font-size:16px;">
            ★ ${p.rating} <span>(${p.reviewsCount || 24} reviews)</span>
          </div>

          <div class="prod-price-box">
            <span class="prod-price-current">₹${p.price}</span>
            ${discount > 0 ? `
              <span class="prod-price-original">₹${p.originalPrice}</span>
              <span class="prod-discount-badge">${discount}% OFF</span>
            ` : ''}
          </div>

          <!-- Coupon Hint -->
          <div class="prod-coupon-hint">
            🏷️ Apply code <b>KHADI10</b> in checkout for additional 10% discount!
          </div>

          <p style="color:var(--color-text-muted); font-size:15px; border-bottom:1px solid var(--color-border); padding-bottom:15px;">
            ${p.description}
          </p>

          <!-- Qty & Buy buttons -->
          ${p.inventory <= 0 ? `
            <div style="color:var(--color-accent-red); font-weight:700; font-size:18px; margin: 15px 0;">Sold Out / Out of Stock</div>
          ` : `
            <div class="prod-qty-selector">
              <span style="font-weight:600; font-size:14px;">Quantity:</span>
              <div class="qty-controls">
                <button class="qty-btn" onclick="adjustDetailQty(-1)">-</button>
                <div class="qty-val" id="detail-qty-value">1</div>
                <button class="qty-btn" onclick="adjustDetailQty(1)">+</button>
              </div>
              <span style="font-size:12px; color:var(--color-text-muted);">(${p.inventory} pieces left)</span>
            </div>

            <div class="prod-actions">
              <button class="btn-add-cart-large" onclick="handleDetailAddToCart('${p.id}')">
                Add To Cart
              </button>
              <button class="btn-wishlist-large ${isWish ? 'active' : ''}" onclick="handleWishlistToggle('${p.id}'); navigateTo('#product?id=${p.id}');">
                ★
              </button>
            </div>
          `}

          <!-- Shiprocket shipping estimate box -->
          <div class="shipping-estimate-box">
            <div class="shipping-box-title">🚗 Shiprocket Shipping Estimate</div>
            <div class="shipping-input-group">
              <input type="text" id="pincode-est-input" class="shipping-pincode-input" placeholder="Enter delivery pincode (e.g. 457001)" maxLength="6">
              <button class="btn-pincode-check" onclick="checkPincodeEstimate()">Calculate</button>
            </div>
            <div id="pincode-est-result" class="shipping-result"></div>
          </div>
        </div>
      </div>

      <!-- Detail Tabs -->
      <div class="product-tabs-container">
        <div class="tabs-nav">
          <button class="tab-nav-btn active" onclick="switchDetailTab('benefits', this)">Benefits</button>
          <button class="tab-nav-btn" onclick="switchDetailTab('ingredients', this)">Ingredients</button>
          <button class="tab-nav-btn" onclick="switchDetailTab('usage', this)">How to Use</button>
          <button class="tab-nav-btn" onclick="switchDetailTab('faqs', this)">FAQs</button>
        </div>
        
        <div class="tab-pane active" id="tab-benefits">
          <ul style="padding-left:20px; display:flex; flex-direction:column; gap:10px;">
            ${(p.benefits || ["100% organic formulation", "Directly sourced fibers and extracts", "Crafted by rural cooperative societies"]).map(b => `<li>${b}</li>`).join('')}
          </ul>
        </div>
        <div class="tab-pane" id="tab-ingredients">
          <p>${p.ingredients || "Contains zero synthetic dyes, parabens, SLS, or petrochemical fillers. Made of 100% natural, active herbs and traditional handloom yarn."}</p>
        </div>
        <div class="tab-pane" id="tab-usage">
          <p>${p.usage || "Use as required. Refer to pack label for detailed specifications."}</p>
        </div>
        <div class="tab-pane" id="tab-faqs">
          <div class="accordion-faq">
            <div class="faq-item">
              <div class="faq-question" onclick="this.parentNode.classList.toggle('active')">Is this product safe for sensitive skin? <span>+</span></div>
              <div class="faq-answer">Yes, our Ayurvedic range is certified organic and free from synthetic preservatives. For highly reactive skins, we advise a patch test on the elbow.</div>
            </div>
            <div class="faq-item">
              <div class="faq-question" onclick="this.parentNode.classList.toggle('active')">How long does shipping take? <span>+</span></div>
              <div class="faq-answer">We fulfill orders within 24 hours of booking. Deliveries in Central India take 2-3 business days, while outer regions take 4-6 days.</div>
            </div>
            <div class="faq-item">
              <div class="faq-question" onclick="this.parentNode.classList.toggle('active')">Can I return this product? <span>+</span></div>
              <div class="faq-answer">Unused fabrics and toiletries can be returned within 7 days of shipment. Once open, toiletries are non-returnable.</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      ${related.length > 0 ? `
        <div class="section-title-wrap">
          <span class="section-subtitle">Complete Your Ritual</span>
          <h2 class="section-title">Related Products</h2>
        </div>
        <div class="product-grid">
          ${related.map(r => renderProductCard(r)).join('')}
        </div>
      ` : ''}

      ${recentHtml}
    </div>
  `;
  document.getElementById('main-app').innerHTML = detailHtml;
}

// --- Cart Drawer Renderer ---
function renderCartDrawer() {
  const cartItems = store.getCart();
  const drawer = document.getElementById('cart-drawer-app');
  if (!drawer) return;

  const subtotal = store.getCartSubtotal();
  const discount = store.getDiscountAmount();
  const total = subtotal - discount;

  const drawerHtml = `
    <div class="cart-drawer-overlay" id="cart-overlay" onclick="toggleCartDrawer(false)"></div>
    <div class="cart-drawer" id="cart-drawer">
      <div class="cart-drawer-header">
        <h3 class="cart-drawer-title">Shopping Bag (${cartItems.reduce((s,i)=>s+i.qty, 0)})</h3>
        <button class="cart-close-btn" onclick="toggleCartDrawer(false)">${ICONS.close}</button>
      </div>

      <div class="cart-items-list">
        ${cartItems.length === 0 ? `
          <div style="text-align:center; padding: 80px 0;">
            <p style="color:var(--color-text-muted); margin-bottom:20px;">Your cart is empty.</p>
            <button onclick="toggleCartDrawer(false); navigateTo('#shop')" class="btn-primary">Browse Shop</button>
          </div>
        ` : cartItems.map(item => {
          const p = store.getProductById(item.productId);
          if (!p) return '';
          return `
            <div class="cart-item">
              <img src="${p.image}" class="cart-item-img" alt="${p.name}">
              <div class="cart-item-info">
                <h4 class="cart-item-title">${p.name}</h4>
                <div class="cart-item-meta">Category: ${p.category} | Weight: ${p.weight || 200}g</div>
                
                <div class="cart-item-qty-row">
                  <div class="cart-item-qty">
                    <button onclick="store.updateCartQuantity('${p.id}', ${item.qty - 1})">-</button>
                    <span>${item.qty}</span>
                    <button onclick="store.updateCartQuantity('${p.id}', ${item.qty + 1})">+</button>
                  </div>
                  <div class="cart-item-price">₹${p.price * item.qty}</div>
                  <button class="cart-item-remove" onclick="store.removeFromCart('${p.id}')">${ICONS.trash}</button>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      ${cartItems.length > 0 ? `
        <div class="cart-drawer-footer">
          <div class="cart-summary-line">
            <span>Subtotal</span>
            <span>₹${subtotal}</span>
          </div>
          ${discount > 0 ? `
            <div class="cart-summary-line" style="color:var(--color-accent-green); font-weight:600;">
              <span>Discount Applied</span>
              <span>- ₹${discount}</span>
            </div>
          ` : ''}
          <div class="cart-summary-line total">
            <span>Estimated Total</span>
            <span>₹${total}</span>
          </div>
          
          <button onclick="toggleCartDrawer(false); navigateTo('#checkout')" class="btn-primary" style="text-align:center; width:100%;">
            Proceed To Checkout
          </button>
          <p style="font-size:11px; text-align:center; color:var(--color-text-muted);">
            Taxes included. Shipping calculated on checkout.
          </p>
        </div>
      ` : ''}
    </div>
  `;
  drawer.innerHTML = drawerHtml;
}

// --- Checkout Page Renderer ---
function renderCheckout() {
  const cartItems = store.getCart();
  if (cartItems.length === 0) {
    document.getElementById('main-app').innerHTML = `
      <div class="container" style="padding:100px 0; text-align:center;">
        <h2>Your Cart is Empty</h2>
        <p style="margin:20px 0; color:var(--color-text-muted);">Please add items to your cart before proceeding to checkout.</p>
        <button onclick="navigateTo('#shop')" class="btn-primary">Browse Shop</button>
      </div>
    `;
    return;
  }

  const subtotal = store.getCartSubtotal();
  const discount = store.getDiscountAmount();
  const totalWeight = store.getCartTotalWeight();

  // Load active shipping estimate if pincode already entered
  const storedPincode = document.getElementById('checkout-pincode')?.value || '457001';
  const shippingInfo = store.calculateShippingRates(storedPincode);
  const shippingCharge = shippingInfo.success ? shippingInfo.charge : 60;
  const finalTotal = subtotal - discount + shippingCharge;

  const checkoutHtml = `
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-subtitle">Secure Payment & Logistics</span>
        <h2 class="section-title">Checkout Details</h2>
      </div>

      <div class="checkout-layout">
        <!-- Delivery Form -->
        <div>
          <div class="checkout-section">
            <h3 class="checkout-section-title">1. Shipping Address Details</h3>
            <form id="checkout-form" onsubmit="handlePlaceOrder(event)">
              <div class="checkout-form-grid">
                <div class="form-group">
                  <label for="checkout-name">Full Name *</label>
                  <input type="text" id="checkout-name" required placeholder="Mayank Kumar">
                </div>
                <div class="form-group">
                  <label for="checkout-phone">Mobile Phone (WhatsApp Updates) *</label>
                  <input type="tel" id="checkout-phone" required placeholder="9876543210" pattern="[0-9]{10}">
                </div>
                <div class="form-group full-width">
                  <label for="checkout-email">Email Address *</label>
                  <input type="email" id="checkout-email" required placeholder="customer@gmail.com">
                </div>
                <div class="form-group full-width">
                  <label for="checkout-address">Street Address *</label>
                  <textarea id="checkout-address" rows="3" required placeholder="House No, Landmark, Station Road Area"></textarea>
                </div>
                <div class="form-group">
                  <label for="checkout-city">City *</label>
                  <input type="text" id="checkout-city" required placeholder="Ratlam">
                </div>
                <div class="form-group">
                  <label for="checkout-state">State *</label>
                  <select id="checkout-state" required>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Delhi">Delhi</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="checkout-pincode">Pincode (Calculates Shiprocket Rate) *</label>
                  <input type="text" id="checkout-pincode" value="${storedPincode}" required pattern="[0-9]{6}" maxLength="6" oninput="updateCheckoutShippingRate(this.value)">
                </div>
                <div class="form-group">
                  <label for="checkout-gst">GSTIN Number (Optional - B2B)</label>
                  <input type="text" id="checkout-gst" placeholder="23AAAAA1111A1Z1">
                </div>
              </div>
            </form>
          </div>

          <div class="checkout-section">
            <h3 class="checkout-section-title">2. Payment Method</h3>
            <div class="payment-options">
              <div class="payment-option-card active" id="pay-card-cod" onclick="selectPaymentMethod('COD')">
                <input type="radio" name="payment_opt" id="pay-radio-cod" checked>
                <div>
                  <div style="font-weight:600; font-size:14px;">Cash On Delivery (COD)</div>
                  <div style="font-size:12px; color:var(--color-text-muted);">Pay in cash or UPI at the doorstep upon arrival.</div>
                </div>
              </div>
              <div class="payment-option-card" id="pay-card-online" onclick="selectPaymentMethod('ONLINE')">
                <input type="radio" name="payment_opt" id="pay-radio-online">
                <div>
                  <div style="font-weight:600; font-size:14px;">Razorpay Secure Payment Gateway (UPI / Card)</div>
                  <div style="font-size:12px; color:var(--color-text-muted);">Pay securely using credit cards, wallets, netbanking, or UPI.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Order Summary side panel -->
        <div>
          <div class="checkout-section">
            <h3 class="checkout-section-title">Order Summary</h3>
            <div style="display:flex; flex-direction:column; gap:12px; max-height:220px; overflow-y:auto; margin-bottom:20px; padding-bottom:15px; border-bottom:1px solid var(--color-border);">
              ${cartItems.map(item => {
                const prod = store.getProductById(item.productId);
                if (!prod) return '';
                return `
                  <div style="display:flex; justify-content:space-between; align-items:center; font-size:13px;">
                    <div style="max-width:70%;">
                      <div style="font-weight:600;">${prod.name}</div>
                      <div style="color:var(--color-text-muted);">Qty: ${item.qty} x ₹${prod.price}</div>
                    </div>
                    <div style="font-weight:600;">₹${prod.price * item.qty}</div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Coupon Input -->
            <div class="coupon-section">
              <input type="text" id="checkout-coupon-code" placeholder="Apply Promo Code (e.g. KHADI10)">
              <button class="btn-coupon-apply" onclick="handleCheckoutCoupon()">Apply</button>
            </div>
            <div id="checkout-coupon-msg" style="font-size:12px; margin-bottom:15px; font-weight:500;">
              ${store.activeCoupon ? `<span style="color:var(--color-accent-green);">Code '${store.activeCoupon.code}' applied. <a href="#" onclick="event.preventDefault(); removeCheckoutCoupon()" style="color:var(--color-accent-red); margin-left:5px;">Remove</a></span>` : ''}
            </div>

            <!-- Financial Calculations -->
            <div style="display:flex; flex-direction:column; gap:10px; font-size:14px; border-top:1px solid var(--color-border); padding-top:15px;">
              <div style="display:flex; justify-content:space-between;">
                <span>Cart Subtotal</span>
                <span>₹${subtotal}</span>
              </div>
              ${discount > 0 ? `
                <div style="display:flex; justify-content:space-between; color:var(--color-accent-green); font-weight:600;">
                  <span>Discount</span>
                  <span>- ₹${discount}</span>
                </div>
              ` : ''}
              <div style="display:flex; justify-content:space-between;">
                <span id="shipping-rate-provider">Shiprocket Freight Charge</span>
                <span id="shipping-rate-val">₹${shippingCharge}</span>
              </div>
              <div style="font-size:11px; color:var(--color-text-muted);" id="shipping-rate-est">
                Estimated Delivery: ${shippingInfo.estimatedDays || "4-6 Days"}
              </div>
              
              <div style="display:flex; justify-content:space-between; font-size:18px; font-weight:700; border-top:1px solid var(--color-border); padding-top:10px; margin-top:5px;">
                <span>Grand Total</span>
                <span id="checkout-grand-total">₹${finalTotal}</span>
              </div>
            </div>

            <button type="submit" form="checkout-form" class="btn-primary" style="width:100%; text-align:center; margin-top:25px; font-size:15px; padding:15px;">
              Complete Order & Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById('main-app').innerHTML = checkoutHtml;
}

// --- B2B / Wholesale Inquiry Page ---
function renderB2B() {
  const b2bHtml = `
    <div class="container">
      <div class="b2b-header-banner">
        <h1 class="b2b-banner-title">Wholesale B2B Solutions</h1>
        <p class="b2b-banner-desc">
          Partner directly with the source. We supply premium handspun fabrics, bulk Ayurvedic toiletries, and private-labeled organic honey to boutiques, luxury resorts, and herbal labels globally.
        </p>
      </div>

      <div class="b2b-cards-grid">
        <div class="b2b-feature-card">
          <div class="b2b-card-icon">🧵</div>
          <h3 class="b2b-card-title">Bulk Fabrics Supply</h3>
          <p class="b2b-card-text">Order authentic Silk, organic Cotton, Linen, Indigo Denims, and woolen textures directly in rolls. Low MOQ (Minimum Order Quantity) starting at 50 meters.</p>
        </div>
        <div class="b2b-feature-card">
          <div class="b2b-card-icon">🧴</div>
          <h3 class="b2b-card-title">Private Label Toiletries</h3>
          <p class="b2b-card-text">Get high-quality neem cleansers, cold-pressed sandalwood bar soaps, and saffron body scrubs with your custom branding. Formulations are fully compliant.</p>
        </div>
        <div class="b2b-feature-card">
          <div class="b2b-card-icon">🍯</div>
          <h3 class="b2b-card-title">Bulk Ayurvedic Foods</h3>
          <p class="b2b-card-text">Purchase wild forest honey and herbal wellness supplements in bulk containers (25kg/50kg) or custom jars. Fully certified lab test reports supplied.</p>
        </div>
      </div>

      <!-- Inquiry Form -->
      <div class="checkout-layout">
        <div class="checkout-section">
          <h3 class="checkout-section-title">Submit Bulk Business Inquiry</h3>
          <form id="b2b-inquiry-form" onsubmit="handleB2BForm(event)">
            <div class="checkout-form-grid">
              <div class="form-group">
                <label for="b2b-name">Company / Contact Name *</label>
                <input type="text" id="b2b-name" required placeholder="Mayank Apparels Ratlam">
              </div>
              <div class="form-group">
                <label for="b2b-phone">WhatsApp Business Number *</label>
                <input type="tel" id="b2b-phone" required placeholder="9876543210" pattern="[0-9]{10}">
              </div>
              <div class="form-group">
                <label for="b2b-email">Corporate Email *</label>
                <input type="email" id="b2b-email" required placeholder="b2b@company.com">
              </div>
              <div class="form-group">
                <label for="b2b-gst">GSTIN Number *</label>
                <input type="text" id="b2b-gst" required placeholder="23AAAAA1111A1Z1">
              </div>
              <div class="form-group">
                <label for="b2b-product">Interest Area / Product Code *</label>
                <select id="b2b-product" required>
                  <option value="Wholesale Cotton Fabrics">Wholesale Cotton/Linen Fabrics (MOQ: 50m)</option>
                  <option value="Wholesale Mulberry Silk">Mulberry Zari Silk (MOQ: 20m)</option>
                  <option value="Private Label Soap/Toiletries">Private Label Toiletries (MOQ: 100 units)</option>
                  <option value="Bulk Forest Honey">Organic Forest Honey (MOQ: 50kg)</option>
                  <option value="Custom Private Order">Other Custom Wholesale Requirement</option>
                </select>
              </div>
              <div class="form-group">
                <label for="b2b-quantity">Approximate Quantity Required *</label>
                <input type="text" id="b2b-quantity" required placeholder="e.g. 200 meters / 500 units">
              </div>
              <div class="form-group full-width">
                <label for="b2b-message">Specific requirements / Branding details</label>
                <textarea id="b2b-message" rows="4" placeholder="Detail any customizations, specific widths, packaging requirements or sizing parameters needed."></textarea>
              </div>
            </div>
            <div style="display:flex; gap:15px; margin-top:25px;">
              <button type="submit" class="btn-primary">Submit Business Inquiry</button>
              <button type="button" class="btn-primary" style="background-color:#25D366; display:flex; align-items:center; gap:8px;" onclick="sendB2BWhatsAppRedirect()">
                ${ICONS.whatsapp} Talk on WhatsApp
              </button>
            </div>
          </form>
        </div>

        <!-- Info Card sidebar -->
        <div class="b2b-feature-card" style="height:fit-content; background-color:var(--color-bg-secondary);">
          <h3 class="checkout-section-title" style="border-bottom:1px solid var(--color-border); padding-bottom:10px; margin-bottom:15px;">B2B Supply Terms</h3>
          <ul style="padding-left:15px; display:flex; flex-direction:column; gap:12px; font-size:13px; color:var(--color-text-muted);">
            <li><b>Custom Packaging:</b> We offer private labeling with FDA-compliant formulation values.</li>
            <li><b>Shipping Freight:</b> Dispatched via Shiprocket Cargo B2B partners (Safexpress, Blue Dart Air).</li>
            <li><b>Credit & GST:</b> Input tax credit details are generated instantly on invoicing.</li>
            <li><b>Discounts:</b> Tiered pricing structures apply to values above ₹50,000.</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  document.getElementById('main-app').innerHTML = b2bHtml;
}

// --- Blog CMS & Article Reader Renderer ---
function renderBlog(slug = '') {
  if (slug) {
    // Individual blog view
    const post = store.getBlogBySlug(slug);
    if (!post) {
      document.getElementById('main-app').innerHTML = `<div class="container" style="padding:100px 0; text-align:center;"><h2>Article not found</h2></div>`;
      return;
    }

    const blogPostHtml = `
      <div class="container">
        <div class="blog-post-wrap">
          <div class="blog-post-header">
            <span class="blog-post-meta">Published by ${post.author} on ${post.date}</span>
            <h1 class="blog-post-title">${post.title}</h1>
            <a href="#blog" onclick="navigateTo('#blog'); return false;" style="color:var(--color-accent-gold-dark); font-size:14px; font-weight:600;">← Back to Blogs</a>
          </div>
          
          <div class="blog-post-banner">
            <img src="${post.image}" alt="${post.title}">
          </div>

          <div class="blog-post-body">
            ${post.content}
          </div>

          <div style="border-top:1px solid var(--color-border); padding-top:20px; margin-top:40px; display:flex; justify-content:space-between; align-items:center;">
            <span style="font-weight:600;">Loved this article? Share it on WhatsApp:</span>
            <a href="https://wa.me/?text=Read%20this%20amazing%20blog%20from%20Khadi%20Store%20Ratlam:%20${encodeURIComponent(window.location.href)}" 
              target="_blank" class="btn-primary" style="background-color:#25D366; display:flex; align-items:center; gap:5px; font-size:12px; padding:8px 15px;">
              ${ICONS.whatsapp} Share
            </a>
          </div>
        </div>
      </div>
    `;
    document.getElementById('main-app').innerHTML = blogPostHtml;
    window.scrollTo(0,0);
  } else {
    // Blogs Feed view
    const blogs = store.getBlogs();
    const blogFeedHtml = `
      <div class="container">
        <div class="section-title-wrap">
          <span class="section-subtitle">Heritage and Wellness wisdom</span>
          <h2 class="section-title">Khadi & Ayurvedic Journals</h2>
        </div>

        <div class="blog-grid">
          ${blogs.map(b => `
            <div class="blog-card">
              <div class="blog-card-img"><img src="${b.image}" alt="${b.title}"></div>
              <div class="blog-card-content">
                <span class="blog-card-date">${b.date}</span>
                <h3 class="blog-card-title">${b.title}</h3>
                <p class="blog-card-excerpt">${b.excerpt}</p>
                <a href="#blog?post=${b.slug}" onclick="navigateTo('#blog?post=${b.slug}'); return false;" class="blog-card-btn">Read Article</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    document.getElementById('main-app').innerHTML = blogFeedHtml;
  }
}

// --- Track Order Modal ---
function renderTrackOrderModal() {
  const modalHtml = `
    <div class="modal-overlay" id="track-order-modal">
      <div class="modal-box">
        <span class="modal-close" onclick="closeTrackOrderModal()">${ICONS.close}</span>
        <h2 style="margin-bottom:20px; font-family:var(--font-heading); font-size:24px;">Track Customer Order</h2>
        
        <div class="shipping-input-group" style="margin-bottom:25px;">
          <input type="text" id="track-order-id-input" class="shipping-pincode-input" placeholder="Enter Order ID (e.g. ORD-123456)">
          <button class="btn-pincode-check" onclick="handleTrackOrderSearch()">Search</button>
        </div>

        <div id="track-order-results">
          <p style="color:var(--color-text-muted); text-align:center;">Enter your unique 6-digit Order ID printed on your invoice to track real-time delivery status.</p>
        </div>
      </div>
    </div>
  `;
  document.getElementById('modals-app').innerHTML = modalHtml;
}

// --- Admin Panel Renderer ---
let activeAdminTab = 'analytics';

function renderAdmin() {
  const products = store.getProducts();
  const orders = store.getOrders();
  const coupons = store.getCoupons();
  const blogs = store.getBlogs();
  const inquiries = store.getB2BInquiries();
  const settings = store.getSettings();

  // Metrics
  const totalSales = orders.filter(o => o.status !== 'returned').reduce((sum, o) => sum + o.total, 0);
  const totalOrders = orders.length;
  const totalProducts = products.length;
  const totalInquiries = inquiries.length;

  const adminHtml = `
    <div class="container">
      <div class="section-title-wrap">
        <span class="section-subtitle">Real-time Website Control</span>
        <h2 class="section-title">Admin Dashboard</h2>
      </div>

      <div class="admin-layout">
        <!-- Sidebar Navigation -->
        <div class="admin-sidebar">
          <ul class="admin-sidebar-menu">
            <li>
              <button class="admin-menu-btn ${activeAdminTab === 'analytics' ? 'active' : ''}" onclick="switchAdminTab('analytics', this)">
                📊 Analytics Summary
              </button>
            </li>
            <li>
              <button class="admin-menu-btn ${activeAdminTab === 'products' ? 'active' : ''}" onclick="switchAdminTab('products', this)">
                📦 Product Inventory (${totalProducts})
              </button>
            </li>
            <li>
              <button class="admin-menu-btn ${activeAdminTab === 'orders' ? 'active' : ''}" onclick="switchAdminTab('orders', this)">
                📝 Orders Manager (${totalOrders})
              </button>
            </li>
            <li>
              <button class="admin-menu-btn ${activeAdminTab === 'coupons' ? 'active' : ''}" onclick="switchAdminTab('coupons', this)">
                🏷️ Coupon Discount System
              </button>
            </li>
            <li>
              <button class="admin-menu-btn ${activeAdminTab === 'blogs' ? 'active' : ''}" onclick="switchAdminTab('blogs', this)">
                ✍️ Blog CMS Manager
              </button>
            </li>
            <li>
              <button class="admin-menu-btn ${activeAdminTab === 'inquiries' ? 'active' : ''}" onclick="switchAdminTab('inquiries', this)">
                🤝 B2B Bulk Inquiries (${totalInquiries})
              </button>
            </li>
            <li>
              <button class="admin-menu-btn ${activeAdminTab === 'settings' ? 'active' : ''}" onclick="switchAdminTab('settings', this)">
                ⚙️ Integration Settings
              </button>
            </li>
          </ul>
        </div>

        <!-- Main Workspace Area -->
        <div class="admin-content">
          
          <!-- ANALYTICS TAB -->
          <div class="admin-tab-pane ${activeAdminTab === 'analytics' ? 'active' : ''}" id="admin-tab-analytics">
            <div class="admin-section-header">
              <h3>Store Analytics</h3>
              <span style="font-size:12px; font-weight:600; color:var(--color-accent-green);">● Active Database: Local Demo Database</span>
            </div>
            
            <div class="analytics-cards">
              <div class="analytics-card">
                <div class="analytics-card-label">Total Revenue</div>
                <div class="analytics-card-val">₹${totalSales}</div>
              </div>
              <div class="analytics-card">
                <div class="analytics-card-label">Total Orders</div>
                <div class="analytics-card-val">${totalOrders}</div>
              </div>
              <div class="analytics-card">
                <div class="analytics-card-label">Product Stock List</div>
                <div class="analytics-card-val">${totalProducts}</div>
              </div>
              <div class="analytics-card">
                <div class="analytics-card-label">B2B Leads</div>
                <div class="analytics-card-val">${totalInquiries}</div>
              </div>
            </div>

            <h4 style="margin-bottom:15px; font-family:var(--font-body); font-weight:700;">Recent Transactions</h4>
            <div class="table-responsive">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${orders.slice(0, 5).map(o => `
                    <tr>
                      <td style="font-weight:600; color:var(--color-accent-gold-dark);">${o.id}</td>
                      <td>${o.customer.name}</td>
                      <td>${o.date}</td>
                      <td>₹${o.total}</td>
                      <td>${o.paymentMethod}</td>
                      <td><span class="status-pill ${o.status}">${o.status}</span></td>
                    </tr>
                  `).join('')}
                  ${orders.length === 0 ? '<tr><td colspan="6" style="text-align:center; color:var(--color-text-muted);">No orders recorded yet. Place test orders first.</td></tr>' : ''}
                </tbody>
              </table>
            </div>
          </div>

          <!-- PRODUCTS TAB -->
          <div class="admin-tab-pane ${activeAdminTab === 'products' ? 'active' : ''}" id="admin-tab-products">
            <div class="admin-section-header">
              <h3>Product Inventory</h3>
              <button class="btn-admin-action" onclick="openProductModal()">+ Add New Product</button>
            </div>
            
            <div class="table-responsive">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>SKU Code</th>
                    <th>HSN / GST</th>
                    <th>Dimensions (L x W x H)</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${products.map(p => `
                    <tr>
                      <td>
                        <div style="display:flex; align-items:center; gap:8px;">
                          <img src="${p.image}" style="width:36px; height:36px; object-fit:cover; border-radius:4px;">
                          <span style="font-weight:500;">${p.name}</span>
                        </div>
                      </td>
                      <td>${p.category}</td>
                      <td>₹${p.price}</td>
                      <td style="${p.inventory <= 5 ? 'color:var(--color-accent-red); font-weight:700;' : ''}">${p.inventory} pcs</td>
                      <td><code>${p.sku || 'N/A'}</code></td>
                      <td>${p.hsn || 'N/A'} / ${p.gst || 5}%</td>
                      <td>${p.dimensions ? `${p.dimensions.length_cm}x${p.dimensions.width_cm}x${p.dimensions.height_cm} cm` : 'N/A'} (${p.weight || 200}g)</td>
                      <td>
                        <button onclick="openProductModal('${p.id}')" style="color:var(--color-accent-gold-dark); font-weight:600; margin-right:10px;">Edit</button>
                        <button onclick="handleDeleteProduct('${p.id}')" style="color:var(--color-accent-red); font-weight:600;">Delete</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- ORDERS TAB -->
          <div class="admin-tab-pane ${activeAdminTab === 'orders' ? 'active' : ''}" id="admin-tab-orders">
            <div class="admin-section-header">
              <h3>Manage Customer Orders</h3>
            </div>
            
            <div class="table-responsive">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Order Details</th>
                    <th>Customer info</th>
                    <th>Summary</th>
                    <th>Status</th>
                    <th>Shiprocket Integration</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${orders.map(o => `
                    <tr>
                      <td>
                        <b>ID:</b> <code style="color:var(--color-accent-gold-dark);">${o.id}</code><br>
                        <small>Date: ${o.date}</small><br>
                        <small>Payment: <b>${o.paymentMethod}</b> (${o.paymentId})</small>
                      </td>
                      <td>
                        <b>${o.customer.name}</b><br>
                        <small>📞 ${o.customer.phone}</small><br>
                        <small>📍 ${o.customer.address}, ${o.customer.city} (${o.customer.pincode})</small>
                      </td>
                      <td>
                        <small>${o.items.map(item => `${item.name} (x${item.qty})`).join(', ')}</small><br>
                        <b>Total: ₹${o.total}</b>
                      </td>
                      <td><span class="status-pill ${o.status}">${o.status}</span></td>
                      <td>
                        ${o.status === 'pending' ? `
                          <button class="btn-admin-action" style="font-size:11px; padding:5px 10px;" onclick="handleShiprocketFulfill('${o.id}')">
                            🚀 Ship with Shiprocket
                          </button>
                        ` : ''}
                        ${o.status === 'shipped' ? `
                          <div style="font-size:12px; line-height:1.4;">
                            🚚 AWB: <code>${o.shiprocketDetails.awb}</code><br>
                            Partner: <b>${o.shiprocketDetails.courierPartner}</b><br>
                            <button onclick="handleDeliverOrder('${o.id}')" style="color:var(--color-success); font-weight:600; margin-top:5px; font-size:11px;">Mark Delivered</button>
                          </div>
                        ` : ''}
                        ${o.status === 'delivered' ? `
                          <span style="color:var(--color-success); font-weight:600; font-size:12px;">✓ Delivered successfully</span><br>
                          <button onclick="handleReturnOrder('${o.id}')" style="color:var(--color-accent-red); font-weight:600; font-size:11px; margin-top:5px;">Process Return</button>
                        ` : ''}
                        ${o.status === 'returned' ? `
                          <span style="color:var(--color-accent-red); font-weight:600; font-size:12px;">↩ Returned & Restocked</span>
                        ` : ''}
                      </td>
                      <td>
                        <button onclick="openOrderViewModal('${o.id}')" style="color:var(--color-accent-gold-dark); font-weight:600;">Details</button>
                      </td>
                    </tr>
                  `).join('')}
                  ${orders.length === 0 ? '<tr><td colspan="6" style="text-align:center; color:var(--color-text-muted);">No orders placed yet.</td></tr>' : ''}
                </tbody>
              </table>
            </div>
          </div>

          <!-- COUPONS TAB -->
          <div class="admin-tab-pane ${activeAdminTab === 'coupons' ? 'active' : ''}" id="admin-tab-coupons">
            <div class="admin-section-header">
              <h3>Discount Coupons CMS</h3>
            </div>
            <div class="checkout-layout" style="margin:0; grid-template-columns: 280px 1fr; gap:25px;">
              <div class="checkout-section" style="padding:20px;">
                <h4 style="margin-bottom:15px; font-family:var(--font-body); font-weight:700;">Add New Coupon</h4>
                <form id="admin-coupon-form" onsubmit="handleSaveCoupon(event)">
                  <div style="display:flex; flex-direction:column; gap:12px;">
                    <div class="form-group">
                      <label>Coupon Code *</label>
                      <input type="text" id="coupon-code" required placeholder="WELCOME15" style="text-transform:uppercase;">
                    </div>
                    <div class="form-group">
                      <label>Discount Percentage *</label>
                      <input type="number" id="coupon-percent" min="1" max="99" required placeholder="15">
                    </div>
                    <div class="form-group">
                      <label>Minimum Cart value (₹) *</label>
                      <input type="number" id="coupon-min" min="0" required placeholder="1000">
                    </div>
                    <div class="form-group">
                      <label>Description *</label>
                      <input type="text" id="coupon-desc" required placeholder="15% off on orders above ₹1000">
                    </div>
                    <button type="submit" class="btn-primary" style="margin-top:10px;">Save Coupon</button>
                  </div>
                </form>
              </div>
              
              <div class="table-responsive">
                <table class="admin-table">
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Discount</th>
                      <th>Min Cart Limit</th>
                      <th>Description</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${coupons.map(c => `
                      <tr>
                        <td><b style="color:var(--color-accent-gold-dark);">${c.code}</b></td>
                        <td>${c.discountPercent}%</td>
                        <td>₹${c.minCartValue}</td>
                        <td>${c.description}</td>
                        <td>
                          <button onclick="handleDeleteCoupon('${c.code}')" style="color:var(--color-accent-red); font-weight:600;">Remove</button>
                        </td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- BLOG CMS TAB -->
          <div class="admin-tab-pane ${activeAdminTab === 'blogs' ? 'active' : ''}" id="admin-tab-blogs">
            <div class="admin-section-header">
              <h3>Blog CMS</h3>
              <button class="btn-admin-action" onclick="openBlogModal()">+ Create New Article</button>
            </div>
            
            <div class="table-responsive">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Article Title</th>
                    <th>Author</th>
                    <th>Publish Date</th>
                    <th>Excerpt</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  ${blogs.map(b => `
                    <tr>
                      <td><b>${b.title}</b></td>
                      <td>${b.author}</td>
                      <td>${b.date}</td>
                      <td style="max-width:300px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${b.excerpt}</td>
                      <td>
                        <button onclick="openBlogModal('${b.id}')" style="color:var(--color-accent-gold-dark); font-weight:600; margin-right:10px;">Edit</button>
                        <button onclick="handleDeleteBlog('${b.id}')" style="color:var(--color-accent-red); font-weight:600;">Delete</button>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- B2B INQUIRIES TAB -->
          <div class="admin-tab-pane ${activeAdminTab === 'inquiries' ? 'active' : ''}" id="admin-tab-inquiries">
            <div class="admin-section-header">
              <h3>B2B wholesale leads</h3>
            </div>
            
            <div class="table-responsive">
              <table class="admin-table">
                <thead>
                  <tr>
                    <th>Inquiry Details</th>
                    <th>Company Name</th>
                    <th>Quantity Required</th>
                    <th>Message</th>
                    <th>Status</th>
                    <th>Quick Contact</th>
                  </tr>
                </thead>
                <tbody>
                  ${inquiries.map(inq => `
                    <tr>
                      <td>
                        <small>Date: ${inq.date}</small><br>
                        <b>Interest: ${inq.product}</b>
                      </td>
                      <td>
                        <b>${inq.name}</b><br>
                        <small>GSTIN: <code>${inq.gst}</code></small><br>
                        <small>✉ ${inq.email}</small>
                      </td>
                      <td><b>${inq.quantity}</b></td>
                      <td style="max-width:250px;">${inq.message || 'No additional note'}</td>
                      <td>
                        <select onchange="store.updateB2BStatus('${inq.id}', this.value)" style="padding:4px; font-size:12px; border-radius:4px;">
                          <option value="new" ${inq.status === 'new' ? 'selected' : ''}>New Lead</option>
                          <option value="contacted" ${inq.status === 'contacted' ? 'selected' : ''}>Contacted</option>
                          <option value="closed" ${inq.status === 'closed' ? 'selected' : ''}>Closed / Partnered</option>
                        </select>
                      </td>
                      <td>
                        <a href="https://wa.me/91${inq.phone}?text=Hi%20${encodeURIComponent(inq.name)},%20we%20received%20your%20wholesale%20inquiry%20regarding%20${encodeURIComponent(inq.product)}.%20Let's%20discuss%20pricing." 
                          target="_blank" class="btn-primary" style="background-color:#25D366; font-size:11px; padding:6px 12px; border-radius:3px;">
                          Chat Business
                        </a>
                      </td>
                    </tr>
                  `).join('')}
                  ${inquiries.length === 0 ? '<tr><td colspan="6" style="text-align:center; color:var(--color-text-muted);">No B2B leads generated yet.</td></tr>' : ''}
                </tbody>
              </table>
            </div>
          </div>

          <!-- INTEGRATION SETTINGS TAB -->
          <div class="admin-tab-pane ${activeAdminTab === 'settings' ? 'active' : ''}" id="admin-tab-settings">
            <div class="admin-section-header">
              <h3>Integration Settings</h3>
            </div>
            <form onsubmit="handleSaveSettings(event)" style="display:flex; flex-direction:column; gap:25px;">
              
              <div class="checkout-section" style="margin:0; padding:20px;">
                <h4 style="margin-bottom:15px; font-family:var(--font-body); font-weight:700;">1. Database Connection Mode</h4>
                <div style="display:flex; gap:20px; font-size:14px; margin-bottom:15px;">
                  <label><input type="radio" name="db_mode" value="local" ${settings.dbMode === 'local' ? 'checked' : ''} onchange="toggleSettingsFirebaseInputs(false)"> Local/Demo Mode (Saves in LocalStorage - No setup required)</label>
                  <label><input type="radio" name="db_mode" value="firebase" ${settings.dbMode === 'firebase' ? 'checked' : ''} onchange="toggleSettingsFirebaseInputs(true)"> Firebase Production Mode (Connects to real Firestore)</label>
                </div>
                
                <div id="firebase-config-inputs" style="display: ${settings.dbMode === 'firebase' ? 'grid' : 'none'}; grid-template-columns:1fr 1fr; gap:15px; border-top:1px solid var(--color-border); padding-top:15px;">
                  <div class="form-group"><label>API Key</label><input type="text" id="sett-fb-key" value="${settings.firebaseConfig.apiKey}"></div>
                  <div class="form-group"><label>Auth Domain</label><input type="text" id="sett-fb-auth" value="${settings.firebaseConfig.authDomain}"></div>
                  <div class="form-group"><label>Project ID</label><input type="text" id="sett-fb-project" value="${settings.firebaseConfig.projectId}"></div>
                  <div class="form-group"><label>Storage Bucket</label><input type="text" id="sett-fb-bucket" value="${settings.firebaseConfig.storageBucket}"></div>
                  <div class="form-group"><label>App ID</label><input type="text" id="sett-fb-appid" value="${settings.firebaseConfig.appId}"></div>
                </div>
              </div>

              <div class="checkout-section" style="margin:0; padding:20px;">
                <h4 style="margin-bottom:15px; font-family:var(--font-body); font-weight:700;">2. Razorpay Credentials</h4>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
                  <div class="form-group"><label>Razorpay Key ID (Test or Live)</label><input type="text" id="sett-rzp-key" value="${settings.razorpayKeyId || ''}"></div>
                  <div class="form-group"><label>Helpline Phone Number</label><input type="text" id="sett-store-phone" value="${settings.storePhone || ''}"></div>
                </div>
              </div>

              <div class="checkout-section" style="margin:0; padding:20px;">
                <h4 style="margin-bottom:15px; font-family:var(--font-body); font-weight:700;">3. Shiprocket Credentials</h4>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:15px;">
                  <div class="form-group"><label>Shiprocket Login Email</label><input type="email" id="sett-ship-email" value="${settings.shiprocketEmail || ''}"></div>
                  <div class="form-group"><label>Shiprocket Password</label><input type="password" id="sett-ship-pass" placeholder="••••••••" value="${settings.shiprocketPassword || ''}"></div>
                </div>
              </div>

              <div class="checkout-section" style="margin:0; padding:20px;">
                <h4 style="margin-bottom:15px; font-family:var(--font-body); font-weight:700;">4. Homepage Hero Banners Customization</h4>
                <div style="display:grid; grid-template-columns: 1fr; gap:15px;">
                  <div class="form-group"><label>Hero Banner Slide 1 Image URL</label><input type="url" id="sett-banner1" value="${settings.banner1 || ''}"></div>
                  <div class="form-group"><label>Hero Banner Slide 2 Image URL</label><input type="url" id="sett-banner2" value="${settings.banner2 || ''}"></div>
                  <div class="form-group"><label>Hero Banner Slide 3 Image URL</label><input type="url" id="sett-banner3" value="${settings.banner3 || ''}"></div>
                </div>
              </div>

              <button type="submit" class="btn-primary" style="width:200px; text-align:center; align-self:flex-end;">Save Settings</button>
            </form>
          </div>

        </div>
      </div>
    </div>
  `;
  document.getElementById('main-app').innerHTML = adminHtml;
}

// --- Dynamic Modal Builders (Product add/edit, Blog write, Order view) ---

function openProductModal(prodId = '') {
  const modalContainer = document.getElementById('modals-app');
  let p = { name: '', category: 'Ready to Wear', subcategory: '', price: '', originalPrice: '', image: '', description: '', benefits: '', ingredients: '', usage: '', concerns: '', inventory: 20, weight: 200, length_cm: 15, width_cm: 10, height_cm: 5, sku: '', hsn: '', gst: 5 };
  
  if (prodId) {
    const found = store.getProductById(prodId);
    if (found) {
      p = {
        ...found,
        benefits: found.benefits ? found.benefits.join('\n') : '',
        concerns: found.concerns ? found.concerns.join(',') : '',
        length_cm: found.dimensions ? found.dimensions.length_cm : 15,
        width_cm: found.dimensions ? found.dimensions.width_cm : 10,
        height_cm: found.dimensions ? found.dimensions.height_cm : 5
      };
    }
  }

  const modalOverlayHtml = `
    <div class="modal-overlay active" id="admin-prod-modal">
      <div class="modal-box" style="width: 700px;">
        <span class="modal-close" onclick="closeAdminModal('admin-prod-modal')">${ICONS.close}</span>
        <h2 style="margin-bottom:20px; font-family:var(--font-heading); font-size:24px;">${prodId ? 'Edit Product Settings' : 'Add New Handcrafted Product'}</h2>
        
        <form id="admin-product-edit-form" onsubmit="handleSaveProduct(event, '${prodId}')">
          <div class="checkout-form-grid">
            <div class="form-group full-width">
              <label>Product Title *</label>
              <input type="text" id="prod-name" required value="${p.name}" placeholder="e.g. Pure Almond Herbal Soap">
            </div>
            <div class="form-group">
              <label>Main Category *</label>
              <select id="prod-cat" required>
                <option value="Ready to Wear" ${p.category === 'Ready to Wear' ? 'selected' : ''}>Ready to Wear</option>
                <option value="Fabrics" ${p.category === 'Fabrics' ? 'selected' : ''}>Fabrics</option>
                <option value="Skin" ${p.category === 'Skin' ? 'selected' : ''}>Skin Care</option>
                <option value="Hair" ${p.category === 'Hair' ? 'selected' : ''}>Hair Care</option>
                <option value="Face" ${p.category === 'Face' ? 'selected' : ''}>Face Care</option>
                <option value="Health & Foods" ${p.category === 'Health & Foods' ? 'selected' : ''}>Foods & Honey</option>
                <option value="Pooja" ${p.category === 'Pooja' ? 'selected' : ''}>Pooja & Itra</option>
              </select>
            </div>
            <div class="form-group">
              <label>Subcategory (e.g. Kurta, Shampoo)</label>
              <input type="text" id="prod-subcat" value="${p.subcategory}" placeholder="Kurta">
            </div>
            <div class="form-group">
              <label>Selling Price (₹) *</label>
              <input type="number" id="prod-price" required value="${p.price}" placeholder="399">
            </div>
            <div class="form-group">
              <label>Original Price (₹ - for discounts)</label>
              <input type="number" id="prod-origprice" value="${p.originalPrice}" placeholder="499">
            </div>
            <div class="form-group">
              <label>Current Stock Inventory *</label>
              <input type="number" id="prod-stock" required value="${p.inventory}" placeholder="50">
            </div>
            <div class="form-group">
              <label>SKU Code * (Critical for Shiprocket)</label>
              <input type="text" id="prod-sku" required value="${p.sku}" placeholder="KSR-SKN-SOP-ALM">
            </div>
            <div class="form-group">
              <label>HSN Code * (Harmonized System Code)</label>
              <input type="text" id="prod-hsn" required value="${p.hsn}" placeholder="34011110">
            </div>
            <div class="form-group">
              <label>GST Rate % *</label>
              <select id="prod-gst" required>
                <option value="5" ${p.gst == 5 ? 'selected' : ''}>5% GST (Yarns, Fabrics, clothes)</option>
                <option value="12" ${p.gst == 12 ? 'selected' : ''}>12% GST (Supplement, Bedsheets)</option>
                <option value="18" ${p.gst == 18 ? 'selected' : ''}>18% GST (Toiletries, Cosmetics)</option>
                <option value="0" ${p.gst == 0 ? 'selected' : ''}>0% GST (Exempted)</option>
              </select>
            </div>
            
            <div class="form-group full-width" style="border-top: 1px solid var(--color-border); padding-top:15px; margin-top:5px;">
              <h4 style="font-family:var(--font-body); font-weight:700;">Package Shipping Configuration</h4>
            </div>
            <div class="form-group">
              <label>Gross Weight (Grams) *</label>
              <input type="number" id="prod-weight" required value="${p.weight}" placeholder="250">
            </div>
            <div class="form-group" style="display:flex; flex-direction:row; gap:5px; grid-column: span 1;">
              <div style="flex:1;"><label style="font-size:10px;">Length (cm)</label><input type="number" id="prod-len" required value="${p.length_cm}"></div>
              <div style="flex:1;"><label style="font-size:10px;">Width (cm)</label><input type="number" id="prod-width" required value="${p.width_cm}"></div>
              <div style="flex:1;"><label style="font-size:10px;">Height (cm)</label><input type="number" id="prod-height" required value="${p.height_cm}"></div>
            </div>

            <div class="form-group full-width">
              <label>Product Main Image URL *</label>
              <input type="url" id="prod-img" required value="${p.image}" placeholder="https://images.unsplash.com/photo-...">
            </div>
            <div class="form-group full-width">
              <label>Description Details *</label>
              <textarea id="prod-desc" rows="3" required placeholder="Enter primary product highlights...">${p.description}</textarea>
            </div>
            <div class="form-group full-width">
              <label>Benefits (One benefit per line)</label>
              <textarea id="prod-benefits" rows="3" placeholder="Fades wrinkles&#10;Keeps skin moisturized">${p.benefits}</textarea>
            </div>
            <div class="form-group">
              <label>Active Ingredients</label>
              <input type="text" id="prod-ingredients" value="${p.ingredients || ''}" placeholder="Sweet almond oil, honey, saffron">
            </div>
            <div class="form-group">
              <label>Ayurvedic Concern Mapping (Comma separated)</label>
              <input type="text" id="prod-concerns" value="${p.concerns}" placeholder="Dry Skin, Acne, Summer Wear">
            </div>
          </div>
          <button type="submit" class="btn-primary" style="margin-top:25px; width:100%; text-align:center;">Save Product & Sync</button>
        </form>
      </div>
    </div>
  `;
  
  const div = document.createElement('div');
  div.innerHTML = modalOverlayHtml;
  modalContainer.appendChild(div.firstElementChild);
}

function openBlogModal(blogId = '') {
  const modalContainer = document.getElementById('modals-app');
  let b = { title: '', excerpt: '', image: '', content: '' };
  
  if (blogId) {
    const found = store.getBlogs().find(item => item.id === blogId);
    if (found) b = found;
  }

  const modalOverlayHtml = `
    <div class="modal-overlay active" id="admin-blog-modal">
      <div class="modal-box" style="width: 700px;">
        <span class="modal-close" onclick="closeAdminModal('admin-blog-modal')">${ICONS.close}</span>
        <h2 style="margin-bottom:20px; font-family:var(--font-heading); font-size:24px;">${blogId ? 'Edit Blog Post' : 'Compose New Article'}</h2>
        
        <form id="admin-blog-edit-form" onsubmit="handleSaveBlog(event, '${blogId}')">
          <div class="checkout-form-grid" style="grid-template-columns: 1fr;">
            <div class="form-group">
              <label>Article Title *</label>
              <input type="text" id="blog-title" required value="${b.title}" placeholder="e.g. 5 Benefits of Cold Pressed Sandalwood Soap">
            </div>
            <div class="form-group">
              <label>Banner Image URL *</label>
              <input type="url" id="blog-img" required value="${b.image}" placeholder="https://images.unsplash.com/photo-...">
            </div>
            <div class="form-group">
              <label>Excerpt Summary * (Short teaser displayed in catalog)</label>
              <input type="text" id="blog-excerpt" required value="${b.excerpt}" placeholder="Brief introduction to capture readers' attention.">
            </div>
            <div class="form-group">
              <label>Article Content (supports HTML paragraphs) *</label>
              <textarea id="blog-content" rows="12" required placeholder="<p>Ayurveda suggests that sandal...</p>">${b.content}</textarea>
            </div>
          </div>
          <button type="submit" class="btn-primary" style="margin-top:25px; width:100%; text-align:center;">Publish Post</button>
        </form>
      </div>
    </div>
  `;
  
  const div = document.createElement('div');
  div.innerHTML = modalOverlayHtml;
  modalContainer.appendChild(div.firstElementChild);
}

function openOrderViewModal(orderId) {
  const o = store.getOrders().find(item => item.id === orderId);
  if (!o) return;

  const modalContainer = document.getElementById('modals-app');
  const detailsHtml = `
    <div class="modal-overlay active" id="admin-order-view-modal">
      <div class="modal-box" style="width:600px;">
        <span class="modal-close" onclick="closeAdminModal('admin-order-view-modal')">${ICONS.close}</span>
        <h2 style="margin-bottom:15px; font-family:var(--font-heading);">Invoice Details: ${o.id}</h2>
        
        <div style="font-size:14px; display:flex; flex-direction:column; gap:8px; border-bottom:1px solid var(--color-border); padding-bottom:15px; margin-bottom:15px;">
          <p>📅 <b>Order Date:</b> ${o.date}</p>
          <p>💳 <b>Payment Mode:</b> ${o.paymentMethod} (Transaction ID: <code>${o.paymentId}</code>)</p>
          <p>📦 <b>Shipping weight:</b> ${o.weightGrams} grams</p>
          <p>🧾 <b>Customer GST:</b> <code>${o.customer.gst || 'None provided'}</code></p>
        </div>

        <h4 style="margin-bottom:10px;">Delivery Address</h4>
        <div style="font-size:13px; background-color:var(--color-bg-secondary); padding:12px; border-radius:4px; margin-bottom:15px;">
          <b>${o.customer.name}</b><br>
          Phone: ${o.customer.phone}<br>
          Email: ${o.customer.email}<br>
          Address: ${o.customer.address}, ${o.customer.city}, ${o.customer.state} - ${o.customer.pincode}
        </div>

        <h4 style="margin-bottom:10px;">Product Items Checklist</h4>
        <div style="display:flex; flex-direction:column; gap:8px; margin-bottom:15px; border-bottom:1px solid var(--color-border); padding-bottom:15px;">
          ${o.items.map(item => `
            <div style="display:flex; justify-content:space-between; font-size:13px;">
              <span>${item.name} <b>(x${item.qty})</b><br><small style="color:var(--color-text-muted);">SKU: ${item.sku} | HSN: ${item.hsn} | GST: ${item.gst}%</small></span>
              <span style="font-weight:600;">₹${item.price * item.qty}</span>
            </div>
          `).join('')}
        </div>

        <div style="display:flex; flex-direction:column; gap:8px; font-size:14px;">
          <div style="display:flex; justify-content:space-between;"><span>Subtotal</span><span>₹${o.subtotal}</span></div>
          ${o.discount > 0 ? `<div style="display:flex; justify-content:space-between; color:var(--color-accent-green);"><span>Discount Code</span><span>- ₹${o.discount}</span></div>` : ''}
          <div style="display:flex; justify-content:space-between;"><span>Shipping Charge</span><span>₹${o.shippingCharge}</span></div>
          <div style="display:flex; justify-content:space-between; font-size:16px; font-weight:700; border-top:1px solid var(--color-border); padding-top:8px;">
            <span>Grand Total</span><span>₹${o.total}</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  const div = document.createElement('div');
  div.innerHTML = detailsHtml;
  modalContainer.appendChild(div.firstElementChild);
}

function closeAdminModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.remove();
}

// --- Callback Handlers & State Modifiers ---

function switchAdminTab(tabName, btn) {
  activeAdminTab = tabName;
  renderAdmin();
}

function toggleSettingsFirebaseInputs(show) {
  const el = document.getElementById('firebase-config-inputs');
  if (el) el.style.display = show ? 'grid' : 'none';
}

function handleSaveSettings(e) {
  e.preventDefault();
  const dbMode = document.querySelector('input[name="db_mode"]:checked').value;
  const settingsData = {
    dbMode,
    firebaseConfig: {
      apiKey: document.getElementById('sett-fb-key').value,
      authDomain: document.getElementById('sett-fb-auth').value,
      projectId: document.getElementById('sett-fb-project').value,
      storageBucket: document.getElementById('sett-fb-bucket').value,
      appId: document.getElementById('sett-fb-appid').value
    },
    razorpayKeyId: document.getElementById('sett-rzp-key').value,
    storePhone: document.getElementById('sett-store-phone').value,
    shiprocketEmail: document.getElementById('sett-ship-email').value,
    shiprocketPassword: document.getElementById('sett-ship-pass').value,
    banner1: document.getElementById('sett-banner1').value,
    banner2: document.getElementById('sett-banner2').value,
    banner3: document.getElementById('sett-banner3').value
  };

  store.saveSettings(settingsData);
  alert("Settings & integration configurations updated in real-time.");
  renderAdmin();
}

function handleSaveProduct(e, prodId = '') {
  e.preventDefault();
  const productData = {
    name: document.getElementById('prod-name').value,
    category: document.getElementById('prod-cat').value,
    subcategory: document.getElementById('prod-subcat').value,
    price: parseInt(document.getElementById('prod-price').value),
    originalPrice: parseInt(document.getElementById('prod-origprice').value) || parseInt(document.getElementById('prod-price').value),
    inventory: parseInt(document.getElementById('prod-stock').value),
    sku: document.getElementById('prod-sku').value,
    hsn: document.getElementById('prod-hsn').value,
    gst: parseInt(document.getElementById('prod-gst').value),
    weight: parseInt(document.getElementById('prod-weight').value),
    dimensions: {
      length_cm: parseInt(document.getElementById('prod-len').value),
      width_cm: parseInt(document.getElementById('prod-width').value),
      height_cm: parseInt(document.getElementById('prod-height').value)
    },
    image: document.getElementById('prod-img').value,
    description: document.getElementById('prod-desc').value,
    benefits: document.getElementById('prod-benefits').value.split('\n').filter(l => l.trim() !== ''),
    ingredients: document.getElementById('prod-ingredients').value,
    concerns: document.getElementById('prod-concerns').value.split(',').map(s => s.trim()).filter(s => s !== '')
  };

  if (prodId) productData.id = prodId;

  store.saveProduct(productData);
  closeAdminModal('admin-prod-modal');
  renderAdmin();
}

function handleDeleteProduct(id) {
  if (confirm("Are you sure you want to delete this product?")) {
    store.deleteProduct(id);
    renderAdmin();
  }
}

function handleSaveCoupon(e) {
  e.preventDefault();
  const couponData = {
    code: document.getElementById('coupon-code').value.toUpperCase().trim(),
    discountPercent: parseInt(document.getElementById('coupon-percent').value),
    minCartValue: parseInt(document.getElementById('coupon-min').value),
    description: document.getElementById('coupon-desc').value
  };

  store.saveCoupon(couponData);
  alert("Coupon code successfully added.");
  document.getElementById('admin-coupon-form').reset();
  renderAdmin();
}

function handleDeleteCoupon(code) {
  if (confirm(`Remove coupon code '${code}'?`)) {
    store.deleteCoupon(code);
    renderAdmin();
  }
}

function handleSaveBlog(e, blogId = '') {
  e.preventDefault();
  const blogData = {
    title: document.getElementById('blog-title').value,
    image: document.getElementById('blog-img').value,
    excerpt: document.getElementById('blog-excerpt').value,
    content: document.getElementById('blog-content').value
  };

  if (blogId) blogData.id = blogId;

  store.saveBlog(blogData);
  closeAdminModal('admin-blog-modal');
  renderAdmin();
}

function handleDeleteBlog(id) {
  if (confirm("Delete this blog article?")) {
    store.deleteBlog(id);
    renderAdmin();
  }
}

function handleShiprocketFulfill(orderId) {
  const result = store.shipOrder(orderId, "Delhivery Express");
  if (result.success) {
    alert(result.message);
  } else {
    alert(result.message);
  }
  renderAdmin();
}

function handleDeliverOrder(orderId) {
  store.deliverOrder(orderId);
  renderAdmin();
}

function handleReturnOrder(orderId) {
  if (confirm("Process return for this order? Items will be restocked automatically.")) {
    store.returnOrder(orderId);
    renderAdmin();
  }
}

// --- Cart Actions ---
function handleAddToCart(prodId) {
  store.addToCart(prodId, 1);
  showToast("Product added to shopping bag🌿");
}

function handleWishlistToggle(prodId) {
  store.toggleWishlist(prodId);
  renderHeader();
}

let activeDetailQty = 1;
function adjustDetailQty(val) {
  const el = document.getElementById('detail-qty-value');
  if (!el) return;
  activeDetailQty = Math.max(1, activeDetailQty + val);
  el.textContent = activeDetailQty;
}

function handleDetailAddToCart(prodId) {
  store.addToCart(prodId, activeDetailQty);
  activeDetailQty = 1;
  const el = document.getElementById('detail-qty-value');
  if (el) el.textContent = 1;
  showToast("Products added to shopping bag🌿");
}

function checkPincodeEstimate() {
  const pincode = document.getElementById('pincode-est-input').value;
  const resEl = document.getElementById('pincode-est-result');
  if (!resEl) return;

  const result = store.calculateShippingRates(pincode);
  if (result.success) {
    resEl.innerHTML = `<span style="color:var(--color-success); font-weight:600;">✓ serviceable via ${result.provider}</span><br>Freight Charge: ₹${result.charge} | Estimated delivery time: ${result.estimatedDays}`;
  } else {
    resEl.innerHTML = `<span style="color:var(--color-accent-red); font-weight:600;">✗ ${result.message}</span>`;
  }
}

function switchDetailTab(tab, btn) {
  const buttons = document.querySelectorAll('.tab-nav-btn');
  buttons.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  const panes = document.querySelectorAll('.tab-pane');
  panes.forEach(p => p.classList.remove('active'));
  
  document.getElementById(`tab-${tab}`).classList.add('active');
}

function setProductMainImage(src, thumb) {
  document.getElementById('main-product-img').src = src;
  const thumbs = document.querySelectorAll('.thumb-item');
  thumbs.forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

function setProductMainVideo(src, thumb) {
  const mainView = document.querySelector('.product-main-view');
  mainView.innerHTML = `<video src="${src}" autoplay muted loop controls style="width:100%; height:100%; object-fit:cover;"></video>`;
  const thumbs = document.querySelectorAll('.thumb-item');
  thumbs.forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}

// --- Checkout Operations ---
let selectedPayment = 'COD';
function selectPaymentMethod(method) {
  selectedPayment = method;
  document.getElementById('pay-card-cod').classList.toggle('active', method === 'COD');
  document.getElementById('pay-card-online').classList.toggle('active', method === 'ONLINE');
  document.getElementById('pay-radio-cod').checked = (method === 'COD');
  document.getElementById('pay-radio-online').checked = (method === 'ONLINE');
}

function handleCheckoutCoupon() {
  const code = document.getElementById('checkout-coupon-code').value;
  const result = store.applyCouponCode(code);
  const msgEl = document.getElementById('checkout-coupon-msg');
  
  if (result.success) {
    msgEl.innerHTML = `<span style="color:var(--color-accent-green);">${result.message} <a href="#" onclick="event.preventDefault(); removeCheckoutCoupon()" style="color:var(--color-accent-red); margin-left:5px;">Remove</a></span>`;
    // Re-render Checkout to calculate discounts
    renderCheckout();
  } else {
    msgEl.innerHTML = `<span style="color:var(--color-accent-red);">${result.message}</span>`;
  }
}

function removeCheckoutCoupon() {
  store.removeCoupon();
  renderCheckout();
}

function updateCheckoutShippingRate(pincode) {
  if (pincode.length === 6 && !isNaN(pincode)) {
    renderCheckout();
  }
}

// Handle Checkout placement + Razorpay payment gateway popup simulations
function handlePlaceOrder(e) {
  e.preventDefault();
  
  const customerDetails = {
    name: document.getElementById('checkout-name').value,
    phone: document.getElementById('checkout-phone').value,
    email: document.getElementById('checkout-email').value,
    address: document.getElementById('checkout-address').value,
    city: document.getElementById('checkout-city').value,
    state: document.getElementById('checkout-state').value,
    pincode: document.getElementById('checkout-pincode').value,
    gst: document.getElementById('checkout-gst').value
  };

  const amount = store.getCartSubtotal() - store.getDiscountAmount() + (store.calculateShippingRates(customerDetails.pincode).charge || 60);

  if (selectedPayment === 'ONLINE') {
    // Simulate Razorpay checkout popup
    const rzpayKey = store.getSettings().razorpayKeyId || 'rzp_test_mockKey12345';
    
    // Inject visual gateway modal wrapper
    const gateHtml = `
      <div class="modal-overlay active" id="razorpay-simulation-modal" style="z-index: 300;">
        <div class="modal-box" style="width:400px; text-align:center; padding:40px 30px;">
          <h2 style="font-family:var(--font-heading); margin-bottom:15px; color:#1F3E99;">💳 Razorpay Secure Checkout</h2>
          <p style="font-size:14px; color:var(--color-text-muted); margin-bottom:20px;">Paying: <b>₹${amount}</b> to Khadi Store Ratlam</p>
          
          <div style="background-color:var(--color-bg-secondary); padding:20px; border-radius:6px; margin-bottom:25px; text-align:left;">
            <p style="font-size:13px; font-weight:600; margin-bottom:8px;">Choose Test Instruments:</p>
            <label style="display:block; font-size:12px; margin-bottom:6px;"><input type="radio" name="rzp_opt" id="rzp-success" checked> Simulate Successful Transaction</label>
            <label style="display:block; font-size:12px;"><input type="radio" name="rzp_opt" id="rzp-fail"> Simulate Failed Transaction</label>
          </div>

          <div style="display:flex; gap:15px;">
            <button class="btn-primary" style="flex:1; background-color:#1F3E99;" onclick="completeRazorpayPayment(true, '${encodeURIComponent(JSON.stringify(customerDetails))}', '${amount}')">Authorize Payment</button>
            <button class="btn-primary" style="flex:1; background-color:var(--color-accent-red);" onclick="completeRazorpayPayment(false)">Cancel</button>
          </div>
        </div>
      </div>
    `;
    const div = document.createElement('div');
    div.innerHTML = gateHtml;
    document.getElementById('modals-app').appendChild(div.firstElementChild);
  } else {
    // Cash on Delivery direct placement
    const order = store.createOrder(customerDetails, 'COD', 'COD_PENDING');
    alert(`Order ORD-${order.id} placed successfully! Thank you for supporting weavers.`);
    navigateTo(`#`);
  }
}

function completeRazorpayPayment(success, customerDetailsEncoded = '', amount = 0) {
  const modal = document.getElementById('razorpay-simulation-modal');
  if (modal) modal.remove();

  if (success && document.getElementById('rzp-success')?.checked) {
    const customerDetails = JSON.parse(decodeURIComponent(customerDetailsEncoded));
    const payId = "pay_test_" + Math.floor(1000000000 + Math.random() * 9000000000);
    const order = store.createOrder(customerDetails, 'ONLINE', payId);
    
    // Trigger canvas confetti if loaded
    if (typeof confetti === 'function') confetti();
    
    alert(`Payment Successful! Transaction ID: ${payId}. Order ORD-${order.id} booked.`);
    navigateTo(`#`);
  } else {
    alert("Payment gateway transaction cancelled or failed. Please try again.");
  }
}

// --- B2B Wholesale form submission ---
function handleB2BForm(e) {
  e.preventDefault();
  const inquiryData = {
    name: document.getElementById('b2b-name').value,
    phone: document.getElementById('b2b-phone').value,
    email: document.getElementById('b2b-email').value,
    gst: document.getElementById('b2b-gst').value,
    product: document.getElementById('b2b-product').value,
    quantity: document.getElementById('b2b-quantity').value,
    message: document.getElementById('b2b-message').value
  };

  store.submitB2BInquiry(inquiryData);
  alert("Wholesale B2B inquiry received. A sourcing manager will contact you on WhatsApp within 12 hours.");
  document.getElementById('b2b-inquiry-form').reset();
}

function sendB2BWhatsAppRedirect() {
  const prod = document.getElementById('b2b-product')?.value || "Wholesale Cotton Fabrics";
  const qty = document.getElementById('b2b-quantity')?.value || "Not specified";
  const url = `https://wa.me/919876543210?text=Hi,%20I%20am%20interested%20in%20wholesale%20sourcing%20of%20${encodeURIComponent(prod)}%20for%20quantity:%20${encodeURIComponent(qty)}.`;
  window.open(url, '_blank');
}

// --- Order Tracking Search ---
function handleTrackOrderSearch() {
  const orderId = document.getElementById('track-order-id-input').value.toUpperCase().trim();
  const resultsEl = document.getElementById('track-order-results');
  if (!resultsEl) return;

  const o = store.getOrders().find(item => item.id === orderId);
  if (!o) {
    resultsEl.innerHTML = `<span style="color:var(--color-accent-red); font-weight:600;">✗ No order matches code "${orderId}". Ensure you entered the prefix ORD-</span>`;
    return;
  }

  // Tracking details
  let timeline = '';
  if (o.status === 'pending') {
    timeline = `
      <div style="border-left: 2px solid var(--color-border); padding-left:15px; margin-left:10px;">
        <p style="font-weight:600; color:var(--color-accent-gold-dark);">● Order Booked (Pending Dispatch)</p>
        <p style="font-size:12px; color:var(--color-text-muted);">We are hand-weaving/packaging your items. Shiprocket pickup booked.</p>
      </div>
    `;
  } else if (o.status === 'shipped') {
    timeline = `
      <div style="border-left: 2px solid var(--color-accent-gold); padding-left:15px; margin-left:10px; display:flex; flex-direction:column; gap:10px;">
        <p style="color:var(--color-text-muted);">● Order Booked</p>
        <p style="font-weight:600; color:var(--color-accent-gold-dark);">● Dispatched via ${o.shiprocketDetails.courierPartner}</p>
        <p style="font-size:12px; color:var(--color-text-muted);">AWB: <code>${o.shiprocketDetails.awb}</code> | Tracking Link: <a href="https://shiprocket.co/tracking/${o.shiprocketDetails.trackingId}" target="_blank" style="text-decoration:underline;">Click to Trace Shipment</a></p>
      </div>
    `;
  } else if (o.status === 'delivered') {
    timeline = `
      <div style="border-left: 2px solid var(--color-success); padding-left:15px; margin-left:10px; display:flex; flex-direction:column; gap:10px;">
        <p style="color:var(--color-text-muted);">● Order Booked</p>
        <p style="color:var(--color-text-muted);">● Dispatched via ${o.shiprocketDetails.courierPartner}</p>
        <p style="font-weight:600; color:var(--color-success);">✓ Delivered</p>
        <p style="font-size:12px; color:var(--color-text-muted);">Package handed over to customer.</p>
      </div>
    `;
  } else if (o.status === 'returned') {
    timeline = `
      <div style="border-left: 2px solid var(--color-accent-red); padding-left:15px; margin-left:10px;">
        <p style="font-weight:600; color:var(--color-accent-red);">↩ Returned</p>
        <p style="font-size:12px; color:var(--color-text-muted);">The package was returned to store. Refund processed.</p>
      </div>
    `;
  }

  resultsEl.innerHTML = `
    <div style="border-top:1px solid var(--color-border); padding-top:15px; margin-top:15px;">
      <h3 style="font-size:16px; margin-bottom:10px;">Order: <span style="color:var(--color-accent-gold-dark);">${o.id}</span></h3>
      <p style="font-size:13px; margin-bottom:5px;"><b>Status:</b> <span class="status-pill ${o.status}">${o.status}</span></p>
      <p style="font-size:13px; margin-bottom:15px;"><b>Items:</b> ${o.items.map(i=>`${i.name} x${i.qty}`).join(', ')}</p>
      <h4 style="margin-bottom:10px; font-size:14px;">Shipment Timeline</h4>
      ${timeline}
    </div>
  `;
}

// --- View Helpers ---
function toggleCartDrawer(show) {
  const cart = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  if (cart && overlay) {
    cart.classList.toggle('active', show);
    overlay.classList.toggle('active', show);
  }
}

function toggleMobileMenu(force) {
  const menu = document.getElementById('nav-menu');
  if (menu) {
    if (typeof force === 'boolean') {
      menu.classList.toggle('active', force);
    } else {
      menu.classList.toggle('active');
    }
  }
}

let heroSlideTimer = null;
let activeHeroSlide = 0;
function startHeroAutoplay() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    setHeroSlide((activeHeroSlide + 1) % slides.length);
  }, 5000);
}

function setHeroSlide(idx) {
  activeHeroSlide = idx;
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (slides.length === 0) return;

  slides.forEach((s, sIdx) => s.classList.toggle('active', sIdx === idx));
  dots.forEach((d, dIdx) => d.classList.toggle('active', dIdx === idx));
}

function scrollToVisitSection() {
  navigateTo('#');
  setTimeout(() => {
    const el = document.getElementById('store-visit-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, 100);
}

function openTrackOrderModal() {
  const modal = document.getElementById('track-order-modal');
  if (modal) modal.classList.add('active');
}

function closeTrackOrderModal() {
  const modal = document.getElementById('track-order-modal');
  if (modal) modal.classList.remove('active');
}

// Simple dynamic Toast notification
function showToast(msg) {
  let toast = document.getElementById('ks-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'ks-toast';
    toast.style.cssText = "position:fixed; bottom:20px; left:20px; background-color:var(--color-text-primary); color:#fff; padding:12px 24px; border-radius:4px; font-size:14px; font-weight:500; z-index:400; box-shadow:0 4px 15px rgba(0,0,0,0.15); transform:translateY(100px); opacity:0; transition:var(--transition-smooth);";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.transform = "translateY(0)";
  toast.style.opacity = "1";
  
  setTimeout(() => {
    toast.style.transform = "translateY(100px)";
    toast.style.opacity = "0";
  }, 2500);
}

// Attach callbacks to window for inline onclick attributes
window.navigateTo = (hash) => {
  window.location.hash = hash;
};
window.toggleCartDrawer = toggleCartDrawer;
window.toggleMobileMenu = toggleMobileMenu;
window.setHeroSlide = setHeroSlide;
window.handleAddToCart = handleAddToCart;
window.handleWishlistToggle = handleWishlistToggle;
window.handleDetailAddToCart = handleDetailAddToCart;
window.adjustDetailQty = adjustDetailQty;
window.checkPincodeEstimate = checkPincodeEstimate;
window.switchDetailTab = switchDetailTab;
window.setProductMainImage = setProductMainImage;
window.setProductMainVideo = setProductMainVideo;
window.selectPaymentMethod = selectPaymentMethod;
window.handleCheckoutCoupon = handleCheckoutCoupon;
window.removeCheckoutCoupon = removeCheckoutCoupon;
window.updateCheckoutShippingRate = updateCheckoutShippingRate;
window.handlePlaceOrder = handlePlaceOrder;
window.completeRazorpayPayment = completeRazorpayPayment;
window.handleB2BForm = handleB2BForm;
window.sendB2BWhatsAppRedirect = sendB2BWhatsAppRedirect;
window.openTrackOrderModal = openTrackOrderModal;
window.closeTrackOrderModal = closeTrackOrderModal;
window.handleTrackOrderSearch = handleTrackOrderSearch;
window.scrollToVisitSection = scrollToVisitSection;

// Admin attachment
window.switchAdminTab = switchAdminTab;
window.toggleSettingsFirebaseInputs = toggleSettingsFirebaseInputs;
window.handleSaveSettings = handleSaveSettings;
window.handleSaveProduct = handleSaveProduct;
window.handleDeleteProduct = handleDeleteProduct;
window.openProductModal = openProductModal;
window.closeAdminModal = closeAdminModal;
window.handleSaveCoupon = handleSaveCoupon;
window.handleDeleteCoupon = handleDeleteCoupon;
window.handleSaveBlog = handleSaveBlog;
window.handleDeleteBlog = handleDeleteBlog;
window.openBlogModal = openBlogModal;
window.openOrderViewModal = openOrderViewModal;
window.handleShiprocketFulfill = handleShiprocketFulfill;
window.handleDeliverOrder = handleDeliverOrder;
window.handleReturnOrder = handleReturnOrder;

