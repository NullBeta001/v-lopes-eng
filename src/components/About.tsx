import { useTranslation } from "react-i18next";
import { Target, Award, Users, Lightbulb, Box, Pencil, Home, Building2, Settings } from "lucide-react";

const About = () => {
  const { t } = useTranslation();

  const software = [
    { name: "SolidWorks", icon: Settings, color: "from-red-500 to-red-600" },
    { name: "AutoCAD", icon: Pencil, color: "from-blue-500 to-blue-600" },
    { name: "SketchUp", icon: Home, color: "from-orange-500 to-orange-600" },
    { name: "Revit", icon: Building2, color: "from-cyan-500 to-cyan-600" },
    { name: "Inventor", icon: Box, color: "from-amber-500 to-amber-600" },
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
    <section id="sobre" className="py-24 bg-card relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-blueprint opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
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

            {/* Software Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {software.map((item) => (
                <div
                  key={item.name}
                  className="group relative p-4 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover-lift text-center"
                >
                  <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-foreground tracking-wide">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-background rounded-xl border border-border hover:border-primary/50 hover-lift group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
