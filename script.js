// GENİŞ DEPO: 5 FARKLI ZORLUK KADEMESİ 
// HER KADEMEDE BOLCA EŞLEŞTİRME VE DİYALOG CÜMLESİ

// 1. KELİME EŞLEŞTİRME VERİLERİ (Zenginleştirilmiş)
const matchingLevels = [
  // SEVİYE 1: Temel Objeler, Aile ve Selamlaşma
  [
    { ar: "كِتَاب", tr: "Kitap" },
    { ar: "قَلَم", tr: "Kalem" },
    { ar: "مَدْرَسَة", tr: "Okul" },
    { ar: "بَيْت", tr: "Ev" },
    { ar: "مَاء", tr: "Su" },
    { ar: "شَمْس", tr: "Güneş" },
    { ar: "قَمَر", tr: "Ay" },
    { ar: "بَاب", tr: "Kapı" },
    { ar: "أُمّ", tr: "Anne" },
    { ar: "أَب", tr: "Baba" },
    { ar: "أَخ", tr: "Erkek Kardeş" },
    { ar: "أُخْت", tr: "Kız Kardeş" }
  ],
  // SEVİYE 2: Günlük Yaşam, Zaman, Sayılar ve Eşyalar
  [
    { ar: "سَاعَة", tr: "Saat / Zaman" },
    { ar: "طَاوِلَة", tr: "Masa" },
    { ar: "نَافِذَة", tr: "Pencere" },
    { ar: "صَدِيق", tr: "Arkadaş" },
    { ar: "يَوْم", tr: "Gün" },
    { ar: "طَعَام", tr: "Yemek" },
    { ar: "حَافِلَة", tr: "Otobüs" },
    { ar: "سُوق", tr: "Çarşı" },
    { ar: "كُرْسِي", tr: "Sandalye" },
    { ar: "هَاتِف", tr: "Telefon" },
    { ar: "وَاحِد", tr: "Bir" },
    { ar: "اثْنَان", tr: "İki" },
    { ar: "ثَلَاثَة", tr: "Üç" },
    { ar: "أَرْبَعَة", tr: "Dört" }
  ],
  // SEVİYE 3: Mekanlar, Meslekler ve Sıfatlar
  [
    { ar: "جَمِيل", tr: "Güzel" },
    { ar: "سَرِيع", tr: "Hızlı" },
    { ar: "مُجْتَهِد", tr: "Çalışkan" },
    { ar: "مَسْجِد", tr: "Cami" },
    { ar: "مُسْتَشْفَى", tr: "Hastane" },
    { ar: "مَكْتَبَة", tr: "Kütüphane" },
    { ar: "مَطَار", tr: "Havalimanı" },
    { ar: "مُمَرِّضَة", tr: "Hemşire" },
    { ar: "طَبِيب", tr: "Doktor" },
    { ar: "مُعَلِّم", tr: "Öğretmen" },
    { ar: "كَبِير", tr: "Büyük" },
    { ar: "صَغِير", tr: "Küçük" },
    { ar: "قَرِيب", tr: "Yakın" },
    { ar: "بَعِيد", tr: "Uzak" }
  ],
  // SEVİYE 4: Yiyecekler, Renkler, Doğa ve Giysiler
  [
    { ar: "تُفَّاح", tr: "Elma" },
    { ar: "خُبْز", tr: "Ekmek" },
    { ar: "حَلِيب", tr: "Süt" },
    { ar: "شَارِع", tr: "Sokak" },
    { ar: "مَطْعَم", tr: "Restoran" },
    { ar: "قَمِيص", tr: "Gömlek" },
    { ar: "حَدِيقَة", tr: "Bahçe / Park" },
    { ar: "شَجَرَة", tr: "Ağaç" },
    { ar: "بَحْر", tr: "Deniz" },
    { ar: "جَبَل", tr: "Dağ" },
    { ar: "أَحْمَر", tr: "Kırmızı" },
    { ar: "أَزْرَق", tr: "Mavi" },
    { ar: "أَخْضَر", tr: "Yeşil" },
    { ar: "أَصْفَر", tr: "Sarı" }
  ],
  // SEVİYE 5: İleri Seviye, Fiiller ve Soyut Kavramlar
  [
    { ar: "سَعَادَة", tr: "Mutluluk" },
    { ar: "حُرِّيَّة", tr: "Özgürlük" },
    { ar: "مُسْتَقْبَل", tr: "Gelecek" },
    { ar: "تَارِيخ", tr: "Tarih" },
    { ar: "حَضَارَة", tr: "Medeniyet" },
    { ar: "عِلْم", tr: "İlim / Bilim" },
    { ar: "ثَقَافَة", tr: "Kültür" },
    { ar: "حَقِيقَة", tr: "Gerçek" },
    { ar: "حِكْمَة", tr: "Hikmet / Bilgelik" },
    { ar: "مَعْرِفَة", tr: "Bilgi" },
    { ar: "سَفَر", tr: "Yolculuk" },
    { ar: "نَجَاح", tr: "Başarı" },
    { ar: "صَبْر", tr: "Sabır" },
    { ar: "شُجَاعَة", tr: "Cesaret" }
  ]
];

// 2. CÜMLE TAMAMLAMA VERİLERİ (Çeşitlendirilmiş Çoğul Seviye)
const dialogueLevels = [
  // SEVİYE 1: Başlangıç ve Tanışma
  [
    {
      sentence: "مَرْحَبًا، أَنَا ___ إِلَى الْمَدْرَسَةِ.",
      blankWord: "أَذْهَبُ",
      options: ["أَذْهَبُ", "أَكُلُ", "أَنَامُ"],
      translation: "Merhaba, ben okula (gidiyorum)."
    },
    {
      sentence: "مَا اسْمُكَ؟ ___ أَحْمَدُ.",
      blankWord: "اسْمِي",
      options: ["اسْمِي", "هُوَ", "هِيَ"],
      translation: "Adın ne? (Benim adım) Ahmet."
    },
    {
      sentence: "كَيْفَ ___؟ أَنَا بِخَيْرٍ.",
      blankWord: "حَالُكَ",
      options: ["حَالُكَ", "اسْمُكَ", "بَيْتُكَ"],
      translation: "Nasılsın? Ben iyiyim."
    },
    {
      sentence: "أَنَا ___ فِي الْغُرْفَةِ.",
      blankWord: "أَجْلِسُ",
      options: ["أَجْلِسُ", "أَشْرَبُ", "أَطْبَخُ"],
      translation: "Ben odada (oturuyorum)."
    },
    {
      sentence: "أَهْلًا وَسَهْلًا! ___ بِكَ.",
      blankWord: "أَهْلًا",
      options: ["أَهْلًا", "شُكْرًا", "عَفْوًا"],
      translation: "Hoş geldin! Hoş (bulduk)."
    },
    {
      sentence: "مِنْ أَيْن أنتَ؟ أَنَا ___ تُرْكِيَا.",
      blankWord: "مِنْ",
      options: ["مِنْ", "إِلَى", "عَلَى"],
      translation: "Nerelisin? Ben Türkiye'den(im)."
    }
  ],
  // SEVİYE 2: Günlük Rutinler ve Eylemler
  [
    {
      sentence: "أَنَا ___ الْمَاءَ فِي الصَّبَاحِ.",
      blankWord: "أَشْرَبُ",
      options: ["أَشْرَبُ", "أَقْرَأُ", "أَكْتُبُ"],
      translation: "Ben sabahleyin su (içiyorum)."
    },
    {
      sentence: "الطَّالِبُ ___ الْكِتَابَ فِي الْمَكْتَبَةِ.",
      blankWord: "يَقْرَأُ",
      options: ["يَقْرَأُ", "يَسْبَحُ", "يَنَامُ"],
      translation: "Öğrenci kütüphanede kitap (okuyor)."
    },
    {
      sentence: "هَذِهِ ___ جَمِيلَةٌ جِدًّا.",
      blankWord: "سَيَّارَةٌ",
      options: ["سَيَّارَةٌ", "رَجُلٌ", "قَلَمٌ"],
      translation: "Bu çok güzel bir (araba)."
    },
    {
      sentence: "أُمِّي ___ الطَّعَامَ فِي الْمَطْبَخِ.",
      blankWord: "تَطْبَخُ",
      options: ["تَطْبَخُ", "تَكْتُبُ", "تَسُوقُ"],
      translation: "Annem mutfakta yemek (pişiriyor)."
    },
    {
      sentence: "نَحْنُ ___ الْكُرَةَ فِي الْمَلْعَبِ.",
      blankWord: "نَلْعَبُ",
      options: ["نَلْعَبُ", "نَشْرَبُ", "نَنَامُ"],
      translation: "Biz sahada top (oynuyoruz)."
    },
    {
      sentence: "هُوَ ___ الرِّسَالَةَ إِلَى صَدِيقِهِ.",
      blankWord: "يَكْتُبُ",
      options: ["يَكْتُبُ", "يَأْكُلُ", "يَغْسِلُ"],
      translation: "O arkadaşına mektup (yazıyor)."
    }
  ],
  // SEVİYE 3: Mekanlar, Meslekler ve Yönler
  [
    {
      sentence: "الطَّبِيبُ يَعْمَلُ فِي ___ الْكَبِيرِ.",
      blankWord: "الْمُسْتَشْفَى",
      options: ["الْمُسْتَشْفَى", "السُّوقِ", "الْمَلْعَبِ"],
      translation: "Doktor büyük (hastanede) çalışıyor."
    },
    {
      sentence: "الْأُسْتَاذُ يَشْرَحُ الدَّرْسَ ___ الطُّلاَّبِ.",
      blankWord: "أَمَامَ",
      options: ["أَمَامَ", "تَحْتَ", "فَوْقَ"],
      translation: "Öğretmen dersi öğrencilerin (önünde) anlatıyor."
    },
    {
      sentence: "الْمُسَافِرُ يَنْتَظِرُ الطَّائِرَةَ فِي ___.",
      blankWord: "الْمَطَارِ",
      options: ["الْمَطَارِ", "الْمَطْعَمِ", "الْحَدِيقَةِ"],
      translation: "Yolcu uçağı (havalimanında) bekliyor."
    },
    {
      sentence: "أَشْتَرِي الْخُضَارَ مِنَ ___.",
      blankWord: "السُّوقِ",
      options: ["السُّوقِ", "الْمَكْتَبِ", "الْمَسْجِدِ"],
      translation: "Sebzeleri (çarşıdan) satın alıyorum."
    },
    {
      sentence: "الْمُعَلِّمُ يَقِفُ ___ السَّبُّورَةِ.",
      blankWord: "بِجَانِبِ",
      options: ["بِجَانِبِ", "تَحْتَ", "فِي"],
      translation: "Öğretmen tahtanın (yanında) duruyor."
    },
    {
      sentence: "أَنَا آكُلُ الْغَدَاءَ فِي ___.",
      blankWord: "الْمَطْعَمِ",
      options: ["الْمَطْعَمِ", "الْمَطَارِ", "الْمَلْعَبِ"],
      translation: "Öğle yemeğini (restoranda) yiyorum."
    }
  ],
  // SEVİYE 4: Zaman, Hava Durumu ve Zamirler
  [
    {
      sentence: "الشَّمْسُ تَطْلُعُ فِي ___.",
      blankWord: "الصَّبَاحِ",
      options: ["الصَّبَاحِ", "اللَّيْلِ", "الْمَسَاءِ"],
      translation: "Güneş (sabah) doğar."
    },
    {
      sentence: "الْقِطَّةُ تَنَامُ ___ الطَّاوِلَةِ.",
      blankWord: "تَحْتَ",
      options: ["تَحْتَ", "فِي", "عَلَى"],
      translation: "Kedi masanın (altında) uyuyor."
    },
    {
      sentence: "نُصَلِّي الْجُمُعَةَ فِي ___.",
      blankWord: "الْمَسْجِدِ",
      options: ["الْمَسْجِدِ", "الْمَتْجَرِ", "الْمَطَارِ"],
      translation: "Cuma namazını (camide) kılıyoruz."
    },
    {
      sentence: "الْطَقْسُ الْيَوْمَ ___ جِدًّا.",
      blankWord: "حَارٌّ",
      options: ["حَارٌّ", "بَعِيدٌ", "طَوِيلٌ"],
      translation: "Bugün hava çok (sıcak)."
    },
    {
      sentence: "هَلْ عِنْدَكَ قَلَمٌ؟ نَعَمْ، ___ قَلَمٌ.",
      blankWord: "عِنْدِي",
      options: ["عِنْدِي", "عِنْدَكَ", "عِنْدَهُ"],
      translation: "Kalemin var mı? Evet, (benim var)."
    },
    {
      sentence: "الْمُعَلِّمَةُ ___ الدَّرْسَ بِوُضُوحٍ.",
      blankWord: "تَشْرَحُ",
      options: ["تَشْرَحُ", "تَسْبَحُ", "تَرْكُضُ"],
      translation: "Kadın öğretmen dersi açıkça (anlatıyor)."
    }
  ],
  // SEVİYE 5: İleri Dilbilgisi ve Atasözleri
  [
    {
      sentence: "الْعِلْمُ ___ مِنَ الْمَالِ.",
      blankWord: "أَفْضَلُ",
      options: ["أَفْضَلُ", "أَصْغَرُ", "أَقْصَرُ"],
      translation: "İlim maldan daha (üstündür)."
    },
    {
      sentence: "يَجِبُ عَلَيْنَا أَنْ ___ الْحَقِيقَةَ دَائِمًا.",
      blankWord: "نَقُولَ",
      options: ["نَقُولَ", "نَأْكُلَ", "نَنَامَ"],
      translation: "Daima gerçeği (söylememiz) gerekir."
    },
    {
      sentence: "الْوَقْتُ كَالْسَّيْفِ إِنْ لَمْ تَقْطَعْهُ ___.",
      blankWord: "قَطَعَكَ",
      options: ["قَطَعَكَ", "نَصَرَكَ", "كَتَبَكَ"],
      translation: "Zaman kılıç gibidir, sen onu kesmezsen (o seni keser)."
    },
    {
      sentence: "مَنْ جَدَّ ___.",
      blankWord: "وَجَدَ",
      options: ["وَجَدَ", "ذَهَبَ", "قَرَأَ"],
      translation: "Çabalayan (bulur / başarır)."
    },
    {
      sentence: "العَقْلُ السَّلِيمُ فِي الجِسْمِ ___.",
      blankWord: "السَّلِيمِ",
      options: ["السَّلِيمِ", "الكَبِيرِ", "القَصِيرِ"],
      translation: "Sağlam kafa (sağlam) vücutta bulunur."
    },
    {
      sentence: "الصَّبْرُ مِفْتَاحُ ___.",
      blankWord: "الْفَرَجِ",
      options: ["الْفَرَجِ", "الْبَابِ", "الْبَيْتِ"],
      translation: "Sabır (ferahlığın/kurtuluşun) anahtarıdır."
    }
  ]
];

// OYUN DURUMU YÖNETİMİ
let currentMode = 'matching';
let currentLevel = 0;
let currentScore = 0;
let selectedCards = [];
let matchedPairsCount = 0;
let currentDialogueIndex = 0;

function updateScore(points) {
  currentScore += points;
  document.getElementById("score").innerText = currentScore;
}

function switchMode(mode) {
  currentMode = mode;
  currentLevel = 0;
  const btns = document.querySelectorAll('.mode-btn');
  btns.forEach(b => b.classList.remove('active'));
  
  if (mode === 'matching') {
    btns[0].classList.add('active');
    initMatchingGame();
  } else {
    btns[1].classList.add('active');
    initDialogueGame();
  }
}

// 1. KELİME EŞLEŞTİRME KONTROLLERİ
function initMatchingGame() {
  matchedPairsCount = 0;
  selectedCards = [];
  const container = document.getElementById('game-area');
  
  const currentData = matchingLevels[currentLevel];
  if (!currentData) {
    container.innerHTML = '<h2>Tebrikler! Tüm Eşleştirme Seviyelerini Başarıyla Tamamladınız! 🏆</h2>';
    return;
  }

  container.innerHTML = `
    <h3 style="color:#2c3e50;">Eşleştirme - Seviye ${currentLevel + 1} / ${matchingLevels.length}</h3>
    <div class="grid" id="grid"></div>
  `;
  
  const grid = document.getElementById('grid');
  let cards = [];
  currentData.forEach((item, index) => {
    cards.push({ id: index, text: item.ar, type: 'ar' });
    cards.push({ id: index, text: item.tr, type: 'tr' });
  });

  cards.sort(() => Math.random() - 0.5);

  cards.forEach(cardData => {
    const card = document.createElement('div');
    card.className = `card ${cardData.type === 'ar' ? 'arabic' : ''}`;
    card.innerText = cardData.text;
    card.dataset.id = cardData.id;
    card.onclick = () => selectCard(card);
    grid.appendChild(card);
  });
}

function selectCard(card) {
  if (card.classList.contains('matched') || selectedCards.length === 2) return;

  card.classList.add('selected');
  selectedCards.push(card);

  if (selectedCards.length === 2) {
    const [c1, c2] = selectedCards;
    if (c1.dataset.id === c2.dataset.id && c1 !== c2) {
      setTimeout(() => {
        c1.classList.add('matched');
        c2.classList.add('matched');
        selectedCards = [];
        updateScore(10);
        matchedPairsCount++;
        
        if (matchedPairsCount === matchingLevels[currentLevel].length) {
          alert(`Harika! Seviye ${currentLevel + 1} tamamlandı. Bir sonraki seviyeye geçiliyor!`);
          currentLevel++;
          initMatchingGame();
        }
      }, 400);
    } else {
      c1.classList.add('incorrect');
      c2.classList.add('incorrect');
      setTimeout(() => {
        c1.classList.remove('selected', 'incorrect');
        c2.classList.remove('selected', 'incorrect');
        selectedCards = [];
      }, 700);
    }
  }
}

// 2. CÜMLE TAMAMLAMA KONTROLLERİ
function initDialogueGame() {
  currentDialogueIndex = 0;
  renderDialogue();
}

function renderDialogue() {
  const container = document.getElementById('game-area');
  const levelData = dialogueLevels[currentLevel];

  if (!levelData) {
    container.innerHTML = '<h2>Tebrikler! Tüm Cümle Seviyelerini Tamamladınız! 🏆</h2>';
    return;
  }

  const current = levelData[currentDialogueIndex];

  if (!current) {
    alert(`Seviye ${currentLevel + 1} Cümlelerini Tamamladınız! Bir sonraki seviyeye geçiliyor.`);
    currentLevel++;
    currentDialogueIndex = 0;
    renderDialogue();
    return;
  }

  const formattedSentence = current.sentence.replace('___', '<span class="blank">؟</span>');

  container.innerHTML = `
    <h3 style="color:#2c3e50;">Cümle Tamamlama - Seviye ${currentLevel + 1} / ${dialogueLevels.length}</h3>
    <div class="dialogue-box">${formattedSentence}</div>
    <p style="color: #7f8c8d; font-size: 16px;">${current.translation}</p>
    <div class="options">
      ${current.options.map(opt => `<button class="option-btn" onclick="checkDialogue('${opt}')">${opt}</button>`).join('')}
    </div>
  `;
}

function checkDialogue(selectedOption) {
  const current = dialogueLevels[currentLevel][currentDialogueIndex];
  if (selectedOption === current.blankWord) {
    updateScore(15);
    currentDialogueIndex++;
    renderDialogue();
  } else {
    alert("Yanlış cevap, tekrar deneyin!");
  }
}

// Oyunu Başlat
initMatchingGame();