import { useState } from "react";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout/Layout";
import { useI18n } from "@/lib/i18n";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t("cta.getInTouch", "Message Sent!"),
        description: t("contact.sentDescription", "Thank you for reaching out. We'll get back to you soon."),
      });
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "contact@husniddin.com",
      link: "mailto:contact@husniddin.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+998 (90) 123-45-67",
      link: "tel:+998901234567",
    },
    {
      icon: MapPin,
      label: "Office",
      value: "Tashkent, Uzbekistan",
      link: "#",
    },
  ];

  const socialLinks = [
    { name: "Telegram", icon: Send, url: "https://t.me/husniddin" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
  ];

  const { t } = useI18n();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              {t("contact.title", "Let's Connect")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t(
                "contact.lead",
                "Interested in partnerships, investment opportunities, or business collaborations? I'm always open to meaningful conversations."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                {t("contact.sendMessage", "Send a Message")}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 90 123 45 67"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your inquiry or proposal..."
                    rows={6}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold-light text-primary font-semibold"
                  size="lg"
                >
                  {isSubmitting ? t("contact.sending", "Sending...") : t("contact.sendButton", "Send Message")}
                </Button>
              </form>
            </div>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  {t("contact.infoTitle", "Contact Information")}
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Icon className="text-gold" size={20} />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-muted-foreground mb-1">
                              {info.label}
                            </p>
                            <a 
                              href={info.link}
                              className="text-foreground hover:text-gold transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-semibold text-foreground mb-4">
                  {t("contact.socialTitle", "Connect on Social Media")}
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-secondary hover:bg-gold rounded-lg flex items-center justify-center transition-colors group"
                        aria-label={social.name}
                      >
                        <Icon size={20} className="text-foreground group-hover:text-primary transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <Card className="p-6 bg-gradient-to-br from-gold/10 to-transparent border-gold/30">
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  What types of partnerships are you open to?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm interested in strategic partnerships, joint ventures, and investment opportunities 
                  across manufacturing, technology, and innovation sectors. Each proposal is evaluated 
                  based on strategic fit and mutual value creation.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  How long does it typically take to get a response?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I review all business inquiries personally and aim to respond within 2-3 business days. 
                  For urgent matters, please indicate this in your message.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Do you offer consulting services?
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  While my primary focus is on managing my business portfolio, I occasionally engage in 
                  advisory roles for select projects that align with my expertise and interests.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
