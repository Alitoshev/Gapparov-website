import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { t, lang, setLang } = useI18n();

  const navLinks = [
    { name: t("nav.home", "Home"), path: "/" },
    { name: t("nav.about", "About"), path: "/about" },
    { name: t("nav.companies", "Companies"), path: "/companies" },
    { name: t("nav.media", "Media"), path: "/media" },
    { name: t("nav.contact", "Contact"), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center shadow-medium">
              <span className="text-primary font-serif font-bold text-xl">H</span>
            </div>
            <span className="font-serif text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
              Husniddin Gapparov
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  isActive(link.path)
                    ? "text-gold"
                    : "text-foreground hover:text-gold"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            ))}
            {/* Language selector */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setLang("en")}
                className={`text-sm px-2 py-1 rounded ${lang === "en" ? "bg-gold text-primary" : "text-foreground hover:text-gold"}`}
                aria-label="English"
              >
                EN
              </button>

              <button
                onClick={() => setLang("ru")}
                className={`text-sm px-2 py-1 rounded ${lang === "ru" ? "bg-gold text-primary" : "text-foreground hover:text-gold"}`}
                aria-label="Russian"
              >
                RU
              </button>

              <button
                onClick={() => setLang("uz")}
                className={`text-sm px-2 py-1 rounded ${lang === "uz" ? "bg-gold text-primary" : "text-foreground hover:text-gold"}`}
                aria-label="Uzbek"
              >
                UZ
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild variant="default" className="bg-gold hover:bg-gold-light text-primary font-medium">
              <Link to="/contact">{t("cta.getInTouch", "Get in Touch")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-card border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-2 text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? "text-gold bg-secondary/50"
                      : "text-foreground hover:text-gold hover:bg-secondary/30"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Button asChild className="w-full bg-gold hover:bg-gold-light text-primary">
                  <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    {t("cta.getInTouch", "Get in Touch")}
                  </Link>
                </Button>
              </div>
              {/* Mobile language buttons */}
              <div className="px-4 pt-2 flex gap-2">
                <button onClick={() => { setLang("en"); setIsMobileMenuOpen(false); }} className={`px-3 py-2 rounded ${lang === "en" ? "bg-gold text-primary" : "bg-card text-foreground"}`}>EN</button>
                <button onClick={() => { setLang("ru"); setIsMobileMenuOpen(false); }} className={`px-3 py-2 rounded ${lang === "ru" ? "bg-gold text-primary" : "bg-card text-foreground"}`}>RU</button>
                <button onClick={() => { setLang("uz"); setIsMobileMenuOpen(false); }} className={`px-3 py-2 rounded ${lang === "uz" ? "bg-gold text-primary" : "bg-card text-foreground"}`}>UZ</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
