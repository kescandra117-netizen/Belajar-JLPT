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

// ============================================
// PARTICLE DATA
// Based on: https://kepojepang.com/partikel/
// ============================================

const particleData = {
    kakujoshi: [
        {
            id: "wa",
            particle: "は",
            romaji: "wa",
            category: "Kakujoshi",
            meaning: "Penanda topik kalimat",
            desc: "Menandai topik utama dalam kalimat. Semua yang disebutkan dalam kalimat berkaitan dengan topik ini.",
            formula: "Topik + は + keterangan/predikat",
            explanation: "は (wa) adalah partikel topik yang paling sering dipakai. Berbeda dengan が yang menandai subjek gramatikal, は menandai topik pembicaraan. Topik bisa berupa subjek, objek, atau keterangan waktu/tempat yang ingin ditekankan.",
            examples: [
                { jp: "私は学生です。", romaji: "Watashi wa gakusei desu.", id: "Saya adalah pelajar." },
                { jp: "東京は大きい都市です。", romaji: "Tokyo wa ookii toshi desu.", id: "Tokyo adalah kota yang besar." },
                { jp: "これは何ですか。", romaji: "Kore wa nan desu ka.", id: "Ini apa?" }
            ],
            note: "Jangan bingung は sebagai topik (wa) dengan は sebagai hiragana biasa (ha) dalam kata-kata seperti 今日は (kyou wa).",
            tags: ["topik", "dasar", "N5"]
        },
        {
            id: "ga",
            particle: "が",
            romaji: "ga",
            category: "Kakujoshi",
            meaning: "Penanda subjek gramatikal",
            desc: "Menandai subjek gramatikal kalimat, terutama saat memperkenalkan informasi baru atau menekankan subjek.",
            formula: "Subjek + が + predikat",
            explanation: "が (ga) menandai subjek gramatikal. Digunakan ketika informasi subjeknya baru/belum diketahui pendengar, dalam kalimat tanya dengan 'siapa/apa', atau untuk menekankan bahwa 'justru ini (bukan yang lain)' yang melakukan sesuatu. Juga digunakan setelah kata sifat perasaan (suki, kirai, hoshii) dan kemampuan (dekiru).",
            examples: [
                { jp: "誰が来ましたか。田中さんが来ました。", romaji: "Dare ga kimashita ka? Tanaka-san ga kimashita.", id: "Siapa yang datang? Tanaka yang datang." },
                { jp: "私はコーヒーが好きです。", romaji: "Watashi wa koohii ga suki desu.", id: "Saya suka kopi." },
                { jp: "雨が降っています。", romaji: "Ame ga futte imasu.", id: "Hujan sedang turun." }
            ],
            note: "Perbedaan は vs が: は = topik (sudah diketahui/diperkenalkan), が = subjek baru/ditekankan. Contoh: 猫は魚を食べる (kucing [topik] makan ikan) vs 猫が魚を食べた (kucing-lah yang makan ikan).",
            tags: ["subjek", "dasar", "N5"]
        },
        {
            id: "no",
            particle: "の",
            romaji: "no",
            category: "Kakujoshi",
            meaning: "Kepemilikan / Hubungan antar kata benda",
            desc: "Menghubungkan dua kata benda, menyatakan kepemilikan, hubungan, atau sifat.",
            formula: "Kata Benda A + の + Kata Benda B",
            explanation: "の (no) memiliki banyak fungsi: (1) Kepemilikan: 私の本 = buku saya. (2) Keterangan: 日本語の本 = buku bahasa Jepang. (3) Nominalisasi: 食べるのが好き = suka makan. (4) Akhir kalimat (informal): 行くの？ = Kamu pergi?",
            examples: [
                { jp: "これは私の本です。", romaji: "Kore wa watashi no hon desu.", id: "Ini adalah buku saya." },
                { jp: "日本語の勉強は楽しいです。", romaji: "Nihongo no benkyou wa tanoshii desu.", id: "Belajar bahasa Jepang itu menyenangkan." },
                { jp: "東京大学の学生です。", romaji: "Tokyo Daigaku no gakusei desu.", id: "Saya mahasiswa Universitas Tokyo." }
            ],
            note: "の juga bisa menggantikan kata benda yang sudah disebutkan. Contoh: 赤いの (yang merah) — の di sini menggantikan benda yang dimaksud.",
            tags: ["kepemilikan", "hubungan", "N5"]
        },
        {
            id: "wo",
            particle: "を",
            romaji: "wo",
            category: "Kakujoshi",
            meaning: "Penanda objek langsung",
            desc: "Menandai objek langsung dari kata kerja transitif (kata kerja yang memerlukan objek).",
            formula: "Objek + を + Kata Kerja transitif",
            explanation: "を (wo) menandai objek yang langsung dikenai tindakan. Digunakan dengan kata kerja transitif seperti makan, minum, membaca, membeli, dll. Juga digunakan untuk menandai titik awal pergerakan (meninggalkan tempat) dan rute pergerakan.",
            examples: [
                { jp: "りんごを食べます。", romaji: "Ringo wo tabemasu.", id: "Makan apel." },
                { jp: "日本語を勉強しています。", romaji: "Nihongo wo benkyou shite imasu.", id: "Sedang belajar bahasa Jepang." },
                { jp: "公園を散歩しました。", romaji: "Kouen wo sanpo shimashita.", id: "Berjalan-jalan di taman." }
            ],
            note: "Dibaca 'wo' tapi dalam pengucapan sehari-hari sering diucapkan 'o'. Jangan digunakan dengan kata kerja intransitif (kata kerja yang tidak perlu objek).",
            tags: ["objek", "transitif", "N5"]
        },
        {
            id: "ni",
            particle: "に",
            romaji: "ni",
            category: "Kakujoshi",
            meaning: "Tujuan / Waktu / Tempat keberadaan",
            desc: "Partikel serbaguna yang menyatakan tujuan pergerakan, waktu spesifik, tempat keberadaan, atau penerima tindakan.",
            formula: "Tempat/Waktu/Orang + に + kata kerja",
            explanation: "に (ni) memiliki banyak fungsi: (1) Tempat tujuan: 学校に行く (pergi ke sekolah). (2) Tempat keberadaan benda mati/hidup: 机の上に本がある (di atas meja ada buku). (3) Waktu spesifik: 3時に (jam 3). (4) Penerima: 先生に聞く (bertanya kepada guru). (5) Tujuan pergi: 買い物に行く (pergi untuk belanja).",
            examples: [
                { jp: "学校に行きます。", romaji: "Gakkou ni ikimasu.", id: "Pergi ke sekolah." },
                { jp: "三時に起きました。", romaji: "Sanji ni okimashita.", id: "Bangun jam tiga." },
                { jp: "先生に質問しました。", romaji: "Sensei ni shitsumon shimashita.", id: "Bertanya kepada guru." }
            ],
            note: "Bedakan に (tujuan) dan で (lokasi aktivitas): 図書館に行く (pergi ke perpustakaan) vs 図書館で勉強する (belajar di perpustakaan).",
            tags: ["tujuan", "waktu", "tempat", "N5"]
        },
        {
            id: "e",
            particle: "へ",
            romaji: "e",
            category: "Kakujoshi",
            meaning: "Arah pergerakan",
            desc: "Menandai arah atau tujuan pergerakan. Maknanya mirip dengan に untuk tujuan, namun menekankan 'arah menuju' daripada 'titik tiba'.",
            formula: "Tempat + へ + kata kerja gerak",
            explanation: "へ (e) digunakan untuk menyatakan arah atau tujuan pergerakan, mirip dengan に. Perbedaannya: へ lebih menekankan proses menuju ke suatu arah, sedangkan に lebih menekankan titik tujuan akhir. Dalam percakapan sehari-hari, keduanya sering bisa dipertukarkan.",
            examples: [
                { jp: "日本へ行きたいです。", romaji: "Nihon e ikitai desu.", id: "Saya ingin pergi ke Jepang." },
                { jp: "右へ曲がってください。", romaji: "Migi e magatte kudasai.", id: "Tolong belok ke kanan." },
                { jp: "家へ帰ります。", romaji: "Ie e kaerimasu.", id: "Pulang ke rumah." }
            ],
            note: "Dibaca 'e' meskipun ditulis dengan hiragana 'he' (へ). Dalam tulisan formal, へ dan に bisa sama-sama digunakan untuk tujuan.",
            tags: ["arah", "tujuan", "N5"]
        },
        {
            id: "to",
            particle: "と",
            romaji: "to",
            category: "Kakujoshi",
            meaning: "Dan / Bersama / Kutipan",
            desc: "Menghubungkan kata benda setara ('dan'), menyatakan kebersamaan ('bersama'), atau menandai kutipan/isi pikiran.",
            formula: "A + と + B (dan) / orang + と + kata kerja (bersama) / isi + と + kata kerja pikiran",
            explanation: "と (to) memiliki 3 fungsi utama: (1) Menghubungkan kata benda: 猫と犬 (kucing dan anjing) — digunakan hanya untuk menghubungkan semuanya. (2) Bersama: 友達と行く (pergi bersama teman). (3) Kutipan/pikiran: 〜と思う (berpikir bahwa...), 〜と言う (berkata bahwa...).",
            examples: [
                { jp: "りんごとみかんを買いました。", romaji: "Ringo to mikan wo kaimashita.", id: "Membeli apel dan jeruk." },
                { jp: "友達と映画を見ました。", romaji: "Tomodachi to eiga wo mimashita.", id: "Menonton film bersama teman." },
                { jp: "明日は雨だと思います。", romaji: "Ashita wa ame da to omoimasu.", id: "Saya pikir besok akan hujan." }
            ],
            note: "Bedakan と (menghubungkan semua item) dengan や (menghubungkan sebagian dari banyak item). と: りんごとバナナ (hanya apel dan pisang). や: りんごやバナナ (apel, pisang, dan lain-lain).",
            tags: ["dan", "bersama", "kutipan", "N5"]
        },
        {
            id: "kara",
            particle: "から",
            romaji: "kara",
            category: "Kakujoshi",
            meaning: "Dari / Sejak / Karena",
            desc: "Menyatakan titik awal (tempat/waktu), asal, atau alasan/sebab.",
            formula: "Tempat/Waktu + から (dari/sejak) / Alasan + から + akibat (karena)",
            explanation: "から (kara) memiliki dua fungsi utama sebagai kakujoshi: (1) Titik awal: 東京から来ました (datang dari Tokyo), 9時から (dari jam 9). (2) Asal bahan: 米からお酒を作る (membuat sake dari beras). Sebagai setsuzokujoshi, から juga berarti 'karena'.",
            examples: [
                { jp: "インドネシアから来ました。", romaji: "Indonesia kara kimashita.", id: "Datang dari Indonesia." },
                { jp: "9時から6時まで働きます。", romaji: "Kuji kara rokuji made hatarakimasu.", id: "Bekerja dari jam 9 sampai jam 6." },
                { jp: "牛乳からバターを作ります。", romaji: "Gyuunyuu kara bataa wo tsukurimasu.", id: "Membuat mentega dari susu." }
            ],
            note: "から (titik awal) sering berpasangan dengan まで (titik akhir): 月曜日から金曜日まで (dari Senin sampai Jumat).",
            tags: ["asal", "titik awal", "karena", "N5"]
        },
        {
            id: "yori",
            particle: "より",
            romaji: "yori",
            category: "Kakujoshi",
            meaning: "Daripada / Lebih dari",
            desc: "Digunakan dalam perbandingan untuk menyatakan bahwa sesuatu 'lebih' dari yang lain.",
            formula: "A + より + B + の方が + sifat (B lebih ... daripada A)",
            explanation: "より (yori) menandai standar pembanding. Benda/hal yang mengikuti より adalah yang 'kalah' atau 'lebih rendah' dalam perbandingan. Juga bisa berarti 'dari' dalam ungkapan formal seperti surat.",
            examples: [
                { jp: "東京より大阪の方が好きです。", romaji: "Tokyo yori Osaka no hou ga suki desu.", id: "Saya lebih suka Osaka daripada Tokyo." },
                { jp: "バスより電車の方が速いです。", romaji: "Basu yori densha no hou ga hayai desu.", id: "Kereta lebih cepat daripada bus." },
                { jp: "思ったより難しかったです。", romaji: "Omotta yori muzukashikatta desu.", id: "Lebih sulit dari yang saya bayangkan." }
            ],
            note: "Pola lengkap perbandingan: AよりBの方が〜 (B lebih ~ daripada A). より juga digunakan dalam surat formal dengan arti 'dari': 田中より (dari Tanaka).",
            tags: ["perbandingan", "lebih", "N4"]
        },
        {
            id: "de",
            particle: "で",
            romaji: "de",
            category: "Kakujoshi",
            meaning: "Di (lokasi aktivitas) / Dengan (alat/cara) / Sebab",
            desc: "Menandai tempat berlangsungnya aktivitas, alat/cara yang digunakan, atau sebab/batas.",
            formula: "Tempat + で + aktivitas / Alat + で + kata kerja",
            explanation: "で (de) digunakan untuk: (1) Tempat aktivitas: 図書館で勉強する (belajar di perpustakaan). (2) Alat/cara: 電車で行く (pergi dengan kereta), 日本語で話す (berbicara dalam bahasa Jepang). (3) Bahan: 木で作る (membuat dari kayu). (4) Batas/total: 全部で千円 (semuanya seribu yen).",
            examples: [
                { jp: "図書館で勉強します。", romaji: "Toshokan de benkyou shimasu.", id: "Belajar di perpustakaan." },
                { jp: "電車で学校へ行きます。", romaji: "Densha de gakkou e ikimasu.", id: "Pergi ke sekolah dengan kereta." },
                { jp: "はしで食べます。", romaji: "Hashi de tabemasu.", id: "Makan dengan sumpit." }
            ],
            note: "Bedakan に (tempat keberadaan: ある/いる) dan で (tempat aktivitas): 公園にいる (ada di taman) vs 公園で遊ぶ (bermain di taman).",
            tags: ["tempat aktivitas", "alat", "cara", "N5"]
        },
        {
            id: "ya",
            particle: "や",
            romaji: "ya",
            category: "Kakujoshi",
            meaning: "Dan... (sebagian dari banyak)",
            desc: "Menghubungkan kata benda sebagai contoh, menyiratkan ada item lain yang tidak disebutkan.",
            formula: "A + や + B + など (A, B, dan lain-lain)",
            explanation: "や (ya) digunakan untuk menghubungkan kata benda sebagai contoh dari daftar yang lebih panjang. Berbeda dengan と yang menghubungkan semua item secara lengkap, や menyiratkan bahwa masih ada item lain yang tidak disebutkan.",
            examples: [
                { jp: "りんごやバナナを買いました。", romaji: "Ringo ya banana wo kaimashita.", id: "Membeli apel, pisang, dan lain-lain." },
                { jp: "本や雑誌を読みます。", romaji: "Hon ya zasshi wo yomimasu.", id: "Membaca buku, majalah, dan sebagainya." },
                { jp: "日本語や英語が話せます。", romaji: "Nihongo ya Eigo ga hanasemasu.", id: "Bisa berbicara bahasa Jepang, Inggris, dan lain-lain." }
            ],
            note: "や sering diikuti dengan など (dan lain-lain) untuk memperjelas bahwa daftar tidak lengkap: りんごやバナナなど。Bandingkan: りんごとバナナ (HANYA apel dan pisang).",
            tags: ["dan", "contoh", "N5"]
        },
        {
            id: "toka",
            particle: "とか",
            romaji: "toka",
            category: "Kakujoshi",
            meaning: "Seperti / Misalnya (percakapan)",
            desc: "Versi informal dari や, digunakan dalam percakapan sehari-hari untuk menyebutkan contoh.",
            formula: "A + とか + B + とか",
            explanation: "とか (toka) adalah bentuk informal dan kasual dari や. Digunakan dalam percakapan untuk menyebutkan beberapa contoh dari daftar yang lebih besar. Sering digunakan berulang: AとかBとか (seperti A, B, dan sebagainya).",
            examples: [
                { jp: "ラーメンとかカレーとかが好きです。", romaji: "Raamen toka karee toka ga suki desu.", id: "Saya suka ramen, kari, dan lain-lain." },
                { jp: "映画とか音楽とか、趣味がたくさんあります。", romaji: "Eiga toka ongaku toka, shumi ga takusan arimasu.", id: "Saya punya banyak hobi seperti film, musik, dan sebagainya." },
                { jp: "疲れたとか言っていた。", romaji: "Tsukareta toka itte ita.", id: "Dia bilang sesuatu seperti 'capek'." }
            ],
            note: "とか lebih kasual daripada や. Hindari penggunaan dalam tulisan formal atau situasi resmi. とか juga bisa menyampaikan informasi tidak pasti: 〜とか言っていた (katanya... kurang lebih begitu).",
            tags: ["contoh", "kasual", "percakapan", "N4"]
        }
    ],
    setsuzokujoshi: [
        {
            id: "node",
            particle: "ので",
            romaji: "node",
            category: "Setsuzokujoshi",
            meaning: "Karena ~ (sebab-akibat objektif)",
            desc: "Menyatakan alasan atau sebab dengan nuansa objektif dan sopan.",
            formula: "Kata Kerja/Sifat (bentuk biasa) + ので / Kata Benda/Na-adjektiva + な + ので",
            explanation: "ので (node) menyatakan hubungan sebab-akibat yang bersifat objektif dan alami. Lebih sopan dan formal daripada から. Digunakan ketika alasan yang diberikan adalah fakta atau kondisi yang dapat dipahami secara umum. Sering digunakan dalam situasi formal atau ketika meminta maaf/izin.",
            examples: [
                { jp: "雨が降っているので、傘を持ってください。", romaji: "Ame ga futte iru node, kasa wo motte kudasai.", id: "Karena hujan sedang turun, tolong bawa payung." },
                { jp: "明日試験があるので、今日は早く寝ます。", romaji: "Ashita shiken ga aru node, kyou wa hayaku nemasu.", id: "Karena besok ada ujian, hari ini tidur lebih awal." },
                { jp: "体調が悪いので、休ませてください。", romaji: "Taichou ga warui node, yasumasete kudasai.", id: "Karena kondisi tubuh saya kurang baik, tolong izinkan saya istirahat." }
            ],
            note: "ので vs から: ので = alasan objektif (lebih sopan), から = alasan subjektif (lebih langsung). Untuk permintaan/permohonan maaf, ので terdengar lebih sopan.",
            tags: ["alasan", "sebab-akibat", "sopan", "N4"]
        },
        {
            id: "ba",
            particle: "ば",
            romaji: "ba",
            category: "Setsuzokujoshi",
            meaning: "Jika ~ (kondisional)",
            desc: "Menyatakan kondisi hipotesis: jika kondisi A terpenuhi, maka B akan terjadi.",
            formula: "Kata Kerja (bentuk ば/e-ba) / Kata Sifat (-ければ) + B",
            explanation: "ば (ba) menyatakan kondisi hipotesis yang natural. Jika kondisi pertama terpenuhi, kondisi kedua secara alami mengikuti. Konjugasi: Kata kerja Godan: ubah ending ke -eba (行く→行けば). Kata kerja Ichidan: -eba (食べる→食べれば). Kata sifat い: -ければ (高い→高ければ). Kata sifat な: なら. Kata benda: なら.",
            examples: [
                { jp: "右に曲がれば、駅が見えます。", romaji: "Migi ni magareba, eki ga miemasu.", id: "Jika belok ke kanan, Anda akan melihat stasiun." },
                { jp: "もっと練習すれば、上手になります。", romaji: "Motto renshuu sureba, jouzu ni narimasu.", id: "Jika berlatih lebih banyak, akan menjadi mahir." },
                { jp: "お金があれば、旅行したいです。", romaji: "Okane ga areba, ryokou shitai desu.", id: "Jika ada uang, saya ingin bepergian." }
            ],
            note: "ば paling cocok untuk kondisi yang 'natural' atau 'universal'. Untuk kondisi yang spesifik atau satu kali, gunakan たら. Contoh: ボタンを押せば開く (kalau tombol ditekan akan terbuka — kondisi natural).",
            tags: ["kondisional", "jika", "hipotesis", "N4"]
        },
        {
            id: "temo",
            particle: "ても",
            romaji: "temo / demo",
            category: "Setsuzokujoshi",
            meaning: "Walaupun ~ / Meskipun ~",
            desc: "Menyatakan kontras atau kondisi konsesif: meskipun A, tetap B (B tidak berubah).",
            formula: "Kata Kerja (bentuk て) + も / Kata Sifat い (-くても) / Na-sifat (でも)",
            explanation: "ても/でも (temo/demo) menyatakan konsesi: meskipun kondisi A terjadi atau terpenuhi, hasil B tetap tidak berubah atau berlawanan dari yang diharapkan. Kata kerja: bentuk て + も. Kata sifat い: -くても. Kata sifat な dan kata benda: でも.",
            examples: [
                { jp: "雨が降っても、行きます。", romaji: "Ame ga futte mo, ikimasu.", id: "Meskipun hujan, saya tetap pergi." },
                { jp: "高くても、買いたいです。", romaji: "Takakute mo, kaitai desu.", id: "Meskipun mahal, saya tetap ingin membeli." },
                { jp: "何度勉強しても、覚えられない。", romaji: "Nando benkyou shite mo, oboerare nai.", id: "Betapa pun banyak belajar, tetap tidak bisa mengingat." }
            ],
            note: "ても menyatakan 'meskipun, tetap...'. Berbeda dengan のに yang mengandung nuansa kecewa/terkejut: のに = meskipun (dengan perasaan kecewa), ても = meskipun (netral).",
            tags: ["meskipun", "kontras", "konsesif", "N4"]
        },
        {
            id: "keredo",
            particle: "けれど",
            romaji: "keredo / keredomo",
            category: "Setsuzokujoshi",
            meaning: "Tapi ~ / Meskipun ~ (kontras ringan)",
            desc: "Menghubungkan dua klausa yang kontras atau bertolak belakang, dengan nuansa lebih halus dari でも/が.",
            formula: "Klausa A (bentuk biasa/sopan) + けれど/けれども/けど + Klausa B",
            explanation: "けれど/けれども (keredo/keredomo) menyatakan kontras antara dua klausa. Versi formal: けれども. Versi semi-formal: けれど. Versi kasual: けど. Semua memiliki makna yang sama. Juga digunakan untuk mengawali kalimat dengan informasi latar belakang sebelum menuju poin utama.",
            examples: [
                { jp: "この映画は面白いけれど、長すぎます。", romaji: "Kono eiga wa omoshiroi keredo, nagasugimasu.", id: "Film ini menarik, tapi terlalu panjang." },
                { jp: "行きたいけれども、時間がありません。", romaji: "Ikitai keredomo, jikan ga arimasen.", id: "Saya ingin pergi, tapi tidak ada waktu." },
                { jp: "すみませんけど、ちょっとよろしいですか。", romaji: "Sumimasen kedo, chotto yoroshii desu ka.", id: "Permisi (saya mohon maaf), apakah Anda punya waktu sebentar?" }
            ],
            note: "Tingkat formalitas: けれども (paling formal) > けれど (semi-formal) > けど (kasual). Digunakan juga sebagai pembuka kalimat yang halus sebelum menyampaikan permintaan: すみませんけど... (Permisi tapi...).",
            tags: ["kontras", "tapi", "N4"]
        },
        {
            id: "noni",
            particle: "のに",
            romaji: "noni",
            category: "Setsuzokujoshi",
            meaning: "Meskipun ~ (dengan nuansa kecewa/kesal)",
            desc: "Menyatakan kontras dengan nuansa kecewa, kesal, atau heran karena hasilnya berlawanan dari harapan.",
            formula: "Kata Kerja/Sifat (bentuk biasa) + のに / Kata Benda + な + のに",
            explanation: "のに (noni) menyatakan kontras, mirip dengan ても tetapi mengandung perasaan pembicara (kecewa, kesal, atau heran). Digunakan ketika hasil aktualnya berlawanan dari yang seharusnya atau yang diharapkan. Nuansa emosionalnya kuat.",
            examples: [
                { jp: "一生懸命勉強したのに、試験に落ちた。", romaji: "Isshokenmei benkyou shita noni, shiken ni ochita.", id: "Meskipun sudah belajar keras-keras, tetap gagal ujian." },
                { jp: "安いのに、品質がいい。", romaji: "Yasui noni, hinshitsu ga ii.", id: "Meskipun murah, kualitasnya bagus." },
                { jp: "頼んだのに、やってくれなかった。", romaji: "Tanonda noni, yatte kurenakatta.", id: "Padahal sudah meminta (tolong), tapi tidak mau melakukannya." }
            ],
            note: "のに di akhir kalimat = keluhan/kekecewaan: 早く来ればよかったのに (padahal harusnya datang lebih awal). Jangan gunakan のに untuk fakta netral — gunakan が atau けれど sebagai gantinya.",
            tags: ["kontras", "kecewa", "meskipun", "N4"]
        },
        {
            id: "te",
            particle: "て",
            romaji: "te",
            category: "Setsuzokujoshi",
            meaning: "Dan kemudian / Dengan cara ~ (menghubungkan klausa)",
            desc: "Bentuk te (te-form) kata kerja yang menghubungkan dua tindakan berurutan atau menyatakan cara/kondisi.",
            formula: "Kata Kerja (bentuk て) + Kata Kerja 2",
            explanation: "Bentuk て (te-form) memiliki banyak fungsi: (1) Urutan: 起きて、ご飯を食べた (bangun, lalu makan). (2) Cara/metode: 歩いて行く (pergi dengan berjalan kaki). (3) Alasan/sebab ringan: 頭が痛くて、休んだ (karena kepala sakit, istirahat). (4) Kondisi: て + いる/ある/おく/みる, dll.",
            examples: [
                { jp: "シャワーを浴びて、朝ごはんを食べます。", romaji: "Shawaa wo abite, asagohan wo tabemasu.", id: "Mandi, lalu makan sarapan." },
                { jp: "電車に乗って、会社へ行きます。", romaji: "Densha ni notte, kaisha e ikimasu.", id: "Naik kereta, pergi ke kantor." },
                { jp: "疲れて、早く寝ました。", romaji: "Tsukarete, hayaku nemashita.", id: "Karena lelah, tidur lebih awal." }
            ],
            note: "Bentuk て adalah dasar dari banyak pola gramatikal penting: てください, ている, てもいい, てはいけない, dll. Konjugasi bervariasi tergantung kelompok kata kerja.",
            tags: ["urutan", "cara", "menghubungkan", "N5"]
        },
        {
            id: "nagara",
            particle: "ながら",
            romaji: "nagara",
            category: "Setsuzokujoshi",
            meaning: "Sambil ~ (melakukan dua hal sekaligus)",
            desc: "Menyatakan bahwa dua tindakan dilakukan secara bersamaan oleh subjek yang sama.",
            formula: "Kata Kerja (bentuk ます tanpa ます) + ながら + Kata Kerja utama",
            explanation: "ながら (nagara) menyatakan dua tindakan yang dilakukan bersamaan oleh satu orang/subjek. Kata kerja setelah ながら adalah tindakan yang lebih utama/fokus. Kata kerja sebelum ながら adalah tindakan sampingan. Kedua subjek harus sama.",
            examples: [
                { jp: "音楽を聴きながら、勉強します。", romaji: "Ongaku wo kikinagara, benkyou shimasu.", id: "Belajar sambil mendengarkan musik." },
                { jp: "歩きながら、電話をしています。", romaji: "Arukinagara, denwa wo shite imasu.", id: "Menelepon sambil berjalan." },
                { jp: "テレビを見ながら、ご飯を食べた。", romaji: "Terebi wo minagara, gohan wo tabeta.", id: "Makan sambil menonton TV." }
            ],
            note: "Kedua tindakan harus dilakukan oleh subjek yang SAMA. ながら tidak bisa digunakan jika subjeknya berbeda. Berbeda dengan あいだ/うちに yang bisa digunakan dengan subjek berbeda.",
            tags: ["bersamaan", "sambil", "N4"]
        },
        {
            id: "shi",
            particle: "し",
            romaji: "shi",
            category: "Setsuzokujoshi",
            meaning: "Dan juga ~ / Selain itu ~",
            desc: "Menyebutkan beberapa alasan atau kondisi yang mendukung satu kesimpulan.",
            formula: "Klausa A (bentuk biasa) + し + Klausa B + し",
            explanation: "し (shi) digunakan untuk menyebutkan dua atau lebih alasan/kondisi yang mendukung satu kesimpulan. Berbeda dengan て yang menyatakan urutan, し menyatakan bahwa semua kondisi yang disebutkan sama-sama berlaku dan mendukung pendapat pembicara. Sering digunakan untuk memberikan alasan berganda.",
            examples: [
                { jp: "この店は安いし、おいしいし、また来たいです。", romaji: "Kono mise wa yasui shi, oishii shi, mata kitai desu.", id: "Restoran ini murah, enak lagi, saya ingin datang lagi." },
                { jp: "天気もいいし、暇だし、散歩しようか。", romaji: "Tenki mo ii shi, hima da shi, sanpo shiyou ka.", id: "Cuaca bagus, tidak ada kesibukan pula, bagaimana kalau jalan-jalan?" },
                { jp: "頭も痛いし、熱もあるし、休みます。", romaji: "Atama mo itai shi, netsu mo aru shi, yasumimasu.", id: "Kepala sakit, demam pula, jadi saya istirahat." }
            ],
            note: "し digunakan untuk menambahkan beberapa alasan/kondisi secara kumulatif. Biasanya diulang: AだしBだし (A, dan juga B, dan...). Berbeda dengan て yang menyatakan urutan kronologis.",
            tags: ["alasan berganda", "selain itu", "N4"]
        },
        {
            id: "tari",
            particle: "たり",
            romaji: "tari",
            category: "Setsuzokujoshi",
            meaning: "Kadang ~ kadang ~ (menyebutkan contoh tindakan)",
            desc: "Menyebutkan beberapa tindakan sebagai contoh dari serangkaian aktivitas yang tidak disebutkan semua.",
            formula: "Kata Kerja (bentuk た) + り + Kata Kerja (bentuk た) + り + する",
            explanation: "たり〜たりする (tari tari suru) digunakan untuk menyebutkan beberapa tindakan sebagai contoh dari aktivitas yang dilakukan. Menyiratkan bahwa masih ada tindakan lain yang tidak disebutkan. Selalu diakhiri dengan する atau versi konjugasinya.",
            examples: [
                { jp: "週末は映画を見たり、買い物をしたりします。", romaji: "Shuumatsu wa eiga wo mitari, kaimono wo shitari shimasu.", id: "Di akhir pekan, kadang menonton film, kadang belanja (dan lain-lain)." },
                { jp: "子供は泣いたり笑ったりしている。", romaji: "Kodomo wa naitari warattari shite iru.", id: "Anak itu kadang menangis, kadang tertawa." },
                { jp: "暑かったり寒かったりして、体に悪い。", romaji: "Atsukattari samukattari shite, karada ni warui.", id: "Kadang panas, kadang dingin, tidak baik untuk kesehatan." }
            ],
            note: "たり selalu digunakan dalam pasangan atau kelompok dan diakhiri する. Digunakan untuk menyebutkan CONTOH, bukan urutan lengkap. Berbeda dengan て yang menyatakan urutan lengkap semua tindakan.",
            tags: ["contoh tindakan", "kadang-kadang", "N4"]
        }
    ],
    fukujoshi: [
        {
            id: "mo",
            particle: "も",
            romaji: "mo",
            category: "Fukujoshi",
            meaning: "Juga / Pun / Bahkan",
            desc: "Menyatakan penambahan atau inklusivitas. Menunjukkan bahwa sesuatu juga berlaku, atau bahkan hal yang tidak terduga pun berlaku.",
            formula: "Kata Benda/Frasa + も",
            explanation: "も (mo) menggantikan は, が, atau を untuk menyatakan 'juga'. Jika digunakan dalam kalimat negatif: 〜も〜ない = juga tidak / bahkan tidak. Kombinasi: 〜も〜も = baik A maupun B. Dalam jumlah besar: 百人も来た (bahkan 100 orang datang — lebih dari yang diharapkan).",
            examples: [
                { jp: "私も行きます。", romaji: "Watashi mo ikimasu.", id: "Saya juga pergi." },
                { jp: "日本語も英語も話せます。", romaji: "Nihongo mo Eigo mo hanasemasu.", id: "Bisa berbicara bahasa Jepang maupun Inggris." },
                { jp: "何も食べていません。", romaji: "Nani mo tabete imasen.", id: "Saya belum makan apa pun." }
            ],
            note: "も menggantikan は/が/を. Tetapi jika digunakan dengan partikel lain (に/で/へ/から/より), も ditambahkan setelahnya: 東京にも行った (juga pergi ke Tokyo).",
            tags: ["juga", "inklusif", "N5"]
        },
        {
            id: "koso",
            particle: "こそ",
            romaji: "koso",
            category: "Fukujoshi",
            meaning: "Justru ~ / Inilah yang ~ (penekanan kuat)",
            desc: "Memberikan penekanan kuat, menyatakan bahwa hal tersebutlah yang paling penting atau yang sesungguhnya.",
            formula: "Kata Benda/Frasa + こそ",
            explanation: "こそ (koso) memberikan penekanan kuat pada kata yang mendahuluinya, menyatakan 'justru inilah yang...' atau 'inilah yang sebenarnya'. Sering digunakan dalam ungkapan khas seperti ありがとうこそ (justru sayalah yang berterima kasih) dan こちらこそ (justru dari pihak saya).",
            examples: [
                { jp: "今年こそ、日本語を上達させます。", romaji: "Kotoshi koso, nihongo wo joutatsu sasemasu.", id: "Justru tahun ini saya akan meningkatkan bahasa Jepang (sungguh-sungguh)." },
                { jp: "これこそが本物の友情だ。", romaji: "Kore koso ga honmono no yuujou da.", id: "Justru inilah persahabatan sejati." },
                { jp: "こちらこそ、よろしくお願いします。", romaji: "Kochira koso, yoroshiku onegai shimasu.", id: "Justru dari pihak saya, saya mohon kerja samanya." }
            ],
            note: "こそ menggantikan は/が/を. Sering digunakan dalam konteks motivasi atau ketegasan: 今度こそ (kali ini pasti/justru kali ini). Ungkapan umum: こちらこそ (justru dari saya).",
            tags: ["penekanan", "justru", "N4"]
        },
        {
            id: "sae",
            particle: "さえ",
            romaji: "sae",
            category: "Fukujoshi",
            meaning: "Bahkan ~ pun / Asal ~ saja",
            desc: "Menyatakan 'bahkan hal yang tidak terduga pun' (di atas harapan) atau sebagai syarat minimal: 'asal... saja'.",
            formula: "Kata Benda/Frasa + さえ / さえ〜ば (asal...saja)",
            explanation: "さえ (sae) memiliki dua fungsi: (1) 'Bahkan ~ pun': menunjukkan hal yang mengejutkan atau di luar ekspektasi (positif maupun negatif). (2) さえ〜ば = 'asal ~ saja sudah cukup': menyatakan syarat minimal yang jika terpenuhi, sudah cukup.",
            examples: [
                { jp: "子供でさえ知っている。", romaji: "Kodomo de sae shitte iru.", id: "Bahkan anak kecil pun tahu." },
                { jp: "あなたさえいれば、何もいらない。", romaji: "Anata sae ireba, nani mo iranai.", id: "Asal ada kamu, tidak butuh apa-apa lagi." },
                { jp: "お金さえあれば、何でも買える。", romaji: "Okane sae areba, nandemo kaeru.", id: "Asal ada uang, apa pun bisa dibeli." }
            ],
            note: "さえ vs でも: さえ menekankan hal yang ekstrem/tidak terduga (lebih kuat), でも menekankan inklusivitas biasa. さえ〜ば adalah pola kondisional: 'asal kondisi minimal ini terpenuhi'.",
            tags: ["bahkan", "syarat minimal", "N3"]
        },
        {
            id: "datte",
            particle: "だって",
            romaji: "datte",
            category: "Fukujoshi",
            meaning: "Bahkan ~ pun (kasual) / Tapi / Karena",
            desc: "Versi kasual dari でも, menyatakan inklusivitas atau digunakan sebagai alasan (kasual).",
            formula: "Kata Benda + だって / Awal kalimat: だって + alasan",
            explanation: "だって (datte) memiliki beberapa fungsi: (1) Sebagai fukujoshi: 子供だって = bahkan anak pun (setara でも, tapi lebih kasual). (2) Di awal kalimat sebagai setsuzokujoshi: 'Tapi...' atau 'Karena...' (alasan sebagai pembelaan diri). Digunakan dalam percakapan informal.",
            examples: [
                { jp: "子供だってできる。", romaji: "Kodomo datte dekiru.", id: "Bahkan anak pun bisa." },
                { jp: "だって、知らなかったんだもん。", romaji: "Datte, shiranakatta n da mon.", id: "Tapi (karena) saya tidak tahu." },
                { jp: "誰だって間違えることがある。", romaji: "Dare datte machigaeru koto ga aru.", id: "Siapa pun bisa membuat kesalahan." }
            ],
            note: "だって sangat kasual. Hindari dalam situasi formal. Di awal kalimat, だって terdengar seperti pembelaan diri atau alasan yang agak kekanakan.",
            tags: ["bahkan", "kasual", "alasan", "N3"]
        },
        {
            id: "made",
            particle: "まで",
            romaji: "made",
            category: "Fukujoshi",
            meaning: "Sampai / Hingga",
            desc: "Menyatakan batas akhir waktu, tempat, atau jumlah. Juga menyatakan 'sampai sejauh' atau 'bahkan hingga'.",
            formula: "Waktu/Tempat + まで / まで + に (batas waktu)",
            explanation: "まで (made) menyatakan: (1) Batas waktu: 6時まで (sampai jam 6). (2) Batas tempat: 東京まで (sampai Tokyo). (3) Inklusivitas ekstrem: 子供まで知っている (bahkan anak-anak pun tahu). Pola まで に = sebelum batas waktu: 3時までに (sebelum jam 3 / paling lambat jam 3).",
            examples: [
                { jp: "6時まで働きます。", romaji: "Rokuji made hatarakimasu.", id: "Bekerja sampai jam 6." },
                { jp: "東京から大阪まで新幹線で行きます。", romaji: "Tokyo kara Osaka made Shinkansen de ikimasu.", id: "Pergi dari Tokyo ke Osaka dengan Shinkansen." },
                { jp: "3時までに来てください。", romaji: "Sanji made ni kite kudasai.", id: "Tolong datang sebelum jam 3." }
            ],
            note: "まで (sampai/hingga) sering berpasangan dengan から (dari): 月曜日から金曜日まで (dari Senin sampai Jumat). まで に = batas waktu (deadline): sebelum/paling lambat saat itu.",
            tags: ["sampai", "batas waktu", "N5"]
        },
        {
            id: "bakari2",
            particle: "ばかり",
            romaji: "bakari",
            category: "Fukujoshi",
            meaning: "Hanya ~ / Melulu ~ / Sekitar (jumlah)",
            desc: "Menyatakan bahwa hanya itu yang dilakukan/ada (sering dengan nuansa berlebihan), atau menyatakan jumlah perkiraan.",
            formula: "Kata Kerja (kamus/ている) + ばかり / Kata Benda + ばかり / Angka + ばかり",
            explanation: "ばかり (bakari) memiliki beberapa makna: (1) 'Hanya/melulu': ゲームばかりしている (hanya main game terus). (2) Jumlah perkiraan: 30人ばかり (sekitar 30 orang). (3) たばかり (baru saja): lihat pola tata bahasa N4. Saat menyatakan 'hanya melulu', sering berkesan negatif — bahwa seharusnya melakukan hal lain juga.",
            examples: [
                { jp: "ゲームばかりしていないで、勉強しなさい。", romaji: "Geemu bakari shite inai de, benkyou shinasai.", id: "Jangan hanya main game terus, belajarlah!" },
                { jp: "甘いものばかり食べています。", romaji: "Amai mono bakari tabete imasu.", id: "Hanya makan makanan manis terus." },
                { jp: "30人ばかり集まった。", romaji: "Sanjuunin bakari atsumatta.", id: "Sekitar 30 orang berkumpul." }
            ],
            note: "Bedakan ばかり (hanya/melulu) dengan だけ (hanya, netral). ばかり menyiratkan 'terlalu banyak' atau 'berlebihan', sedangkan だけ hanya menyatakan 'tidak lebih dari itu'.",
            tags: ["hanya", "melulu", "sekitar", "N4"]
        },
        {
            id: "dake",
            particle: "だけ",
            romaji: "dake",
            category: "Fukujoshi",
            meaning: "Hanya ~ / Saja (batas, netral)",
            desc: "Menyatakan batas atau pembatasan: hanya itu, tidak lebih dari itu. Nuansanya netral.",
            formula: "Kata Benda/Kata Kerja (bentuk kamus) + だけ",
            explanation: "だけ (dake) menyatakan batas yang tegas dan netral: 'hanya ini, tidak lebih'. Berbeda dengan ばかり yang berkesan negatif (berlebihan), だけ bersifat netral dan hanya menyatakan keterbatasan. Bisa digabung dengan partikel lain: だけで (hanya dengan), だけに (justru karena).",
            examples: [
                { jp: "一つだけ質問があります。", romaji: "Hitotsu dake shitsumon ga arimasu.", id: "Saya hanya punya satu pertanyaan." },
                { jp: "少しだけ食べました。", romaji: "Sukoshi dake tabemashita.", id: "Saya hanya makan sedikit." },
                { jp: "見るだけで、買いません。", romaji: "Miru dake de, kaimasen.", id: "Hanya melihat-lihat saja, tidak membeli." }
            ],
            note: "だけ vs しか: だけ (hanya, netral, bisa positif/negatif): 一つだけあります (ada satu saja). しか (hanya, negatif, selalu dengan negatif): 一つしかない (hanya ada satu — menyiratkan kurang).",
            tags: ["hanya", "batas", "netral", "N4"]
        },
        {
            id: "hodo",
            particle: "ほど",
            romaji: "hodo",
            category: "Fukujoshi",
            meaning: "Sejauh ~ / Sehingga ~ / Semakin ~ semakin ~",
            desc: "Menyatakan derajat/tingkatan, perbandingan negatif, atau pola 'semakin ~ semakin ~'.",
            formula: "Kata Benda + ほど / 〜ば〜ほど (semakin ~ semakin ~) / A + ほど + B + ない (A tidak se-B)",
            explanation: "ほど (hodo) menyatakan: (1) Derajat/tingkatan: 泣くほど笑った (tertawa sampai menangis). (2) Perbandingan negatif: AはBほど〜ない (A tidak se-B). (3) Pola semakin-semakin: 〜ば〜ほど (semakin..., semakin...). (4) Perkiraan: 3日ほど (sekitar 3 hari).",
            examples: [
                { jp: "泣くほど笑いました。", romaji: "Naku hodo waraimashita.", id: "Tertawa sampai menangis." },
                { jp: "東京ほど大きくない。", romaji: "Tokyo hodo ookiku nai.", id: "Tidak sebesar Tokyo." },
                { jp: "勉強すればするほど、上手になります。", romaji: "Benkyou sureba suru hodo, jouzu ni narimasu.", id: "Semakin banyak belajar, semakin mahir." }
            ],
            note: "Pola perbandingan negatif: AはBほど〜ない (A tidak se-B). Berbeda dari より: AはBより〜 (A lebih ~ dari B). ほど juga bisa menyatakan perkiraan jumlah: 一時間ほど (sekitar satu jam).",
            tags: ["derajat", "perbandingan", "semakin", "N4"]
        },
        {
            id: "kurai",
            particle: "くらい",
            romaji: "kurai / gurai",
            category: "Fukujoshi",
            meaning: "Sekitar ~ / Kira-kira / Seburuk ~",
            desc: "Menyatakan perkiraan jumlah/derajat, atau menyatakan hal minimal yang dianggap biasa/wajar.",
            formula: "Angka/Jumlah + くらい / Kata Benda + くらい",
            explanation: "くらい/ぐらい (kurai/gurai) digunakan untuk: (1) Perkiraan jumlah: 3時間くらい (sekitar 3 jam). (2) Perkiraan derajat minimal: これくらいはできる (hal sepele ini pun bisa dilakukan). (3) Meremehkan: 子供くらいのことができない (tidak bisa melakukan hal sekelas anak kecil). くらい dan ぐらい dapat digunakan saling bergantian.",
            examples: [
                { jp: "10分くらい待ってください。", romaji: "Juppun kurai matte kudasai.", id: "Tolong tunggu sekitar 10 menit." },
                { jp: "週に3回ぐらい運動します。", romaji: "Shuu ni sankai gurai undou shimasu.", id: "Berolahraga sekitar 3 kali seminggu." },
                { jp: "それくらい知っている。", romaji: "Sore kurai shitte iru.", id: "Hal itu (yang sepele itu) saya tahu." }
            ],
            note: "くらい dan ぐらい adalah bentuk yang sama dan bisa dipertukarkan. Bedakan dengan ほど dalam perbandingan: 東京ほど (sebesar Tokyo — untuk perbandingan negatif) vs 東京くらい (sekitar sebesar Tokyo — perkiraan).",
            tags: ["sekitar", "perkiraan", "N4"]
        },
        {
            id: "shika",
            particle: "しか",
            romaji: "shika",
            category: "Fukujoshi",
            meaning: "Hanya ~ (dengan konotasi kurang/tidak cukup)",
            desc: "Menyatakan 'hanya' dengan nuansa kurang atau tidak cukup. SELALU digunakan dengan predikat negatif.",
            formula: "Kata Benda/Angka + しか + predikat NEGATIF",
            explanation: "しか (shika) SELALU digunakan dengan predikat negatif (ない, ません, いない, いません, dll.). Maknanya adalah 'hanya... (saja), tidak lebih dari itu' — menyiratkan kekurangan atau keterbatasan. Berbeda dengan だけ yang netral, しか selalu bernuansa kekurangan.",
            examples: [
                { jp: "お金が百円しかありません。", romaji: "Okane ga hyakuen shika arimasen.", id: "Uangnya hanya ada 100 yen (kurang)." },
                { jp: "日本語しか話せません。", romaji: "Nihongo shika hanasemasen.", id: "Hanya bisa berbicara bahasa Jepang (saja)." },
                { jp: "5分しか時間がない。", romaji: "Gofun shika jikan ga nai.", id: "Hanya punya waktu 5 menit." }
            ],
            note: "WAJIB: しか + negatif. Tidak ada kalimat positif dengan しか! Bandingkan: 一つだけある (ada satu saja — netral) vs 一つしかない (hanya ada satu — kurang/tidak cukup).",
            tags: ["hanya", "kurang", "negatif", "N4"]
        },
        {
            id: "nado",
            particle: "など",
            romaji: "nado",
            category: "Fukujoshi",
            meaning: "Dan lain-lain / Seperti / Dan sebagainya",
            desc: "Menyatakan bahwa item yang disebutkan hanyalah contoh dari daftar yang lebih besar.",
            formula: "Kata Benda (+ や/と) + など",
            explanation: "など (nado) digunakan setelah menyebutkan satu atau beberapa item untuk menyatakan 'dan lain-lain' atau 'misalnya'. Sering dikombinasikan dengan や: AやBなど = A, B, dan lain-lain. Juga bisa digunakan untuk merendah: 私などにはわかりません (hal seperti ini saya tidak mengerti — merendahkan diri).",
            examples: [
                { jp: "果物はりんごやバナナなどが好きです。", romaji: "Kudamono wa ringo ya banana nado ga suki desu.", id: "Saya suka buah-buahan seperti apel, pisang, dan lain-lain." },
                { jp: "日本語や英語などを勉強しています。", romaji: "Nihongo ya Eigo nado wo benkyou shite imasu.", id: "Saya belajar bahasa Jepang, Inggris, dan lain-lain." },
                { jp: "休みの日は映画を見たり、読書などをします。", romaji: "Yasumi no hi wa eiga wo mitari, dokusho nado wo shimasu.", id: "Di hari libur, menonton film, membaca, dan sebagainya." }
            ],
            note: "など dapat digunakan setelah satu kata benda saja (berbeda dengan や yang butuh minimal 2). など bisa ditulis/diucapkan as なんか (kasual): 私なんかにはわからない.",
            tags: ["dan lain-lain", "contoh", "N4"]
        }
    ],
    shuujoshi: [
        {
            id: "ka",
            particle: "か",
            romaji: "ka",
            category: "Shuujoshi",
            meaning: "Penanda kalimat tanya",
            desc: "Diletakkan di akhir kalimat untuk membentuk kalimat tanya. Intonasi naik untuk pertanyaan ya/tidak, turun untuk pertanyaan informasi.",
            formula: "Kalimat (bentuk sopan/biasa) + か",
            explanation: "か (ka) adalah penanda kalimat tanya yang paling dasar. Dalam bahasa sopan (ます/です), か selalu digunakan untuk pertanyaan. Dalam bahasa biasa (kasual), か di akhir kalimat dengan intonasi turun bisa terdengar agak kasar atau langsung.",
            examples: [
                { jp: "日本語が話せますか。", romaji: "Nihongo ga hanasemasu ka.", id: "Apakah Anda bisa berbicara bahasa Jepang?" },
                { jp: "どこへ行きますか。", romaji: "Doko e ikimasu ka.", id: "Ke mana Anda pergi?" },
                { jp: "これは本ですか、雑誌ですか。", romaji: "Kore wa hon desu ka, zasshi desu ka.", id: "Ini buku atau majalah?" }
            ],
            note: "Dalam bahasa tulis formal, か di akhir pertanyaan tidak diikuti tanda tanya (?). Dalam percakapan kasual, pertanyaan bisa dibentuk hanya dengan intonasi naik tanpa か: 行く？ (Pergi?)",
            tags: ["tanya", "dasar", "N5"]
        },
        {
            id: "na",
            particle: "な",
            romaji: "na / naa",
            category: "Shuujoshi",
            meaning: "Perasaan hati / Seruan emosi (monolog)",
            desc: "Mengekspresikan perasaan, kekaguman, atau harapan dalam monolog atau bicara sendiri.",
            formula: "Kalimat (bentuk biasa) + な/なあ",
            explanation: "な/なあ (na/naa) digunakan untuk mengekspresikan perasaan seperti kagum, nostalgia, harapan, atau penghayatan secara emosional — terutama saat berbicara sendiri atau setengah berbicara kepada orang lain. なあ sering menyertai harapan: 〜たいなあ (ingin sekali...). Perhatian: な setelah kata kerja (bentuk kamus) dalam bahasa laki-laki = larangan!",
            examples: [
                { jp: "いい天気だなあ。", romaji: "Ii tenki da naa.", id: "Cuacanya bagus ya... (seruan kagum)" },
                { jp: "日本へ行きたいなあ。", romaji: "Nihon e ikitai naa.", id: "Ingin sekali pergi ke Jepang..." },
                { jp: "もう夜だな。", romaji: "Mou yoru da na.", id: "Sudah malam ya..." }
            ],
            note: "HATI-HATI: な setelah kata kerja bentuk kamus = LARANGAN (bahasa maskulin/kasar): 行くな！ (Jangan pergi!). な di sini berbeda dengan なあ yang menyatakan perasaan.",
            tags: ["perasaan", "seruan", "monolog", "N4"]
        },
        {
            id: "ne",
            particle: "ね",
            romaji: "ne / nee",
            category: "Shuujoshi",
            meaning: "Ya kan? / Bukan? (mencari kesepakatan/konfirmasi)",
            desc: "Digunakan untuk mencari persetujuan, konfirmasi, atau berbagi perasaan dengan lawan bicara.",
            formula: "Kalimat (bentuk sopan/biasa) + ね/ねえ",
            explanation: "ね (ne) digunakan untuk: (1) Mencari konfirmasi: いいですね (bagus ya, setuju?). (2) Berbagi perasaan: 寒いですね (dingin ya — mengajak setuju). (3) Melembutkan pernyataan: 少し難しいですね (agak sulit ya). ねえ lebih panjang dan lebih emosional. Juga digunakan untuk menarik perhatian: ねえ、聞いて (hei, dengarkan).",
            examples: [
                { jp: "今日はいい天気ですね。", romaji: "Kyou wa ii tenki desu ne.", id: "Hari ini cuacanya bagus ya (bukan?)." },
                { jp: "難しいですねえ。", romaji: "Muzukashii desu nee.", id: "Sulit sekali ya..." },
                { jp: "そうですね。", romaji: "Sou desu ne.", id: "Iya, betul ya. / Memang begitu ya." }
            ],
            note: "ね vs よ: ね = mencari persetujuan (informasi sudah diketahui/dibagi), よ = memberitahu informasi baru. そうですね (ya, betul) = setuju. そうですよ (iya, memang begitu) = memberitahu.",
            tags: ["konfirmasi", "persetujuan", "berbagi", "N5"]
        },
        {
            id: "yo",
            particle: "よ",
            romaji: "yo",
            category: "Shuujoshi",
            meaning: "Lho / Kok / Memberitahu informasi baru",
            desc: "Memberitahu lawan bicara tentang sesuatu yang belum mereka ketahui, atau menegaskan pendapat pembicara.",
            formula: "Kalimat (bentuk sopan/biasa) + よ",
            explanation: "よ (yo) digunakan untuk: (1) Memberitahu informasi baru: これは美味しいですよ (ini enak lho). (2) Meyakinkan: 大丈夫ですよ (oke kok). (3) Menegaskan: だから言ったじゃないですか (kan sudah saya bilang). Nada よ bisa terdengar menegaskan atau agak memaksa jika berlebihan.",
            examples: [
                { jp: "それは間違いですよ。", romaji: "Sore wa machigai desu yo.", id: "Itu salah lho." },
                { jp: "もうすぐ着きますよ。", romaji: "Mousugu tsukimasu yo.", id: "Sebentar lagi sampai kok." },
                { jp: "大丈夫ですよ。心配しないで。", romaji: "Daijoubu desu yo. Shinpai shinaide.", id: "Tidak apa-apa kok. Jangan khawatir." }
            ],
            note: "よ + ね (よね) = memberitahu sambil mencari konfirmasi: 明日休みですよね (besok libur kan?). Hindari よ yang berlebihan karena bisa terdengar memaksa atau kurang sopan.",
            tags: ["memberitahu", "informasi baru", "menegaskan", "N5"]
        },
        {
            id: "zo",
            particle: "ぞ",
            romaji: "zo",
            category: "Shuujoshi",
            meaning: "Lho! / Ayo! (maskulin, tegas)",
            desc: "Versi maskulin dan tegas dari よ. Digunakan untuk menegaskan atau memperingatkan dengan nada kuat.",
            formula: "Kalimat (bentuk biasa) + ぞ",
            explanation: "ぞ (zo) adalah partikel akhir maskulin yang lebih kuat dan tegas dari よ. Digunakan oleh laki-laki dalam percakapan kasual untuk menegaskan sesuatu dengan penuh keyakinan, memperingatkan, atau memberi semangat. Terdengar kasar jika digunakan oleh perempuan atau dalam situasi formal.",
            examples: [
                { jp: "行くぞ！", romaji: "Iku zo!", id: "Ayo kita pergi!" },
                { jp: "絶対に負けないぞ！", romaji: "Zettai ni makenai zo!", id: "Aku pasti tidak akan kalah!" },
                { jp: "もう時間がないぞ。", romaji: "Mou jikan ga nai zo.", id: "Sudah tidak ada waktu lagi lho!" }
            ],
            note: "ぞ adalah maskulin dan kasual. Tidak pantas digunakan oleh perempuan atau dalam situasi formal. Sering digunakan untuk memberi semangat diri sendiri atau memperingatkan orang lain dengan tegas.",
            tags: ["tegas", "maskulin", "kasual", "N4"]
        },
        {
            id: "kana",
            particle: "かな",
            romaji: "kana",
            category: "Shuujoshi",
            meaning: "Ya kira-kira... / Entahlah... (keraguan/pertanyaan pada diri sendiri)",
            desc: "Mengungkapkan keraguan, pertanyaan pada diri sendiri, atau harapan yang tidak pasti.",
            formula: "Kalimat (bentuk biasa) + かな",
            explanation: "かな (kana) digunakan untuk mengungkapkan pertanyaan atau keraguan dalam hati — seperti berbicara kepada diri sendiri. Bisa menyatakan harapan yang tidak pasti: 〜かな (ya kira-kira begitu ya). Juga digunakan saat mengajukan pertanyaan dengan cara yang lembut dan tidak langsung.",
            examples: [
                { jp: "もう来たかな。", romaji: "Mou kita kana.", id: "Ya kira-kira sudah datang belum ya..." },
                { jp: "明日、晴れるかな。", romaji: "Ashita, hareru kana.", id: "Besok cerah tidak ya..." },
                { jp: "これでいいかな。", romaji: "Kore de ii kana.", id: "Seperti ini sudah cukup ya kira-kira..." }
            ],
            note: "かな lebih lembut dan tidak langsung dari か. Keduanya bisa menanyakan informasi, tapi かな lebih ke monolog/pertanyaan pada diri sendiri. Digunakan baik oleh laki-laki maupun perempuan.",
            tags: ["ragu", "pertanyaan diri", "harapan", "N4"]
        },
        {
            id: "kashira",
            particle: "かしら",
            romaji: "kashira",
            category: "Shuujoshi",
            meaning: "Ya kira-kira... / Entah... (perempuan, lembut)",
            desc: "Versi feminin dari かな. Mengungkapkan keraguan atau pertanyaan pada diri sendiri dengan nuansa lembut.",
            formula: "Kalimat (bentuk biasa) + かしら",
            explanation: "かしら (kashira) memiliki makna yang sama dengan かな (keraguan, pertanyaan pada diri sendiri), tetapi lebih khas perempuan dan berkesan lembut. Dalam anime dan manga, sering digunakan oleh karakter perempuan yang anggun atau berwibawa.",
            examples: [
                { jp: "彼は来るかしら。", romaji: "Kare wa kuru kashira.", id: "Apakah dia akan datang ya..." },
                { jp: "もう少し大きければよかったかしら。", romaji: "Mou sukoshi ookikereba yokatta kashira.", id: "Kalau sedikit lebih besar, mungkin lebih baik ya..." },
                { jp: "これでいいかしら。", romaji: "Kore de ii kashira.", id: "Seperti ini sudah cukup baikkah..." }
            ],
            note: "かしら digunakan terutama oleh perempuan (lebih tua atau berkesan feminin). Laki-laki menggunakan かな. Dalam bahasa sehari-hari modern, かな mulai digunakan oleh semua gender.",
            tags: ["ragu", "feminin", "pertanyaan diri", "N4"]
        },
        {
            id: "sa",
            particle: "さ",
            romaji: "sa",
            category: "Shuujoshi",
            meaning: "Lho, kan / Memang (santai, meremehkan)",
            desc: "Digunakan secara kasual untuk menyatakan sesuatu yang dianggap sudah jelas atau biasa saja, sering dengan nada meremehkan atau cuek.",
            formula: "Kalimat (bentuk biasa) + さ",
            explanation: "さ (sa) di akhir kalimat digunakan dalam percakapan kasual untuk: (1) Menyatakan sesuatu yang dianggap sudah jelas: そりゃそうさ (ya iyalah). (2) Melemahkan atau meremehkan: 大したことないさ (biasa saja kok). (3) Nada cuek atau santai. Lebih khas laki-laki, tapi perempuan modern juga menggunakannya.",
            examples: [
                { jp: "そりゃそうさ。", romaji: "Sorya sou sa.", id: "Ya iyalah / Memang sudah begitu." },
                { jp: "大丈夫さ、心配するな。", romaji: "Daijoubu sa, shinpai suru na.", id: "Tidak apa-apa kok, jangan khawatir." },
                { jp: "知ってるさ、そんなこと。", romaji: "Shitteru sa, sonna koto.", id: "Tahu kok, hal seperti itu." }
            ],
            note: "さ di akhir kalimat kasual berbeda dengan さ di tengah kalimat yang berfungsi seperti 'uh' atau jeda bicara: だからさ〜 (makanya gitu lho...). Hindari dalam situasi formal.",
            tags: ["kasual", "santai", "meremehkan", "N4"]
        },
        {
            id: "kke",
            particle: "っけ",
            romaji: "kke",
            category: "Shuujoshi",
            meaning: "Apa ya...? / Iya ya... (mencoba mengingat)",
            desc: "Digunakan saat pembicara sedang mencoba mengingat sesuatu yang pernah diketahui tapi sudah lupa.",
            formula: "Kalimat (bentuk biasa/lampau) + っけ",
            explanation: "っけ (kke) digunakan saat pembicara sedang mencoba mengingat informasi yang sudah pernah diketahui tapi sementara lupa. Menandakan usaha mengingat kembali. Sering digunakan dalam pertanyaan kepada diri sendiri atau kepada orang yang kemungkinan tahu jawabannya.",
            examples: [
                { jp: "彼の名前、何だっけ？", romaji: "Kare no namae, nan dakke?", id: "Namanya siapa ya...? (mencoba ingat)" },
                { jp: "明日は何時からだっけ？", romaji: "Ashita wa nanji kara dakke?", id: "Besok mulai jam berapa ya...?" },
                { jp: "あの映画、もう見たっけ？", romaji: "Ano eiga, mou mitakke?", id: "Film itu, sudah pernah saya tonton ya...?" }
            ],
            note: "っけ menandakan mencoba mengingat — bukan bertanya untuk pertama kali. Digunakan untuk informasi yang seharusnya sudah diketahui. Contoh: 名前はなんですか (bertanya nama untuk pertama kali) vs 名前、なんだっけ (lupa namanya, mencoba ingat).",
            tags: ["mengingat", "lupa", "N4"]
        },
        {
            id: "tomo",
            particle: "とも",
            romaji: "tomo",
            category: "Shuujoshi",
            meaning: "Tentu saja / Sudah pasti (afirmasi kuat)",
            desc: "Menegaskan dengan kuat bahwa sesuatu sudah pasti atau sudah tentu demikian.",
            formula: "Kalimat (bentuk biasa/sopan) + とも",
            explanation: "とも (tomo) digunakan untuk menyatakan 'tentu saja', 'sudah pasti', atau 'tidak perlu diragukan lagi'. Merupakan bentuk afirmasi yang kuat. Sering digunakan dalam jawaban ya/tidak yang sangat yakin. Agak formal atau berwibawa dalam nada.",
            examples: [
                { jp: "もちろんですとも！", romaji: "Mochiron desu tomo!", id: "Tentu saja (sudah pasti)!" },
                { jp: "行くとも。", romaji: "Iku tomo.", id: "Tentu saja (saya) pergi." },
                { jp: "そうですとも。", romaji: "Sou desu tomo.", id: "Tentu saja demikian. / Sudah pasti begitu." }
            ],
            note: "とも memberikan kesan teguh dan yakin. Sering dikombinasikan dengan もちろん (tentu saja): もちろんとも. Agak lebih formal dibanding よ dan terdengar berwibawa.",
            tags: ["penegasan", "tentu saja", "N4"]
        },
        {
            id: "wa-shuujoshi",
            particle: "わ",
            romaji: "wa",
            category: "Shuujoshi",
            meaning: "Menyatakan perasaan halus / Lembut (feminin)",
            desc: "Digunakan di akhir kalimat untuk mengekspresikan perasaan atau pendapat dengan cara yang halus dan feminin.",
            formula: "Kalimat (bentuk biasa) + わ",
            explanation: "わ (wa) di akhir kalimat adalah partikel yang khas perempuan, memberikan nuansa lembut, halus, dan feminin pada pernyataan. Menyampaikan perasaan atau pendapat dengan cara yang lebih ekspresif. Kombinasi dengan よ: わよ (lebih tegas tapi tetap feminin). Kombinasi dengan ね: わね (mencari persetujuan dengan lembut).",
            examples: [
                { jp: "きれいだわ。", romaji: "Kirei da wa.", id: "Indah sekali ya... (ungkapan kagum, feminin)" },
                { jp: "私も行くわ。", romaji: "Watashi mo iku wa.", id: "Saya juga ikut. (lembut, feminin)" },
                { jp: "そうね、そうだわ。", romaji: "Sou ne, sou da wa.", id: "Ya betul, memang begitu ya." }
            ],
            note: "わ di akhir kalimat = partikel feminin (berbeda dari は yang dibaca wa sebagai topik). Laki-laki yang menggunakan わ akan terdengar sangat feminin atau teaterikan. Dalam Jepang modern, penggunaan ini semakin berkurang di kalangan anak muda.",
            tags: ["feminin", "perasaan", "halus", "N4"]
        },
        {
            id: "kai",
            particle: "かい",
            romaji: "kai",
            category: "Shuujoshi",
            meaning: "Apa? / Kan? (pertanyaan kasual, maskulin)",
            desc: "Versi kasual dan sedikit maskulin dari か. Digunakan untuk pertanyaan ya/tidak dalam situasi informal.",
            formula: "Kalimat (bentuk biasa) + かい",
            explanation: "かい (kai) adalah bentuk kasual dari か untuk pertanyaan, lebih khas laki-laki (terutama tua atau ayah kepada anak) tapi juga digunakan secara umum. Terdengar lebih lembut dari か dalam bahasa biasa dan tidak sekasar ぞ. Sering digunakan oleh orang yang lebih tua kepada yang lebih muda.",
            examples: [
                { jp: "元気かい？", romaji: "Genki kai?", id: "Bagaimana kabarmu? (kasual, akrab)" },
                { jp: "もう食べたかい？", romaji: "Mou tabeta kai?", id: "Sudah makan?" },
                { jp: "行くかい、行かないかい？", romaji: "Iku kai, ikanai kai?", id: "Mau pergi atau tidak?" }
            ],
            note: "かい lebih kasual dan akrab dari か. Sering digunakan orang tua atau oleh orang yang lebih senior. Perempuan biasanya menggunakan の sebagai gantinya untuk pertanyaan kasual: 行くの？ (Mau pergi?).",
            tags: ["pertanyaan", "kasual", "maskulin", "N4"]
        },
        {
            id: "ze",
            particle: "ぜ",
            romaji: "ze",
            category: "Shuujoshi",
            meaning: "Lho! / Ayo! (maskulin, kasual, penekanan)",
            desc: "Partikel akhir maskulin untuk menekankan atau memberi tahu dengan cara yang kasual dan percaya diri.",
            formula: "Kalimat (bentuk biasa) + ぜ",
            explanation: "ぜ (ze) adalah partikel akhir kalimat kasual dan maskulin, sedikit lebih lembut dari ぞ. Digunakan untuk: (1) Memberitahu dengan percaya diri: すごいぜ (keren lho). (2) Memberi semangat: 頑張るぜ (ayo semangat). Lebih santai dari ぞ tapi tetap khas maskulin.",
            examples: [
                { jp: "これ、本当においしいぜ。", romaji: "Kore, hontou ni oishii ze.", id: "Ini enak banget lho (percaya deh)." },
                { jp: "俺が勝つぜ！", romaji: "Ore ga katsu ze!", id: "Aku yang akan menang!" },
                { jp: "行くぜ、準備はいいか？", romaji: "Iku ze, junbi wa ii ka?", id: "Kita berangkat lho, sudah siap?" }
            ],
            note: "ぜ lebih santai dari ぞ, keduanya maskulin dan kasual. Hindari dalam situasi formal. Sering muncul dalam manga/anime untuk karakter maskulin yang percaya diri.",
            tags: ["tegas", "maskulin", "kasual", "N4"]
        }
    ]
};

// Export or expose variables to window object for web usage
if (typeof window !== 'undefined') {
    window.grammarData = grammarData;
    window.quizQuestions = quizQuestions;
    window.particleData = particleData;
}