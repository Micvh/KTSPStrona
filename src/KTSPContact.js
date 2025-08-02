import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function KTSPContact() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger visibility animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
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
            <div className="flex space-x-2 sm:space-x-2">
              <Link to="/main" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-300">
                STRONA GŁÓWNA
              </Link>
              <Link to="/oferty" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-300">
                OFERTY
              </Link>
              <Link to="/o-nas" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-300">
                O NAS
              </Link>
              <Link to="/kontakt" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-300">
                KONTAKT
              </Link>
              <Link to="/pozyczki" className="text-xs sm:text-sm text-slate-600 hover:text-blue-600 transition-colors duration-300">
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

      {/* Hero Section */}
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-40 py-8 md:py-10 lg:py-12 xl:py-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)`
          }}
        >
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200/10 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-32 h-32 bg-indigo-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-1/4 w-48 h-48 bg-purple-200/10 rounded-full blur-3xl"></div>
        </div>
        
        <div 
          className="text-center mb-16 relative z-10"
          style={{
            transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
          }}
        >
          <h1 className={`text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Poznaj nas bliżej
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent "> i skontaktuj się</span>
          </h1>
          <p className={`text-lg md:text-xl text-slate-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Dowiedz się więcej o naszym biurze, sprawdź dane kontaktowe 
            i znajdź odpowiedzi na najczęściej zadawane pytania.
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-6xl mx-auto space-y-8 mb-16">
          {/* Top Row - Office Info and Opening Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Info */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">Biuro KTSP</h3>
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
                    <a href="tel:+48502187414" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">+48 502 187 414</a>
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
                      <a href="mailto:andrzej.dominiak@lokale.pl" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer block">andrzej.dominiak@lokale.pl</a>
                      <a href="mailto:michal.czarnek@lokale.pl" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer block">michal.czarnek@lokale.pl</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">Godziny otwarcia</h3>
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
            <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-10 text-white text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <h3 className="text-2xl font-bold mb-6">Pilne sprawy</h3>
              <p className="text-blue-100 mb-6 text-lg">
                Potrzebujesz natychmiastowej pomocy? Zadzwoń do nas o każdej porze.
              </p>
              <a href="tel:+48502187414" className="text-3xl font-bold hover:text-blue-200 transition-colors duration-300 cursor-pointer">+48 502 187 414</a>
            </div>

            {/* Map Section */}
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
              <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">Znajdź nas</h2>
              <div className="relative h-80 rounded-xl overflow-hidden">
                <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6593.034250457915!2d18.061844353850415!3d51.75868259659627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471acf601419d1ab%3A0x46e8b0babd56abcf!2sKTSP%20Sp.%20z%20o.o.%20Biuro%20nieruchomo%C5%9Bci%2C%20Biura%20i%20Magazyny%20na%20wynajem!5e0!3m2!1spl!2spl!4v1754094606482!5m2!1spl!2spl"
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
                <li><a href="tel:+48502187414" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">📞 +48 502 187 414</a></li>
                <li><a href="mailto:michal.czarnek@lokale.pl" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">✉️ michal.czarnek@lokale.pl</a></li>
                <li>📍 Kalisz, ul. Dobrzecka 95</li>
                <li>🕒 Pon-Pt: 8:00-16:00</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Kontakt pożyczki</h4>
              <ul className="space-y-2 text-slate-300">
                <li><a href="tel:+48502187414" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">📞 +48 502 187 414</a></li>
                <li><a href="mailto:halina.bolgudarna@lokale.pl" className="hover:text-blue-400 transition-colors duration-300 cursor-pointer">✉️ halina.bolgudarna@lokale.pl</a></li>
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