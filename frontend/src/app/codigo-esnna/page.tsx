"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Shield,
  FileCheck,
  Users,
  AlertTriangle,
  BookOpen,
  Scale,
} from "lucide-react";
import Image from "next/image";

interface VisibilityState {
  [key: string]: boolean;
}

const CodigoESNNA: React.FC = () => {
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

  const politicas = [
    {
      icon: <Shield className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Cero tolerancia",
      descripcion:
        "No permitimos ni apoyamos ninguna forma de explotación sexual comercial de niñas, niños y adolescentes en el turismo.",
    },
    {
      icon: <Users className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Capacitación y Sensibilización",
      descripcion:
        "Nuestro personal recibe formación sobre la prevención de la ESNNA y el manejo adecuado de situaciones de riesgo.",
    },
    {
      icon: <AlertTriangle className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Medidas Preventivas",
      descripcion:
        "Implementamos protocolos para identificar y denunciar cualquier indicio de explotación o abuso.",
    },
    {
      icon: <FileCheck className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Denuncia Activa",
      descripcion:
        "Trabajamos en colaboración con las autoridades locales y organizaciones especializadas para reportar cualquier caso sospechoso.",
    },
    {
      icon: <BookOpen className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Compromiso con la Comunidad",
      descripcion:
        "Fomentamos el turismo responsable y educamos a nuestros clientes sobre la importancia de proteger los derechos de la niñez y la adolescencia.",
    },
  ];

  const normativas = [
    "Ley N.º 30802: Ley que previene y sanciona la explotación sexual de niñas, niños y adolescentes en el turismo.",
    "Código de los Niños y Adolescentes: Marco normativo que protege los derechos de los menores.",
    "Convenios Internacionales: Cumplimos con los principios de la Convención sobre los Derechos del Niño de las Naciones Unidas.",
  ];

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative h-[60vh] bg-[url('/banner.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-up">
            Código ESNNA - Pachamama Journeys
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 animate-fade-up delay-100">
            Compromiso con la Protección de Niñas, Niños y Adolescentes
          </p>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-float-slow absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
          <div className="animate-float absolute bottom-1/4 right-1/4 w-20 h-20 bg-yellow-400/20 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Introducción Section con Imagen */}
      <div
        className="bg-white py-20 overflow-x-hidden"
        id="introduccion"
        data-animate
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.introduccion
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-8">
                Nuestro Compromiso
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                En Pachamama Journeys, estamos firmemente comprometidos con la
                protección y el bienestar de niñas, niños y adolescentes. Nos
                adherimos a la normativa nacional e internacional para prevenir
                cualquier forma de explotación sexual de menores en el turismo y
                promovemos un ambiente seguro y responsable en todas nuestras
                actividades.
              </p>
              <p className="text-lg text-gray-600">
                Creemos que un turismo responsable es posible solo cuando
                protegemos a los más vulnerables. Agradecemos su colaboración y
                compromiso con esta causa.
              </p>
            </div>
            <div
              className={`relative transform transition-all duration-1000 ${
                isVisible.introduccion
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              <div className="relative h-auto w-[35rem] rounded-lg overflow-hidden mx-auto">
                {/* Imagen principal */}
                <Image
                  src="/codigo-esnna-imagen.webp"
                  width={1091}
                  height={1536}
                  alt="Protección de niños y adolescentes"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl bg-white flex items-center justify-center">
                {/* Icono de escudo en lugar de imagen secundaria */}
                <Shield className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Políticas Section con Hover Effects */}
      <div
        className="bg-gray-50 py-20 overflow-x-hidden"
        id="politicas"
        data-animate
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Política de Prevención de la Explotación Sexual de Niñas, Niños y
            Adolescentes (ESNNA)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {politicas.map((politica, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible.politicas
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="hover:scale-110 transition-transform duration-300">
                  {politica.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {politica.titulo}
                </h3>
                <p className="text-gray-600">{politica.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Normativa Section */}
      <div
        className="bg-white py-20 overflow-x-hidden"
        id="normativa"
        data-animate
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Normativa y Legislación
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Nos alineamos con la legislación peruana vigente, incluyendo:
            </p>
            <div className="space-y-6">
              {normativas.map((normativa, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 transform transition-all duration-1000 delay-${
                    index * 200
                  } ${
                    isVisible.normativa
                      ? "translate-x-0 opacity-100"
                      : "translate-x-full opacity-0"
                  }`}
                >
                  <div className="flex-shrink-0 mt-1">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-lg text-gray-700">{normativa}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Responsabilidad Section */}
      <div
        className="bg-gray-50 py-20 overflow-x-hidden"
        id="responsabilidad"
        data-animate
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
              Responsabilidad de Nuestros Clientes
            </h2>
            <div
              className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-1000 ${
                isVisible.responsabilidad
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <p className="text-lg text-gray-600 mb-6">
                Invitamos a nuestros clientes a sumarse a nuestro compromiso de
                turismo responsable, evitando cualquier acción que pueda poner
                en riesgo a niñas, niños y adolescentes. Si identifican
                situaciones sospechosas, pueden denunciarlo a las autoridades
                pertinentes o comunicarse con nuestro equipo.
              </p>
              <p className="text-lg text-gray-600 font-semibold">
                En Pachamama Journeys, creemos que un turismo responsable es
                posible solo cuando protegemos a los más vulnerables.
                Agradecemos su colaboración y compromiso con esta causa.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action con Animación */}
      <div
        className="relative bg-primary text-white py-20 overflow-x-hidden"
        id="cta"
        data-animate
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-700"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2
            className={`text-4xl font-bold mb-6 transform transition-all duration-1000 ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Juntos por un Turismo Responsable
          </h2>
          <p
            className={`text-xl mb-8 transform transition-all duration-1000 delay-200 ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Ayúdanos a proteger a niñas, niños y adolescentes
          </p>
          <button
            className={`bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 
            transition-all duration-300 hover:shadow-lg hover:scale-105 transform ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Conoce Más
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
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        @keyframes float-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-30px);
          }
        }
        @keyframes float-slower {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-40px);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-slower {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite;
        }
        .animate-float-slower {
          animation: float-slower 5s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        .animate-spin-slower {
          animation: spin-slower 20s linear infinite;
        }
        .animate-fade-up {
          animation: fadeUp 1s ease-out;
        }
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CodigoESNNA;
