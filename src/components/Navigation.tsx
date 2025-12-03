import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";

const Navigation = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#sobre", label: t("nav.about") },
    { href: "#servicos", label: t("nav.services") },
    { href: "#projetos", label: t("nav.projects") },
    { href: "#contato", label: t("nav.contact") },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(38_70%_50%/0.4)] transition-all duration-300">
              <span className="font-heading font-bold text-xl text-primary-foreground">VL</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-xl text-foreground">V LOPES</span>
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Engenharia</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="font-heading text-sm uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 gold-underline py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <LanguageSelector />
            <Button
              variant="outline"
              onClick={() => scrollToSection("#contato")}
            >
              {t("nav.requestQuote")}
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-96 pb-6" : "max-h-0"
            }`}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="font-heading text-sm uppercase tracking-wider text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-2 mt-2">
              <LanguageSelector />
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => scrollToSection("#contato")}
              >
                {t("nav.requestQuote")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
