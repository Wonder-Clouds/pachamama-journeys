"use client";

import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'travel', name: 'Viajes' },
    { id: 'culture', name: 'Cultura' },
    { id: 'tips', name: 'Consejos' },
    { id: 'food', name: 'Gastronomía' }
  ];

  const featuredPost = {
    title: "Los Secretos Mejor Guardados del Valle Sagrado",
    excerpt: "Descubre los rincones mágicos y menos conocidos del Valle Sagrado de los Incas, donde la historia y la naturaleza se encuentran.",
    date: "20 Feb 2024",
    readTime: "8 min",
    category: "travel",
    image: "/banner.webp"
  };

  const posts = [
    {
      id: 1,
      title: "Guía Completa para el Camino Inca",
      excerpt: "Todo lo que necesitas saber antes de emprender esta aventura inolvidable por las antiguas rutas incas.",
      date: "18 Feb 2024",
      readTime: "12 min",
      category: "tips",
      image: "/banner.webp"
    },
    {
      id: 2,
      title: "Las Delicias de la Cocina Cusqueña",
      excerpt: "Un recorrido por los sabores más auténticos de la gastronomía local y sus secretos ancestrales.",
      date: "15 Feb 2024",
      readTime: "6 min",
      category: "food",
      image: "/banner.webp"
    },
    {
      id: 3,
      title: "Festividades Tradicionales en Cusco",
      excerpt: "Conoce las celebraciones más importantes y su significado cultural en la región.",
      date: "12 Feb 2024",
      readTime: "10 min",
      category: "culture",
      image: "/banner.webp"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[url('/banner.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Blog de Viajes
          </h1>
          <p className="text-xl text-center max-w-2xl mb-8">
            Historias, consejos y experiencias para inspirar tu próxima aventura
          </p>
          
          {/* Search Bar */}
          <div className="w-full max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar artículos..."
                className="w-full pl-12 pr-4 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
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

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-full">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-4 py-1 rounded-full text-sm">
                    Destacado
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4">{featuredPost.title}</h2>
                <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    Leer más
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Te gustan nuestros artículos?</h2>
          <p className="text-gray-600 mb-8">Suscríbete a nuestro newsletter y recibe las últimas historias y consejos de viaje</p>
          
          <div className="flex max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
            />
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;