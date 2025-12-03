import { Play, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout/Layout";
import { useI18n } from "@/lib/i18n";
import conferenceImg from "@/assets/conference.jpg";
import manufacturingImg from "@/assets/manufacturing.jpg";

const Media = () => {
  const interviews = [
    {
      title: "Building a Multi-Brand Empire",
      publication: "Business Leadership Magazine",
      date: "March 2024",
      excerpt: "Husniddin Gapparov shares insights on managing diverse business portfolios and maintaining excellence across multiple industries.",
      type: "Article",
    },
    {
      title: "Digital Transformation in Manufacturing",
      publication: "Tech Innovation Podcast",
      date: "February 2024",
      excerpt: "A deep dive into how ERP systems are revolutionizing traditional manufacturing processes.",
      type: "Podcast",
    },
    {
      title: "The Future of Smart Logistics",
      publication: "Industry Weekly",
      date: "January 2024",
      excerpt: "Discussion on how SmartGo is changing the logistics landscape with AI and IoT integration.",
      type: "Interview",
    },
  ];

  const speeches = [
    {
      event: "Tech Innovation Summit 2024",
      title: "From Manufacturing to SaaS: A Transformation Journey",
      date: "April 2024",
      location: "Dubai, UAE",
      image: conferenceImg,
    },
    {
      event: "Manufacturing Excellence Forum",
      title: "Operational Excellence in Multi-Brand Organizations",
      date: "March 2024",
      location: "Tashkent, Uzbekistan",
      image: manufacturingImg,
    },
  ];

  const testimonials = [
    {
      quote: "Husniddin's approach to building sustainable businesses while embracing innovation is truly inspiring. His ERP systems have transformed how we operate.",
      author: "Sarah Johnson",
      position: "CEO, Manufacturing Solutions Inc.",
    },
    {
      quote: "A visionary leader who understands both the art and science of business. His insights on scaling operations have been invaluable.",
      author: "Michael Chen",
      position: "Managing Director, Tech Ventures Group",
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
              {t("media.title", "Media & Press")}
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Featured interviews, speaking engagements, and industry recognition
            </p>
          </div>
        </div>
      </section>

      {/* Recent Interviews & Articles */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Recent Interviews & Articles
          </h2>

          <div className="max-w-5xl mx-auto space-y-6">
            {interviews.map((interview, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xs font-medium px-3 py-1 bg-gold/20 text-gold rounded-full">
                        {interview.type}
                      </span>
                      <span className="text-sm text-muted-foreground">{interview.date}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-2">
                      {interview.title}
                    </h3>
                    <p className="text-gold font-medium mb-3">{interview.publication}</p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{interview.excerpt}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Engagements */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            Speaking Engagements
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {speeches.map((speech, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={speech.image} 
                    alt={speech.event}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-primary-foreground font-medium">{speech.event}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                    {speech.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{speech.date}</span>
                    <span>{speech.location}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-foreground mb-12 text-center">
            What People Say
          </h2>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 relative">
                <Quote className="absolute top-6 right-6 text-gold/20" size={48} />
                <p className="text-lg text-foreground italic mb-6 leading-relaxed relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-navy-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-primary-foreground mb-6">
              Media Inquiries
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              For press inquiries, interview requests, or speaking opportunities, please contact our media team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:press@husniddin.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-gold hover:bg-gold-light text-primary font-semibold rounded-lg transition-colors"
              >
                Contact Media Team
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold rounded-lg transition-colors"
              >
                Download Media Kit
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Media;
