import { Award, Target, Heart, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout/Layout";
import { useI18n } from "@/lib/i18n";

const About = () => {
  const { t } = useI18n();
  const timeline = [
    { year: "2008", title: "The Beginning", description: "Started first manufacturing venture with a small team" },
    { year: "2012", title: "Expansion", description: "Launched Muhtasham brand and expanded into furniture" },
    { year: "2016", title: "Digital Transformation", description: "Founded Hi IT Solution and entered tech sector" },
    { year: "2020", title: "Innovation Era", description: "Developed proprietary ERP systems for manufacturing" },
    { year: "2024", title: "Multi-Brand Ecosystem", description: "Xovandamir Holding managing 12+ companies" },
  ];

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to the highest standards in every venture, never compromising on quality."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Embracing new technologies and creative solutions to solve complex challenges."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Building trust through transparency, honesty, and ethical business practices."
    },
    {
      icon: Award,
      title: "Impact",
      description: "Creating meaningful change in communities through employment and economic growth."
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              {t("about.title", "About Husniddin Gapparov")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Entrepreneur, Visionary, and Builder of Sustainable Businesses
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-8">My Journey</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                My entrepreneurial journey began over 15 years ago with a simple vision: to build businesses 
                that create value not just for shareholders, but for employees, customers, and communities. 
                Starting from a small manufacturing operation, I learned the fundamentals of business through 
                hands-on experience—understanding production processes, managing teams, and delivering quality products.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As the business grew, I recognized the power of diversification and vertical integration. 
                This led to the creation of Xovandamir Holding, a multi-brand ecosystem spanning manufacturing, 
                construction, and technology. Each company in our portfolio addresses specific market needs while 
                maintaining our core commitment to excellence and innovation.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The transition into technology was a natural evolution. Witnessing the inefficiencies in 
                traditional manufacturing, I invested in developing proprietary ERP systems—Eshikchi ERP, 
                Mebelchi ERP, and HSYS ERP. These platforms now power not only our own operations but also 
                help other businesses in the industry optimize their processes.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, as CEO and Founder, I lead a team of over 500 talented professionals across multiple 
                companies. But beyond the numbers and achievements, what drives me is the opportunity to 
                create sustainable businesses that make a lasting positive impact on society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
              Milestones
            </h2>
            
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gold/30" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-20 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="absolute left-4 w-8 h-8 bg-gold rounded-full flex items-center justify-center shadow-medium">
                      <div className="w-3 h-3 bg-primary rounded-full" />
                    </div>
                    
                    <Card className="p-6">
                      <div className="text-gold font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4 text-center">
              Core Values
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              The principles that guide every decision and action across all our ventures
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-8 hover:shadow-medium transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-gold" size={28} />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-primary to-navy-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
                Mission
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To build and scale exceptional businesses that create lasting value through innovation, 
                operational excellence, and a commitment to sustainable growth. We strive to be industry 
                leaders while empowering our teams and serving our communities.
              </p>
            </Card>
            
            <Card className="p-8 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20">
              <h3 className="text-3xl font-serif font-bold text-primary-foreground mb-4">
                Vision
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                To establish a globally recognized multi-brand ecosystem that sets the standard for 
                excellence in manufacturing and technology. We envision a future where our innovations 
                drive industry transformation and our businesses create opportunities for thousands.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
