import React from 'react';
import { CheckCircle2, MessageSquare } from 'lucide-react';

export default function ServiceCard({ service, isDarkMode, onSelect }) {
  const { title, desc, price, unit, popular, features } = service;

  return (
    <div 
      className={`rounded-3xl p-6 md:p-8 flex flex-col justify-between border relative transition hover:border-emerald-500/50 ${
        isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      } ${popular ? 'border-emerald-500 shadow-2xl shadow-emerald-500/10' : ''}`}
    >
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-400 text-slate-950 font-black text-[11px] uppercase tracking-wider px-4 py-1 rounded-full shadow">
          Paling Diminati
        </div>
      )}

      <div className="space-y-4">
        <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
        <p className={`text-xs leading-relaxed ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
        
        <div className="py-2">
          <span className={`text-xs block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Mulai Dari</span>
          <div className="flex items-baseline gap-1">
            <span className="text-sm font-bold text-emerald-500">Rp</span>
            <span className={`text-3xl font-black ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{price}</span>
            <span className={`text-xs font-normal ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{unit}</span>
          </div>
        </div>

        <ul className={`space-y-2.5 text-xs pt-2 border-t ${
          isDarkMode ? 'text-slate-300 border-slate-800' : 'text-slate-600 border-slate-100'
        }`}>
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-emerald-500 shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-6">
        <button 
          onClick={() => onSelect(title)}
          className={`w-full py-3.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 ${
            popular 
              ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20' 
              : isDarkMode 
                ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300'
          }`}
        >
          <MessageSquare size={16} /> Pesan Paket Ini via WA
        </button>
      </div>
    </div>
  );
}