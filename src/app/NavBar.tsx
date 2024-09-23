'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="nav-bg shadow-lg border-b-2 border-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logoitaliana.png" alt="Logo del Club" width={40} height={40} className="mr-2" />
            <span className="text-white text-sm">Sociedad Italiana</span>
          </Link>
        </div>
        <ul className="flex space-x-4 relative">
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
            <button 
              onClick={toggleDropdown} 
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              Disciplinas
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-black border border-gray-700 rounded shadow-lg z-10">
                <li>
                  <Link href="/disciplinas#handball" className="block px-4 py-2 text-white hover:bg-gray-700">Handball</Link>
                </li>
                <li>
                  <Link href="/disciplinas#voley" className="block px-4 py-2 text-white hover:bg-gray-700">Voley</Link>
                </li>
                <li>
                  <Link href="/disciplinas#patin" className="block px-4 py-2 text-white hover:bg-gray-700">Patin</Link>
                </li>
                <li>
                  <Link href="/disciplinas#taekwondo" className="block px-4 py-2 text-white hover:bg-gray-700">Taekwondo</Link>
                </li>
                <li>
                  <Link href="/disciplinas#gimnasio" className="block px-4 py-2 text-white hover:bg-gray-700">Gimnasio</Link>
                </li>
                <li>
                  <Link href="/disciplinas#danza" className="block px-4 py-2 text-white hover:bg-gray-700">Danza</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
