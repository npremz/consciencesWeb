import React from 'react';
import { Quote } from 'lucide-react';

export interface PresentationProps {
  image?: string;
}

const Presentation: React.FC<PresentationProps> = ({ image }) => {
  return (
    <section className="relative py-20 md:py-32 3xl:py-48 overflow-hidden bg-neutral-50" id="presentation">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Photo Side */}
          <div className="w-full md:w-5/12 relative group">
            <div className="absolute inset-0 bg-emerald-900/10 rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0 duration-500"></div>
            <img 
              src={image || "/_image.webp"} 
              alt="Anne-Marie - Sophrologue" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/5] transform -rotate-2 transition-transform group-hover:rotate-0 duration-500"
            />
          </div>

          {/* Content Side */}
          <div className="w-full md:w-7/12">
            <div className="flex items-center gap-4 mb-6">
                <span className="h-px w-12 bg-emerald-500"></span>
                <span className="text-emerald-700 font-semibold tracking-widest uppercase text-sm">Qui suis-je ?</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-serif text-neutral-900 mb-8 leading-tight">
              Anne-Marie,<br/>
              <span className="text-emerald-800">Sophrologue certifiée.</span>
            </h2>

            <div className="prose prose-lg text-neutral-600 mb-8">
              <p className="leading-relaxed mb-6">
                Bonjour, je m'appelle Anne-Marie et je suis sophrologue certifiée dans la région de Namur, plus précisément à Profondeville. 
                Avec bienveillance et positivité, je vous apprends à gérer votre stress, améliorer votre sommeil, et surmonter les étapes de vie difficiles.
              </p>
              
              <div className="relative p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-neutral-100 my-8">
                <Quote className="absolute top-6 left-6 text-emerald-100 w-10 h-10" />
                <p className="relative z-10 text-neutral-800 font-serif text-xl text-center">
                  "Conscience de soi, de son potentiel, de son avenir en ce qu'il peut avoir de lumineux."
                </p>
              </div>

              <p>
                Dans les pages de ce site, vous découvrirez la Sophrologie, la PNL, le Yoga Nidra et mes balades méditatives. 
                Mon approche repose sur trois piliers : la conscience de soi, la conscience des autres et la conscience du monde qui nous entoure.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Presentation;
