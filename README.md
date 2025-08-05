# 🔬 FabLab Connect: Halot Mage Pro

> **Proyecto de Investigación en Fabricación Digital e Inteligencia Artificial**  
> *FabLab EPN - Escuela Politécnica Nacional*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Available-brightgreen)](https://proyectofablab.vercel.app)
[![Status](https://img.shields.io/badge/Status-Active-success)](https://github.com/Marckr02/proyectofablab)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.1.1-61dafb)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-blue)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2.0-646cff)](https://vitejs.dev/)

## 📋 Descripción del Proyecto

**FabLab Connect: Halot Mage Pro** es una aplicación web desarrollada como parte de un proyecto de investigación en el FabLab de la Escuela Politécnica Nacional. El proyecto documenta y analiza la integración de herramientas de inteligencia artificial en procesos de fabricación digital, específicamente en el contexto de impresión 3D con tecnología de estereolitografía.

### 🎯 Objetivos

- **Documentar** el proceso completo de fabricación digital con la impresora Halot Mage Pro 8K
- **Analizar** la aplicación de herramientas de IA en entornos FabLab
- **Desarrollar** metodologías de integración tecnológica para espacios de fabricación digital
- **Crear** una plataforma web interactiva para la documentación del proyecto

## ✨ Características Principales

### 🖥️ **Interfaz Moderna y Responsive**
- Diseño con **Tailwind CSS** y efectos glassmorphism
- **Animaciones fluidas** y transiciones suaves
- **Optimizada para móviles** con navegación adaptativa
- **Modo oscuro** como tema principal

### 📱 **Secciones Interactivas**
- **🏠 Inicio**: Carrusel de imágenes y especificaciones técnicas
- **📸 Documentación**: Galería multimedia del proceso de fabricación
- **🎬 Videos**: Documentación audiovisual con carátulas personalizadas
- **🤖 Herramientas IA**: Catálogo de herramientas de inteligencia artificial
- **📖 Manual Técnico**: Protocolos y procedimientos operativos

### 🎥 **Contenido Multimedia**
- **Videos sin audio** en galería para navegación fluida
- **Carátulas personalizadas** para videos de documentación
- **Sistema de etiquetado G/P** para organización de contenido
- **Reproducción automática** con controles optimizados

## 🛠️ Tecnologías Utilizadas

### **Frontend**
```typescript
- React 19.1.1          // Framework de UI
- TypeScript 5.8.2      // Tipado estático
- Vite 6.2.0            // Herramienta de build
- Tailwind CSS          // Framework de estilos
- ESM Imports           // Módulos desde esm.sh
```

### **Deployment & DevOps**
```yaml
- Vercel                # Hosting y CI/CD
- GitHub Actions        # Automatización
- Git                   # Control de versiones
- Auto-deployment       # Deploy automático desde main
```

### **Multimedia & Assets**
```
- SVG Graphics          # Iconos y carátulas
- MP4 Videos           # Documentación audiovisual
- JPG Images           # Fotografía del proceso
- Responsive Images    # Optimización para dispositivos
```

## 🚀 Instalación y Uso

### **Prerrequisitos**
- Node.js 18+ 
- npm o yarn
- Git

### **Instalación Local**

1. **Clonar el repositorio:**
```bash
git clone https://github.com/Marckr02/proyectofablab.git
cd proyectofablab
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar en desarrollo:**
```bash
npm run dev
```

4. **Abrir en navegador:**
```
http://localhost:5173
```

### **Scripts Disponibles**

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Vista previa del build
npm run type-check   # Verificación de tipos TypeScript
```

## 📂 Estructura del Proyecto

```
proyectofablab/
├── 📁 components/          # Componentes React
│   ├── Header.tsx          # Navegación principal
│   ├── HomeSection.tsx     # Sección de inicio
│   ├── GallerySection.tsx  # Galería multimedia
│   ├── VideosSection.tsx   # Sección de videos
│   ├── AiToolsSection.tsx  # Herramientas de IA
│   ├── HelpSection.tsx     # Manual técnico
│   ├── FloatingHelpButton.tsx  # Botón flotante
│   └── Icons.tsx           # Iconos personalizados
├── 📁 resources/           # Assets multimedia (G/P tagged)
│   ├── G_*.mp4            # Videos para galería
│   ├── P_*.jpg            # Imágenes para página principal
│   └── G_P_*.jpg          # Contenido compartido
├── 📁 public/             # Assets públicos
│   ├── video-*-cover.svg  # Carátulas de videos
│   └── *.jpg              # Imágenes procesadas
├── 📄 constants.tsx       # Configuración y datos
├── 📄 types.ts           # Definiciones de tipos
├── 📄 App.tsx            # Componente principal
└── 📄 vite.config.ts     # Configuración de Vite
```

## 🎨 Sistema de Organización de Contenido

### **Etiquetado G/P**
- **G (Gallery)**: Contenido exclusivo para galería
- **P (Principal)**: Contenido para página principal  
- **G_P**: Contenido compartido entre ambas secciones

### **Convenciones de Nomenclatura**
```
G_Proceso.mp4              # Solo galería
P_Producto.jpg             # Solo página principal
G_P_Resultado.jpg          # Ambas secciones
```

## 🔧 Configuración de Desarrollo

### **Variables de Entorno**
```env
# No se requieren variables de entorno especiales
# Todo el contenido es estático
```

### **Configuración de Vite**
```typescript
// vite.config.ts
export default defineConfig({
  publicDir: 'resources',      // Directorio de assets
  assetsInclude: ['**/*.mp4'], // Incluir videos
  base: '/',                   // Ruta base
})
```

## 🌐 Deployment

### **Vercel (Automático)**
El proyecto se despliega automáticamente en Vercel cuando se hace push a la rama `main`:

1. **Configuración automática** desde GitHub
2. **Build commands**: `npm run build`
3. **Output directory**: `dist`
4. **Domain**: `proyectofablab.vercel.app`

### **Configuración Manual**
```json
// vercel.json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    }
  ]
}
```

## 📊 Características Técnicas

### **Performance**
- ⚡ **Vite HMR** para desarrollo rápido
- 🗜️ **Assets optimizados** para web
- 📱 **Progressive loading** de contenido multimedia
- 🎯 **Tree shaking** automático

### **Accessibility**
- ♿ **ARIA labels** en elementos interactivos
- ⌨️ **Navegación por teclado** completa
- 🎨 **Alto contraste** en colores
- 📖 **Alt texts** descriptivos

### **SEO**
- 🏷️ **Meta tags** optimizados
- 📋 **Structured data** para contenido
- 🔗 **URLs amigables** con SPA routing
- 📄 **Sitemap** automático

## 🤝 Contribución

### **Proceso de Contribución**
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

### **Estándares de Código**
- **TypeScript** para tipado estático
- **ESLint** para linting
- **Prettier** para formateo
- **Conventional Commits** para mensajes

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 👥 Equipo

### **Desarrollo**
- **Desarrollador Principal**: [Marckr02](https://github.com/Marckr02)
- **Institución**: FabLab EPN - Escuela Politécnica Nacional
- **Período**: 2025

### **Agradecimientos**
- FabLab EPN por las facilidades y equipamiento
- Comunidad de desarrollo de React y TypeScript
- Creality por la documentación técnica de Halot Mage Pro

## 📞 Contacto

- **📧 Email**: [contacto@fablab-epn.edu.ec]
- **🐛 Issues**: [GitHub Issues](https://github.com/Marckr02/proyectofablab/issues)
- **💬 Discussions**: [GitHub Discussions](https://github.com/Marckr02/proyectofablab/discussions)

---

<div align="center">

**🔬 Fabricación Digital • 🤖 Inteligencia Artificial • 🎓 Investigación Académica**

*Desarrollado con ❤️ en el FabLab EPN*

[⬆️ Volver al inicio](#-fablab-connect-halot-mage-pro)

</div>
