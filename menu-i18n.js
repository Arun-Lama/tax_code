const COUNTRIES = [
  { id: 'en', flagCode: 'gb', nativeName: 'United Kingdom' },
  { id: 'ne', flagCode: 'np', nativeName: 'नेपाल' },
  { id: 'in', flagCode: 'in', nativeName: 'भारत' },
  { id: 'cn', flagCode: 'cn', nativeName: '中国' },
  { id: 'jp', flagCode: 'jp', nativeName: '日本' },
  { id: 'kr', flagCode: 'kr', nativeName: '대한민국' },
  { id: 'fr', flagCode: 'fr', nativeName: 'France' },
  { id: 'de', flagCode: 'de', nativeName: 'Deutschland' },
  { id: 'es', flagCode: 'es', nativeName: 'España' },
  { id: 'it', flagCode: 'it', nativeName: 'Italia' },
  { id: 'br', flagCode: 'br', nativeName: 'Brasil' },
  { id: 'ru', flagCode: 'ru', nativeName: 'Россия' },
  { id: 'sa', flagCode: 'sa', nativeName: 'المملكة العربية السعودية' },
  { id: 'th', flagCode: 'th', nativeName: 'ประเทศไทย' },
  { id: 'us', flagCode: 'us', nativeName: 'United States of America' },
  { id: 'mx', flagCode: 'mx', nativeName: 'México' },
  { id: 'tr', flagCode: 'tr', nativeName: 'Türkiye' },
  { id: 'vn', flagCode: 'vn', nativeName: 'Việt Nam' },
  { id: 'id', flagCode: 'id', nativeName: 'Indonesia' },
  { id: 'au', flagCode: 'au', nativeName: 'Australia' },
  { id: 'pk', flagCode: 'pk', nativeName: 'پاکستان' },
  { id: 'bd', flagCode: 'bd', nativeName: 'বাংলাদেশ' },
  { id: 'lk', flagCode: 'lk', nativeName: 'ශ්‍රී ලංකාව' },
  { id: 'ae', flagCode: 'ae', nativeName: 'الإمارات العربية المتحدة' },
  { id: 'qa', flagCode: 'qa', nativeName: 'قطر' },
  { id: 'kw', flagCode: 'kw', nativeName: 'الكويت' },
  { id: 'ph', flagCode: 'ph', nativeName: 'Pilipinas' },
  { id: 'nl', flagCode: 'nl', nativeName: 'Nederland' },
  { id: 'pl', flagCode: 'pl', nativeName: 'Polska' },
  { id: 'pt', flagCode: 'pt', nativeName: 'Portugal' },
  { id: 'gr', flagCode: 'gr', nativeName: 'Ελλάδα' },
  { id: 'il', flagCode: 'il', nativeName: 'יִשְׂרָאֵל' },
  { id: 'eg', flagCode: 'eg', nativeName: 'مصر' },
  { id: 'my', flagCode: 'my', nativeName: 'Malaysia' },
  { id: 'ca', flagCode: 'ca', nativeName: 'Canada' },
  { id: 'nz', flagCode: 'nz', nativeName: 'Aotearoa New Zealand' },
  { id: 'ie', flagCode: 'ie', nativeName: 'Éire' },
  { id: 'ch', flagCode: 'ch', nativeName: 'Schweiz' },
  { id: 'at', flagCode: 'at', nativeName: 'Österreich' },
  { id: 'se', flagCode: 'se', nativeName: 'Sverige' },
  { id: 'no', flagCode: 'no', nativeName: 'Norge' },
  { id: 'dk', flagCode: 'dk', nativeName: 'Danmark' },
  { id: 'fi', flagCode: 'fi', nativeName: 'Suomi' },
  { id: 'cz', flagCode: 'cz', nativeName: 'Česko' },
  { id: 'hu', flagCode: 'hu', nativeName: 'Magyarország' },
  { id: 'ro', flagCode: 'ro', nativeName: 'România' },
  { id: 'ua', flagCode: 'ua', nativeName: 'Україна' },
  { id: 'ir', flagCode: 'ir', nativeName: 'ایران' },
  { id: 'kh', flagCode: 'kh', nativeName: 'កម្ពុជា' },
  { id: 'mm', flagCode: 'mm', nativeName: 'မြန်မာ' },
  { id: 'tw', flagCode: 'tw', nativeName: '臺灣' },
  { id: 'hk', flagCode: 'hk', nativeName: '香港' },
  { id: 'za', flagCode: 'za', nativeName: 'South Africa' },
  { id: 'ar', flagCode: 'ar', nativeName: 'Argentina' },
  { id: 'co', flagCode: 'co', nativeName: 'Colombia' },
  { id: 'sg', flagCode: 'sg', nativeName: 'Singapore' },
  { id: 'pe', flagCode: 'pe', nativeName: 'Perú' },
  { id: 'jo', flagCode: 'jo', nativeName: 'الأردن' },
  { id: 'lb', flagCode: 'lb', nativeName: 'لبنان' },
];

const LANG_FALLBACK = {
  ae: 'sa', qa: 'sa', kw: 'sa', eg: 'sa', jo: 'sa', lb: 'sa',
  at: 'de', ch: 'de',
  ca: 'en', ie: 'en', nz: 'en', za: 'en', sg: 'en', my: 'en', lk: 'en',
  pt: 'br',
  tw: 'cn', hk: 'cn',
  ar: 'es', co: 'es', pe: 'es',
  no: 'se', dk: 'se', fi: 'se',
  cz: 'de', hu: 'de', ro: 'de',
};

const RTL_LANGS = new Set(['sa', 'ae', 'qa', 'kw', 'eg', 'jo', 'lb', 'ir', 'il']);

function renderFlag(flagCode) {
  const code = flagCode.toLowerCase();
  return `<img class="country-flag-img" src="flags/${code}.svg" alt="" width="28" height="21" loading="lazy" aria-hidden="true">`;
}

function setFlagElement(el, flagCode) {
  el.innerHTML = renderFlag(flagCode);
}

const UI = {
  en: {
    pageTitle: 'Multi-Language Menu',
    tag: 'Global Menu',
    title: 'Multi-Language Menu',
    desc: 'Same holy burgers, your language. Prices always in Nepalese Rupees (NPR).',
    selectLabel: 'Select country / language',
    note: 'All burgers served with seasoned fries. Add extra patty +NPR 180 · Upgrade to sweet potato fries +NPR 80',
    bestSeller: 'Best Seller',
    priceLabel: 'NPR',
  },
  ne: {
    pageTitle: 'बहुभाषिक मेनु',
    tag: 'विश्व मेनु',
    title: 'बहुभाषिक मेनु',
    desc: 'उही पवित्र बर्गर, तपाईंको भाषामा। मूल्य सधैं नेपाली रुपैयाँ (NPR) मा।',
    selectLabel: 'देश / भाषा छान्नुहोस्',
    note: 'सबै बर्गर मसला लगाइएको फ्राइजसँग। थप प्याटी +NPR 180 · स्वीट पोटेटो फ्राइ +NPR 80',
    bestSeller: 'सबैभन्दा बढी बिक्री',
    priceLabel: 'NPR',
  },
  in: {
    pageTitle: 'बहुभाषी मेनू',
    tag: 'वैश्विक मेनू',
    title: 'बहुभाषी मेनू',
    desc: 'वही पवित्र बर्गर, आपकी भाषा में। कीमत हमेशा नेपalese रुपए (NPR) में।',
    selectLabel: 'देश / भाषा चुनें',
    note: 'सभी बर्गर मसालेदार फ्राइज़ के साथ। अतिरिक्त पैटी +NPR 180 · स्वीट पोटैटो फ्राइ +NPR 80',
    bestSeller: 'सबसे ज़्यादा बिकने वाला',
    priceLabel: 'NPR',
  },
  cn: {
    pageTitle: '多语言菜单',
    tag: '全球菜单',
    title: '多语言菜单',
    desc: '同样的招牌汉堡，您的语言。价格始终以尼泊尔卢比（NPR）显示。',
    selectLabel: '选择国家 / 语言',
    note: '所有汉堡配调味薯条。加肉饼 +NPR 180 · 升级红薯条 +NPR 80',
    bestSeller: '畅销款',
    priceLabel: 'NPR',
  },
  jp: {
    pageTitle: '多言語メニュー',
    tag: 'グローバルメニュー',
    title: '多言語メニュー',
    desc: '同じ看板バーガーを、あなたの言語で。価格は常にネパールルピー（NPR）表示。',
    selectLabel: '国 / 言語を選択',
    note: '全バーガーにシーズニングフライ付き。パティ追加 +NPR 180 · サツマイモフライ +NPR 80',
    bestSeller: '人気No.1',
    priceLabel: 'NPR',
  },
  kr: {
    pageTitle: '다국어 메뉴',
    tag: '글로벌 메뉴',
    title: '다국어 메뉴',
    desc: '같은 시그니처 버거, 당신의 언어로. 가격은 항상 네팔 루피(NPR)로 표시됩니다.',
    selectLabel: '국가 / 언어 선택',
    note: '모든 버거에 시즈닝 프라이 포함. 패티 추가 +NPR 180 · 고구마 프라이 +NPR 80',
    bestSeller: '베스트셀러',
    priceLabel: 'NPR',
  },
  fr: {
    pageTitle: 'Menu Multilingue',
    tag: 'Menu Global',
    title: 'Menu Multilingue',
    desc: 'Les mêmes burgers signature, dans votre langue. Prix toujours en roupies népalaises (NPR).',
    selectLabel: 'Choisir pays / langue',
    note: 'Tous les burgers servis avec frites assaisonnées. Steak supplémentaire +NPR 180 · Frites patate douce +NPR 80',
    bestSeller: 'Best-seller',
    priceLabel: 'NPR',
  },
  de: {
    pageTitle: 'Mehrsprachige Speisekarte',
    tag: 'Globale Karte',
    title: 'Mehrsprachige Speisekarte',
    desc: 'Dieselben Signature-Burger in Ihrer Sprache. Preise immer in Nepalesischen Rupien (NPR).',
    selectLabel: 'Land / Sprache wählen',
    note: 'Alle Burger mit gewürzten Pommes. Extra Patty +NPR 180 · Süßkartoffelpommes +NPR 80',
    bestSeller: 'Bestseller',
    priceLabel: 'NPR',
  },
  es: {
    pageTitle: 'Menú Multilingüe',
    tag: 'Menú Global',
    title: 'Menú Multilingüe',
    desc: 'Las mismas hamburguesas, en tu idioma. Precios siempre en rupias nepalesas (NPR).',
    selectLabel: 'Seleccionar país / idioma',
    note: 'Todas las hamburguesas con papas fritas. Carne extra +NPR 180 · Papas de batata +NPR 80',
    bestSeller: 'Más vendida',
    priceLabel: 'NPR',
  },
  it: {
    pageTitle: 'Menu Multilingue',
    tag: 'Menu Globale',
    title: 'Menu Multilingue',
    desc: 'Gli stessi burger signature, nella tua lingua. Prezzi sempre in rupie nepalesi (NPR).',
    selectLabel: 'Seleziona paese / lingua',
    note: 'Tutti i burger con patatine fritte. Patty extra +NPR 180 · Patatine di patate dolci +NPR 80',
    bestSeller: 'Più venduto',
    priceLabel: 'NPR',
  },
  br: {
    pageTitle: 'Cardápio Multilíngue',
    tag: 'Menu Global',
    title: 'Cardápio Multilíngue',
    desc: 'Os mesmos burgers especiais, no seu idioma. Preços sempre em rúpias nepalesas (NPR).',
    selectLabel: 'Selecionar país / idioma',
    note: 'Todos os burgers com batatas fritas. Patty extra +NPR 180 · Batata-doce frita +NPR 80',
    bestSeller: 'Mais vendido',
    priceLabel: 'NPR',
  },
  ru: {
    pageTitle: 'Многоязычное меню',
    tag: 'Глобальное меню',
    title: 'Многоязычное меню',
    desc: 'Те же фирменные бургеры на вашем языке. Цены всегда в непальских рупиях (NPR).',
    selectLabel: 'Выберите страну / язык',
    note: 'Все бургеры с картофелем фри. Доп. котлета +NPR 180 · Батат фри +NPR 80',
    bestSeller: 'Хит продаж',
    priceLabel: 'NPR',
  },
  sa: {
    pageTitle: 'قائمة متعددة اللغات',
    tag: 'القائمة العالمية',
    title: 'قائمة متعددة اللغات',
    desc: 'نفس البرجر المميزة بلغتك. الأسعار دائماً بالروبية النيبالية (NPR).',
    selectLabel: 'اختر الدولة / اللغة',
    note: 'جميع البرجر مع بطاطس مقلية. قرص إضافي +NPR 180 · بطاطا حلوة +NPR 80',
    bestSeller: 'الأكثر مبيعاً',
    priceLabel: 'NPR',
  },
  th: {
    pageTitle: 'เมนูหลายภาษา',
    tag: 'เมนูทั่วโลก',
    title: 'เมนูหลายภาษา',
    desc: 'เบอร์ger เดิมๆ ในภาษาของคุณ ราคาเป็นเงินรูปีเนปal (NPR) เสมอ',
    selectLabel: 'เลือกประเทศ / ภาษา',
    note: 'เบอร์ger ทุกจานเสิร์ฟฟรайด เนื้อเพิ่ม +NPR 180 · มันเทศทอด +NPR 80',
    bestSeller: 'ขายดี',
    priceLabel: 'NPR',
  },
  us: {
    pageTitle: 'Multi-Language Menu',
    tag: 'Global Menu',
    title: 'Multi-Language Menu',
    desc: 'Same holy burgers, your language. Prices always in Nepalese Rupees (NPR).',
    selectLabel: 'Select country / language',
    note: 'All burgers served with seasoned fries. Add extra patty +NPR 180 · Upgrade to sweet potato fries +NPR 80',
    bestSeller: 'Best Seller',
    priceLabel: 'NPR',
  },
  mx: {
    pageTitle: 'Menú Multilingüe',
    tag: 'Menú Global',
    title: 'Menú Multilingüe',
    desc: 'Las mismas hamburguesas, en tu idioma. Precios siempre en rupias nepalesas (NPR).',
    selectLabel: 'Seleccionar país / idioma',
    note: 'Todas las hamburguesas con papas fritas. Carne extra +NPR 180 · Papas de camote +NPR 80',
    bestSeller: 'Más vendida',
    priceLabel: 'NPR',
  },
  tr: {
    pageTitle: 'Çok Dilli Menü',
    tag: 'Küresel Menü',
    title: 'Çok Dilli Menü',
    desc: 'Aynı imza burgerler, sizin dilinizde. Fiyatlar her zaman Nepal Rupisi (NPR) cinsindendir.',
    selectLabel: 'Ülke / dil seçin',
    note: 'Tüm burgerler baharatlı patates kızartması ile. Ek köfte +NPR 180 · Tatlı patates +NPR 80',
    bestSeller: 'Çok Satan',
    priceLabel: 'NPR',
  },
  vn: {
    pageTitle: 'Thực Đơn Đa Ngôn Ngữ',
    tag: 'Thực Đơn Toàn Cầu',
    title: 'Thực Đơn Đa Ngôn Ngữ',
    desc: 'Cùng burger đặc trưng, ngôn ngữ của bạn. Giá luôn bằng Rupee Nepal (NPR).',
    selectLabel: 'Chọn quốc gia / ngôn ngữ',
    note: 'Tất cả burger kèm khoai tây chiên. Thêm bánh +NPR 180 · Khoai lang chiên +NPR 80',
    bestSeller: 'Bán chạy nhất',
    priceLabel: 'NPR',
  },
  id: {
    pageTitle: 'Menu Multibahasa',
    tag: 'Menu Global',
    title: 'Menu Multibahasa',
    desc: 'Burger andalan yang sama, dalam bahasa Anda. Harga selalu dalam Rupee Nepal (NPR).',
    selectLabel: 'Pilih negara / bahasa',
    note: 'Semua burger dengan kentang goreng. Patty extra +NPR 180 · Kentang manis +NPR 80',
    bestSeller: 'Terlaris',
    priceLabel: 'NPR',
  },
  au: {
    pageTitle: 'Multi-Language Menu',
    tag: 'Global Menu',
    title: 'Multi-Language Menu',
    desc: 'Same holy burgers, your language. Prices always in Nepalese Rupees (NPR).',
    selectLabel: 'Select country / language',
    note: 'All burgers served with seasoned fries. Add extra patty +NPR 180 · Upgrade to sweet potato fries +NPR 80',
    bestSeller: 'Best Seller',
    priceLabel: 'NPR',
  },
  pk: {
    pageTitle: 'کثیر اللسانی مینو',
    tag: 'عالمی مینو',
    title: 'کثیر اللسانی مینو',
    desc: 'وahi mukhtasar burgers، aap ki zubaan mein. Qeemat hamesha Nepali Rupee (NPR) mein.',
    selectLabel: 'Mulk / zubaan chunein',
    note: 'Tamam burgers masala fries ke sath. Extra patty +NPR 180 · Sweet potato fries +NPR 80',
    bestSeller: 'Sab se zyada bikne wala',
    priceLabel: 'NPR',
  },
  bd: {
    pageTitle: 'বহুভাষিক মেনু',
    tag: 'বিশ্ব মেনু',
    title: 'বহুভাষিক মেনু',
    desc: 'একই সিগনেচার বার্গার, আপনার ভাষায়। দাম সবসময় নেপালি রুপিতে (NPR)।',
    selectLabel: 'দেশ / ভাষা নির্বাচন করুন',
    note: 'সব বার্গার মশলাদার ফ্রাইজ সহ। অতিরিক্ত প্যাটি +NPR 180 · সুইট পোটেটো ফ্রাই +NPR 80',
    bestSeller: 'সর্বাধিক বিক্রিত',
    priceLabel: 'NPR',
  },
  ph: {
    pageTitle: 'Multi-Language na Menu',
    tag: 'Pandaigdigang Menu',
    title: 'Multi-Language na Menu',
    desc: 'Parehong signature burgers, sa iyong wika. Presyo laging sa Nepalese Rupees (NPR).',
    selectLabel: 'Pumili ng bansa / wika',
    note: 'Lahat ng burger may seasoned fries. Dagdag na patty +NPR 180 · Sweet potato fries +NPR 80',
    bestSeller: 'Pinakamabenta',
    priceLabel: 'NPR',
  },
  nl: {
    pageTitle: 'Meertalig Menu',
    tag: 'Wereldmenu',
    title: 'Meertalig Menu',
    desc: 'Dezelfde signature burgers, in jouw taal. Prijzen altijd in Nepalese roepies (NPR).',
    selectLabel: 'Kies land / taal',
    note: 'Alle burgers met gekruide friet. Extra patty +NPR 180 · Zoete-aardappelfriet +NPR 80',
    bestSeller: 'Bestverkocht',
    priceLabel: 'NPR',
  },
  pl: {
    pageTitle: 'Menu Wielojęzyczne',
    tag: 'Menu Globalne',
    title: 'Menu Wielojęzyczne',
    desc: 'Te same burgery, w twoim języku. Ceny zawsze w rupiach nepalskich (NPR).',
    selectLabel: 'Wybierz kraj / język',
    note: 'Wszystkie burgery z frytkami. Dodatkowa kotlet +NPR 180 · Frytki z batatów +NPR 80',
    bestSeller: 'Bestseller',
    priceLabel: 'NPR',
  },
  gr: {
    pageTitle: 'Πολυγλωσσικό Μενού',
    tag: 'Παγκόσμιο Μενού',
    title: 'Πολυγλωσσικό Μενού',
    desc: 'Τα ίδια signature burgers, στη γλώσσα σας. Τιμές πάντα σε νεπalese ρουπίες (NPR).',
    selectLabel: 'Επιλέξτε χώρα / γλώσσα',
    note: 'Όλα τα burgers με πατάτες τηγανητές. Επιπλέον μπιφτέκι +NPR 180 · Γλυκοπατάτες +NPR 80',
    bestSeller: 'Πιο δημοφιλές',
    priceLabel: 'NPR',
  },
  il: {
    pageTitle: 'תפריט רב-לשוני',
    tag: 'תפריט עולמי',
    title: 'תפריט רב-לשוני',
    desc: 'אותם בургרים מיוחדים, בשפה שלך. מחירים תמיד בrupi נepali (NPR).',
    selectLabel: 'בחר מדינה / שפה',
    note: 'כל הבurgers עם צ\'יפס מתובל. פatti נוסף +NPR 180 · צ\'יפס בטata +NPR 80',
    bestSeller: 'הנמכר ביותר',
    priceLabel: 'NPR',
  },
  ir: {
    pageTitle: 'منوی چندزبانه',
    tag: 'منوی جهانی',
    title: 'منوی چندزبانه',
    desc: 'همان برگرهای ویژه، به زبان شما. قیمت‌ها همیشه به روپیه نepal (NPR).',
    selectLabel: 'کشور / زبان را انتخاب کنید',
    note: 'همه برگرها با سیب‌زمینی سرخ‌کرده. پتی اضافه +NPR 180 · سیب‌زمینی شیرین +NPR 80',
    bestSeller: 'پرفروش‌ترین',
    priceLabel: 'NPR',
  },
  kh: {
    pageTitle: 'ម៉ឺនុយពหลายភាសា',
    tag: 'ម៉ឺនុយពិភពលោក',
    title: 'ម៉ឺនុយពหลายភាសា',
    desc: 'Burger ដូចគ្នា ជាភាសារបស់អ្នក។ តម្លៃជានិច Nepalese Rupee (NPR)។',
    selectLabel: 'ជ្រើសរើសប្រទេស / ភាសា',
    note: 'Burger ទាំងអស់មាន french fries។ Patty បន្ថែម +NPR 180 · Sweet potato fries +NPR 80',
    bestSeller: 'លក់ដាច់បំផុត',
    priceLabel: 'NPR',
  },
  mm: {
    pageTitle: 'ဘာသာစကားများစွာ မီနူး',
    tag: 'ကမ္ဘာ့မီနူး',
    title: 'ဘာသာစကားများစွာ မီနူး',
    desc: 'တူညီသော signature burgers၊ သင့်ဘာသာစကားဖြင့်။ စျေးနှုန်းသည် Nepalese Rupee (NPR) ဖြစ်သည်။',
    selectLabel: 'နိုင်ငံ / ဘာသာစကား ရွေးချယ်ပါ',
    note: 'Burger အားလုံး fries ပါဝင်။ Patty ထပ်ထည့် +NPR 180 · Sweet potato fries +NPR 80',
    bestSeller: 'အရောင်းရဆုံး',
    priceLabel: 'NPR',
  },
  se: {
    pageTitle: 'Flerspråkig Meny',
    tag: 'Global Meny',
    title: 'Flerspråkig Meny',
    desc: 'Samma signaturburgare, på ditt språk. Priser alltid i nepalesiska rupier (NPR).',
    selectLabel: 'Välj land / språk',
    note: 'Alla burgare med kryddade pommes. Extra patty +NPR 180 · Sötpotatispommes +NPR 80',
    bestSeller: 'Bästsäljare',
    priceLabel: 'NPR',
  },
  ua: {
    pageTitle: 'Багатомовне меню',
    tag: 'Світове меню',
    title: 'Багатомовне меню',
    desc: 'Ті самі фірмові бургери вашою мовою. Ціни завжди в непальських рupіях (NPR).',
    selectLabel: 'Оберіть країну / мову',
    note: 'Усі бургери з картоплею фрі. Дод. котлета +NPR 180 · Батат фрі +NPR 80',
    bestSeller: 'Хіт продажів',
    priceLabel: 'NPR',
  },
};

const MENU_ITEMS = [
  {
    id: 'classic-holy',
    price: 450,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&q=80',
    featured: true,
    t: {
      en: {
        name: 'The Classic Holy',
        desc: 'Inspired by the timeless Shack-style smash burger. Two flame-grilled beef patties, American cheese, crisp lettuce, vine tomato, and our secret Holy Sauce on a toasted brioche bun.',
        tags: ['Double Patty', 'House Sauce'],
      },
      ne: {
        name: 'क्लासिक होली',
        desc: 'शाक-शैलीको स्म्याश बर्गर। दुई फ्लेम-ग्रिल गोमांस प्याटी, अमेरिकन चिज, कुरकुरे सलाद, टomaटo र गोप्य होली सस brioche बुनमा।',
        tags: ['डबल प्याटी', 'हाउस सस'],
      },
      in: {
        name: 'द क्लासिक होली',
        desc: 'शैक-स्टाइल स्मैश बर्गर। दो फ्लेम-ग्रिल्ड बीफ पैटी, अमेरिकन चीज़, कुरकुरा सलाद, टomato और गुप्त होली सॉस brioche बन पर।',
        tags: ['डबल पैटी', 'हाउस सॉस'],
      },
      cn: {
        name: '经典Holy',
        desc: '灵感来自经典粉碎式汉堡。两块火焰烤牛肉饼、美式奶酪、 crisp生菜、 vine番茄和秘制Holy酱，配烤布里欧修面包。',
        tags: ['双层肉饼', '招牌酱'],
      },
      jp: {
        name: 'クラシック・ホーリー',
        desc: 'シャックスタイルのスマッシュバーガー。2枚のフレームグリルビーフパティ、アメリカンチーズ、レタス、トマト、秘伝ホーリーソース、ブリオッシュバン。',
        tags: ['ダブルパティ', '特製ソース'],
      },
      kr: {
        name: '클래식 홀리',
        desc: '샥 스타일 스매시 버거에서 영감. 두 장의 불맛 소고기 패티, 아메리칸 치즈, 상추, 토마토, 비밀 홀리 소스, 브리오슈 번.',
        tags: ['더블 패티', '하우스 소스'],
      },
      fr: {
        name: 'Le Classic Holy',
        desc: 'Inspiré du smash burger style Shack. Deux steaks de bœuf grillés, fromage américain, laitue, tomate et sauce Holy secrète sur brioche toastée.',
        tags: ['Double Steak', 'Sauce Maison'],
      },
      de: {
        name: 'Der Classic Holy',
        desc: 'Inspiriert vom Shack-Smash-Burger. Zwei flammgegrillte Rindfleisch-Patties, American Cheese, Salat, Tomate und geheime Holy-Sauce auf Brioche.',
        tags: ['Doppel-Patty', 'Haussauce'],
      },
      es: {
        name: 'El Clásico Holy',
        desc: 'Inspirado en la smash burger estilo Shack. Dos carnes a la parrilla, queso americano, lechuga, tomate y salsa Holy secreta en pan brioche.',
        tags: ['Doble Carne', 'Salsa de la Casa'],
      },
      it: {
        name: 'Il Classico Holy',
        desc: 'Ispirato allo smash burger stile Shack. Due hamburger di manzo alla griglia, formaggio americano, lattuga, pomodoro e salsa Holy segreta su brioche.',
        tags: ['Doppio Patty', 'Salsa della Casa'],
      },
      br: {
        name: 'O Clássico Holy',
        desc: 'Inspirado no smash burger estilo Shack. Dois hambúrgueres grelhados, queijo americano, alface, tomate e molho Holy secreto no pão brioche.',
        tags: ['Duplo Patty', 'Molho da Casa'],
      },
      ru: {
        name: 'Классик Holy',
        desc: 'Вдохновлён smash-бургером в стиле Shack. Две котлеты на огне, американский сыр, салат, помидор и секретный соус Holy на булочке бриошь.',
        tags: ['Двойная котлета', 'Фирменный соус'],
      },
      sa: {
        name: 'الكلاسيك Holy',
        desc: 'مستوحى من برger سماش على طراز Shack. قطعتان لحم مشوية، جبنة أمريكية، خس، طماطم وصلصة Holy سرية على خبز brioche.',
        tags: ['قطعة مزدوجة', 'صلصة خاصة'],
      },
      th: {
        name: 'คลาสสิก โฮลี่',
        desc: 'แรงบันดาลใจจากสมชแบบ Shack เนื้อย่าง 2 ชิ้น ชีสอเมริกัน ผักกาด มะเขือเทศ และซอส Holy ลับบนขนมปัง brioche',
        tags: ['เนื้อคู่', 'ซอสสูตรเฉพาะ'],
      },
      us: {
        name: 'The Classic Holy',
        desc: 'Inspired by the timeless Shack-style smash burger. Two flame-grilled beef patties, American cheese, crisp lettuce, vine tomato, and our secret Holy Sauce on a toasted brioche bun.',
        tags: ['Double Patty', 'House Sauce'],
      },
      mx: {
        name: 'El Clásico Holy',
        desc: 'Inspirado en la smash burger estilo Shack. Dos carnes a la parrilla, queso americano, lechuga, tomate y salsa Holy secreta en pan brioche.',
        tags: ['Doble Carne', 'Salsa de la Casa'],
      },
      tr: {
        name: 'Klasik Holy',
        desc: 'Shack tarzı smash burgerden ilham. İki alevde ızgara dana köfte, Amerikan peyniri, marul, domates ve gizli Holy sosu brioche ekmeğinde.',
        tags: ['Çift Köfte', 'Ev Yapımı Sos'],
      },
      vn: {
        name: 'Classic Holy',
        desc: 'Lấy cảm hứng từ burger smash kiểu Shack. Hai miếng bò nướng, phô mai Mỹ, rau xà lách, cà chua và sốt Holy bí mật trên bánh brioche.',
        tags: ['Hai miếng thịt', 'Sốt đặc biệt'],
      },
      id: {
        name: 'Classic Holy',
        desc: 'Terinspirasi smash burger gaya Shack. Dua patty daging sapi panggang, keju Amerika, selada, tomat, dan saus Holy rahasia di roti brioche.',
        tags: ['Patty Ganda', 'Saus Khusus'],
      },
      au: {
        name: 'The Classic Holy',
        desc: 'Inspired by the timeless Shack-style smash burger. Two flame-grilled beef patties, American cheese, crisp lettuce, vine tomato, and our secret Holy Sauce on a toasted brioche bun.',
        tags: ['Double Patty', 'House Sauce'],
      },
    },
  },
  {
    id: 'thamel-heatwave',
    price: 520,
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80',
    featured: false,
    t: {
      en: { name: 'Thamel Heatwave', desc: 'For spice lovers. Crispy jalapeños, pepper jack cheese, sriracha mayo, and pickled red onions on a single thick patty. A nod to the electric energy of Thamel nights.', tags: ['Spicy', 'Pepper Jack'] },
      ne: { name: 'थamel हिटवेभ', desc: 'मसala प्रेमीहरूका लागि। कुरकुरe jalapeño, pepper jack, sriracha mayo र pickled प्याज। Thamel का रातहरूको ऊर्जaalai samjhaney।', tags: ['पिरो', 'Pepper Jack'] },
      in: { name: 'थamel हीटवेव', desc: 'मसाला प्रेमियों के लिए। कुरकुरe jalapeño, pepper jack, sriracha mayo और अचार वाले प्याज। Thamel की रातों की ऊर्जा।', tags: ['मसaledar', 'Pepper Jack'] },
      cn: { name: 'Thamel热浪', desc: '为嗜辣者打造。脆jalapeño、 pepper jack、 sriracha mayo和 pickled红洋葱，厚肉饼。致敬Thamel夜晚活力。', tags: ['辣', 'Pepper Jack'] },
      jp: { name: 'タメル・ヒートウェーブ', desc: 'スパイス好き向け。ハラペーニョ、ペッパージャック、シラチャマヨ、ピクルス玉ねぎの厚手パティ。タメルの夜のエネルギーへ。', tags: ['辛口', 'ペッパージャック'] },
      kr: { name: '타멜 히트웨이브', desc: '매운맛 애호가를 위해. 할라페뇨, 페퍼 잭, 스리라차 마요, 피클 양파. 타멜 밤의 에너지를 담았습니다.', tags: ['매운맛', '페퍼 잭'] },
      fr: { name: 'Thamel Heatwave', desc: 'Pour les amateurs de piquant. Jalapeños croustillants, pepper jack, mayo sriracha et oignons rouges marinés. L\'énergie nocturne de Thamel.', tags: ['Épicé', 'Pepper Jack'] },
      de: { name: 'Thamel Heatwave', desc: 'Für Liebhaber scharfer Speisen. Jalapeños, Pepper Jack, Sriracha-Mayo und eingelegte rote Zwiebeln. Die Energie der Thamel-Nächte.', tags: ['Scharf', 'Pepper Jack'] },
      es: { name: 'Thamel Heatwave', desc: 'Para amantes del picante. Jalapeños crujientes, pepper jack, mayonesa sriracha y cebolla roja encurtida. La energía nocturna de Thamel.', tags: ['Picante', 'Pepper Jack'] },
      it: { name: 'Thamel Heatwave', desc: 'Per gli amanti del piccante. Jalapeños croccanti, pepper jack, maionese sriracha e cipolle rosse sottaceto. L\'energia notturna di Thamel.', tags: ['Piccante', 'Pepper Jack'] },
      br: { name: 'Thamel Heatwave', desc: 'Para amantes de picante. Jalapeños crocantes, pepper jack, maionese sriracha e cebola roxa em conserva. A energia noturna de Thamel.', tags: ['Picante', 'Pepper Jack'] },
      ru: { name: 'Thamel Heatwave', desc: 'Для любителей острого. Халапеньо, pepper jack, майонез сriracha и маринованный лук. Энергия ночного Thamel.', tags: ['Острое', 'Pepper Jack'] },
      sa: { name: 'Thamel Heatwave', desc: 'لعشاق التوابل. jalapeño مقرمش، pepper jack، مايونيز sriracha وبصل مخلل. طاقة ليالي Thamel.', tags: ['حار', 'Pepper Jack'] },
      th: { name: 'Thamel Heatwave', desc: 'สำหรับคนชอบเผ็ด พริกฮalapeño ชีส pepper jack มายonnaise sriracha และหอมแดงดอง พลังงานค่ำคืน Thamel', tags: ['เผ็ด', 'Pepper Jack'] },
      us: { name: 'Thamel Heatwave', desc: 'For spice lovers. Crispy jalapeños, pepper jack cheese, sriracha mayo, and pickled red onions on a single thick patty. A nod to the electric energy of Thamel nights.', tags: ['Spicy', 'Pepper Jack'] },
      mx: { name: 'Thamel Heatwave', desc: 'Para amantes del picante. Jalapeños crujientes, pepper jack, mayonesa sriracha y cebolla roja encurtida. La energía nocturna de Thamel.', tags: ['Picante', 'Pepper Jack'] },
      tr: { name: 'Thamel Heatwave', desc: 'Baharat severler için. Jalapeño, pepper jack, sriracha mayonez ve turşu kırmızı soğan. Thamel gecelerinin enerjisi.', tags: ['Acılı', 'Pepper Jack'] },
      vn: { name: 'Thamel Heatwave', desc: 'Dành cho người thích cay. Jalapeño giòn, pepper jack, sốt mayo sriracha và hành đỏ muối chua. Năng lượng đêm Thamel.', tags: ['Cay', 'Pepper Jack'] },
      id: { name: 'Thamel Heatwave', desc: 'Untuk pecinta pedas. Jalapeño renyah, pepper jack, mayo sriracha, dan bawang merah acar. Energi malam Thamel.', tags: ['Pedas', 'Pepper Jack'] },
      au: { name: 'Thamel Heatwave', desc: 'For spice lovers. Crispy jalapeños, pepper jack cheese, sriracha mayo, and pickled red onions on a single thick patty. A nod to the electric energy of Thamel nights.', tags: ['Spicy', 'Pepper Jack'] },
    },
  },
  {
    id: 'purple-haze-smoke',
    price: 580,
    image: 'https://images.unsplash.com/photo-1586816001966-79b736744398?w=600&q=80',
    featured: false,
    t: {
      en: { name: 'Purple Haze Smoke', desc: 'Smoky BBQ meets premium comfort. Applewood-smoked bacon, aged cheddar, crispy onion rings, and house BBQ glaze. Named after our home on Purple Haze.', tags: ['BBQ', 'Bacon'] },
      ne: { name: 'पर्पल हेज स्मोक', desc: 'धuvaa BBQ र premium comfort। Applewood-smoked bacon, aged cheddar, onion rings र house BBQ glaze। Purple Haze मा हाम्रो घरको नाम।', tags: ['BBQ', 'Bacon'] },
      in: { name: 'पर्पल हेज स्मोक', desc: 'धुएँदार BBQ और premium comfort। Applewood-smoked bacon, aged cheddar, onion rings और house BBQ glaze। Purple Haze पर हमारा घर।', tags: ['BBQ', 'Bacon'] },
      cn: { name: 'Purple Haze烟熏', desc: '烟熏BBQ与 premium comfort。苹果木熏培根、陈年切达、洋葱圈和招牌BBQ glaze。以Purple Haze命名。', tags: ['BBQ', '培根'] },
      jp: { name: 'パープルヘイズ・スモーク', desc: 'スモーキーBBQとプレミアムコンフォート。アップルウッド燻製ベーコン、熟成チェダー、オニオンリング、BBQグレーズ。', tags: ['BBQ', 'ベーコン'] },
      kr: { name: '퍼플 헤이즈 스모크', desc: '스모키 BBQ와 프리미엄 컴포트. 사과나무 훈제 베이컨, 숙성 체다, 양파링, BBQ 글레이즈. Purple Haze의 이름.', tags: ['BBQ', '베이컨'] },
      fr: { name: 'Purple Haze Smoke', desc: 'BBQ fumé et confort premium. Bacon fumé au bois de pommier, cheddar affiné, rondelles d\'oignon et glaçage BBQ maison.', tags: ['BBQ', 'Bacon'] },
      de: { name: 'Purple Haze Smoke', desc: 'Rauchiges BBQ trifft Premium-Komfort. Apfelholz-Bacon, gereifter Cheddar, Zwiebelringe und BBQ-Glasur.', tags: ['BBQ', 'Bacon'] },
      es: { name: 'Purple Haze Smoke', desc: 'BBQ ahumado y confort premium. Tocino ahumado, cheddar añejo, aros de cebolla y glaseado BBQ de la casa.', tags: ['BBQ', 'Tocino'] },
      it: { name: 'Purple Haze Smoke', desc: 'BBQ affumicato e comfort premium. Bacon affumicato, cheddar stagionato, anelli di cipolla e glassa BBQ della casa.', tags: ['BBQ', 'Bacon'] },
      br: { name: 'Purple Haze Smoke', desc: 'BBQ defumado e conforto premium. Bacon defumado, cheddar envelhecido, anéis de cebola e glaze BBQ da casa.', tags: ['BBQ', 'Bacon'] },
      ru: { name: 'Purple Haze Smoke', desc: 'Дымный BBQ и премиальный комфорт. Бекон, выдержанный чеддер, луковые кольца и домашняя BBQ-глазурь.', tags: ['BBQ', 'Бекон'] },
      sa: { name: 'Purple Haze Smoke', desc: 'BBQ مدخن وراحة فاخرة. bacon مدخن، cheddar معتق، حلقات بصل وglaze BBQ خاص.', tags: ['BBQ', 'Bacon'] },
      th: { name: 'Purple Haze Smoke', desc: 'BBQ รมควันและความสบายพรีเมียม เบคอนรมควัน ชีสcheddar หอมทอด และglaze BBQ', tags: ['BBQ', 'เบคอน'] },
      us: { name: 'Purple Haze Smoke', desc: 'Smoky BBQ meets premium comfort. Applewood-smoked bacon, aged cheddar, crispy onion rings, and house BBQ glaze. Named after our home on Purple Haze.', tags: ['BBQ', 'Bacon'] },
      mx: { name: 'Purple Haze Smoke', desc: 'BBQ ahumado y confort premium. Tocino ahumado, cheddar añejo, aros de cebolla y glaseado BBQ de la casa.', tags: ['BBQ', 'Tocino'] },
      tr: { name: 'Purple Haze Smoke', desc: 'Dumanlı BBQ ve premium konfor. Elma ağacı bacon, olgun cheddar, soğan halkası ve ev yapımı BBQ sosu.', tags: ['BBQ', 'Bacon'] },
      vn: { name: 'Purple Haze Smoke', desc: 'BBQ hun khói và sự thoải mái cao cấp. Bacon hun gỗ táo, cheddar ủ, hành tây chiên và sốt BBQ đặc biệt.', tags: ['BBQ', 'Bacon'] },
      id: { name: 'Purple Haze Smoke', desc: 'BBQ asap dan kenyamanan premium. Bacon asap apel, cheddar tua, bawang bombay goreng, dan glaze BBQ khusus.', tags: ['BBQ', 'Bacon'] },
      au: { name: 'Purple Haze Smoke', desc: 'Smoky BBQ meets premium comfort. Applewood-smoked bacon, aged cheddar, crispy onion rings, and house BBQ glaze. Named after our home on Purple Haze.', tags: ['BBQ', 'Bacon'] },
    },
  },
  {
    id: 'eating-street-truffle',
    price: 650,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    featured: false,
    t: {
      en: { name: 'Eating Street Truffle', desc: 'Gourmet elevated. Wagyu-blend patty, truffle aioli, fresh arugula, caramelized onions, and gruyère on a pretzel bun. Fine dining meets street food.', tags: ['Premium', 'Truffle'] },
      ne: { name: 'इटing Street Truffle', desc: 'Gourmet उchcha। Wagyu-blend patty, truffle aioli, arugula, caramelized onion र gruyère pretzel bunमा। Fine dining र street food को मिलन।', tags: ['Premium', 'Truffle'] },
      in: { name: 'Eating Street Truffle', desc: 'Gourmet उन्नत। Wagyu-blend patty, truffle aioli, arugula, caramelized onion और gruyère pretzel bun पर। Fine dining और street food का मेल।', tags: ['Premium', 'Truffle'] },
      cn: { name: 'Eating Street松露', desc: '美食升级。和牛混合肉饼、松露 aioli、 fresh芝麻菜、 caramelized洋葱和gruyère，pretzel面包。', tags: ['高级', '松露'] },
      jp: { name: 'イーティングストリート・トリュフ', desc: 'グルメの頂点。和牛ブレンドパティ、トリュフアイoli、ルッコラ、キャラメル玉ねぎ、グリュイエール、プレッツェルバン。', tags: ['プレミアム', 'トリュフ'] },
      kr: { name: '이팅 스트리트 트러플', desc: '고급 미식. 와규 블렌드 패티, 트러플 aioli, 루꼴라, 캐러멜 양파, 그뤼에르, 프레첼 번.', tags: ['프리미엄', '트러플'] },
      fr: { name: 'Eating Street Truffle', desc: 'Gourmet raffiné. Patty wagyu, aïoli à la truffe, roquette, oignons caramélisés et gruyère sur bun pretzel.', tags: ['Premium', 'Truffe'] },
      de: { name: 'Eating Street Truffle', desc: 'Gourmet pur. Wagyu-Patty, Trüffel-Aioli, Rucola, karamellisierte Zwiebeln und Gruyère auf Pretzel-Bun.', tags: ['Premium', 'Trüffel'] },
      es: { name: 'Eating Street Truffle', desc: 'Gourmet elevado. Patty wagyu, aioli de trufa, rúcula, cebolla caramelizada y gruyère en pan pretzel.', tags: ['Premium', 'Trufa'] },
      it: { name: 'Eating Street Truffle', desc: 'Gourmet elevato. Patty wagyu, aioli al tartufo, rucola, cipolle caramellate e gruyère su panino pretzel.', tags: ['Premium', 'Tartufo'] },
      br: { name: 'Eating Street Truffle', desc: 'Gourmet elevado. Patty wagyu, aioli de trufa, rúcula, cebola caramelizada e gruyère no pão pretzel.', tags: ['Premium', 'Trufa'] },
      ru: { name: 'Eating Street Truffle', desc: 'Изысканный гурман. Котлета wagyu, трюфельный aioli, руккола, карамельный лук и gruyère на булочке pretzel.', tags: ['Премиум', 'Трюфель'] },
      sa: { name: 'Eating Street Truffle', desc: 'فاخر راقٍ. patty wagyu، aioli trufle، jarjir، بصل مكرمل وgruyère على خبز pretzel.', tags: ['فاخر', 'Truffle'] },
      th: { name: 'Eating Street Truffle', desc: 'Gourmet ระดับสูง Wagyu patty truffle aioli ผัก rocket หอมคaramel และgruyère บนขนมปัง pretzel', tags: ['พรีเมียม', 'Truffle'] },
      us: { name: 'Eating Street Truffle', desc: 'Gourmet elevated. Wagyu-blend patty, truffle aioli, fresh arugula, caramelized onions, and gruyère on a pretzel bun. Fine dining meets street food.', tags: ['Premium', 'Truffle'] },
      mx: { name: 'Eating Street Truffle', desc: 'Gourmet elevado. Patty wagyu, aioli de trufa, rúcula, cebolla caramelizada y gruyère en pan pretzel.', tags: ['Premium', 'Trufa'] },
      tr: { name: 'Eating Street Truffle', desc: 'Gurme yükseltildi. Wagyu patty, trüf aioli, roka, karamelize soğan ve gruyère pretzel ekmeğinde.', tags: ['Premium', 'Trüf'] },
      vn: { name: 'Eating Street Truffle', desc: 'Tinh tế cao cấp. Patty wagyu, sốt truffle aioli, rau rocket, hành caramel và gruyère trên bánh pretzel.', tags: ['Cao cấp', 'Truffle'] },
      id: { name: 'Eating Street Truffle', desc: 'Gourmet mewah. Patty wagyu, aioli truffle, arugula, bawang karamel, dan gruyère di roti pretzel.', tags: ['Premium', 'Truffle'] },
      au: { name: 'Eating Street Truffle', desc: 'Gourmet elevated. Wagyu-blend patty, truffle aioli, fresh arugula, caramelized onions, and gruyère on a pretzel bun. Fine dining meets street food.', tags: ['Premium', 'Truffle'] },
    },
  },
  {
    id: 'nepali-masala-melt',
    price: 490,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=600&q=80',
    featured: false,
    t: {
      en: { name: 'Nepali Masala Melt', desc: 'Our local pride. Garam masala-spiced patty, ghee-butter toasted bun, mint-coriander chutney mayo, and tangy pickled vegetables. Kathmandu soul in every bite.', tags: ['Local Fusion', 'Spiced Patty'] },
      ne: { name: 'नेpali मसala Melt', desc: 'हाम्रो स्थानीय गर्व। Garam masala प्याटी, ghee-butter बुन, mint-coriander chutney mayo र अachar तरकारी। हरेक टukkमा Kathmandu ko आatma।', tags: ['स्थानीय Fusion', 'मसala प्याटी'] },
      in: { name: 'Nepali Masala Melt', desc: 'हमारा स्थानीय गर्व। Garam masala पैटी, ghee-butter बन, mint-coriander chutney mayo और अचार सब्ज़ियाँ। हर काट में Kathmandu की आत्मा।', tags: ['स्थानीय Fusion', 'मसala पैटी'] },
      cn: { name: '尼泊尔Masala Melt', desc: '本地骄傲。Garam masala肉饼、 ghee黄油烤面包、 mint-coriander chutney mayo和 pickled蔬菜。每一口都是加德满都灵魂。', tags: ['本地融合', '香料肉饼'] },
      jp: { name: 'ネパaliマサala Melt', desc: '地元の誇り。ガラムマサalaパティ、ギーバター焼きバン、ミントコリアンダーチャツネマヨ、ピクルス野菜。カトマンズの魂。', tags: ['ローカル融合', 'スパイスパティ'] },
      kr: { name: '네팔i 마살라 멜트', desc: '우리의 자부심. 가람 마살라 패티, 기 버터 토스트 번, 민트 코oriander chutney 마yo, 피클 채소. 카트만두의 영혼.', tags: ['로컬 퓨전', '스파이스 패티'] },
      fr: { name: 'Nepali Masala Melt', desc: 'Notre fierté locale. Patty au garam masala, bun au beurre clarifié, mayo chutney menthe-coriandre et légumes marinés. L\'âme de Katmandou.', tags: ['Fusion Locale', 'Patty Épicé'] },
      de: { name: 'Nepali Masala Melt', desc: 'Unser lokaler Stolz. Garam-Masala-Patty, Ghee-Butter-Bun, Minze-Koriander-Chutney-Mayo und eingelegtes Gemüse. Kathmandu-Seele.', tags: ['Lokale Fusion', 'Gewürz-Patty'] },
      es: { name: 'Nepali Masala Melt', desc: 'Nuestro orgullo local. Patty con garam masala, pan con mantequilla ghee, mayo chutney menta-cilantro y verduras encurtidas. Alma de Katmandú.', tags: ['Fusión Local', 'Carne Especiada'] },
      it: { name: 'Nepali Masala Melt', desc: 'Il nostro orgoglio locale. Patty al garam masala, bun al burro chiarificato, mayo chutney menta-coriandolo e verdure sottaceto. Anima di Kathmandu.', tags: ['Fusione Locale', 'Patty Speziato'] },
      br: { name: 'Nepali Masala Melt', desc: 'Nosso orgulho local. Patty com garam masala, pão com manteiga ghee, maionese chutney menta-coentro e legumes em conserva. Alma de Katmandu.', tags: ['Fusão Local', 'Patty Temperado'] },
      ru: { name: 'Nepali Masala Melt', desc: 'Наша местная гордость. Котлета с garam masala, булочка с топлёным маслом, майонез с chutney и маринованные овощи. Душа Кathmandu.', tags: ['Местный фьюжн', 'Пряная котлета'] },
      sa: { name: 'Nepali Masala Melt', desc: 'فخرنا المحلي. patty garam masala، خبز ghee، mayo chutney نعnaع-coriander وخضار مخللة. روح Kathmandu.', tags: ['دمج محلي', 'Patty متبل'] },
      th: { name: 'Nepali Masala Melt', desc: 'ความภาคภูมิใจท้องถิ่น Patty garam masala ขนมปัง ghee mayo chutney ใบmint-coriander และผักดอง จิตวิญญาณ Kathmandu', tags: ['ฟิวชันท้องถิ่น', 'Patty เครื่องเทศ'] },
      us: { name: 'Nepali Masala Melt', desc: 'Our local pride. Garam masala-spiced patty, ghee-butter toasted bun, mint-coriander chutney mayo, and tangy pickled vegetables. Kathmandu soul in every bite.', tags: ['Local Fusion', 'Spiced Patty'] },
      mx: { name: 'Nepali Masala Melt', desc: 'Nuestro orgullo local. Patty con garam masala, pan con mantequilla ghee, mayo chutney menta-cilantro y verduras encurtidas. Alma de Katmandú.', tags: ['Fusión Local', 'Carne Especiada'] },
      tr: { name: 'Nepali Masala Melt', desc: 'Yerel gururumuz. Garam masala köfte, ghee tereyağlı ekmek, nane-coriander chutney mayo ve turşu sebzeler. Kathmandu ruhu.', tags: ['Yerel Füzyon', 'Baharatlı Köfte'] },
      vn: { name: 'Nepali Masala Melt', desc: 'Niềm tự hào địa phương. Patty garam masala, bánh ghee, sốt mayo chutney bạc hà-coriander và rau muối chua. Linh hồn Kathmandu.', tags: ['Fusion địa phương', 'Patty gia vị'] },
      id: { name: 'Nepali Masala Melt', desc: 'Kebanggaan lokal kami. Patty garam masala, roti ghee, mayo chutney mint-coriander, dan sayur acar. Jiwa Kathmandu.', tags: ['Fusion Lokal', 'Patty Berbumbu'] },
      au: { name: 'Nepali Masala Melt', desc: 'Our local pride. Garam masala-spiced patty, ghee-butter toasted bun, mint-coriander chutney mayo, and tangy pickled vegetables. Kathmandu soul in every bite.', tags: ['Local Fusion', 'Spiced Patty'] },
    },
  },
];

function resolveLang(langId) {
  return UI[langId] ? langId : (LANG_FALLBACK[langId] || 'en');
}

function getUI(langId) {
  return UI[resolveLang(langId)] || UI.en;
}

function getTranslation(item, langId) {
  if (item.t[langId]) return item.t[langId];
  const fallback = LANG_FALLBACK[langId];
  if (fallback && item.t[fallback]) return item.t[fallback];
  return item.t.en;
}

function isRtl(langId) {
  if (RTL_LANGS.has(langId)) return true;
  const fallback = LANG_FALLBACK[langId];
  return fallback ? RTL_LANGS.has(fallback) : false;
}

function formatPrice(npr) {
  return `NPR ${npr.toLocaleString('en-NP')}`;
}

function renderMultilangMenu(langId) {
  const ui = getUI(langId);
  const grid = document.getElementById('ml-menu-grid');
  const resolved = resolveLang(langId);

  document.documentElement.lang = resolved === 'en' || resolved === 'us' || resolved === 'au' ? 'en' : resolved;
  document.documentElement.dir = isRtl(langId) ? 'rtl' : 'ltr';

  document.getElementById('ml-section-tag').textContent = ui.tag;
  document.getElementById('ml-section-title').textContent = ui.title;
  document.getElementById('ml-section-desc').textContent = ui.desc;
  document.getElementById('ml-menu-note').textContent = ui.note;
  document.getElementById('lang-select-label').textContent = ui.selectLabel;
  document.title = `Holy Grill | ${ui.pageTitle}`;

  grid.innerHTML = MENU_ITEMS.map((item) => {
    const tr = getTranslation(item, langId);
    const badge = item.featured
      ? `<div class="menu-card-badge">${ui.bestSeller}</div>`
      : '';

    const tags = tr.tags.map((tag) => `<li>${tag}</li>`).join('');

    return `
      <article class="menu-card visible${item.featured ? ' featured' : ''}">
        ${badge}
        <div class="menu-card-image">
          <img src="${item.image}" alt="${tr.name}">
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h3>${tr.name}</h3>
            <span class="price">${formatPrice(item.price)}</span>
          </div>
          <p class="menu-card-desc">${tr.desc}</p>
          <ul class="menu-tags">${tags}</ul>
        </div>
      </article>
    `;
  }).join('');
}

function initCountryDropdown(defaultLangId) {
  const wrapper = document.getElementById('country-dropdown');
  const trigger = document.getElementById('country-trigger');
  const list = document.getElementById('country-list');
  const hiddenInput = document.getElementById('country-select');

  let selectedId = defaultLangId || 'en';
  let isOpen = false;

  function getCountry(id) {
    return COUNTRIES.find((c) => c.id === id) || COUNTRIES[0];
  }

  function updateTrigger(country) {
    setFlagElement(trigger.querySelector('.country-flag'), country.flagCode);
    trigger.querySelector('.country-name').textContent = country.nativeName;
    hiddenInput.value = country.id;
  }

  function selectCountry(id) {
    selectedId = id;
    const country = getCountry(id);
    updateTrigger(country);
    closeDropdown();
    renderMultilangMenu(id);
    list.querySelectorAll('.country-option').forEach((opt) => {
      const isSelected = opt.dataset.id === id;
      opt.classList.toggle('selected', isSelected);
      opt.setAttribute('aria-selected', isSelected);
    });
  }

  function openDropdown() {
    isOpen = true;
    wrapper.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
  }

  function closeDropdown() {
    isOpen = false;
    wrapper.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  list.innerHTML = COUNTRIES.map(
    (c) => `
      <li
        role="option"
        class="country-option${c.id === selectedId ? ' selected' : ''}"
        data-id="${c.id}"
        aria-selected="${c.id === selectedId}"
        tabindex="-1"
      >
        <span class="country-flag" aria-hidden="true">${renderFlag(c.flagCode)}</span>
        <span class="country-name">${c.nativeName}</span>
      </li>
    `
  ).join('');

  updateTrigger(getCountry(selectedId));
  renderMultilangMenu(selectedId);

  trigger.addEventListener('click', () => {
    isOpen ? closeDropdown() : openDropdown();
  });

  list.addEventListener('click', (e) => {
    const option = e.target.closest('.country-option');
    if (option) selectCountry(option.dataset.id);
  });

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) closeDropdown();
  });

  trigger.addEventListener('keydown', (e) => {
    const options = [...list.querySelectorAll('.country-option')];
    const currentIndex = options.findIndex((o) => o.dataset.id === selectedId);

    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (!isOpen) openDropdown();
      const delta = e.key === 'ArrowDown' ? 1 : -1;
      const next = options[(currentIndex + delta + options.length) % options.length];
      next.focus();
    }

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (isOpen) {
        const focused = document.activeElement;
        if (focused.classList.contains('country-option')) {
          selectCountry(focused.dataset.id);
        }
      } else {
        openDropdown();
      }
    }

    if (e.key === 'Escape') closeDropdown();
  });

  list.querySelectorAll('.country-option').forEach((opt) => {
    opt.addEventListener('keydown', (e) => {
      const options = [...list.querySelectorAll('.country-option')];
      const idx = options.indexOf(opt);

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        options[(idx + 1) % options.length].focus();
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        options[(idx - 1 + options.length) % options.length].focus();
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectCountry(opt.dataset.id);
      }
    });
  });
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('country-dropdown')) {
      initCountryDropdown('en');
    }
  });
}
