
import React from 'react';
import { AI_TOOL_CATEGORIES } from '../constants';
import type { AiTool, AiToolCategory } from '../types';
import { LinkIcon } from './Icons';

const ToolCard: React.FC<{ tool: AiTool }> = ({ tool }) => (
  <div className="bg-slate-800 p-6 rounded-lg shadow-lg flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
    <div className="flex items-center mb-4">
      <div className="text-orange-400 mr-4 flex-shrink-0">{tool.icon}</div>
      <h4 className="text-xl font-bold text-white">{tool.name}</h4>
    </div>
    <p className="text-slate-400 text-sm mb-6 flex-grow">{tool.description}</p>
    <a
      href={tool.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center justify-center gap-2 bg-orange-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-500 transition-colors duration-300"
    >
      Visitar Herramienta <LinkIcon />
    </a>
  </div>
);

const AiToolsSection: React.FC = () => {
  return (
    <section className="space-y-12">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
          Herramientas de IA para Impresión 3D
        </h1>
        <p className="text-lg text-slate-400 text-center max-w-3xl mx-auto">
          Potencia tu flujo de trabajo desde la concepción hasta la optimización con estas herramientas de inteligencia artificial.
        </p>
      </div>

      <div className="space-y-12">
        {AI_TOOL_CATEGORIES.map((category: AiToolCategory) => (
          <div key={category.category}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{category.category}</h2>
            {category.description && <p className="text-slate-400 mb-6">{category.description}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.tools.map((tool: AiTool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AiToolsSection;
