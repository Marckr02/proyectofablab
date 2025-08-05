import React from 'react';

interface VideoItem {
  id: string;
  title: string;
  description: string;
  duration?: string;
  src: string;
  thumbnail?: string;
}

const FINAL_VIDEOS: VideoItem[] = [
  {
    id: 'video-presentacion-ia',
    title: 'Video 1 – Presentación de la herramienta IA',
    description: 'Este video introduce la herramienta de inteligencia artificial seleccionada, explicando qué es, cómo se accede a ella y cuáles son sus principales ventajas. Se contextualiza su utilidad dentro del entorno FabLab, destacando su potencial para facilitar tareas técnicas y creativas.',
    duration: '2–3 minutos',
    src: '',
    thumbnail: '/Modelo 3D Impreso Finalizado.jpg'
  },
  {
    id: 'video-caso-practico',
    title: 'Video 2 – Caso práctico en el FabLab',
    description: 'Se muestra un caso práctico de uso real o simulado de la herramienta aplicada a un equipo del FabLab. El video evidencia cómo la inteligencia artificial puede optimizar procesos específicos, mejorar la eficiencia del trabajo y apoyar la toma de decisiones técnicas.',
    duration: '3–5 minutos',
    src: '/Video 2_Proyecto ISR.mp4'
  },
  {
    id: 'video-integracion-futura',
    title: 'Video 3 – Propuesta de integración futura',
    description: 'Este video presenta una visión a futuro sobre la integración de la herramienta en el FabLab. Se plantean ideas para su implementación continua, buscando fomentar una cultura de mejora constante y adopción tecnológica dentro del espacio de fabricación digital.',
    duration: '2–3 minutos',
    src: '',
    thumbnail: '/Configuración de la impresión 3D en Halot Box.jpg'
  }
];

const VideoCard: React.FC<{ video: VideoItem; index: number }> = ({ video, index }) => {
  const hasVideo = video.src && video.src !== '';
  
  return (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-xl hover:shadow-orange-500/20 transition-all duration-500 transform hover:-translate-y-2 border border-slate-700/50 hover:border-orange-500/30">
      <div className="relative aspect-video bg-black">
        {hasVideo ? (
          <video 
            src={video.src} 
            controls 
            muted 
            preload="metadata"
            className="w-full h-full object-contain"
            poster={video.thumbnail}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-700/50 relative">
            {video.thumbnail && (
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="w-full h-full object-cover opacity-30"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-orange-400 font-semibold text-lg">Próximamente</p>
                <p className="text-slate-400 text-sm mt-2">Video en preparación</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Número del video */}
        <div className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-bold px-3 py-1 rounded-full">
          #{index + 1}
        </div>
        
        {/* Indicador de estado */}
        <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${
          hasVideo 
            ? 'bg-green-500/90 text-white' 
            : 'bg-yellow-500/90 text-black'
        }`}>
          {hasVideo ? 'Disponible' : 'Próximamente'}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3 hover:text-orange-300 transition-colors duration-300">
          {video.title}
        </h3>
        
        {video.duration && (
          <div className="flex items-center gap-2 text-orange-400 text-sm mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Duración: {video.duration}</span>
          </div>
        )}
        
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {video.description}
        </p>
        
        {hasVideo && (
          <div className="flex items-center gap-2 text-green-400 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Video disponible para reproducción</span>
          </div>
        )}
      </div>
    </div>
  );
};

const VideosSection: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
          <h2 className="text-3xl font-bold text-white">Videos Finales del Proyecto</h2>
        </div>
        <p className="text-slate-400 max-w-3xl mx-auto">
          Serie de videos sobre la integración de herramientas de inteligencia artificial en el entorno FabLab. 
          Desde la introducción de las tecnologías hasta casos prácticos y propuestas de implementación futura en el espacio de fabricación digital.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {FINAL_VIDEOS.map((video, index) => (
          <VideoCard 
            key={video.id} 
            video={video} 
            index={index}
          />
        ))}
      </div>
      
      <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
        <div className="flex items-start gap-4">
          <svg className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Información sobre los Videos</h3>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Los videos documentan la integración de herramientas de IA en el FabLab</li>
              <li>• Cada video tiene una duración específica optimizada para el contenido</li>
              <li>• Se reproducen sin sonido por defecto para una mejor experiencia de navegación</li>
              <li>• Los videos próximos se añadirán conforme se complete la grabación y edición</li>
              <li>• Enfoque en casos prácticos y propuestas de implementación real</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
