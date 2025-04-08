"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Clock } from 'lucide-react';

const Contactanos = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const infoCards = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Llámanos",
      info: "+51 953 775 247",
      description: "Lunes a Viernes 9am - 6pm"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "pachamamajourneys.peru@gmail.com",
      description: "Responderemos dentro de 24 horas"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      info: "Cusco, Perú",
      description: "Jirón Chavín 9, Cusco 08006"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[url('/banner.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-center max-w-2xl mb-8">
            Estamos aquí para ayudarte en tu próxima aventura
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {infoCards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                  <p className="text-primary font-medium mb-1">{card.info}</p>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  name="asunto"
                  value={formData.asunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <Send className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="h-96 relative">
                <iframe
                  title="Ubicación en Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4368.825871741314!2d-71.94093468879781!3d-13.541032871466252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e7f42eb628da3%3A0xd3010a0b32cb0da9!2sChavin%209%2C%20Cusco%2008006!5e1!3m2!1ses-419!2spe!4v1741915709911!5m2!1ses-419!2spe"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Hours and Additional Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Horario de Atención</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="text-primary w-5 h-5" />
                  <div>
                    <p className="font-medium">Lunes a Viernes</p>
                    <p className="text-gray-500">9:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-primary w-5 h-5" />
                  <div>
                    <p className="font-medium">Sábados</p>
                    <p className="text-gray-500">9:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-primary w-5 h-5" />
                  <div>
                    <p className="font-medium">Domingos</p>
                    <p className="text-gray-500">Cerrado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      {/* <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-3">¿Cómo puedo reservar una excursión?</h3>
                <p className="text-gray-600">
                  Puedes reservar a través de nuestro sitio web, por teléfono o enviándonos un email.
                  Responderemos a tu solicitud en menos de 24 horas.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Contactanos;