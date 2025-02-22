import Image from "next/image";
import { MapPinIcon, UsersIcon, Phone } from "lucide-react";

export default function Home() {
  return (
    <>
      <Image
        src="/banner.webp"
        alt="Banner Pachamama Journeys"
        height={200}
        width={1800}
        className="w-full h-[800px] object-cover"
      />
      
      <div className="container mx-auto bg-white text-black p-8 relative -mt-40 z-10 shadow-lg rounded-xl text-center">
        <h1 className="text-5xl font-bold">Descubre Perú con Nosotros</h1>
        <p className="text-lg mt-4">Experiencias únicas en Cusco y más allá</p>
        <button className="mt-6 px-6 py-3 bg-primary text-white rounded-xl hover:bg-secondary transition duration-300">Comunícate Ahora</button>
      </div>
      
      <section className="container mx-auto my-20 text-center">
        <h2 className="text-4xl font-bold text-secondary">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="p-6 bg-gray-100 rounded-xl shadow-md">
            <MapPinIcon className="text-5xl text-secondary mx-auto" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">Tours Personalizados</h3>
            <p className="text-gray-600">Explora los mejores destinos con guías expertos.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-md">
            <UsersIcon className="text-5xl text-secondary mx-auto" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">Grupos Pequeños</h3>
            <p className="text-gray-600">Viajes diseñados para una experiencia más auténtica.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow-md">
            <Phone className="text-5xl text-secondary mx-auto" />
            <h3 className="text-xl text-gray-800 font-semibold mt-4">Soporte 24/7</h3>
            <p className="text-gray-600">Siempre disponibles para ayudarte en tu viaje.</p>
          </div>
        </div>
      </section>
      
      <section className="bg-secondary text-white py-16 text-center">
        <h2 className="text-4xl font-bold">Testimonios</h2>
        <p className="mt-4 text-lg">Lo que dicen nuestros viajeros</p>
        <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white text-black p-6 rounded-xl shadow-md max-w-sm">
            <p>“Una experiencia inolvidable, los guías fueron increíbles.”</p>
            <h4 className="font-bold mt-2">- Juan Pérez</h4>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-md max-w-sm">
            <p>“El viaje a Machu Picchu fue perfecto. Todo muy bien organizado.”</p>
            <h4 className="font-bold mt-2">- María Gómez</h4>
          </div>
        </div>
      </section>
    </>
  );
}
