// ==========================================================================
// CENTRAL APPLICATION ROUTER & BOOTSTRAP (Khadi Store Ratlam)
// ==========================================================================

function handleRouting() {
  const hash = window.location.hash || '#';
  const mainContent = document.getElementById('main-app');

  // Close menus/drawers on page transitions
  toggleMobileMenu();
  toggleCartDrawer(false);

  // Parse path and query parameters
  // Format: #shop?category=Skin&concern=Dry%20Skin or #product?id=rtw-01
  const parts = hash.split('?');
  const path = parts[0];
  const queryStr = parts[1] || '';
  
  const params = {};
  if (queryStr) {
    queryStr.split('&').forEach(pair => {
      const [key, val] = pair.split('=');
      if (key) params[key] = decodeURIComponent(val || '');
    });
  }

  // Route matches
  if (path === '#' || path === '') {
    renderHome();
  } else if (path === '#shop') {
    const cat = params['category'] || '';
    const concern = params['concern'] || '';
    const search = params['search'] || '';
    const wishlist = params['wishlist'] === 'true';
    renderShop(cat, concern, search, wishlist);
  } else if (path === '#product') {
    const id = params['id'] || '';
    renderProductDetail(id);
  } else if (path === '#checkout') {
    renderCheckout();
  } else if (path === '#b2b') {
    renderB2B();
  } else if (path === '#blog') {
    const post = params['post'] || '';
    renderBlog(post);
  } else if (path === '#admin') {
    renderAdmin();
  } else if (path === '#contact') {
    renderHome();
    setTimeout(() => {
      const el = document.getElementById('store-visit-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 200);
  } else {
    // 404 fallback
    mainContent.innerHTML = `
      <div class="container" style="padding:100px 0; text-align:center;">
        <h2 style="font-size:36px; margin-bottom:15px;">Page Not Found</h2>
        <p style="color:var(--color-text-muted); margin-bottom:30px;">The Ayurvedic recipe or weaving path you followed does not exist.</p>
        <button onclick="navigateTo('#')" class="btn-primary">Return Home</button>
      </div>
    `;
  }

  // Scroll to top on page navigation
  window.scrollTo(0, 0);
}

// Bootstrap Application
document.addEventListener('DOMContentLoaded', () => {
  // Render static frame
  renderHeader();
  renderStickyFloats();
  renderCartDrawer();
  renderTrackOrderModal();

  // Run initial routing
  handleRouting();

  // Bind hash change listener
  window.addEventListener('hashchange', handleRouting);

  // Subscribe to store changes (updates headers & carts dynamically)
  store.subscribe(() => {
    renderHeader();
    renderCartDrawer();
    
    // If we are currently on the checkout page, update its visual calculations
    if (window.location.hash.split('?')[0] === '#checkout') {
      renderCheckout();
    }
    
    // If we are on the admin page, update its charts/tables
    if (window.location.hash.split('?')[0] === '#admin') {
      renderAdmin();
    }
  });
});
