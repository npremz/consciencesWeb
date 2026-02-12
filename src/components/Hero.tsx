import React from 'react';
import { ArrowRight, MapPin, Sparkles } from 'lucide-react';

export interface HeroProps {
  backgroundImage?: string;
}

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
  return (
    <div className="relative w-full h-screen min-h-[600px] flex flex-col justify-end overflow-hidden pb-8 md:pb-12 3xl:pb-24 px-4 md:px-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage || "/Gemini_Generated_Image_ed53uzed53uzed53.png"} 
          alt="Atmosphère nature et sérénité - Consciences" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10"></div>
      </div>

      {/* Content Container - Constrained to 1440px */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col h-full justify-end">
        
        {/* Main Title Area */}
        <div className="mb-8 md:mb-16 animate-fade-in-up">
            <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white/95 tracking-tighter mix-blend-overlay opacity-90 mb-2 md:mb-4">
                CONSCIENCES
            </h1>
            <p className="text-emerald-50/90 text-lg md:text-2xl font-light ml-1 md:ml-4 tracking-wide flex items-start gap-3">
                <span className="w-8 md:w-12 h-[1px] bg-emerald-200/50 mt-3 md:mt-5"></span>
                Sophrologie & Mieux-être à Profondeville
            </p>
        </div>

        {/* Glass Bar */}
        <div className="w-full bg-neutral-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-8 shadow-2xl animate-fade-in-up delay-200">
           
           {/* Info Columns */}
           <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-white/90 w-full lg:w-auto">
               <div className="flex items-start gap-3">
                   <div className="p-2 bg-white/10 rounded-full text-emerald-300">
                     <MapPin size={20} />
                   </div>
                   <div className="flex flex-col">
                       <span className="text-xs uppercase opacity-60 tracking-wider font-semibold">Lieu</span>
                       <span className="font-medium text-lg">Profondeville, BE</span>
                   </div>
               </div>
               
               <div className="hidden md:block w-px h-12 bg-white/10"></div>

               <div className="flex items-start gap-3">
                   <div className="p-2 bg-white/10 rounded-full text-emerald-300">
                     <Sparkles size={20} />
                   </div>
                   <div className="flex flex-col">
                       <span className="text-xs uppercase opacity-60 tracking-wider font-semibold">Expertise</span>
                       <span className="font-medium text-lg">Stress, Sommeil & Transition</span>
                   </div>
               </div>
           </div>

           {/* Actions */}
           <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
               <a 
                 href="/contact"
                 className="flex-1 sm:flex-none px-8 py-4 bg-emerald-800/90 hover:bg-emerald-700 text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-emerald-900/20 flex items-center justify-center gap-2 group backdrop-blur-md"
               >
                   Prendre Rendez-vous
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
               </a>
               <a 
                 href="/#services"
                 className="flex-1 sm:flex-none px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-xl font-medium transition-colors backdrop-blur-sm text-center"
               >
                   Découvrir les pratiques
               </a>
           </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
