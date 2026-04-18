/* ========================================
   ASIA STORE - Authentication System
   Handles: Login, Register, Logout, Auth UI
   ======================================== */

const authState = {
    isLoggedIn: false,
    user: null
};

// Initialize Auth
function initAuth() {
    const savedUser = localStorage.getItem('asia-store-user');
    if (savedUser) {
        authState.isLoggedIn = true;
        authState.user = JSON.parse(savedUser);
    }
    updateAuthUI();
    injectAuthModal();
}

// Update UI based on auth state
function updateAuthUI() {
    const accountTrigger = document.getElementById('accountTrigger');
    if (!accountTrigger) return;

    const utilText = accountTrigger.querySelector('.header__util-text');
    
    if (authState.isLoggedIn) {
        utilText.textContent = authState.user.username;
        // Optionally add a logout icon or handle logout differently
    } else {
        utilText.setAttribute('data-i18n', 'nav_account');
        if (typeof applyTranslations === 'function') applyTranslations();
    }
}

// Inject Modal HTML
function injectAuthModal() {
    if (document.getElementById('authModal')) return;

    const modalHtml = `
        <div class="auth-overlay" id="authOverlay"></div>
        <div class="auth-modal" id="authModal">
            <button class="auth-close" id="authClose">&times;</button>
            <div class="auth-tabs">
                <button class="auth-tab active" data-tab="login" data-i18n="auth_login_tab">تسجيل الدخول</button>
                <button class="auth-tab" data-tab="register" data-i18n="auth_register_tab">إنشاء حساب</button>
            </div>
            
            <!-- Login Form -->
            <form id="loginForm" class="auth-form active">
                <div class="form-group">
                    <label data-i18n="auth_email">البريد الإلكتروني</label>
                    <input type="email" required placeholder="example@mail.com">
                </div>
                <div class="form-group">
                    <label data-i18n="auth_password">كلمة المرور</label>
                    <input type="password" required placeholder="********">
                </div>
                <button type="submit" class="btn btn--primary" style="width:100%;" data-i18n="auth_login_btn">دخول</button>
            </form>

            <!-- Register Form -->
            <form id="registerForm" class="auth-form">
                <div class="form-group">
                    <label data-i18n="auth_username">اسم المستخدم</label>
                    <input type="text" required placeholder="اسمك">
                </div>
                <div class="form-group">
                    <label data-i18n="auth_email">البريد الإلكتروني</label>
                    <input type="email" required placeholder="example@mail.com">
                </div>
                <div class="form-group">
                    <label data-i18n="auth_password">كلمة المرور</label>
                    <input type="password" required placeholder="********">
                </div>
                <button type="submit" class="btn btn--primary" style="width:100%;" data-i18n="auth_register_btn">إنشاء حساب</button>
            </form>

            <div class="auth-footer" id="logoutSection" style="display:none;">
                <p data-i18n="auth_logged_in_as">أنت مسجل الدخول باسم: <strong id="loggedInUser"></strong></p>
                <button class="btn btn--outline-dark" style="width:100%; margin-top:10px;" onclick="logout()">تسجيل الخروج</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    setupAuthListeners();
}

function setupAuthListeners() {
    const modal = document.getElementById('authModal');
    const overlay = document.getElementById('authOverlay');
    const closeBtn = document.getElementById('authClose');
    const trigger = document.getElementById('accountTrigger');
    const tabs = document.querySelectorAll('.auth-tab');
    const forms = document.querySelectorAll('.auth-form');

    const openModal = () => {
        if (authState.isLoggedIn) {
            // Show logout section instead of forms
            forms.forEach(f => f.classList.remove('active'));
            document.querySelector('.auth-tabs').style.display = 'none';
            document.getElementById('logoutSection').style.display = 'block';
            document.getElementById('loggedInUser').textContent = authState.user.username;
        } else {
            document.querySelector('.auth-tabs').style.display = 'flex';
            document.getElementById('logoutSection').style.display = 'none';
            forms[0].classList.add('active');
        }
        modal.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        modal.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (trigger) trigger.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (overlay) overlay.addEventListener('click', closeModal);

    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            forms.forEach(f => f.classList.remove('active'));
            document.getElementById(`${tab.dataset.tab}Form`).classList.add('active');
        });
    });

    // Login logic
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        const user = { username: email.split('@')[0], email: email };
        login(user);
        closeModal();
    });

    // Register logic
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = e.target.querySelector('input[type="text"]').value;
        const email = e.target.querySelector('input[type="email"]').value;
        const user = { username, email };
        login(user);
        closeModal();
    });
}

function login(user) {
    authState.isLoggedIn = true;
    authState.user = user;
    localStorage.setItem('asia-store-user', JSON.stringify(user));
    updateAuthUI();
    // Use modern toast or notification if available
}

function logout() {
    authState.isLoggedIn = false;
    authState.user = null;
    localStorage.removeItem('asia-store-user');
    updateAuthUI();
    document.getElementById('authModal').classList.remove('active');
    document.getElementById('authOverlay').classList.remove('active');
    document.body.style.overflow = '';
}

// Start Auth System
document.addEventListener('DOMContentLoaded', initAuth);
