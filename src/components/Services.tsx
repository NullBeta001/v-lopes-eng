import { useTranslation } from "react-i18next";
import { Cog, Box, FileText, Ruler, Wrench, Shield, HardHat, ClipboardCheck, FileCheck } from "lucide-react";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Box,
      title: t("services.items.3dModeling.title"),
      description: t("services.items.3dModeling.description"),
      features: t("services.items.3dModeling.features", { returnObjects: true }) as string[],
    },
    {
      icon: FileText,
      title: t("services.items.technicalProjects.title"),
      description: t("services.items.technicalProjects.description"),
      features: t("services.items.technicalProjects.features", { returnObjects: true }) as string[],
    },
    {
      icon: Cog,
      title: t("services.items.mechanicalEngineering.title"),
      description: t("services.items.mechanicalEngineering.description"),
      features: t("services.items.mechanicalEngineering.features", { returnObjects: true }) as string[],
    },
    {
      icon: HardHat,
      title: t("services.items.nr35Inspection.title"),
      description: t("services.items.nr35Inspection.description"),
      features: t("services.items.nr35Inspection.features", { returnObjects: true }) as string[],
    },
    {
      icon: Shield,
      title: t("services.items.nr12Inspection.title"),
      description: t("services.items.nr12Inspection.description"),
      features: t("services.items.nr12Inspection.features", { returnObjects: true }) as string[],
    },
    {
      icon: ClipboardCheck,
      title: t("services.items.nr35Compliance.title"),
      description: t("services.items.nr35Compliance.description"),
      features: t("services.items.nr35Compliance.features", { returnObjects: true }) as string[],
    },
    {
      icon: FileCheck,
      title: t("services.items.technicalDocumentation.title"),
      description: t("services.items.technicalDocumentation.description"),
      features: t("services.items.technicalDocumentation.features", { returnObjects: true }) as string[],
    },
    {
      icon: Ruler,
      title: t("services.items.detailing.title"),
      description: t("services.items.detailing.description"),
      features: t("services.items.detailing.features", { returnObjects: true }) as string[],
    },
    {
      icon: Wrench,
      title: t("services.items.consulting.title"),
      description: t("services.items.consulting.description"),
      features: t("services.items.consulting.features", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading text-sm uppercase tracking-widest mb-4">
            {t("services.badge")}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {t("services.title")}
            <span className="text-gradient-gold"> {t("services.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
