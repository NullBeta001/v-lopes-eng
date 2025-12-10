import { useTranslation } from "react-i18next";
import { Linkedin, Instagram, Mail } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, visible, staggerContainer, staggerItem, viewportOptions, defaultTransition } from "@/lib/animations";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: t("footer.links.about"), href: "#sobre" },
      { label: t("footer.links.services"), href: "#servicos" },
      { label: t("footer.links.projects"), href: "#projetos" },
      { label: t("footer.links.contact"), href: "#contato" },
    ],
    servicos: [
      { label: t("footer.links.3dModeling"), href: "#servicos" },
      { label: t("footer.links.technicalProjects"), href: "#servicos" },
      { label: t("footer.links.mechanicalEngineering"), href: "#servicos" },
      { label: t("footer.links.consulting"), href: "#servicos" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Mail, href: "mailto:contato@vlopes.com.br", label: "Email" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.footer
      id="rodape"
      className="h-screen bg-card border-t border-border relative overflow-hidden flex items-center"
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

      <div className="container mx-auto px-4 lg:px-8 py-8 relative z-10 w-full h-full flex flex-col">
        <div className="flex-1 flex items-center">
          <motion.div
            className="grid md:grid-cols-3 gap-8 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            exit="hidden"
          >
            <motion.div className="md:col-span-1" variants={staggerItem}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="font-heading font-bold text-xl text-primary-foreground">VE</span>
                </div>
                <div>
                  <span className="font-heading font-bold text-xl text-foreground">V-ENG</span>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">Engenharia</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {t("footer.description")}
              </p>
              <motion.div
                className="flex gap-3"
                variants={staggerContainer}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground"
                    aria-label={social.label}
                    variants={staggerItem}
                    whileHover={{
                      backgroundColor: "hsl(38 70% 50%)",
                      color: "hsl(220 20% 8%)",
                      scale: 1.1,
                      rotate: 12,
                    }}
                    whileTap={{ scale: 0.9 }}
                    transition={defaultTransition}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={fadeInUp}
              whileInView={visible}
              viewport={viewportOptions}
              transition={defaultTransition}
            >
              <h4 className="font-heading font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
                {t("footer.company")}
              </h4>
              <motion.ul
                className="space-y-2"
                variants={staggerContainer}
              >
                {footerLinks.empresa.map((link, index) => (
                  <motion.li
                    key={index}
                    variants={staggerItem}
                  >
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-muted-foreground hover:text-primary text-sm inline-block"
                      whileHover={{ x: 3, color: "hsl(38 70% 50%)" }}
                      transition={{ duration: 0.3 }}
                    >
                      {link.label}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={fadeInUp}
              whileInView={visible}
              viewport={viewportOptions}
              transition={defaultTransition}
            >
              <h4 className="font-heading font-semibold text-foreground mb-4 uppercase tracking-wider text-sm">
                {t("footer.contact")}
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <span className="block text-foreground font-medium">{t("contact.info.phone")}</span>
                  (00) 00000-0000
                </li>
                <li>
                  <span className="block text-foreground font-medium">{t("contact.info.email")}</span>
                  contato@vlopes.com.br
                </li>
                <li>
                  <span className="block text-foreground font-medium">{t("contact.info.location")}</span>
                  São Paulo, SP - Brasil
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          exit="hidden"
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} V-eng. {t("footer.rights")}
          </p>
          <motion.div
            className="flex gap-6"
            variants={staggerContainer}
          >
            <motion.a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
              variants={staggerItem}
              whileHover={{ x: 3, color: "hsl(38 70% 50%)" }}
              transition={defaultTransition}
            >
              {t("footer.privacy")}
            </motion.a>
            <motion.a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
              variants={staggerItem}
              whileHover={{ x: 3, color: "hsl(38 70% 50%)" }}
              transition={defaultTransition}
            >
              {t("footer.terms")}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
