/* NONTON BARENG MS - VIDEO PLAYER */

class VideoPlayer {
    constructor(container) {
        this.container = container;
        this.video = container.querySelector('video');
        this.isPlaying = false;
        this.currentQuality = '720p';
        this.currentSubtitle = 'id';
        this.subtitlesEnabled = true;
        this.autoplayNext = true;
        this.init();
    }

    init() {
        this.createControls();
        this.setupEvents();
        this.loadSubtitles();
    }

    createControls() {
        const controls = document.createElement('div');
        controls.className = 'player-controls';
        controls.innerHTML = `
      <div class="player-progress">
        <div class="player-progress-bar" style="width: 0%"></div>
        <div class="player-progress-handle" style="left: 0%"></div>
      </div>
      <div class="player-buttons">
        <div class="player-left">
          <button class="player-btn btn-play" title="Play/Pause">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </button>
          <button class="player-btn btn-prev" title="Episode Sebelumnya">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z"/></svg>
          </button>
          <button class="player-btn btn-next" title="Episode Berikutnya">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zm8.5-6v6H16V6h-1.5v6z"/></svg>
          </button>
          <div class="player-volume">
            <button class="player-btn btn-volume" title="Volume">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
            </button>
            <input type="range" class="volume-slider" min="0" max="100" value="100">
          </div>
          <span class="player-time"><span class="time-current">0:00</span> / <span class="time-duration">0:00</span></span>
        </div>
        <div class="player-right">
          <button class="player-btn btn-autoplay active" title="Auto Next Episode">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0020 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74A7.93 7.93 0 004 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>
          </button>
          <div class="subtitle-selector">
            <button class="player-btn btn-subtitle" title="Subtitle">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm-6-4h8v2h-8v-2z"/></svg>
            </button>
            <div class="subtitle-menu">
              <div class="quality-option subtitle-opt" data-sub="off">Off</div>
              <div class="quality-option subtitle-opt active" data-sub="id">Indonesia</div>
              <div class="quality-option subtitle-opt" data-sub="en">English</div>
            </div>
          </div>
          <div class="quality-selector">
            <button class="player-btn btn-quality" title="Kualitas">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"/></svg>
              <span class="current-quality">720p</span>
            </button>
            <div class="quality-menu">
              <div class="quality-option" data-quality="1080p">1080p HD</div>
              <div class="quality-option active" data-quality="720p">720p</div>
              <div class="quality-option" data-quality="480p">480p</div>
              <div class="quality-option" data-quality="360p">360p</div>
            </div>
          </div>
          <button class="player-btn btn-fullscreen" title="Layar Penuh">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>
          </button>
        </div>
      </div>
    `;
        this.container.appendChild(controls);

        // Big play button
        const bigPlay = document.createElement('div');
        bigPlay.className = 'player-big-play';
        bigPlay.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
        this.container.appendChild(bigPlay);

        this.controls = controls;
        this.bigPlay = bigPlay;
    }

    setupEvents() {
        const video = this.video;
        const progress = this.controls.querySelector('.player-progress');
        const progressBar = this.controls.querySelector('.player-progress-bar');
        const progressHandle = this.controls.querySelector('.player-progress-handle');

        // Play/Pause
        this.controls.querySelector('.btn-play').addEventListener('click', () => this.togglePlay());
        this.bigPlay.addEventListener('click', () => this.togglePlay());
        video.addEventListener('click', () => this.togglePlay());

        // Time update
        video.addEventListener('timeupdate', () => {
            const percent = (video.currentTime / video.duration) * 100;
            progressBar.style.width = `${percent}%`;
            progressHandle.style.left = `${percent}%`;
            this.updateTime();
        });

        // Progress click
        progress.addEventListener('click', (e) => {
            const rect = progress.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            video.currentTime = percent * video.duration;
        });

        // Volume
        const volumeSlider = this.controls.querySelector('.volume-slider');
        volumeSlider.addEventListener('input', (e) => {
            video.volume = e.target.value / 100;
            this.updateVolumeIcon();
        });

        this.controls.querySelector('.btn-volume').addEventListener('click', () => {
            video.muted = !video.muted;
            volumeSlider.value = video.muted ? 0 : video.volume * 100;
            this.updateVolumeIcon();
        });

        // Fullscreen
        this.controls.querySelector('.btn-fullscreen').addEventListener('click', () => this.toggleFullscreen());

        // Quality
        this.controls.querySelector('.btn-quality').addEventListener('click', (e) => {
            e.stopPropagation();
            this.controls.querySelector('.quality-menu').classList.toggle('active');
            this.controls.querySelector('.subtitle-menu').classList.remove('active');
        });

        this.controls.querySelectorAll('.quality-option[data-quality]').forEach(opt => {
            opt.addEventListener('click', () => {
                this.setQuality(opt.dataset.quality);
                this.controls.querySelector('.quality-menu').classList.remove('active');
            });
        });

        // Subtitle
        this.controls.querySelector('.btn-subtitle').addEventListener('click', (e) => {
            e.stopPropagation();
            this.controls.querySelector('.subtitle-menu').classList.toggle('active');
            this.controls.querySelector('.quality-menu').classList.remove('active');
        });

        this.controls.querySelectorAll('.subtitle-opt').forEach(opt => {
            opt.addEventListener('click', () => {
                this.setSubtitle(opt.dataset.sub);
                this.controls.querySelector('.subtitle-menu').classList.remove('active');
            });
        });

        // Autoplay toggle
        this.controls.querySelector('.btn-autoplay').addEventListener('click', (e) => {
            this.autoplayNext = !this.autoplayNext;
            e.target.closest('.btn-autoplay').classList.toggle('active', this.autoplayNext);
        });

        // Nav buttons
        this.controls.querySelector('.btn-prev')?.addEventListener('click', () => this.prevEpisode());
        this.controls.querySelector('.btn-next')?.addEventListener('click', () => this.nextEpisode());

        // Video ended
        video.addEventListener('ended', () => {
            if (this.autoplayNext) this.nextEpisode();
        });

        // Show/hide controls
        let hideTimeout;
        this.container.addEventListener('mousemove', () => {
            this.container.classList.add('show-controls');
            clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                if (this.isPlaying) this.container.classList.remove('show-controls');
            }, 3000);
        });

        // Close menus on outside click
        document.addEventListener('click', () => {
            this.controls.querySelector('.quality-menu').classList.remove('active');
            this.controls.querySelector('.subtitle-menu').classList.remove('active');
        });

        // Keyboard
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT') return;
            switch (e.key) {
                case ' ': e.preventDefault(); this.togglePlay(); break;
                case 'ArrowRight': video.currentTime += 10; break;
                case 'ArrowLeft': video.currentTime -= 10; break;
                case 'ArrowUp': video.volume = Math.min(1, video.volume + 0.1); break;
                case 'ArrowDown': video.volume = Math.max(0, video.volume - 0.1); break;
                case 'f': this.toggleFullscreen(); break;
                case 'm': video.muted = !video.muted; break;
            }
        });
    }

    togglePlay() {
        if (this.video.paused) {
            this.video.play();
            this.isPlaying = true;
            this.bigPlay.style.display = 'none';
            this.controls.querySelector('.btn-play').innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>';
        } else {
            this.video.pause();
            this.isPlaying = false;
            this.bigPlay.style.display = 'flex';
            this.controls.querySelector('.btn-play').innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';
        }
    }

    updateTime() {
        const current = this.formatTime(this.video.currentTime);
        const duration = this.formatTime(this.video.duration);
        this.controls.querySelector('.time-current').textContent = current;
        this.controls.querySelector('.time-duration').textContent = duration;
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    updateVolumeIcon() {
        const btn = this.controls.querySelector('.btn-volume');
        const vol = this.video.muted ? 0 : this.video.volume;
        if (vol === 0) {
            btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>';
        } else if (vol < 0.5) {
            btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM5 9v6h4l5 5V4L9 9H5z"/></svg>';
        } else {
            btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
        }
    }

    toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            this.container.requestFullscreen();
        }
    }

    setQuality(quality) {
        this.currentQuality = quality;
        this.controls.querySelectorAll('.quality-option[data-quality]').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.quality === quality);
        });
        this.controls.querySelector('.current-quality').textContent = quality;
        // In real app, would switch video source here
    }

    setSubtitle(sub) {
        this.currentSubtitle = sub;
        this.subtitlesEnabled = sub !== 'off';
        this.controls.querySelectorAll('.subtitle-opt').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.sub === sub);
        });
        this.updateSubtitleTrack();
    }

    loadSubtitles() {
        // Would load actual VTT files in real app
    }

    updateSubtitleTrack() {
        const tracks = this.video.querySelectorAll('track');
        tracks.forEach(track => {
            track.track.mode = track.srclang === this.currentSubtitle ? 'showing' : 'hidden';
        });
    }

    prevEpisode() {
        if (window.watchPage) window.watchPage.prevEpisode();
    }

    nextEpisode() {
        if (window.watchPage) window.watchPage.nextEpisode();
    }
}

// Export
window.VideoPlayer = VideoPlayer;
