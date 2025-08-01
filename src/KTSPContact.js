import React from "react";
import { Link } from "react-router-dom";

export default function KTSPContact() {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
                      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-40 py-4 md:py-5 lg:py-6 xl:py-8">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            <Link to="/main" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
              KTSP
            </Link>
            <div className="flex gap-4 text-sm font-medium text-slate-700">
              <Link to="/main" className="hover:text-blue-600 transition-colors duration-300 relative group">
                MAIN
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/oferty" className="hover:text-blue-600 transition-colors duration-300 relative group">
                OFERTY
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/o-nas" className="hover:text-blue-600 transition-colors duration-300 relative group">
                O NAS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/kontakt" className="text-blue-600 relative group">
                KONTAKT
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              </Link>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center relative">
            <div className="flex gap-8 text-base font-medium text-slate-700">
              <Link to="/main" className="hover:text-blue-600 transition-colors duration-300 relative group">
                MAIN
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/oferty" className="hover:text-blue-600 transition-colors duration-300 relative group">
                OFERTY
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/o-nas" className="hover:text-blue-600 transition-colors duration-300 relative group">
                O NAS
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/kontakt" className="text-blue-600 relative group">
                KONTAKT
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
              </Link>
            </div>
            <Link to="/main" className="absolute left-1/2 transform -translate-x-1/2 text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
              KTSP
            </Link>
            <div className="w-24" />
          </div>
        </div>
      </div>

      {/* Hero Section */}
                  <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-40 py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-slate-800 mb-6">
            Poznaj nas bliżej
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> i skontaktuj się</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Dowiedz się więcej o naszym biurze, sprawdź dane kontaktowe 
            i znajdź odpowiedzi na najczęściej zadawane pytania.
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-6xl mx-auto space-y-8 mb-16">
          {/* Top Row - Office Info and Opening Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Info */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Biuro KTSP</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 mb-1">Adres</div>
                    <div className="text-slate-600">ul. Dobrzecka 95, 62-800 Kalisz</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 mb-1">Telefon</div>
                    <div className="text-slate-600">+48 502 187 414</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-5">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800 mb-2">Email</div>
                    <div className="space-y-1">
                      <div className="text-slate-600">andrzej.dominiak@lokale.pl</div>
                      <div className="text-slate-600">michal.czarnek@lokale.pl</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Godziny otwarcia</h3>
                             <div className="space-y-3">
                 <div className="flex justify-between items-center py-2 border-b border-slate-200">
                   <span className="text-slate-600">Poniedziałek - Piątek</span>
                   <span className="font-semibold text-slate-800">8:00 - 16:00</span>
                 </div>
                 <div className="flex justify-between items-center py-2 border-b border-slate-200">
                   <span className="text-slate-600">Sobota</span>
                   <span className="font-semibold text-slate-800">Zamknięte</span>
                 </div>
                 <div className="flex justify-between items-center py-2">
                   <span className="text-slate-600">Niedziela</span>
                   <span className="font-semibold text-slate-800">Zamknięte</span>
                 </div>
               </div>
            </div>
          </div>

          {/* Bottom Row - Emergency Contact and Map */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-white text-center">
              <h3 className="text-2xl font-bold mb-6">Pilne sprawy</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Potrzebujesz natychmiastowej pomocy? Zadzwoń do nas o każdej porze.
              </p>
              <div className="text-3xl font-bold">+48 502 187 414</div>
            </div>

            {/* Map Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Znajdź nas</h2>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.5!2d18.0911!3d51.7619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a34b0b0b0b0b0%3A0xb0b0b0b0b0b0b0b0!2sKTSP!5e0!3m2!1spl!2spl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="KTSP Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 