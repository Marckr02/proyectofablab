import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../constants';
import type { GalleryItem } from '../types';
import { PlayIcon, CloseIcon, ChevronLeftIcon, ChevronRightIcon, GalleryIcon } from './Icons';

const Modal: React.FC<{ 
    item: GalleryItem; 
    onClose: () => void; 
    onNext: () => void;
    onPrev: () => void;
}> = ({ item, onClose, onNext, onPrev }) => {

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') onNext();
            if (e.key === 'ArrowLeft') onPrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose, onNext, onPrev]);

    return (
        <div 
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="media-title"
        >
            <div className="relative w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                {/* Content */}
                <div className="bg-slate-900 rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden">
                    <div className="relative aspect-video bg-black">
                       {item.type === 'image' ? (
                            <img src={item.src} alt={item.title} className="w-full h-full object-contain" />
                        ) : (
                            <video src={item.src} controls autoPlay muted className="w-full h-full object-contain">
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                    <div className="p-4 sm:p-6">
                        <h3 id="media-title" className="text-xl font-bold text-orange-400">{item.title}</h3>
                        <p className="text-slate-300 mt-2">{item.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.tags.map(tag => (
                                <span key={tag} className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Close button */}
                <button onClick={onClose} aria-label="Cerrar" className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors">
                    <CloseIcon />
                </button>

                {/* Navigation buttons */}
                <button onClick={onPrev} aria-label="Anterior" className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors">
                    <ChevronLeftIcon />
                </button>
                <button onClick={onNext} aria-label="Siguiente" className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-colors">
                    <ChevronRightIcon />
                </button>
            </div>
        </div>
    );
};

const GalleryCard: React.FC<{ item: GalleryItem; onSelect: () => void }> = ({ item, onSelect }) => {
    return (
        <div 
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-slate-700/50 hover:border-orange-500/30"
            onClick={onSelect}
        >
            {/* Imagen con efecto parallax */}
            <div className="relative h-56 overflow-hidden">
                <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
            </div>
            
            {/* Icono de play mejorado para videos */}
            {item.type === 'video' && (
                <div className="absolute top-4 right-4 z-10">
                    <div className="bg-orange-500/90 backdrop-blur-sm text-white p-2 rounded-full shadow-lg">
                        <PlayIcon />
                    </div>
                </div>
            )}
            
            {/* Contenido mejorado */}
            <div className="relative p-6">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
                    {item.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-4 line-clamp-3 group-hover:text-slate-300 transition-colors duration-300">
                    {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map(tag => (
                        <span 
                            key={tag} 
                            className="text-slate-300 text-xs font-semibold px-2.5 py-1 bg-slate-700/70 rounded-full border border-orange-500/20 group-hover:bg-orange-500/20 group-hover:border-orange-500/40 transition-all duration-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const GallerySection: React.FC = () => {
    const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

    const handleSelect = useCallback((index: number) => {
        setSelectedItemIndex(index);
    }, []);

    const handleClose = useCallback(() => {
        setSelectedItemIndex(null);
    }, []);

    const handleNext = useCallback(() => {
        if (selectedItemIndex !== null) {
            setSelectedItemIndex(prevIndex => 
                prevIndex !== null ? (prevIndex + 1) % GALLERY_ITEMS.length : 0
            );
        }
    }, [selectedItemIndex]);

    const handlePrev = useCallback(() => {
        if (selectedItemIndex !== null) {
            setSelectedItemIndex(prevIndex => 
                prevIndex !== null 
                    ? (prevIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length 
                    : GALLERY_ITEMS.length - 1
            );
        }
    }, [selectedItemIndex]);

    return (
        <div className="space-y-8">
            <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                    <GalleryIcon />
                    <h2 className="text-3xl font-bold text-white">Galería del Proceso</h2>
                </div>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Explora el fascinante mundo de la impresión 3D con resina a través de nuestra galería. 
                    Desde la preparación hasta el resultado final, cada imagen y video cuenta una historia del proceso completo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GALLERY_ITEMS.map((item, index) => (
                    <GalleryCard 
                        key={item.id} 
                        item={item} 
                        onSelect={() => handleSelect(index)}
                    />
                ))}
            </div>

            {selectedItemIndex !== null && (
                <Modal
                    item={GALLERY_ITEMS[selectedItemIndex]}
                    onClose={handleClose}
                    onNext={handleNext}
                    onPrev={handlePrev}
                />
            )}
        </div>
    );
};

export default GallerySection;
