import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Send, MessageCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { motion } from "motion/react";
import { fadeInLeft, fadeInRight, visible, viewportOptions, defaultTransition, staggerContainer, staggerItem } from "@/lib/animations";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_b2kxic4";
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_na1xvtu";
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "Q8bsoBMUVGv87tbKr";

  const [emailjsReady, setEmailjsReady] = useState(false);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY") {
      try {
        emailjs.init(EMAILJS_PUBLIC_KEY);
        setEmailjsReady(true);
      } catch (error) {
        setEmailjsReady(false);
      }
    }
  }, [EMAILJS_PUBLIC_KEY]);

  useEffect(() => {
    if (isSubmitting) {
      const safetyTimeout = setTimeout(() => {
        setIsSubmitting(false);
      }, 30000);

      return () => clearTimeout(safetyTimeout);
    }
  }, [isSubmitting]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: t("contact.toast.error"),
        description: t("contact.toast.errorDescription"),
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      let emailSent = false;

      if (
        emailjsReady &&
        EMAILJS_SERVICE_ID &&
        EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
        EMAILJS_TEMPLATE_ID &&
        EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
        EMAILJS_PUBLIC_KEY &&
        EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY"
      ) {
        try {
          const templateParams = {
            name: formData.name,
            from_name: formData.name,
            from_email: formData.email,
            phone: formData.phone || t("contact.toast.notProvided"),
            subject: formData.subject || t("contact.toast.noSubject"),
            message: formData.message,
            time: new Date().toLocaleString("pt-BR", {
              dateStyle: "short",
              timeStyle: "short",
            }),
          };

          const sendPromise = emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            templateParams
          );

          const timeoutPromise = new Promise<never>((_, reject) => {
            setTimeout(() => reject(new Error(t("contact.toast.timeoutError"))), 8000);
          });

          await Promise.race([sendPromise, timeoutPromise]);
          emailSent = true;
        } catch (error: unknown) {
          const errorInfo = error as {
            status?: number;
            text?: string;
            message?: string;
            stack?: string;
          };

          if (errorInfo?.status === 400) {
            toast({
              title: t("contact.toast.configError"),
              description: t("contact.toast.configErrorDescription"),
              variant: "destructive",
              duration: 5000,
            });
          } else if (
            errorInfo?.message?.includes("Failed to fetch") ||
            errorInfo?.message?.includes("ERR_INTERNET_DISCONNECTED") ||
            errorInfo?.message?.includes("NetworkError") ||
            errorInfo?.stack?.includes("chrome-extension://") ||
            String(error).includes("ERR_INTERNET_DISCONNECTED") ||
            String(error).includes("Failed to fetch")
          ) {
            toast({
              title: t("contact.toast.connectionError"),
              description: t("contact.toast.connectionErrorDescription"),
              variant: "destructive",
              duration: 7000,
            });
          } else {
            toast({
              title: t("contact.toast.sendError"),
              description: errorInfo?.text || errorInfo?.message || `${t("contact.toast.sendError")}: ${errorInfo?.status || t("contact.toast.unknownError")}.`,
              variant: "destructive",
              duration: 5000,
            });
          }

          emailSent = false;
        }
      }

      if (emailSent) {
        toast({
          title: t("contact.toast.success"),
          description: t("contact.toast.successDescription"),
        });
      } else {
        toast({
          title: t("contact.toast.emailNotSent"),
          description: t("contact.toast.emailNotSentDescription"),
          variant: "destructive",
          duration: 5000,
        });
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: t("contact.toast.unexpectedError"),
        description: t("contact.toast.unexpectedErrorDescription"),
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      try {
        setIsSubmitting(false);
      } catch (stateError) {
        setTimeout(() => {
          try {
            setIsSubmitting(false);
          } catch (retryError) {
            // Estado pode estar corrompido
          }
        }, 100);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappNumber = "5516991245885";

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
      className="min-h-screen bg-background relative overflow-hidden flex items-center py-12 md:py-20"
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 w-full">
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
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-3">
              {t("contact.title")}
              <span className="text-gradient-gold"> {t("contact.titleHighlight")}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mb-4 md:mb-6 leading-relaxed">
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
            className="bg-card p-4 sm:p-6 rounded-xl border border-border"
            initial={fadeInRight}
            whileInView={visible}
            viewport={viewportOptions}
            transition={defaultTransition}
            exit={fadeInRight}
          >
            <h3 className="font-heading font-semibold text-base sm:text-lg text-foreground mb-4">
              {t("contact.form.title")}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
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

              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
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

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 animate-spin" size={18} />
                    {t("contact.form.sending") || "Enviando..."}
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={18} />
                    {t("contact.form.send")}
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
