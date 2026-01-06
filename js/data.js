/* NONTON BARENG MS - DATA */
/* Streaming Website Data - Like Anichin, DramaBox, Melolo */

const translations = {
  id: {
    'nav.home': 'Beranda', 'nav.browse': 'Jelajahi', 'nav.anime': 'Anime',
    'nav.donghua': 'Donghua', 'nav.drama': 'Short Drama', 'nav.watchlist': 'Daftar Tonton',
    'nav.login': 'Masuk', 'nav.register': 'Daftar', 'nav.search': 'Cari anime, donghua, drama...',
    'hero.badge': '🔥 Trending Minggu Ini', 'hero.watch': 'Tonton Sekarang', 'hero.info': 'Info Selengkapnya',
    'hero.quote': 'Setiap episode menyimpan cerita, dan setiap cerita lebih indah jika ditonton bersama.',
    'section.trending': 'Sedang Trending', 'section.ongoing': 'Sedang Tayang',
    'section.completed': 'Sudah Tamat', 'section.popular': 'Paling Populer',
    'section.latest': 'Rilis Terbaru',
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
    'section.latest': 'Latest Release',
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

// Embed video sources (YouTube, Dailymotion, Direct)
const embedSources = {
  // YouTube anime/donghua trailers & clips (legal public content)
  youtube: (id) => `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`,

  // Dailymotion 
  dailymotion: (id) => `https://www.dailymotion.com/embed/video/${id}?autoplay=1`,

  // Direct video (sample/public domain)
  direct: {
    bigBuckBunny: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    sintel: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    tearsOfSteel: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    elephantDream: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
  }
};

// Donghua Data (Like Anichin)
const donghuaData = [
  {
    id: 101,
    title: 'Soul Land / Douluo Dalu',
    titleCN: '斗罗大陆',
    type: 'donghua',
    cover: 'https://i.ytimg.com/vi/n7JRHjLU9Ps/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/n7JRHjLU9Ps/maxresdefault.jpg',
    synopsis: 'Tang San, seorang master senjata tersembunyi dari Tang Sect, terlahir kembali di dunia dimana kekuatan spiritual adalah segalanya. Dengan pengetahuan dari kehidupan sebelumnya, dia bertekad menjadi Douluo terkuat.',
    genre: ['Action', 'Fantasy', 'Martial Arts'],
    year: 2018,
    status: 'ongoing',
    episodes: 300,
    currentEpisode: 280,
    rating: 9.0,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    // YouTube embed for this series (public trailer/clip)
    embedType: 'youtube',
    embedId: 'n7JRHjLU9Ps',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'n7JRHjLU9Ps' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.sintel }
    ]
  },
  {
    id: 102,
    title: 'Battle Through the Heavens',
    titleCN: '斗破苍穹',
    type: 'donghua',
    cover: 'https://i.ytimg.com/vi/ByXuk2STSHU/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/ByXuk2STSHU/maxresdefault.jpg',
    synopsis: 'Xiao Yan pernah menjadi jenius kultivasi, tapi tiba-tiba kehilangan semua kekuatannya. Setelah bertemu kakek misterius dalam cincinnya, dia memulai perjalanan untuk mendapatkan kembali kehormatan dan kekuatannya.',
    genre: ['Action', 'Fantasy', 'Romance'],
    year: 2017,
    status: 'ongoing',
    episodes: 150,
    currentEpisode: 120,
    rating: 8.9,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: 'ByXuk2STSHU',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'ByXuk2STSHU' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.bigBuckBunny }
    ]
  },
  {
    id: 103,
    title: 'Martial Peak / Wu Lian Dian Feng',
    titleCN: '武炼巅峰',
    type: 'donghua',
    cover: 'https://i.ytimg.com/vi/eoGNWweZJsE/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/eoGNWweZJsE/maxresdefault.jpg',
    synopsis: 'Yang Kai menemukan Black Book misterius yang mengubah takdirnya. Dari murid terbawah, dia bertekad mencapai puncak dunia kultivasi.',
    genre: ['Action', 'Fantasy', 'Martial Arts'],
    year: 2020,
    status: 'ongoing',
    episodes: 200,
    currentEpisode: 156,
    rating: 8.5,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: 'eoGNWweZJsE',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'eoGNWweZJsE' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.tearsOfSteel }
    ]
  },
  {
    id: 104,
    title: 'Perfect World',
    titleCN: '完美世界',
    type: 'donghua',
    cover: 'https://i.ytimg.com/vi/SkIwLPr_T5g/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/SkIwLPr_T5g/maxresdefault.jpg',
    synopsis: 'Shi Hao, anak dengan Supreme Bone yang dicuri oleh keluarganya sendiri, bertekad menjadi kultivator terkuat dan membalas dendam.',
    genre: ['Action', 'Fantasy', 'Adventure'],
    year: 2021,
    status: 'ongoing',
    episodes: 160,
    currentEpisode: 120,
    rating: 8.7,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: 'SkIwLPr_T5g',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'SkIwLPr_T5g' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.elephantDream }
    ]
  },
  {
    id: 105,
    title: 'Apotheosis / Bai Lian Cheng Shen',
    titleCN: '百炼成神',
    type: 'donghua',
    cover: 'https://i.ytimg.com/vi/cQ2ykPJNEwk/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/cQ2ykPJNEwk/maxresdefault.jpg',
    synopsis: 'Luo Zheng adalah putra dari keluarga terpandang yang jatuh menjadi budak. Dengan tekad kuat, dia memulai perjalanan untuk menjadi dewa.',
    genre: ['Action', 'Fantasy', 'Drama'],
    year: 2020,
    status: 'ongoing',
    episodes: 120,
    currentEpisode: 110,
    rating: 8.4,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: 'cQ2ykPJNEwk',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'cQ2ykPJNEwk' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.sintel }
    ]
  },
  {
    id: 106,
    title: 'Swallowed Star / Tunshi Xingkong',
    titleCN: '吞噬星空',
    type: 'donghua',
    cover: 'https://i.ytimg.com/vi/8D5XyhzGhv4/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/8D5XyhzGhv4/maxresdefault.jpg',
    synopsis: 'Di masa depan, bumi diserang oleh monster. Luo Feng bermimpi menjadi Warrior dan melindungi keluarganya.',
    genre: ['Sci-Fi', 'Action', 'Fantasy'],
    year: 2020,
    status: 'ongoing',
    episodes: 200,
    currentEpisode: 180,
    rating: 8.8,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: '8D5XyhzGhv4',
    servers: [
      { name: 'Server 1', type: 'youtube', id: '8D5XyhzGhv4' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.bigBuckBunny }
    ]
  }
];

// Anime Data
const animeData = [
  {
    id: 1,
    title: 'Solo Leveling',
    titleJP: '俺だけレベルアップな件',
    type: 'anime',
    cover: 'https://i.ytimg.com/vi/GyIAMt1AXTQ/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/GyIAMt1AXTQ/maxresdefault.jpg',
    synopsis: 'Sung Jinwoo adalah hunter terlemah rank E. Setelah hampir mati di dungeon, dia mendapat kekuatan misterius untuk "level up" tanpa batas.',
    genre: ['Action', 'Fantasy', 'Adventure'],
    year: 2024,
    status: 'ongoing',
    episodes: 24,
    currentEpisode: 12,
    rating: 9.5,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: 'GyIAMt1AXTQ',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'GyIAMt1AXTQ' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.sintel }
    ]
  },
  {
    id: 2,
    title: 'Demon Slayer: Kimetsu no Yaiba',
    titleJP: '鬼滅の刃',
    type: 'anime',
    cover: 'https://i.ytimg.com/vi/VQGCKyvzIM4/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/VQGCKyvzIM4/maxresdefault.jpg',
    synopsis: 'Tanjiro Kamado bertekad membalas dendam keluarganya yang dibunuh iblis dan mengembalikan adiknya yang berubah menjadi iblis.',
    genre: ['Action', 'Fantasy', 'Drama'],
    year: 2019,
    status: 'ongoing',
    episodes: 55,
    currentEpisode: 55,
    rating: 9.3,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: 'VQGCKyvzIM4',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'VQGCKyvzIM4' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.bigBuckBunny }
    ]
  },
  {
    id: 3,
    title: 'Jujutsu Kaisen',
    titleJP: '呪術廻戦',
    type: 'anime',
    cover: 'https://i.ytimg.com/vi/4A_X-Dvl0ws/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/4A_X-Dvl0ws/maxresdefault.jpg',
    synopsis: 'Itadori Yuji menelan jari Raja Kutukan Sukuna dan memasuki dunia jujutsu sorcerer untuk mengumpulkan semua jari Sukuna.',
    genre: ['Action', 'Supernatural', 'Dark Fantasy'],
    year: 2020,
    status: 'ongoing',
    episodes: 48,
    currentEpisode: 48,
    rating: 9.2,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: '4A_X-Dvl0ws',
    servers: [
      { name: 'Server 1', type: 'youtube', id: '4A_X-Dvl0ws' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.tearsOfSteel }
    ]
  },
  {
    id: 4,
    title: 'One Piece',
    titleJP: 'ワンピース',
    type: 'anime',
    cover: 'https://i.ytimg.com/vi/MCb13lbVGE0/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/MCb13lbVGE0/maxresdefault.jpg',
    synopsis: 'Monkey D. Luffy bermimpi menjadi Raja Bajak Laut dan menemukan harta karun legendaris One Piece.',
    genre: ['Action', 'Adventure', 'Comedy'],
    year: 1999,
    status: 'ongoing',
    episodes: 1100,
    currentEpisode: 1100,
    rating: 9.0,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: 'MCb13lbVGE0',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'MCb13lbVGE0' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.elephantDream }
    ]
  },
  {
    id: 5,
    title: 'Attack on Titan',
    titleJP: '進撃の巨人',
    type: 'anime',
    cover: 'https://i.ytimg.com/vi/MGRm4IzK1SQ/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/MGRm4IzK1SQ/maxresdefault.jpg',
    synopsis: 'Umat manusia hidup di dalam tembok raksasa untuk berlindung dari Titan. Eren Yeager bertekad memusnahkan semua Titan.',
    genre: ['Action', 'Dark Fantasy', 'Drama'],
    year: 2013,
    status: 'completed',
    episodes: 87,
    currentEpisode: 87,
    rating: 9.4,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: 'MGRm4IzK1SQ',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'MGRm4IzK1SQ' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.sintel }
    ]
  },
  {
    id: 6,
    title: 'Spy x Family',
    titleJP: 'スパイファミリー',
    type: 'anime',
    cover: 'https://i.ytimg.com/vi/ofXigq9aIpo/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/ofXigq9aIpo/maxresdefault.jpg',
    synopsis: 'Mata-mata terbaik harus membentuk keluarga palsu dengan telepat dan pembunuh untuk misi rahasianya.',
    genre: ['Comedy', 'Action', 'Slice of Life'],
    year: 2022,
    status: 'ongoing',
    episodes: 37,
    currentEpisode: 37,
    rating: 8.8,
    hasSubtitle: true,
    subtitleLang: ['id', 'en'],
    embedType: 'youtube',
    embedId: 'ofXigq9aIpo',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'ofXigq9aIpo' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.bigBuckBunny }
    ]
  }
];

// Short Drama Data (Like DramaBox/Melolo)
const dramaData = [
  {
    id: 201,
    title: 'CEO Jatuh Cinta Pada Pelayan',
    titleCN: '霸道总裁爱上我',
    type: 'drama',
    cover: 'https://i.ytimg.com/vi/cjvHrBG8IaU/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/cjvHrBG8IaU/maxresdefault.jpg',
    synopsis: 'Wanita biasa bekerja di mansion CEO yang dingin dan arogan. Tanpa disangka, CEO jatuh cinta padanya.',
    genre: ['Romance', 'Drama'],
    year: 2024,
    status: 'completed',
    episodes: 80,
    currentEpisode: 80,
    rating: 8.9,
    hasSubtitle: true,
    subtitleLang: ['id'],
    isVertical: true,
    episodeDuration: '1-2 menit',
    embedType: 'youtube',
    embedId: 'cjvHrBG8IaU',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'cjvHrBG8IaU' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.bigBuckBunny }
    ]
  },
  {
    id: 202,
    title: 'Suamiku Ternyata Miliarder',
    titleCN: '我的老公是亿万富翁',
    type: 'drama',
    cover: 'https://i.ytimg.com/vi/LTz1TrVQVgE/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/LTz1TrVQVgE/maxresdefault.jpg',
    synopsis: 'Menikah dengan pria biasa, ternyata suaminya adalah pewaris kerajaan bisnis tersembunyi.',
    genre: ['Romance', 'Drama', 'Comedy'],
    year: 2024,
    status: 'completed',
    episodes: 100,
    currentEpisode: 100,
    rating: 9.1,
    hasSubtitle: true,
    subtitleLang: ['id'],
    isVertical: true,
    episodeDuration: '1-2 menit',
    embedType: 'youtube',
    embedId: 'LTz1TrVQVgE',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'LTz1TrVQVgE' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.sintel }
    ]
  },
  {
    id: 203,
    title: 'Balas Dendam Sang Putri',
    titleCN: '公主复仇记',
    type: 'drama',
    cover: 'https://i.ytimg.com/vi/Mz3eG_aICpM/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/Mz3eG_aICpM/maxresdefault.jpg',
    synopsis: 'Putri kerajaan yang difitnah kembali untuk membalas dendam kepada pengkhianat.',
    genre: ['Historical', 'Drama', 'Revenge'],
    year: 2024,
    status: 'ongoing',
    episodes: 120,
    currentEpisode: 75,
    rating: 9.2,
    hasSubtitle: true,
    subtitleLang: ['id'],
    isVertical: true,
    episodeDuration: '1-2 menit',
    embedType: 'youtube',
    embedId: 'Mz3eG_aICpM',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'Mz3eG_aICpM' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.tearsOfSteel }
    ]
  },
  {
    id: 204,
    title: 'Cinderella Modern',
    titleCN: '现代灰姑娘',
    type: 'drama',
    cover: 'https://i.ytimg.com/vi/J9DcT8HK0CY/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/J9DcT8HK0CY/maxresdefault.jpg',
    synopsis: 'Gadis miskin bertemu pangeran tampan di pesta topeng. Kisah cinta modern yang penuh drama.',
    genre: ['Romance', 'Comedy'],
    year: 2025,
    status: 'ongoing',
    episodes: 90,
    currentEpisode: 45,
    rating: 8.7,
    hasSubtitle: true,
    subtitleLang: ['id'],
    isVertical: true,
    episodeDuration: '1-2 menit',
    embedType: 'youtube',
    embedId: 'J9DcT8HK0CY',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'J9DcT8HK0CY' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.elephantDream }
    ]
  },
  {
    id: 205,
    title: 'Istri Kontrak CEO Dingin',
    titleCN: '冷总裁的契约妻',
    type: 'drama',
    cover: 'https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/QwievZ1Tx-8/maxresdefault.jpg',
    synopsis: 'Terpaksa menikah kontrak dengan CEO yang dingin, tapi perlahan hati mereka meleleh.',
    genre: ['Romance', 'Drama'],
    year: 2025,
    status: 'ongoing',
    episodes: 100,
    currentEpisode: 60,
    rating: 9.0,
    hasSubtitle: true,
    subtitleLang: ['id'],
    isVertical: true,
    episodeDuration: '1-2 menit',
    embedType: 'youtube',
    embedId: 'QwievZ1Tx-8',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'QwievZ1Tx-8' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.bigBuckBunny }
    ]
  },
  {
    id: 206,
    title: 'Kembalinya Sang Pewaris',
    titleCN: '继承人归来',
    type: 'drama',
    cover: 'https://i.ytimg.com/vi/DwF6xxLBFYU/maxresdefault.jpg',
    banner: 'https://i.ytimg.com/vi/DwF6xxLBFYU/maxresdefault.jpg',
    synopsis: 'Pewaris yang dibuang keluarga kembali dengan identitas baru untuk mengambil kembali haknya.',
    genre: ['Drama', 'Revenge', 'Romance'],
    year: 2024,
    status: 'completed',
    episodes: 95,
    currentEpisode: 95,
    rating: 9.3,
    hasSubtitle: true,
    subtitleLang: ['id'],
    isVertical: true,
    episodeDuration: '1-2 menit',
    embedType: 'youtube',
    embedId: 'DwF6xxLBFYU',
    servers: [
      { name: 'Server 1', type: 'youtube', id: 'DwF6xxLBFYU' },
      { name: 'Server 2', type: 'direct', url: embedSources.direct.sintel }
    ]
  }
];

const allContent = [...animeData, ...donghuaData, ...dramaData];

// Generate episodes with embed sources
const generateEpisodes = (total, id) => {
  const content = allContent.find(c => c.id === id);
  if (!content) return [];

  const servers = content.servers || [];

  return Array.from({ length: total }, (_, i) => ({
    id: `${id}-${i + 1}`,
    number: i + 1,
    title: `Episode ${i + 1}`,
    duration: content.isVertical ? '1:30' : '24:00',
    thumbnail: `https://picsum.photos/seed/${id}${i}/320/180`,
    embedType: content.embedType,
    embedId: content.embedId,
    servers: servers
  }));
};

// Get embed URL
const getEmbedUrl = (content, server = 0) => {
  if (!content || !content.servers || !content.servers[server]) {
    return embedSources.direct.bigBuckBunny;
  }

  const srv = content.servers[server];
  if (srv.type === 'youtube') {
    return embedSources.youtube(srv.id);
  } else if (srv.type === 'dailymotion') {
    return embedSources.dailymotion(srv.id);
  } else {
    return srv.url;
  }
};

// Export
window.AppData = {
  translations,
  animeData,
  donghuaData,
  dramaData,
  allContent,
  generateEpisodes,
  embedSources,
  getEmbedUrl
};
