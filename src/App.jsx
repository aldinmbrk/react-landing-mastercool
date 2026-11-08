import React, { useState } from 'react';
import { 
  Wrench, ShieldCheck, Calculator, Zap, MessageSquare, Send, ArrowRight, ChevronRight, Sun, Moon 
} from 'lucide-react';

import { SERVICES, FAQS } from './constants/servicesData';
import { openWhatsApp } from './utils/formatCurrency';
import { useCalculator } from './hooks/useCalculator';

import ServiceCard from './components/ServiceCard';
import CostCalculator from './components/CostCalculator';
import Guarantees from './components/Guarantees';
import Testimonials from './components/Testimonials';
import OrderModal from './components/OrderModal';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const calcState = useCalculator();

  const handleSelectService = (serviceTitle) => {
    calcState.setSelectedService(serviceTitle);
    setOrderModalOpen(true);
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 pb-24 md:pb-0 ${
      isDarkMode 
        ? 'bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950' 
        : 'bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white'
    }`}>
      
      {/* Top Banner Promo */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-slate-950 px-4 py-2 text-center text-xs font-bold tracking-wide flex justify-center items-center gap-2">
        <Zap size={14} className="animate-bounce" />
        <span>PROMO HARI INI: GRATIS BIAYA TRANSPORTASI TEKNISI UNTUK MINIMAL 2 UNIT AC!</span>
      </div>

      {/* Navbar */}
      <nav className={`sticky top-0 z-40 backdrop-blur-md border-b px-4 md:px-8 py-3.5 flex justify-between items-center max-w-7xl mx-auto transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-950/90 border-slate-800' : 'bg-white/90 border-slate-200'
      }`}>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-slate-950 font-black shadow-lg shadow-emerald-500/20">
            <Wrench size={20} />
          </div>
          <div>
            <span className={`font-extrabold text-lg md:text-xl tracking-tight block leading-none ${
              isDarkMode ? 'text-white' : 'text-slate-900'
            }`}>
              Master<span className="text-emerald-500">Cool</span>
            </span>
            <span className={`text-[10px] font-mono uppercase tracking-wider ${
              isDarkMode ? 'text-slate-400' : 'text-slate-500'
            }`}>Jasa Service AC Profesional</span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-6 text-sm font-medium ${
          isDarkMode ? 'text-slate-300' : 'text-slate-600'
        }`}>
          <a href="#layanan" className="hover:text-emerald-500 transition">Paket & Harga</a>
          <a href="#kalkulator" className="hover:text-emerald-500 transition">Kalkulator Biaya</a>
          <a href="#garansi" className="hover:text-emerald-500 transition">Garansi</a>
          <a href="#testimoni" className="hover:text-emerald-500 transition">Testimoni</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-xl border transition-colors ${
              isDarkMode 
                ? 'bg-slate-900 border-slate-800 text-amber-400 hover:bg-slate-800' 
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
            }`}
            title="Ganti Mode Tampilan"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button 
            onClick={() => openWhatsApp("Halo MasterCool, saya ingin konsultasi masalah AC di rumah.")}
            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-4 py-2 rounded-xl font-bold text-xs md:text-sm transition flex items-center gap-2 shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            <MessageSquare size={16} />
            <span>Chat WA</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
          <div className={`inline-flex items-center gap-2 border px-3.5 py-1.5 rounded-full text-xs font-semibold ${
            isDarkMode 
              ? 'bg-emerald-950/80 border-emerald-800 text-emerald-300' 
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
          }`}>
            <ShieldCheck size={16} className="text-emerald-500" />
            <span>Teknisi Berpengalaman, Jujur & Bergaransi Resmi</span>
          </div>

          <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            AC Tidak Dingin atau Bocor? <br />
            <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
              Teknisi Datang Tepat Waktu!
            </span>
          </h1>

          <p className={`text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
            isDarkMode ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Solusi kilat perawatan dan perbaikan AC rumah, apartemen, atau kantor Anda. Dikerjakan oleh teknisi ahli dengan jaminan garansi kepuasan.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
            <button 
              onClick={() => setOrderModalOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-6 py-4 rounded-2xl font-black text-sm md:text-base transition flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/25 active:scale-95"
            >
              <MessageSquare size={20} />
              <span>PESAN TEKNISI SEKARANG</span>
              <ArrowRight size={18} />
            </button>
            <a 
              href="#kalkulator"
              className={`border px-6 py-4 rounded-2xl font-bold text-sm transition flex items-center justify-center gap-2 ${
                isDarkMode 
                  ? 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-slate-200' 
                  : 'bg-white hover:bg-slate-100 border-slate-300 text-slate-700 shadow-sm'
              }`}
            >
              <Calculator size={18} className="text-emerald-500" />
              <span>Hitung Estimasi Harga</span>
            </a>
          </div>
        </div>

        {/* Live Customer Care Box */}
        <div className="lg:col-span-5">
          <div className={`border rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden transition-colors ${
            isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />
            
            <div className={`flex items-center justify-between pb-4 border-b mb-6 ${
              isDarkMode ? 'border-slate-800' : 'border-slate-100'
            }`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-slate-950">
                  WA
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Live Customer Care</h3>
                  <span className="text-[11px] text-emerald-500 font-mono">Online • Siap Melayani Hari Ini</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs font-sans">
              <div className={`p-3.5 rounded-2xl rounded-tl-none border space-y-1 ${
                isDarkMode 
                  ? 'bg-slate-950 border-slate-800 text-slate-300' 
                  : 'bg-slate-50 border-slate-200 text-slate-600'
              }`}>
                <span className="font-bold text-emerald-500 block">MasterCool Support</span>
                <p>Halo Kak! Ada kendala apa dengan AC di lokasi Anda?</p>
              </div>

              <div className="space-y-2 pt-2">
                <button 
                  onClick={() => openWhatsApp("Halo MasterCool, AC saya tidak dingin / hanya keluar angin. Mohon bantuan teknisi.")}
                  className={`w-full p-3 rounded-xl text-left flex justify-between items-center text-xs transition border ${
                    isDarkMode 
                      ? 'bg-slate-950 hover:bg-slate-800 border-slate-800 hover:border-emerald-500/50 text-slate-200' 
                      : 'bg-slate-50 hover:bg-emerald-50 border-slate-200 hover:border-emerald-300 text-slate-700'
                  }`}
                >
                  <span>❄️ AC Kurang / Tidak Dingin</span>
                  <ChevronRight size={14} className="text-emerald-500" />
                </button>

                <button 
                  onClick={() => openWhatsApp("Halo MasterCool, AC saya bocor / menetes air di dalam ruangan. Mohon bantuan teknisi.")}
                  className={`w-full p-3 rounded-xl text-left flex justify-between items-center text-xs transition border ${
                    isDarkMode 
                      ? 'bg-slate-950 hover:bg-slate-800 border-slate-800 hover:border-emerald-500/50 text-slate-200' 
                      : 'bg-slate-50 hover:bg-emerald-50 border-slate-200 hover:border-emerald-300 text-slate-700'
                  }`}
                >
                  <span>💧 AC Bocor Air / Menetes</span>
                  <ChevronRight size={14} className="text-emerald-500" />
                </button>
              </div>

              <div className="pt-2">
                <button 
                  onClick={() => setOrderModalOpen(true)}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 py-3 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition shadow-md"
                >
                  <Send size={14} /> Isi Formulir Alamat Lengkap
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Component Garansi */}
      <Guarantees isDarkMode={isDarkMode} />

      {/* Component Services Section */}
      <section id="layanan" className="px-4 md:px-8 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className={`text-xs font-bold uppercase tracking-wider text-emerald-500 border px-3 py-1 rounded-full ${
            isDarkMode ? 'bg-emerald-950 border-emerald-900' : 'bg-emerald-50 border-emerald-200'
          }`}>
            Daftar Paket & Harga
          </span>
          <h2 className={`text-3xl md:text-4xl font-extrabold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Pilih Paket Layanan AC</h2>
          <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Sesuaikan dengan kebutuhan perawatan unit AC Anda.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <ServiceCard 
              key={s.id} 
              service={s} 
              isDarkMode={isDarkMode} 
              onSelect={handleSelectService} 
            />
          ))}
        </div>
      </section>

      {/* Component Cost Calculator */}
      <CostCalculator isDarkMode={isDarkMode} calcState={calcState} />

      {/* Component Testimoni */}
      <Testimonials isDarkMode={isDarkMode} />

      {/* FAQ Section */}
      <section className={`px-4 md:px-8 py-16 max-w-4xl mx-auto border-t ${
        isDarkMode ? 'border-slate-800/60' : 'border-slate-200'
      }`}>
        <h2 className={`text-2xl md:text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Pertanyaan Umum (FAQ)</h2>
        
        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <div key={idx} className={`border rounded-xl overflow-hidden ${
              isDarkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <button 
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className={`w-full p-4 text-left font-semibold text-xs md:text-sm flex justify-between items-center ${
                  isDarkMode ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                <span>{faq.q}</span>
                <ChevronRight size={16} className={`text-emerald-500 transition-transform ${activeFaq === idx ? 'rotate-90' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className={`px-4 pb-4 text-xs leading-relaxed border-t pt-2 ${
                  isDarkMode ? 'text-slate-400 border-slate-800/50' : 'text-slate-600 border-slate-100'
                }`}>
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className={`border-t px-4 md:px-8 py-10 text-center text-xs ${
        isDarkMode ? 'bg-slate-950 border-slate-800 text-slate-500' : 'bg-white border-slate-200 text-slate-500'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center text-slate-950 font-bold text-xs">
              M
            </div>
            <span className={`font-bold ${isDarkMode ? 'text-slate-200' : 'text-slate-800'}`}>MasterCool Indonesia</span>
          </div>
          <p>© {new Date().getFullYear()} MasterCool - Layanan Profesional Service AC.</p>
          <div className="flex gap-4 text-slate-400">
            <a href="#" className="hover:text-emerald-500">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-emerald-500">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>

      {/* Order Modal Component */}
      <OrderModal 
        isOpen={orderModalOpen} 
        onClose={() => setOrderModalOpen(false)} 
        isDarkMode={isDarkMode}
        initialService={calcState.selectedService}
      />

    </div>
  );
}
