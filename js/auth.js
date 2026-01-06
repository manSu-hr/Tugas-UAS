/* NONTON BARENG MS - AUTHENTICATION */

class Auth {
    constructor() {
        this.user = JSON.parse(localStorage.getItem('user')) || null;
    }

    isLoggedIn() {
        return this.user !== null;
    }

    getUser() {
        return this.user;
    }

    login(email, password) {
        // Simulated login
        if (email && password) {
            this.user = {
                id: Date.now(),
                email,
                username: email.split('@')[0],
                avatar: email[0].toUpperCase()
            };
            localStorage.setItem('user', JSON.stringify(this.user));
            return { success: true, user: this.user };
        }
        return { success: false, error: 'Email dan password diperlukan' };
    }

    register(username, email, password) {
        if (username && email && password) {
            this.user = {
                id: Date.now(),
                email,
                username,
                avatar: username[0].toUpperCase()
            };
            localStorage.setItem('user', JSON.stringify(this.user));
            return { success: true, user: this.user };
        }
        return { success: false, error: 'Semua field diperlukan' };
    }

    logout() {
        this.user = null;
        localStorage.removeItem('user');
    }
}

window.Auth = new Auth();
