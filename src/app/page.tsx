'use client';

import SplitText from '@/components/reactbits/SplitText';
import Typewriter from '@/components/reactbits/Typewriter';

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-purple-600/30">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-8">
          <span className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
            Nguyen Khang
          </span>
          <div className="space-x-12 text-lg font-medium">
            <a href="#about" className="hover:text-purple-400 transition">About</a>
            <a href="#labs" className="hover:text-purple-400 transition">Labs</a>
            <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900 px-8">
        <div className="text-center">
          <Typewriter
            text="QUOCKHAII - Asia Uni Student"
            speed={80}
            cursor={true}
            className="text-5xl md:text-6xl mb-8 text-purple-200 font-light"
          />
          <SplitText
            text="Mini-Portfolio IT"
            from="bottom"
            duration={1.8}
            stagger={0.08}
            className="text-7xl md:text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400"
          />
          <button className="mt-16 text-2xl px-12 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:scale-105 transition duration-300 font-bold">
            Explore My Work
          </button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-40 px-8 text-center bg-gray-950">
        <h2 className="text-7xl md:text-9xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          About Me
        </h2>
        <p className="text-2xl md:text-3xl max-w-5xl mx-auto leading-relaxed">
          Sinh viên <strong>Asia University</strong> - Môn <strong>Introduction to IT</strong>.<br />
          Hoàn thành <strong>4 labs tuần 5-8</strong> + <strong>Extra-B & Extra-C</strong> với animation từ <strong>reactbits.dev</strong>!
        </p>
      </section>

      {/* Labs */}
      <section id="labs" className="py-40 px-8 bg-gray-900/60">
        <h2 className="text-7xl md:text-9xl font-bold text-center mb-32 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Labs Weeks 5-8
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 max-w-7xl mx-auto">
          {['Week 5', 'Week 6', 'Week 7', 'Week 8'].map((week) => (
            <div key={week} className="group bg-gray-800 p-8 rounded-2xl hover:scale-105 transition duration-300 cursor-pointer">
              <div className="bg-gray-700 h-48 rounded-lg mb-4 flex items-center justify-center text-2xl font-bold text-purple-300 group-hover:text-cyan-300 transition">
                {week}
              </div>
              <p className="text-lg text-cyan-300 font-medium">100% Complete</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-40 px-8 text-center bg-gradient-to-t from-purple-900 to-black">
        <h2 className="text-7xl md:text-9xl font-bold mb-20 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
          Contact Me
        </h2>
        <button className="text-3xl px-16 py-7 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full hover:scale-105 transition duration-300 font-bold">
          quockhaii@asiauni.edu.vn
        </button>
      </section>
    </>
  );
}