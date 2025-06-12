"use client";

import type React from "react";
import { useState, useEffect } from "react";
import {
  Shield,
  Database,
  ClipboardList,
  CheckSquare,
  Lock,
  UserCheck,
  Share2,
  Clock,
  RefreshCw,
  Mail,
} from "lucide-react";
import Image from "next/image";

interface VisibilityState {
  [key: string]: boolean;
}

const ProteccionDatos: React.FC = () => {
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

  const datosRecopilados = [
    "Nombre completo",
    "Número de documento de identidad o pasaporte",
    "Dirección de correo electrónico",
    "Número de teléfono",
    "Información de pago",
    "Datos de salud relevantes para la prestación de nuestros servicios",
  ];

  const finalidades = [
    "Procesar reservas y pagos",
    "Brindar información sobre nuestros servicios",
    "Cumplir con obligaciones legales y regulatorias",
    "Mejorar nuestros servicios y personalizar la experiencia del cliente",
  ];

  const derechos = [
    "Derecho de acceso: Conocer qué datos personales tuyos están siendo tratados.",
    "Derecho de rectificación: Solicitar la corrección de datos inexactos o incompletos.",
    "Derecho de cancelación: Solicitar la eliminación de tus datos cuando ya no sean necesarios.",
    "Derecho de oposición: Oponerte al tratamiento de tus datos personales.",
  ];

  const secciones = [
    {
      id: "datos-recopilados",
      icon: <Database className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Datos Personales Recopilados",
      contenido: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Podemos recopilar los siguientes datos personales:
          </p>
          <ul className="space-y-2">
            {datosRecopilados.map((dato, index) => (
              <li
                key={index}
                className={`flex items-start gap-3 transform transition-all duration-700 ${
                  isVisible["datos-recopilados"]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                </div>
                <span className="text-lg text-gray-700">{dato}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "finalidad",
      icon: <ClipboardList className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Finalidad del Tratamiento de Datos",
      contenido: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Los datos personales recopilados serán utilizados para:
          </p>
          <ul className="space-y-2">
            {finalidades.map((finalidad, index) => (
              <li
                key={index}
                className={`flex items-start gap-3 transform transition-all duration-700 ${
                  isVisible.finalidad
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white text-xs">
                    ✓
                  </div>
                </div>
                <span className="text-lg text-gray-700">{finalidad}</span>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: "consentimiento",
      icon: <CheckSquare className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Consentimiento",
      contenido: (
        <p className="text-lg text-gray-700">
          Al proporcionar tus datos personales, otorgas tu consentimiento libre,
          previo, expreso e informado para que sean tratados conforme a las
          finalidades descritas en esta política.
        </p>
      ),
    },
    {
      id: "seguridad",
      icon: <Lock className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Seguridad de los Datos",
      contenido: (
        <p className="text-lg text-gray-700">
          Implementamos medidas de seguridad administrativas, técnicas y físicas
          para proteger tus datos personales contra acceso no autorizado,
          pérdida o destrucción.
        </p>
      ),
    },
    {
      id: "derechos",
      icon: <UserCheck className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Derechos del Titular de los Datos",
      contenido: (
        <div className="space-y-4">
          <p className="text-lg text-gray-700">
            Tienes derecho a acceder, rectificar, cancelar y oponerte al
            tratamiento de tus datos personales. Para ejercer estos derechos,
            puedes contactarnos a través de nuestro correo electrónico de
            contacto.
          </p>
          <div className="mt-6 space-y-4">
            {derechos.map((derecho, index) => (
              <div
                key={index}
                className={`bg-gray-50 p-4 rounded-lg shadow-sm transform transition-all duration-700 ${
                  isVisible.derechos
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <p className="text-gray-700">{derecho}</p>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "transferencia",
      icon: <Share2 className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Transferencia de Datos",
      contenido: (
        <p className="text-lg text-gray-700">
          No compartiremos tus datos personales con terceros sin tu
          consentimiento, salvo cuando sea necesario para la prestación de los
          servicios contratados o por requerimiento legal.
        </p>
      ),
    },
    {
      id: "conservacion",
      icon: <Clock className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Conservación de los Datos",
      contenido: (
        <p className="text-lg text-gray-700">
          Tus datos personales serán conservados durante el tiempo necesario
          para cumplir con las finalidades mencionadas y según lo exija la
          normativa aplicable.
        </p>
      ),
    },
    {
      id: "modificaciones",
      icon: <RefreshCw className="w-12 h-12 mb-4 text-primary" />,
      titulo: "Modificaciones a la Política",
      contenido: (
        <p className="text-lg text-gray-700">
          Nos reservamos el derecho de modificar esta política en cualquier
          momento. Cualquier cambio será publicado en nuestro sitio web y, de
          ser significativo, te lo notificaremos a través de los medios de
          contacto proporcionados.
        </p>
      ),
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
      <div className="relative h-[60vh] bg-[url('/banner.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 animate-fade-up">
            Política de Protección de Datos
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
                En Pachamama Journeys, valoramos y respetamos tu privacidad.
                Esta política describe cómo recopilamos, utilizamos y protegemos
                tus datos personales en cumplimiento con la Ley N° 29733 - Ley
                de Protección de Datos Personales y su Reglamento.
              </p>
              <p className="text-lg text-gray-600">
                Nos comprometemos a mantener la confidencialidad y seguridad de
                la información que nos proporcionas, garantizando un tratamiento
                adecuado y transparente de tus datos personales.
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
                  src="/images/imagen_06.webp"
                  width={600}
                  height={800}
                  alt="Protección de datos personales"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-lg overflow-hidden shadow-xl bg-white flex items-center justify-center">
                <Shield className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secciones de la política */}
      {secciones.map((seccion, index) => (
        <div
          key={seccion.id}
          className={`${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          } py-16 overflow-x-hidden`}
          id={seccion.id}
          data-animate
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col items-center mb-10">
                <div className="mb-4">{seccion.icon}</div>
                <h2 className="text-3xl font-bold text-center text-gray-800">
                  {seccion.titulo}
                </h2>
              </div>

              <div
                className={`transform transition-all duration-1000 ${
                  isVisible[seccion.id]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
              >
                {seccion.contenido}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Contacto Section */}
      <div
        className="bg-gray-50 py-16 overflow-x-hidden"
        id="contacto"
        data-animate
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center mb-10">
              <div className="mb-4">
                <Mail className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold text-center text-gray-800">
                Contacto
              </h2>
            </div>

            <div
              className={`bg-white p-8 rounded-lg shadow-lg transform transition-all duration-1000 ${
                isVisible.contacto
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <p className="text-lg text-gray-700 mb-6">
                Si tienes preguntas o inquietudes sobre esta política o sobre el
                tratamiento de tus datos personales, puedes contactarnos en:
              </p>
              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-800">
                  Pachamama Journeys
                </p>
                <p className="text-gray-700">
                  Avenida Manco Cápac 704, Whanchaq, Cusco
                </p>
                <p className="text-gray-700">
                  pachamamajourneys.peru@gmail.com
                </p>
                <p className="text-gray-700">+51 953775247</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
            Tu privacidad es importante para nosotros
          </h2>
          <p
            className={`text-xl mb-8 transform transition-all duration-1000 delay-200 ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Contáctanos si tienes alguna pregunta sobre cómo protegemos tus
            datos
          </p>
          <button
            className={`bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 
            transition-all duration-300 hover:shadow-lg hover:scale-105 transform ${
              isVisible.cta
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            Contactar
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

export default ProteccionDatos;
