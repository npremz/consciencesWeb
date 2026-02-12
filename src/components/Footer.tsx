import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-neutral-300 pt-20 pb-10 border-t border-neutral-900">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand & Mission */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Consciences<span className="text-emerald-400">.</span>
              </span>
            </div>
            <p className="text-neutral-400 leading-relaxed">
              Accompagnement holistique pour cultiver la conscience de soi et le mieux-être à Namur. Sophrologie, PNL et Yoga Nidra.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61554182713372" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/consciences.am/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-neutral-900 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Services</h3>
            <ul className="space-y-4">
              <li><a href="/sophrologie" className="hover:text-emerald-400 transition-colors">Sophrologie</a></li>
              <li><a href="/pnl" className="hover:text-emerald-400 transition-colors">PNL</a></li>
              <li><a href="/ateliers" className="hover:text-emerald-400 transition-colors">Ateliers Mieux-Être</a></li>
              <li><a href="/emploi" className="hover:text-emerald-400 transition-colors">Coaching Emploi</a></li>
            </ul>
          </div>

          {/* Practical */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Pratique</h3>
            <ul className="space-y-4">
              <li><a href="/agenda" className="hover:text-emerald-400 transition-colors">Agenda</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Prendre RDV</a></li>
              <li><a href="/contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              <li><a href="/#presentation" className="hover:text-emerald-400 transition-colors">À propos</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 shrink-0 mt-1" />
                <span>Profondeville, Namur, Belgique</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500 shrink-0" />
                <span>+32 474 29 49 83</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <span>consciences@yahoo.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
          <p>© {currentYear} Consciences.be — Tous droits réservés.</p>
          <div className="flex items-center gap-1">
            <span>Créé avec</span>
            <Heart size={14} className="text-rose-500 fill-rose-500" />
            <span>par</span>
            <a href="https://github.com/nipremont" className="text-neutral-400 hover:text-emerald-400 transition-colors">@ni.premont</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
