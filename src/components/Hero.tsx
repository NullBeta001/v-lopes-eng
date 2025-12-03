import { ArrowDown, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { fadeInUp, visible, staggerContainer, staggerItem, viewportOptions, defaultTransition, fastTransition } from "@/lib/animations";
import { useEffect } from "react";

const Hero = () => {
  const { t } = useTranslation();

  // Smooth mouse tracking with Motion
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const backgroundX = useTransform(x, [-100, 100], [-2, 2]);
  const backgroundY = useTransform(y, [-100, 100], [-2, 2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(((e.clientX - centerX) / centerX) * 100);
      mouseY.set(((e.clientY - centerY) / centerY) * 100);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          scale: 1.1,
          x: backgroundX,
          y: backgroundY,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
        <motion.div
          className="absolute inset-0 bg-grid-pattern opacity-30"
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

        {[...Array(20)].map((_, i) => {
          const size = Math.random() * 4 + 2;
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * 6;
          const duration = Math.random() * 4 + 4;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-primary/10"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
              }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                delay,
                duration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </motion.div>

      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
              },
            },
          }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
            initial={fadeInUp}
            animate={visible}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={defaultTransition}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm text-primary font-medium uppercase tracking-wider">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6"
            initial={fadeInUp}
            animate={visible}
            transition={defaultTransition}
          >
            {t("hero.title")}
            <span className="text-gradient-gold block mt-2">
              {t("hero.titleHighlight")}
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            initial={fadeInUp}
            animate={visible}
            transition={defaultTransition}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={fadeInUp}
            animate={visible}
            transition={defaultTransition}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#projetos")}
              >
                {t("hero.viewProjects")}
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection("#contato")}
              >
                <Play size={18} className="mr-1" />
                {t("hero.contactUs")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/50"
            variants={staggerContainer}
          >
            {[
              { value: "10+", label: t("hero.stats.years") },
              { value: "150+", label: t("hero.stats.projects") },
              { value: "50+", label: t("hero.stats.clients") },
              { value: "100%", label: t("hero.stats.commitment") },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={staggerItem}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="font-heading font-bold text-3xl md:text-4xl text-primary mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 0.5 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <motion.a
          href="#sobre"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#sobre");
          }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-xs uppercase tracking-widest">{t("hero.scroll")}</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
