import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function KTSPLoans() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    clients: 0,
    loans: 0,
    years: 0,
    satisfaction: 0
  });

  // Mouse tracking effect for parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger visibility animation after component mounts
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation effect for stats
  useEffect(() => {
    const animateNumbers = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;
      
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedValues({
          clients: Math.floor(150 * progress),
          loans: Math.floor(89 * progress),
          years: Math.floor(8 * progress),
          satisfaction: Math.floor(98 * progress)
        });
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);
    };

    // Start animation when component mounts
    const timer = setTimeout(animateNumbers, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const loanOffers = [
    {
      id: 1,
      title: "Pożyczka hipoteczna",
      description: "Pożyczka pod zastaw nieruchomości z atrakcyjnymi warunkami i niskim oprocentowaniem.",
      amount: "50 000 - 500 000 zł",
      rate: "od 3.5%",
      term: "do 25 lat",
      features: ["Bez prowizji", "Możliwość wcześniejszej spłaty", "Elastyczne raty", "Szybka decyzja"],
      icon: "🏠"
    },
    {
      id: 2,
      title: "Pożyczka gotówkowa",
      description: "Szybka pożyczka gotówkowa bez zbędnych formalności i skomplikowanych procedur.",
      amount: "5 000 - 100 000 zł",
      rate: "od 5.2%",
      term: "do 10 lat",
      features: ["Decyzja w 24h", "Bez zaświadczeń o dochodach", "Możliwość refinansowania", "Bez ukrytych kosztów"],
      icon: "💳"
    },
    {
      id: 3,
      title: "Pożyczka konsolidacyjna",
      description: "Połącz wszystkie swoje zobowiązania w jedną, niższą ratę miesięczną.",
      amount: "10 000 - 300 000 zł",
      rate: "od 4.1%",
      term: "do 15 lat",
      features: ["Konsolidacja wszystkich kredytów", "Niższa rata miesięczna", "Jeden termin płatności", "Oszczędność na odsetkach"],
      icon: "🔗"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <div className="w-full bg-white/80 backdrop-blur-md border-b border-slate-200/50 sticky top-0 z-50">
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 py-4 md:py-5 lg:py-6 xl:py-8">
          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center space-y-4">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
              KTSP
            </Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
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
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 cursor-pointer">
              KTSP
            </Link>
            <div className="flex space-x-8">
              <Link to="/" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
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
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 py-8 md:py-10 lg:py-12 xl:py-16 relative overflow-hidden">
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
            <h1 className="text-6xl font-bold text-slate-800 mb-6 animate-fade-in">
              Pożyczki
              <span className="bg-gradient-to-r from-notusPurple via-purple-500 to-purple-300 bg-clip-text text-transparent "> Notus</span>
            </h1>
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto mb-8 animate-slide-up">
              Współpracujemy z firmą Notus, aby oferować naszym klientom najlepsze rozwiązania finansowe. 
              Znajdź idealną pożyczkę dostosowaną do Twoich potrzeb.
            </p>
            <div className="animate-bounce-in">
              <Link
                to="/kontakt"
                className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Skontaktuj się z doradcą
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '0ms' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300 hover:scale-110">
                {animatedValues.clients}+
              </div>
              <div className="text-slate-600">Zadowolonych klientów</div>
            </div>
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300 hover:scale-110">
                {animatedValues.loans}+
              </div>
              <div className="text-slate-600">Udzielonych pożyczek</div>
            </div>
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300 hover:scale-110">
                {animatedValues.years}+
              </div>
              <div className="text-slate-600">Lat współpracy z Notus</div>
            </div>
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              <div className="text-4xl font-bold text-blue-600 mb-2 transition-all duration-300 hover:scale-110">
                {animatedValues.satisfaction}%
              </div>
              <div className="text-slate-600">Satysfakcji klientów</div>
            </div>
          </div>
        </div>

        {/* Loan Offers Section */}
        <div className="px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
            Nasze oferty pożyczek
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {loanOffers.map((offer, index) => (
              <div 
                key={offer.id}
                className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/90 group transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <div className="text-center text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {offer.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {offer.title}
                </h3>
                <p className="text-slate-600 mb-6 text-center">
                  {offer.description}
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Kwota:</span>
                    <span className="font-semibold text-slate-800">{offer.amount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Oprocentowanie:</span>
                    <span className="font-semibold text-blue-600">{offer.rate}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Okres:</span>
                    <span className="font-semibold text-slate-800">{offer.term}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {offer.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <span className="text-blue-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Więcej informacji
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Person Responsible Section */}
        <div className="px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 mb-16">
          <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1400ms' }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-800 mb-6 group-hover:text-blue-600 transition-colors duration-300">
                  Twój doradca finansowy
                </h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-slate-800 mb-2">Anna Kowalska</h3>
                  <p className="text-blue-600 font-medium">Specjalista ds. pożyczek</p>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Z ponad 8-letnim doświadczeniem w branży finansowej, specjalizuję się w doradztwie kredytowym 
                  i pomagam klientom znaleźć najlepsze rozwiązania finansowe. Współpracuję z firmą Notus, 
                  aby zapewnić najwyższą jakość usług i najlepsze warunki dla naszych klientów.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">🎓</span>
                    <span className="text-slate-600">Certyfikowany doradca finansowy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">💼</span>
                    <span className="text-slate-600">8+ lat doświadczenia w branży</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-500 mr-3">🤝</span>
                    <span className="text-slate-600">Ponad 200 zadowolonych klientów</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-white text-8xl mb-6 group-hover:scale-105 transition-transform duration-300">
                  👩‍💼
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">Dedykowany kontakt</h4>
                    <p className="text-slate-600 text-sm">
                      Anna Kowalska jest Twoim osobistym doradcą ds. pożyczek. 
                      Skontaktuj się bezpośrednio, aby omówić swoje potrzeby finansowe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
            Skontaktuj się z nami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1600ms' }}>
              <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center group-hover:text-blue-600 transition-colors duration-300">
                Kontakt - Pożyczki
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-blue-500 mr-3 text-xl">👩‍💼</span>
                  <div>
                    <p className="font-semibold text-slate-800">Anna Kowalska</p>
                    <p className="text-slate-600">Specjalista ds. pożyczek</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-3 text-xl">📞</span>
                  <div>
                    <p className="font-semibold text-slate-800">+48 123 456 789</p>
                    <p className="text-slate-600">Dedykowana linia pożyczkowa</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-3 text-xl">✉️</span>
                  <div>
                    <p className="font-semibold text-slate-800">pozyczki@ktsp.pl</p>
                    <p className="text-slate-600">Email ds. pożyczek</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-500 mr-3 text-xl">🕒</span>
                  <div>
                    <p className="font-semibold text-slate-800">Pon-Pt: 8:00-18:00</p>
                    <p className="text-slate-600">Sob: 9:00-14:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '1800ms' }}>
              <h3 className="text-2xl font-bold mb-6 text-center">
                Współpraca z Notus
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-white/80 mr-3 text-xl">🏢</span>
                  <div>
                    <p className="font-semibold">Firma Notus</p>
                    <p className="text-white/80">Partner finansowy KTSP</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-white/80 mr-3 text-xl">⭐</span>
                  <div>
                    <p className="font-semibold">Sprawdzone rozwiązania</p>
                    <p className="text-white/80">8+ lat współpracy</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-white/80 mr-3 text-xl">🎯</span>
                  <div>
                    <p className="font-semibold">Indywidualne podejście</p>
                    <p className="text-white/80">Dostosowane do potrzeb</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-white/80 mr-3 text-xl">⚡</span>
                  <div>
                    <p className="font-semibold">Szybka decyzja</p>
                    <p className="text-white/80">Do 24 godzin</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Sprawdź ofertę Notus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
              <ul className="space-y-2 text-slate-300">
                <li>📞 +48 123 456 789</li>
                <li>✉️ biuro@ktsp.pl</li>
                <li>📍 Kalisz, ul. Przykładowa 123</li>
                <li>🕒 Pon-Pt: 8:00-18:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 KTSP. Wszystkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 