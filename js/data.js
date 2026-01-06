/* NONTON BARENG MS - DATA */

const translations = {
  id: {
    'nav.home': 'Beranda', 'nav.browse': 'Jelajahi', 'nav.anime': 'Anime',
    'nav.donghua': 'Donghua', 'nav.drama': 'Drama China', 'nav.watchlist': 'Daftar Tonton',
    'nav.login': 'Masuk', 'nav.register': 'Daftar', 'nav.search': 'Cari anime, donghua, drama...',
    'hero.badge': '🔥 Trending Minggu Ini', 'hero.watch': 'Tonton Sekarang', 'hero.info': 'Info Selengkapnya',
    'hero.quote': 'Setiap episode menyimpan cerita, dan setiap cerita lebih indah jika ditonton bersama.',
    'section.trending': 'Sedang Trending', 'section.ongoing': 'Sedang Tayang',
    'section.completed': 'Sudah Tamat', 'section.popular': 'Paling Populer',
    'section.viewAll': 'Lihat Semua', 'player.quality': 'Kualitas', 'player.subtitle': 'Subtitle',
    'player.subtitle.off': 'Nonaktif', 'player.subtitle.id': 'Indonesia', 'player.subtitle.en': 'English',
    'detail.watch': 'Tonton Sekarang', 'detail.addWatchlist': 'Tambah ke Daftar',
    'together.title': 'Nonton Bareng', 'together.create': 'Buat Room',
    'auth.login': 'Masuk', 'auth.register': 'Daftar', 'auth.email': 'Email', 'auth.password': 'Kata Sandi',
    'settings.dark': 'Gelap', 'settings.ultraDark': 'Ultra Gelap',
    'footer.tagline': 'Menonton bukan sekadar hiburan, tapi kebersamaan yang mengikat rasa.',
    'msg.welcome': 'Kamu tidak sendirian malam ini. Kami sudah menyiapkan cerita terbaik untukmu.',
    'ad.skip': 'Lewati Iklan'
  },
  en: {
    'nav.home': 'Home', 'nav.browse': 'Browse', 'nav.anime': 'Anime',
    'nav.donghua': 'Donghua', 'nav.drama': 'C-Drama', 'nav.watchlist': 'Watchlist',
    'nav.login': 'Login', 'nav.register': 'Register', 'nav.search': 'Search anime, donghua, drama...',
    'hero.badge': '🔥 Trending This Week', 'hero.watch': 'Watch Now', 'hero.info': 'More Info',
    'hero.quote': 'Every episode holds a story, and every story is more beautiful when watched together.',
    'section.trending': 'Trending Now', 'section.ongoing': 'Currently Airing',
    'section.completed': 'Completed', 'section.popular': 'Most Popular',
    'section.viewAll': 'View All', 'player.quality': 'Quality', 'player.subtitle': 'Subtitle',
    'player.subtitle.off': 'Off', 'player.subtitle.id': 'Indonesian', 'player.subtitle.en': 'English',
    'detail.watch': 'Watch Now', 'detail.addWatchlist': 'Add to List',
    'together.title': 'Watch Together', 'together.create': 'Create Room',
    'auth.login': 'Login', 'auth.register': 'Register', 'auth.email': 'Email', 'auth.password': 'Password',
    'settings.dark': 'Dark', 'settings.ultraDark': 'Ultra Dark',
    'footer.tagline': 'Watching is not just entertainment, but togetherness that binds feelings.',
    'msg.welcome': 'You\'re not alone tonight. We have prepared the best stories for you.',
    'ad.skip': 'Skip Ad'
  }
};

// Free video sources from public domain
const freeVideos = {
  bigBuckBunny: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  sintel: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  tearsOfSteel: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  elephantDream: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
  forBiggerBlazes: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  forBiggerEscapes: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  forBiggerFun: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  forBiggerJoyrides: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  forBiggerMeltdowns: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  subaruOutback: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
  volkswagenGTI: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4',
  weAreGoingOnBullrun: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4',
  whatCarCanYouGetForAGrand: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4'
};

// Ad banner data
const adBanners = [
  {
    id: 1,
    type: 'banner',
    size: '728x90',
    image: 'https://placehold.co/728x90/ff4757/ffffff?text=🎬+Nonton+Anime+Gratis+di+Nonton+Bareng+MS!',
    link: '#',
    alt: 'Promo Nonton Bareng MS'
  },
  {
    id: 2,
    type: 'sidebar',
    size: '300x250',
    image: 'https://placehold.co/300x250/ffd700/000000?text=✨+Premium+Content+Gratis!',
    link: '#',
    alt: 'Premium Content'
  },
  {
    id: 3,
    type: 'banner',
    size: '728x90',
    image: 'https://placehold.co/728x90/a855f7/ffffff?text=🔥+Anime+Terbaru+2025+Subtitle+Indonesia',
    link: '#',
    alt: 'Anime Terbaru'
  },
  {
    id: 4,
    type: 'sidebar',
    size: '300x250',
    image: 'https://placehold.co/300x250/6366f1/ffffff?text=📺+Donghua+China+Terbaik!',
    link: '#',
    alt: 'Donghua China'
  },
  {
    id: 5,
    type: 'video',
    duration: 5,
    videoUrl: freeVideos.forBiggerFun,
    skipAfter: 5
  }
];

const animeData = [
  {
    id: 1, title: 'Solo Leveling Season 2', titleJP: '俺だけレベルアップな件', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&h=800&fit=crop',
    synopsis: 'Sung Jinwoo, yang dulunya hunter paling lemah, kini bangkit sebagai Shadow Monarch yang ditakuti. Ikuti perjalanannya dalam menghadapi ancaman dari dunia lain.',
    genre: ['Action', 'Fantasy'], year: 2025, status: 'ongoing', episodes: 12, currentEpisode: 8,
    rating: 9.2, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.sintel
  },
  {
    id: 2, title: 'Demon Slayer: Infinity Castle', titleJP: '鬼滅の刃', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1920&h=800&fit=crop',
    synopsis: 'Pertempuran terakhir melawan Muzan Kibutsuji di Infinity Castle dimulai. Tanjiro dan teman-temannya harus memberikan segalanya untuk menyelamatkan umat manusia.',
    genre: ['Action', 'Fantasy'], year: 2025, status: 'ongoing', episodes: 24, currentEpisode: 15,
    rating: 9.5, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.bigBuckBunny
  },
  {
    id: 3, title: 'Jujutsu Kaisen Season 3', titleJP: '呪術廻戦', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1920&h=800&fit=crop',
    synopsis: 'Culling Game berlanjut. Itadori harus menyelamatkan Megumi dari Sukuna yang telah mengambil alih tubuhnya.',
    genre: ['Action', 'Supernatural'], year: 2025, status: 'ongoing', episodes: 24, currentEpisode: 10,
    rating: 9.1, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.tearsOfSteel
  },
  {
    id: 4, title: 'One Piece', titleJP: 'ワンピース', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=1920&h=800&fit=crop',
    synopsis: 'Petualangan Luffy menuju Laugh Tale, tempat One Piece berada. Apakah dia akan menjadi Raja Bajak Laut?',
    genre: ['Action', 'Adventure'], year: 1999, status: 'ongoing', episodes: 1150, currentEpisode: 1150,
    rating: 9.0, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.elephantDream
  },
  {
    id: 5, title: 'Attack on Titan Final', titleJP: '進撃の巨人', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=1920&h=800&fit=crop',
    synopsis: 'Rumbling telah dimulai, nasib dunia bergantung pada pilihan Eren dan teman-temannya.',
    genre: ['Action', 'Drama'], year: 2023, status: 'completed', episodes: 87, currentEpisode: 87,
    rating: 9.4, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.sintel
  },
  {
    id: 6, title: 'Spy x Family Season 3', titleJP: 'スパイファミリー', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1920&h=800&fit=crop',
    synopsis: 'Keluarga Forger kembali dengan misi baru yang seru dan lucu. Anya, Loid, dan Yor menghadapi tantangan baru.',
    genre: ['Comedy', 'Action'], year: 2025, status: 'ongoing', episodes: 12, currentEpisode: 6,
    rating: 8.8, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.bigBuckBunny
  }
];

const donghuaData = [
  {
    id: 101, title: 'Battle Through the Heavens S6', titleCN: '斗破苍穹', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=800&fit=crop',
    synopsis: 'Xiao Yan menghadapi musuh baru dari Soul Hall yang mengancam benua. Pertarungan besar akan segera dimulai.',
    genre: ['Action', 'Fantasy'], year: 2025, status: 'ongoing', episodes: 52, currentEpisode: 30,
    rating: 8.9, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.tearsOfSteel
  },
  {
    id: 102, title: 'Soul Land 2', titleCN: '斗罗大陆2', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&h=800&fit=crop',
    synopsis: 'Huo Yuhao memulai perjalanan di Soul Land yang telah berubah. Dengan twin martial souls, dia akan mengubah dunia.',
    genre: ['Action', 'Romance'], year: 2024, status: 'ongoing', episodes: 78, currentEpisode: 52,
    rating: 8.7, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.elephantDream
  },
  {
    id: 103, title: 'Martial Peak', titleCN: '武炼巅峰', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop',
    synopsis: 'Yang Kai menemukan Black Book yang mengubah nasibnya. Dari murid yang lemah menjadi kultivator legendaris.',
    genre: ['Action', 'Martial Arts'], year: 2024, status: 'ongoing', episodes: 156, currentEpisode: 120,
    rating: 8.5, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.bigBuckBunny
  },
  {
    id: 104, title: 'Perfect World', titleCN: '完美世界', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1920&h=800&fit=crop',
    synopsis: 'Shi Hao bertekad menjadi kultivator terkuat meski Supreme Bone-nya dicuri. Kisah balas dendam dan kekuatan dimulai.',
    genre: ['Action', 'Fantasy'], year: 2024, status: 'ongoing', episodes: 120, currentEpisode: 85,
    rating: 8.6, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.sintel
  },
  {
    id: 105, title: 'Link Click Season 3', titleCN: '时光代理人', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1920&h=800&fit=crop',
    synopsis: 'Cheng Xiaoshi dan Lu Guang menghadapi misteri baru yang berbahaya. Waktu terus berputar, tapi apakah mereka bisa mengubah takdir?',
    genre: ['Mystery', 'Drama'], year: 2025, status: 'ongoing', episodes: 12, currentEpisode: 5,
    rating: 9.0, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.tearsOfSteel
  }
];

const dramaData = [
  {
    id: 201, title: 'Love Between Fairy and Devil', titleCN: '苍兰诀', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920&h=800&fit=crop',
    synopsis: 'Orchid membebaskan Moon Supreme, kisah cinta antara peri dan iblis. Bisakah cinta mengalahkan takdir?',
    genre: ['Romance', 'Fantasy'], year: 2022, status: 'completed', episodes: 36, currentEpisode: 36,
    rating: 9.1, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.bigBuckBunny
  },
  {
    id: 202, title: 'Hidden Love', titleCN: '偷偷藏不住', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&h=800&fit=crop',
    synopsis: 'Sang Zhi menyukai teman kakaknya sejak SMP, perasaan itu akhirnya terungkap setelah bertahun-tahun.',
    genre: ['Romance', 'Youth'], year: 2023, status: 'completed', episodes: 25, currentEpisode: 25,
    rating: 8.9, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.elephantDream
  },
  {
    id: 203, title: 'Love Like the Galaxy', titleCN: '星汉灿烂', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=800&fit=crop',
    synopsis: 'Cheng Shaoshang bertemu Jenderal Ling Buyi dan perlahan jatuh cinta. Kisah cinta epik di era kerajaan.',
    genre: ['Historical', 'Romance'], year: 2022, status: 'completed', episodes: 56, currentEpisode: 56,
    rating: 9.0, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.sintel
  },
  {
    id: 204, title: 'The Story of Pearl Girl', titleCN: '珠帘玉幕', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&h=800&fit=crop',
    synopsis: 'Gadis sederhana terjebak dalam intrik istana yang berbahaya. Akankah dia bisa selamat?',
    genre: ['Historical', 'Drama'], year: 2025, status: 'ongoing', episodes: 40, currentEpisode: 22,
    rating: 8.5, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.tearsOfSteel
  },
  {
    id: 205, title: 'Royal Rumors', titleCN: '花间令', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1920&h=800&fit=crop',
    synopsis: 'Kisah unik pertukaran jiwa antara pria dan wanita di era dinasti. Komedi romantis yang menghibur.',
    genre: ['Comedy', 'Romance'], year: 2024, status: 'completed', episodes: 36, currentEpisode: 36,
    rating: 8.7, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: freeVideos.bigBuckBunny
  }
];

const allContent = [...animeData, ...donghuaData, ...dramaData];

// Generate episodes with different video sources
const videoPool = [
  freeVideos.bigBuckBunny,
  freeVideos.sintel,
  freeVideos.tearsOfSteel,
  freeVideos.elephantDream,
  freeVideos.forBiggerBlazes,
  freeVideos.forBiggerEscapes,
  freeVideos.forBiggerFun,
  freeVideos.forBiggerJoyrides
];

const generateEpisodes = (total, id) => {
  const content = allContent.find(c => c.id === id);
  const baseVideo = content?.videoUrl || freeVideos.bigBuckBunny;

  return Array.from({ length: total }, (_, i) => ({
    id: `${id}-${i + 1}`,
    number: i + 1,
    title: `Episode ${i + 1}`,
    duration: '24:00',
    thumbnail: `https://picsum.photos/seed/${id}${i}/320/180`,
    videoUrl: i === 0 ? baseVideo : videoPool[i % videoPool.length]
  }));
};

// Get random ad
const getRandomAd = (type = 'banner') => {
  const ads = adBanners.filter(ad => ad.type === type);
  return ads[Math.floor(Math.random() * ads.length)];
};

// Export
window.AppData = {
  translations,
  animeData,
  donghuaData,
  dramaData,
  allContent,
  generateEpisodes,
  adBanners,
  getRandomAd,
  freeVideos
};
