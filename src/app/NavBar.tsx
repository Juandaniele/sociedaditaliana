'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDisciplinasOpen, setIsDisciplinasOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDisciplinasToggle = () => {
    setIsDisciplinasOpen(!isDisciplinasOpen);
  };

  return (
    <nav className="bg-[#36802d] shadow-lg border-b-1 border-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logoitaliana.png" alt="Logo del Club" width={40} height={40} className="mr-2" />
            <span className="text-white text-sm">Sociedad Italiana</span>
          </Link>
        </div>

        {/* Botón de menú hamburguesa para móviles */}
        <button 
          className="block text-white lg:hidden focus:outline-none" 
          onClick={handleMenuToggle}
        >
          {/* Icono de menú hamburguesa */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>

        {/* Menú para dispositivos grandes */}
        <ul className="hidden lg:flex space-x-4">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link href="/sobre-nosotros" className="text-white hover:text-gray-300">Sobre Nosotros</Link>
          </li>
          <li>
            <Link href="/contacto" className="text-white hover:text-gray-300">Contacto</Link>
          </li>
          <li className="relative">
            <button onClick={handleDisciplinasToggle} className="text-white hover:text-gray-300">
              Disciplinas
            </button>
            {isDisciplinasOpen && (
              <ul className="absolute left-0 mt-2 w-40 bg-gray-800 border border-gray-600 rounded-md">
                <li><Link href="/disciplinas/handball" className="block px-4 py-2 text-white hover:bg-gray-700">Handball</Link></li>
                <li><Link href="/disciplinas/voley" className="block px-4 py-2 text-white hover:bg-gray-700">Voley</Link></li>
                <li><Link href="/disciplinas/patin" className="block px-4 py-2 text-white hover:bg-gray-700">Patin</Link></li>
                <li><Link href="/disciplinas/gimnasio" className="block px-4 py-2 text-white hover:bg-gray-700">Gimnasio</Link></li>
                <li><Link href="/disciplinas/futbol" className="block px-4 py-2 text-white hover:bg-gray-700">Futbol</Link></li>
                <li><Link href="/disciplinas/folklore" className="block px-4 py-2 text-white hover:bg-gray-700">Folklore</Link></li>
                <li><Link href="/disciplinas/sumba" className="block px-4 py-2 text-white hover:bg-gray-700">Sumba</Link></li>
              </ul>
            )}
          </li>
        </ul>

        {/* Menú desplegable para móviles */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full bg-gray-800 text-white">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li>
                <Link href="/" className="text-white hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-white hover:text-gray-300">Sobre Nosotros</Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white hover:text-gray-300">Contacto</Link>
              </li>
              <li>
                <button onClick={handleDisciplinasToggle} className="text-white hover:text-gray-300">
                  Disciplinas
                </button>
                {isDisciplinasOpen && (
                  <ul className="mt-2 w-40 bg-gray-700 border border-gray-600 rounded-md">
                    <li><Link href="/disciplinas/handball" className="block px-4 py-2 text-white hover:bg-gray-600">Handball</Link></li>
                    <li><Link href="/disciplinas/voley" className="block px-4 py-2 text-white hover:bg-gray-600">Voley</Link></li>
                    <li><Link href="/disciplinas/patin" className="block px-4 py-2 text-white hover:bg-gray-600">Patin</Link></li>
                    <li><Link href="/disciplinas/gimnasio" className="block px-4 py-2 text-white hover:bg-gray-600">Gimnasio</Link></li>
                    <li><Link href="/disciplinas/futbol" className="block px-4 py-2 text-white hover:bg-gray-600">Futbol</Link></li>
                    <li><Link href="/disciplinas/folklore" className="block px-4 py-2 text-white hover:bg-gray-600">Folklore</Link></li>
                    <li><Link href="/disciplinas/sumba" className="block px-4 py-2 text-white hover:bg-gray-600">Sumba</Link></li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
