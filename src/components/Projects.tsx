import { useState } from "react";
import { ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("Todos");

  const filters = ["Todos", "Industrial", "Modelagem 3D", "Mecânico", "Estrutural"];

  const projects = [
    {
      id: 1,
      title: "Sistema de Esteiras Transportadoras",
      category: "Industrial",
      description: "Projeto completo de sistema de transporte para linha de produção automotiva.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Modelagem de Equipamento Industrial",
      category: "Modelagem 3D",
      description: "Modelagem 3D detalhada de equipamento para indústria alimentícia.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Estrutura Metálica Galpão",
      category: "Estrutural",
      description: "Projeto estrutural de galpão industrial com 2.000m² de área coberta.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Máquina de Envase Automatizada",
      category: "Mecânico",
      description: "Desenvolvimento de máquina para envase automático de líquidos.",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
    },
    {
      id: 5,
      title: "Layout Industrial Farmacêutico",
      category: "Industrial",
      description: "Projeto de layout otimizado para indústria farmacêutica.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop",
    },
    {
      id: 6,
      title: "Protótipo de Peça Aeronáutica",
      category: "Modelagem 3D",
      description: "Modelagem e renderização de componente para indústria aeronáutica.",
      image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&h=400&fit=crop",
    },
  ];

  const filteredProjects = activeFilter === "Todos"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projetos" className="py-24 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-primary font-heading text-sm uppercase tracking-widest mb-4">
            Portfólio
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Nossos
            <span className="text-gradient-gold"> Projetos</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça alguns dos projetos que desenvolvemos para nossos clientes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full font-heading text-sm uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(38_70%_50%/0.3)]"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover-lift"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <button className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Eye size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full bg-background/90 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium uppercase tracking-wider rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver Todos os Projetos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
