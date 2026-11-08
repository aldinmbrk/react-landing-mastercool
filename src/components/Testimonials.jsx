import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants/servicesData';

export default function Testimonials({ isDarkMode }) {
  return (
    <section id="testimoni" className={`px-4 md:px-8 py-16 max-w-7xl mx-auto border-t ${
      isDarkMode ? 'border-slate-800/60' : 'border-slate-200'
    }`}>
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
        <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Testimoni Pelanggan Setia</h2>
        <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Kepuasan pelanggan adalah prioritas utama layanan kami.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className={`border rounded-2xl p-6 space-y-4 ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="flex gap-1 text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className={`text-xs leading-relaxed italic ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              "{t.comment}"
            </p>
            <div className={`pt-2 border-t flex items-center gap-3 ${isDarkMode ? 'border-slate-800/60' : 'border-slate-100'}`}>
              <div className={`w-8 h-8 rounded-full font-bold flex items-center justify-center text-xs ${t.bg}`}>
                {t.avatar}
              </div>
              <div>
                <span className={`font-bold text-xs block ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{t.name}</span>
                <span className={`text-[10px] ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{t.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}