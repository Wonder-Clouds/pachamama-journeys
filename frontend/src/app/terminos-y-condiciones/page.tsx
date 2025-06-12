"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { CreditCard, FileText, UserCheck, AlertCircle, Briefcase, Copyright, Gavel } from 'lucide-react';
import Image from "next/image";

interface VisibilityState {
  [key: string]: boolean;
}

const TerminosYCondiciones: React.FC = () => {
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

  const termsSections = [
    {
      id: "reservas",
      icon: <CreditCard className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Reservas y Pagos",
      items: [
        "Para confirmar una reserva, es necesario completar el formulario correspondiente y abonar un depósito del 50% del costo total del servicio.",
        "El saldo restante debe ser pagado al menos 15 días antes del inicio del tour.",
        "Aceptamos pagos mediante transferencia bancaria y tarjetas de crédito en soles peruanos (PEN) o dólares estadounidenses (USD).",
        "Cancelaciones con más de 30 días de anticipación recibirán un reembolso completo, descontando gastos administrativos.",
        "Cancelaciones entre 15 y 30 días antes del inicio tendrán una penalización del 50%.",
        "No se realizarán reembolsos por cancelaciones con menos de 15 días de anticipación."
      ]
    },
    {
      id: "responsabilidades",
      icon: <UserCheck className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Responsabilidades del Cliente",
      items: [
        "Es responsabilidad del cliente contar con la documentación válida y vigente necesaria para el viaje, incluyendo pasaportes, visas y certificados de vacunación.",
        "Recomendamos encarecidamente contratar un seguro de viaje que cubra accidentes, enfermedades y pérdidas personales.",
        "El cliente debe informar a Pachamama Journeys sobre cualquier condición médica preexistente que pueda afectar su participación en las actividades programadas."
      ]
    },
    {
      id: "modificaciones",
      icon: <AlertCircle className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Modificaciones y Cancelaciones por Parte de la Empresa",
      items: [
        "Pachamama Journeys se reserva el derecho de modificar o cancelar itinerarios debido a circunstancias imprevistas como condiciones climáticas adversas, desastres naturales o situaciones políticas.",
        "En tales casos, se ofrecerán alternativas o reembolsos según corresponda."
      ]
    },
    {
      id: "limitacion",
      icon: <Briefcase className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Limitación de Responsabilidad",
      items: [
        "Pachamama Journeys actúa como intermediario entre los clientes y los proveedores de servicios turísticos.",
        "No nos hacemos responsables por actos, omisiones o negligencias de terceros, incluyendo pero no limitado a transportistas, hoteles y operadores locales."
      ]
    },
    {
      id: "propiedad",
      icon: <Copyright className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Propiedad Intelectual",
      items: [
        "Todo el contenido presente en nuestro sitio web, incluyendo textos, imágenes, logotipos y material audiovisual, es propiedad de Pachamama Journeys o cuenta con las licencias correspondientes.",
        "Queda prohibida su reproducción sin autorización expresa."
      ]
    },
    {
      id: "ley",
      icon: <Gavel className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Ley Aplicable y Jurisdicción",
      items: [
        "Estos términos y condiciones se rigen por las leyes de la República del Perú.",
        "Cualquier disputa será resuelta en los tribunales competentes de la ciudad de Cusco."
      ]
    }
  ];

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative h-[60vh] bg-[url('/banner.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-up">
            Términos y Condiciones
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-3xl mb-8 animate-fade-up delay-100">
            Pachamama Journeys
          </p>
        </div>

        {/* Decorative floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="animate-float-slow absolute top-1/4 left-1/4 w-16 h-16 bg-white/20 rounded-full blur-sm"></div>
          <div className="animate-float absolute bottom-1/4 right-1/4 w-20 h-20 bg-yellow-400/20 rounded-full blur-sm"></div>
        </div>
      </div>

      {/* Introducción Section */}
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
                Introducción
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Bienvenido a Pachamama Journeys. Al acceder y utilizar nuestro sitio web y servicios, 
                aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con 
                alguna parte de estos términos, te recomendamos no utilizar nuestros servicios.
              </p>
              <p className="text-lg text-gray-600">
                Estos términos establecen los derechos y obligaciones entre Pachamama Journeys y nuestros 
                clientes, asegurando una experiencia clara y transparente para todos.
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
                  src="/images/imagen_07.webp"
                  width={600}
                  height={800}
                  alt="Pachamama Journeys"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl bg-white flex items-center justify-center">
                <FileText className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Sections */}
      {termsSections.map((section, sectionIndex) => (
        <div
          key={section.id}
          className={`${sectionIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'} py-16 overflow-x-hidden`}
          id={section.id}
          data-animate
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center mb-10">
                <div className="mb-4">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-bold text-center text-gray-800">
                  {section.titulo}
                </h2>
              </div>
              
              <div className="space-y-6">
                {section.items.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-4 transform transition-all duration-1000 ${
                      isVisible[section.id]
                        ? "translate-x-0 opacity-100"
                        : (index % 2 === 0 ? "-translate-x-full" : "translate-x-full") + " opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white text-sm">
                        {index + 1}
                      </div>
                    </div>
                    <p className="text-lg text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Call to Action */}
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
            ¿Listo para vivir una experiencia inolvidable?
          </h2>
          <p
            className={`text-xl mb-8 transform transition-all duration-1000 delay-200 ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Contáctanos para planificar tu próxima aventura con Pachamama Journeys
          </p>
          <button
            className={`bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 
            transition-all duration-300 hover:shadow-lg hover:scale-105 transform ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Reservar Ahora
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

export default TerminosYCondiciones;
