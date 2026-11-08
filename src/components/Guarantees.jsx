import React from 'react';
import { Clock, ShieldCheck, UserCheck, Award } from 'lucide-react';
import { GUARANTEES } from '../constants/servicesData';

export default function Guarantees({ isDarkMode }) {
  const iconMap = {
    Clock: <Clock size={24} />,
    ShieldCheck: <ShieldCheck size={24} />,
    UserCheck: <UserCheck size={24} />,
    Award: <Award size={24} />
  };

  return (
    <section id="garansi" className={`px-4 md:px-8 py-12 border-y ${
      isDarkMode ? 'bg-slate-900/50 border-slate-800/80' : 'bg-slate-100/70 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {GUARANTEES.map((g, idx) => (
          <div key={idx} className="space-y-2 p-4">
            <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-emerald-500 mx-auto ${
              isDarkMode ? 'bg-emerald-950 border-emerald-800' : 'bg-emerald-50 border-emerald-200'
            }`}>
              {iconMap[g.icon]}
            </div>
            <h4 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{g.title}</h4>
            <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
