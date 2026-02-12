import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, image }) => {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl px-4 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-serif mb-4">{title}</h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto mb-6"></div>
        <p className="text-lg md:text-xl font-light text-white/90">{subtitle}</p>
      </div>
    </div>
  );
};

export default PageHeader;
