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
      className="py-24 bg-card relative overflow-hidden min-h-screen flex items-center"
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

      <div className="container mx-auto px-4 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={fadeInLeft}
            whileInView={visible}
            viewport={viewportOptions}
            transition={defaultTransition}
            exit={fadeInLeft}
          >
            <span className="inline-block text-primary font-heading text-sm uppercase tracking-widest mb-4">
              {t("about.badge")}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t("about.title")}
              <span className="text-gradient-gold"> {t("about.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              {t("about.description1")}
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              {t("about.description2")}
            </p>

            <motion.div
              className="grid grid-cols-3 gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              exit="hidden"
            >
              {software.map((item, index) => (
                <motion.div
                  key={item.name}
                  className="group relative p-3 bg-gradient-to-br from-background via-background to-card rounded-xl border border-border/50 hover:border-primary/50 text-center shadow-sm hover:shadow-md hover:shadow-primary/10"
                  variants={staggerItem}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={defaultTransition}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:via-primary/0 group-hover:to-primary/5 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                  <motion.div
                    className="relative z-10 w-12 h-12 mx-auto mb-2 rounded-lg bg-gradient-to-br from-card to-background flex items-center justify-center shadow-sm overflow-hidden border border-border/30"
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0 0 20px hsl(38 70% 50% / 0.2)",
                    }}
                    transition={defaultTransition}
                  >
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain p-1.5"
                      whileHover={{ scale: 1.05 }}
                      transition={defaultTransition}
                    />
                  </motion.div>

                  <motion.span
                    className="relative z-10 text-xs font-semibold text-foreground tracking-wide"
                    whileHover={{ color: "hsl(38 70% 50%)" }}
                    transition={defaultTransition}
                  >
                    {item.name}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
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
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 group"
                variants={staggerItem}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={defaultTransition}
              >
                <motion.div
                  className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                  whileHover={{
                    backgroundColor: "hsl(38 70% 50% / 0.2)",
                    scale: 1.1,
                  }}
                  transition={defaultTransition}
                >
                  <value.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
