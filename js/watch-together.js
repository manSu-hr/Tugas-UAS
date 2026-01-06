/* NONTON BARENG MS - WATCH TOGETHER */

class WatchTogether {
    constructor() {
        this.room = null;
        this.users = [];
        this.messages = [];
        this.isHost = false;
    }

    createRoom(contentId) {
        this.room = {
            id: 'room-' + Math.random().toString(36).substr(2, 9),
            contentId,
            createdAt: Date.now(),
            hostId: window.Auth?.getUser()?.id
        };
        this.isHost = true;
        this.users = [window.Auth?.getUser() || { username: 'Guest', avatar: 'G' }];
        return this.room;
    }

    joinRoom(roomId) {
        // Simulated join
        this.room = { id: roomId };
        this.isHost = false;
        this.users.push(window.Auth?.getUser() || { username: 'Guest', avatar: 'G' });
        return true;
    }

    getInviteLink() {
        if (!this.room) return null;
        return `${window.location.origin}/watch.html?room=${this.room.id}`;
    }

    sendMessage(text) {
        if (!text.trim()) return;
        const msg = {
            id: Date.now(),
            user: window.Auth?.getUser() || { username: 'Guest', avatar: 'G' },
            text,
            timestamp: new Date().toLocaleTimeString()
        };
        this.messages.push(msg);
        this.renderMessages();
        return msg;
    }

    renderMessages() {
        const chatEl = document.querySelector('.watch-together-chat');
        if (!chatEl) return;

        chatEl.innerHTML = this.messages.map(msg => `
      <div class="chat-message">
        <div class="chat-avatar">${msg.user.avatar || msg.user.username[0]}</div>
        <div class="chat-content">
          <span class="chat-name">${msg.user.username}</span>
          <p class="chat-text">${msg.text}</p>
        </div>
      </div>
    `).join('');
        chatEl.scrollTop = chatEl.scrollHeight;
    }

    syncVideo(currentTime, isPlaying) {
        // In real app, would sync via WebSocket
        console.log('Syncing video:', currentTime, isPlaying);
    }

    leaveRoom() {
        this.room = null;
        this.users = [];
        this.messages = [];
        this.isHost = false;
    }
}

window.WatchTogether = new WatchTogether();
