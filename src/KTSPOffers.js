import React, { useState } from "react";
import { Link } from "react-router-dom";
import zdjeciemainJPG from "./zdjeciemain.jpg";
import zdjeciemainPNG from "./zdjeciemain.png";
import nieruchomosc from "./nieruchomosc.jpg";

const properties = [
  {
    id: 1,
    title: "Przykładowa nieruchomość 1",
    location: "Kalisz, Centrum",
    price: "900,000 zł",
    area: "80 m²",
    rooms: "4",
    type: "Mieszkanie",
    images: [zdjeciemainJPG, nieruchomosc, zdjeciemainPNG],
    featured: true,
    pricePerM2: 11250,
    floor: "2",
    buildingType: "Blok",
    yearBuilt: 2010,
    condition: "Gotowe do zamieszkania",
    transactionType: "Sprzedaż"
  },
  {
    id: 2,
    title: "Nowoczesne mieszkanie",
    location: "Warszawa, Mokotów",
    price: "1,200,000 zł",
    area: "65 m²",
    rooms: "3",
    type: "Mieszkanie",
    images: [zdjeciemainPNG, zdjeciemainJPG, nieruchomosc],
    featured: false,
    pricePerM2: 18462,
    floor: "5",
    buildingType: "Apartamentowiec",
    yearBuilt: 2020,
    condition: "Luksusowe wykończenie",
    transactionType: "Sprzedaż"
  },
  {
    id: 3,
    title: "Dom z ogrodem",
    location: "Poznań, Jeżyce",
    price: "2,500,000 zł",
    area: "120 m²",
    rooms: "5",
    type: "Dom",
    images: [nieruchomosc, zdjeciemainJPG, zdjeciemainPNG],
    featured: true,
    pricePerM2: 20833,
    floor: "Parter",
    buildingType: "Dom wolnostojący",
    yearBuilt: 2015,
    condition: "Po remoncie",
    transactionType: "Sprzedaż"
  },
  {
    id: 4,
    title: "Apartament premium",
    location: "Kraków, Stare Miasto",
    price: "3,800,000 zł",
    area: "95 m²",
    rooms: "4",
    type: "Apartament",
    images: [zdjeciemainJPG, nieruchomosc, zdjeciemainPNG],
    featured: false,
    pricePerM2: 40000,
    floor: "3",
    buildingType: "Kamienica",
    yearBuilt: 1900,
    condition: "Luksusowe wykończenie",
    transactionType: "Sprzedaż"
  },
  {
    id: 5,
    title: "Mieszkanie inwestycyjne",
    location: "Wrocław, Centrum",
    price: "750,000 zł",
    area: "45 m²",
    rooms: "2",
    type: "Mieszkanie",
    images: [zdjeciemainPNG, zdjeciemainJPG, nieruchomosc],
    featured: false,
    pricePerM2: 16667,
    floor: "1",
    buildingType: "Blok",
    yearBuilt: 2005,
    condition: "Do wykończenia",
    transactionType: "Sprzedaż"
  },
  {
    id: 6,
    title: "Dom jednorodzinny",
    location: "Gdańsk, Oliwa",
    price: "4,200,000 zł",
    area: "180 m²",
    rooms: "6",
    type: "Dom",
    images: [nieruchomosc, zdjeciemainJPG, zdjeciemainPNG],
    featured: true,
    pricePerM2: 23333,
    floor: "Parter",
    buildingType: "Dom wolnostojący",
    yearBuilt: 2018,
    condition: "Gotowe do zamieszkania",
    transactionType: "Sprzedaż"
  },
  {
    id: 7,
    title: "Luksusowy apartament nad morzem",
    location: "Sopot, Centrum",
    price: "5,500,000 zł",
    area: "140 m²",
    rooms: "5",
    type: "Apartament",
    images: [zdjeciemainJPG, nieruchomosc, zdjeciemainPNG],
    featured: true,
    pricePerM2: 39286,
    floor: "8",
    buildingType: "Apartamentowiec",
    yearBuilt: 2022,
    condition: "Luksusowe wykończenie",
    transactionType: "Sprzedaż"
  },
  {
    id: 8,
    title: "Mieszkanie do wynajmu",
    location: "Łódź, Śródmieście",
    price: "2,500 zł",
    area: "55 m²",
    rooms: "3",
    type: "Mieszkanie",
    images: [zdjeciemainPNG, zdjeciemainJPG, nieruchomosc],
    featured: false,
    pricePerM2: 45,
    floor: "4",
    buildingType: "Blok",
    yearBuilt: 1990,
    condition: "Do remontu",
    transactionType: "Wynajem"
  },
  {
    id: 9,
    title: "Dom szeregowy z garażem",
    location: "Katowice, Brynów",
    price: "1,800,000 zł",
    area: "110 m²",
    rooms: "4",
    type: "Dom",
    images: [nieruchomosc, zdjeciemainJPG, zdjeciemainPNG],
    featured: false,
    pricePerM2: 16364,
    floor: "Parter",
    buildingType: "Dom szeregowy",
    yearBuilt: 2012,
    condition: "Gotowe do zamieszkania",
    transactionType: "Sprzedaż"
  },
  {
    id: 10,
    title: "Nieruchomość na przetarg",
    location: "Bydgoszcz, Stare Miasto",
    price: "600,000 zł",
    area: "70 m²",
    rooms: "3",
    type: "Lokal",
    images: [zdjeciemainJPG, nieruchomosc, zdjeciemainPNG],
    featured: true,
    pricePerM2: 8571,
    floor: "1",
    buildingType: "Kamienica",
    yearBuilt: 1920,
    condition: "Do remontu",
    transactionType: "Przetarg"
  },
  {
    id: 11,
    title: "Nowoczesne mieszkanie 2+1",
    location: "Szczecin, Centrum",
    price: "850,000 zł",
    area: "48 m²",
    rooms: "2",
    type: "Mieszkanie",
    images: [zdjeciemainPNG, zdjeciemainJPG, nieruchomosc],
    featured: false,
    pricePerM2: 17708,
    floor: "6",
    buildingType: "Apartamentowiec",
    yearBuilt: 2021,
    condition: "Gotowe do zamieszkania",
    transactionType: "Sprzedaż"
  },
      {
     id: 12,
     title: "Dom z działką rekreacyjną",
     location: "Lublin, Czechów",
     price: "3,200,000 zł",
     area: "160 m²",
     rooms: "6",
     type: "Dom",
     images: [nieruchomosc, zdjeciemainJPG, zdjeciemainPNG],
     featured: true,
     pricePerM2: 20000,
     floor: "Parter",
     buildingType: "Dom wolnostojący",
     yearBuilt: 2016,
     condition: "Po remoncie",
     transactionType: "Sprzedaż"
   }
];

const propertyTypes = ["Wszystkie", "Mieszkanie", "Dom", "Apartament", "Lokal"];
const cities = ["Wszystkie", "Kalisz", "Warszawa", "Poznań", "Kraków", "Wrocław", "Gdańsk", "Sopot", "Łódź", "Katowice", "Bydgoszcz", "Szczecin", "Lublin"];

export default function KTSPOffers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Wszystkie");
  const [selectedCity, setSelectedCity] = useState("Wszystkie");
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [areaRange, setAreaRange] = useState([0, 500]);
  const [rooms, setRooms] = useState("Wszystkie");
  const [status, setStatus] = useState("Wszystkie");
  const [pricePerM2Range, setPricePerM2Range] = useState([0, 50000]);
  const [floor, setFloor] = useState("Wszystkie");
  const [buildingType, setBuildingType] = useState("Wszystkie");
  const [yearBuiltRange, setYearBuiltRange] = useState([1900, 2024]);
  const [condition, setCondition] = useState("Wszystkie");
  const [transactionType, setTransactionType] = useState("Wszystkie");
  const [sortBy, setSortBy] = useState("Cena (od najniższej)");
  const [currentSlides, setCurrentSlides] = useState({});
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

  // Initialize current slides for all properties
  React.useEffect(() => {
    const initialSlides = {};
    properties.forEach(property => {
      initialSlides[property.id] = 0;
    });
    setCurrentSlides(initialSlides);
  }, []);

  const nextSlide = (propertyId) => {
    setCurrentSlides(prev => {
      const property = properties.find(p => p.id === propertyId);
      const maxSlides = property.images.length;
      return {
        ...prev,
        [propertyId]: (prev[propertyId] + 1) % maxSlides
      };
    });
  };

  const prevSlide = (propertyId) => {
    setCurrentSlides(prev => {
      const property = properties.find(p => p.id === propertyId);
      const maxSlides = property.images.length;
      return {
        ...prev,
        [propertyId]: (prev[propertyId] - 1 + maxSlides) % maxSlides
      };
    });
  };

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "Wszystkie" || property.type === selectedType;
    const matchesCity = selectedCity === "Wszystkie" || property.location.includes(selectedCity);
    
    // Handle different price formats (sale vs rent)
    let priceValue;
    if (property.transactionType === "Wynajem") {
      // For rent, price is monthly in zł
      priceValue = parseInt(property.price.replace(/[^\d]/g, ''));
    } else {
      // For sale, price is in zł
      priceValue = parseInt(property.price.replace(/[^\d]/g, ''));
    }
    const matchesPrice = priceValue >= priceRange[0] && priceValue <= priceRange[1];
    
    const propertyArea = parseInt(property.area.replace(/[^\d]/g, ''));
    const matchesArea = propertyArea >= areaRange[0] && propertyArea <= areaRange[1];
    
    const matchesRooms = rooms === "Wszystkie" || property.rooms.toString() === rooms;
    
    const matchesStatus = status === "Wszystkie" || 
                         (status === "Wyróżnione" && property.featured) ||
                         (status === "Nowe" && property.yearBuilt >= 2020) ||
                         (status === "Promocyjne" && property.pricePerM2 < 15000);
    
    const matchesPricePerM2 = property.pricePerM2 >= pricePerM2Range[0] && 
                             property.pricePerM2 <= pricePerM2Range[1];
    
    const matchesFloor = floor === "Wszystkie" || property.floor.toString() === floor;
    
    const matchesBuildingType = buildingType === "Wszystkie" || property.buildingType === buildingType;
    
    const matchesYearBuilt = property.yearBuilt >= yearBuiltRange[0] && 
                            property.yearBuilt <= yearBuiltRange[1];
    
    const matchesCondition = condition === "Wszystkie" || property.condition === condition;
    
    const matchesTransactionType = transactionType === "Wszystkie" || property.transactionType === transactionType;
    
    return matchesSearch && matchesType && matchesCity && matchesPrice && matchesArea && 
           matchesRooms && matchesStatus && matchesPricePerM2 && matchesFloor && 
           matchesBuildingType && matchesYearBuilt && matchesCondition && matchesTransactionType;
  });

  // Function to clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedType("Wszystkie");
    setSelectedCity("Wszystkie");
    setPriceRange([0, 5000000]);
    setAreaRange([0, 500]);
    setRooms("Wszystkie");
    setStatus("Wszystkie");
    setPricePerM2Range([0, 50000]);
    setFloor("Wszystkie");
    setBuildingType("Wszystkie");
    setYearBuiltRange([1900, 2024]);
    setCondition("Wszystkie");
    setTransactionType("Wszystkie");
  };

  // Sort properties based on selected criteria
  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case "Cena (od najniższej)":
        return parseInt(a.price.replace(/[^\d]/g, '')) - parseInt(b.price.replace(/[^\d]/g, ''));
      case "Cena (od najwyższej)":
        return parseInt(b.price.replace(/[^\d]/g, '')) - parseInt(a.price.replace(/[^\d]/g, ''));
      case "Powierzchnia":
        return parseInt(a.area.replace(/[^\d]/g, '')) - parseInt(b.area.replace(/[^\d]/g, ''));
      case "Data dodania":
        return b.id - a.id; // Using ID as a proxy for date added
      default:
        return 0;
    }
  });

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
      <div className="w-full px-4 md:px-6 lg:px-8 xl:px-32 2xl:px-48 py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-slate-800 mb-4">
            Znajdź swoje wymarzone
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> mieszkanie</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Przeglądaj tysiące ofert nieruchomości w całej Polsce. 
            Znajdź idealne miejsce dla siebie i swojej rodziny.
          </p>
        </div>

        {/* Search Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50 shadow-xl mb-12">
          {/* Basic Filters Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Wyszukaj</label>
              <input
                type="text"
                placeholder="Nazwa nieruchomości lub lokalizacja..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Area Range */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Powierzchnia (m²)</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  min="0"
                  value={areaRange[0]}
                  onChange={(e) => setAreaRange([parseInt(e.target.value) || 0, areaRange[1]])}
                  className="w-full px-2 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
                <input
                  type="number"
                  placeholder="Max"
                  min="0"
                  value={areaRange[1]}
                  onChange={(e) => setAreaRange([areaRange[0], parseInt(e.target.value) || 500])}
                  className="w-full px-2 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Transaction Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Rodzaj transakcji</label>
              <select 
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
                className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                <option>Wszystkie</option>
                <option>Przetarg</option>
                <option>Sprzedaż</option>
                <option>Wynajem</option>
              </select>
            </div>
          </div>

                                {/* Price Range and Buttons Row */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-2">Zakres cenowy (zł)</label>
              <div className={`flex gap-4 items-end transition-all duration-300 ${showAdvancedFilters ? 'w-full' : 'w-full'}`}>
                {/* Price Range - Dynamic width */}
                <div className={`transition-all duration-300 ${showAdvancedFilters ? 'w-full' : 'w-2/3'}`}>
                  <div className="flex gap-2 items-center">
                    <input
                      type="number"
                      placeholder="Min"
                      min="0"
                      max="5000000"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                    <div className="text-slate-500">-</div>
                    <input
                      type="number"
                      placeholder="Max"
                      min="0"
                      max="5000000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 5000000])}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
                
                {/* Buttons - Only visible when advanced filters are hidden */}
                {!showAdvancedFilters && (
                  <div className="flex gap-4 w-1/3 justify-end">
                    <button 
                      onClick={clearFilters}
                      className="px-10 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300 font-medium flex-1"
                    >
                      Wyczyść filtry
                    </button>
                    <button className="px-12 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl flex-1">
                      Wyszukaj
                    </button>
                  </div>
                )}
              </div>
            </div>

                     {/* Advanced Filters Toggle - Only show when filters are hidden */}
           {!showAdvancedFilters && (
             <div className="mb-4">
               <button
                 onClick={() => setShowAdvancedFilters(true)}
                 className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
               >
                 <svg 
                   className="w-5 h-5 transition-transform duration-300" 
                   fill="none" 
                   stroke="currentColor" 
                   viewBox="0 0 24 24"
                 >
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                 </svg>
                 Więcej filtrów
               </button>
             </div>
           )}

          {/* Advanced Filters - Hidden by default */}
          {showAdvancedFilters && (
            <>
              {/* Second Row - Additional Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {/* City */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Miasto</label>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    {cities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>

                {/* Rooms */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Liczba pokoi</label>
                  <select 
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option>Wszystkie</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                  </select>
                </div>

                {/* Featured Properties */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Status</label>
                  <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option>Wszystkie</option>
                    <option>Wyróżnione</option>
                    <option>Nowe</option>
                    <option>Promocyjne</option>
                  </select>
                </div>

                {/* Price per m² */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Cena za m²</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      min="0"
                      value={pricePerM2Range[0]}
                      onChange={(e) => setPricePerM2Range([parseInt(e.target.value) || 0, pricePerM2Range[1]])}
                      className="w-full px-2 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      min="0"
                      value={pricePerM2Range[1]}
                      onChange={(e) => setPricePerM2Range([pricePerM2Range[0], parseInt(e.target.value) || 50000])}
                      className="w-full px-2 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              {/* Third Row - Advanced Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                {/* Floor */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Piętro</label>
                  <select 
                    value={floor}
                    onChange={(e) => setFloor(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option>Wszystkie</option>
                    <option>Parter</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>8</option>
                  </select>
                </div>

                {/* Building Type */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Typ budynku</label>
                  <select 
                    value={buildingType}
                    onChange={(e) => setBuildingType(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option>Wszystkie</option>
                    <option>Blok</option>
                    <option>Kamienica</option>
                    <option>Dom wolnostojący</option>
                    <option>Dom szeregowy</option>
                    <option>Apartamentowiec</option>
                  </select>
                </div>

                {/* Year Built */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Rok budowy</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Od"
                      min="1900"
                      max="2024"
                      value={yearBuiltRange[0]}
                      onChange={(e) => setYearBuiltRange([parseInt(e.target.value) || 1900, yearBuiltRange[1]])}
                      className="w-full px-2 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                    <input
                      type="number"
                      placeholder="Do"
                      min="1900"
                      max="2024"
                      value={yearBuiltRange[1]}
                      onChange={(e) => setYearBuiltRange([yearBuiltRange[0], parseInt(e.target.value) || 2024])}
                      className="w-full px-2 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Condition */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Stan techniczny</label>
                  <select 
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option>Wszystkie</option>
                    <option>Do remontu</option>
                    <option>Do wykończenia</option>
                    <option>Gotowe do zamieszkania</option>
                    <option>Po remoncie</option>
                    <option>Luksusowe wykończenie</option>
                  </select>
                </div>
                             </div>
             </>
           )}

                       {/* Search Buttons and Hide Filters Button - Only visible when advanced filters are shown */}
            {showAdvancedFilters && (
              <div className="flex gap-4 justify-between items-center mt-4">
                <button
                  onClick={() => setShowAdvancedFilters(false)}
                  className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                >
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  Ukryj więcej filtrów
                </button>
                <div className="flex gap-4">
                  <button 
                    onClick={clearFilters}
                    className="px-8 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-all duration-300 font-medium"
                  >
                    Wyczyść filtry
                  </button>
                  <button className="px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Wyszukaj
                  </button>
                </div>
              </div>
            )}
         </div>

        {/* Results Count */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-slate-800">
            Znaleziono {sortedProperties.length} ofert
          </h2>
          <div className="text-slate-600">
            Sortuj według: 
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="ml-2 px-3 py-1 border border-slate-200 rounded-lg"
            >
              <option>Cena (od najniższej)</option>
              <option>Cena (od najwyższej)</option>
              <option>Powierzchnia</option>
              <option>Data dodania</option>
            </select>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProperties.map(property => (
            <div key={property.id} className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              {/* Property Image Slider */}
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentSlides[property.id] * 100}%)` }}
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
                
                {/* Navigation Buttons */}
                <button
                  onClick={() => prevSlide(property.id)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={() => nextSlide(property.id)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                  {property.images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      onClick={() => {
                        setCurrentSlides(prev => ({
                          ...prev,
                          [property.id]: imageIndex
                        }));
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        imageIndex === currentSlides[property.id] 
                          ? 'bg-white' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
                
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Wyróżnione
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                  {property.type}
                </div>
              </div>

              {/* Property Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 text-slate-600 mb-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">🏠</span>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Powierzchnia</div>
                      <div className="font-semibold text-slate-800">{property.area}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <span className="text-green-600 font-semibold">🛏️</span>
                    </div>
                    <div>
                      <div className="text-sm text-slate-600">Pokoje</div>
                      <div className="font-semibold text-slate-800">{property.rooms}</div>
                    </div>
                  </div>
                </div>

                {/* Price and Action */}
                <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                  <div>
                    <div className="text-2xl font-bold text-slate-800">{property.price}</div>
                    <div className="text-sm text-slate-600">
                      {property.pricePerM2.toLocaleString()} zł/m²
                    </div>
                  </div>
                  <Link
                    to={`/oferty/${property.id}`}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Zobacz
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {sortedProperties.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-semibold text-slate-800 mb-2">Nie znaleziono ofert</h3>
            <p className="text-slate-600">Spróbuj zmienić kryteria wyszukiwania</p>
          </div>
        )}
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