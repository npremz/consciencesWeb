import React from 'react';
import { Leaf, Brain, Sun, Users, Briefcase, Calendar } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Sophrologie",
      description: "Science de la conscience et des valeurs de l'existence. Gestion du stress, sommeil, et confiance en soi.",
      link: "/sophrologie"
    },
    {
      icon: <Brain className="w-8 h-8 text-emerald-600" />,
      title: "PNL",
      description: "Programmation Neuro-Linguistique. Comprendre et modifier ses schémas mentaux pour atteindre ses objectifs.",
      link: "/pnl"
    },
    {
      icon: <Sun className="w-8 h-8 text-emerald-600" />,
      title: "Yoga Nidra",
      description: "Le yoga du sommeil. Une relaxation profonde équivalente à une bonne nuit de sommeil.",
      link: "/sophrologie#yoga-nidra"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Journée Mieux-Être",
      description: "Une journée complète d'ateliers variés (sophro, PNL, balade) pour se ressourcer en groupe.",
      link: "/ateliers"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-emerald-600" />,
      title: "Coaching Emploi",
      description: "CV, lettre de motivation, préparation aux entretiens. Boostez votre recherche d'emploi.",
      link: "/emploi"
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      title: "Événements",
      description: "Retrouvez les dates des prochains ateliers collectifs et événements spéciaux.",
      link: "/agenda"
    }
  ];

  return (
    <section className="py-20 3xl:py-40 bg-emerald-900 text-white" id="services">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Mes Accompagnements</h2>
          <p className="text-emerald-100/80 text-lg">
            Venez prendre conscience que le meilleur pour vous reste à venir. 
            Je vous propose une palette d'outils pour vous aider à surmonter les obstacles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a 
              key={index} 
              href={service.link}
              className="group bg-emerald-800/30 border border-emerald-700/50 p-8 rounded-2xl hover:bg-emerald-800 transition-all hover:-translate-y-1 duration-300 backdrop-blur-sm"
            >
              <div className="bg-emerald-950/50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4 text-emerald-50">{service.title}</h3>
              <p className="text-emerald-200/70 leading-relaxed">
                {service.description}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
