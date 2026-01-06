/* NONTON BARENG MS - MAIN APP */

class App {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'id';
        this.currentTheme = localStorage.getItem('theme') || 'dark';
        this.user = JSON.parse(localStorage.getItem('user')) || null;
        this.watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        this.history = JSON.parse(localStorage.getItem('history')) || [];
        this.init();
    }

    init() {
        this.applyTheme();
        this.applyLanguage();
        this.setupNavbar();
        this.setupMobileMenu();
        this.setupModals();
        this.setupSearch();
        this.renderContent();
        this.setupAnimations();
    }

    // Translation
    t(key) {
        return AppData.translations[this.currentLang][key] || key;
    }

    applyLanguage() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            el.textContent = this.t(el.dataset.i18n);
        });
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            el.placeholder = this.t(el.dataset.i18nPlaceholder);
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        this.applyLanguage();
        document.querySelector('.lang-dropdown-menu')?.classList.remove('active');
    }

    // Theme
    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.currentTheme);
        const icon = document.querySelector('.theme-btn svg');
        if (icon) {
            icon.innerHTML = this.currentTheme === 'ultra-dark'
                ? '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" fill="none"/>'
                : '<path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" stroke="currentColor" stroke-width="2" fill="none"/>';
        }
    }

    toggleTheme() {
        this.currentTheme = this.currentTheme === 'dark' ? 'ultra-dark' : 'dark';
        localStorage.setItem('theme', this.currentTheme);
        this.applyTheme();
        this.showToast(this.currentTheme === 'ultra-dark' ? 'Ultra Dark Mode' : 'Dark Mode', 'info');
    }

    // Navbar
    setupNavbar() {
        const navbar = document.querySelector('.navbar');
        window.addEventListener('scroll', () => {
            navbar?.classList.toggle('scrolled', window.scrollY > 50);
        });

        // Theme toggle
        document.querySelector('.theme-btn')?.addEventListener('click', () => this.toggleTheme());

        // Language dropdown
        document.querySelector('.lang-btn')?.addEventListener('click', (e) => {
            e.stopPropagation();
            document.querySelector('.lang-dropdown-menu')?.classList.toggle('active');
        });

        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', () => {
                document.querySelectorAll('.lang-option').forEach(o => o.classList.remove('active'));
                opt.classList.add('active');
                this.setLanguage(opt.dataset.lang);
            });
        });

        document.addEventListener('click', () => {
            document.querySelector('.lang-dropdown-menu')?.classList.remove('active');
        });
    }

    // Mobile Menu
    setupMobileMenu() {
        const btn = document.querySelector('.mobile-menu-btn');
        const menu = document.querySelector('.mobile-menu');
        const close = document.querySelector('.mobile-menu-close');

        btn?.addEventListener('click', () => menu?.classList.add('active'));
        close?.addEventListener('click', () => menu?.classList.remove('active'));

        document.querySelectorAll('.mobile-menu-link').forEach(link => {
            link.addEventListener('click', () => menu?.classList.remove('active'));
        });
    }

    // Modals
    setupModals() {
        document.querySelectorAll('[data-modal]').forEach(trigger => {
            trigger.addEventListener('click', () => {
                const modal = document.getElementById(trigger.dataset.modal);
                modal?.classList.add('active');
            });
        });

        document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
            backdrop.addEventListener('click', (e) => {
                if (e.target === backdrop) backdrop.classList.remove('active');
            });
        });

        document.querySelectorAll('.modal-close').forEach(btn => {
            btn.addEventListener('click', () => {
                btn.closest('.modal-backdrop').classList.remove('active');
            });
        });

        // Auth forms
        document.getElementById('loginForm')?.addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('registerForm')?.addEventListener('submit', (e) => this.handleRegister(e));
    }

    handleLogin(e) {
        e.preventDefault();
        const form = e.target;
        const email = form.querySelector('[name="email"]').value;
        const password = form.querySelector('[name="password"]').value;

        if (email && password) {
            this.user = { email, username: email.split('@')[0], avatar: email[0].toUpperCase() };
            localStorage.setItem('user', JSON.stringify(this.user));
            document.getElementById('loginModal')?.classList.remove('active');
            this.updateAuthUI();
            this.showToast('Login berhasil! Selamat datang kembali.', 'success');
        }
    }

    handleRegister(e) {
        e.preventDefault();
        const form = e.target;
        const username = form.querySelector('[name="username"]').value;
        const email = form.querySelector('[name="email"]').value;
        const password = form.querySelector('[name="password"]').value;

        if (username && email && password) {
            this.user = { email, username, avatar: username[0].toUpperCase() };
            localStorage.setItem('user', JSON.stringify(this.user));
            document.getElementById('registerModal')?.classList.remove('active');
            this.updateAuthUI();
            this.showToast('Registrasi berhasil! Selamat bergabung.', 'success');
        }
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user');
        this.updateAuthUI();
        this.showToast('Logout berhasil.', 'info');
    }

    updateAuthUI() {
        const authBtns = document.querySelector('.auth-buttons');
        const userMenu = document.querySelector('.user-menu');

        if (this.user) {
            if (authBtns) authBtns.style.display = 'none';
            if (userMenu) {
                userMenu.style.display = 'flex';
                userMenu.querySelector('.user-avatar').textContent = this.user.avatar;
            }
        } else {
            if (authBtns) authBtns.style.display = 'flex';
            if (userMenu) userMenu.style.display = 'none';
        }
    }

    // Search
    setupSearch() {
        const searchInput = document.querySelector('.search-input');
        const searchMobile = document.querySelector('.search-mobile-input');

        [searchInput, searchMobile].forEach(input => {
            input?.addEventListener('input', (e) => this.handleSearch(e.target.value));
            input?.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') this.goToSearch(e.target.value);
            });
        });
    }

    handleSearch(query) {
        if (query.length < 2) return;
        const results = AppData.allContent.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5);
        this.showSearchResults(results);
    }

    showSearchResults(results) {
        let dropdown = document.querySelector('.search-dropdown');
        if (!dropdown) {
            dropdown = document.createElement('div');
            dropdown.className = 'search-dropdown';
            document.querySelector('.search-box')?.appendChild(dropdown);
        }

        if (results.length === 0) {
            dropdown.innerHTML = '<div class="search-no-results">Tidak ada hasil</div>';
        } else {
            dropdown.innerHTML = results.map(item => `
        <a href="detail.html?id=${item.id}" class="search-result-item">
          <img src="${item.cover}" alt="${item.title}">
          <div>
            <div class="search-result-title">${item.title}</div>
            <div class="search-result-meta">${item.type} • ${item.year}</div>
          </div>
        </a>
      `).join('');
        }
        dropdown.classList.add('active');
    }

    goToSearch(query) {
        if (query) window.location.href = `browse.html?search=${encodeURIComponent(query)}`;
    }

    // Content Rendering
    renderContent() {
        this.renderHero();
        this.renderSection('trending', AppData.allContent.filter(c => c.rating >= 9).slice(0, 8));
        this.renderSection('ongoing', AppData.allContent.filter(c => c.status === 'ongoing').slice(0, 8));
        this.renderSection('anime', AppData.animeData.slice(0, 6));
        this.renderSection('donghua', AppData.donghuaData.slice(0, 6));
        this.renderSection('drama', AppData.dramaData.slice(0, 6));
    }

    renderHero() {
        const hero = document.querySelector('.hero-content');
        if (!hero) return;

        const featured = AppData.allContent[0];
        const bg = document.querySelector('.hero-bg img');
        if (bg) bg.src = featured.banner;
    }

    renderSection(id, items) {
        const container = document.getElementById(`${id}-content`);
        if (!container) return;

        container.innerHTML = items.map(item => this.createCard(item)).join('');
        container.querySelectorAll('.content-card').forEach(card => {
            card.addEventListener('click', () => {
                window.location.href = `detail.html?id=${card.dataset.id}`;
            });
        });
    }

    createCard(item) {
        const badgeHtml = item.hasDubbing
            ? '<span class="card-badge badge-dub">DUB ID</span>'
            : '<span class="card-badge badge-sub">SUB ID</span>';

        return `
      <div class="content-card" data-id="${item.id}">
        <div class="card-image">
          <img src="${item.cover}" alt="${item.title}" loading="lazy">
          <div class="card-overlay">
            <div class="card-play-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          <div class="card-badges">
            <span class="card-badge badge-hd">HD</span>
            ${badgeHtml}
          </div>
        </div>
        <div class="card-info">
          <h4 class="card-title">${item.title}</h4>
          <div class="card-meta">
            <span class="card-rating">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              ${item.rating}
            </span>
            <span>${item.year}</span>
            <span>${item.status === 'ongoing' ? `Ep ${item.currentEpisode}` : 'Tamat'}</span>
          </div>
        </div>
      </div>
    `;
    }

    // Watchlist
    addToWatchlist(id) {
        if (!this.user) {
            this.showToast(this.t('msg.loginRequired'), 'error');
            return;
        }
        if (!this.watchlist.includes(id)) {
            this.watchlist.push(id);
            localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
            this.showToast(this.t('msg.addedWatchlist'), 'success');
        }
    }

    removeFromWatchlist(id) {
        this.watchlist = this.watchlist.filter(w => w !== id);
        localStorage.setItem('watchlist', JSON.stringify(this.watchlist));
        this.showToast(this.t('msg.removedWatchlist'), 'info');
    }

    isInWatchlist(id) {
        return this.watchlist.includes(id);
    }

    // History
    addToHistory(id, episode) {
        const entry = { id, episode, timestamp: Date.now() };
        this.history = [entry, ...this.history.filter(h => h.id !== id)].slice(0, 50);
        localStorage.setItem('history', JSON.stringify(this.history));
    }

    // Toast
    showToast(message, type = 'info') {
        let container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
      <span class="toast-message">${message}</span>
      <button class="toast-close">&times;</button>
    `;

        container.appendChild(toast);
        toast.querySelector('.toast-close').addEventListener('click', () => toast.remove());
        setTimeout(() => toast.remove(), 4000);
    }

    // Animations
    setupAnimations() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-up');
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.section').forEach(section => {
            section.style.opacity = '0';
            observer.observe(section);
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
});
