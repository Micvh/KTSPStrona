import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import zdjeciemainJPG from "./zdjeciemain.jpg";
import zdjeciemainPNG from "./zdjeciemain.png";
import nieruchomosc from "./nieruchomosc.jpg";

export default function KTSPHome() {
  const [currentSlides, setCurrentSlides] = useState([0, 0, 0]);
  const [animatedValues, setAnimatedValues] = useState({
    clients: 0,
    properties: 0,
    years: 0,
    support: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const statsRef = useRef(null);
  
  const featuredProperties = [
    {
      id: 1,
      title: "Przykładowa nieruchomość 1",
      location: "Kalisz, Centrum",
      price: "900,000 zł",
      images: [zdjeciemainJPG, nieruchomosc, zdjeciemainPNG]
    },
    {
      id: 2,
      title: "Dom z ogrodem",
      location: "Poznań, Jeżyce",
      price: "2,500,000 zł",
      images: [nieruchomosc, zdjeciemainJPG, zdjeciemainPNG]
    },
    {
      id: 3,
      title: "Apartament premium",
      location: "Kraków, Stare Miasto",
      price: "3,800,000 zł",
      images: [zdjeciemainPNG, nieruchomosc, zdjeciemainJPG]
    }
  ];



  const nextSlide = (propertyIndex) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      newSlides[propertyIndex] = (newSlides[propertyIndex] + 1) % featuredProperties[propertyIndex].images.length;
      return newSlides;
    });
  };

  const prevSlide = (propertyIndex) => {
    setCurrentSlides(prev => {
      const newSlides = [...prev];
      newSlides[propertyIndex] = (newSlides[propertyIndex] - 1 + featuredProperties[propertyIndex].images.length) % featuredProperties[propertyIndex].images.length;
      return newSlides;
    });
  };

  // Mouse tracking effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation effect for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation when stats section is visible
            animateNumbers();
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateNumbers = () => {
    const finalValues = {
      clients: 500,
      properties: 1000,
      years: 23,
      support: 24
    };

    // Same duration for all animated counters (in milliseconds)
    const duration = 2000; // 2 seconds for all

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;

      setAnimatedValues({
        clients: Math.min(Math.floor((elapsed / duration) * finalValues.clients), finalValues.clients),
        properties: Math.min(Math.floor((elapsed / duration) * finalValues.properties), finalValues.properties),
        years: Math.min(Math.floor((elapsed / duration) * finalValues.years), finalValues.years),
        support: Math.min(Math.floor((elapsed / duration) * finalValues.support), finalValues.support)
      });

      // Continue animation until all counters reach their final values
      if (elapsed < duration) {
        requestAnimationFrame(animate);
      } else {
        // Ensure final values are exact
        setAnimatedValues(finalValues);
      }
    };

    requestAnimationFrame(animate);
  };

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
             <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 py-8 md:py-10 lg:py-12 xl:py-16 min-h-screen flex flex-col justify-center relative overflow-hidden">
               {/* Animated Background Elements */}
               <div 
                 className="absolute inset-0 pointer-events-none"
                 style={{
                   transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
                 }}
               >
                 <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-xl"></div>
                 <div className="absolute top-40 right-32 w-24 h-24 bg-indigo-200/20 rounded-full blur-xl"></div>
                 <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-200/20 rounded-full blur-xl"></div>
                 <div className="absolute bottom-20 right-20 w-28 h-28 bg-cyan-200/20 rounded-full blur-xl"></div>
               </div>
               
               <div 
                 className="text-center mb-24 relative z-10"
                 style={{
                   transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`
                 }}
               >
                 <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
                   Witamy w
                   <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent "> KTSP</span>
                 </h1>
                 <p className="text-lg md:text-2xl text-slate-600 max-w-3xl mx-auto mb-8 animate-slide-up">
                   Profesjonalne biuro nieruchomości w Kaliszu. 
                   Pomagamy znaleźć wymarzone miejsce do życia i inwestowania.
                 </p>
                 <Link
                   to="/oferty"
                   className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 animate-bounce-in"
                 >
                   Zobacz nasze oferty
                 </Link>
               </div>

                 {/* Stats Section */}
                 <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
                   <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0ms' }}>
                     <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2 transition-all duration-300 hover:scale-110">
                       {animatedValues.clients}+
                     </div>
                     <div className="text-sm md:text-base text-slate-600">Zadowolonych klientów</div>
                   </div>
                   <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
                     <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2 transition-all duration-300 hover:scale-110">
                       {animatedValues.properties}+
                     </div>
                     <div className="text-sm md:text-base text-slate-600">Sprzedanych nieruchomości</div>
                   </div>
                   <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                     <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2 transition-all duration-300 hover:scale-110">
                       {animatedValues.years}+
                     </div>
                     <div className="text-sm md:text-base text-slate-600">Lat doświadczenia</div>
                   </div>
                   <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
                     <div className="text-2xl md:text-4xl font-bold text-blue-600 mb-2 transition-all duration-300 hover:scale-110">
                       {animatedValues.support}/7
                     </div>
                     <div className="text-sm md:text-base text-slate-600">Wsparcie klienta</div>
                   </div>
                 </div>

                 {/* Features Grid */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 mt-8 md:mt-12">
                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 group">
                     <div className="text-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🏠</div>
                     <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Sprzedaż i Wynajem</h3>
                     <p className="text-sm md:text-base text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                       Oferujemy sprzedaż oraz wynajem mieszkań, domów i działek na terenie całej Polski.
                     </p>
                   </div>
                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 group">
                     <div className="text-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔑</div>
                     <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Kompleksowa Obsługa</h3>
                     <p className="text-sm md:text-base text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                       Od wyceny nieruchomości po podpisanie umowy - jesteśmy z Tobą na każdym kroku.
                     </p>
                   </div>
                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 group">
                     <div className="text-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
                     <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Zarządzanie Nieruchomościami</h3>
                     <p className="text-sm md:text-base text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  Profesjonalne zarządzanie nieruchomościami – gwarancja bezpieczeństwa i efektywności
                     </p>
                   </div>
                 </div>

                 {/* Featured Properties Grid with Individual Sliders */}
                   <div className="mb-8 md:mb-10 lg:mb-12 xl:mb-16 mt-16 md:mt-20 lg:mt-24 xl:mt-32">
           <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 md:mb-8 text-center">
             Wyróżnione oferty
           </h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProperties.map((property, propertyIndex) => (
              <div key={property.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                {/* Image Slider Container */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentSlides[propertyIndex] * 100}%)` }}
                  >
                    {property.images.map((image, imageIndex) => (
                      <div key={imageIndex} className="w-full flex-shrink-0">
                        <img
                          src={image}
                          alt={`${property.title} - zdjęcie ${imageIndex + 1}`}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation Buttons for this property */}
                  <button
                    onClick={() => prevSlide(propertyIndex)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => nextSlide(propertyIndex)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Dots Indicator for this property */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {property.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={() => {
                          setCurrentSlides(prev => {
                            const newSlides = [...prev];
                            newSlides[propertyIndex] = imageIndex;
                            return newSlides;
                          });
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          imageIndex === currentSlides[propertyIndex] 
                            ? 'bg-white' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Property Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {property.title}
                  </h3>
                  <p className="text-slate-600 mb-3">{property.location}</p>
                  <div className="text-2xl font-bold text-slate-800 mb-4">{property.price}</div>
                  <Link
                    to="/oferty"
                    className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
                  >
                    Zobacz szczegóły
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

                 {/* Contact Section */}
                 <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-white/50 shadow-lg mt-8 md:mt-12 lg:mt-16">
                   <div className="text-center">
                     <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Skontaktuj się z nami</h2>
                     <p className="text-slate-600 mb-8">
                       Jesteśmy tutaj, aby pomóc Ci znaleźć wymarzone miejsce
                     </p>
                     
                                           <div className="space-y-6 md:grid md:grid-cols-3 md:gap-8 md:items-start">
                        {/* Telefon */}
                        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-start md:ml-12 lg:ml-24 h-full md:mt-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                          <div className="text-center md:text-left">
                            <div className="font-semibold text-slate-800 mb-1">Telefon</div>
                            <a href="tel:+48502187414" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">+48 502 187 414</a>
                          </div>
                        </div>
                        
                        {/* Email */}
                        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-start md:ml-12 lg:ml-24 h-full">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <div className="text-center md:text-left">
                            <div className="font-semibold text-slate-800 mb-1">Email</div>
                            <a href="mailto:michal.czarnek@lokale.pl" className="text-slate-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer">michal.czarnek@lokale.pl</a>
                          </div>
                        </div>
                        
                        {/* Adres */}
                        <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-start md:ml-12 lg:ml-24 h-full">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="text-center md:text-left">
                            <div className="font-semibold text-slate-800 mb-1">Adres</div>
                            <div className="text-slate-600">ul. Dobrzecka 95, Kalisz</div>
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
