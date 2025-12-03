import { useTranslation } from "react-i18next";
import { Cog, Box, FileText, Ruler, Wrench, Shield, HardHat, ClipboardCheck, FileCheck } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, visible, viewportOptions, hoverLift, defaultTransition, staggerContainer, staggerItem } from "@/lib/animations";

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
    <motion.section
      id="servicos"
      className="py-24 bg-background relative overflow-hidden min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-5"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={fadeInUp}
          whileInView={visible}
          viewport={viewportOptions}
          transition={defaultTransition}
          exit={fadeInUp}
        >
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
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          exit="hidden"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50"
              variants={staggerItem}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={defaultTransition}
            >
              <motion.div
                className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6"
                whileHover={{
                  background: "linear-gradient(135deg, hsl(38 70% 50% / 0.3), hsl(38 70% 50% / 0.1))",
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={defaultTransition}
              >
                <service.icon className="w-8 h-8 text-primary" />
              </motion.div>

              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
