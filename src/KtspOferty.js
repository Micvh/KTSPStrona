import React, { useState } from "react";
import { Link } from "react-router-dom";
import zdjeciemainJPG from "./zdjeciemain.jpg";
import zdjeciemainPNG from "./zdjeciemain.png";
import nieruchomosc from "./nieruchomosc.jpg";
import "./ktspO.css";

const images = [
  { src: zdjeciemainJPG, alt: "Nieruchomość 1" },
  { src: zdjeciemainPNG, alt: "Nieruchomość 2" },
  { src: nieruchomosc, alt: "Nieruchomość 3" },
];

const features = [
  { icon: "🏠", label: "Powierzchnia", value: "80 m²" },
  { icon: "🛏️", label: "Pokoje", value: "3 sypialnie" },
  { icon: "🚗", label: "Parking", value: "2 miejsca" },
  { icon: "🚗", label: "Parking", value: "2 miejsca" },
  { icon: "🚗", label: "Parking", value: "2 miejsca" },
  { icon: "🚗", label: "Parking", value: "2 miejsca" },
];

export default function KtspOferty() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevImage = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 py-4 md:py-5 lg:py-6 xl:py-8">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            <Link to="/main" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
              KTSP
            </Link>
            <div className="flex space-x-6">
              <Link to="/main" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                STRONA GŁÓWNA
              </Link>
              <Link to="/oferty" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                OFERTY
              </Link>
              <Link to="/o-nas" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                O NAS
              </Link>
              <Link to="/kontakt" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                KONTAKT
              </Link>
              <Link to="/pozyczki" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                POŻYCZKI
              </Link>
            </div>
          </div>
          
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center">
            <Link to="/main" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
              KTSP
            </Link>
            <div className="flex space-x-8">
              <Link to="/main" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                STRONA GŁÓWNA
              </Link>
              <Link to="/oferty" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                OFERTY
              </Link>
              <Link to="/o-nas" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                O NAS
              </Link>
              <Link to="/kontakt" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                KONTAKT
              </Link>
              <Link to="/pozyczki" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                POŻYCZKI
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
                  <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="w-full flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            {/* Hero Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-full"></div>
                <h1 className="text-4xl font-bold text-slate-800">
                  Przykładowa nieruchomość
                </h1>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-lg">Kalisz, Centrum</span>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="relative group">
              <div className="relative w-full h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={images[current].src}
                  alt={images[current].alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M15 19l-7-7 7-7" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
                >
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                    <path d="M9 5l7 7-7 7" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {current + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <div className="text-sm text-slate-600">{feature.label}</div>
                  <div className="font-semibold text-slate-800">{feature.value}</div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                OPIS NIERUCHOMOŚCI
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Eleganckie mieszkanie w prestiżowej lokalizacji w centrum Kalisza. Nieruchomość oferuje przestronne wnętrza, 
                wysokiej jakości wykończenie oraz doskonałą lokalizację w pobliżu wszystkich udogodnień miejskich. 
                Mieszkanie składa się z 3 sypialni, 2 łazienek, przestronnego salonu oraz w pełni wyposażonej kuchni. 
                Dodatkowo dostępny jest balkon o powierzchni 15 m² z widokiem na park miejski.
              </p>
            </div>

            {/* Map */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 shadow-lg">
              <div className="p-4 border-b border-slate-200">
                <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  LOKALIZACJA
                </h3>
              </div>
              <div style={{ height: "350px" }}>
                <iframe
                  title="Google Maps"
                  width="100%"
                  style={{ border: 0, width: "100%", height: "100%" }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.209964073013!2d21.01222831580019!3d52.22967597975708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6699c8c6b1%3A0x40ce6fcfae9b1b7!2sWarszawa!5e0!3m2!1spl!2spl!4v1683123456789!5m2!1spl!2spl"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:w-96 space-y-6">
            {/* Price Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl">
              <div className="text-sm text-blue-100 mb-2">CENA</div>
              <div className="text-3xl font-bold mb-2">900,000 zł</div>
              <div className="text-blue-100 text-sm">4,500 zł/m²</div>
            </div>

            {/* Details Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-green-500 rounded-full"></div>
                SZCZEGÓŁY
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Typ nieruchomości</span>
                  <span className="font-semibold text-slate-800">Mieszkanie</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Powierzchnia</span>
                  <span className="font-semibold text-slate-800">80 m²</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Liczba pokoi</span>
                  <span className="font-semibold text-slate-800">4</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-slate-100">
                  <span className="text-slate-600">Piętro</span>
                  <span className="font-semibold text-slate-800">3/8</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-slate-600">Rok budowy</span>
                  <span className="font-semibold text-slate-800">2020</span>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-lg">
              <h2 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
                KONTAKT
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold">
                    MC
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Michał Czarnek</div>
                    <div className="text-sm text-slate-600">Agent nieruchomości</div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-700">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>+48 502 187 414</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700">
                    <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>michal.czarnek@lokale.pl</span>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-200">
                  <div className="text-xs text-slate-500">Numer licencji: 8918</div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  KTSP
                </span>
              </h3>
              <p className="text-slate-300">
                Profesjonalne biuro nieruchomości w Kaliszu.
                Oferujemy kompleksowe usługi w zakresie sprzedaży, wynajmu i doradztwa finansowego.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Usługi</h4>
              <ul className="space-y-2 text-slate-300">
                <li>• Sprzedaż nieruchomości</li>
                <li>• Wynajem nieruchomości</li>
                <li>• Doradztwo inwestycyjne</li>
                <li>• Pożyczki (współpraca z Notus)</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt nieruchomości</h4>
              <ul className="space-y-2 text-slate-300">
                <li>📞 +48 502 187 414</li>
                <li>✉️ michal.czarnek@lokale.pl</li>
                <li>📍 Kalisz, ul. Dobrzecka 95</li>
                <li>🕒 Pon-Pt: 8:00-16:00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt pożyczki</h4>
              <ul className="space-y-2 text-slate-300">
              <li>📞 +48 502 187 414</li>
                 <li>✉️ halina.bolgudarna@lokale.pl</li>
                 <li>📍 Kalisz, ul. Dobrzecka 95</li>
                 <li>🕒 Pon-Pt: 8:00-16:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2025 KTSP. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}