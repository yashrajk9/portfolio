'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Inter } from 'next/font/google';

// 1. Load the Inter font (Applied to everything)
const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500'], 
});

export default function AboutPage() {
  return (
    // 2. LAYOUT ADJUSTMENT:
    // - flex items-center: Centers the content vertically.
    // - overflow-hidden: Prevents scrollbars.
    // - inter.className: Applies the Inter font to the entire page.
    <main className={`${inter.className} h-screen w-full flex items-center overflow-hidden`}>
      
      {/* --- BACKGROUND IMAGE (FIXED) --- */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/bgimage2.png" 
          alt="Background"
          fill
          className="object-cover"
          priority 
        />
      </div>

      {/* --- CONTENT CONTAINER --- */}
      {/* PRESERVED MARGINS: ml-[350px], mr-[250px], -mt-10 */}
      <div className="relative z-10 ml-[350px] md:ml-[350px] mr-[250px] max-w-3xl -mt-10">
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="p-10 bg-white/70 backdrop-blur-md rounded-sm shadow-sm"
        >
            {/* HEADING */}
            {/* Font is inherited from <main> (Inter) */}
            {/* Fixed typo: mb-[40 px] -> mb-[40px] */}
            <h1 className="text-4xl md:text-5xl text-black -mt-4 mb-[40px] tracking-wide font-light">
              About
            </h1>

            {/* BIO TEXT */}
            {/* Font is inherited from <main> (Inter) */}
            {/* Preserved: leading-[30px], space-y-8 */}
            <div className="space-y-8 text-lg md:text-xl text-gray-900 leading-[30px] text-justify font-light">
                <p>
                  I inhabit the space where computational logic dissolves into narrative.
                </p>
                <p>
                  While my foundation lies in Computer Science at New York University Abu Dhabi, my practice is triangulated by minors in Interactive Media and Film. This intersection allows me to treat code not merely as a tool for execution, but as a medium for archival and discovery.
                </p>
                <p>
                  Through the lens of Interactive Media, I investigate the autonomy of digital forms, constructing generative systems that mimic the organic unpredictability of nature. My background in Film, conversely, disciplines my understanding of time and texture. I am concerned with the synthesis of these worlds: attempting to capture the stillness of ancient landscapes and the weight of history through the rigorous, rhythmic movement of modern algorithms.
                </p>
                <p>
                  I am interested in the unseen architecture of things: the quiet behaviors of natural simulations, the dense geometry of networks, and the cinematic quality of silence. This portfolio is a collection of those inquiries.
                </p>
            </div>

            {/* SIGNATURE / CONTACT */}
            <div className="mt-12 pt-6 border-t border-gray-500 w-[100px]">
                <p className="text-sm tracking-widest uppercase text-gray-800">
                    Abu Dhabi, 2026
                </p>
            </div>
        </motion.div>

      </div>
    </main>
  );
}