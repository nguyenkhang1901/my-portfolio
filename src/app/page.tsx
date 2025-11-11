'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    gsap.fromTo('.anime-text', { y: 50, opacity: 0 }, {
      y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power3.out', delay: 0.5
    });
    gsap.fromTo('.home__img', { x: 100, opacity: 0 }, {
      x: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 1
    });
    gsap.to('.overlay', { x: '-100%', duration: 1.5, stagger: 0.2, ease: 'power3.inOut', delay: 0.2 });
  }, []);

  return (
    <>
      <div className="overlay first"></div>
      <div className="overlay second"></div>
      <div className="overlay third"></div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 px-8 py-6 backdrop-blur-md bg-black/30">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-cyan-400 hover:text-purple-400 transition">
            Nguyen Khang
          </Link>
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="/" className="text-white hover:text-cyan-400 transition">Home</Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition">About</Link>
            <Link href="/gallery" className="text-white hover:text-cyan-400 transition">Gallery</Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition">Contact</Link>
          </div>
          <div className="md:hidden">
            <button className="text-3xl text-white hover:text-cyan-400 transition">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* MAIN */}
      <main className="min-h-screen flex items-center justify-center px-8 overflow-hidden relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-7xl mx-auto w-full">
          <div className="space-y-6 text-left">
            <span className="anime-text text-lg md:text-xl text-purple-300 font-medium">Hello, My name is</span>
            <h1 className="anime-text text-5xl md:text-7xl lg:text-8xl font-extrabold text-white">Nguyen Khang</h1>
            <span className="anime-text text-2xl md:text-3xl text-cyan-400 font-light">Asia Uni Student</span>
          </div>
          <div className="home__img flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-purple-600 shadow-2xl shadow-purple-600/50">
              <Image src="/khang.jpg" alt="Nguyen Khang" width={400} height={400} className="object-cover w-full h-full" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
          </div>
        </div>

        {/* SOCIAL */}
        <div className="absolute bottom-8 left-8 flex space-x-6">
          <a href="#" className="text-2xl text-white hover:text-cyan-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04 4.27 4.27 0 0 0-7.28 3.9A12.12 12.12 0 0 1 3.35 4.8a4.27 4.27 0 0 0 1.32 5.7 4.24 4.24 0 0 1-1.94-.54v.05a4.27 4.27 0 0 0 3.43 4.19 4.28 4.28 0 0 1-1.93.07 4.27 4.27 0 0 0 3.98 2.96A8.57 8.57 0 0 1 2 19.54a12.1 12.1 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18 0-.19 0-.37-.01-.56A8.7 8.7 0 0 0 22.46 6z"/>
            </svg>
          </a>
          <a href="#" className="text-2xl text-white hover:text-purple-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M12 2.04c-5.5 0-9.96 4.47-9.96 9.96 0 4.41 2.86 8.14 6.83 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.56 9.56 0 0 1 2.5-.34c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68 0.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48 3.97-1.35 6.82-5.08 6.82-9.49 0-5.5-4.46-9.96-9.96-9.96z"/>
            </svg>
          </a>
          <a href="#" className="text-2xl text-white hover:text-cyan-400 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.38c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.38h-3v-5.5c0-1.31-.02-3-1.84-3-1.84 0-2.12 1.43-2.12 2.9v5.6h-3v-10h2.88v1.37h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.6z"/>
            </svg>
          </a>
        </div>
      </main>
    </>
  );
}