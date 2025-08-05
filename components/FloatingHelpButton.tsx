import React, { useState } from 'react';
import type { Section } from '../types';

interface FloatingHelpButtonProps {
  activeSection: Section;
  setActiveSection: (section: Section) => void;
}

const FloatingHelpButton: React.FC<FloatingHelpButtonProps> = ({ activeSection, setActiveSection }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = activeSection === 'help';

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setActiveSection('help')}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative group flex items-center gap-3 px-4 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 ${
          isActive 
            ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-500/40' 
            : 'bg-slate-800/90 backdrop-blur-xl text-slate-300 hover:bg-slate-700/90 hover:text-white border border-slate-600/50 hover:border-orange-500/50'
        }`}
        aria-label="Ayuda"
      >
        {/* Icono de interrogación */}
        <div className="relative">
          <svg 
            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
          </svg>
          
          {/* Efecto de pulso cuando está activo */}
          {isActive && (
            <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20"></div>
          )}
        </div>

        {/* Texto que aparece en hover */}
        <span 
          className={`font-medium transition-all duration-300 overflow-hidden ${
            isHovered || isActive ? 'max-w-20 opacity-100' : 'max-w-0 opacity-0'
          }`}
        >
          Ayuda
        </span>

        {/* Efecto de brillo */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
      </button>

      {/* Tooltip para dispositivos móviles */}
      {!isHovered && !isActive && (
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none sm:hidden">
          ¿Necesitas ayuda?
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
        </div>
      )}
    </div>
  );
};

export default FloatingHelpButton;
