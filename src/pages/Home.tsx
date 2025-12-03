// src/pages/Home.tsx

import { Link } from "react-router-dom";
import {
  ArrowRight,
  ExternalLink,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout/Layout";

import manufacturingImg from "@/assets/manufacturing.jpg";
import conferenceImg from "@/assets/conference.jpg";
import { useI18n } from "@/lib/i18n";

const Home = () => {
  const { t } = useI18n();

  const companies = [
    {
      name: "Muhtasham Doors & Furniture",
      category: t("category.manufacturing"),
      description: t("company.muhtasham_doors.description"),
      url: "#",
    },
    {
      name: "Muhtasham Metal",
      category: t("category.manufacturing"),
      description: t("company.muhtasham_metal.description"),
      url: "#",
    },
    {
      name: "Muhtasham Construction",
      category: t("category.construction"),
      description: t("company.muhtasham_construction.description"),
      url: "#",
    },
    {
      name: "Hi IT Solution",
      category: t("category.technology"),
      description: t("company.hi_it.description"),
      url: "#",
    },
    {
      name: "Eshikchi ERP",
      category: t("category.saas"),
      description: t("company.eshikchi.description"),
      url: "#",
    },
    {
      name: "Mebelchi ERP",
      category: t("category.saas"),
      description: t("company.mebelchi.description"),
      url: "#",
    },
    {
      name: "HSYS ERP",
      category: t("category.saas"),
      description: t("company.hsys.description"),
      url: "#",
    },
    {
      name: "SmartGo",
      category: t("category.technology"),
      description: t("company.smartgo.description"),
      url: "#",
    },
  ];

  return (
    <Layout>
      {/* ------------------ HERO SECTION ------------------ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#0A0F1C]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_45%,rgba(234,200,120,0.14),transparent_65%)]" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="animate-fade-in space-y-8">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-sm">
                <span className="text-[#EAC878] font-medium text-sm tracking-wide">
                  {t("home.badge")}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                {t("hero.title")}
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                {t("hero.lead")}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#EAC878] text-[#0B1220] font-semibold shadow-lg hover:bg-[#F5DFA1]"
                >
                  <Link to="/companies" className="flex items-center">
                    {t("hero.viewPortfolio")}
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-white border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10"
                >
                  <Link to="/contact">{t("cta.getInTouch")}</Link>
                </Button>
              </div>
            </div>

            {/* RIGHT – PORTRAIT */}
            <div className="hidden lg:flex justify-center relative">
              <div className="absolute -top-16 -left-16 w-96 h-96 bg-[#EAC878]/10 rounded-full blur-3xl" />
              <div
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                style={{ width: "420px", height: "600px" }}
              >
                <img
                  src="/photo_2025-11-28 14.39.10.jpeg"
                  alt={t("hero.alt")}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ ABOUT SECTION ------------------ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* IMAGE */}
            <div className="relative">
              <img
                src={manufacturingImg}
                alt={t("img.manufacturing.alt")}
                className="rounded-2xl shadow-lg"
              />
            </div>

            {/* TEXT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {t("about.title")}
              </h2>

              <p className="text-lg text-muted-foreground mb-5">
                {t("about.p1")}
              </p>

              <p className="text-lg text-muted-foreground mb-8">
                {t("about.p2")}
              </p>

              <Button
                asChild
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-primary"
              >
                <Link to="/about">
                  {t("about.readFullStory")}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ COMPANIES ------------------ */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-3">
              {t("companies.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("companies.sectionDescription")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {companies.map((company, index) => (
              <Card
                key={index}
                className="p-6 rounded-xl border border-transparent hover:border-gold/40 bg-card transition-all group"
              >
                <div className="flex justify-between mb-4">
                  <span className="px-3 py-1 bg-gold/20 text-gold text-xs rounded-full">
                    {company.category}
                  </span>
                  <ExternalLink
                    size={16}
                    className="text-muted-foreground group-hover:text-gold"
                  />
                </div>

                <h3 className="font-serif text-lg font-semibold group-hover:text-gold transition-colors mb-2">
                  {company.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {company.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-primary shadow-md"
            >
              <Link to="/companies">
                {t("companies.viewAll")}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ------------------ MEDIA ------------------ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                {t("media.title")}
              </h2>

              <p className="text-lg text-muted-foreground mb-6">
                {t("media.lead")}
              </p>

              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  {t("media.bullet.1")}
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  {t("media.bullet.2")}
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full mt-2" />
                  {t("media.bullet.3")}
                </li>
              </ul>

              <Button
                asChild
                variant="outline"
                className="mt-8 border-gold text-gold hover:bg-gold hover:text-primary"
              >
                <Link to="/media">
                  {t("media.viewCoverage")}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
            </div>

            {/* IMAGE */}
            <div>
              <img
                src={conferenceImg}
                alt={t("img.conference.alt")}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------ CTA ------------------ */}
      <section className="py-24 bg-gradient-to-br from-primary to-navy-light relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.15),transparent_55%)]" />

        <div className="relative z-10 text-center container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {t("cta.letsBuild")}
          </h2>

          <p className="text-xl text-white/85 mb-10">
            {t("cta.lead")}
          </p>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold-light text-primary px-8"
            >
              <Link to="/contact">
                {t("cta.getInTouch")}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/40 text-white hover:bg-white/10 px-8"
            >
              <a href="https://linkedin.com" target="_blank">
                {t("cta.connectLinkedIn")}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
