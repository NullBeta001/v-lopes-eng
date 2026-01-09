import { useTranslation } from "react-i18next";
import { Target, Award, Users, Lightbulb } from "lucide-react";
import { motion } from "motion/react";
import { fadeInLeft, fadeInRight, visible, viewportOptions, hoverLift, defaultTransition, staggerContainer, staggerItem } from "@/lib/animations";

const About = () => {
  const { t } = useTranslation();

  const software = [
    { name: "SolidWorks", image: "/tools/solid-symbol.png" },
    { name: "AutoCAD", image: "/tools/autocad.webp" },
    { name: "SketchUp", image: "/tools/sketchup.png" },
  ];

  const values = [
    {
      icon: Target,
      title: t("about.values.precision.title"),
      description: t("about.values.precision.description"),
    },
    {
      icon: Award,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      icon: Users,
      title: t("about.values.partnership.title"),
      description: t("about.values.partnership.description"),
    },
    {
      icon: Lightbulb,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
  ];

  return (
    <motion.section
      id="sobre"
      className="h-screen bg-card relative overflow-hidden flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      <motion.div
        className="absolute inset-0 bg-blueprint opacity-20"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8 md:py-12 relative z-10 w-full h-screen flex items-center overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center w-full">
          <motion.div
            initial={fadeInLeft}
            whileInView={visible}
            viewport={viewportOptions}
            transition={defaultTransition}
            exit={fadeInLeft}
          >
            <span className="inline-block text-primary font-heading text-xs uppercase tracking-widest mb-2">
              {t("about.badge")}
            </span>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3 break-words">
              {t("about.title")}
              <span className="text-gradient-gold"> {t("about.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-3 leading-relaxed break-words">
              {t("about.description1")}
            </p>
            <p className="text-muted-foreground text-sm sm:text-base mb-4 md:mb-6 leading-relaxed break-words">
              {t("about.description2")}
            </p>

            <motion.div
              className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              exit="hidden"
            >
              {software.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="group relative p-1.5 sm:p-2 md:p-3 bg-gradient-to-br from-background via-background to-card rounded-lg sm:rounded-xl border border-border/50 hover:border-primary/50 text-center shadow-sm hover:shadow-md hover:shadow-primary/10"
                  variants={staggerItem}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={defaultTransition}
                >
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/0 group-hover:to-primary/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                  <motion.div
                    className="relative z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-1 sm:mb-2 rounded-lg bg-gradient-to-br from-card to-background flex items-center justify-center shadow-sm overflow-hidden border border-border/30"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px hsl(38 70% 50% / 0.2)",
                    }}
                    transition={defaultTransition}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-0.5 sm:p-1 md:p-1.5"
                      whileHover={{ scale: 1.05 }}
                      transition={defaultTransition}
                    />
                  </motion.div>

                  <motion.span
                    className="relative z-10 text-xs font-semibold text-foreground tracking-wide break-words"
                    whileHover={{ color: "hsl(38 70% 50%)" }}
                    transition={defaultTransition}
                  >
                    {item.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="lg:hidden w-full">
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="p-2.5 sm:p-3 bg-background rounded-lg sm:rounded-xl border border-border hover:border-primary/50 group"
                  initial={fadeInRight}
                  whileInView="visible"
                  viewport={viewportOptions}
                  transition={defaultTransition}
                  whileHover={{ y: -4, scale: 1.02 }}
                >
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2"
                    whileHover={{
                      backgroundColor: "hsl(38 70% 50% / 0.2)",
                      scale: 1.1,
                    }}
                    transition={defaultTransition}
                  >
                    <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </motion.div>
                  <h3 className="font-heading font-semibold text-sm sm:text-base text-foreground mb-1 break-words line-clamp-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed break-words line-clamp-3">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="hidden lg:grid sm:grid-cols-2 gap-3 sm:gap-4"
            initial={fadeInRight}
            whileInView={visible}
            viewport={viewportOptions}
            transition={defaultTransition}
            exit={fadeInRight}
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-4 bg-background rounded-xl border border-border hover:border-primary/50 group"
                variants={staggerItem}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={defaultTransition}
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3"
                  whileHover={{
                    backgroundColor: "hsl(38 70% 50% / 0.2)",
                    scale: 1.1,
                  }}
                  transition={defaultTransition}
                >
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
