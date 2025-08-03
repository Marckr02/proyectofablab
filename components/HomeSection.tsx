
import React, { useState, useEffect, useCallback } from 'react';
import { KEY_FEATURES, TECHNICAL_SPECS, PRINTER_IMAGES } from '../constants';
import type { Feature, Spec } from '../types';
import { ChevronDownIcon, ChevronUpIcon } from './Icons';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="group bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-xl shadow-xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 flex flex-col items-center text-center border border-slate-700/50 hover:border-orange-500/30 relative overflow-hidden">
    {/* Efecto de brillo animado */}
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
    
    <div className="text-orange-400 mb-4 transform transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 relative z-10">
      {feature.icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 relative z-10 group-hover:text-orange-300 transition-colors duration-300">
      {feature.title}
    </h3>
    <p className="text-slate-400 text-sm flex-grow relative z-10 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
      {feature.description}
    </p>
  </div>
);

const ImageCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % PRINTER_IMAGES.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + PRINTER_IMAGES.length) % PRINTER_IMAGES.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50 group">
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10"></div>
            
            {PRINTER_IMAGES.map((src, index) => (
                 <img
                    key={src}
                    src={src}
                    alt={`Halot Mage Pro 8k - Vista ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out transform ${
                        index === currentIndex 
                            ? 'opacity-100 scale-100' 
                            : 'opacity-0 scale-110'
                    }`}
                />
            ))}
            
            {/* Controles mejorados */}
            <button 
                onClick={prevSlide} 
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-slate-900/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-slate-800/80 transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110 z-20"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button 
                onClick={nextSlide} 
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-slate-900/70 backdrop-blur-sm text-white p-3 rounded-full hover:bg-slate-800/80 transition-all duration-300 opacity-0 group-hover:opacity-100 transform hover:scale-110 z-20"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
            
            {/* Indicadores mejorados */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {PRINTER_IMAGES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'bg-orange-400 shadow-lg shadow-orange-400/50 scale-125' 
                                : 'bg-slate-400/50 hover:bg-slate-300/70 hover:scale-110'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

const TechSpecs: React.FC<{ specs: Spec[] }> = ({ specs }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <h3 className="text-xl sm:text-2xl font-bold text-white">Ficha Técnica Completa</h3>
        <div className="text-orange-400">
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </div>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 border-t border-slate-700 pt-4">
            {specs.map((spec) => (
              <li key={spec.name} className="flex justify-between border-b border-slate-700/50 py-2">
                <span className="font-semibold text-slate-300">{spec.name}</span>
                <span className="text-right text-slate-400">{spec.value}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


const HomeSection: React.FC = () => {
  return (
    <section className="space-y-12">
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mb-4">
          Halot Mage Pro <span className="text-orange-400">8K</span>
        </h1>
        <p className="text-lg text-slate-400 text-center max-w-3xl mx-auto">
          Descubre la impresora de resina que combina resolución profesional, velocidad superior y un ecosistema inteligente para llevar tus creaciones al siguiente nivel.
        </p>
      </div>

      <ImageCarousel />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {KEY_FEATURES.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>

      <TechSpecs specs={TECHNICAL_SPECS} />
    </section>
  );
};

export default HomeSection;
