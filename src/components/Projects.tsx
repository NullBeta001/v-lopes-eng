import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp, visible, viewportOptions, hoverLift, defaultTransition, staggerContainer, staggerItem } from "@/lib/animations";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [activeFilterKey, setActiveFilterKey] = useState("all");

  const filterKeys = ["all", "industrial", "3dModeling", "mechanical", "structural"];

  const filters = filterKeys.map((key) => ({
    key,
    label: t(`projects.filters.${key}`),
  }));

  const projects = useMemo(() => [
    {
      id: 1,
      title: t("projects.items.conveyorSystem.title"),
      categoryKey: "industrial",
      description: t("projects.items.conveyorSystem.description"),
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: t("projects.items.equipmentModeling.title"),
      categoryKey: "3dModeling",
      description: t("projects.items.equipmentModeling.description"),
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: t("projects.items.metalStructure.title"),
      categoryKey: "structural",
      description: t("projects.items.metalStructure.description"),
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: t("projects.items.fillingMachine.title"),
      categoryKey: "mechanical",
      description: t("projects.items.fillingMachine.description"),
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: t("projects.items.pharmaceuticalLayout.title"),
      categoryKey: "industrial",
      description: t("projects.items.pharmaceuticalLayout.description"),
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: t("projects.items.aerospacePrototype.title"),
      categoryKey: "3dModeling",
      description: t("projects.items.aerospacePrototype.description"),
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=400&fit=crop",
    },
  ], [t]);

  const filteredProjects = activeFilterKey === "all"
    ? projects
    : projects.filter((p) => p.categoryKey === activeFilterKey);

  // Reset filter when language changes
  useEffect(() => {
    setActiveFilterKey("all");
  }, [i18n.language]);

  return (
    <motion.section
      id="projetos"
      className="py-24 bg-card relative overflow-hidden min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      <motion.div
        className="absolute inset-0 bg-grid-pattern opacity-10"
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
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={fadeInUp}
          whileInView={visible}
          viewport={viewportOptions}
          transition={defaultTransition}
          exit={fadeInUp}
        >
          <span className="inline-block text-primary font-heading text-sm uppercase tracking-widest mb-4">
            {t("projects.badge")}
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            {t("projects.title")}
            <span className="text-gradient-gold"> {t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          exit="hidden"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.key}
              onClick={() => setActiveFilterKey(filter.key)}
              className={`px-5 py-2 rounded-full font-heading text-sm uppercase tracking-wider ${activeFilterKey === filter.key
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
                }`}
              variants={staggerItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow:
                  activeFilterKey === filter.key
                    ? "0 0 20px hsl(38 70% 50% / 0.3)"
                    : "0 0 0px hsl(38 70% 50% / 0)",
              }}
              transition={defaultTransition}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilterKey}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            exit="hidden"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50"
                variants={staggerItem}
                whileHover={{ y: -12, scale: 1.02 }}
                transition={defaultTransition}
                layout
              >
                <div className="relative h-56 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  <motion.div
                    className="absolute inset-0 bg-primary/20 flex items-center justify-center gap-3"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={defaultTransition}
                  >
                    <motion.button
                      className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground"
                      whileHover={{
                        backgroundColor: "hsl(38 70% 50%)",
                        color: "hsl(220 20% 8%)",
                        scale: 1.1,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={defaultTransition}
                    >
                      <Eye size={20} />
                    </motion.button>
                    <motion.button
                      className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground"
                      whileHover={{
                        backgroundColor: "hsl(38 70% 50%)",
                        color: "hsl(220 20% 8%)",
                        scale: 1.1,
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={defaultTransition}
                    >
                      <ExternalLink size={20} />
                    </motion.button>
                  </motion.div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider rounded-full mb-3">
                    {t(`projects.filters.${project.categoryKey}`)}
                  </span>
                  <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            {t("projects.viewAll")}
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
