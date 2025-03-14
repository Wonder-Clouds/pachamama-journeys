"use client";

import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

  const paths = [
    { name: "Inicio", path: "/" },
    { name: "Tours", path: "/tours" },
    { name: "Sobre Nosotros", path: "/nosotros" },
    { name: "Blog", path: "/blog" },
    { name: "Contacto", path: "/contacto" },
  ]
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Main footer content */}
      <div className="relative container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/isotipo-blanco.webp" alt="Isotipo" width={400} height={400} className="w-12 h-12 rounded-full" />
              <h3 className="text-xl font-bold">Pachamama Journeys</h3>
            </div>
            <p className="text-gray-400 pr-4">
              Descubre la magia de Cusco con nosotros. Creamos experiencias únicas y memorables para viajeros de todo el mundo.
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
          {/* Tours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Tours Populares</h4>
            <ul className="space-y-2">
              {[
                'Machu Picchu Full Day',
                'Valle Sagrado VIP',
                'City Tour Cusco',
                'Montaña 7 Colores',
                'Maras & Moray',
                'Valle Sur Cusco'
              ].map((tour) => (
                <li key={tour}>
                  <a href="#" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                    {tour}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-400">Jirón Chavín 9, Cusco 08006</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary" />
                <p className="text-gray-400">+51 953 876 498</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <p className="text-gray-400">info@pachamajourneys.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Pachamama Journeys. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Términos y Condiciones</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;