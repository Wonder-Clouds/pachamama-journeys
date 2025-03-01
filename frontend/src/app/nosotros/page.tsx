"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  Heart,
  Award,
  MapPin,
  Star,
  Coffee,
  Mountain,
} from "lucide-react";
import Image from "next/image";

interface VisibilityState {
  [key: string]: boolean;
}

const Nosotros: React.FC = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-animate]").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const valores = [
    {
      icon: <Users className="w-12 h-12 mb-4 text-primary" />, 
      titulo: "Experiencia Personalizada",
      descripcion:
        "Adaptamos cada viaje a tus preferencias y necesidades específicas, creando experiencias únicas y memorables.",
    },
    {
      icon: <Heart className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Pasión por el Servicio",
      descripcion:
        "Nos dedicamos con amor y entusiasmo a hacer que tu viaje sea extraordinario y supere tus expectativas.",
    },
    {
      icon: <Calendar className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Planificación Experta",
      descripcion:
        "Nuestro equipo cuenta con años de experiencia organizando viajes perfectamente coordinados.",
    },
    {
      icon: <Award className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Calidad Garantizada",
      descripcion:
        "Trabajamos con los mejores proveedores locales para asegurar servicios de primera calidad.",
    },
  ];

  const estadisticas = [
    { icon: <Star />, numero: "1000+", texto: "Clientes Satisfechos" },
    { icon: <MapPin />, numero: "50+", texto: "Destinos" },
    { icon: <Coffee />, numero: "10+", texto: "Años de Experiencia" },
    { icon: <Mountain />, numero: "100+", texto: "Rutas Únicas" },
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* Banner Section con Parallax y Animación */}
      <div className="relative bg-[url('/banner.webp')] bg-fixed bg-cover bg-center text-white py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-200/70"></div>

        <div className="relative z-10 container mx-auto text-center mt-24 px-6 animate-fade-in">
          <h1 className="text-6xl font-bold mb-6 animate-slide-up">CONOCE SOBRE NOSOTROS</h1>
          <p className="text-xl mt-4 max-w-2xl mx-auto animate-fade-in-delay">
            Brindamos un servicio de alta calidad, asegurando que cada cliente disfrute de una experiencia única e inolvidable al descubrir la magia de Cusco.
          </p>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-float-slow absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
          <div className="animate-float-slower absolute top-1/3 right-1/3 w-24 h-24 bg-red-400/20 rounded-full blur-sm"></div>
          <div className="animate-float absolute bottom-1/4 right-1/4 w-20 h-20 bg-yellow-400/20 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Historia Section con Imagen */}
      <div className="bg-white py-20 overflow-x-hidden" id="historia" data-animate>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible.historia ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-8">Nuestra Historia</h2>
              <p className="text-lg text-gray-600 mb-6">
                Pachamama Journeys nació de nuestra profunda pasión por compartir la rica cultura y belleza natural de Cusco con viajeros de todo el mundo. Desde nuestros inicios, nos hemos dedicado a crear experiencias auténticas que conectan a nuestros visitantes con la esencia verdadera de los Andes.
              </p>
              <p className="text-lg text-gray-600">
                Con más de una década de experiencia, hemos construido relaciones sólidas con las comunidades locales y conocemos cada rincón de esta tierra sagrada.
              </p>
            </div>
            <div className={`relative transform transition-all duration-1000 ${isVisible.historia ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image 
                  src="/banner.webp"
                  width={800}
                  height={600}
                  alt="Machu Picchu" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/banner.webp"
                  alt="Local Community"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Estadísticas Animadas */}
      <div className="bg-secondary text-white py-16 overflow-x-hidden" id="estadisticas" data-animate>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {estadisticas.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible.estadisticas ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold mb-2">{stat.numero}</div>
                <div className="text-lg">{stat.texto}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Valores Section con Hover Effects */}
      <div className="bg-gray-50 py-20 overflow-x-hidden" id="valores" data-animate>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible.valores ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="hover:scale-110 transition-transform duration-300">
                  {valor.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{valor.titulo}</h3>
                <p className="text-gray-600">{valor.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Equipo Section con Cards Interactivas */}
      <div className="bg-white py-20 overflow-x-hidden" id="equipo" data-animate>
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, index) => (
              <div 
                key={index}
                className={`relative group transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible.equipo ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image 
                    src={`/banner.webp`}
                    alt={`Team Member ${index + 1}`}
                    width={800}
                    height={800}
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-2">Guía Experto {index + 1}</h3>
                    <p className="text-sm">Especialista en rutas ancestrales y cultura local con más de 5 años de experiencia.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action con Animación */}
      <div className="relative bg-secondary text-white py-20 overflow-x-hidden" id="cta" data-animate>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-red-500"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold mb-6 transform transition-all duration-1000 ${
            isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            ¿Listo para Vivir una Aventura Inolvidable?
          </h2>
          <p className={`text-xl mb-8 transform transition-all duration-1000 delay-200 ${
            isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Permítenos ser tu guía en esta experiencia única por las maravillas de Cusco
          </p>
          <button className={`bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 
            transition-all duration-300 hover:shadow-lg hover:scale-105 transform ${
            isVisible.cta ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            Contáctanos
          </button>
        </div>

        {/* Elementos decorativos animados */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-spin-slow absolute top-1/4 left-1/4 w-32 h-32 border-4 border-white/20 rounded-full"></div>
          <div className="animate-spin-slower absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-white/10 rounded-full"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-40px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slower {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 15s linear infinite; }
        .animate-spin-slower { animation: spin-slower 20s linear infinite; }
        .animate-fade-in { animation: fadeIn 1s ease-out; }
        .animate-fade-in-delay { animation: fadeIn 1s ease-out 0.5s both; }
        .animate-slide-up { animation: slideUp 1s ease-out; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Nosotros;