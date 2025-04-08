"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Clock,
  ArrowRight
} from "lucide-react";

export default function Home() {
  const [isVisible, setIsVisible] = useState({ servicios: false, tours: false });

  const popularTours = [
    {
      title: "Machupicchu Full Day",
      duration: "1 día",
      image: "/images/imagen_02.webp"
    },
    {
      title: "Valle Sagrado Completo",
      duration: "1 día",
      image: "/images/imagen_01.webp"
    },
    {
      title: "Valle Sagrado + Machupicchu",
      duration: "2 días / 1 noche",
      image: "/banner.webp"
    },
    {
      title: "Montaña 7 colores",
      duration: "1 días",
      image: "/images/imagen_06.webp"
    },
    {
      title: "Laguna Humantay",
      duration: "1 día",
      image: "/images/imagen_07.webp"
    },
    {
      title: "Montaña de Palcoyo",
      duration: "1 días",
      image: "/images/imagen_08.webp"
    }
  ];

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

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative h-screen">
        <Image
          src="/banner.webp"
          alt="Banner Pachamama Journeys"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 animate-fade-up">
            Descubre la Magia de Perú
          </h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8 animate-fade-up delay-100">
            Experiencias únicas en Cusco y más allá, diseñadas para crear recuerdos inolvidables
          </p>
          <div className="flex gap-4 animate-fade-up delay-200">
            <button className="px-8 py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition duration-300 flex items-center gap-2">
              Explorar Tours <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition duration-300">
              Contáctanos
            </button>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container mx-auto px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-t-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm">Clientes Felices</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Destinos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm">Años de Experiencia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Tours Section */}
      <section className="py-20" id="tours" data-animate>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Tours Populares</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Descubre nuestras experiencias más solicitadas y prepárate para vivir aventuras increíbles
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularTours.map((tour, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl shadow-lg ${
                  isVisible.tours ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <Image
                  src={tour.image}
                  alt={tour.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="absolute bottom-0 p-6 w-full">
                    <h3 className="text-xl font-semibold text-white mb-2">{tour.title}</h3>
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{tour.duration}</span>
                      </div>
                      {/* <div className="text-xl font-bold">${tour.price}</div> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-primary/5" id="testimonios" data-animate>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Testimonios</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Lo que dicen nuestros viajeros sobre sus experiencias con nosotros
          </p>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-gray-500">{testimonial.location}</p>
                        </div>
                        <div className="ml-auto flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 italic">{testimonial.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white" id="cta" data-animate>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">¿Listo para tu Próxima Aventura?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Permítenos ser tu guía en esta experiencia única por las maravillas de Perú
          </p>
          <button className="px-8 py-4 bg-white text-primary rounded-full hover:bg-gray-100 transition duration-300 font-semibold">
            Reserva Ahora
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}