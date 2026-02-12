import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Sophrologie', href: '/sophrologie' },
    { name: 'PNL', href: '/pnl' },
    { name: 'Ateliers', href: '/ateliers' },
    { name: 'Emploi', href: '/emploi' },
    { name: 'Agenda', href: '/agenda' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Navbar Background (Transitions on scroll) */}
      <div 
        className={`absolute inset-0 transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-neutral-900/90 backdrop-blur-md border-neutral-800 shadow-lg' 
            : 'bg-transparent border-transparent'
        }`}
      />

      {/* Main Bar Content */}
      <div className={`max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between relative z-[70] transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}>
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
           <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${isScrolled || isMobileMenuOpen ? 'text-emerald-50' : 'text-white'}`}>
             Consciences<span className="text-emerald-400">.</span>
           </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-sm tracking-widest font-medium hover:text-emerald-400 transition-colors ${
                isScrolled ? 'text-gray-300' : 'text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/contact"
            className={`px-5 py-2 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg ${
               isScrolled 
                 ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-900/20' 
                 : 'bg-white text-neutral-900 hover:bg-emerald-50'
            }`}
          >
            Réserver
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden relative z-[70] w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          <div className="relative w-6 h-5">
            <span 
              className={`absolute right-0 block h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'w-6 rotate-45 top-2' : 'w-6 top-0'
              }`}
            />
            <span 
              className={`absolute right-0 block h-0.5 bg-white transition-all duration-300 ease-in-out top-2 ${
                isMobileMenuOpen ? 'w-0 opacity-0' : 'w-4'
              }`}
            />
            <span 
              className={`absolute right-0 block h-0.5 bg-white transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'w-6 -rotate-45 top-2' : 'w-6 top-4'
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-emerald-950 z-[60] lg:hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
      }`}>
        <div className="flex flex-col justify-center h-full gap-8 p-12 md:p-24">
          <div className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <a 
                key={link.name}
                href={link.href}
                className={`text-3xl md:text-5xl tracking-widest font-light text-white hover:text-emerald-400 transition-all duration-500 transform ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${isMobileMenuOpen ? index * 75 : 0}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className={`mt-8 transform transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
          style={{ transitionDelay: `${isMobileMenuOpen ? navLinks.length * 75 : 0}ms` }}>
            <a 
              href="/contact"
              className="inline-block px-10 py-4 bg-emerald-600 text-white rounded-xl text-lg font-bold shadow-xl shadow-emerald-900/20 active:scale-95 transition-transform"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Réserver un rendez-vous
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
