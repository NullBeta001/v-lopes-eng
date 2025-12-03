import { useTranslation } from "react-i18next";
import { Linkedin, Instagram, Mail } from "lucide-react";

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
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-heading font-bold text-xl text-primary-foreground">VL</span>
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-foreground">V LOPES</span>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">Engenharia</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              {t("footer.description")}
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-6 uppercase tracking-wider text-sm">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
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
          </div>
        </div>

        <div className="py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} V Lopes Engenharia. {t("footer.rights")}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.privacy")}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
