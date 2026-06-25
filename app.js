// Database JLPT N5 (Sesuai kurikulum N5 dasar)
const vocabulariesN5 = [
    { kanji: "一", reading: "いち (Ichi)", meaning: "Satu", example: "一つりんごをください。(Hitotsu ringo o kudasai - Tolong satu apel.)" },
    { kanji: "二", reading: "に (Ni)", meaning: "Dua", example: "二つのケーキがあります。(Futatsu no keeki ga arimasu - Ada dua buah kue.)" },
    { kanji: "三", reading: "さん (San)", meaning: "Tiga", example: "三日待ってください。(Mikka matte kudasai - Tolong tunggu tiga hari.)" },
    { kanji: "人", reading: "ひと (Hito)", meaning: "Orang", example: "あの人は誰ですか。(Ano hito wa dare desu ka - Orang itu siapa?)" },
    { kanji: "日", reading: "ひ (Hi)", meaning: "Hari / Matahari", example: "今日はいい天气です。(Kyou wa ii tenki desu - Hari ini cuacanya bagus.)" },
    { kanji: "本", reading: "ほん (Hon)", meaning: "Buku / Asal", example: "本を読んでいます。(Hon o yonde imasu - Sedang membaca buku.)" },
    { kanji: "水", reading: "みず (Mizu)", meaning: "Air", example: "水を飲みます。(Mizu o nomimasu - Minum air.)" },
    { kanji: "木", reading: "き (Ki)", meaning: "Pohon", example: "大きな木があります。(Ookina ki ga arimasu - Ada pohon yang besar.)" }
];

// Database Lengkap JLPT N4 (~300 Kanji)
const vocabulariesN4 = [
    { kanji: "待つ", reading: "まつ (Matsu)", meaning: "Menunggu", example: "ここで友達を待っています。(Koko de tomodachi o matte imasu - Saya sedang menunggu teman di sini.)" },
    { kanji: "招待", reading: "しょうたい (Shoutai)", meaning: "Undangan", example: "パーティーに招待されました。(Paatii ni shoutai saremashita - Saya diundang ke pesta.)" },
    { kanji: "持つ", reading: "もつ (Motsu)", meaning: "Membawa / Memegang", example: "この荷物を持ってください。(Kono nimotsu o motte kudasai - Tolong bawa barang bawaan ini.)" },
    { kanji: "気持ち", reading: "きもち (Kimochi)", meaning: "Perasaan", example: "今日はとてもいい気持ちです。(Kyou wa totemo ii kimochi desu - Perasaan saya sangat baik hari ini.)" },
    { kanji: "特別", reading: "とくべつ (Tokubetsu)", meaning: "Spesial / Khusus", example: "今日は特別な日です。(Kyou wa tokubetsu na hi desu - Hari ini adalah hari spesial.)" },
    { kanji: "牛肉", reading: "ぎゅうにく (Gyuuniku)", meaning: "Daging Sapi", example: "美味しい牛肉を食べました。(Oishii gyuuniku o tabemashita - Saya makan daging sapi yang enak.)" },
    { kanji: "午前", reading: "ごぜん (Gozen)", meaning: "Pagi (AM)", example: "午前九時に起きました。(Gozen kuji ni okimashita - Saya bangun jam 9 pagi.)" },
    { kanji: "午後", reading: "ごご (Gogo)", meaning: "Siang/Sore (PM)", example: "午後は図書館で勉強します。(Gogo wa toshokan de benkyou shimasu - Siang hari saya belajar di perpustakaan.)" },
    { kanji: "借りる", reading: "かりる (Kariru)", meaning: "Meminjam", example: "図書館で本を借りました。(Toshokan de hon o karimashita - Saya meminjam buku di perpustakaan.)" },
    { kanji: "貸す", reading: "かす (Kasu)", meaning: "Meminjamkan", example: "ペンを貸してくれませんか。(Pen o kashite kuremasen ka - Bisakah Anda meminjamkan saya pulpen?)" },
    { kanji: "開ける", reading: "あける (Akeru)", meaning: "Membuka", example: "暑いから窓を開けてください。(Atsui kara mado o akete kudasai - Tolong buka jendela karena panas.)" },
    { kanji: "閉める", reading: "しめる (Shimeru)", meaning: "Menutup", example: "ドアを静かに閉めてください。(Doa o shizuka ni shimete kudasai - Tolong tutup pintu dengan pelan.)" },
    { kanji: "新聞", reading: "しんぶん (Shinbun)", meaning: "Koran", example: "毎朝、新聞を読みます。(Maiasa, shinbun o yomimasu - Saya membaca koran setiap pagi.)" },
    { kanji: "質問", reading: "しつもん (Shitsumon)", meaning: "Pertanyaan", example: "先生に質問があります。(Sensei ni shitsumon ga arimasu - Saya ada pertanyaan untuk guru.)" },
    { kanji: "問題", reading: "もんだい (Mondai)", meaning: "Masalah / Soal", example: "このテストの問題は難しいです。(Kono tesuto no mondai wa muzukashii desu - Soal ujian ini sulit.)" },
    { kanji: "会社", reading: "かいしゃ (Kaisha)", meaning: "Perusahaan", example: "父は会社で働いています。(Chichi wa kaisha de hataraite imasu - Ayah saya bekerja di perusahaan.)" },
    { kanji: "社会", reading: "しゃかい (Shakai)", meaning: "Masyarakat / Sosial", example: "社会のルールを守りましょう。(Shakai no ruuru o mamorimashou - Mari kita patuhi aturan masyarakat.)" },
    { kanji: "運動", reading: "うんどう (Undou)", meaning: "Olahraga", example: "毎日運動したほうがいいです。(Mainichi undou shita hou ga ii desu - Sebaiknya berolahraga setiap hari.)" },
    { kanji: "働く", reading: "はたらく (Hataraku)", meaning: "Bekerja", example: "兄は銀行で働いています。(Ani wa ginkou de hataraite imasu - Kakak laki-laki saya bekerja di bank.)" },
    { kanji: "運転", reading: "うんてん (Unten)", meaning: "Mengemudi", example: "車の運転ができますか。(Kuruma no unten ga dekimasu ka - Bisakah Anda mengemudi mobil?)" },
    { kanji: "自転車", reading: "じてんしゃ (Jitensha)", meaning: "Sepeda", example: "自転車で学校へ行きます。(Jitensha de gakkou e ikimasu - Saya pergi ke sekolah dengan sepeda.)" },
    { kanji: "買う", reading: "かう (Kau)", meaning: "Membeli", example: "新しい靴を買いたいです。(Atarashii kutsu o kaitai desu - Saya ingin membeli sepatu baru.)" },
    { kanji: "売る", reading: "うる (Uru)", meaning: "Menjual", example: "古い車を売りました。(Furui kuruma o urimashita - Saya telah menjual mobil lama saya.)" },
    { kanji: "読む", reading: "よむ (Yomu)", meaning: "Membaca", example: "日本語の小説を読みました。(Nihongo no shousetsu o yomimashita - Saya telah membaca novel bahasa Jepang.)" },
    { kanji: "帰る", reading: "かえる (Kaeru)", meaning: "Pulang", example: "もう家に帰らなければなりません。(Mou ie ni kaeranakereba narimasen - Saya harus sudah pulang ke rumah.)" },
    { kanji: "試験", reading: "しけん (Shiken)", meaning: "Ujian", example: "明日、日本語の試験があります。(Ashita, nihongo no shiken ga arimasu - Besok ada ujian bahasa Jepang.)" },
    { kanji: "経験", reading: "けいけん (Keiken)", meaning: "Pengalaman", example: "日本に行った経験があります。(Nihon ni itta keiken ga arimasu - Saya punya pengalaman pergi ke Jepang.)" },
    { kanji: "止まる", reading: "とまる (Tomaru)", meaning: "Berhenti", example: "急に電車が止まりました。(Kyuuni densha ga tomarimashita - Tiba-tiba kereta berhenti.)" },
    { kanji: "正しい", reading: "ただしい (Tadashii)", meaning: "Benar", example: "正しい答えを選んでください。(Tadashii kotae o erande kudasai - Tolong pilih jawaban yang benar.)" },
    { kanji: "痛い", reading: "いたい (Itai)", meaning: "Sakit (Rasa)", example: "頭が痛いです。(Atama ga itai desu - Kepala saya sakit.)" },
    { kanji: "病気", reading: "びょうき (Byouki)", meaning: "Penyakit", example: "友達が病気になりました。(Tomodachi ga byouki ni narimashita - Teman saya jatuh sakit.)" },
    { kanji: "病院", reading: "びょういん (Byouin)", meaning: "Rumah Sakit", example: "明日、病院へ行きます。(Ashita, byouin e ikimasu - Besok saya pergi ke rumah sakit.)" },
    { kanji: "洗う", reading: "あらう (Arau)", meaning: "Mencuci", example: "ご飯の前に手を洗います。(Gohan no mae ni te o araimasu - Saya mencuci tangan sebelum makan.)" },
    { kanji: "以上", reading: "いじょう (Ijou)", meaning: "Lebih dari", example: "これ以上は無理です。(Kore ijou wa muri desu - Lebih dari ini sudah tidak bisa.)" },
    { kanji: "以下", reading: "いか (Ika)", meaning: "Kurang dari", example: "10歳以下の子供は無料です。(Jussai ika no kodomo wa muryou desu - Anak-anak 10 tahun ke bawah gratis.)" },
    { kanji: "春", reading: "はる (Haru)", meaning: "Musim Semi", example: "春は桜が綺麗です。(Haru wa sakura ga kirei desu - Di musim semi bunga sakura indah.)" },
    { kanji: "夏", reading: "なつ (Natsu)", meaning: "Musim Panas", example: "夏はとても暑いです。(Natsu wa totemo atsui desu - Musim panas sangat gerah.)" },
    { kanji: "秋", reading: "あき (Aki)", meaning: "Musim Gugur", example: "秋は紅葉が美しいです。(Aki wa kouyou ga utsukushii desu - Di musim gugur daun merah indah.)" },
    { kanji: "冬", reading: "ふゆ (Fuyu)", meaning: "Musim Dingin", example: "冬は雪が降ります。(Fuyu wa yuki ga furimasu - Di musim dingin turun salju.)" },
    { kanji: "赤い", reading: "あかい (Akai)", meaning: "Merah", example: "赤いリンゴを食べます。(Akai ringo o tabemasu - Makan apel merah.)" },
    { kanji: "青い", reading: "あおい (Aoi)", meaning: "Biru", example: "空が青いです。(Sora ga aoi desu - Langitnya biru.)" },
    { kanji: "白い", reading: "しろい (Shiroi)", meaning: "Putih", example: "白いシャツを着ています。(Shiroi shatsu o kite imasu - Saya memakai kemeja putih.)" },
    { kanji: "黒い", reading: "くろい (Kuroi)", meaning: "Hitam", example: "黒い猫を見ました。(Kuroi neko o mimashita - Saya melihat kucing hitam.)" },
    { kanji: "家族", reading: "かぞく (Kazoku)", meaning: "Keluarga", example: "家族と一緒に住んでいます。(Kazoku to issho ni sunde imasu - Saya tinggal bersama keluarga.)" },
    { kanji: "両親", reading: "りょうしん (Ryoushin)", meaning: "Orang Tua", example: "両親にプレゼントをあげました。(Ryoushin ni purezento o agemashita - Saya memberi hadiah ke orang tua.)" },
    { kanji: "兄弟", reading: "きょうだい (Kyoudai)", meaning: "Saudara", example: "兄弟は何人ですか。(Kyoudai wa nannin desu ka - Berapa jumlah saudaramu?)" },
    { kanji: "兄", reading: "あに (Ani)", meaning: "Kakak Laki-laki", example: "兄は東京にいます。(Ani wa Toukyou ni imasu - Kakak laki-laki saya ada di Tokyo.)" },
    { kanji: "弟", reading: "おとうと (Otouto)", meaning: "Adik Laki-laki", example: "弟は大学生です。(Otouto wa daigakusei desu - Adik laki-laki saya mahasiswa.)" },
    { kanji: "姉", reading: "あね (Ane)", meaning: "Kakak Perempuan", example: "姉は優しいです。(Ane wa yasashii desu - Kakak perempuan saya baik hati.)" },
    { kanji: "妹", reading: "いもうと (Imouto)", meaning: "Adik Perempuan", example: "妹は中学生です。(Imouto wa chuugakusei desu - Adik perempuan saya pelajar SMP.)" },
    { kanji: "海", reading: "うみ (Umi)", meaning: "Laut", example: "夏は海に行きたいです。(Natsu wa umi ni ikitai desu - Saya ingin pergi ke laut di musim panas.)" },
    { kanji: "建物", reading: "たてもの (Tatemono)", meaning: "Bangunan", example: "高い建物がたくさんあります。(Takai tatemono ga takusan arimasu - Ada banyak bangunan tinggi.)" },
    { kanji: "銀行", reading: "ぎんこう (Ginkou)", meaning: "Bank", example: "銀行でお金を下ろします。(Ginkou de okane o oroshimasu - Saya menarik uang di bank.)" },
    { kanji: "授業", reading: "じゅぎょう (Jugyou)", meaning: "Pelajaran", example: "今日の授業は面白いです。(Kyou no jugyou wa omoshiroi desu - Pelajaran hari ini menarik.)" },
    { kanji: "教室", reading: "きょうしつ (Kyoushitsu)", meaning: "Ruang Kelas", example: "教室で勉強します。(Kyoushitsu de benkyou shimasu - Belajar di ruang kelas.)" },
    { kanji: "笑う", reading: "わらう (Warau)", meaning: "Tertawa", example: "みんなで笑いました。(Minna de waraimashita - Kami semua tertawa.)" },
    { kanji: "泣く", reading: "なく (Naku)", meaning: "Menangis", example: "悲しくて泣きました。(Kanashikute nakimashita - Saya menangis karena sedih.)" },
    { kanji: "歌う", reading: "うたう (Utau)", meaning: "Bernyanyi", example: "みんなで歌いましょう。(Minna de utaimashou - Mari bernyanyi bersama.)" },
    { kanji: "写真", reading: "しゃしん (Shashin)", meaning: "Foto", example: "旅行で写真をたくさん撮りました。(Ryokou de shashin o takusan torimashita - Mengambil banyak foto saat perjalanan.)" },
    { kanji: "映画", reading: "えいが (Eiga)", meaning: "Film", example: "週末に映画を見に行きます。(Shuumatsu ni eiga o mi ni ikimasu - Di akhir pekan pergi menonton film.)" },
    { kanji: "知る", reading: "しる (Shiru)", meaning: "Mengetahui", example: "彼のことをよく知っています。(Kare no koto o yoku shitte imasu - Saya mengenal dia dengan baik.)" },
    { kanji: "覚える", reading: "おぼえる (Oboeru)", meaning: "Mengingat", example: "新しい単語を覚えました。(Atarashii tango o oboemashita - Saya menghafalkan kosakata baru.)" },
    { kanji: "使う", reading: "つかう (Tsukau)", meaning: "Menggunakan", example: "毎日スマホを使っています。(Mainichi sumaho o tsukatte imasu - Saya menggunakan ponsel setiap hari.)" },
    { kanji: "作る", reading: "つくる (Tsukuru)", meaning: "Membuat", example: "母は毎日料理を作ります。(Haha wa mainichi ryouri o tsukurimasu - Ibu membuat masakan setiap hari.)" },
    { kanji: "会議", reading: "かいぎ (Kaigi)", meaning: "Rapat", example: "午後から会議があります。(Gogo kara kaigi ga arimasu - Mulai siang ada rapat.)" },
    { kanji: "集める", reading: "あつめる (Atsumeru)", meaning: "Mengumpulkan", example: "切手を集めるのが趣味です。(Kitte o atsumeru no ga shumi desu - Hobi saya mengumpulkan perangko.)" },
    { kanji: "受ける", reading: "うける (Ukeru)", meaning: "Menerima / Ikut ujian", example: "来月、試験を受けます。(Raigetsu, shiken o ukemasu - Bulan depan saya mengikuti ujian.)" },
    { kanji: "送る", reading: "おくる (Okuru)", meaning: "Mengirim", example: "友達にメールを送りました。(Tomodachi ni meeru o okurimashita - Saya mengirim email ke teman.)" },
    { kanji: "変わる", reading: "かわる (Kawaru)", meaning: "Berubah", example: "最近、天気がよく変わります。(Saikin, tenki ga yoku kawarimasu - Belakangan ini cuaca sering berubah.)" },
    { kanji: "終わる", reading: "おわる (Owaru)", meaning: "Selesai", example: "授業は三時に終わります。(Jugyou wa sanji ni owarimasu - Pelajaran selesai jam 3.)" },
    { kanji: "急ぐ", reading: "いそぐ (Isogu)", meaning: "Tergesa-gesa", example: "バスに乗るために急ぎました。(Basu ni noru tame ni isogimashita - Tergesa-gesa untuk naik bus.)" },
    { kanji: "暑い", reading: "あつい (Atsui)", meaning: "Panas (cuaca)", example: "今日はとても暑いですね。(Kyou wa totemo atsui desu ne - Hari ini sangat panas ya.)" },
    { kanji: "寒い", reading: "さむい (Samui)", meaning: "Dingin (cuaca)", example: "冬の朝は寒いです。(Fuyu no asa wa samui desu - Pagi di musim dingin dingin.)" },
    { kanji: "大切", reading: "たいせつ (Taisetsu)", meaning: "Penting", example: "健康は大切です。(Kenkou wa taisetsu desu - Kesehatan itu penting.)" },
    { kanji: "上手", reading: "じょうず (Jouzu)", meaning: "Pandai", example: "彼はテニスが上手です。(Kare wa tenisu ga jouzu desu - Dia pandai bermain tenis.)" },
    { kanji: "場所", reading: "ばしょ (Basho)", meaning: "Tempat", example: "待ち合わせの場所を教えてください。(Machiawase no basho o oshiete kudasai - Tolong beritahu lokasi pertemuan.)" },
    { kanji: "仕事", reading: "しごと (Shigoto)", meaning: "Pekerjaan", example: "仕事で疲れました。(Shigoto de tsukaremashita - Saya lelah karena pekerjaan.)" },
    { kanji: "強い", reading: "つよい (Tsuyoi)", meaning: "Kuat", example: "彼はとても強い選手です。(Kare wa totemo tsuyoi senshu desu - Dia adalah pemain yang sangat kuat.)" },
    { kanji: "同じ", reading: "おなじ (Onaji)", meaning: "Sama", example: "私たちは同じ学校に通っています。(Watashitachi wa onaji gakkou ni kayotte imasu - Kami bersekolah di tempat yang sama.)" }
];

let activeDatabase = []; // Database kuis yang sedang digunakan
let currentDeck = [];
let currentIndex = 0;
let correctCount = 0;
let incorrectCount = 0;
let timerAnimation;
let isFlipped = false;
let startTime;
let currentMode = 'kanji'; // 'kanji', 'grammar', or 'particle'
let learnedItems = JSON.parse(localStorage.getItem('jlpt-n4-learned') || '[]');
let currentModalItem = null;
let currentModalMode = 'kanji';

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    flashcard: document.getElementById('flashcard-screen'),
    result: document.getElementById('result-screen')
};

const UI = {
    scoreCorrect: document.getElementById('score-correct'),
    scoreIncorrect: document.getElementById('score-incorrect'),
    scoreRemaining: document.getElementById('score-remaining'),
    kanjiText: document.getElementById('kanji-text'),
    readingText: document.getElementById('reading-text'),
    meaningText: document.getElementById('meaning-text'),
    flashcard: document.getElementById('flashcard'),
    timerBar: document.getElementById('timer-bar'),
    btnReveal: document.getElementById('btn-reveal'),
    scoreControls: document.getElementById('score-controls'),
    finalCorrect: document.getElementById('final-correct'),
    finalIncorrect: document.getElementById('final-incorrect'),
    btnThemeToggle: document.getElementById('themeToggle'),
    btnQuizBack: document.getElementById('btn-quiz-back'),
    quizOptions: document.getElementById('quiz-options'),
    
    // Grids
    kanjiGrid: document.getElementById('kanjiGrid'),
    bab1Grid: document.getElementById('bab1Grid'),
    bab2Grid: document.getElementById('bab2Grid'),
    bab3Grid: document.getElementById('bab3Grid'),
    kakujoshiGrid: document.getElementById('kakujoshiGrid'),
    setsuzokujoshiGrid: document.getElementById('setsuzokujoshiGrid'),
    fukujoshiGrid: document.getElementById('fukujoshiGrid'),
    shuujoshiGrid: document.getElementById('shuujoshiGrid'),
    
    // Modal
    kanjiModal: document.getElementById('kanji-modal'),
    btnCloseModal: document.getElementById('btn-close-modal'),
    modalKanji: document.getElementById('modal-kanji'),
    modalReading: document.getElementById('modal-reading'),
    modalMeaning: document.getElementById('modal-meaning'),
    modalExample: document.getElementById('modal-example-text'),
    
    // Mode & Grammar elements
    modeKanji: document.getElementById('mode-kanji'),
    modeGrammar: document.getElementById('mode-grammar'),
    modeParticle: document.getElementById('mode-particle'),
    settingKanjiGroup: document.getElementById('setting-kanji-group'),
    settingGrammarGroup: document.getElementById('setting-grammar-group'),
    settingParticleGroup: document.getElementById('setting-particle-group'),
    grammarQuestionContainer: document.getElementById('grammar-question-container'),
    grammarQText: document.getElementById('grammar-q-text'),
    grammarQHint: document.getElementById('grammar-q-hint'),
    grammarBackDetails: document.getElementById('grammar-back-details'),
    grammarExpText: document.getElementById('grammar-exp-text'),
    modalGrammarDetails: document.getElementById('modal-grammar-details'),
    modalGrammarFormula: document.getElementById('modal-grammar-formula'),
    modalGrammarExplanation: document.getElementById('modal-grammar-explanation'),
    modalGrammarNoteContainer: document.getElementById('modal-grammar-note-container'),
    modalGrammarNote: document.getElementById('modal-grammar-note'),
    
    // Results
    resultIcon: document.getElementById('result-icon'),
    resultTitle: document.getElementById('result-title'),
    resultStars: document.getElementById('result-stars'),
    resultMessage: document.getElementById('result-message'),
    btnToggleLearned: document.getElementById('btn-toggle-learned'),
    
    // Navigation
    progressBar: document.getElementById('progressBar'),
    progressText: document.getElementById('progressText')
};

// Initialization
function init() {
    initNavigation();
    renderAllGrids();
    
    document.getElementById('btn-start').addEventListener('click', startSession);
    UI.btnQuizBack.addEventListener('click', () => {
        cancelAnimationFrame(timerAnimation);
        switchScreen('start');
    });
    
    document.getElementById('btn-restart').addEventListener('click', () => {
        switchScreen('start');
    });
    
    UI.btnCloseModal.addEventListener('click', closeModal);
    UI.kanjiModal.addEventListener('click', (e) => {
        if (e.target === UI.kanjiModal) closeModal();
    });
    
    UI.btnThemeToggle.addEventListener('click', toggleTheme);
    
    UI.btnReveal.addEventListener('click', revealAnswer);
    UI.flashcard.addEventListener('click', () => {
        if (!isFlipped) revealAnswer();
    });

    document.getElementById('btn-correct').addEventListener('click', () => handleScore(true));
    document.getElementById('btn-wrong').addEventListener('click', () => handleScore(false));

    UI.btnToggleLearned.addEventListener('click', toggleLearnedItem);

    // Mode toggling click listeners
    UI.modeKanji.addEventListener('click', () => {
        currentMode = 'kanji';
        UI.modeKanji.classList.add('active');
        UI.modeGrammar.classList.remove('active');
        UI.modeParticle.classList.remove('active');
        UI.settingKanjiGroup.classList.remove('hidden');
        UI.settingGrammarGroup.classList.add('hidden');
        UI.settingParticleGroup.classList.add('hidden');
    });

    UI.modeGrammar.addEventListener('click', () => {
        currentMode = 'grammar';
        UI.modeKanji.classList.remove('active');
        UI.modeGrammar.classList.add('active');
        UI.modeParticle.classList.remove('active');
        UI.settingKanjiGroup.classList.add('hidden');
        UI.settingGrammarGroup.classList.remove('hidden');
        UI.settingParticleGroup.classList.add('hidden');
    });

    UI.modeParticle.addEventListener('click', () => {
        currentMode = 'particle';
        UI.modeKanji.classList.remove('active');
        UI.modeGrammar.classList.remove('active');
        UI.modeParticle.classList.add('active');
        UI.settingKanjiGroup.classList.add('hidden');
        UI.settingGrammarGroup.classList.add('hidden');
        UI.settingParticleGroup.classList.remove('hidden');
    });

    // Handle Kanji level toggle in the view
    const kanjiLevelRadios = document.querySelectorAll('input[name="kanjiLevelDisplay"]');
    kanjiLevelRadios.forEach(radio => {
        radio.addEventListener('change', () => renderKanjiGridSpecific(radio.value));
    });

    // Keyboard Shortcuts (1-4 to select answers)
    document.addEventListener('keydown', (e) => {
        if (screens.flashcard.classList.contains('active') && !isFlipped) {
            if (['Digit1', 'Digit2', 'Digit3', 'Digit4', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4'].includes(e.code)) {
                e.preventDefault();
                const key = e.code.replace('Digit', '').replace('Numpad', '');
                const index = parseInt(key) - 1;
                const buttons = UI.quizOptions.querySelectorAll('.btn-option');
                if (buttons[index] && !buttons[index].disabled) {
                    buttons[index].click();
                }
            }
        }
    });
}

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // Scroll tracker for active states
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;
        
        // Update navbar appearance
        if (scrollY > 50) {
            navbar.style.background = 'var(--nav-bg)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'transparent';
            navbar.style.boxShadow = 'none';
        }

        // Active link tracking
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });

        // Reading Progress bar
        const totalHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollY / totalHeight) * 100;
        UI.progressBar.style.width = progress + '%';
        
        // Update Overall Learning Progress based on local storage
        updateLearningProgress();
    });
}

function updateLearningProgress() {
    const particleCount = (typeof particleData !== 'undefined') 
        ? particleData.kakujoshi.length + particleData.setsuzokujoshi.length + 
          particleData.fukujoshi.length + particleData.shuujoshi.length 
        : 0;
    const totalItems = vocabulariesN4.length + vocabulariesN5.length + 
                       (typeof grammarData !== 'undefined' ? grammarData.bab1.length + grammarData.bab2.length + grammarData.bab3.length : 0) +
                       particleCount;
    const learnedCount = learnedItems.length;
    const percentage = totalItems > 0 ? Math.round((learnedCount / totalItems) * 100) : 0;
    UI.progressText.textContent = percentage + '%';
}

function renderAllGrids() {
    renderKanjiGridSpecific('n4');
    
    if (typeof grammarData !== 'undefined') {
        renderGrammarGrid(UI.bab1Grid, grammarData.bab1);
        renderGrammarGrid(UI.bab2Grid, grammarData.bab2);
        renderGrammarGrid(UI.bab3Grid, grammarData.bab3);
    }

    if (typeof particleData !== 'undefined') {
        renderParticleGrid(UI.kakujoshiGrid, particleData.kakujoshi);
        renderParticleGrid(UI.setsuzokujoshiGrid, particleData.setsuzokujoshi);
        renderParticleGrid(UI.fukujoshiGrid, particleData.fukujoshi);
        renderParticleGrid(UI.shuujoshiGrid, particleData.shuujoshi);
    }
}

function renderKanjiGridSpecific(level) {
    const data = (level === 'n4') ? vocabulariesN4 : vocabulariesN5;
    UI.kanjiGrid.innerHTML = '';
    
    data.forEach((vocab) => {
        const isLearned = learnedItems.includes(vocab.kanji);
        const div = document.createElement('div');
        div.className = `kanji-preview-card ${isLearned ? 'learned' : ''}`;
        
        div.innerHTML = `
            <div class="preview-kanji">${vocab.kanji}</div>
            <span class="preview-grammar-meaning" style="color: var(--accent); margin-bottom: 5px;">${vocab.reading.split(' ')[0]}</span>
            <span class="preview-meaning">${vocab.meaning}</span>
        `;
        div.addEventListener('click', () => openModal(vocab, 'kanji'));
        UI.kanjiGrid.appendChild(div);
    });
}

function renderGrammarGrid(container, dataArray) {
    if(!container) return;
    container.innerHTML = '';
    
    dataArray.forEach((vocab) => {
        const isLearned = learnedItems.includes(vocab.id);
        const div = document.createElement('div');
        div.className = `kanji-preview-card ${isLearned ? 'learned' : ''}`;
        
        div.innerHTML = `
            <div class="preview-grammar-title">${vocab.pattern}</div>
            <span class="preview-grammar-meaning">${vocab.meaning}</span>
        `;
        div.addEventListener('click', () => openModal(vocab, 'grammar'));
        container.appendChild(div);
    });
}

function renderParticleGrid(container, dataArray) {
    if (!container) return;
    container.innerHTML = '';

    dataArray.forEach((p) => {
        const isLearned = learnedItems.includes(p.id);
        const div = document.createElement('div');
        div.className = `kanji-preview-card particle-card ${isLearned ? 'learned' : ''}`;

        const categoryColor = {
            'Kakujoshi': 'var(--accent)',
            'Setsuzokujoshi': '#10b981',
            'Fukujoshi': '#f59e0b',
            'Shuujoshi': '#8b5cf6'
        }[p.category] || 'var(--accent)';

        div.innerHTML = `
            <div class="preview-kanji" style="font-size: 1.8rem; color: ${categoryColor};">${p.particle}</div>
            <span class="preview-grammar-meaning" style="color: ${categoryColor}; margin-bottom: 4px; font-weight: 600;">${p.romaji}</span>
            <span class="preview-meaning" style="font-size: 0.78rem; line-height: 1.3;">${p.meaning}</span>
        `;
        div.addEventListener('click', () => openModal(p, 'particle'));
        container.appendChild(div);
    });
}

function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.style.display = 'none');
    screens[screenName].style.display = 'flex';
}

function toggleTheme() {
    const isLight = document.body.getAttribute('data-theme') === 'light';
    if (isLight) {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'light');
    }
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

function startSession() {
    const playMode = document.querySelector('input[name="playMode"]:checked').value;
    
    if (currentMode === 'kanji') {
        const deckMode = document.querySelector('input[name="deckMode"]:checked').value;
        activeDatabase = (deckMode === 'n4') ? vocabulariesN4 : vocabulariesN5;
        currentDeck = [...activeDatabase];
    } else if (currentMode === 'grammar') {
        const bab = document.querySelector('input[name="grammarBab"]:checked').value;
        if (bab === 'all') {
            currentDeck = [...quizQuestions];
        } else {
            const babNum = parseInt(bab);
            currentDeck = quizQuestions.filter(q => q.bab === babNum);
        }
        activeDatabase = [...currentDeck];
    } else if (currentMode === 'particle') {
        const cat = document.querySelector('input[name="particleCategory"]:checked').value;
        let pool = [];
        if (cat === 'all') {
            pool = [...particleData.kakujoshi, ...particleData.setsuzokujoshi,
                    ...particleData.fukujoshi, ...particleData.shuujoshi];
        } else {
            pool = [...particleData[cat]];
        }
        // Convert particle entries to quiz-question format
        currentDeck = pool.map(p => {
            const opts = generateParticleOptions(p, pool);
            return {
                _type: 'particle',
                _particleData: p,
                question: `Partikel「${p.particle}」(${p.romaji}) — Apa fungsi utamanya?`,
                answers: opts.answers,
                correct: opts.correctIdx,
                explanation: `[${p.particle}] ${p.explanation}`
            };
        });
        activeDatabase = [...currentDeck];
    }
    
    if (playMode === 'acak') {
        currentDeck = shuffle(currentDeck);
    }
    
    if(currentDeck.length === 0) {
        alert("Tidak ada soal tersedia untuk kategori ini.");
        return;
    }
    
    currentIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    updateScoreBoard();
    switchScreen('flashcard');
    loadCard();
}

function generateOptions(correctVocab) {
    const options = [correctVocab.meaning];
    const pool = activeDatabase.filter(v => v.meaning !== correctVocab.meaning);
    
    const shuffledPool = shuffle([...pool]);
    for (let i = 0; i < Math.min(3, shuffledPool.length); i++) {
        options.push(shuffledPool[i].meaning);
    }
    
    while (options.length < 4) {
        options.push("Opsi Tambahan " + (options.length + 1));
    }
    
    return shuffle(options);
}

function generateParticleOptions(correctParticle, pool) {
    // Correct answer is always index 0 in the answers array (quiz format uses correct: 0)
    const correct = correctParticle.meaning;
    const distractors = pool
        .filter(p => p.id !== correctParticle.id)
        .map(p => p.meaning);
    const shuffledDistractors = shuffle([...distractors]);
    const options = [correct, ...shuffledDistractors.slice(0, 3)];
    while (options.length < 4) {
        options.push('Opsi Tambahan ' + options.length);
    }
    // Shuffle but track where correct went
    const shuffled = [...options];
    // Keep correct at index 0 initially (answered by the quiz correct:0 convention)
    // Actually re-shuffle with tracking:
    const correctVal = options[0];
    const finalOptions = shuffle(shuffled);
    // Since quiz engine checks answers[correct] where correct is an index,
    // we need to update correct index after shuffle
    // We store the correct VALUE and find its new index
    const newCorrectIdx = finalOptions.indexOf(correctVal);
    return { answers: finalOptions, correctIdx: newCorrectIdx };
}

function loadCard() {
    if (currentIndex >= currentDeck.length) {
        endSession();
        return;
    }

    isFlipped = false;
    UI.flashcard.classList.remove('flipped');
    UI.btnReveal.classList.add('hidden');
    UI.scoreControls.classList.add('hidden');

    UI.readingText.textContent = '';
    UI.meaningText.textContent = '';
    UI.grammarBackDetails.classList.add('hidden');
    UI.grammarExpText.textContent = '';

    const card = currentDeck[currentIndex];
    
    let options = [];
    if (currentMode === 'kanji') {
        UI.kanjiText.classList.remove('hidden');
        UI.grammarQuestionContainer.classList.add('hidden');
        
        UI.kanjiText.textContent = card.kanji;
        options = generateOptions(card);
    } else {
        UI.kanjiText.classList.add('hidden');
        UI.grammarQuestionContainer.classList.remove('hidden');
        
        UI.grammarQText.textContent = card.question;
        if (card.jpHint) {
            UI.grammarQHint.classList.remove('hidden');
            UI.grammarQHint.textContent = card.jpHint;
        } else {
            UI.grammarQHint.classList.add('hidden');
        }
        
        options = [...card.answers];
    }

    UI.quizOptions.innerHTML = '';
    options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'btn-option';
        btn.textContent = opt;
        btn.addEventListener('click', () => handleOptionClick(opt, card, btn, index));
        UI.quizOptions.appendChild(btn);
    });

    startTimer(card);
    updateScoreBoard();
}

function startTimer(card) {
    cancelAnimationFrame(timerAnimation);
    UI.timerBar.style.transform = `scaleX(1)`;
    UI.timerBar.style.backgroundColor = 'var(--timer-color)';
    
    startTime = performance.now();
    const duration = (currentMode === 'kanji') ? 3000 : 30000;

    function updateTimer(currentTime) {
        if (isFlipped) return;
        
        const elapsed = currentTime - startTime;
        const progress = Math.max(0, 1 - (elapsed / duration));
        
        UI.timerBar.style.transform = `scaleX(${progress})`;

        if (progress < 0.3) {
            UI.timerBar.style.backgroundColor = 'var(--danger)';
        }

        if (progress > 0) {
            timerAnimation = requestAnimationFrame(updateTimer);
        } else {
            handleTimeOut(card);
        }
    }

    timerAnimation = requestAnimationFrame(updateTimer);
}

function handleOptionClick(selectedOption, correctVocab, clickedBtn, selectedIndex) {
    if (isFlipped) return;
    isFlipped = true;
    cancelAnimationFrame(timerAnimation);

    const isCorrect = (currentMode === 'kanji')
        ? (selectedOption === correctVocab.meaning)
        : (selectedIndex === correctVocab.correct);

    const buttons = UI.quizOptions.querySelectorAll('.btn-option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        const isCorrectAnswerText = (currentMode === 'kanji')
            ? (btn.textContent === correctVocab.meaning)
            : (index === correctVocab.correct);
        if (isCorrectAnswerText) {
            btn.classList.add('correct');
        }
    });

    if (isCorrect) {
        clickedBtn.classList.add('correct');
        correctCount++;
    } else {
        clickedBtn.classList.add('incorrect');
        incorrectCount++;
    }

    if (currentMode === 'kanji') {
        UI.readingText.textContent = correctVocab.reading;
        UI.meaningText.textContent = correctVocab.meaning;
        UI.grammarBackDetails.classList.add('hidden');
    } else {
        UI.readingText.textContent = correctVocab.answers[correctVocab.correct];
        UI.meaningText.textContent = "Jawaban Benar";
        UI.grammarExpText.textContent = correctVocab.explanation;
        UI.grammarBackDetails.classList.remove('hidden');
    }

    updateScoreBoard();
    UI.flashcard.classList.add('flipped');

    setTimeout(() => {
        currentIndex++;
        loadCard();
    }, 1800);
}

function handleTimeOut(correctVocab) {
    if (isFlipped) return;
    isFlipped = true;
    cancelAnimationFrame(timerAnimation);
    incorrectCount++;
    updateScoreBoard();

    const buttons = UI.quizOptions.querySelectorAll('.btn-option');
    buttons.forEach((btn, index) => {
        btn.disabled = true;
        const isCorrectAnswerText = (currentMode === 'kanji')
            ? (btn.textContent === correctVocab.meaning)
            : (index === correctVocab.correct);
        if (isCorrectAnswerText) {
            btn.classList.add('correct');
        }
    });

    if (currentMode === 'kanji') {
        UI.readingText.textContent = correctVocab.reading;
        UI.meaningText.textContent = correctVocab.meaning;
        UI.grammarBackDetails.classList.add('hidden');
    } else {
        UI.readingText.textContent = correctVocab.answers[correctVocab.correct];
        UI.meaningText.textContent = "Jawaban Benar";
        UI.grammarExpText.textContent = correctVocab.explanation;
        UI.grammarBackDetails.classList.remove('hidden');
    }

    UI.flashcard.classList.add('flipped');

    setTimeout(() => {
        currentIndex++;
        loadCard();
    }, 1800);
}

function revealAnswer() {
    if (isFlipped) return;
    isFlipped = true;
    cancelAnimationFrame(timerAnimation);
    
    const card = currentDeck[currentIndex];
    if (card) {
        if (currentMode === 'kanji') {
            UI.readingText.textContent = card.reading;
            UI.meaningText.textContent = card.meaning;
            UI.grammarBackDetails.classList.add('hidden');
        } else {
            UI.readingText.textContent = card.answers[card.correct];
            UI.meaningText.textContent = "Jawaban Benar";
            UI.grammarExpText.textContent = card.explanation;
            UI.grammarBackDetails.classList.remove('hidden');
        }
    }
    UI.flashcard.classList.add('flipped');
}

function handleScore(isCorrect) {
    if (isCorrect) correctCount++;
    else incorrectCount++;
    
    currentIndex++;
    loadCard();
}

function openModal(vocab, mode) {
    currentModalItem = vocab;
    currentModalMode = mode;
    const itemId = (mode === 'kanji') ? vocab.kanji : vocab.id;
    const isLearned = learnedItems.includes(itemId);
    
    const btnToggle = UI.btnToggleLearned;
    if (isLearned) {
        btnToggle.textContent = '✓ Sudah Dipelajari';
        btnToggle.className = 'btn-secondary btn-large';
        btnToggle.style.width = '100%';
    } else {
        btnToggle.textContent = '📌 Tandai Sudah Dipelajari';
        btnToggle.className = 'btn-primary btn-large';
        btnToggle.style.width = '100%';
    }

    if (mode === 'kanji') {
        UI.modalKanji.textContent = vocab.kanji;
        UI.modalReading.textContent = vocab.reading;
        UI.modalMeaning.textContent = vocab.meaning;
        UI.modalKanji.classList.remove('hidden');
        UI.modalReading.classList.remove('hidden');
        UI.modalGrammarDetails.classList.add('hidden');
        
        const exText = vocab.example || "";
        const match = exText.match(/(.+?)\((.+?)\s*-\s*(.+?)\)/);
        
        if (match) {
            UI.modalExample.innerHTML = `
                <div class="example-item">
                    <div class="ex-jp">${match[1].trim()}</div>
                    <div class="ex-rm">${match[2].trim()}</div>
                    <div class="ex-id">${match[3].trim()}</div>
                </div>
            `;
        } else {
            UI.modalExample.textContent = exText || "(Contoh kalimat belum tersedia)";
        }
    } else if (mode === 'particle') {
        const p = vocab;
        const categoryColor = {
            'Kakujoshi': 'var(--accent)',
            'Setsuzokujoshi': '#10b981',
            'Fukujoshi': '#f59e0b',
            'Shuujoshi': '#8b5cf6'
        }[p.category] || 'var(--accent)';

        UI.modalKanji.textContent = p.particle;
        UI.modalKanji.style.color = categoryColor;
        UI.modalReading.textContent = `${p.romaji}  ·  ${p.category}`;
        UI.modalReading.classList.remove('hidden');
        UI.modalMeaning.textContent = p.meaning;
        UI.modalGrammarDetails.classList.remove('hidden');

        UI.modalGrammarFormula.textContent = p.formula;
        UI.modalGrammarExplanation.textContent = p.explanation;

        if (p.note) {
            UI.modalGrammarNoteContainer.classList.remove('hidden');
            UI.modalGrammarNote.textContent = p.note;
        } else {
            UI.modalGrammarNoteContainer.classList.add('hidden');
        }

        if (p.examples && p.examples.length > 0) {
            let html = '';
            p.examples.forEach(ex => {
                html += `
                    <div class="example-item">
                        <div class="ex-jp">${ex.jp}</div>
                        <div class="ex-rm">${ex.romaji}</div>
                        <div class="ex-id">${ex.id}</div>
                    </div>
                `;
            });
            UI.modalExample.innerHTML = html;
        } else {
            UI.modalExample.textContent = '(Contoh kalimat belum tersedia)';
        }
        
        // Reset kanji color for future uses
        UI.modalKanji.style.color = '';
    } else {
        // Grammar mode
        UI.modalKanji.textContent = vocab.pattern;
        UI.modalKanji.style.color = '';
        UI.modalReading.classList.add('hidden');
        UI.modalMeaning.textContent = vocab.meaning;
        UI.modalGrammarDetails.classList.remove('hidden');
        
        UI.modalGrammarFormula.textContent = vocab.formula;
        UI.modalGrammarExplanation.textContent = vocab.explanation;
        
        if (vocab.note) {
            UI.modalGrammarNoteContainer.classList.remove('hidden');
            UI.modalGrammarNote.textContent = vocab.note;
        } else {
            UI.modalGrammarNoteContainer.classList.add('hidden');
        }
        
        if (vocab.examples && vocab.examples.length > 0) {
            let html = "";
            vocab.examples.forEach(ex => {
                html += `
                    <div class="example-item">
                        <div class="ex-jp">${ex.jp}</div>
                        <div class="ex-rm">${ex.romaji}</div>
                        <div class="ex-id">${ex.id}</div>
                    </div>
                `;
            });
            UI.modalExample.innerHTML = html;
        } else {
            UI.modalExample.textContent = "(Contoh kalimat belum tersedia)";
        }
    }
    
    UI.kanjiModal.classList.add('active');
}

function closeModal() {
    UI.kanjiModal.classList.remove('active');
    currentModalItem = null;
}

function updateScoreBoard() {
    UI.scoreCorrect.textContent = correctCount;
    UI.scoreIncorrect.textContent = incorrectCount;
    UI.scoreRemaining.textContent = currentDeck.length - currentIndex;
}

function endSession() {
    switchScreen('result');
    UI.finalCorrect.textContent = correctCount;
    UI.finalIncorrect.textContent = incorrectCount;
    
    const total = correctCount + incorrectCount;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    
    let icon, title, message;
    if (percentage >= 90) {
        icon = '🏆'; title = 'Luar Biasa!'; message = 'Kamu sudah sangat menguasai materi ini! 素晴らしい！';
    } else if (percentage >= 70) {
        icon = '🎉'; title = 'Hebat!'; message = 'Pemahamanmu sudah bagus! Terus berlatih ya! 頑張って！';
    } else if (percentage >= 50) {
        icon = '💪'; title = 'Lumayan!'; message = 'Masih perlu latihan lagi. Baca ulang materinya ya!';
    } else {
        icon = '📚'; title = 'Ayo Belajar Lagi!'; message = 'Jangan menyerah! Baca ulang materi dan coba lagi! ファイト！';
    }
    
    UI.resultIcon.textContent = icon;
    UI.resultTitle.textContent = title;
    UI.resultMessage.textContent = message;
    
    let stars = '';
    for(let i=1; i<=5; i++) {
        stars += (i <= Math.round(percentage/20)) ? '⭐' : '☆';
    }
    UI.resultStars.textContent = stars;
}

function toggleLearnedItem() {
    if (!currentModalItem) return;
    
    const itemId = (currentModalMode === 'kanji') ? currentModalItem.kanji : currentModalItem.id;
    const index = learnedItems.indexOf(itemId);
    
    if (index > -1) {
        learnedItems.splice(index, 1);
        UI.btnToggleLearned.textContent = '📌 Tandai Sudah Dipelajari';
        UI.btnToggleLearned.className = 'btn-primary btn-large';
    } else {
        learnedItems.push(itemId);
        UI.btnToggleLearned.textContent = '✓ Sudah Dipelajari';
        UI.btnToggleLearned.className = 'btn-secondary btn-large';
    }
    
    localStorage.setItem('jlpt-n4-learned', JSON.stringify(learnedItems));
    renderAllGrids();
    updateLearningProgress();
}

// Start application
document.addEventListener('DOMContentLoaded', init);