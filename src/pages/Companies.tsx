import { ExternalLink, Building2, Code, Hammer, Truck } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout/Layout";
import { useI18n } from "@/lib/i18n";

const Companies = () => {
  const categories = [
    {
      name: "Manufacturing",
      icon: Building2,
      companies: [
        {
          name: "Muhtasham Doors & Furniture",
          description: "Leading manufacturer of premium doors and custom furniture solutions. Serving residential and commercial clients with cutting-edge designs and superior craftsmanship.",
          mission: "To redefine interior spaces through innovative door and furniture designs that combine functionality with aesthetic excellence.",
          website: "https://muhtasham-doors.example.com",
        },
        {
          name: "Muhtasham Metal",
          description: "Advanced metal fabrication facility specializing in structural steel, architectural metalwork, and custom metal solutions for construction and industrial applications.",
          mission: "Delivering precision-engineered metal products that meet the highest standards of quality and durability.",
          website: "https://muhtasham-metal.example.com",
        },
      ],
    },
    {
      name: "Construction",
      icon: Hammer,
      companies: [
        {
          name: "Muhtasham Construction",
          description: "Full-service construction company providing comprehensive solutions from design to completion. Specializing in commercial buildings, residential complexes, and infrastructure projects.",
          mission: "Building structures that stand the test of time while embracing sustainable construction practices.",
          website: "https://muhtasham-construction.example.com",
        },
      ],
    },
    {
      name: "Technology & SaaS",
      icon: Code,
      companies: [
        {
          name: "Hi IT Solution",
          description: "Enterprise IT consulting firm offering digital transformation, software development, and technology infrastructure services to businesses across industries.",
          mission: "Empowering businesses through innovative technology solutions and expert consulting services.",
          website: "https://hiitsolution.example.com",
        },
        {
          name: "Eshikchi ERP",
          description: "Cloud-based ERP system designed specifically for door manufacturers. Streamlines production planning, inventory management, and order processing.",
          mission: "Revolutionizing door manufacturing with intelligent automation and real-time insights.",
          website: "https://eshikchi-erp.example.com",
        },
        {
          name: "Mebelchi ERP",
          description: "Comprehensive ERP platform tailored for furniture manufacturers. Manages everything from raw materials to finished products with advanced analytics.",
          mission: "Optimizing furniture production through smart technology and data-driven decision making.",
          website: "https://mebelchi-erp.example.com",
        },
        {
          name: "HSYS ERP",
          description: "Universal business management system providing end-to-end solutions for manufacturing, distribution, and service companies. Modular architecture adapts to any business model.",
          mission: "Creating flexible ERP solutions that grow with your business and adapt to changing needs.",
          website: "https://hsys-erp.example.com",
        },
      ],
    },
    {
      name: "Innovation & Mobility",
      icon: Truck,
      companies: [
        {
          name: "SmartGo",
          description: "Smart mobility and logistics platform leveraging IoT and AI for efficient transportation management. Connecting suppliers, carriers, and customers in real-time.",
          mission: "Transforming logistics through intelligent routing, real-time tracking, and automated coordination.",
          website: "https://smartgo.example.com",
        },
        {
          name: "TurboBooker",
          description: "Advanced booking and reservation system for service businesses. Features automated scheduling, payment processing, and customer relationship management.",
          mission: "Simplifying appointment management with seamless booking experiences and operational efficiency.",
          website: "https://turbobooker.example.com",
        },
      ],
    },
  ];

  const { t } = useI18n();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              {t("companies.title", "Business Portfolio")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A diverse ecosystem of companies driving innovation across manufacturing, 
              construction, technology, and digital services
            </p>
          </div>
        </div>
      </section>

      {/* Companies by Category */}
      {categories.map((category, categoryIndex) => {
        const Icon = category.icon;
        return (
          <section 
            key={categoryIndex} 
            className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-center mb-12">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                    <Icon className="text-gold" size={24} />
                  </div>
                  <h2 className="text-4xl font-serif font-bold text-foreground">
                    {category.name}
                  </h2>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {category.companies.map((company, index) => (
                  <Card 
                    key={index}
                    className="p-8 hover:shadow-medium transition-all duration-300 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl font-serif font-semibold text-foreground group-hover:text-gold transition-colors">
                        {company.name}
                      </h3>
                      <ExternalLink 
                        size={20} 
                        className="text-muted-foreground group-hover:text-gold transition-colors flex-shrink-0 ml-2" 
                      />
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {company.description}
                    </p>

                    <div className="mb-6 p-4 bg-secondary/50 rounded-lg border-l-4 border-gold">
                      <p className="text-sm font-medium text-foreground italic">
                        "{company.mission}"
                      </p>
                    </div>

                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-gold text-gold hover:bg-gold hover:text-primary"
                    >
                      <a href={company.website} target="_blank" rel="noopener noreferrer">
                        Visit Website
                        <ExternalLink className="ml-2" size={16} />
                      </a>
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Xovandamir Holding Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-navy-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-6 py-3 bg-gold/20 backdrop-blur-sm rounded-full">
              <span className="text-gold font-medium">The Parent Company</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6">
              Xovandamir Holding
            </h2>
            
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Xovandamir Holding is the parent organization managing and coordinating all business units. 
              We provide strategic direction, shared services, and centralized resources to ensure each 
              company operates at peak efficiency while maintaining its unique identity and market focus.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-4xl font-serif font-bold text-gold mb-2">12+</div>
                <div className="text-primary-foreground/80">Active Companies</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-4xl font-serif font-bold text-gold mb-2">500+</div>
                <div className="text-primary-foreground/80">Employees</div>
              </div>
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
                <div className="text-4xl font-serif font-bold text-gold mb-2">4</div>
                <div className="text-primary-foreground/80">Industry Sectors</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Companies;
