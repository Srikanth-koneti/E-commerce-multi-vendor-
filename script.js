/* ============================================================
   MarketHub – Multi-Vendor E-Commerce  |  script.js
   Intern: Srikanth Koneti | ID: CITS5145 | CodTech IT Solutions
   ============================================================ */

'use strict';

/* ---- Data ---- */
const VENDORS = [
  { id: 'v1', name: 'TechZone',     category: 'Electronics',  emoji: '💻', rating: 4.9, products: 340, badge: 'Top Seller',   color: '#e8f4fd', textColor: '#2196f3' },
  { id: 'v2', name: 'FashionNest',  category: 'Fashion',      emoji: '👗', rating: 4.7, products: 820, badge: 'Verified',     color: '#fce4ec', textColor: '#e91e63' },
  { id: 'v3', name: 'HomeBliss',    category: 'Home & Kitchen', emoji: '🛋️', rating: 4.8, products: 510, badge: 'Top Seller', color: '#f3e5f5', textColor: '#9c27b0' },
  { id: 'v4', name: 'BookHaven',    category: 'Books',        emoji: '📚', rating: 4.6, products: 1200, badge: 'Verified',   color: '#e8f5e9', textColor: '#4caf50' },
  { id: 'v5', name: 'SportsPeak',   category: 'Sports',       emoji: '⚽', rating: 4.5, products: 290, badge: 'New Vendor',  color: '#fff3e0', textColor: '#ff9800' },
  { id: 'v6', name: 'GadgetWorld',  category: 'Electronics',  emoji: '📱', rating: 4.8, products: 460, badge: 'Top Seller', color: '#e0f7fa', textColor: '#00bcd4' },
];

const PRODUCTS = [
  { id: 1,  name: 'Wireless Noise-Cancelling Headphones', category: 'electronics', vendor: 'TechZone',    vendorId: 'v1', price: 2999, originalPrice: 5999, rating: 4.8, reviews: 1240, emoji: '🎧', discount: 50, desc: 'Premium sound quality with active noise cancellation, 30-hour battery life, and foldable design.' },
  { id: 2,  name: 'Smart Watch Pro Max 2026',             category: 'electronics', vendor: 'GadgetWorld', vendorId: 'v6', price: 4499, originalPrice: 7999, rating: 4.7, reviews: 893,  emoji: '⌚', discount: 44, desc: 'Track fitness, receive notifications, GPS, heart rate monitor and 2-week battery life.' },
  { id: 3,  name: 'Men\'s Casual Slim Fit T-Shirt',      category: 'fashion',     vendor: 'FashionNest', vendorId: 'v2', price: 399,  originalPrice: 799,  rating: 4.3, reviews: 2310, emoji: '👕', discount: 50, desc: 'Premium cotton fabric, available in 12 colors. Perfect for everyday wear.' },
  { id: 4,  name: 'Non-Stick Cookware Set (5 pcs)',       category: 'home',        vendor: 'HomeBliss',   vendorId: 'v3', price: 1299, originalPrice: 2499, rating: 4.6, reviews: 567,  emoji: '🍳', discount: 48, desc: 'Durable ceramic coating, compatible with all cooktops including induction.' },
  { id: 5,  name: 'Atomic Habits – James Clear',          category: 'books',       vendor: 'BookHaven',   vendorId: 'v4', price: 349,  originalPrice: 599,  rating: 4.9, reviews: 4520, emoji: '📖', discount: 42, desc: 'An easy and proven way to build good habits and break bad ones.' },
  { id: 6,  name: 'Yoga Mat Premium (6mm)',               category: 'sports',      vendor: 'SportsPeak',  vendorId: 'v5', price: 899,  originalPrice: 1499, rating: 4.5, reviews: 733,  emoji: '🧘', discount: 40, desc: 'High-density foam, non-slip surface, carry strap included. Eco-friendly material.' },
  { id: 7,  name: '4K OLED Smart TV 43"',                 category: 'electronics', vendor: 'TechZone',    vendorId: 'v1', price: 34999, originalPrice: 49999, rating: 4.8, reviews: 312, emoji: '📺', discount: 30, desc: 'Stunning 4K OLED display, Dolby Atmos sound, built-in streaming apps.' },
  { id: 8,  name: 'Women\'s Running Sneakers',           category: 'fashion',     vendor: 'FashionNest', vendorId: 'v2', price: 1799, originalPrice: 2999, rating: 4.4, reviews: 890,  emoji: '👟', discount: 40, desc: 'Lightweight mesh upper, cushioned sole, perfect for long runs and daily wear.' },
  { id: 9,  name: 'Stainless Steel Water Bottle 1L',     category: 'home',        vendor: 'HomeBliss',   vendorId: 'v3', price: 499,  originalPrice: 899,  rating: 4.7, reviews: 1560, emoji: '🍶', discount: 44, desc: 'Double-wall insulated, keeps drinks cold 24h / hot 12h, leak-proof cap.' },
  { id: 10, name: 'The Alchemist – Paulo Coelho',         category: 'books',       vendor: 'BookHaven',   vendorId: 'v4', price: 199,  originalPrice: 350,  rating: 4.8, reviews: 6700, emoji: '📗', discount: 43, desc: 'A mystical story of Santiago, an Andalusian shepherd boy who yearns to travel.' },
  { id: 11, name: 'Professional Badminton Racket',        category: 'sports',      vendor: 'SportsPeak',  vendorId: 'v5', price: 1199, originalPrice: 2200, rating: 4.6, reviews: 420,  emoji: '🏸', discount: 45, desc: 'Carbon fibre frame, excellent control and smash speed for all skill levels.' },
  { id: 12, name: 'Bluetooth Speaker Portable 20W',      category: 'electronics', vendor: 'GadgetWorld', vendorId: 'v6', price: 1499, originalPrice: 2999, rating: 4.5, reviews: 1100, emoji: '🔊', discount: 50, desc: 'Waterproof (IPX7), 360° sound, 12-hour playtime, built-in mic for calls.' },
  { id: 13, name: 'Formal Slim Fit Blazer',               category: 'fashion',     vendor: 'FashionNest', vendorId: 'v2', price: 2199, originalPrice: 3999, rating: 4.3, reviews: 340,  emoji: '🧥', discount: 45, desc: 'Premium fabric, tailored fit, ideal for meetings and formal occasions.' },
  { id: 14, name: 'Air Fryer 5L Digital',                 category: 'home',        vendor: 'HomeBliss',   vendorId: 'v3', price: 3499, originalPrice: 5999, rating: 4.7, reviews: 892,  emoji: '🥘', discount: 42, desc: 'Digital display, 8 preset modes, dishwasher-safe basket, rapid air technology.' },
  { id: 15, name: 'Rich Dad Poor Dad – Kiyosaki',         category: 'books',       vendor: 'BookHaven',   vendorId: 'v4', price: 249,  originalPrice: 499,  rating: 4.7, reviews: 3890, emoji: '💰', discount: 50, desc: 'The #1 personal finance book of all time, lessons about money and investing.' },
  { id: 16, name: 'Mechanical Gaming Keyboard RGB',       category: 'electronics', vendor: 'TechZone',    vendorId: 'v1', price: 2499, originalPrice: 4499, rating: 4.6, reviews: 670,  emoji: '⌨️', discount: 44, desc: 'Cherry MX switches, full RGB backlight, anti-ghosting, aluminum body.' },
];

/* ---- State ---- */
let cart = JSON.parse(localStorage.getItem('mh_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('mh_wishlist') || '[]');
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'default';
let currentMaxPrice = 5000;
let isListView = false;

/* ---- Helpers ---- */
const $ = id => document.getElementById(id);
const fmt = n => '₹' + n.toLocaleString('en-IN');

function saveCart()     { localStorage.setItem('mh_cart', JSON.stringify(cart)); }
function saveWishlist() { localStorage.setItem('mh_wishlist', JSON.stringify(wishlist)); }

function showToast(msg, duration = 2500) {
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

function openModal(id) { $(id).classList.add('active'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { $(id).classList.remove('active'); document.body.style.overflow = ''; }

/* ---- Cart ---- */
function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  $('cartCount').textContent = total;
}

function addToCart(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const existing = cart.find(x => x.id === productId);
  if (existing) { existing.qty++; }
  else { cart.push({ id: p.id, name: p.name, price: p.price, vendor: p.vendor, emoji: p.emoji, qty: 1 }); }
  saveCart(); updateCartBadge();
  showToast(`✅ ${p.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter(x => x.id !== productId);
  saveCart(); updateCartBadge(); renderCart();
}

function updateQty(productId, delta) {
  const item = cart.find(x => x.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart(); updateCartBadge(); renderCart();
}

function renderCart() {
  const body = $('cartItems');
  const footer = $('cartFooter');
  if (cart.length === 0) {
    body.innerHTML = `<div class="cart-empty"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p></div>`;
    footer.innerHTML = '';
    return;
  }
  body.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-emoji">${item.emoji}</div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-vendor">${item.vendor}</div>
        <div class="cart-qty">
          <button class="qty-btn" onclick="updateQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id},1)">+</button>
          <span class="cart-item-price">${fmt(item.price * item.qty)}</span>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})" title="Remove">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>`).join('');

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = total > 499 ? 0 : 49;
  footer.innerHTML = `
    <div class="cart-summary">
      <div>
        <div style="font-size:0.85rem;color:var(--mid)">
          Subtotal: ${fmt(total)}<br>
          Delivery: ${delivery === 0 ? '<span style="color:var(--accent)">FREE</span>' : fmt(delivery)}
        </div>
        <div class="cart-total" style="margin-top:6px">Total: <span>${fmt(total + delivery)}</span></div>
      </div>
      <button class="btn-primary" onclick="checkout()">Checkout <i class="fas fa-arrow-right"></i></button>
    </div>`;
}

function checkout() {
  showToast('🎉 Order placed successfully! Thank you for shopping.');
  cart = [];
  saveCart(); updateCartBadge();
  closeModal('cartModal');
}

/* ---- Wishlist ---- */
function updateWishlistBadge() { $('wishlistCount').textContent = wishlist.length; }

function toggleWishlist(productId, btn) {
  const idx = wishlist.indexOf(productId);
  if (idx === -1) {
    wishlist.push(productId);
    btn && btn.classList.add('active');
    showToast('❤️ Added to wishlist!');
  } else {
    wishlist.splice(idx, 1);
    btn && btn.classList.remove('active');
    showToast('💔 Removed from wishlist');
  }
  saveWishlist(); updateWishlistBadge();
  // Re-render to sync
  renderProducts(getFilteredProducts());
}

/* ---- Products ---- */
function getFilteredProducts() {
  let list = [...PRODUCTS];
  if (currentFilter !== 'all') list = list.filter(p => p.category === currentFilter);
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.vendor.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  list = list.filter(p => p.price <= currentMaxPrice);
  switch (currentSort) {
    case 'price-low':  list.sort((a,b) => a.price - b.price); break;
    case 'price-high': list.sort((a,b) => b.price - a.price); break;
    case 'rating':     list.sort((a,b) => b.rating - a.rating); break;
    case 'newest':     list.sort((a,b) => b.id - a.id); break;
  }
  return list;
}

function renderProducts(list) {
  const grid = $('productsGrid');
  const noRes = $('noResults');
  const countEl = $('productCountDisplay');

  if (list.length === 0) {
    grid.innerHTML = '';
    noRes.classList.remove('hidden');
    countEl.textContent = '';
    return;
  }
  noRes.classList.add('hidden');
  countEl.textContent = `Showing ${list.length} product${list.length !== 1 ? 's' : ''}`;

  grid.innerHTML = list.map(p => {
    const inWish = wishlist.includes(p.id);
    const saving = p.originalPrice - p.price;
    return `
    <div class="product-card" id="prod-${p.id}">
      <div class="product-img-wrap">
        <span>${p.emoji}</span>
        <span class="product-discount-badge">-${p.discount}%</span>
        <button class="product-wishlist-btn ${inWish ? 'active' : ''}" onclick="toggleWishlist(${p.id}, this)" title="Wishlist">
          <i class="${inWish ? 'fas' : 'far'} fa-heart"></i>
        </button>
      </div>
      <div class="product-body">
        <div class="product-vendor">${p.vendor}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${stars(p.rating)}</span>
          <span class="rating-count">(${p.reviews.toLocaleString()})</span>
        </div>
        <div class="product-price-row">
          <span class="price">${fmt(p.price)}</span>
          <span class="price-original">${fmt(p.originalPrice)}</span>
          <span class="price-save">Save ${fmt(saving)}</span>
        </div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart(${p.id})"><i class="fas fa-cart-plus"></i> Add to Cart</button>
          <button class="btn-view" onclick="openProductDetail(${p.id})"><i class="fas fa-eye"></i></button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function openProductDetail(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  const saving = p.originalPrice - p.price;
  $('productModalContent').innerHTML = `
    <div class="product-detail">
      <div class="product-detail-top">
        <div class="product-detail-emoji">${p.emoji}</div>
        <div class="product-detail-info">
          <div class="product-vendor" style="margin-bottom:6px">${p.vendor}</div>
          <h2>${p.name}</h2>
          <div class="product-rating" style="margin:8px 0">
            <span class="stars" style="font-size:1rem">${stars(p.rating)}</span>
            <span class="rating-count">${p.rating} · ${p.reviews.toLocaleString()} reviews</span>
          </div>
          <div class="product-detail-price">${fmt(p.price)}</div>
          <div style="font-size:0.85rem;color:var(--mid);margin-bottom:10px">
            MRP <s>${fmt(p.originalPrice)}</s> · 
            <span style="color:var(--accent);font-weight:600">Save ${fmt(saving)} (${p.discount}% off)</span>
          </div>
          <p class="product-detail-desc">${p.desc}</p>
          <div class="product-detail-actions">
            <button class="btn-primary" onclick="addToCart(${p.id}); closeModal('productModal')">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
            <button class="btn-outline" style="background:var(--dark);border-color:var(--dark)" onclick="addToCart(${p.id}); checkout()">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div style="padding-top:16px;border-top:1px solid var(--border)">
        <h4 style="margin-bottom:10px">Product Details</h4>
        <table style="width:100%;font-size:0.85rem;border-collapse:collapse">
          <tr><td style="padding:6px 0;color:var(--mid);width:40%">Category</td><td style="text-transform:capitalize">${p.category}</td></tr>
          <tr><td style="padding:6px 0;color:var(--mid)">Vendor</td><td>${p.vendor}</td></tr>
          <tr><td style="padding:6px 0;color:var(--mid)">Rating</td><td>${p.rating} / 5.0</td></tr>
          <tr><td style="padding:6px 0;color:var(--mid)">Reviews</td><td>${p.reviews.toLocaleString()}</td></tr>
          <tr><td style="padding:6px 0;color:var(--mid)">Discount</td><td>${p.discount}% off</td></tr>
        </table>
      </div>
    </div>`;
  openModal('productModal');
}

function filterByCategory(cat) {
  currentFilter = cat;
  document.querySelectorAll('.cat-link').forEach(l => {
    l.classList.toggle('active', l.dataset.cat === cat);
  });
  renderProducts(getFilteredProducts());
  scrollToProducts();
}

function resetFilters() {
  currentFilter = 'all';
  currentSearch = '';
  currentSort = 'default';
  currentMaxPrice = 5000;
  $('searchInput').value = '';
  $('sortSelect').value = 'default';
  $('priceRange').value = 5000;
  $('priceDisplay').textContent = '₹5000';
  $('categoryFilter').value = 'all';
  document.querySelectorAll('.cat-link').forEach(l => l.classList.toggle('active', l.dataset.cat === 'all'));
  renderProducts(getFilteredProducts());
}

function scrollToProducts() {
  $('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---- Vendors ---- */
function renderVendors() {
  $('vendorsGrid').innerHTML = VENDORS.map(v => `
    <div class="vendor-card" onclick="filterByCategory('${v.category.toLowerCase().split(' ')[0]}')">
      <div class="vendor-avatar" style="background:${v.color};color:${v.textColor}">${v.emoji}</div>
      <div class="vendor-name">${v.name}</div>
      <div class="vendor-category">${v.category}</div>
      <div class="vendor-meta">
        <span><i class="fas fa-star" style="color:#f59e0b"></i> ${v.rating}</span>
        <span><i class="fas fa-box" style="color:var(--mid)"></i> ${v.products}+</span>
      </div>
      <span class="vendor-badge">${v.badge}</span>
    </div>`).join('');
}

/* ---- Countdown ---- */
function startCountdown() {
  let totalSecs = 5 * 3600 + 30 * 60;
  const tick = () => {
    const h = Math.floor(totalSecs / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    const pad = n => String(n).padStart(2, '0');
    $('hours').textContent   = pad(h);
    $('minutes').textContent = pad(m);
    $('seconds').textContent = pad(s);
    if (totalSecs > 0) { totalSecs--; setTimeout(tick, 1000); }
  };
  tick();
}

/* ---- Scroll behaviour ---- */
function handleScroll() {
  const btn = $('backToTop');
  btn.classList.toggle('visible', window.scrollY > 400);
}

/* ---- Event Listeners ---- */
function bindEvents() {
  // Cart button
  $('cartBtn').addEventListener('click', () => { renderCart(); openModal('cartModal'); });

  // Search
  $('searchBtn').addEventListener('click', () => {
    currentSearch = $('searchInput').value.trim();
    renderProducts(getFilteredProducts());
    scrollToProducts();
  });
  $('searchInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') $('searchBtn').click();
  });

  // Category filter (header select)
  $('categoryFilter').addEventListener('change', e => filterByCategory(e.target.value));

  // Category nav links
  document.querySelectorAll('.cat-link[data-cat]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      filterByCategory(link.dataset.cat);
    });
  });

  // Sort
  $('sortSelect').addEventListener('change', e => {
    currentSort = e.target.value;
    renderProducts(getFilteredProducts());
  });

  // Price range
  $('priceRange').addEventListener('input', e => {
    currentMaxPrice = +e.target.value;
    $('priceDisplay').textContent = fmt(currentMaxPrice);
    renderProducts(getFilteredProducts());
  });

  // View toggle
  $('gridViewBtn').addEventListener('click', () => {
    isListView = false;
    $('productsGrid').classList.remove('list-view');
    $('gridViewBtn').classList.add('active');
    $('listViewBtn').classList.remove('active');
  });
  $('listViewBtn').addEventListener('click', () => {
    isListView = true;
    $('productsGrid').classList.add('list-view');
    $('listViewBtn').classList.add('active');
    $('gridViewBtn').classList.remove('active');
  });

  // Wishlist button (shows wishlist count info)
  $('wishlistBtn').addEventListener('click', () => {
    showToast(wishlist.length > 0 ? `❤️ You have ${wishlist.length} item(s) in your wishlist` : '💔 Your wishlist is empty');
  });

  // Account button
  $('accountBtn').addEventListener('click', () => showToast('👤 Account feature coming soon!'));

  // Close modals on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(overlay.id); });
  });

  // Newsletter
  $('subscribeBtn').addEventListener('click', () => {
    const email = $('newsletterEmail').value.trim();
    if (!email || !email.includes('@')) { showToast('⚠️ Please enter a valid email address'); return; }
    showToast(`🎉 Subscribed! Welcome aboard, ${email.split('@')[0]}!`);
    $('newsletterEmail').value = '';
  });

  // Scroll
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Escape key closes modals
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(m => closeModal(m.id));
    }
  });
}

/* ---- Init ---- */
function init() {
  renderVendors();
  renderProducts(getFilteredProducts());
  updateCartBadge();
  updateWishlistBadge();
  startCountdown();
  bindEvents();
}

document.addEventListener('DOMContentLoaded', init);
