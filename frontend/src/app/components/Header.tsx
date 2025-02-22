import Image from "next/image";

const navigationLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Tours", href: "/tours" },
  { name: "Blog", href: "/blog" },
  { name: "Contáctanos", href: "/contacto" },
];

const Header = () => {

  return (
    <header className="container bg-white h-24 flex items-center justify-between fixed top-0 left-1/2 transform -translate-x-1/2 rounded-b-2xl px-6 w-full max-w-screen-2xl z-50">
      <Image src="/logo.webp" alt="Logo" width={150} height={150} />
      <div>
        {
          navigationLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-secondary font-dm-sans font-semibold tracking-wider mx-4">
              {link.name}
            </a>
          ))
        }
      </div>
    </header>
  );
}

export default Header;