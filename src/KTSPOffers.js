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
    image: zdjeciemainJPG,
    featured: true
  },
  {
    id: 2,
    title: "Nowoczesne mieszkanie",
    location: "Warszawa, Mokotów",
    price: "1,200,000 zł",
    area: "65 m²",
    rooms: "3",
    type: "Mieszkanie",
    image: zdjeciemainPNG,
    featured: false
  },
  {
    id: 3,
    title: "Dom z ogrodem",
    location: "Poznań, Jeżyce",
    price: "2,500,000 zł",
    area: "120 m²",
    rooms: "5",
    type: "Dom",
    image: nieruchomosc,
    featured: true
  },
  {
    id: 4,
    title: "Apartament premium",
    location: "Kraków, Stare Miasto",
    price: "3,800,000 zł",
    area: "95 m²",
    rooms: "4",
    type: "Apartament",
    image: zdjeciemainJPG,
    featured: false
  },
  {
    id: 5,
    title: "Mieszkanie inwestycyjne",
    location: "Wrocław, Centrum",
    price: "750,000 zł",
    area: "45 m²",
    rooms: "2",
    type: "Mieszkanie",
    image: zdjeciemainPNG,
    featured: false
  },
  {
    id: 6,
    title: "Dom jednorodzinny",
    location: "Gdańsk, Oliwa",
    price: "4,200,000 zł",
    area: "180 m²",
    rooms: "6",
    type: "Dom",
    image: nieruchomosc,
    featured: true
  }
];

const propertyTypes = ["Wszystkie", "Mieszkanie", "Dom", "Apartament", "Lokal"];
const cities = ["Wszystkie", "Kalisz", "Warszawa", "Poznań", "Kraków", "Wrocław", "Gdańsk"];

export default function KTSPOffers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("Wszystkie");
  const [selectedCity, setSelectedCity] = useState("Wszystkie");
  const [priceRange, setPriceRange] = useState([0, 5000000]);
  const [sortBy, setSortBy] = useState("Cena (od najniższej)");

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "Wszystkie" || property.type === selectedType;
    const matchesCity = selectedCity === "Wszystkie" || property.location.includes(selectedCity);
    const matchesPrice = property.price.replace(/[^\d]/g, '') >= priceRange[0] && 
                        property.price.replace(/[^\d]/g, '') <= priceRange[1];
    
    return matchesSearch && matchesType && matchesCity && matchesPrice;
  });

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
            <div className="flex gap-4 text-sm font-medium text-slate-700">
              <Link to="/main" className="hover:text-blue-600 transition-colors duration-300 relative group">
                MAIN
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/oferty" className="text-blue-600 relative group">
                OFERTY
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
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
              <Link to="/main" className="hover:text-blue-600 transition-colors duration-300 relative group">
                MAIN
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link to="/oferty" className="text-blue-600 relative group">
                OFERTY
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600"></span>
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
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Wyszukaj</label>
              <input
                type="text"
                placeholder="Nazwa nieruchomości lub lokalizacja..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Typ nieruchomości</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                {propertyTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Miasto</label>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Zakres cenowy: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} zł
            </label>
            <div className="flex gap-4 items-center">
              <input
                type="range"
                min="0"
                max="5000000"
                step="100000"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min="0"
                max="5000000"
                step="100000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>
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
              {/* Property Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                      {Math.round(parseInt(property.price.replace(/[^\d]/g, '')) / parseInt(property.area))} zł/m²
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
    </div>
  );
} 