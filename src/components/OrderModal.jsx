import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { openWhatsApp } from '../utils/formatCurrency';

export default function OrderModal({ isOpen, onClose, isDarkMode, initialService }) {
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    layanan: initialService || 'Service & Cuci AC Standard',
    jumlahUnit: '2 Unit',
    catatan: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*ORDER SERVICE AC ONLINE* 🛠️\n\n` +
      `*Nama:* ${formData.nama}\n` +
      `*Alamat:* ${formData.alamat}\n` +
      `*Layanan:* ${formData.layanan}\n` +
      `*Jumlah Unit:* ${formData.jumlahUnit}\n` +
      `*Catatan:* ${formData.catatan || '-'}\n\n` +
      `Mohon info jadwal kedatangan teknisi terdekat. Terima kasih!`;
    
    openWhatsApp(message);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className={`border max-w-md w-full rounded-3xl p-6 space-y-4 relative animate-in fade-in zoom-in-95 duration-200 ${
        isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-2xl'
      }`}>
        <button 
          onClick={onClose}
          className={`absolute top-4 right-4 p-1 ${isDarkMode ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-800'}`}
        >
          <X size={20} />
        </button>

        <div className="space-y-1">
          <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Form Pemesanan Teknisi</h3>
          <p className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Isi data di bawah untuk otomatis menyusun format pesan ke WhatsApp.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 pt-2">
          <div>
            <label className={`text-[11px] font-semibold block mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Nama Lengkap</label>
            <input 
              type="text" 
              required
              placeholder="Contoh: Bpk. Andi"
              value={formData.nama}
              onChange={(e) => setFormData({...formData, nama: e.target.value})}
              className={`w-full border rounded-xl p-2.5 text-xs focus:outline-none focus:border-emerald-500 ${
                isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            />
          </div>

          <div>
            <label className={`text-[11px] font-semibold block mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Alamat Lengkap & Patokan</label>
            <input 
              type="text" 
              required
              placeholder="Contoh: Jl. Merpati No. 10, Kelurahan..."
              value={formData.alamat}
              onChange={(e) => setFormData({...formData, alamat: e.target.value})}
              className={`w-full border rounded-xl p-2.5 text-xs focus:outline-none focus:border-emerald-500 ${
                isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={`text-[11px] font-semibold block mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Pilihan Layanan</label>
              <select 
                value={formData.layanan}
                onChange={(e) => setFormData({...formData, layanan: e.target.value})}
                className={`w-full border rounded-xl p-2.5 text-xs focus:outline-none focus:border-emerald-500 ${
                  isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
                }`}
              >
                <option value="Service & Cuci AC Standard">Cuci Standard</option>
                <option value="Deep Cleaning (Cuci Besar)">Deep Cleaning</option>
                <option value="Overhaul / Perbaikan Total">Overhaul Total</option>
              </select>
            </div>
            <div>
              <label className={`text-[11px] font-semibold block mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Jumlah Unit</label>
              <select 
                value={formData.jumlahUnit}
                onChange={(e) => setFormData({...formData, jumlahUnit: e.target.value})}
                className={`w-full border rounded-xl p-2.5 text-xs focus:outline-none focus:border-emerald-500 ${
                  isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
                }`}
              >
                <option value="1 Unit">1 Unit</option>
                <option value="2 Unit">2 Unit</option>
                <option value="3 Unit">3 Unit</option>
                <option value="> 4 Unit (Kantor/Ruko)">&gt; 4 Unit</option>
              </select>
            </div>
          </div>

          <div>
            <label className={`text-[11px] font-semibold block mb-1 ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>Catatan Keluhan (Opsional)</label>
            <textarea 
              rows="2"
              placeholder="Contoh: AC kamar utama netes air sejak semalam"
              value={formData.catatan}
              onChange={(e) => setFormData({...formData, catatan: e.target.value})}
              className={`w-full border rounded-xl p-2.5 text-xs focus:outline-none focus:border-emerald-500 ${
                isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-300 text-slate-800'
              }`}
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
          >
            <Send size={16} /> Kirim Pesan ke WhatsApp Sekarang
          </button>
        </form>
      </div>
    </div>
  );
}
