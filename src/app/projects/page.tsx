
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

// Load Font
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'], 
});

const projects = [
  {
    id: 1,
    title: 'THE LOUVRE PROJECT',
    category: 'Love the universal Language',
    image: '/project1.jpg', 
    link: '/projects/louvre' 
  },
  {
    id: 2,
    title: 'CONVERSATION WITH ADAM',
    category: 'Interactive Installation',
    image: '/project2.jpg',
    link: '/projects/adam'
  },
  {
    id: 3,
    title: 'THE LYRE OF THIRST',
    category: 'Interactive Installation',
    image: '/project3.png',
    link: 'https://desert.nyuadim.com/lyreofthirst/' // Updated Link
  },
  {
    id: 4,
    title: 'SPACE IMPACT',
    category: 'Game Design',
    image: '/project4.jpg',
    link: '/projects/space-impact'
  },
  {
    id: 5,
    title: 'AIRKEYS',
    category: 'Interactive Installation',
    image: '/project5.jpg',
    link: '/projects/airkeys'
  },
];

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Show 2 cards at a time logic
  const maxIndex = projects.length - 2;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <main className={`${inter.className} min-h-screen w-full relative overflow-hidden flex flex-col justify-center`}>
      
      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/bgimage.png" 
          alt="Background"
          fill
          className="object-cover"
          priority 
        />
      </div>

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 ml-[350px] md:ml-[350px] w-[calc(100%-350px)] h-full flex flex-col justify-center items-center px-12 py-16">
        
        {/* PAGE TITLE */}
        <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl text-black mb-12 tracking-widest font-light uppercase self-start"
        >
            Projects
        </motion.h1>

        {/* CAROUSEL CONTAINER */}
        <div className="w-full max-w-[1000px]">
            
            {/* CARDS WINDOW */}
            <div className="overflow-hidden mb-8">
                <motion.div 
                    className="flex gap-12 px-4"
                    initial={false}
                    animate={{ 
                      x: `-${currentIndex * (50 + 6)}%`, // 50% per card + 6% for gap
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="min-w-[calc(50%-24px)] flex-shrink-0"
                        >
                            <Link 
                                href={project.link} 
                                className="block group h-full no-underline"
                                style={{ color: 'inherit' }}
                                target={project.link.startsWith('http') ? '_blank' : undefined} // Add this line
                                rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined} // Add this line for security
                            >
                                {/* SMALLER WHITE CARD WITH STRONG SHADOW */}
                                {/* style={{ backgroundColor: '#ffffff' }} forces solid white */}
                                <div 
                                    className="flex flex-col h-[340px] bg-white rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500"
                                    style={{ backgroundColor: '#ffffff' }}
                                >
                                    
                                    {/* IMAGE SECTION - Padded inside white card */}
                                    <div className="p-5 pb-0">
                                        <div className="relative h-[200px] w-full overflow-hidden rounded-[20px] bg-gray-100">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    {/* TEXT SECTION - Clear white background */}
                                    {/* ADDED: items-center text-center for centering text */}
                                    <div 
                                        className="flex flex-col justify-center items-center text-center px-6 py-5 flex-1 bg-white"
                                        style={{ backgroundColor: '#ffffff' }}
                                    >
                                        <h2 className="text-black text-base font-semibold tracking-wide mb-2 line-clamp-2">
                                            {project.title}
                                        </h2>
                                        <p className="text-gray-500 text-[10px] tracking-[0.2em] font-medium uppercase line-clamp-1">
                                            {project.category}
                                        </p>
                                        
                                        {/* Decorative bar */}
                                        <div className="w-8 h-[2px] bg-gray-300 mt-3 group-hover:bg-black group-hover:w-12 transition-all duration-300" />
                                    </div>

                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* ARROWS BELOW - CENTERED */}
            {/* CHANGED: gap-6 -> gap-16 for more space between buttons */}
            <div className="flex items-center justify-center gap-[50px] mt-4">
                
                {/* LEFT ARROW */}
                {/* ADDED: border-none to remove any default border */}
                <button 
                    onClick={prevSlide}
                    disabled={currentIndex === 0}
                    className={`group flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border-none outline-none transition-all duration-300 ${
                      currentIndex === 0 
                        ? 'opacity-40 cursor-not-allowed' 
                        : 'opacity-100 hover:shadow-xl hover:scale-105'
                    }`}
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M19 12H5M12 19l-7-7 7-7"/>
                    </svg>
                    <span className="text-sm font-medium text-black">Previous   </span>
                </button>

                {/* POSITION INDICATOR */}
                <div className="flex gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`transition-all duration-300 rounded-full border-none ${
                                index === currentIndex 
                                ? 'bg-black w-8 h-2' 
                                : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                            }`}
                        />
                    ))}
                </div>

                {/* RIGHT ARROW */}
                {/* ADDED: border-none to remove any default border */}
                <button 
                    onClick={nextSlide}
                    disabled={currentIndex === maxIndex}
                    className={`group flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border-none outline-none transition-all duration-300 ${
                      currentIndex === maxIndex 
                        ? 'opacity-40 cursor-not-allowed' 
                        : 'opacity-100 hover:shadow-xl hover:scale-105'
                    }`}
                >
                    <span className="text-sm font-medium text-black">Next</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </button>

            </div>

        </div>

      </div>
    </main>
  );
}