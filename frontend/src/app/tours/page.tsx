"use client";

import React, { useState } from 'react';
import { Clock, Users, Mountain, Search, ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Tours = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'trekking', name: 'Trekking' },
    { id: 'cultural', name: 'Cultural' },
    { id: 'adventure', name: 'Aventura' },
    { id: 'sacred', name: 'Valle Sagrado' }
  ];

  const tours = [
    {
      id: 1,
      title: "Valle Sagrado Completo",
      category: "trekking",
      duration: "4 días",
      groupSize: "8 personas",
      difficulty: "Desafiante",
      price: "40.00",
      rating: 4.8,
      image: "/images/imagen_01.webp"
    },
    {
      id: 2,
      title: "Machupicchu Full Day",
      category: "sacred",
      duration: "2 días",
      groupSize: "6 personas",
      difficulty: "Moderado",
      price: "250.00",
      rating: 4.7,
      image: "/images/imagen_02.webp"
    },
    {
      id: 3,
      title: "Maras Moray",
      category: "sacred",
      duration: "2 días",
      groupSize: "6 personas",
      difficulty: "Moderado",
      price: "25.00",
      rating: 4.7,
      image: "/images/imagen_03.webp"
    },
    {
      id: 4,
      title: "Valle Sagrado + Machupicchu",
      category: "sacred",
      duration: "2 días",
      groupSize: "6 personas",
      difficulty: "Moderado",
      price: "330.00",
      rating: 4.7,
      image: "/images/imagen_02.webp"
    },
    {
      id: 5,
      title: "Valle Sur",
      category: "cultural",
      duration: "1 día",
      groupSize: "12 personas",
      difficulty: "Fácil",
      price: "25.00",
      rating: 4.9,
      image: "/images/imagen_05.webp"
    },
    {
      id: 6,
      title: "Montaña 7 colores",
      category: "sacred",
      duration: "2 días",
      groupSize: "6 personas",
      difficulty: "Moderado",
      price: "35.00",
      rating: 4.7,
      image: "/images/imagen_06.webp"
    },
    {
      id: 7,
      title: "Laguna Humantay",
      category: "sacred",
      duration: "2 días",
      groupSize: "6 personas",
      difficulty: "Moderado",
      price: "35.00",
      rating: 4.7,
      image: "/images/imagen_07.webp"
    },
    {
      id: 8,
      title: "Montaña de Palcoyo",
      category: "sacred",
      duration: "2 días",
      groupSize: "6 personas",
      difficulty: "Moderado",
      price: "40.00",
      rating: 4.7,
      image: "/images/imagen_08.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-[url('/banner.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-up">
            Descubre la Magia de Cusco
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 animate-fade-up delay-100">
            Explora nuestros tours cuidadosamente diseñados para vivir experiencias únicas
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md rounded-full p-2 animate-fade-up delay-200">
            <div className="flex items-center gap-4">
              <div className="flex-1 flex items-center gap-2 text-white/80">
                <Search className="w-5 h-5 ml-4" />
                <input
                  type="text"
                  placeholder="¿Qué experiencia buscas?"
                  className="w-full bg-transparent border-none outline-none placeholder-white/80"
                />
              </div>
              <button className="bg-secondary hover:bg-secondary/70 text-white px-6 py-3 rounded-full transition-all">
                Buscar Tours
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Filters Button */}
        <div className="mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <span>Filtros</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-500">★</span>
                    <span className="font-medium">{tour.rating}</span>
                    <span className="text-gray-500">({tour.reviews})</span>
                  </div>
                </div> */}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{tour.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>Máx. {tour.groupSize}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mountain className="w-4 h-4" />
                    <span>{tour.difficulty}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <span className="text-sm text-gray-500">Desde</span>
                    <p className="text-2xl font-bold text-primary">${tour.price}</p>
                  </div>
                  <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors">
                    Ver Tour
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Buscas ofertas exclusivas?</h2>
          <p className="text-gray-600 mb-8">Contacta con nosotros y recibe las mejores promociones</p>
          
          <div className="flex max-w-md mx-auto">
            <button className="bg-primary mx-auto text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tours;