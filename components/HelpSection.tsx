
import React, { useState } from 'react';
import { QUICK_START_GUIDE, FAQ_ITEMS, MAINTENANCE_TIPS } from '../constants';
import type { FaqItem, TutorialStep } from '../types';
import { ChevronDownIcon, ChevronUpIcon, CogIcon, HelpIcon, RocketIcon } from './Icons';

const AccordionItem: React.FC<{ item: FaqItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5 px-6"
      >
        <span className="font-semibold text-lg text-slate-200">{item.question}</span>
        <span className="text-orange-400 flex-shrink-0 ml-4">
            {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-slate-400">
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const SectionCard: React.FC<{title: string; icon: React.ReactNode; children: React.ReactNode}> = ({title, icon, children}) => (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 bg-slate-800/50 flex items-center gap-4">
            <div className="text-orange-400">{icon}</div>
            <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);

const HelpSection: React.FC = () => {
  return (
    <section className="space-y-12">
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-4">
          Manual Técnico y Procedimientos
        </h1>
        <p className="text-lg text-slate-400 text-center max-w-3xl mx-auto">
          Documentación técnica para la operación, mantenimiento y resolución de incidencias del equipo Halot Mage Pro en el contexto del FabLab EPN.
        </p>
      </div>

      <SectionCard title="Protocolo de Puesta en Marcha" icon={<RocketIcon />}>
        <div className="space-y-4">
          {QUICK_START_GUIDE.map((step: TutorialStep) => (
            <div key={step.title} className="p-4 bg-slate-900 rounded-md">
                <h3 className="font-bold text-orange-400">{step.title}</h3>
                <p className="text-slate-400 mt-1">{step.description}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Resolución de Incidencias Técnicas" icon={<HelpIcon />}>
        <div className="bg-slate-800 rounded-lg">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem key={index} item={item} />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Protocolo de Mantenimiento" icon={<CogIcon />}>
        <ul className="space-y-3 list-disc list-inside text-slate-400">
          {MAINTENANCE_TIPS.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </SectionCard>
    </section>
  );
};

export default HelpSection;
