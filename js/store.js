// ==========================================================================
// CENTRAL STATE STORE (Khadi Store Ratlam)
// ==========================================================================

class KhadiStore {
  constructor() {
    this.initStore();
  }

  initStore() {
    // Check if store already initialized in localStorage, otherwise load from INITIAL_DATA
    if (!localStorage.getItem('ks_initialized')) {
      localStorage.setItem('ks_products', JSON.stringify(INITIAL_PRODUCTS));
      localStorage.setItem('ks_coupons', JSON.stringify(INITIAL_COUPONS));
      localStorage.setItem('ks_blogs', JSON.stringify(INITIAL_BLOGS));
      localStorage.setItem('ks_orders', JSON.stringify([]));
      localStorage.setItem('ks_b2b_inquiries', JSON.stringify([]));
      localStorage.setItem('ks_wishlist', JSON.stringify([]));
      localStorage.setItem('ks_cart', JSON.stringify([]));
      localStorage.setItem('ks_recently_viewed', JSON.stringify([]));
      localStorage.setItem('ks_settings', JSON.stringify({
        dbMode: 'local', // 'local' or 'firebase'
        firebaseConfig: { apiKey: '', authDomain: '', projectId: '', storageBucket: '', messagingSenderId: '', appId: '' },
        razorpayKeyId: 'rzp_test_mockKey12345',
        shiprocketEmail: 'demo@khadistoreratlam.com',
        shiprocketPassword: '',
        storePhone: '+919876543210',
        storeAddress: "Khadi Store Ratlam, Near Station Road, Ratlam, Madhya Pradesh 457001",
        timings: "10:00 AM - 9:00 PM (Monday - Saturday)",
        banner1: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200",
        banner2: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=1200",
        banner3: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&q=80&w=1200"
      }));
      localStorage.setItem('ks_initialized', 'true');
    }

    // Load into class properties
    this.products = JSON.parse(localStorage.getItem('ks_products')) || [];
    this.coupons = JSON.parse(localStorage.getItem('ks_coupons')) || [];
    this.blogs = JSON.parse(localStorage.getItem('ks_blogs')) || [];
    this.orders = JSON.parse(localStorage.getItem('ks_orders')) || [];
    this.b2bInquiries = JSON.parse(localStorage.getItem('ks_b2b_inquiries')) || [];
    this.wishlist = JSON.parse(localStorage.getItem('ks_wishlist')) || [];
    this.cart = JSON.parse(localStorage.getItem('ks_cart')) || [];
    this.recentlyViewed = JSON.parse(localStorage.getItem('ks_recently_viewed')) || [];
    this.settings = JSON.parse(localStorage.getItem('ks_settings')) || {};
    this.activeCoupon = null;
    
    // Listeners for UI state update
    this.listeners = [];
  }

  // --- Recently Viewed Subsystem ---
  addRecentlyViewed(productId) {
    this.recentlyViewed = this.recentlyViewed.filter(id => id !== productId);
    this.recentlyViewed.unshift(productId);
    this.recentlyViewed = this.recentlyViewed.slice(0, 4); // Cap at 4 items
    this.saveToStorage('ks_recently_viewed', this.recentlyViewed);
  }

  getRecentlyViewed() {
    return this.recentlyViewed.map(id => this.getProductById(id)).filter(Boolean);
  }

  // --- Listener Subsystem ---
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      this.listeners = this.listeners.filter(l => l !== callback);
    };
  }

  notify() {
    this.listeners.forEach(callback => callback());
  }

  saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    this.notify();
  }

  // --- Products CRUD ---
  getProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(p => p.id === id);
  }

  saveProduct(productData) {
    if (productData.id) {
      // Edit
      this.products = this.products.map(p => p.id === productData.id ? { ...p, ...productData } : p);
    } else {
      // Add
      const newProduct = {
        ...productData,
        id: 'prod-' + Date.now(),
        rating: 5.0,
        reviewsCount: 0
      };
      this.products.push(newProduct);
    }
    this.saveToStorage('ks_products', this.products);
  }

  deleteProduct(id) {
    this.products = this.products.filter(p => p.id !== id);
    this.saveToStorage('ks_products', this.products);
    // Remove from cart if present
    this.removeFromCart(id);
  }

  // --- Cart Operations ---
  getCart() {
    return this.cart;
  }

  addToCart(productId, qty = 1) {
    const product = this.getProductById(productId);
    if (!product) return;

    const existingItem = this.cart.find(item => item.productId === productId);
    if (existingItem) {
      const newQty = existingItem.qty + qty;
      if (newQty <= product.inventory) {
        existingItem.qty = newQty;
      } else {
        existingItem.qty = product.inventory;
        alert(`Only ${product.inventory} units available in stock.`);
      }
    } else {
      this.cart.push({
        productId,
        qty: Math.min(qty, product.inventory),
        price: product.price
      });
    }
    this.saveToStorage('ks_cart', this.cart);
  }

  updateCartQuantity(productId, qty) {
    const product = this.getProductById(productId);
    if (!product) return;

    const item = this.cart.find(i => i.productId === productId);
    if (item) {
      if (qty <= 0) {
        this.removeFromCart(productId);
        return;
      }
      if (qty <= product.inventory) {
        item.qty = qty;
      } else {
        item.qty = product.inventory;
        alert(`Only ${product.inventory} units available in stock.`);
      }
      this.saveToStorage('ks_cart', this.cart);
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.productId !== productId);
    this.saveToStorage('ks_cart', this.cart);
  }

  clearCart() {
    this.cart = [];
    this.activeCoupon = null;
    this.saveToStorage('ks_cart', this.cart);
  }

  getCartSubtotal() {
    return this.cart.reduce((sum, item) => {
      const p = this.getProductById(item.productId);
      return sum + (p ? p.price * item.qty : 0);
    }, 0);
  }

  getCartTotalWeight() {
    return this.cart.reduce((sum, item) => {
      const p = this.getProductById(item.productId);
      return sum + (p ? (p.weight || 200) * item.qty : 0);
    }, 0);
  }

  // --- Wishlist ---
  getWishlist() {
    return this.wishlist;
  }

  toggleWishlist(productId) {
    if (this.wishlist.includes(productId)) {
      this.wishlist = this.wishlist.filter(id => id !== productId);
    } else {
      this.wishlist.push(productId);
    }
    this.saveToStorage('ks_wishlist', this.wishlist);
  }

  isInWishlist(productId) {
    return this.wishlist.includes(productId);
  }

  // --- Coupons ---
  getCoupons() {
    return this.coupons;
  }

  saveCoupon(couponData) {
    const existing = this.coupons.find(c => c.code.toUpperCase() === couponData.code.toUpperCase());
    if (existing) {
      Object.assign(existing, couponData);
    } else {
      this.coupons.push(couponData);
    }
    this.saveToStorage('ks_coupons', this.coupons);
  }

  deleteCoupon(code) {
    this.coupons = this.coupons.filter(c => c.code !== code);
    this.saveToStorage('ks_coupons', this.coupons);
    if (this.activeCoupon && this.activeCoupon.code === code) {
      this.activeCoupon = null;
    }
  }

  applyCouponCode(code) {
    const subtotal = this.getCartSubtotal();
    const coupon = this.coupons.find(c => c.code.toUpperCase() === code.trim().toUpperCase());
    
    if (!coupon) {
      return { success: false, message: "Invalid Coupon Code" };
    }
    if (subtotal < coupon.minCartValue) {
      return { success: false, message: `Minimum cart value of ₹${coupon.minCartValue} required for this coupon.` };
    }
    
    this.activeCoupon = coupon;
    this.notify();
    return { success: true, message: `Coupon applied successfully! ${coupon.discountPercent}% off.` };
  }

  removeCoupon() {
    this.activeCoupon = null;
    this.notify();
  }

  getDiscountAmount() {
    if (!this.activeCoupon) return 0;
    const subtotal = this.getCartSubtotal();
    return Math.round((subtotal * this.activeCoupon.discountPercent) / 100);
  }

  // --- Shipping API Simulator ---
  calculateShippingRates(pincode) {
    if (!pincode || pincode.length !== 6 || isNaN(pincode)) {
      return { success: false, message: "Please enter a valid 6-digit postal code" };
    }
    
    // Simulate API query based on distance groups
    const digitSum = pincode.split('').reduce((a,b) => parseInt(a)+parseInt(b), 0);
    const subtotal = this.getCartSubtotal();
    
    // Free shipping above 999
    if (subtotal >= 1000) {
      return {
        success: true,
        charge: 0,
        provider: "Shiprocket Express (Free)",
        estimatedDays: digitSum % 3 === 0 ? "2-3 Days (Standard)" : "4-6 Days (Economy)"
      };
    }

    // Cost logic based on post-code digits
    let charge = 45;
    if (pincode.startsWith('4')) { // MP & Central India (Ratlam is 457xxx)
      charge = 40;
    } else if (pincode.startsWith('1') || pincode.startsWith('2') || pincode.startsWith('3')) { // North
      charge = 60;
    } else if (pincode.startsWith('5') || pincode.startsWith('6')) { // South
      charge = 75;
    } else { // East / remote
      charge = 90;
    }

    return {
      success: true,
      charge: charge,
      provider: "Shiprocket Surface Delivery",
      estimatedDays: digitSum % 2 === 0 ? "3-5 Days" : "5-7 Days"
    };
  }

  // --- Orders ---
  getOrders() {
    return this.orders;
  }

  createOrder(customerDetails, paymentMethod, paymentId = "COD_PENDING") {
    const subtotal = this.getCartSubtotal();
    const discount = this.getDiscountAmount();
    const totalWeight = this.getCartTotalWeight();
    
    // Get shipping rate for their checkout pincode
    const shippingInfo = this.calculateShippingRates(customerDetails.pincode);
    const shippingCharge = shippingInfo.success ? shippingInfo.charge : 60;
    const finalTotal = subtotal - discount + shippingCharge;

    const orderItems = this.cart.map(item => {
      const p = this.getProductById(item.productId);
      return {
        productId: item.productId,
        name: p ? p.name : "Unknown Product",
        qty: item.qty,
        price: item.price,
        sku: p ? p.sku : "",
        hsn: p ? p.hsn : "",
        gst: p ? p.gst : 5,
        weight: p ? p.weight : 200,
        dimensions: p ? p.dimensions : { length_cm: 15, width_cm: 10, height_cm: 5 }
      };
    });

    const newOrder = {
      id: 'ORD-' + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      customer: customerDetails,
      items: orderItems,
      subtotal,
      discount,
      shippingCharge,
      total: finalTotal,
      weightGrams: totalWeight,
      paymentMethod,
      paymentId,
      status: 'pending', // pending, paid, shipped, delivered, returned
      shiprocketDetails: {
        awb: "",
        trackingId: "",
        shipmentId: "",
        courierPartner: ""
      }
    };

    // Deduct stock inventory
    this.cart.forEach(item => {
      const prod = this.getProductById(item.productId);
      if (prod) {
        prod.inventory = Math.max(0, prod.inventory - item.qty);
      }
    });
    this.saveToStorage('ks_products', this.products);

    // Save order
    this.orders.unshift(newOrder);
    this.saveToStorage('ks_orders', this.orders);

    // Reset shopping cart
    this.clearCart();
    return newOrder;
  }

  // Shiprocket Order Shipment integration simulator
  shipOrder(orderId, courierName = "Delhivery Express") {
    const order = this.orders.find(o => o.id === orderId);
    if (!order) return { success: false, message: "Order not found" };

    // Shiprocket parameters validation
    for (let item of order.items) {
      if (!item.weight || !item.sku || !item.hsn || !item.dimensions || !item.dimensions.length_cm) {
        return {
          success: false,
          message: `Fulfillment failed. Item '${item.name}' requires SKU, HSN code, Weight, and Dimensions configured in product settings for Shiprocket to create air waybills.`
        };
      }
    }

    order.status = 'shipped';
    order.shiprocketDetails = {
      awb: "SR" + Math.floor(1000000000 + Math.random() * 9000000000),
      trackingId: "TRACK" + Math.floor(10000000 + Math.random() * 90000000),
      shipmentId: "SHP" + Math.floor(1000000 + Math.random() * 9000000),
      courierPartner: courierName
    };

    this.saveToStorage('ks_orders', this.orders);
    return { success: true, message: `Shipment booked with ${courierName}. AWB: ${order.shiprocketDetails.awb}` };
  }

  deliverOrder(orderId) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'delivered';
      this.saveToStorage('ks_orders', this.orders);
    }
  }

  returnOrder(orderId) {
    const order = this.orders.find(o => o.id === orderId);
    if (order) {
      order.status = 'returned';
      // Restock products
      order.items.forEach(item => {
        const prod = this.getProductById(item.productId);
        if (prod) {
          prod.inventory += item.qty;
        }
      });
      this.saveToStorage('ks_products', this.products);
      this.saveToStorage('ks_orders', this.orders);
    }
  }

  // --- B2B Wholesale Inquiries ---
  getB2BInquiries() {
    return this.b2bInquiries;
  }

  submitB2BInquiry(inquiryData) {
    const newInquiry = {
      id: 'INQ-' + Date.now(),
      date: new Date().toLocaleDateString('en-IN'),
      ...inquiryData,
      status: 'new' // new, contacted, closed
    };
    this.b2bInquiries.unshift(newInquiry);
    this.saveToStorage('ks_b2b_inquiries', this.b2bInquiries);
    return newInquiry;
  }

  updateB2BStatus(inquiryId, status) {
    this.b2bInquiries = this.b2bInquiries.map(inq => inq.id === inquiryId ? { ...inq, status } : inq);
    this.saveToStorage('ks_b2b_inquiries', this.b2bInquiries);
  }

  // --- Blogs CMS ---
  getBlogs() {
    return this.blogs;
  }

  getBlogBySlug(slug) {
    return this.blogs.find(b => b.slug === slug);
  }

  saveBlog(blogData) {
    const slug = blogData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (blogData.id) {
      this.blogs = this.blogs.map(b => b.id === blogData.id ? { ...b, ...blogData, slug } : b);
    } else {
      const newBlog = {
        ...blogData,
        id: 'blog-' + Date.now(),
        slug,
        author: 'Khadi Admin',
        date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
      };
      this.blogs.push(newBlog);
    }
    this.saveToStorage('ks_blogs', this.blogs);
  }

  deleteBlog(id) {
    this.blogs = this.blogs.filter(b => b.id !== id);
    this.saveToStorage('ks_blogs', this.blogs);
  }

  // --- Settings & Integrations ---
  getSettings() {
    const s = this.settings || {};
    if (!s.concernImg1) s.concernImg1 = "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=300";
    if (!s.concernImg2) s.concernImg2 = "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&q=80&w=300";
    if (!s.concernImg3) s.concernImg3 = "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=300";
    if (!s.concernImg4) s.concernImg4 = "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=300";
    if (!s.concernImg5) s.concernImg5 = "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=300";
    if (!s.concernImg6) s.concernImg6 = "https://images.unsplash.com/photo-1611078489935-0cb964de46d6?auto=format&fit=crop&q=80&w=300";
    if (!s.concernImg7) s.concernImg7 = "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=300";
    if (!s.concernImg8) s.concernImg8 = "https://images.unsplash.com/photo-1610970881699-44a5587caaec?auto=format&fit=crop&q=80&w=300";
    return s;
  }

  saveSettings(newSettings) {
    this.settings = { ...this.settings, ...newSettings };
    this.saveToStorage('ks_settings', this.settings);
  }
}

// Instantiate global store object
const store = new KhadiStore();
window.store = store; // attach to window for console diagnostics
