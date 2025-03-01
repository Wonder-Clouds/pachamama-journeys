"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navigationLinks = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/nosotros" },
  { name: "Tours", href: "/tours" },
  { name: "Blog", href: "/blog" },
  { name: "Contáctanos", href: "/contacto" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-full max-w-screen-2xl bg-white h-20 flex items-center justify-between px-6 rounded-b-2xl z-50 shadow-md">
      {/* Logo */}
      <Image src="/logo.webp" alt="Logo" width={150} height={150} className="w-32 h-auto" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        {navigationLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-secondary font-dm-sans font-semibold tracking-wider hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-secondary"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 text-lg font-semibold transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {navigationLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-secondary hover:text-primary transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </div>
    </header>
  );
};

export default Header;
