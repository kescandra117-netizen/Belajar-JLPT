// ============================================
// JLPT N4 Grammar Data
// Based on: "POLA KALIMAT JLPT N4 - SUPER LENGKAP!"
// ============================================

const grammarData = {
    bab1: [
        {
            id: "koto-ga-aru",
            pattern: "〜たことがある",
            meaning: "Pernah melakukan ~",
            desc: "Digunakan untuk menyatakan pengalaman yang pernah dialami setidaknya satu kali di masa lalu.",
            formula: "Kata Kerja (bentuk た / ta) + ことがある",
            explanation: "Pola ini digunakan ketika ingin menyatakan bahwa seseorang pernah mengalami atau melakukan sesuatu. Menggunakan bentuk lampau kata kerja (ta-kei) sebelum ことがある. Untuk bentuk negatif, gunakan ことがない (belum pernah).",
            examples: [
                { jp: "日本に行ったことがあります。", romaji: "Nihon ni itta koto ga arimasu.", id: "Saya pernah pergi ke Jepang." },
                { jp: "寿司を食べたことがありますか。", romaji: "Sushi wo tabeta koto ga arimasu ka.", id: "Apakah kamu pernah makan sushi?" },
                { jp: "富士山に登ったことがありません。", romaji: "Fujisan ni nobotta koto ga arimasen.", id: "Saya belum pernah mendaki Gunung Fuji." }
            ],
            note: "Jangan bingung dengan ことがある dalam bentuk kamus (jisho-kei) yang berarti 'terkadang/kadang-kadang'. Contoh: 遅れることがある (Terkadang terlambat).",
            tags: ["pengalaman", "lampau"],
            bab: 1
        },
        {
            id: "koto-ni-suru",
            pattern: "〜ことにする",
            meaning: "Memutuskan untuk ~",
            desc: "Menyatakan keputusan yang diambil oleh si pembicara sendiri.",
            formula: "Kata Kerja (bentuk kamus / ない) + ことにする",
            explanation: "Pola ini menunjukkan bahwa si pembicara telah membuat keputusan secara sadar dan sukarela. Berbeda dengan ことになる yang menunjukkan keputusan dari pihak luar.",
            examples: [
                { jp: "毎日運動することにしました。", romaji: "Mainichi undou suru koto ni shimashita.", id: "Saya memutuskan untuk berolahraga setiap hari." },
                { jp: "お酒を飲まないことにします。", romaji: "Osake wo nomanai koto ni shimasu.", id: "Saya memutuskan untuk tidak minum alkohol." },
                { jp: "来月日本へ行くことにしました。", romaji: "Raigetsu Nihon e iku koto ni shimashita.", id: "Saya memutuskan untuk pergi ke Jepang bulan depan." }
            ],
            note: "Bandingkan: ことにする = keputusan SENDIRI, ことになる = keputusan dari LUAR/situasi.",
            tags: ["keputusan", "kehendak"],
            bab: 1
        },
        {
            id: "koto-ni-naru",
            pattern: "〜ことになる",
            meaning: "Menjadi ~ / Diputuskan bahwa ~",
            desc: "Menyatakan keputusan atau situasi yang terjadi dari pihak luar atau secara alami.",
            formula: "Kata Kerja (bentuk kamus / ない) + ことになる",
            explanation: "Berbeda dengan ことにする, pola ini menunjukkan bahwa keputusan dibuat oleh pihak lain (perusahaan, sekolah, dll.) atau terjadi secara alami. Si pembicara tidak mempunyai kendali atas keputusan tersebut.",
            examples: [
                { jp: "来月大阪に転勤することになりました。", romaji: "Raigetsu Osaka ni tenkin suru koto ni narimashita.", id: "Diputuskan bahwa saya akan pindah tugas ke Osaka bulan depan." },
                { jp: "新しいルールで走ってはいけないことになった。", romaji: "Atarashii ruuru de hashitte wa ikenai koto ni natta.", id: "Dengan peraturan baru, diputuskan tidak boleh berlari." },
                { jp: "会議は来週行うことになりました。", romaji: "Kaigi wa raishuu okonau koto ni narimashita.", id: "Rapat diputuskan akan diadakan minggu depan." }
            ],
            note: "Sering digunakan dalam konteks pekerjaan atau situasi formal dimana keputusan dibuat oleh atasan atau organisasi.",
            tags: ["keputusan", "situasi"],
            bab: 1
        },
        {
            id: "rashii",
            pattern: "〜らしい",
            meaning: "Tampaknya ~ / Katanya ~",
            desc: "Menyatakan dugaan berdasarkan informasi dari orang lain atau bukti tidak langsung.",
            formula: "Kata Kerja/Sifat/Benda (bentuk biasa) + らしい",
            explanation: "Digunakan ketika si pembicara menyampaikan informasi yang didengar dari orang lain atau berdasarkan rumor. Berbeda dengan そうだ (berdasarkan penampilan) dan ようだ (berdasarkan bukti langsung).",
            examples: [
                { jp: "明日は雨が降るらしいです。", romaji: "Ashita wa ame ga furu rashii desu.", id: "Katanya besok akan hujan." },
                { jp: "あの映画はとても面白いらしい。", romaji: "Ano eiga wa totemo omoshiroi rashii.", id: "Katanya film itu sangat menarik." },
                { jp: "田中さんは来月結婚するらしい。", romaji: "Tanaka-san wa raigetsu kekkon suru rashii.", id: "Katanya Tanaka akan menikah bulan depan." }
            ],
            note: "らしい juga bisa berarti 'seperti/tipikal' ketika ditempelkan pada kata benda. Contoh: 男らしい (maskulin/seperti laki-laki).",
            tags: ["dugaan", "kabar"],
            bab: 1
        },
        {
            id: "bakari",
            pattern: "〜たばかり",
            meaning: "Baru saja ~",
            desc: "Menunjukkan bahwa suatu tindakan baru saja selesai dilakukan.",
            formula: "Kata Kerja (bentuk た) + ばかり",
            explanation: "Pola ini menekankan bahwa suatu tindakan baru saja terjadi, sehingga efek atau situasinya masih terasa. Waktu 'baru saja' ini bersifat subjektif.",
            examples: [
                { jp: "今起きたばかりです。", romaji: "Ima okita bakari desu.", id: "Saya baru saja bangun tidur." },
                { jp: "日本に来たばかりで、まだ何もわかりません。", romaji: "Nihon ni kita bakari de, mada nani mo wakarimasen.", id: "Saya baru saja datang ke Jepang, jadi belum tahu apa-apa." },
                { jp: "さっきご飯を食べたばかりだから、お腹がいっぱいです。", romaji: "Sakki gohan wo tabeta bakari dakara, onaka ga ippai desu.", id: "Karena baru saja makan, perut saya kenyang." }
            ],
            note: "Berbeda dengan ところ yang lebih ketat soal waktu. ばかり bisa digunakan meskipun sudah agak lama, selama si pembicara merasa itu 'baru saja'.",
            tags: ["waktu", "baru saja"],
            bab: 1
        },
        {
            id: "aida-ni",
            pattern: "〜あいだに",
            meaning: "Selama ~ / Sementara ~",
            desc: "Menunjukkan bahwa suatu tindakan terjadi di tengah-tengah berlangsungnya kegiatan lain.",
            formula: "Kata Kerja (ている) / Kata Benda + の + あいだに",
            explanation: "あいだに menekankan bahwa sesuatu terjadi SELAMA periode tertentu. Berbeda dengan あいだ (tanpa に) yang berarti 'sepanjang waktu itu'. Dengan に, fokusnya pada satu momen di dalam periode tersebut.",
            examples: [
                { jp: "母が寝ているあいだに、部屋を掃除しました。", romaji: "Haha ga nete iru aida ni, heya wo souji shimashita.", id: "Sementara ibu tidur, saya membersihkan kamar." },
                { jp: "夏休みのあいだに旅行したいです。", romaji: "Natsuyasumi no aida ni ryokou shitai desu.", id: "Saya ingin bepergian selama liburan musim panas." },
                { jp: "電車に乗っているあいだに本を読みました。", romaji: "Densha ni notte iru aida ni hon wo yomimashita.", id: "Saya membaca buku sementara naik kereta." }
            ],
            note: "あいだ (tanpa に) = SEPANJANG waktu itu. あいだに = di DALAM waktu itu (terjadi satu peristiwa).",
            tags: ["waktu", "bersamaan"],
            bab: 1
        },
        {
            id: "garu",
            pattern: "〜がる",
            meaning: "Terlihat ~ / Tampak merasakan ~",
            desc: "Digunakan untuk menyatakan perasaan atau keinginan orang ketiga berdasarkan pengamatan.",
            formula: "Kata Sifat-i (hapus い) + がる / Kata Sifat-na + がる",
            explanation: "Dalam bahasa Jepang, kita tidak bisa langsung menyatakan perasaan orang lain. Pola がる digunakan untuk menyatakan apa yang terlihat/tampak dirasakan orang lain berdasarkan observasi kita. がる mengubah kata sifat menjadi kata kerja.",
            examples: [
                { jp: "子供がおもちゃを欲しがっています。", romaji: "Kodomo ga omocha wo hoshigatte imasu.", id: "Anak itu terlihat ingin mainan." },
                { jp: "彼女は暗い所を怖がります。", romaji: "Kanojo wa kurai tokoro wo kowagarimasu.", id: "Dia (perempuan) takut tempat gelap." },
                { jp: "弟は海外に行きたがっています。", romaji: "Otouto wa kaigai ni ikitagatte imasu.", id: "Adik laki-laki saya terlihat ingin pergi ke luar negeri." }
            ],
            note: "Perhatikan perubahan partikel: ほしい menggunakan が, tapi ほしがる menggunakan を. Contoh: 水が欲しい → 水を欲しがる.",
            tags: ["perasaan", "orang ketiga"],
            bab: 1
        },
        {
            id: "chuu",
            pattern: "〜中（ちゅう/じゅう）",
            meaning: "Sedang ~ / Sepanjang ~",
            desc: "Menunjukkan bahwa sesuatu sedang berlangsung atau mencakup seluruh rentang waktu/tempat.",
            formula: "Kata Benda + 中",
            explanation: "中 memiliki dua cara baca: ちゅう (chuu) = sedang dalam proses, じゅう (juu) = sepanjang/seluruh. Contoh: 会議中 (sedang rapat), 一日中 (sepanjang hari).",
            examples: [
                { jp: "今、会議中です。", romaji: "Ima, kaigichuu desu.", id: "Sekarang sedang rapat." },
                { jp: "世界中で人気があります。", romaji: "Sekaijuu de ninki ga arimasu.", id: "Populer di seluruh dunia." },
                { jp: "一日中雨が降っていました。", romaji: "Ichinichijuu ame ga futte imashita.", id: "Hujan sepanjang hari." }
            ],
            note: "ちゅう (chuu) = sedang dalam proses melakukan sesuatu. じゅう (juu) = sepanjang/seluruh (waktu atau tempat).",
            tags: ["waktu", "proses"],
            bab: 1
        },
        {
            id: "toka",
            pattern: "〜とか〜とか",
            meaning: "Seperti ~ dan ~ (dan lain-lain)",
            desc: "Digunakan untuk memberikan contoh dari beberapa hal secara tidak lengkap/kasual.",
            formula: "Kata Benda/Kerja + とか + Kata Benda/Kerja + とか",
            explanation: "Mirip dengan 〜や〜 tapi lebih kasual dan bisa digunakan dengan kata kerja juga, bukan hanya kata benda. Memberi kesan bahwa contoh yang disebutkan bukan daftar lengkap.",
            examples: [
                { jp: "週末は映画を見るとか、買い物するとかします。", romaji: "Shuumatsu wa eiga wo miru toka, kaimono suru toka shimasu.", id: "Di akhir pekan, saya menonton film, belanja, dan sebagainya." },
                { jp: "りんごとかバナナとかを買いました。", romaji: "Ringo toka banana toka wo kaimashita.", id: "Saya membeli apel, pisang, dan lain-lain." },
                { jp: "日本語とか中国語とかを勉強しています。", romaji: "Nihongo toka chuugokugo toka wo benkyou shite imasu.", id: "Saya belajar bahasa Jepang, bahasa Mandarin, dan sebagainya." }
            ],
            note: "とか lebih kasual dari や. Dalam percakapan sehari-hari, とか lebih sering digunakan. Bisa juga digunakan hanya sekali (〜とか) tanpa pengulangan.",
            tags: ["contoh", "kasual"],
            bab: 1
        },
        {
            id: "dasu",
            pattern: "〜出す（だす）",
            meaning: "Mulai ~ (tiba-tiba)",
            desc: "Menunjukkan dimulainya suatu tindakan secara tiba-tiba atau tak terduga.",
            formula: "Kata Kerja (bentuk ます tanpa ます) + 出す",
            explanation: "Pola ini menekankan bahwa suatu tindakan dimulai secara mendadak atau tidak terduga. Berbeda dengan 〜始める (hajimeru) yang lebih netral dan terencana.",
            examples: [
                { jp: "急に雨が降り出した。", romaji: "Kyuu ni ame ga furidashita.", id: "Tiba-tiba hujan mulai turun." },
                { jp: "赤ちゃんが泣き出しました。", romaji: "Akachan ga nakidashimashita.", id: "Bayi itu tiba-tiba mulai menangis." },
                { jp: "彼は突然走り出した。", romaji: "Kare wa totsuzen hashiridashita.", id: "Dia tiba-tiba mulai berlari." }
            ],
            note: "Perbedaan penting: 〜出す = mulai TIBA-TIBA/mendadak. 〜始める = mulai secara UMUM/terencana.",
            tags: ["awal", "mendadak"],
            bab: 1
        },
        {
            id: "owaru",
            pattern: "〜終わる（おわる）",
            meaning: "Selesai ~",
            desc: "Menunjukkan bahwa suatu tindakan telah selesai dilakukan.",
            formula: "Kata Kerja (bentuk ます tanpa ます) + 終わる",
            explanation: "Pola ini menunjukkan penyelesaian suatu tindakan. Digunakan ketika ingin menekankan bahwa suatu kegiatan telah mencapai titik akhirnya.",
            examples: [
                { jp: "本を読み終わりました。", romaji: "Hon wo yomiowarimashita.", id: "Saya sudah selesai membaca buku." },
                { jp: "宿題を書き終わったら、遊びに行きます。", romaji: "Shukudai wo kakiowattara, asobi ni ikimasu.", id: "Setelah selesai menulis PR, saya akan pergi bermain." },
                { jp: "映画を見終わった後、レストランに行きました。", romaji: "Eiga wo miowatta ato, resutoran ni ikimashita.", id: "Setelah selesai menonton film, kami pergi ke restoran." }
            ],
            note: "Pasangan dengan 〜始める (mulai). Contoh: 食べ始める (mulai makan) → 食べ終わる (selesai makan).",
            tags: ["selesai", "akhir"],
            bab: 1
        },
        {
            id: "tsuzukeru",
            pattern: "〜続ける（つづける）",
            meaning: "Terus melakukan ~",
            desc: "Menunjukkan bahwa suatu tindakan dilakukan secara terus-menerus tanpa berhenti.",
            formula: "Kata Kerja (bentuk ます tanpa ます) + 続ける",
            explanation: "Pola ini menekankan kesinambungan atau kelanjutan suatu tindakan. Menunjukkan tekad atau kenyataan bahwa suatu kegiatan berlangsung terus tanpa henti.",
            examples: [
                { jp: "3時間走り続けました。", romaji: "Sanjikan hashiritsuzukemashita.", id: "Saya terus berlari selama 3 jam." },
                { jp: "日本語を勉強し続けたいです。", romaji: "Nihongo wo benkyoushitsuzuketai desu.", id: "Saya ingin terus belajar bahasa Jepang." },
                { jp: "彼は話し続けています。", romaji: "Kare wa hanashitsuzukete imasu.", id: "Dia terus berbicara." }
            ],
            note: "Sering digunakan untuk menunjukkan ketekunan atau kesinambungan. Berbeda dengan 〜ている yang menunjukkan keadaan sedang berlangsung.",
            tags: ["berkelanjutan", "terus"],
            bab: 1
        },
        {
            id: "hodo-nai",
            pattern: "〜ほど〜ない",
            meaning: "Tidak se~ / Tidak sampai ~",
            desc: "Digunakan untuk membandingkan dan menyatakan bahwa sesuatu tidak sebanding atau tidak sampai taraf tertentu.",
            formula: "A は B ほど ～ない",
            explanation: "Pola perbandingan negatif. Menyatakan bahwa A tidak se-[sifat] B. Kebalikan dari 〜より yang menyatakan 'lebih dari'.",
            examples: [
                { jp: "東京は大阪ほど暑くないです。", romaji: "Tokyo wa Osaka hodo atsuku nai desu.", id: "Tokyo tidak sepanas Osaka." },
                { jp: "私は田中さんほど上手じゃないです。", romaji: "Watashi wa Tanaka-san hodo jouzu ja nai desu.", id: "Saya tidak sepandai Tanaka." },
                { jp: "今日は昨日ほど寒くありません。", romaji: "Kyou wa kinou hodo samuku arimasen.", id: "Hari ini tidak sedingin kemarin." }
            ],
            note: "Rumus: A は B ほど [kata sifat negatif]. Artinya A tidak se-[sifat] B.",
            tags: ["perbandingan", "negatif"],
            bab: 1
        }
    ],
    bab2: [
        {
            id: "masenka",
            pattern: "〜ませんか",
            meaning: "Maukah Anda ~ ? (ajakan sopan)",
            desc: "Digunakan untuk mengajak seseorang melakukan sesuatu dengan sopan.",
            formula: "Kata Kerja (bentuk ます tanpa ます) + ませんか",
            explanation: "Pola ajakan yang sopan, digunakan untuk mengundang atau mengajak seseorang. Lebih sopan dari 〜ましょう. Memberi kebebasan kepada lawan bicara untuk menolak.",
            examples: [
                { jp: "一緒に映画を見ませんか。", romaji: "Issho ni eiga wo mimasen ka.", id: "Maukah Anda menonton film bersama?" },
                { jp: "お茶を飲みませんか。", romaji: "Ocha wo nomimasen ka.", id: "Maukah Anda minum teh?" },
                { jp: "週末にサッカーをしませんか。", romaji: "Shuumatsu ni sakkaa wo shimasen ka.", id: "Maukah Anda bermain sepak bola di akhir pekan?" }
            ],
            note: "〜ませんか lebih sopan dan memberi ruang untuk menolak. 〜ましょう lebih langsung dan mengasumsikan persetujuan.",
            tags: ["ajakan", "sopan"],
            bab: 2
        },
        {
            id: "mashouka",
            pattern: "〜ましょうか",
            meaning: "Bagaimana kalau saya ~ ? / Mari kita ~",
            desc: "Menawarkan bantuan atau mengajak melakukan sesuatu bersama.",
            formula: "Kata Kerja (bentuk ます tanpa ます) + ましょうか",
            explanation: "Memiliki dua fungsi: (1) menawarkan bantuan kepada orang lain, (2) mengajak melakukan sesuatu bersama. Konteks kalimat menentukan maknanya.",
            examples: [
                { jp: "荷物を持ちましょうか。", romaji: "Nimotsu wo mochimashou ka.", id: "Mau saya bawakan barangnya?" },
                { jp: "窓を開けましょうか。", romaji: "Mado wo akemashou ka.", id: "Mau saya bukakan jendelanya?" },
                { jp: "一緒に帰りましょうか。", romaji: "Issho ni kaerimashou ka.", id: "Bagaimana kalau kita pulang bersama?" }
            ],
            note: "Ketika menawarkan bantuan, subjek tersirat adalah 'saya'. Ketika mengajak, subjek tersirat adalah 'kita'.",
            tags: ["tawaran", "ajakan"],
            bab: 2
        },
        {
            id: "kara-node",
            pattern: "〜から / 〜ので",
            meaning: "Karena ~",
            desc: "Menyatakan alasan atau sebab dari suatu tindakan atau keadaan.",
            formula: "Kalimat A + から/ので + Kalimat B",
            explanation: "から lebih subjektif dan kasual, bisa digunakan untuk alasan pribadi. ので lebih objektif dan sopan, cocok untuk situasi formal. ので memerlukan bentuk な untuk kata sifat-na dan kata benda.",
            examples: [
                { jp: "雨が降っているから、傘を持って行きます。", romaji: "Ame ga futte iru kara, kasa wo motte ikimasu.", id: "Karena hujan, saya bawa payung." },
                { jp: "明日テストがあるので、今日勉強します。", romaji: "Ashita tesuto ga aru node, kyou benkyou shimasu.", id: "Karena besok ada ujian, hari ini saya belajar." },
                { jp: "病気だから、学校を休みます。", romaji: "Byouki dakara, gakkou wo yasumimasu.", id: "Karena sakit, saya tidak masuk sekolah." }
            ],
            note: "から = lebih kasual/subjektif. ので = lebih sopan/objektif. Di ujian JLPT, perhatikan konteks untuk memilih yang tepat.",
            tags: ["alasan", "sebab"],
            bab: 2
        },
        {
            id: "yori",
            pattern: "〜より",
            meaning: "Lebih ~ daripada",
            desc: "Digunakan untuk membandingkan dua hal dan menyatakan mana yang lebih.",
            formula: "B より A のほうが [kata sifat]",
            explanation: "Pola perbandingan dasar. B より berarti 'daripada B'. Sering digunakan bersama のほうが untuk menekankan bahwa A lebih [sifat] dibanding B.",
            examples: [
                { jp: "東京は大阪より大きいです。", romaji: "Tokyo wa Osaka yori ookii desu.", id: "Tokyo lebih besar dari Osaka." },
                { jp: "夏より冬のほうが好きです。", romaji: "Natsu yori fuyu no hou ga suki desu.", id: "Saya lebih suka musim dingin daripada musim panas." },
                { jp: "電車はバスより速いです。", romaji: "Densha wa basu yori hayai desu.", id: "Kereta lebih cepat dari bus." }
            ],
            note: "Untuk pertanyaan: どちらのほうが〜ですか (mana yang lebih ~?). Jawab: 〜のほうが〜です.",
            tags: ["perbandingan", "lebih"],
            bab: 2
        },
        {
            id: "ga-hoshii",
            pattern: "〜がほしい / 〜たい",
            meaning: "Ingin (benda) / Ingin (melakukan)",
            desc: "Menyatakan keinginan terhadap benda atau tindakan.",
            formula: "Kata Benda + がほしい / Kata Kerja (ます tanpa ます) + たい",
            explanation: "ほしい digunakan untuk benda yang diinginkan (kata benda + が + ほしい). たい digunakan untuk tindakan yang ingin dilakukan. Keduanya hanya untuk menyatakan keinginan diri sendiri (orang pertama).",
            examples: [
                { jp: "新しいパソコンがほしいです。", romaji: "Atarashii pasokon ga hoshii desu.", id: "Saya ingin komputer baru." },
                { jp: "日本に行きたいです。", romaji: "Nihon ni ikitai desu.", id: "Saya ingin pergi ke Jepang." },
                { jp: "冷たい水が飲みたいです。", romaji: "Tsumetai mizu ga nomitai desu.", id: "Saya ingin minum air dingin." }
            ],
            note: "Untuk orang ketiga, gunakan 〜がる (ほしがる/たがる). Contoh: 彼はお金をほしがっている (Dia terlihat ingin uang).",
            tags: ["keinginan", "harapan"],
            bab: 2
        },
        {
            id: "made-madeni",
            pattern: "〜まで / 〜までに",
            meaning: "Sampai ~ / Paling lambat ~",
            desc: "まで menunjukkan batas waktu 'sampai', までに menunjukkan tenggat 'paling lambat'.",
            formula: "Waktu/Tempat + まで / までに",
            explanation: "まで = sampai (aktivitas berlangsung terus sampai titik itu). までに = paling lambat (aktivitas harus selesai sebelum titik itu). Perbedaan ini sangat penting dan sering keluar di JLPT.",
            examples: [
                { jp: "5時まで勉強します。", romaji: "Goji made benkyou shimasu.", id: "Saya belajar sampai jam 5." },
                { jp: "金曜日までにレポートを出してください。", romaji: "Kinyoubi made ni repooto wo dashite kudasai.", id: "Tolong kumpulkan laporan paling lambat hari Jumat." },
                { jp: "駅まで歩きました。", romaji: "Eki made arukimashita.", id: "Saya berjalan kaki sampai stasiun." }
            ],
            note: "まで = SELAMA/SAMPAI (durasi). までに = SEBELUM/PALING LAMBAT (tenggat waktu). Ini sering muncul di soal JLPT!",
            tags: ["waktu", "batas"],
            bab: 2
        },
        {
            id: "temo-ii",
            pattern: "〜てもいい",
            meaning: "Boleh ~",
            desc: "Menyatakan izin atau persetujuan untuk melakukan sesuatu.",
            formula: "Kata Kerja (bentuk て) + もいい",
            explanation: "Pola ini digunakan untuk meminta izin atau memberikan izin. Untuk bertanya, tambahkan か di akhir. Bentuk negatifnya (tidak boleh) adalah 〜てはいけない.",
            examples: [
                { jp: "ここで写真を撮ってもいいですか。", romaji: "Koko de shashin wo totte mo ii desu ka.", id: "Bolehkah saya mengambil foto di sini?" },
                { jp: "このペンを使ってもいいですよ。", romaji: "Kono pen wo tsukatte mo ii desu yo.", id: "Boleh menggunakan pulpen ini, lho." },
                { jp: "もう帰ってもいいです。", romaji: "Mou kaette mo ii desu.", id: "Sudah boleh pulang." }
            ],
            note: "Bentuk negatif: 〜てはいけない/〜てはだめ (tidak boleh). Contoh: ここでタバコを吸ってはいけません (Tidak boleh merokok di sini).",
            tags: ["izin", "persetujuan"],
            bab: 2
        },
        {
            id: "nakereba-naranai",
            pattern: "〜なければならない",
            meaning: "Harus ~ / Wajib ~",
            desc: "Menyatakan keharusan atau kewajiban untuk melakukan sesuatu.",
            formula: "Kata Kerja (bentuk ない tanpa い) + ければならない",
            explanation: "Pola ini menunjukkan bahwa sesuatu harus dilakukan, tidak ada pilihan lain. Ada beberapa variasi: なければなりません (sopan), なければいけない, なくてはならない, なきゃ (sangat kasual).",
            examples: [
                { jp: "毎日薬を飲まなければなりません。", romaji: "Mainichi kusuri wo nomanakere ba narimasen.", id: "Harus minum obat setiap hari." },
                { jp: "明日早く起きなければならない。", romaji: "Ashita hayaku okinakereba naranai.", id: "Besok harus bangun pagi." },
                { jp: "レポートを書かなければいけません。", romaji: "Repooto wo kakanakereba ikemasen.", id: "Harus menulis laporan." }
            ],
            note: "Variasi kasual: 〜なきゃ (なければ → なきゃ). Contoh: 行かなきゃ！ (Harus pergi!). Sangat sering digunakan dalam percakapan.",
            tags: ["keharusan", "kewajiban"],
            bab: 2
        },
        {
            id: "tari-tari",
            pattern: "〜たり〜たりする",
            meaning: "Melakukan ~ dan ~ (bergantian/dan lain-lain)",
            desc: "Menunjukkan beberapa kegiatan yang dilakukan secara bergantian atau sebagai contoh.",
            formula: "Kata Kerja (bentuk た) + り + Kata Kerja (bentuk た) + り + する",
            explanation: "Digunakan untuk menyebutkan beberapa kegiatan sebagai contoh, memberi kesan bahwa masih ada kegiatan lain yang tidak disebutkan. Harus diakhiri dengan する.",
            examples: [
                { jp: "休みの日は本を読んだり、映画を見たりします。", romaji: "Yasumi no hi wa hon wo yondari, eiga wo mitari shimasu.", id: "Di hari libur saya membaca buku, menonton film, dan sebagainya." },
                { jp: "日曜日は掃除したり、洗濯したりしました。", romaji: "Nichiyoubi wa souji shitari, sentaku shitari shimashita.", id: "Hari Minggu saya membersihkan, mencuci, dan sebagainya." },
                { jp: "天気が良かったり、悪かったりします。", romaji: "Tenki ga yokattari, warukattari shimasu.", id: "Cuaca kadang baik, kadang buruk." }
            ],
            note: "Jangan lupa する di akhir! Ini sering menjadi jebakan di soal JLPT. Juga bisa digunakan untuk kata sifat.",
            tags: ["aktivitas", "contoh"],
            bab: 2
        },
        {
            id: "toki",
            pattern: "〜とき（に）",
            meaning: "Ketika ~ / Saat ~",
            desc: "Menyatakan waktu atau situasi ketika sesuatu terjadi.",
            formula: "Kata Kerja/Sifat/Benda (bentuk biasa) + とき（に）",
            explanation: "Kata kerja sebelum とき bisa dalam bentuk kamus (belum terjadi) atau bentuk た (sudah terjadi). Perbedaan ini penting untuk menunjukkan urutan waktu.",
            examples: [
                { jp: "日本に行くとき、パスポートが必要です。", romaji: "Nihon ni iku toki, pasupooto ga hitsuyou desu.", id: "Ketika (akan) pergi ke Jepang, paspor diperlukan." },
                { jp: "寝るとき、「おやすみなさい」と言います。", romaji: "Neru toki, 'oyasuminasai' to iimasu.", id: "Ketika (akan) tidur, saya mengucapkan 'selamat malam'." },
                { jp: "子供のとき、よく公園で遊びました。", romaji: "Kodomo no toki, yoku kouen de asobimashita.", id: "Ketika masih anak-anak, saya sering bermain di taman." }
            ],
            note: "行くとき = ketika AKAN pergi (belum berangkat). 行ったとき = ketika SUDAH pergi (sudah sampai). Perbedaan ini sering diujikan!",
            tags: ["waktu", "kondisi"],
            bab: 2
        }
    ],
    bab3: [
        {
            id: "you-ni-suru",
            pattern: "〜ようにする",
            meaning: "Berusaha untuk ~ / Membiasakan ~",
            desc: "Menyatakan usaha atau upaya untuk melakukan atau membiasakan sesuatu.",
            formula: "Kata Kerja (bentuk kamus/ない) + ようにする",
            explanation: "Pola ini menunjukkan usaha sadar untuk mengubah kebiasaan atau perilaku. Berbeda dengan ようになる yang menunjukkan perubahan terjadi secara alami.",
            examples: [
                { jp: "毎日野菜を食べるようにしています。", romaji: "Mainichi yasai wo taberu you ni shite imasu.", id: "Saya berusaha makan sayur setiap hari." },
                { jp: "遅刻しないようにしてください。", romaji: "Chikoku shinai you ni shite kudasai.", id: "Tolong berusahalah untuk tidak terlambat." },
                { jp: "早く寝るようにします。", romaji: "Hayaku neru you ni shimasu.", id: "Saya akan berusaha tidur lebih awal." }
            ],
            note: "〜ようにする = berusaha SECARA SADAR. 〜ようになる = menjadi SECARA ALAMI/bertahap.",
            tags: ["usaha", "kebiasaan"],
            bab: 3
        },
        {
            id: "you-ni-naru",
            pattern: "〜ようになる",
            meaning: "Menjadi bisa ~ / Berubah menjadi ~",
            desc: "Menyatakan perubahan keadaan atau kemampuan yang terjadi secara bertahap.",
            formula: "Kata Kerja (bentuk kamus/ない) + ようになる",
            explanation: "Pola ini menunjukkan bahwa suatu perubahan terjadi secara bertahap atau alami. Sering digunakan untuk menunjukkan perkembangan kemampuan seiring waktu.",
            examples: [
                { jp: "日本語が話せるようになりました。", romaji: "Nihongo ga hanaseru you ni narimashita.", id: "Saya menjadi bisa berbicara bahasa Jepang." },
                { jp: "朝早く起きられるようになりました。", romaji: "Asa hayaku okirareru you ni narimashita.", id: "Saya menjadi bisa bangun pagi." },
                { jp: "漢字が読めるようになりたいです。", romaji: "Kanji ga yomeru you ni naritai desu.", id: "Saya ingin menjadi bisa membaca kanji." }
            ],
            note: "Sering digunakan bersama bentuk potensial (〜られる/〜える). Contoh: 食べられるようになる (menjadi bisa makan).",
            tags: ["perubahan", "perkembangan"],
            bab: 3
        },
        {
            id: "te-miru",
            pattern: "〜てみる",
            meaning: "Mencoba ~",
            desc: "Menyatakan bahwa seseorang mencoba melakukan sesuatu untuk pertama kalinya atau untuk melihat hasilnya.",
            formula: "Kata Kerja (bentuk て) + みる",
            explanation: "Pola ini menunjukkan bahwa seseorang ingin mencoba sesuatu yang belum pernah dilakukan, atau ingin tahu bagaimana hasilnya. Mengandung nuansa rasa penasaran.",
            examples: [
                { jp: "この料理を食べてみてください。", romaji: "Kono ryouri wo tabete mite kudasai.", id: "Silakan coba makan masakan ini." },
                { jp: "一度日本に行ってみたいです。", romaji: "Ichido Nihon ni itte mitai desu.", id: "Saya ingin mencoba pergi ke Jepang sekali." },
                { jp: "新しいアプリを使ってみました。", romaji: "Atarashii apuri wo tsukatte mimashita.", id: "Saya mencoba menggunakan aplikasi baru." }
            ],
            note: "みる di sini bukan 'melihat', tapi auxiliary verb yang berarti 'mencoba'. Ditulis dalam hiragana, bukan kanji 見る.",
            tags: ["percobaan", "pengalaman"],
            bab: 3
        },
        {
            id: "te-shimau",
            pattern: "〜てしまう",
            meaning: "Sudah terlanjur ~ / Tak sengaja ~",
            desc: "Menyatakan bahwa tindakan telah selesai sepenuhnya, sering dengan nuansa penyesalan.",
            formula: "Kata Kerja (bentuk て) + しまう",
            explanation: "Memiliki dua nuansa: (1) tindakan selesai sepenuhnya, (2) tindakan yang tidak diinginkan/menyesal. Dalam percakapan kasual, sering disingkat menjadi 〜ちゃう/〜じゃう.",
            examples: [
                { jp: "財布を忘れてしまいました。", romaji: "Saifu wo wasurete shimaimashita.", id: "Saya sudah terlanjur lupa dompet (menyesal)." },
                { jp: "ケーキを全部食べてしまった。", romaji: "Keeki wo zenbu tabete shimatta.", id: "Saya sudah makan semua kuenya (habis)." },
                { jp: "電車に乗り遅れちゃった。", romaji: "Densha ni noriokurechatta.", id: "Saya ketinggalan kereta (bentuk kasual)." }
            ],
            note: "Bentuk kasual: 〜ちゃう (dari 〜てしまう), 〜じゃう (dari 〜でしまう). Contoh: 食べてしまう → 食べちゃう, 飲んでしまう → 飲んじゃう.",
            tags: ["penyesalan", "selesai"],
            bab: 3
        },
        {
            id: "yasui-nikui",
            pattern: "〜やすい / 〜にくい",
            meaning: "Mudah ~ / Sulit ~",
            desc: "Menyatakan bahwa sesuatu mudah atau sulit untuk dilakukan.",
            formula: "Kata Kerja (bentuk ます tanpa ます) + やすい / にくい",
            explanation: "やすい menunjukkan sesuatu mudah dilakukan atau cenderung terjadi. にくい menunjukkan sesuatu sulit dilakukan. Keduanya berkonjugasi seperti kata sifat -i.",
            examples: [
                { jp: "この本は読みやすいです。", romaji: "Kono hon wa yomiyasui desu.", id: "Buku ini mudah dibaca." },
                { jp: "この漢字は覚えにくいです。", romaji: "Kono kanji wa oboenikui desu.", id: "Kanji ini sulit diingat." },
                { jp: "白い服は汚れやすい。", romaji: "Shiroi fuku wa yogoreyasui.", id: "Baju putih mudah kotor." }
            ],
            note: "Berkonjugasi seperti kata sifat-i: 読みやすかった (dulu mudah dibaca), 読みやすくない (tidak mudah dibaca).",
            tags: ["kemudahan", "kesulitan"],
            bab: 3
        },
        {
            id: "te-oku",
            pattern: "〜ておく",
            meaning: "Melakukan ~ terlebih dahulu (persiapan)",
            desc: "Menyatakan tindakan yang dilakukan sebagai persiapan untuk sesuatu di masa depan.",
            formula: "Kata Kerja (bentuk て) + おく",
            explanation: "Pola ini menunjukkan bahwa suatu tindakan dilakukan terlebih dahulu sebagai persiapan atau antisipasi. Dalam percakapan kasual, sering disingkat menjadi 〜とく.",
            examples: [
                { jp: "旅行の前にホテルを予約しておきます。", romaji: "Ryokou no mae ni hoteru wo yoyaku shite okimasu.", id: "Saya akan memesan hotel terlebih dahulu sebelum perjalanan." },
                { jp: "パーティーの前に部屋を掃除しておいた。", romaji: "Paatii no mae ni heya wo souji shite oita.", id: "Saya sudah membersihkan kamar sebelum pesta." },
                { jp: "明日のために資料を準備しておきます。", romaji: "Ashita no tame ni shiryou wo junbi shite okimasu.", id: "Saya akan menyiapkan bahan untuk besok." }
            ],
            note: "Bentuk kasual: 〜とく (dari 〜ておく). Contoh: 買っておく → 買っとく, 調べておく → 調べとく.",
            tags: ["persiapan", "antisipasi"],
            bab: 3
        },
        {
            id: "ta-hou-ga-ii",
            pattern: "〜たほうがいい",
            meaning: "Sebaiknya ~",
            desc: "Memberikan saran atau nasihat kepada seseorang.",
            formula: "Kata Kerja (bentuk た) + ほうがいい / Kata Kerja (ない) + ほうがいい",
            explanation: "Digunakan untuk memberi saran. Bentuk positif menggunakan bentuk た, bentuk negatif menggunakan bentuk ない. Lebih langsung dari 〜たらどうですか.",
            examples: [
                { jp: "薬を飲んだほうがいいですよ。", romaji: "Kusuri wo nonda hou ga ii desu yo.", id: "Sebaiknya minum obat, ya." },
                { jp: "早く寝たほうがいい。", romaji: "Hayaku neta hou ga ii.", id: "Sebaiknya tidur cepat." },
                { jp: "あまり無理しないほうがいいですよ。", romaji: "Amari muri shinai hou ga ii desu yo.", id: "Sebaiknya jangan terlalu memaksakan diri." }
            ],
            note: "Saran positif: 〜たほうがいい (sebaiknya melakukan). Saran negatif: 〜ないほうがいい (sebaiknya tidak melakukan).",
            tags: ["saran", "nasihat"],
            bab: 3
        },
        {
            id: "tsumori",
            pattern: "〜つもり",
            meaning: "Berniat ~ / Berencana ~",
            desc: "Menyatakan niat atau rencana untuk melakukan sesuatu.",
            formula: "Kata Kerja (bentuk kamus) + つもり / Kata Kerja (ない) + つもり",
            explanation: "Menunjukkan niat atau rencana yang sudah dipikirkan sebelumnya. Berbeda dengan 予定 (yotei) yang lebih formal dan pasti. つもり lebih personal dan subjektif.",
            examples: [
                { jp: "来年日本に留学するつもりです。", romaji: "Rainen Nihon ni ryuugaku suru tsumori desu.", id: "Saya berniat belajar ke Jepang tahun depan." },
                { jp: "今日は何もしないつもりです。", romaji: "Kyou wa nani mo shinai tsumori desu.", id: "Hari ini saya berniat tidak melakukan apa-apa." },
                { jp: "結婚するつもりはありません。", romaji: "Kekkon suru tsumori wa arimasen.", id: "Saya tidak berniat menikah." }
            ],
            note: "〜つもりだった menunjukkan niat yang tidak terwujud. Contoh: 行くつもりだったが、病気になった (Saya berniat pergi, tapi sakit).",
            tags: ["niat", "rencana"],
            bab: 3
        },
        {
            id: "sou-da-denbun",
            pattern: "〜そうだ（伝聞）",
            meaning: "Katanya ~ / Saya dengar ~",
            desc: "Menyampaikan informasi yang didengar dari orang lain (kabar/desas-desus).",
            formula: "Kalimat (bentuk biasa) + そうだ",
            explanation: "Ini adalah そうだ 'kabar' (伝聞/denbun), berbeda dengan そうだ 'penampilan' (様態/youtai). Digunakan untuk menyampaikan apa yang didengar dari sumber lain tanpa mengkonfirmasi kebenarannya.",
            examples: [
                { jp: "天気予報によると、明日は雨だそうです。", romaji: "Tenki yohou ni yoru to, ashita wa ame da sou desu.", id: "Menurut prakiraan cuaca, katanya besok hujan." },
                { jp: "あの店のラーメンはおいしいそうです。", romaji: "Ano mise no raamen wa oishii sou desu.", id: "Katanya ramen di toko itu enak." },
                { jp: "田中さんは来月引っ越すそうです。", romaji: "Tanaka-san wa raigetsu hikkosu sou desu.", id: "Katanya Tanaka akan pindah bulan depan." }
            ],
            note: "Kabar: おいしいそうだ (katanya enak) — Penampilan: おいしそうだ (terlihat enak). Perhatikan ada/tidaknya い sebelum そう!",
            tags: ["kabar", "informasi"],
            bab: 3
        },
        {
            id: "sou-da-youtai",
            pattern: "〜そうだ（様態）",
            meaning: "Terlihat ~ / Tampak ~",
            desc: "Menyatakan dugaan berdasarkan penampilan atau kesan visual.",
            formula: "Kata Sifat-i (tanpa い) + そうだ / Kata Sifat-na (tanpa な) + そうだ / Kata Kerja (ます tanpa ます) + そうだ",
            explanation: "Ini adalah そうだ 'penampilan/tampak' (様態/youtai). Digunakan berdasarkan apa yang dilihat atau dirasakan langsung oleh si pembicara. Menunjukkan kesan pertama atau prediksi.",
            examples: [
                { jp: "このケーキはおいしそうです。", romaji: "Kono keeki wa oishisou desu.", id: "Kue ini terlihat enak." },
                { jp: "雨が降りそうです。", romaji: "Ame ga furisou desu.", id: "Sepertinya akan hujan." },
                { jp: "彼は元気そうですね。", romaji: "Kare wa genkisou desu ne.", id: "Dia terlihat sehat ya." }
            ],
            note: "Pengecualian penting: いい → よさそう (terlihat bagus), ない → なさそう (terlihat tidak ada). Ini sering muncul di JLPT!",
            tags: ["penampilan", "dugaan"],
            bab: 3
        }
    ]
};

// Quiz questions data
const quizQuestions = [
    // BAB 1 Questions
    {
        bab: 1,
        question: 'Pola kalimat apa yang digunakan untuk menyatakan "pernah melakukan sesuatu"?',
        jpHint: "日本に＿＿ことがあります。",
        answers: ["行った (itta)", "行く (iku)", "行って (itte)", "行こう (ikou)"],
        correct: 0,
        explanation: "〜たことがある menggunakan bentuk lampau (ta-kei) + ことがある untuk menyatakan pengalaman."
    },
    {
        bab: 1,
        question: 'Apa perbedaan antara ことにする dan ことになる?',
        answers: [
            "ことにする = keputusan sendiri, ことになる = keputusan dari luar",
            "ことにする = keputusan dari luar, ことになる = keputusan sendiri",
            "Keduanya sama saja",
            "ことにする = masa lalu, ことになる = masa depan"
        ],
        correct: 0,
        explanation: "ことにする menunjukkan keputusan yang dibuat oleh si pembicara sendiri, sedangkan ことになる menunjukkan keputusan dari pihak luar atau situasi."
    },
    {
        bab: 1,
        question: '「赤ちゃんが泣き＿＿」— Bayi itu tiba-tiba mulai menangis.',
        answers: ["出した (dashita)", "始めた (hajimeta)", "終わった (owatta)", "続けた (tsuzuketa)"],
        correct: 0,
        explanation: "〜出す (dasu) digunakan untuk menunjukkan dimulainya tindakan secara TIBA-TIBA. 〜始める lebih netral/terencana."
    },
    {
        bab: 1,
        question: '「今起きた＿＿です」— Saya baru saja bangun.',
        answers: ["ばかり (bakari)", "ところ (tokoro)", "まで (made)", "だけ (dake)"],
        correct: 0,
        explanation: "〜たばかり digunakan untuk menyatakan bahwa tindakan baru saja selesai dilakukan."
    },
    {
        bab: 1,
        question: 'Pola 〜がる digunakan untuk apa?',
        answers: [
            "Menyatakan perasaan orang ketiga",
            "Menyatakan perasaan diri sendiri",
            "Menyatakan perintah",
            "Menyatakan larangan"
        ],
        correct: 0,
        explanation: "〜がる digunakan untuk menyatakan perasaan atau keinginan orang ketiga (bukan diri sendiri) berdasarkan pengamatan."
    },
    {
        bab: 1,
        question: '「東京は大阪＿＿暑くないです」— Tokyo tidak sepanas Osaka.',
        answers: ["ほど (hodo)", "より (yori)", "くらい (kurai)", "だけ (dake)"],
        correct: 0,
        explanation: "〜ほど〜ない digunakan untuk perbandingan negatif: 'tidak se~ (sifat)'."
    },
    {
        bab: 1,
        question: 'Bagaimana cara baca 会議中 dan 一日中?',
        answers: [
            "かいぎちゅう dan いちにちじゅう",
            "かいぎじゅう dan いちにちちゅう",
            "かいぎちゅう dan いちにちちゅう",
            "かいぎじゅう dan いちにちじゅう"
        ],
        correct: 0,
        explanation: "中 dibaca ちゅう (chuu) untuk 'sedang dalam proses' dan じゅう (juu) untuk 'sepanjang/seluruh'."
    },
    // BAB 2 Questions
    {
        bab: 2,
        question: 'Mana yang lebih sopan untuk mengajak seseorang?',
        answers: [
            "〜ませんか (masen ka)",
            "〜ましょう (mashou)",
            "〜ましょうか (mashou ka)",
            "〜てください (te kudasai)"
        ],
        correct: 0,
        explanation: "〜ませんか lebih sopan karena memberi kebebasan kepada lawan bicara untuk menolak, sedangkan 〜ましょう lebih langsung."
    },
    {
        bab: 2,
        question: 'Apa perbedaan から dan ので?',
        answers: [
            "から = kasual/subjektif, ので = sopan/objektif",
            "から = sopan, ので = kasual",
            "Keduanya sama persis",
            "から = formal, ので = informal"
        ],
        correct: 0,
        explanation: "から lebih kasual dan subjektif, cocok untuk alasan pribadi. ので lebih sopan dan objektif, cocok untuk situasi formal."
    },
    {
        bab: 2,
        question: '「金曜日＿＿にレポートを出してください」— Kumpulkan paling lambat Jumat.',
        answers: ["まで (made)", "から (kara)", "ごろ (goro)", "に (ni)"],
        correct: 0,
        explanation: "までに menunjukkan tenggat waktu 'paling lambat'. まで (tanpa に) berarti 'sampai' (durasi)."
    },
    {
        bab: 2,
        question: '「毎日薬を飲ま＿＿なりません」— Harus minum obat setiap hari.',
        answers: [
            "なければ (nakereba)",
            "なくても (nakutemo)",
            "ないで (naide)",
            "なくて (nakute)"
        ],
        correct: 0,
        explanation: "〜なければならない/なりません menyatakan keharusan atau kewajiban."
    },
    {
        bab: 2,
        question: 'Pola 〜たり〜たりする harus diakhiri dengan apa?',
        answers: ["する (suru)", "いる (iru)", "ある (aru)", "なる (naru)"],
        correct: 0,
        explanation: "Pola 〜たり〜たりする selalu diakhiri dengan する. Ini sering menjadi jebakan di JLPT."
    },
    {
        bab: 2,
        question: '「日本に行くとき」と「日本に行ったとき」の違いは？',
        answers: [
            "行くとき = akan pergi (belum berangkat), 行ったとき = sudah pergi (sudah sampai)",
            "Keduanya sama saja",
            "行くとき = sudah pergi, 行ったとき = akan pergi",
            "行くとき = lampau, 行ったとき = sekarang"
        ],
        correct: 0,
        explanation: "行くとき menggunakan bentuk kamus (sebelum tindakan utama terjadi), 行ったとき menggunakan bentuk lampau (setelah tindakan utama terjadi)."
    },
    // BAB 3 Questions
    {
        bab: 3,
        question: '「毎日野菜を食べる＿＿しています」— Saya berusaha makan sayur setiap hari.',
        answers: ["ように (you ni)", "ことに (koto ni)", "ために (tame ni)", "として (toshite)"],
        correct: 0,
        explanation: "〜ようにする menyatakan usaha sadar untuk mengubah kebiasaan atau membiasakan sesuatu."
    },
    {
        bab: 3,
        question: '「日本語が話せる＿＿なりました」— Saya menjadi bisa berbicara bahasa Jepang.',
        answers: ["ように (you ni)", "ことに (koto ni)", "ために (tame ni)", "として (toshite)"],
        correct: 0,
        explanation: "〜ようになる menyatakan perubahan kemampuan atau keadaan yang terjadi secara bertahap."
    },
{
        bab: 3,
        question: 'Pola kalimat apa yang digunakan untuk menyatakan "mencoba melakukan sesuatu"?',
        answers: ["〜てみる (te miru)", "〜ておく (te oku)", "〜てしまう (te shimau)", "〜たほうがいい (ta hou ga ii)"],
        correct: 0,
        explanation: "〜てみる digunakan untuk menyatakan mencoba melakukan sesuatu untuk melihat hasilnya."
    },
    {
        bab: 3,
        question: 'Apa arti dari pola kalimat 「〜てしまう」?',
        answers: [
            "Sudah terlanjur / Selesai sepenuhnya",
            "Mencoba melakukan sesuatu",
            "Melakukan persiapan terlebih dahulu",
            "Sebaiknya melakukan sesuatu"
        ],
        correct: 0,
        explanation: "〜てしまう menyatakan tindakan yang telah selesai sepenuhnya, seringkali dengan nuansa penyesalan (sudah terlanjur)."
    },
    {
        bab: 3,
        question: '「この本は読み＿＿です」— Buku ini mudah dibaca.',
        answers: ["やすい (yasui)", "にくい (nikui)", "おわる (owaru)", "すぎる (sugiru)"],
        correct: 0,
        explanation: "Kata kerja bentuk ます (tanpa ます) + やすい menyatakan kemudahan dalam melakukan sesuatu."
    },
    {
        bab: 3,
        question: 'Pola kalimat mana yang menyatakan "melakukan sesuatu terlebih dahulu sebagai persiapan"?',
        answers: ["〜ておく (te oku)", "〜てみる (te miru)", "〜てしまう (te shimau)", "〜たい (tai)"],
        correct: 0,
        explanation: "〜ておく digunakan untuk menyatakan tindakan yang dilakukan sebagai persiapan untuk masa depan."
    },
    {
        bab: 3,
        question: '「早く寝た＿＿いいですよ」— Sebaiknya tidur cepat.',
        answers: ["ほうが (hou ga)", "つもり (tsumori)", "ように (you ni)", "ことに (koto ni)"],
        correct: 0,
        explanation: "〜たほうがいい digunakan untuk memberikan saran atau nasihat."
    },
    {
        bab: 3,
        question: 'Pola kalimat apa yang digunakan untuk menyatakan niat atau rencana?',
        answers: ["〜つもり (tsumori)", "〜ために (tame ni)", "〜ようになる (you ni naru)", "〜ことにする (koto ni suru)"],
        correct: 0,
        explanation: "〜つもり menyatakan niat atau rencana yang sudah dipikirkan sebelumnya."
    },
    {
        bab: 3,
        question: 'Apa perbedaan antara 「おいしいそうだ」 dan 「おいしそうだ」?',
        answers: [
            "おいしいそうだ = katanya enak (kabar), おいしそうだ = terlihat enak (tampak)",
            "おいしいそうだ = terlihat enak (tampak), おいしそうだ = katanya enak (kabar)",
            "Keduanya memiliki arti yang sama",
            "おいしいそうだ adalah bentuk salah"
        ],
        correct: 0,
        explanation: "Bentuk biasa + そうだ menyatakan kabar/denbun (katanya), sedangkan kata sifat (tanpa い) + そうだ menyatakan penampilan/youtai (kelihatannya)."
    }
];

// Export or expose variables to window object for web usage
if (typeof window !== 'undefined') {
    window.grammarData = grammarData;
    window.quizQuestions = quizQuestions;
}