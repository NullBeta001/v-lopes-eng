import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { fadeInUp, visible, viewportOptions, hoverLift, defaultTransition, staggerContainer, staggerItem } from "@/lib/animations";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [activeFilterKey, setActiveFilterKey] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      image: "/projetos/prj_1.png",
      images: ["/projetos/prj_1.png", "/projetos/prj_1.1.png"],
    },
    {
      id: 2,
      title: t("projects.items.equipmentModeling.title"),
      categoryKey: "3dModeling",
      description: t("projects.items.equipmentModeling.description"),
      image: "/projetos/prj_2.png",
      images: ["/projetos/prj_2.png", "/projetos/prj_2.1.jpeg"],
    },
    {
      id: 3,
      title: t("projects.items.industrialPlant.title"),
      categoryKey: "3dModeling",
      description: t("projects.items.industrialPlant.description"),
      image: "/projetos/prj_3.jpeg",
      images: ["/projetos/prj_3.jpeg"],
    },
    {
      id: 4,
      title: t("projects.items.metalStructure.title"),
      categoryKey: "structural",
      description: t("projects.items.metalStructure.description"),
      image: "/projetos/prj_4.jpg",
      images: ["/projetos/prj_4.jpg", "/projetos/prj_4.1.JPG"],
    },
    {
      id: 5,
      title: t("projects.items.fillingMachine.title"),
      categoryKey: "mechanical",
      description: t("projects.items.fillingMachine.description"),
      image: "/projetos/prj_5.jpeg",
      images: ["/projetos/prj_5.jpeg", "/projetos/prj_5.1.JPG"],
    },
    {
      id: 6,
      title: t("projects.items.pharmaceuticalLayout.title"),
      categoryKey: "industrial",
      description: t("projects.items.pharmaceuticalLayout.description"),
      image: "/projetos/prj_6.jpg",
      images: ["/projetos/prj_6.jpg", "/projetos/prj_6.1.png"],
    },
  ], [t]);

  const filteredProjects = activeFilterKey === "all"
    ? projects
    : projects.filter((p) => p.categoryKey === activeFilterKey);

  useEffect(() => {
    setActiveFilterKey("all");
  }, [i18n.language]);

  useEffect(() => {
    if (selectedProject === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setCurrentImageIndex(0);
      } else if (e.key === "ArrowLeft") {
        handlePreviousImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, currentImageIndex]);

  const openModal = (projectId: number) => {
    setSelectedProject(projectId);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedProject === null) return;
    const project = projects.find((p) => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const handlePreviousImage = () => {
    if (selectedProject === null) return;
    const project = projects.find((p) => p.id === selectedProject);
    if (project) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    }
  };

  const selectedProjectData = selectedProject ? projects.find((p) => p.id === selectedProject) : null;

  return (
    <motion.section
      id="projetos"
      className="h-screen bg-card relative overflow-hidden flex items-center"
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

      <div className="container mx-auto px-4 lg:px-8 py-8 relative z-10 w-full h-full flex flex-col justify-center">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-6"
          initial={fadeInUp}
          whileInView={visible}
          viewport={viewportOptions}
          transition={defaultTransition}
          exit={fadeInUp}
        >
          <span className="inline-block text-primary font-heading text-xs uppercase tracking-widest mb-2">
            {t("projects.badge")}
          </span>
          <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
            {t("projects.title")}
            <span className="text-gradient-gold"> {t("projects.titleHighlight")}</span>
          </h2>
          <p className="text-muted-foreground text-sm">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-6"
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
              className={`px-3 py-1.5 rounded-full font-heading text-xs uppercase tracking-wider ${activeFilterKey === filter.key
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
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
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
                <div
                  className="relative h-40 overflow-hidden cursor-pointer"
                  onClick={() => openModal(project.id)}
                >
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.25 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

                  <motion.div
                    className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={defaultTransition}
                  >
                    <motion.div
                      className="px-4 py-2 bg-background/90 rounded-full text-foreground text-sm font-medium"
                      whileHover={{
                        backgroundColor: "hsl(38 70% 50%)",
                        color: "hsl(220 20% 8%)",
                        scale: 1.05,
                      }}
                      transition={defaultTransition}
                    >
                      {t("projects.viewDetails") || "Ver Detalhes"}
                    </motion.div>
                  </motion.div>
                </div>

                <div className="p-4">
                  <span className="inline-block px-2 py-0.5 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider rounded-full mb-2">
                    {t(`projects.filters.${project.categoryKey}`)}
                  </span>
                  <h3 className="font-heading font-semibold text-base text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
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

      <AnimatePresence>
        {selectedProject !== null && selectedProjectData && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/90 z-[100] backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="fixed inset-0 z-[101] flex items-center justify-center p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={defaultTransition}
            >
              <motion.div
                className="relative bg-background rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden border border-border shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between p-4 border-b border-border">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground">
                      {selectedProjectData.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedProjectData.description}
                    </p>
                  </div>
                  <motion.button
                    onClick={closeModal}
                    className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X size={20} />
                  </motion.button>
                </div>

                <div className="relative bg-card">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={selectedProjectData.images[currentImageIndex]}
                      alt={`${selectedProjectData.title} - Imagem ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-[70vh] object-contain"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  {selectedProjectData.images.length > 1 && (
                    <>
                      <div className="absolute left-4 top-1/2 -translate-y-1/2">
                        <motion.button
                          onClick={handlePreviousImage}
                          className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronLeft size={24} />
                        </motion.button>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2">
                        <motion.button
                          onClick={handleNextImage}
                          className="w-12 h-12 rounded-full bg-background/90 backdrop-blur-sm border border-border hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronRight size={24} />
                        </motion.button>
                      </div>
                    </>
                  )}

                  {selectedProjectData.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {selectedProjectData.images.map((_, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                            ? "bg-primary w-8"
                            : "bg-muted-foreground/50 hover:bg-muted-foreground"
                            }`}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-4 border-t border-border flex items-center justify-between">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider rounded-full">
                    {t(`projects.filters.${selectedProjectData.categoryKey}`)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {currentImageIndex + 1} / {selectedProjectData.images.length}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default Projects;
