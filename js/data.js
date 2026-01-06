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
    'msg.welcome': 'Kamu tidak sendirian malam ini. Kami sudah menyiapkan cerita terbaik untukmu.'
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
    'msg.welcome': 'You\'re not alone tonight. We have prepared the best stories for you.'
  }
};

const animeData = [
  { id: 1, title: 'Solo Leveling Season 2', titleJP: '俺だけレベルアップな件', type: 'anime',
    cover: 'https://picsum.photos/seed/solo/400/600', banner: 'https://picsum.photos/seed/solo/1920/800',
    synopsis: 'Sung Jinwoo, yang dulunya hunter paling lemah, kini bangkit sebagai Shadow Monarch yang ditakuti.',
    genre: ['Action', 'Fantasy'], year: 2025, status: 'ongoing', episodes: 12, currentEpisode: 8,
    rating: 9.2, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 2, title: 'Demon Slayer: Infinity Castle', titleJP: '鬼滅の刃', type: 'anime',
    cover: 'https://picsum.photos/seed/demon/400/600', banner: 'https://picsum.photos/seed/demon/1920/800',
    synopsis: 'Pertempuran terakhir melawan Muzan Kibutsuji di Infinity Castle dimulai.',
    genre: ['Action', 'Fantasy'], year: 2025, status: 'ongoing', episodes: 24, currentEpisode: 15,
    rating: 9.5, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 3, title: 'Jujutsu Kaisen Season 3', titleJP: '呪術廻戦', type: 'anime',
    cover: 'https://picsum.photos/seed/jjk/400/600', banner: 'https://picsum.photos/seed/jjk/1920/800',
    synopsis: 'Culling Game berlanjut. Itadori harus menyelamatkan Megumi dari Sukuna.',
    genre: ['Action', 'Supernatural'], year: 2025, status: 'ongoing', episodes: 24, currentEpisode: 10,
    rating: 9.1, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 4, title: 'One Piece', titleJP: 'ワンピース', type: 'anime',
    cover: 'https://picsum.photos/seed/onepiece/400/600', banner: 'https://picsum.photos/seed/onepiece/1920/800',
    synopsis: 'Petualangan Luffy menuju Laugh Tale, tempat One Piece berada.',
    genre: ['Action', 'Adventure'], year: 1999, status: 'ongoing', episodes: 1150, currentEpisode: 1150,
    rating: 9.0, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 5, title: 'Attack on Titan Final', titleJP: '進撃の巨人', type: 'anime',
    cover: 'https://picsum.photos/seed/aot/400/600', banner: 'https://picsum.photos/seed/aot/1920/800',
    synopsis: 'Rumbling telah dimulai, nasib dunia bergantung pada pilihan mereka.',
    genre: ['Action', 'Drama'], year: 2023, status: 'completed', episodes: 87, currentEpisode: 87,
    rating: 9.4, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 6, title: 'Spy x Family Season 3', titleJP: 'スパイファミリー', type: 'anime',
    cover: 'https://picsum.photos/seed/spy/400/600', banner: 'https://picsum.photos/seed/spy/1920/800',
    synopsis: 'Keluarga Forger kembali dengan misi baru yang seru dan lucu.',
    genre: ['Comedy', 'Action'], year: 2025, status: 'ongoing', episodes: 12, currentEpisode: 6,
    rating: 8.8, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] }
];

const donghuaData = [
  { id: 101, title: 'Battle Through the Heavens S6', titleCN: '斗破苍穹', type: 'donghua',
    cover: 'https://picsum.photos/seed/btth/400/600', banner: 'https://picsum.photos/seed/btth/1920/800',
    synopsis: 'Xiao Yan menghadapi musuh baru dari Soul Hall yang mengancam benua.',
    genre: ['Action', 'Fantasy'], year: 2025, status: 'ongoing', episodes: 52, currentEpisode: 30,
    rating: 8.9, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 102, title: 'Soul Land 2', titleCN: '斗罗大陆2', type: 'donghua',
    cover: 'https://picsum.photos/seed/soul2/400/600', banner: 'https://picsum.photos/seed/soul2/1920/800',
    synopsis: 'Huo Yuhao memulai perjalanan di Soul Land yang telah berubah.',
    genre: ['Action', 'Romance'], year: 2024, status: 'ongoing', episodes: 78, currentEpisode: 52,
    rating: 8.7, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 103, title: 'Martial Peak', titleCN: '武炼巅峰', type: 'donghua',
    cover: 'https://picsum.photos/seed/martial/400/600', banner: 'https://picsum.photos/seed/martial/1920/800',
    synopsis: 'Yang Kai menemukan Black Book yang mengubah nasibnya.',
    genre: ['Action', 'Martial Arts'], year: 2024, status: 'ongoing', episodes: 156, currentEpisode: 120,
    rating: 8.5, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 104, title: 'Perfect World', titleCN: '完美世界', type: 'donghua',
    cover: 'https://picsum.photos/seed/perfect/400/600', banner: 'https://picsum.photos/seed/perfect/1920/800',
    synopsis: 'Shi Hao bertekad menjadi kultivator terkuat meski Supreme Bone-nya dicuri.',
    genre: ['Action', 'Fantasy'], year: 2024, status: 'ongoing', episodes: 120, currentEpisode: 85,
    rating: 8.6, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 105, title: 'Link Click Season 3', titleCN: '时光代理人', type: 'donghua',
    cover: 'https://picsum.photos/seed/link/400/600', banner: 'https://picsum.photos/seed/link/1920/800',
    synopsis: 'Cheng Xiaoshi dan Lu Guang menghadapi misteri baru yang berbahaya.',
    genre: ['Mystery', 'Drama'], year: 2025, status: 'ongoing', episodes: 12, currentEpisode: 5,
    rating: 9.0, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] }
];

const dramaData = [
  { id: 201, title: 'Love Between Fairy and Devil', titleCN: '苍兰诀', type: 'drama',
    cover: 'https://picsum.photos/seed/lfad/400/600', banner: 'https://picsum.photos/seed/lfad/1920/800',
    synopsis: 'Orchid membebaskan Moon Supreme, kisah cinta antara peri dan iblis.',
    genre: ['Romance', 'Fantasy'], year: 2022, status: 'completed', episodes: 36, currentEpisode: 36,
    rating: 9.1, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 202, title: 'Hidden Love', titleCN: '偷偷藏不住', type: 'drama',
    cover: 'https://picsum.photos/seed/hidden/400/600', banner: 'https://picsum.photos/seed/hidden/1920/800',
    synopsis: 'Sang Zhi menyukai teman kakaknya sejak SMP, perasaan itu akhirnya terungkap.',
    genre: ['Romance', 'Youth'], year: 2023, status: 'completed', episodes: 25, currentEpisode: 25,
    rating: 8.9, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 203, title: 'Love Like the Galaxy', titleCN: '星汉灿烂', type: 'drama',
    cover: 'https://picsum.photos/seed/galaxy/400/600', banner: 'https://picsum.photos/seed/galaxy/1920/800',
    synopsis: 'Cheng Shaoshang bertemu Jenderal Ling Buyi dan perlahan jatuh cinta.',
    genre: ['Historical', 'Romance'], year: 2022, status: 'completed', episodes: 56, currentEpisode: 56,
    rating: 9.0, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 204, title: 'The Story of Pearl Girl', titleCN: '珠帘玉幕', type: 'drama',
    cover: 'https://picsum.photos/seed/pearl/400/600', banner: 'https://picsum.photos/seed/pearl/1920/800',
    synopsis: 'Gadis sederhana terjebak dalam intrik istana yang berbahaya.',
    genre: ['Historical', 'Drama'], year: 2025, status: 'ongoing', episodes: 40, currentEpisode: 22,
    rating: 8.5, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] },
  { id: 205, title: 'Royal Rumors', titleCN: '花间令', type: 'drama',
    cover: 'https://picsum.photos/seed/royal/400/600', banner: 'https://picsum.photos/seed/royal/1920/800',
    synopsis: 'Kisah unik pertukaran jiwa antara pria dan wanita di era dinasti.',
    genre: ['Comedy', 'Romance'], year: 2024, status: 'completed', episodes: 36, currentEpisode: 36,
    rating: 8.7, hasSubtitle: true, hasDubbing: true, subtitleLang: ['id', 'en'], quality: ['360p', '480p', '720p', '1080p'] }
];

const allContent = [...animeData, ...donghuaData, ...dramaData];

const generateEpisodes = (total, id) => Array.from({length: total}, (_, i) => ({
  id: `${id}-${i+1}`, number: i+1, title: `Episode ${i+1}`, duration: '24:00',
  thumbnail: `https://picsum.photos/seed/${id}${i}/320/180`,
  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
}));

window.AppData = { translations, animeData, donghuaData, dramaData, allContent, generateEpisodes };
