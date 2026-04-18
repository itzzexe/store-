/* ========================================
   ASIA STORE - Shopping Cart
   Handles: LocalStorage cart, sidebar rendering, WhatsApp checkout
   ======================================== */

let cart = JSON.parse(localStorage.getItem('asia-store-cart')) || [];

function saveCart() {
    localStorage.setItem('asia-store-cart', JSON.stringify(cart));
    updateCartBadge();
    renderCart();
}

function parsePrice(priceStr) {
    if (!priceStr) return 0;
    // Extract numbers from "1,399,000 د.ع" or "$1,199"
    const cleaned = priceStr.replace(/[^\d]/g, '');
    return parseInt(cleaned, 10) || 0;
}

function addToCart(title, price, image) {
    const existing = cart.find(item => item.title === title);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({
            title: title,
            price: price,
            image: image,
            numericPrice: parsePrice(price),
            quantity: 1
        });
    }
    saveCart();

    // Show cart sidebar
    document.getElementById('cartSidebar').classList.add('open');
    document.querySelector('.cart-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
}

function updateQuantity(index, delta) {
    if (cart[index]) {
        cart[index].quantity += delta;
        if (cart[index].quantity <= 0) {
            removeFromCart(index);
        } else {
            saveCart();
        }
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const headerCount = document.querySelector('.cart-count');
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
    if (headerCount) {
        headerCount.textContent = count;
    }
}

function formatPrice(num) {
    const lang = document.documentElement.getAttribute('lang') || 'ar';
    if (lang === 'ar') {
        return num.toLocaleString('en-US') + ' د.ع';
    } else {
        return '$' + num.toLocaleString('en-US');
    }
}

function renderCart() {
    const container = document.getElementById('cartItems');
    const totalEl = document.getElementById('cartTotal');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `<div class="cart-empty"><p data-i18n="cart_empty">${t('cart_empty')}</p></div>`;
        if (totalEl) totalEl.textContent = formatPrice(0);
        return;
    }

    let html = '';
    let total = 0;

    cart.forEach((item, i) => {
        total += item.numericPrice * item.quantity;

        let displayPrice = formatPrice(item.numericPrice);
        if (item.numericPrice === 0) displayPrice = item.price; // fallback

        html += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}" class="cart-item__image">
                <div class="cart-item__info">
                    <h4 class="cart-item__title">${item.title}</h4>
                    <p class="cart-item__price">${displayPrice}</p>
                    <div class="cart-item__qty">
                        <button onclick="updateQuantity(${i}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${i}, 1)">+</button>
                    </div>
                </div>
                <button class="cart-item__remove" onclick="removeFromCart(${i})">&times;</button>
            </div>
        `;
    });

    container.innerHTML = html;
    if (totalEl) totalEl.textContent = formatPrice(total);
}

function checkoutWhatsApp() {
    if (cart.length === 0) return;

    // Contact Number
    const WA_NUMBER = "9647746400400"; // Replace with real WhatsApp base number. Add country code (964 for Iraq).

    let message = "مرحباً، أود طلب القائمة التالية من آسيا ستور:%0A%0A";

    let total = 0;
    cart.forEach(item => {
        total += item.numericPrice * item.quantity;
        message += `- ${item.title} (الكمية: ${item.quantity})%0A`;
    });

    message += `%0Aالاجمالي: ${formatPrice(total)}%0A`;
    message += "%0Aيرجى تأكيد الطلب.";

    window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, '_blank');
}

// Init Cart UI event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Inject Cart HTML if not exists
    const cartHtml = `
        <div class="cart-overlay" id="cartOverlay"></div>
        <div class="cart-sidebar" id="cartSidebar">
            <div class="cart-header">
                <h3 data-i18n="cart_title">${t('cart_title') || 'سلة المشتريات'}</h3>
                <button class="cart-close" id="cartClose">&times;</button>
            </div>
            <div class="cart-items" id="cartItems"></div>
            <div class="cart-footer">
                <div class="cart-total">
                    <span data-i18n="cart_total">${t('cart_total') || 'الإجمالي:'}</span>
                    <strong id="cartTotal">0</strong>
                </div>
                <button class="btn btn--primary" style="width: 100%;" onclick="checkoutWhatsApp()" data-i18n="cart_checkout">
                    ${t('cart_checkout') || 'الطلب عبر واتساب'} 💬
                </button>
            </div>
        </div>
        
        <button class="cart-fab" id="cartFab" aria-label="Cart">
            🛒
            <span class="cart-fab__badge" id="cartBadge" style="display:none;">0</span>
        </button>
    `;

    document.body.insertAdjacentHTML('beforeend', cartHtml);

    // Add Event Listeners for cart toggle
    const openCart = () => {
        document.getElementById('cartSidebar').classList.add('open');
        document.getElementById('cartOverlay').classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    document.getElementById('cartFab').addEventListener('click', openCart);
    const cartTrigger = document.getElementById('cartTrigger');
    if (cartTrigger) {
        cartTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openCart();
        });
    }

    const closeCart = () => {
        document.getElementById('cartSidebar').classList.remove('open');
        document.getElementById('cartOverlay').classList.remove('active');
        document.body.style.overflow = '';
    };

    document.getElementById('cartClose').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);

    // Initial render
    updateCartBadge();
    renderCart();

    // Hook 'Add to Cart' buttons dynamically
    document.querySelectorAll('.product-card .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const card = e.target.closest('.product-card');
            if (card) {
                const title = card.querySelector('.product-card__title').textContent;
                const price = card.querySelector('.product-card__price').textContent;
                const img = card.querySelector('img').src;
                addToCart(title, price, img);
            }
        });
    });
});
