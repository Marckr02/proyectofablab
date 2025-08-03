
import React from 'react';
import type { Feature, Spec, FaqItem, AiToolCategory, TutorialStep, GalleryItem } from './types';
import { ResolutionIcon, SpeedIcon, VolumeIcon, SmartIcon, ConnectivityIcon, LinkIcon, LumaIcon, OpenAiIcon, MidjourneyIcon, PrintablesIcon, OctoPrintIcon, MeshroomIcon, CopilotIcon } from './components/Icons';

// Usando rutas directas ya que los archivos están en el directorio público
export const PRINTER_IMAGES: string[] = [
    '/Modelo 3D Impreso Finalizado.jpg', // Resultado final impreso
    '/Configuración de la impresión 3D en Halot Box.jpg', // Configuración en software
    '/Colocación de protección previo a la Impresión.jpg',  // Persona operando la impresora de forma segura
    '/Modelo 3D Impreso.jpg', // Proceso de impresión
];

export const KEY_FEATURES: Feature[] = [
  {
    icon: <ResolutionIcon />,
    title: "Resolución Profesional 8K",
    description: "Pantalla LCD monocromática de 10.3\" (7680x4320) con resolución XY de 29,7 μm para detalles ultrafinos."
  },
  {
    icon: <SpeedIcon />,
    title: "Velocidad de Impresión Superior",
    description: "Alcanza hasta 170 mm/h gracias al sistema de movimiento 'Dynax' y la Fuente de Luz Integral 3.0."
  },
  {
    icon: <VolumeIcon />,
    title: "Gran Volumen de Construcción",
    description: "Espacio de 228 x 128 x 230 mm para crear modelos grandes o múltiples piezas a la vez."
  },
  {
    icon: <SmartIcon />,
    title: "Sistema Inteligente",
    description: "Incluye bomba de llenado/extracción automática de resina y un purificador de aire con filtro de carbón activado."
  },
  {
    icon: <ConnectivityIcon />,
    title: "Conectividad Avanzada",
    description: "Control a través de WiFi, cable RJ45 y la plataforma en la nube Creality Cloud para una gestión flexible."
  }
];

export const TECHNICAL_SPECS: Spec[] = [
    { name: "Tecnología de Impresión", value: "MSLA (LCD-based Stereolithography)" },
    { name: "Volumen de Construcción", value: "228 x 128 x 230 mm" },
    { name: "Dimensiones de la Impresora", value: "333 x 270 x 608 mm" },
    { name: "Peso Neto", value: "12 kg" },
    { name: "Velocidad de Impresión", value: "≤ 170 mm/h" },
    { name: "Resolución XY", value: "29,7 μm" },
    { name: "Altura de Capa", value: "0.01 - 0.15 mm" },
    { name: "Pantalla LCD", value: "Monocromática de 10.3 pulgadas" },
    { name: "Resolución LCD", value: "8K (7680 x 4320)" },
    { name: "Fuente de Luz", value: "Fuente de Luz Integral 3.0" },
    { name: "Transferencia de Archivos", value: "Unidad USB, Cable RJ45, WiFi" },
    { name: "Purificador de Aire", value: "Sí, con filtro de carbón activado" },
    { name: "Bomba de Resina", value: "Sí, llenado y extracción automática" },
    { name: "Software Slicer", value: "Halot Box, LycheeSlicer, Chitubox" },
    { name: "Formato de Archivo", value: ".stl, .obj" },
];

export const QUICK_START_GUIDE: TutorialStep[] = [
    { title: "1. Encendido y Configuración Inicial", description: "Conecta la impresora a la corriente y enciéndela. Sigue las instrucciones en pantalla para la calibración inicial de la placa de impresión, asegurando que esté perfectamente nivelada." },
    { title: "2. Manejo de la Resina", description: "Coloca la botella de resina en el soporte y conecta los tubos de la bomba automática. Usa la función de 'Llenado Automático' para cargar el tanque de resina de forma segura y sin derrames." },
    { title: "3. Preparando tu Modelo 3D", description: "Usa un software laminador como Halot Box o LycheeSlicer. Importa tu modelo 3D, oriéntalo, añade los soportes necesarios y lamina el archivo para generar el código de impresión." },
    { title: "4. Inicio de la Impresión Remota", description: "Transfiere el archivo laminado a la impresora mediante una unidad USB, o conéctate a través de Wi-Fi. Puedes iniciar y monitorear el progreso del trabajo desde tu PC o la app Creality Cloud." },
    { title: "5. Post-Procesado de la Pieza", description: "Una vez finalizada la impresión, retira la pieza con cuidado. Lávala en alcohol isopropílico para eliminar el exceso de resina y luego cúrala bajo luz UV para alcanzar la máxima dureza." },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Qué hacer si la impresión no se adhiere a la base?",
    answer: "Asegúrate de que la placa de construcción esté correctamente nivelada. Limpia la placa con alcohol isopropílico. También puedes aumentar ligeramente el tiempo de exposición de las primeras capas en la configuración del laminador."
  },
  {
    question: "¿Cómo cambio el filtro de carbón activado del purificador?",
    answer: "El filtro se encuentra en una pequeña compuerta en la parte trasera de la cámara de impresión. Simplemente abre la compuerta, retira el filtro usado y reemplázalo por uno nuevo. Se recomienda cambiarlo cada 3-6 meses dependiendo del uso."
  },
  {
    question: "Aparece un mensaje de error en la pantalla, ¿qué significa?",
    answer: "Consulta el manual de usuario que viene con la impresora para una lista completa de códigos de error. Errores comunes suelen estar relacionados con la detección del tanque de resina o fallos en la lectura del archivo de impresión desde el USB."
  },
];

export const MAINTENANCE_TIPS: string[] = [
    "Después de cada impresión, filtra la resina sobrante para eliminar cualquier trozo curado antes de devolverla a la botella.",
    "Limpia el tanque de resina (VAT) con cuidado usando una espátula de plástico y paños suaves para no dañar la película FEP.",
    "Mantén la pantalla LCD impecable. Límpiala con un paño de microfibra y alcohol isopropílico si hay alguna mancha de resina.",
    "Revisa periódicamente la tensión de la película FEP. Una película floja puede causar fallos de impresión."
];


export const AI_TOOL_CATEGORIES: AiToolCategory[] = [
  {
    category: "Diseño Asistido por IA (Texto/Imagen a 3D)",
    description: "Genera conceptos, inspiración y modelos 3D a partir de descripciones de texto o imágenes.",
    tools: [
      { name: "Luma AI (Genie)", description: "Herramienta de vanguardia para la generación de modelos 3D a partir de texto.", link: "https://lumalabs.ai/genie", icon: <LumaIcon /> },
      { name: "Midjourney", description: "Ideal para generar conceptos visuales e inspiración artística para tus modelos.", link: "https://www.midjourney.com", icon: <MidjourneyIcon /> },
      { name: "DALL·E 3", description: "Integrado en ChatGPT Plus y Copilot, crea imágenes detalladas a partir de texto.", link: "https://openai.com/dall-e-3", icon: <OpenAiIcon /> },
    ]
  },
  {
    category: "Optimización de Impresión 3D",
    description: "Usa IA para mejorar la orientación de tus modelos y predecir fallos.",
    tools: [
      { name: "Printables AI", description: "Optimiza la orientación del modelo para minimizar soportes y mejorar la calidad.", link: "https://www.printables.com/es/ai", icon: <PrintablesIcon /> },
      { name: "OctoPrint Plugins (ML)", description: "Plugins avanzados para monitoreo inteligente y detección de fallos en tiempo real.", link: "https://plugins.octoprint.org/", icon: <OctoPrintIcon /> },
    ]
  },
  {
    category: "Reconstrucción y Mejora de Escaneos 3D",
    description: "Convierte fotos o escaneos del mundo real en modelos 3D detallados.",
    tools: [
      { name: "Luma AI (Captures)", description: "App móvil para escanear objetos y escenas y convertirlos en modelos 3D.", link: "https://lumalabs.ai/capture", icon: <LumaIcon /> },
      { name: "Meshroom", description: "Software de fotogrametría de código abierto para crear modelos 3D a partir de fotos.", link: "https://alicevision.org/#meshroom", icon: <MeshroomIcon /> },
    ]
  },
  {
      category: "Soporte Técnico y Documentación",
      description: "Asistentes de IA para resolver dudas y generar contenido.",
      tools: [
          { name: "ChatGPT", description: "Resuelve dudas técnicas, genera documentación o crea borradores de guiones.", link: "https://chat.openai.com", icon: <OpenAiIcon /> },
          { name: "Microsoft Copilot", description: "Asistente de IA para investigación, resolución de problemas y generación de contenido.", link: "https://copilot.microsoft.com", icon: <CopilotIcon /> },
      ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
    { 
        id: 'safety-preparation', 
        title: 'Colocación de Protección Previo a la Impresión', 
        description: 'La seguridad es fundamental en la impresión 3D con resina. Aquí se muestra la correcta colocación del equipo de protección personal antes de comenzar el proceso.', 
        tags: ['Seguridad', 'Preparación', 'EPP'], 
        type: 'image', 
        src: '/Colocación de protección previo a la Impresión.jpg', 
        thumbnail: '/Colocación de protección previo a la Impresión.jpg' 
    },
    { 
        id: 'slicer-settings', 
        title: 'Configuración de la Impresión 3D en Halot Box', 
        description: 'Ajustando los parámetros críticos en el software Halot Box. La correcta configuración del tiempo de exposición, altura de capa y soportes es clave para una impresión exitosa.', 
        tags: ['Configuración', 'HalotBox', 'Software', 'Parámetros'], 
        type: 'image', 
        src: '/Configuración de la impresión 3D en Halot Box.jpg', 
        thumbnail: '/Configuración de la impresión 3D en Halot Box.jpg' 
    },
    { 
        id: 'printer-parameters', 
        title: 'Parámetros Usados en la Impresora', 
        description: 'Vista detallada de los parámetros optimizados para esta impresión específica. Cada modelo requiere ajustes precisos para obtener la mejor calidad.', 
        tags: ['Parámetros', 'Configuración', 'Optimización'], 
        type: 'image', 
        src: '/Parametros usados en la impresora.jpg', 
        thumbnail: '/Parametros usados en la impresora.jpg' 
    },
    { 
        id: 'printing-process', 
        title: 'Proceso de Impresión de la Pieza (Video)', 
        description: 'Observa el fascinante proceso de impresión capa por capa. La Halot Mage Pro trabajando con precisión milimétrica para crear objetos tridimensionales complejos.', 
        tags: ['Proceso', 'Impresión', 'Video', 'Tecnología'], 
        type: 'video', 
        src: '/Proceso de impresión de la pieza.mp4', 
        thumbnail: '/Modelo 3D Impreso.jpg' 
    },
    { 
        id: 'printed-model', 
        title: 'Modelo 3D Impreso', 
        description: 'El resultado de la impresión 3D recién salido de la impresora. Se puede apreciar la alta calidad y detalle que ofrece la tecnología MSLA de la Halot Mage Pro.', 
        tags: ['Resultado', 'Calidad', 'Modelo 3D'], 
        type: 'image', 
        src: '/Modelo 3D Impreso.jpg', 
        thumbnail: '/Modelo 3D Impreso.jpg' 
    },
    { 
        id: 'centrifuge-process', 
        title: 'Centrifugado de la Pieza Impresa (Video)', 
        description: 'Proceso de centrifugado para eliminar el exceso de resina líquida de la pieza recién impresa. Este paso es crucial antes del lavado con alcohol isopropílico.', 
        tags: ['Post-procesado', 'Centrifugado', 'Video', 'Limpieza'], 
        type: 'video', 
        src: '/Centrifugado de la pieza impresa.mp4', 
        thumbnail: '/Modelo 3D Impreso Finalizado.jpg' 
    },
    { 
        id: 'uv-treatment', 
        title: 'Tratamiento UV de la Pieza Impresa (Video)', 
        description: 'Última etapa del post-procesado: curado con luz UV para endurecer completamente la resina y obtener las propiedades mecánicas finales de la pieza.', 
        tags: ['Curado UV', 'Post-procesado', 'Video', 'Finalización'], 
        type: 'video', 
        src: '/Tratamiento UV de la pieza Impresa.mp4', 
        thumbnail: '/Modelo 3D Impreso Finalizado.jpg' 
    },
    { 
        id: 'final-result', 
        title: 'Modelo 3D Impreso Finalizado', 
        description: 'El resultado final después de todo el proceso: impresión, limpieza, centrifugado y curado UV. Una pieza de alta calidad lista para usar.', 
        tags: ['Resultado Final', 'Alta Calidad', 'Terminado'], 
        type: 'image', 
        src: '/Modelo 3D Impreso Finalizado.jpg', 
        thumbnail: '/Modelo 3D Impreso Finalizado.jpg' 
    }
];
