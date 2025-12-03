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
    "stats.years": "Years of Experience",
    "stats.founded": "Companies Founded",
    "stats.team": "Team Members",
    "stats.revenue": "Annual Revenue",
    "about.title": "Vision Meets Execution",
    "companies.title": "Business Portfolio",
    "media.title": "Industry Leadership",
    "contact.title": "Let's Connect",
    "contact.lead": "Interested in partnerships, investment opportunities, or business collaborations? I'm always open to meaningful conversations.",
    "contact.sendMessage": "Send a Message",
    "contact.sendButton": "Send Message",
    "contact.sending": "Sending...",
    "contact.infoTitle": "Contact Information",
    "contact.socialTitle": "Connect on Social Media",
    "contact.sentDescription": "Thank you for reaching out. We'll get back to you soon.",
    "cta.letsBuild": "Let's Build Something Together",
    "notfound.message": "Oops! Page not found",
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
    "stats.years": "Лет опыта",
    "stats.founded": "Основано компаний",
    "stats.team": "Сотрудников",
    "stats.revenue": "Годовой доход",
    "about.title": "Видение и реализация",
    "companies.title": "Портфель бизнеса",
    "media.title": "Лидерство в отрасли",
    "contact.title": "Связаться",
    "contact.lead": "Заинтересованы в партнёрстве, инвестициях или сотрудничестве? Я всегда открыт для содержательных разговоров.",
    "contact.sendMessage": "Отправить сообщение",
    "contact.sendButton": "Отправить сообщение",
    "contact.sending": "Отправка...",
    "contact.infoTitle": "Контактная информация",
    "contact.socialTitle": "Связаться в соцсетях",
    "contact.sentDescription": "Спасибо за обращение. Мы свяжемся с вами в ближайшее время.",
    "cta.letsBuild": "Давайте создадим что-то вместе",
    "notfound.message": "Упс! Страница не найдена",
  },
  uz: {
    "nav.home": "Bosh sahifa",
    "nav.about": "Haqida",
    "nav.companies": "Kompaniyalar",
    "nav.media": "Media",
    "nav.contact": "Bog'lanish",
    "cta.getInTouch": "Bog'lanish",
    "hero.title": "Husniddin Gapparov",
    "hero.lead": "Zamonaviy kompaniyalar, raqamli ekotizimlar va sanoatni shakllantiruvchi innovatsion yechimlar quraman.",
    "hero.viewPortfolio": "Portfellarni ko'rish",
    "stats.years": "Ish tajribasi (yil)",
    "stats.founded": "Tashkil etilgan kompaniyalar",
    "stats.team": "Jamoa a'zolari",
    "stats.revenue": "Yillik daromad",
    "about.title": "Vizyon va ijro",
    "companies.title": "Biznes portfeli",
    "media.title": "Sanoat yetakchiligi",
    "contact.title": "Bog'lanish",
    "contact.lead": "Hamkorlik, investitsiya imkoniyatlari yoki biznes hamkorliklari bilan qiziqasizmi? Men har doim mazmunli suhbatlarga ochiqman.",
    "contact.sendMessage": "Xabar yuborish",
    "contact.sendButton": "Xabar yuborish",
    "contact.sending": "Yuborilmoqda...",
    "contact.infoTitle": "Kontakt ma'lumotlari",
    "contact.socialTitle": "Ijtimoiy tarmoqlarda bog'laning",
    "contact.sentDescription": "Bog'langaningiz uchun rahmat. Tez orada javob beramiz.",
    "cta.letsBuild": "Keling birga nimadir quralik",
    "notfound.message": "Afsus! Sahifa topilmadi",
  },
};

type I18nContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string, fallback?: string) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

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

  return React.createElement(I18nContext.Provider, { value }, children);
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};


export default translations;
