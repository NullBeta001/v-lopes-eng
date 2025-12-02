import { Cog, Box, FileText, Ruler, Factory, Wrench, Shield, HardHat, ClipboardCheck, FileCheck } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Box,
      title: "Modelagem 3D",
      description: "Criação de modelos tridimensionais precisos para visualização e fabricação de peças e equipamentos industriais.",
      features: ["Renderização Realista", "Animações 3D", "Prototipagem Virtual"],
    },
    {
      icon: FileText,
      title: "Projetos Técnicos",
      description: "Desenvolvimento de projetos técnicos completos com detalhamento e especificações para execução.",
      features: ["Desenhos Técnicos", "Lista de Materiais", "Memorial Descritivo"],
    },
    {
      icon: Factory,
      title: "Projetos Industriais",
      description: "Soluções completas para instalações industriais, layout de fábricas e otimização de processos.",
      features: ["Layout Industrial", "Fluxo de Processos", "Ergonomia"],
    },
    {
      icon: Cog,
      title: "Engenharia Mecânica",
      description: "Projetos de máquinas, equipamentos e sistemas mecânicos para diversos setores da indústria.",
      features: ["Dimensionamento", "Análise Estrutural", "Seleção de Materiais"],
    },
    {
      icon: HardHat,
      title: "Inspeção NR-35",
      description: "Inspeção técnica completa para trabalhos em altura conforme norma regulamentadora NR-35.",
      features: ["Análise de Riscos", "Relatório Técnico", "Conformidade Legal"],
    },
    {
      icon: Shield,
      title: "Inspeção NR-12",
      description: "Inspeção de segurança em máquinas e equipamentos conforme norma regulamentadora NR-12.",
      features: ["Avaliação de Riscos", "Inventário de Máquinas", "Plano de Ação"],
    },
    {
      icon: ClipboardCheck,
      title: "Adequação NR-35",
      description: "Adequação de estruturas e sistemas para conformidade com a norma de trabalho em altura.",
      features: ["Projeto de Adequação", "Acompanhamento", "Validação Final"],
    },
    {
      icon: FileCheck,
      title: "Documentação Técnica",
      description: "Elaboração de toda documentação técnica necessária para regularização e conformidade.",
      features: ["Laudos Técnicos", "ART", "Certificados"],
    },
    {
      icon: Ruler,
      title: "Detalhamento",
      description: "Detalhamento completo de peças e conjuntos para fabricação e montagem industrial.",
      features: ["Cotas e Tolerâncias", "Acabamentos", "Instruções de Montagem"],
    },
    {
      icon: Wrench,
      title: "Consultoria",
      description: "Assessoria técnica especializada para otimização de projetos e processos industriais.",
      features: ["Análise de Viabilidade", "Otimização", "Treinamentos"],
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-heading text-sm uppercase tracking-widest mb-4">
            Nossos Serviços
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Soluções Completas em
            <span className="text-gradient-gold"> Engenharia</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos uma gama completa de serviços de engenharia para atender 
            todas as necessidades do seu projeto industrial.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
