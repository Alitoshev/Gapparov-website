import { Link } from "react-router-dom";
import { Mail, Linkedin, Instagram, Send } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      { name: "Companies", path: "/companies" },
      { name: "Media", path: "/media" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  };

  const socialLinks = [
    { name: "Telegram", icon: Send, url: "https://t.me/husniddin" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "Email", icon: Mail, url: "mailto:contact@husniddin.com" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-primary font-serif font-bold text-xl">H</span>
              </div>
              <span className="font-serif text-xl font-semibold">
                Husniddin Gapparov
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Businessman, CEO, and Founder building multi-brand companies and digital ecosystems across manufacturing and technology sectors.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-foreground/10 hover:bg-gold rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon size={18} className="group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.navigation.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="mailto:contact@husniddin.com" className="hover:text-gold transition-colors">
                  contact@husniddin.com
                </a>
              </li>
              <li>
                <a href="tel:+998901234567" className="hover:text-gold transition-colors">
                  +998 (90) 123-45-67
                </a>
              </li>
              <li className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block px-4 py-2 bg-gold text-primary rounded-lg hover:bg-gold-light transition-colors font-medium"
                >
                  Business Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Husniddin Gapparov. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-primary-foreground/60 hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
