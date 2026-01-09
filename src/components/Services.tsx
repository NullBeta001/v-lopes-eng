import { useTranslation } from "react-i18next";
import { Cog, Box, FileText, Ruler, Wrench, Shield, HardHat, ClipboardCheck, FileCheck } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, visible, viewportOptions, hoverLift, defaultTransition, staggerContainer, staggerItem } from "@/lib/animations";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

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
      className="h-screen bg-background relative overflow-hidden flex items-center"
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

      <div className="container mx-auto px-4 lg:px-8 py-4 relative z-10 w-full h-full flex flex-col justify-center">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-4"
          initial={fadeInUp}
          whileInView={visible}
          viewport={viewportOptions}
          transition={defaultTransition}
          exit={fadeInUp}
        >
          <span className="inline-block text-primary font-heading text-xs uppercase tracking-widest mb-1">
            {t("services.badge")}
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
            {t("services.title")}
            <span className="text-gradient-gold"> {t("services.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="lg:hidden w-full">
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%] sm:basis-[45%]">
                  <motion.div
                    className="group px-3 sm:px-4 py-4 sm:py-5 bg-card rounded-lg border border-border hover:border-primary/50 h-full"
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewportOptions}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={defaultTransition}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <motion.div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0"
                        whileHover={{
                          background: "linear-gradient(135deg, hsl(38 70% 50% / 0.3), hsl(38 70% 50% / 0.1))",
                          scale: 1.1,
                          rotate: 5,
                        }}
                        transition={defaultTransition}
                      >
                        <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </motion.div>
                      <h3 className="font-heading font-semibold text-sm sm:text-base text-foreground">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                      {service.description}
                    </p>

                    <ul className="space-y-1.5">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <motion.div
          className="hidden lg:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          exit="hidden"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group px-3 sm:px-4 py-4 sm:py-5 bg-card rounded-lg border border-border hover:border-primary/50"
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={defaultTransition}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <motion.div
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0"
                  whileHover={{
                    background: "linear-gradient(135deg, hsl(38 70% 50% / 0.3), hsl(38 70% 50% / 0.1))",
                    scale: 1.1,
                    rotate: 5,
                  }}
                  transition={defaultTransition}
                >
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </motion.div>
                <h3 className="font-heading font-semibold text-sm sm:text-base text-foreground">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                {service.description}
              </p>

              <ul className="space-y-1.5">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="line-clamp-1">{feature}</span>
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
