import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

const options = [
  { id: 'sophrologie', label: 'Séance individuelle de Sophrologie' },
  { id: 'pnl', label: 'Séance individuelle de PNL' },
  { id: 'yoga-nidra', label: 'Séance de Yoga Nidra' },
  { id: 'ateliers', label: 'Inscription à un Atelier / Journée Mieux-être' },
  { id: 'emploi', label: 'Coaching Emploi / Carrière' },
  { id: 'autre', label: 'Autre (précisez dans votre message)' },
];

const SubjectDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Hidden input for form submission */}
      <input type="hidden" name="subject" value={selected.id} />
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-8 py-4 rounded-xl bg-neutral-50 border transition-all duration-300 flex items-center justify-between group ${
          isOpen 
            ? 'border-emerald-500 bg-white ring-4 ring-emerald-500/5' 
            : 'border-neutral-200 hover:border-emerald-300'
        }`}
      >
        <span className={`text-left flex-1 ${selected ? 'text-neutral-900' : 'text-neutral-400'}`}>
          {selected ? selected.label : "Sélectionnez l'objet"}
        </span>
        <ChevronDown 
          size={20} 
          className={`text-emerald-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`absolute z-20 top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl shadow-emerald-900/10 border border-neutral-100 overflow-hidden transition-all duration-300 origin-top ${
          isOpen 
            ? 'opacity-100 scale-100' 
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="p-2">
          {options.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`w-full text-left px-6 py-3 rounded-lg flex items-start justify-between transition-colors gap-3 ${
                selected?.id === option.id 
                  ? 'bg-emerald-50 text-emerald-900 font-medium' 
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-emerald-700'
              }`}
            >
              <span className="flex-1">{option.label}</span>
              {selected?.id === option.id && <Check size={16} className="text-emerald-600 shrink-0 mt-1" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubjectDropdown;
