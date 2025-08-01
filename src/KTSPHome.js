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

  // Animation effect for stats
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation when stats section is visible
            animateNumbers();
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
             <div className="flex gap-4 text-sm font-medium text-slate-700">
               <Link to="/main" className="text-blue-600 relative group">
                 MAIN
                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
               </Link>
               <Link to="/oferty" className="hover:text-blue-600 transition-colors duration-300 relative group">
                 OFERTY
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
               </Link>
               <Link to="/o-nas" className="hover:text-blue-600 transition-colors duration-300 relative group">
                 O NAS
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
               </Link>
               <Link to="/kontakt" className="hover:text-blue-600 transition-colors duration-300 relative group">
                 KONTAKT
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
               </Link>
             </div>
           </div>
           
           {/* Desktop Layout */}
           <div className="hidden md:flex justify-between items-center relative">
             <div className="flex gap-8 text-base font-medium text-slate-700">
               <Link to="/main" className="text-blue-600 relative group">
                 MAIN
                 <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
               </Link>
               <Link to="/oferty" className="hover:text-blue-600 transition-colors duration-300 relative group">
                 OFERTY
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
               </Link>
               <Link to="/o-nas" className="hover:text-blue-600 transition-colors duration-300 relative group">
                 O NAS
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
               </Link>
               <Link to="/kontakt" className="hover:text-blue-600 transition-colors duration-300 relative group">
                 KONTAKT
                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
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
                                                                                                                               <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 py-8 md:py-10 lg:py-12 xl:py-16 min-h-screen flex flex-col justify-center">
        <div className="text-center mb-24">
          <h1 className="text-6xl font-bold text-slate-800 mb-6">
            Witamy w
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> KTSP</span>
          </h1>
          <p className="text-2xl text-slate-600 max-w-3xl mx-auto mb-8">
            Profesjonalne biuro nieruchomości w Kaliszu. 
            Pomagamy znaleźć wymarzone miejsce do życia i inwestowania.
          </p>
          <Link
            to="/oferty"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Zobacz nasze oferty
          </Link>
        </div>

                 {/* Stats Section */}
         <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300">
              {animatedValues.clients}+
            </div>
            <div className="text-slate-600">Zadowolonych klientów</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300">
              {animatedValues.properties}+
            </div>
            <div className="text-slate-600">Sprzedanych nieruchomości</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300">
              {animatedValues.years}+
            </div>
            <div className="text-slate-600">Lat doświadczenia</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300">
              {animatedValues.support}/7
            </div>
            <div className="text-slate-600">Wsparcie klienta</div>
          </div>
        </div>

                 {/* Features Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12 mt-8 md:mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className=" text-center text-4xl mb-4">🏠</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Sprzedaż i Wynajem</h3>
            <p className="text-slate-600">
              Oferujemy sprzedaż oraz wynajem mieszkań, domów i działek na terenie całej Polski.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className=" text-center text-4xl mb-4">🔑</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Kompleksowa Obsługa</h3>
            <p className="text-slate-600">
              Od wyceny nieruchomości po podpisanie umowy - jesteśmy z Tobą na każdym kroku.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className=" text-center text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold text-slate-800 mb-3">Doradztwo Inwestycyjne</h3>
            <p className="text-slate-600">
              Wsparcie w zakupie nieruchomości inwestycyjnych i zarządzaniu majątkiem.
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
                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-6 lg:p-8 xl:p-10 border border-white/50 shadow-lg mt-8 md:mt-10 lg:mt-12 xl:mt-16 pb-10 md:pb-12 lg:pb-14 xl:pb-16" >
           <div className="text-center">
             <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Skontaktuj się z nami</h2>
             <p className="text-slate-600 mb-6">
               Jesteśmy tutaj, aby pomóc Ci znaleźć wymarzone miejsce
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800">Telefon</div>
                  <div className="text-slate-600">+48 502 187 414</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800">Email</div>
                  <div className="text-slate-600">michal.czarnek@lokale.pl</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-slate-800">Adres</div>
                  <div className="text-slate-600">ul. Dobrzecka 95, Kalisz</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
