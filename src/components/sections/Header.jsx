'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const partner = () => router.push('/partner');
  const handleApplyNowClick = () => router.push('/QuoteForm');
  const handleClick = () => router.push('/');
  const Home = () => router.push('/');
  const About = () => router.push('/about');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-4 sticky top-0 z-20 bg-white text-black shadow-md">
      <nav className="max-w-7xl mx-auto flex justify-between items-center relative">
        {/* Logo */}
        <div className="cursor-pointer" onClick={handleClick}>
          <img src="/logo-1.jpg" alt="adKey Logo" className="h-10 w-auto sm:h-12" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-lg font-medium">
          <Link href='/' className="hover:text-blue-500 transition">Home</Link>
          <Link href='/about' className="hover:text-blue-500 transition">About</Link>
          <Link href='/services' className="hover:text-blue-500 transition">Services</Link>
  
          <Link href="/blog" className="hover:text-blue-500 transition">Blog</Link>
          <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
        </div>

        {/* Desktop CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={handleApplyNowClick}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get A Quote
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={handleApplyNowClick}
            className="text-sm px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Quote
          </button>
          <button
            onClick={toggleMenu}
            className="text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="p-5 flex flex-col space-y-4 text-lg font-medium">
            <button onClick={toggleMenu} className="self-end text-2xl">✕</button>
                  <Link href='/' className="hover:text-blue-500 transition">Home</Link>
          <Link href='/about' className="hover:text-blue-500 transition">About</Link>
          <Link href='/services' className="hover:text-blue-500 transition">Services</Link>
  
          <Link href="/blog" className="hover:text-blue-500 transition">Blog</Link>
          <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
            <button
              onClick={() => { handleApplyNowClick(); toggleMenu(); }}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
            >
              Get A Quote
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;