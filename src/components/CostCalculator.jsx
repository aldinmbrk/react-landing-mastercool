import React from 'react';
import { Calculator, MessageSquare } from 'lucide-react';
import { openWhatsApp } from '../utils/formatCurrency';

export default function CostCalculator({ isDarkMode, calcState }) {
  const { 
    selectedService, setSelectedService, 
    unitCount, setUnitCount, 
    acType, setAcType, 
    estimatedPrice 
  } = calcState;

  return (
    <section id="kalkulator" className="px-4 md:px-8 py-16 max-w-5xl mx-auto">
      <div className={`border rounded-3xl p-6 md:p-10 shadow-2xl space-y-8 ${
        isDarkMode 
          ? 'bg-gradient-to-tr from-slate-900 via-slate-900 to-emerald-950/40 border-slate-800' 
          : 'bg-gradient-to-tr from-white via-white to-emerald-50/50 border-slate-200'
      }`}>
        
        <div className="text-center md:text-left space-y-2">
          <div className={`inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-500 border px-3 py-1 rounded-full ${
            isDarkMode ? 'bg-emerald-950 border-emerald-900' : 'bg-emerald-50 border-emerald-200'
          }`}>
            <Calculator size={14} /> Simulasi Biaya Instan
          </div>
          <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Kalkulator Estimasi Biaya</h2>
          <p className={`text-xs md:text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Hitung perkiraan biaya service sebelum dikirim ke WhatsApp.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>1. Pilih Layanan</label>
            <select 
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className={`w-full border rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-500 ${
                isDarkMode 
                  ? 'bg-slate-950 border-slate-800 text-slate-200' 
                  : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            >
              <option value="Service & Cuci AC Standard">Service & Cuci Standard (Rp 75k)</option>
              <option value="Deep Cleaning (Cuci Besar)">Deep Cleaning (Rp 150k)</option>
              <option value="Overhaul / Perbaikan Total">Overhaul Total (Rp 350k)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>2. Kapasitas AC (PK)</label>
            <select 
              value={acType}
              onChange={(e) => setAcType(e.target.value)}
              className={`w-full border rounded-xl p-3 text-xs focus:outline-none focus:border-emerald-500 ${
                isDarkMode 
                  ? 'bg-slate-950 border-slate-800 text-slate-200' 
                  : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            >
              <option value="0.5 - 1 PK">0.5 - 1 PK (Standar Rumah)</option>
              <option value="1.5 - 2 PK">1.5 - 2 PK (Ruang Tamu / Kantor)</option>
              <option value="> 2 PK">Kapasitas Besar (&gt; 2 PK)</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className={`text-xs font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>3. Jumlah Unit: <span className="text-emerald-500 font-bold">{unitCount} Unit</span></label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={unitCount}
              onChange={(e) => setUnitCount(parseInt(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer pt-2"
            />
          </div>
        </div>

        <div className={`border rounded-2xl p-4 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 ${
          isDarkMode ? 'bg-slate-950 border-slate-800' : 'bg-slate-50 border-slate-200'
        }`}>
          <div>
            <span className={`text-xs block ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Estimasi Total Biaya ({unitCount} Unit):</span>
            <div className="text-3xl font-black text-emerald-500">
              Rp {estimatedPrice} <span className={`text-xs font-normal ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>*(Belum termasuk promo)</span>
            </div>
          </div>

          <button 
            onClick={() => openWhatsApp(`Halo MasterCool, dari hasil kalkulator web: Saya ingin order ${selectedService} untuk ${unitCount} unit AC (${acType}). Berapa total bersihnya?`)}
            className="w-full md:w-auto bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-3.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <MessageSquare size={16} /> Kirim Estimasi ke WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
