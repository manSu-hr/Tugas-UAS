/* NONTON BARENG MS - DATA */

const translations = {
  id: {
    'nav.home': 'Beranda', 'nav.browse': 'Jelajahi', 'nav.anime': 'Anime',
    'nav.donghua': 'Donghua', 'nav.drama': 'Short Drama', 'nav.watchlist': 'Daftar Tonton',
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
    'msg.welcome': 'Kamu tidak sendirian malam ini. Kami sudah menyiapkan cerita terbaik untukmu.'
  },
  en: {
    'nav.home': 'Home', 'nav.browse': 'Browse', 'nav.anime': 'Anime',
    'nav.donghua': 'Donghua', 'nav.drama': 'Short Drama', 'nav.watchlist': 'Watchlist',
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
    'msg.welcome': 'You\'re not alone tonight. We have prepared the best stories for you.'
  }
};

// Video sources - using embeddable anime/video sources
const videoSources = {
  // Sample videos for demo
  sample1: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  sample2: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
  sample3: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
  sample4: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
};

// Anime Data - like Anichin/Animeku
const animeData = [
  {
    id: 1, title: 'Solo Leveling Season 2', titleJP: '俺だけレベルアップな件', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&h=800&fit=crop',
    synopsis: 'Sung Jinwoo, yang dulunya hunter paling lemah, kini bangkit sebagai Shadow Monarch yang ditakuti. Ikuti perjalanannya dalam menghadapi ancaman dari dunia lain.',
    genre: ['Action', 'Fantasy'], year: 2025, status: 'ongoing', episodes: 12, currentEpisode: 8,
    rating: 9.2, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample2
  },
  {
    id: 2, title: 'Demon Slayer: Infinity Castle', titleJP: '鬼滅の刃', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1920&h=800&fit=crop',
    synopsis: 'Pertempuran terakhir melawan Muzan Kibutsuji di Infinity Castle dimulai. Tanjiro dan teman-temannya harus memberikan segalanya untuk menyelamatkan umat manusia.',
    genre: ['Action', 'Fantasy'], year: 2025, status: 'ongoing', episodes: 24, currentEpisode: 15,
    rating: 9.5, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample1
  },
  {
    id: 3, title: 'Jujutsu Kaisen Season 3', titleJP: '呪術廻戦', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=1920&h=800&fit=crop',
    synopsis: 'Culling Game berlanjut. Itadori harus menyelamatkan Megumi dari Sukuna yang telah mengambil alih tubuhnya.',
    genre: ['Action', 'Supernatural'], year: 2025, status: 'ongoing', episodes: 24, currentEpisode: 10,
    rating: 9.1, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample3
  },
  {
    id: 4, title: 'One Piece', titleJP: 'ワンピース', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1519638399535-1b036603ac77?w=1920&h=800&fit=crop',
    synopsis: 'Petualangan Luffy menuju Laugh Tale, tempat One Piece berada. Apakah dia akan menjadi Raja Bajak Laut?',
    genre: ['Action', 'Adventure'], year: 1999, status: 'ongoing', episodes: 1150, currentEpisode: 1150,
    rating: 9.0, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample4
  },
  {
    id: 5, title: 'Attack on Titan Final', titleJP: '進撃の巨人', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1541562232579-512a21360020?w=1920&h=800&fit=crop',
    synopsis: 'Rumbling telah dimulai, nasib dunia bergantung pada pilihan Eren dan teman-temannya.',
    genre: ['Action', 'Drama'], year: 2023, status: 'completed', episodes: 87, currentEpisode: 87,
    rating: 9.4, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample2
  },
  {
    id: 6, title: 'Spy x Family Season 3', titleJP: 'スパイファミリー', type: 'anime',
    cover: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=1920&h=800&fit=crop',
    synopsis: 'Keluarga Forger kembali dengan misi baru yang seru dan lucu. Anya, Loid, dan Yor menghadapi tantangan baru.',
    genre: ['Comedy', 'Action'], year: 2025, status: 'ongoing', episodes: 12, currentEpisode: 6,
    rating: 8.8, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample1
  }
];

// Donghua Data
const donghuaData = [
  {
    id: 101, title: 'Battle Through the Heavens S6', titleCN: '斗破苍穹', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1920&h=800&fit=crop',
    synopsis: 'Xiao Yan menghadapi musuh baru dari Soul Hall yang mengancam benua. Pertarungan besar akan segera dimulai.',
    genre: ['Action', 'Fantasy'], year: 2025, status: 'ongoing', episodes: 52, currentEpisode: 30,
    rating: 8.9, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample3
  },
  {
    id: 102, title: 'Soul Land 2', titleCN: '斗罗大陆2', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1920&h=800&fit=crop',
    synopsis: 'Huo Yuhao memulai perjalanan di Soul Land yang telah berubah. Dengan twin martial souls, dia akan mengubah dunia.',
    genre: ['Action', 'Romance'], year: 2024, status: 'ongoing', episodes: 78, currentEpisode: 52,
    rating: 8.7, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample4
  },
  {
    id: 103, title: 'Martial Peak', titleCN: '武炼巅峰', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop',
    synopsis: 'Yang Kai menemukan Black Book yang mengubah nasibnya. Dari murid yang lemah menjadi kultivator legendaris.',
    genre: ['Action', 'Martial Arts'], year: 2024, status: 'ongoing', episodes: 156, currentEpisode: 120,
    rating: 8.5, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample1
  },
  {
    id: 104, title: 'Perfect World', titleCN: '完美世界', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1920&h=800&fit=crop',
    synopsis: 'Shi Hao bertekad menjadi kultivator terkuat meski Supreme Bone-nya dicuri. Kisah balas dendam dan kekuatan dimulai.',
    genre: ['Action', 'Fantasy'], year: 2024, status: 'ongoing', episodes: 120, currentEpisode: 85,
    rating: 8.6, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample2
  },
  {
    id: 105, title: 'Link Click Season 3', titleCN: '时光代理人', type: 'donghua',
    cover: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=1920&h=800&fit=crop',
    synopsis: 'Cheng Xiaoshi dan Lu Guang menghadapi misteri baru yang berbahaya. Waktu terus berputar, tapi apakah mereka bisa mengubah takdir?',
    genre: ['Mystery', 'Drama'], year: 2025, status: 'ongoing', episodes: 12, currentEpisode: 5,
    rating: 9.0, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'],
    videoUrl: videoSources.sample3
  }
];

// Short Drama Data - Like DramaBox/iQIYI/Melolo (Vertical Format Short Episodes)
const dramaData = [
  {
    id: 201, title: 'CEO Jatuh Cinta Pada Pelayan', titleCN: '霸道总裁爱上我', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=1920&h=800&fit=crop',
    synopsis: 'Gadis biasa bekerja sebagai pelayan di mansion CEO dingin. Tanpa disangka, CEO jatuh cinta padanya.',
    genre: ['Romance', 'Drama'], year: 2024, status: 'completed', episodes: 80, currentEpisode: 80,
    rating: 8.9, hasSubtitle: true, hasDubbing: false, subtitleLang: ['id'], quality: ['720p', '1080p'],
    videoUrl: videoSources.sample1, isVertical: true, episodeDuration: '1-2 menit'
  },
  {
    id: 202, title: 'Suamiku Ternyata Miliarder', titleCN: '我的老公是亿万富翁', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1920&h=800&fit=crop',
    synopsis: 'Menikah dengan pria biasa, tapi ternyata suaminya adalah pewaris kerajaan bisnis tersembunyi.',
    genre: ['Romance', 'Drama'], year: 2024, status: 'completed', episodes: 100, currentEpisode: 100,
    rating: 9.1, hasSubtitle: true, hasDubbing: false, subtitleLang: ['id'], quality: ['720p', '1080p'],
    videoUrl: videoSources.sample2, isVertical: true, episodeDuration: '1-2 menit'
  },
  {
    id: 203, title: 'Balas Dendam Sang Putri', titleCN: '公主复仇记', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=800&fit=crop',
    synopsis: 'Putri kerajaan yang difitnah kembali untuk membalas dendam kepada mereka yang mengkhianatinya.',
    genre: ['Historical', 'Drama'], year: 2024, status: 'ongoing', episodes: 120, currentEpisode: 75,
    rating: 9.2, hasSubtitle: true, hasDubbing: false, subtitleLang: ['id'], quality: ['720p', '1080p'],
    videoUrl: videoSources.sample3, isVertical: true, episodeDuration: '1-2 menit'
  },
  {
    id: 204, title: 'Cinderella Modern', titleCN: '现代灰姑娘', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&h=800&fit=crop',
    synopsis: 'Gadis miskin bertemu pangeran tampan di pesta topeng. Kisah cinta modern yang penuh drama.',
    genre: ['Romance', 'Comedy'], year: 2025, status: 'ongoing', episodes: 90, currentEpisode: 45,
    rating: 8.7, hasSubtitle: true, hasDubbing: false, subtitleLang: ['id'], quality: ['720p', '1080p'],
    videoUrl: videoSources.sample4, isVertical: true, episodeDuration: '1-2 menit'
  },
  {
    id: 205, title: 'Mantan Suamiku CEO', titleCN: '前夫是总裁', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=1920&h=800&fit=crop',
    synopsis: 'Setelah bercerai, dia menyadari mantan suaminya adalah CEO perusahaan tempat dia bekerja.',
    genre: ['Romance', 'Drama'], year: 2024, status: 'completed', episodes: 85, currentEpisode: 85,
    rating: 8.8, hasSubtitle: true, hasDubbing: false, subtitleLang: ['id'], quality: ['720p', '1080p'],
    videoUrl: videoSources.sample1, isVertical: true, episodeDuration: '1-2 menit'
  },
  {
    id: 206, title: 'Istri Kontrak CEO Dingin', titleCN: '冷总裁的契约妻', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=1920&h=800&fit=crop',
    synopsis: 'Terpaksa menikah kontrak dengan CEO yang dingin, tapi perlahan hati mereka meleleh.',
    genre: ['Romance', 'Drama'], year: 2025, status: 'ongoing', episodes: 100, currentEpisode: 60,
    rating: 9.0, hasSubtitle: true, hasDubbing: false, subtitleLang: ['id'], quality: ['720p', '1080p'],
    videoUrl: videoSources.sample2, isVertical: true, episodeDuration: '1-2 menit'
  },
  {
    id: 207, title: 'Kembalinya Sang Pewaris', titleCN: '继承人归来', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=800&fit=crop',
    synopsis: 'Pewaris yang dibuang keluarga kembali dengan identitas baru untuk mengambil apa yang seharusnya miliknya.',
    genre: ['Drama', 'Revenge'], year: 2024, status: 'completed', episodes: 95, currentEpisode: 95,
    rating: 9.3, hasSubtitle: true, hasDubbing: false, subtitleLang: ['id'], quality: ['720p', '1080p'],
    videoUrl: videoSources.sample3, isVertical: true, episodeDuration: '1-2 menit'
  },
  {
    id: 208, title: 'Cinta Terlarang dengan Bos', titleCN: '与老板的禁忌爱情', type: 'drama',
    cover: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop',
    banner: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1920&h=800&fit=crop',
    synopsis: 'Karyawan baru jatuh cinta pada bosnya yang tampan. Hubungan terlarang di kantor yang penuh drama.',
    genre: ['Romance', 'Office'], year: 2025, status: 'ongoing', episodes: 80, currentEpisode: 35,
    rating: 8.6, hasSubtitle: true, hasDubbing: false, subtitleLang: ['id'], quality: ['720p', '1080p'],
    videoUrl: videoSources.sample4, isVertical: true, episodeDuration: '1-2 menit'
  }
];

const allContent = [...animeData, ...donghuaData, ...dramaData];

// Generate episodes
const generateEpisodes = (total, id) => {
  const content = allContent.find(c => c.id === id);
  const baseVideo = content?.videoUrl || videoSources.sample1;
  const videoPool = [videoSources.sample1, videoSources.sample2, videoSources.sample3, videoSources.sample4];

  return Array.from({ length: total }, (_, i) => ({
    id: `${id}-${i + 1}`,
    number: i + 1,
    title: `Episode ${i + 1}`,
    duration: content?.isVertical ? '1:30' : '24:00',
    thumbnail: `https://picsum.photos/seed/${id}${i}/320/180`,
    videoUrl: i === 0 ? baseVideo : videoPool[i % videoPool.length]
  }));
};

// Export
window.AppData = {
  translations,
  animeData,
  donghuaData,
  dramaData,
  allContent,
  generateEpisodes,
  videoSources
};
