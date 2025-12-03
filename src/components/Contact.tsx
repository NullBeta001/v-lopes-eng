import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "motion/react";
import { fadeInLeft, fadeInRight, visible, viewportOptions, hoverLift, defaultTransition, staggerContainer, staggerItem } from "@/lib/animations";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contact.toast.error"),
        description: t("contact.toast.errorDescription"),
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `*${t("contact.toast.whatsappMessage")}*\n\n` +
      `*${t("contact.form.name")}:* ${formData.name}\n` +
      `*${t("contact.info.email")}:* ${formData.email}\n` +
      `*${t("contact.info.phone")}:* ${formData.phone || t("contact.toast.notProvided")}\n` +
      `*${t("contact.form.subject")}:* ${formData.subject || t("contact.toast.notProvided")}\n\n` +
      `*${t("contact.form.message")}:*\n${formData.message}`
    );

    // Open WhatsApp (replace with your actual WhatsApp number)
    window.open(`https://wa.me/5500000000000?text=${whatsappMessage}`, "_blank");

    toast({
      title: t("contact.toast.success"),
      description: t("contact.toast.successDescription"),
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "(00) 00000-0000",
      href: "tel:+5500000000000",
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "contato@vlopes.com.br",
      href: "mailto:contato@vlopes.com.br",
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: "São Paulo, SP - Brasil",
      href: "#",
    },
  ];

  return (
    <motion.section
      id="contato"
      className="py-24 bg-background relative overflow-hidden min-h-screen flex items-center"
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      <motion.div
        className="absolute inset-0 bg-blueprint opacity-5"
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
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={fadeInLeft}
            whileInView={visible}
            viewport={viewportOptions}
            transition={defaultTransition}
            exit={fadeInLeft}
          >
            <span className="inline-block text-primary font-heading text-sm uppercase tracking-widest mb-4">
              {t("contact.badge")}
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t("contact.title")}
              <span className="text-gradient-gold"> {t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              {t("contact.subtitle")}
            </p>

            <motion.div
              className="space-y-4 mb-10"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/50 group"
                  variants={staggerItem}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={defaultTransition}
                >
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                    whileHover={{
                      backgroundColor: "hsl(38 70% 50% / 0.2)",
                      scale: 1.1,
                      rotate: 5,
                    }}
                    transition={defaultTransition}
                  >
                    <info.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                onClick={() => window.open("https://wa.me/5500000000000", "_blank")}
              >
                <MessageCircle className="mr-2" size={20} />
                {t("contact.whatsapp")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card p-8 md:p-10 rounded-2xl border border-border"
            initial={fadeInRight}
            whileInView={visible}
            viewport={viewportOptions}
            transition={defaultTransition}
            exit={fadeInRight}
          >
            <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
              {t("contact.form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.name")} {t("contact.form.required")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder={t("contact.form.namePlaceholder")}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.email")} {t("contact.form.required")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder={t("contact.form.emailPlaceholder")}
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.phone")}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground placeholder:text-muted-foreground"
                    placeholder={t("contact.form.phonePlaceholder")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.form.subject")}
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-foreground"
                  >
                    <option value="">{t("contact.form.subjectPlaceholder")}</option>
                    <option value="Orçamento">{t("contact.form.subjectOptions.quote")}</option>
                    <option value="Projeto">{t("contact.form.subjectOptions.project")}</option>
                    <option value="Consultoria">{t("contact.form.subjectOptions.consulting")}</option>
                    <option value="Outro">{t("contact.form.subjectOptions.other")}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.form.message")} {t("contact.form.required")}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-foreground placeholder:text-muted-foreground"
                  placeholder={t("contact.form.messagePlaceholder")}
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="mr-2" size={18} />
                {t("contact.form.send")}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
