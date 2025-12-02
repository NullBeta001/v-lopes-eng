import { ArrowDown, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const { t } = useTranslation();
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              {t("hero.badge")}
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {t("hero.title")}
            <span className="text-gradient-gold block mt-2">{t("hero.titleHighlight")}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              variant="hero"
              size="xl"
              onClick={() => scrollToSection("#projetos")}
            >
              {t("hero.viewProjects")}
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={() => scrollToSection("#contato")}
            >
              <Play size={18} className="mr-1" />
              {t("hero.contactUs")}
            </Button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "10+", label: t("hero.stats.years") },
              { value: "150+", label: t("hero.stats.projects") },
              { value: "50+", label: t("hero.stats.clients") },
              { value: "100%", label: t("hero.stats.commitment") },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#sobre"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#sobre");
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
