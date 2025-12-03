import React, { createContext, useContext, useMemo, useState, ReactNode } from "react";

type Lang = "en" | "ru" | "uz";

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.companies": "Companies",
    "nav.media": "Media",
    "nav.contact": "Contact",
    "cta.getInTouch": "Get in Touch",
    "hero.title": "Husniddin Gapparov",
    "hero.lead": "Building modern companies, digital ecosystems and innovative solutions shaping the industries of tomorrow.",
    "hero.viewPortfolio": "View Portfolio",
    "home.badge": "Founder • CEO • Business Leader",
    "stats.years": "Years of Experience",
    "stats.founded": "Companies Founded",
    "stats.team": "Team Members",
    "stats.revenue": "Annual Revenue",
    "about.title": "Vision Meets Execution",
    "about.readFullStory": "Read Full Story",
    "about.p1": "My entrepreneurial journey began over 15 years ago with a simple vision: to build businesses that create value not just for shareholders, but for employees, customers, and communities.",
    "about.p2": "As the business grew, I recognized the power of diversification and vertical integration. This led to the creation of Xovandamir Holding, a multi-brand ecosystem spanning manufacturing, construction, and technology.",
    "about.p3": "The transition into technology was a natural evolution. I invested in developing proprietary ERP systems—Eshikchi ERP, Mebelchi ERP, and HSYS ERP—that now power our operations and help other businesses optimize processes.",
    "about.p4": "Today, as CEO and Founder, I lead a team of over 500 talented professionals. Beyond numbers, I aim to create sustainable businesses that make a lasting positive impact on society.",
    "companies.title": "Business Portfolio",
    "companies.sectionDescription": "A unified ecosystem across manufacturing, digital technology, and enterprise automation.",
    "companies.viewAll": "View All Companies",
    "media.title": "Industry Leadership",
    "media.lead": "Featured in business media and on global tech stages—sharing insights on entrepreneurship, digital transformation, and manufacturing excellence.",
    "media.bullet.1": "Keynote speaker at Tech Innovation Summit 2024",
    "media.bullet.2": "Featured in Business Leadership Magazine",
    "media.bullet.3": "Panelist at Manufacturing Excellence Forum",
    "media.viewCoverage": "View Media Coverage",
    "contact.title": "Let's Connect",
    "contact.lead": "Interested in partnerships, investment opportunities, or business collaborations? I'm always open to meaningful conversations.",
    "contact.sendMessage": "Send a Message",
    "contact.sendButton": "Send Message",
    "contact.sending": "Sending...",
    "contact.infoTitle": "Contact Information",
    "contact.socialTitle": "Connect on Social Media",
    "contact.sentDescription": "Thank you for reaching out. We'll get back to you soon.",
    "notfound.message": "Oops! Page not found",
    "cta.connectLinkedIn": "Connect on LinkedIn",
    "cta.letsBuild": "Let's Build Something Together",
    "cta.lead": "Open for partnerships, enterprise collaborations, and high-impact digital transformation initiatives.",
  },
  ru: {
    "nav.home": "Главная",
    "nav.about": "О проекте",
    "nav.companies": "Компании",
    "nav.media": "Медиа",
    "nav.contact": "Контакты",
    "cta.getInTouch": "Связаться",
    "hero.title": "Хусниддин Гаппарoв",
    "hero.lead": "Создаю современные компании, цифровые экосистемы и инновационные решения, формирующие отрасли будущего.",
    "hero.viewPortfolio": "Посмотреть портфолио",
    "home.badge": "Основатель • Генеральный директор • Деловой лидер",
    "stats.years": "Лет опыта",
    "stats.founded": "Основано компаний",
    "stats.team": "Сотрудников",
    "stats.revenue": "Годовой доход",
    "about.title": "Видение и реализация",
    "about.readFullStory": "Читать полностью",
    "about.p1": "Моё предпринимательское путешествие началось более 15 лет назад с простой идеи: строить бизнесы, которые создают ценность не только для акционеров, но и для сотрудников, клиентов и обществ.",
    "about.p2": "По мере роста бизнеса я осознал силу диверсификации и вертикальной интеграции. Это привело к созданию Xovandamir Holding — многобрендовой экосистемы в области производства, строительства и технологий.",
    "about.p3": "Переход в сферу технологий был естественной эволюцией. Я инвестировал в разработку собственных ERP-систем — Eshikchi ERP, Mebelchi ERP и HSYS ERP, которые сейчас используют наши компании и партнеры.",
    "about.p4": "Сегодня, как генеральный директор и основатель, я руковожу командой из более чем 500 профессионалов. За числами стоит стремление создавать устойчивый бизнес с позитивным влиянием на общество.",
    "about.readFullStory": "Читать полностью",
    "companies.title": "Портфель бизнеса",
    "companies.sectionDescription": "Единая экосистема в сфере производства, цифровых технологий и автоматизации предприятий.",
    "companies.viewAll": "Просмотреть все компании",
    "media.title": "Лидерство в отрасли",
    "media.lead": "Публикации в деловых СМИ и выступления на глобальных технологических площадках — делюсь инсайтами об предпринимательстве, цифровой трансформации и производственном мастерстве.",
    "media.bullet.1": "Ключевой докладчик на Tech Innovation Summit 2024",
    "media.bullet.2": "Публикация в Business Leadership Magazine",
    "media.bullet.3": "Участник панельной дискуссии на Manufacturing Excellence Forum",
    "media.viewCoverage": "Посмотреть публикации",
    "contact.title": "Связаться",
    "contact.sendMessage": "Отправить сообщение",
    "contact.sendButton": "Отправить сообщение",
    "contact.sending": "Отправка...",
    "contact.infoTitle": "Контактная информация",
    "contact.socialTitle": "Связаться в соцсетях",
    "contact.sentDescription": "Спасибо за обращение. Мы свяжемся с вами в ближайшее время.",
    "cta.connectLinkedIn": "Связаться в LinkedIn",
    "cta.letsBuild": "Давайте создадим что-то вместе",
    "contact.lead": "Заинтересованы в партнёрстве, инвестициях или сотрудничестве? Я всегда открыт для содержательных разговоров.",
    "contact.sendMessage": "Отправить сообщение",
    "contact.sendButton": "Отправить сообщение",
    "contact.sending": "Отправка...",
    "contact.infoTitle": "Контактная информация",
    "contact.socialTitle": "Связаться в соцсетях",
    "contact.sentDescription": "Спасибо за обращение. Мы свяжемся с вами в ближайшее время.",
    "notfound.message": "Упс! Страница не найдена",
    "cta.letsBuild": "Давайте создадим что-то вместе",
    "cta.lead": "Открыт к партнёрствам, корпоративным коллаборациям и инициативам по цифровой трансформации высокого воздействия.",
  },
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.about": "Haqida",
    "nav.companies": "Kompaniyalar",
    "nav.media": "Media",
    "nav.contact": "Bog'lanish",
    "cta.getInTouch": "Bog'lanish",
    "hero.title": "Xusniddin Gapparov",
    "hero.lead": "Zamonaviy kompaniyalar, raqamli ekotizimlar va sanoatni shakllantiruvchi innovatsion yechimlar quraman.",
    "hero.viewPortfolio": "Portfellarni ko'rish",
    "home.badge": "Tashabbuschi • Bosh direktor • Biznes yetakchi",
    "stats.years": "Ish tajribasi (yil)",
    "stats.founded": "Tashkil etilgan kompaniyalar",
    "stats.team": "Jamoa a'zolari",
    "stats.revenue": "Yillik daromad",
    "about.title": "Vizyon va ijro",
    "about.readFullStory": "To'liq hikoyani o'qish",
    "about.p1": "Tadbirkorlik sayohatim 15 yildan ortiq vaqt oldin sodda maqsad bilan boshlandi: faqat aktsiyotchilar uchun emas, xodimlar, mijozlar va jamoalar uchun ham qiymat yaratadigan bizneslarni qurish.",
    "about.p2": "Biznes o'sgani sayin, diversifikatsiya va vertikal integratsiyaning kuchini angladim. Bu Xovandamir Holding — ishlab chiqarish, qurilish va texnologiyalarni qamrab olgan ko'pbrendli ekotizimni yaratishga olib keldi.",
    "about.p3": "Texnologiyaga o'tish tabiiy evolyutsiya edi. Men Eshikchi ERP, Mebelchi ERP va HSYS ERP kabi o'zimizning ERP tizimlarini rivojlantirishga sarmoya kiritdim, ular hozirda bizning operatsiyalarimizni va boshqa bizneslarni qo'llab-quvvatlaydi.",
    "about.p4": "Bugun CEO va asoschi sifatida men 500+ dan ortiq iqtidorli mutaxassislarni boshqaraman. Raqamlardan tashqari, maqsadim — jamiyatga mustahkam ijobiy ta'sir ko'rsatadigan barqaror bizneslarni yaratish.",
    "about.readFullStory": "To'liq hikoyani o'qish",
    "companies.title": "Biznes portfeli",
    "companies.sectionDescription": "Ishlab chiqarish, raqamli texnologiyalar va korxona avtomatizatsiyasi bo'yicha yagona ekotizim.",
    "companies.viewAll": "Barcha kompaniyalarni ko'rish",
    "media.title": "Sanoat yetakchiligi",
    "media.lead": "Biznes ommaviy axborot vositalarida va global texnologik maydonlarda taqdim etilgan — tadbirkorlik, raqamli transformatsiya va ishlab chiqarish muammolari haqida fikrlar.",
    "media.bullet.1": "Tech Innovation Summit 2024da asosiy ma'ruzachi",
    "media.bullet.2": "Business Leadership Magazineda e'lon qilingan",
    "media.bullet.3": "Manufacturing Excellence Forumda panel ishtirokchisi",
    "media.viewCoverage": "Mediyada ko'rish",
    "contact.title": "Bog'lanish",
    "contact.sendMessage": "Xabar yuborish",
    "contact.sendButton": "Xabar yuborish",
    "contact.sending": "Yuborilmoqda...",
    "contact.infoTitle": "Kontakt ma'lumotlari",
    "contact.socialTitle": "Ijtimoiy tarmoqlarda bog'laning",
    "contact.sentDescription": "Bog'langaningiz uchun rahmat. Tez orada javob beramiz.",
    "cta.connectLinkedIn": "LinkedInda bog'laning",
    "cta.letsBuild": "Keling birga nimadir quralik",
    "contact.lead": "Hamkorlik, investitsiya imkoniyatlari yoki biznes hamkorliklari bilan qiziqasizmi? Men har doim mazmunli suhbatlarga ochiqman.",
    "contact.sendMessage": "Xabar yuborish",
    "contact.sendButton": "Xabar yuborish",
    "contact.sending": "Yuborilmoqda...",
    "contact.infoTitle": "Kontakt ma'lumotlari",
    "contact.socialTitle": "Ijtimoiy tarmoqlarda bog'laning",
    "contact.sentDescription": "Bog'langaningiz uchun rahmat. Tez orada javob beramiz.",
    "notfound.message": "Afsus! Sahifa topilmadi",
    "cta.letsBuild": "Keling birga nimadir quralik",
    "cta.lead": "Hamkorliklar, korporativ hamkorliklar va yuqori ta'sirli raqamli transformatsiya tashabbuslariga ochiqman.",
  },
};

const I18nContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, fallback?: string) => string;
} | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem("site_lang") as Lang | null;
      if (saved && (saved === "en" || saved === "ru" || saved === "uz")) return saved;
    } catch (e) {}
    const nav = typeof navigator !== "undefined" ? navigator.language : "en";
    if (nav.startsWith("ru")) return "ru";
    if (nav.startsWith("uz") || nav.startsWith("uz-")) return "uz";
    return "en";
  });

  const setLangWithSave = (l: Lang) => {
    setLang(l);
    try {
      localStorage.setItem("site_lang", l);
    } catch (e) {}
  };

  const t = (key: string, fallback = "") => {
    return translations[lang][key] ?? fallback ?? key;
  };

  const value = useMemo(() => ({ lang, setLang: setLangWithSave, t }), [lang]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

export default translations;
