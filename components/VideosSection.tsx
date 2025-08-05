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
    title: 'Video 1 – Marco Teórico: Herramientas de IA',
    description: 'Fundamentación teórica de la herramienta de inteligencia artificial seleccionada para el estudio. Se analiza su arquitectura, metodología de acceso y características técnicas relevantes. Se contextualiza su aplicabilidad en el entorno FabLab mediante revisión de literatura especializada.',
    duration: '2–3 minutos',
    src: '/Video 1_Proyecto ISR.mp4',
    thumbnail: '/Modelo 3D Impreso Finalizado.jpg'
  },
  {
    id: 'video-caso-practico',
    title: 'Video 2 – Estudio de Caso: Aplicación Práctica',
    description: 'Implementación experimental de la herramienta de IA aplicada a equipamiento específico del FabLab. Metodología de evaluación, métricas de rendimiento y análisis comparativo de eficiencia operacional. Documentación de resultados y validación técnica del proceso.',
    duration: '3–5 minutos',
    src: '/Video 2_Proyecto ISR.mp4'
  },
  {
    id: 'video-integracion-futura',
    title: 'Video 3 – Propuesta Metodológica de Integración',
    description: 'Desarrollo de un marco metodológico para la integración sistemática de herramientas de IA en espacios de fabricación digital. Análisis de viabilidad técnica, consideraciones de escalabilidad y recomendaciones para implementación en entornos académicos similares.',
    duration: '2–3 minutos',
    src: '/Video 3_Proyecto ISR.mp4',
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
          <h2 className="text-3xl font-bold text-white">Documentación Audiovisual del Proyecto</h2>
        </div>
        <p className="text-slate-400 max-w-3xl mx-auto">
          Documentación audiovisual del estudio sobre integración de herramientas de inteligencia artificial en el entorno FabLab. 
          Análisis desde la fundamentación teórica hasta la evaluación de casos de uso y propuestas de implementación en espacios de fabricación digital.
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
            <h3 className="text-lg font-semibold text-white mb-2">Metodología de Documentación</h3>
            <ul className="text-slate-400 text-sm space-y-1">
              <li>• Registro audiovisual de procesos de investigación aplicada en fabricación digital</li>
              <li>• Cada segmento presenta duración específica optimizada para la transmisión de contenido técnico</li>
              <li>• Reproducción sin audio activado por defecto para navegación fluida en el entorno web</li>
              <li>• Documentación progresiva conforme avance del cronograma de investigación</li>
              <li>• Enfoque metodológico en validación experimental y propuestas de implementación</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosSection;
