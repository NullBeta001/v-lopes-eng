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

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contact.toast.error"),
        description: t("contact.toast.errorDescription"),
        variant: "destructive",
      });
      return;
    }

    const whatsappMessage = encodeURIComponent(
      `*${t("contact.toast.whatsappMessage")}*\n\n` +
      `*${t("contact.form.name")}:* ${formData.name}\n` +
      `*${t("contact.info.email")}:* ${formData.email}\n` +
      `*${t("contact.info.phone")}:* ${formData.phone || t("contact.toast.notProvided")}\n` +
      `*${t("contact.form.subject")}:* ${formData.subject || t("contact.toast.notProvided")}\n\n` +
      `*${t("contact.form.message")}:*\n${formData.message}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");

    toast({
      title: t("contact.toast.success"),
      description: t("contact.toast.successDescription"),
    });

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

  const whatsappNumber = "5516991245885"; // 55 16 99124-5885

  const contactInfo = [
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "(16) 99124-5885",
    },
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "contato@v-eng.site",
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: "Sertãozinho, São Paulo",
    },
  ];

  return (
    <motion.section
      id="contato"
      className="h-screen bg-background relative overflow-hidden flex items-center"
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

      <div className="container mx-auto px-4 lg:px-8 py-8 relative z-10 w-full h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full">
          <motion.div
            initial={fadeInLeft}
            whileInView={visible}
            viewport={viewportOptions}
            transition={defaultTransition}
            exit={fadeInLeft}
          >
            <span className="inline-block text-primary font-heading text-xs uppercase tracking-widest mb-2">
              {t("contact.badge")}
            </span>
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
              {t("contact.title")}
              <span className="text-gradient-gold"> {t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {t("contact.subtitle")}
            </p>

            <motion.div
              className="space-y-3 mb-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border"
                  variants={staggerItem}
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.title}</p>
                    <p className="font-medium text-foreground">{info.value}</p>
                  </div>
                </motion.div>
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
                onClick={() => window.open(`https://wa.me/${whatsappNumber}`, "_blank")}
              >
                <MessageCircle className="mr-2" size={20} />
                {t("contact.whatsapp")}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card p-6 rounded-xl border border-border"
            initial={fadeInRight}
            whileInView={visible}
            viewport={viewportOptions}
            transition={defaultTransition}
            exit={fadeInRight}
          >
            <h3 className="font-heading font-semibold text-lg text-foreground mb-4">
              {t("contact.form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3">
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
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground text-sm"
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
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground text-sm"
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
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground placeholder:text-muted-foreground text-sm"
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
                    className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground text-sm"
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
                  rows={4}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none text-foreground placeholder:text-muted-foreground text-sm"
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
