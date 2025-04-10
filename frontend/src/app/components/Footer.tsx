"use client";

import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  Building2,
  IdCard,
  CalendarClock,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const paths = [
    { name: "Inicio", path: "/" },
    { name: "Sobre Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
    { name: "Codigo ESNNA", path: "/codigo-esnna" },
    { name: "Termino y Condiciones", path: "/terminos-y-condiciones" },
    {
      name: "Política de Protección de Datos Personales",
      path: "/proteccion-datos",
    },
  ];
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main footer content */}
      <div className="relative container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/isotipo-blanco.webp"
                alt="Isotipo"
                width={400}
                height={400}
                className="w-12 h-12 rounded-full"
              />
              <h3 className="text-xl font-bold">Pachamama Journeys</h3>
            </div>
            <p className="text-gray-400 pr-4">
              Descubre la magia de Cusco con nosotros. Creamos experiencias
              únicas y memorables para viajeros de todo el mundo.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-4">
              <ul className="space-y-2">
                {paths.map(({ name, path }) => (
                  <li key={name}>
                    <Link
                      href={path}
                      className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <h4 className="text-lg font-semibold my-4">Horario de Atención</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CalendarClock className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-400">
                  Lunes a Sabado 9:00 AM - 7:00 PM.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary" />
                <p className="text-gray-400">Via Telefonica 24 horas al día.</p>
              </div>
            </div>
          </div>
          {/* Tours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Información de la Empresa
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <p className="text-gray-400">
                Urb. Los Nogales Calle Chavín s-9 
                San Sebastián Cusco 
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Building2 className="w-5 h-5 text-secondary" />
                <p className="text-gray-400">
                  Razon Social: Pachamama Journeys E.I.R.L
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <IdCard className="w-5 h-5 text-secondary" />
                <p className="text-gray-400">RUC: 20613604481</p>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <p className="text-gray-400">+51 953775247</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <p className="text-gray-400">
                  pachamamajourneys.peru@gmail.com
                </p>
              </div>
            </div>
            <h4 className="text-lg font-semibold my-4">Metodos de Pago</h4>
            <div className="flex flex-col space-y-2">
              <span>CCI: 00228500713367106857</span>
              <Image
                src="/cards.webp"
                alt="Metodos de Pago"
                width={200}
                height={200}
              />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 text-lg font-semibold">Codigo ESNNA</h4>
            <div className="">
              <Image
                src="/codigo-esnna-imagen.webp"
                alt="Codigo ESNNA"
                height={200}
                width={230}
              />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pachamama Journeys. Todos los
              derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="/terminos-y-condiciones"
                className="text-gray-400 hover:text-white text-sm"
              >
                Términos y Condiciones
              </a>
              <a
                href="/proteccion-datos"
                className="text-gray-400 hover:text-white text-sm"
              >
                Política de Protección de Datos Personales
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
