import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function KTSPAbout() {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    years: 0,
    clients: 0,
    properties: 0,
    support: 0,
    foundedYear: 0
  });
  const statsRef = useRef(null);

  const employees = {
    michal: {
      name: "Michał Czarnek",
      position: "Prezes",
      phone: "+48 502 187 414",
      email: "michal.czarnek@lokale.pl",
      experience: "20 lat doświadczenia w branży nieruchomości. Specjalista od rynku mieszkaniowego i komercyjnego."
    },
    andrzej: {
      name: "Andrzej Dominiak",
      position: "Dyrektor Sprzedaży",
      phone: "+48 502 187 414",
      email: "andrzej.dominiak@lokale.pl",
      experience: "12 lat doświadczenia. Ekspert w zakresie wyceny nieruchomości i negocjacji."
    }
  };

  const openModal = (employeeKey) => {
    setSelectedEmployee(employees[employeeKey]);
  };

  const closeModal = () => {
    setSelectedEmployee(null);
  };

  // Mouse tracking effect for parallax
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
      years: 23,
      clients: 500,
      properties: 1000,
      support: 24,
      foundedYear: 2002
    };

    // Same duration for all animated counters (in milliseconds)
    const duration = 2000; // 2 seconds for all

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;

      setAnimatedValues({
        years: Math.min(Math.floor((elapsed / duration) * finalValues.years), finalValues.years),
        clients: Math.min(Math.floor((elapsed / duration) * finalValues.clients), finalValues.clients),
        properties: Math.min(Math.floor((elapsed / duration) * finalValues.properties), finalValues.properties),
        support: Math.min(Math.floor((elapsed / duration) * finalValues.support), finalValues.support),
        foundedYear: finalValues.foundedYear // No animation - stays at 2002
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

      {/* Hero Section */}
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 py-8 md:py-10 lg:py-12 xl:py-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`
          }}
        >
          <div className="absolute top-20 left-20 w-36 h-36 bg-blue-200/15 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-28 h-28 bg-indigo-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-1/4 w-44 h-44 bg-purple-200/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-200/15 rounded-full blur-3xl"></div>
        </div>
        
        <div 
          className="text-center mb-20 relative z-10"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`
          }}
        >
          <h1 className={`text-6xl font-bold text-slate-800 mb-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Poznaj naszą
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent "> historię</span>
          </h1>
          <p className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Od ponad 23 lat pomagamy mieszkańcom Kalisza i okolic znaleźć wymarzone nieruchomości. 
            Nasze doświadczenie, uczciwość i profesjonalizm to gwarancja satysfakcji naszych klientów.
          </p>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300">
              {animatedValues.years}+
            </div>
            <div className="text-slate-600">Lat doświadczenia</div>
          </div>
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
              {animatedValues.support}/7
            </div>
            <div className="text-slate-600">Wsparcie klienta</div>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-white/50 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Nasza historia</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  KTSP powstało w 2002 roku z pasji do nieruchomości i chęci pomagania ludziom w realizacji ich marzeń o własnym domu. 
                  Założyciel firmy, doświadczony pośrednik nieruchomości, postanowił stworzyć biuro, które będzie wyróżniać się 
                  uczciwością, profesjonalizmem i indywidualnym podejściem do każdego klienta.
                </p>
                <p>
                  Przez lata rozwinęliśmy się z małego biura w centrum Kalisza w uznaną firmę, która obsługuje cały region. 
                  Nasz zespół składa się z doświadczonych specjalistów, którzy znają lokalny rynek jak własną kieszeń.
                </p>
                <p>
                  Dziś jesteśmy dumni z tego, że pomogliśmy setkom rodzin znaleźć wymarzone miejsce do życia, 
                  a nasza reputacja jako godnego zaufania partnera w transakcjach nieruchomościowych jest naszym największym sukcesem.
                </p>
              </div>
            </div>
                         <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-8">
               <div className="text-center">
                 <div className="text-6xl font-bold text-blue-600 mb-4 transition-all duration-300">
                   {animatedValues.foundedYear}
                 </div>
                 <div className="text-xl font-semibold text-slate-800 mb-2">Rok założenia</div>
                 <div className="text-slate-600">Początek naszej przygody z nieruchomościami</div>
               </div>
             </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Nasze wartości</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Uczciwość</h3>
              <p className="text-slate-600">
                Każda transakcja oparta jest na pełnej transparentności i uczciwości. 
                Zawsze mówimy prawdę o stanie nieruchomości i cenach rynkowych.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Profesjonalizm</h3>
              <p className="text-slate-600">
                Nasz zespół składa się z wykwalifikowanych specjalistów z wieloletnim doświadczeniem. 
                Zapewniamy najwyższy standard obsługi klienta.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Indywidualne podejście</h3>
              <p className="text-slate-600">
                Każdy klient jest dla nas wyjątkowy. Słuchamy, rozumiemy potrzeby i dopasowujemy 
                oferty do indywidualnych preferencji i możliwości finansowych.
              </p>
            </div>
          </div>
        </div>

                 {/* Team Section */}
         <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-white/50 shadow-lg mb-16">
           <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Nasz zespół</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                           <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">MC</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Michał Czarnek</h3>
                <button 
                  onClick={() => openModal('michal')}
                  className="text-blue-600 mb-3 hover:text-blue-800 transition-colors duration-300 cursor-pointer underline"
                >
                  Prezes
                </button>
                <p className="text-slate-600 text-sm">
                  20 lat doświadczenia w branży nieruchomości. Specjalista od rynku mieszkaniowego i komercyjnego.
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">AD</span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Andrzej Dominiak</h3>
                <button 
                  onClick={() => openModal('andrzej')}
                  className="text-blue-600 mb-3 hover:text-blue-800 transition-colors duration-300 cursor-pointer underline"
                >
                  Dyrektor Sprzedaży
                </button>
                <p className="text-slate-600 text-sm">
                  12 lat doświadczenia. Ekspert w zakresie wyceny nieruchomości i negocjacji.
                </p>
              </div>
           </div>
         </div>

        {/* License */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-white/50 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Jesteśmy licencjonowani</h2>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-12 text-white text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold mb-6">Licencja PFRN </h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Posiadamy oficjalną licencję Polskiej Federacji Rynku Nieruchomości (PFRN), 
              która potwierdza nasze kwalifikacje i uprawnienia do prowadzenia działalności 
              pośrednika nieruchomości. To gwarancja profesjonalizmu i zgodności z najwyższymi 
              standardami branżowymi.
            </p>
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="text-2xl font-bold text-blue-100">Gwarancja jakości</div>
              <div className="text-blue-200 mt-2">Certyfikowany pośrednik nieruchomości o numerze licencji 8918</div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-white/50 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Co mówią o nas klienci</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">
                "Profesjonalne podejście, uczciwość i terminowość. Polecam każdemu, kto szuka 
                godnego zaufania pośrednika nieruchomości."
              </p>
              <div className="font-semibold text-slate-800">Maria Kowalczyk</div>
              <div className="text-sm text-slate-500">Klientka od 2019 roku</div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">
                "Dzięki KTSP sprzedałem mieszkanie w ciągu tygodnia po cenie wyższej niż oczekiwałem. 
                Świetna komunikacja i pełne zaangażowanie zespołu."
              </p>
              <div className="font-semibold text-slate-800">Tomasz Nowak</div>
              <div className="text-sm text-slate-500">Klient od 2021 roku</div>
            </div>
                     </div>
         </div>
       </div>

       {/* Contact Modal */}
       {selectedEmployee && (
         <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
           <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
             <div className="text-center mb-6">
               <h3 className="text-2xl font-bold text-slate-800 mb-2">{selectedEmployee.name}</h3>
               <p className="text-blue-600 font-semibold">{selectedEmployee.position}</p>
             </div>
             
             <div className="space-y-4">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                   <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                   </svg>
                 </div>
                 <div>
                   <div className="font-semibold text-slate-800">Telefon</div>
                   <div className="text-slate-600">{selectedEmployee.phone}</div>
                 </div>
               </div>
               
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                   <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                   </svg>
                 </div>
                 <div>
                   <div className="font-semibold text-slate-800">Email</div>
                   <div className="text-slate-600">{selectedEmployee.email}</div>
                 </div>
               </div>
               
               <div className="pt-4 border-t border-slate-200">
                 <div className="font-semibold text-slate-800 mb-2">Doświadczenie</div>
                 <div className="text-slate-600 text-sm">{selectedEmployee.experience}</div>
               </div>
             </div>
             
             <div className="mt-8 flex justify-end">
               <button 
                 onClick={closeModal}
                 className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-colors duration-300"
               >
                 Zamknij
               </button>
             </div>
           </div>
         </div>
       )}

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