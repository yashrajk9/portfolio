'use client';

import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Sidebar from '../../components/Sidebar'; 
import WaterCursor from '../../components/WaterCursor';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], 
});

export default function AdamProjectPage() {
  return (
    // MAIN CONTAINER
    <main className={`${inter.className} fixed inset-0 w-full h-full bg-white`}>
      
      <WaterCursor />

      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/bgimage2.png" 
          alt="Conversation with Adam Background"
          fill
          className="object-cover opacity-80"
          priority 
        />
      </div>

      {/* SIDEBAR */}
      <div className="z-50 relative">
        <Sidebar />
      </div>

      {/* SCROLLABLE WRAPPER */}
      <div className="absolute inset-0 z-10 overflow-y-auto overflow-x-hidden w-full h-full">
        
        {/* CONTENT LAYOUT */}
        <div className="ml-[350px] mr-[250px] max-w-3xl pt-[50px] pb-40 text-center">
          
          {/* FORCE GRAY COLOR FIX:
             Added '!text-gray-500'. The '!' symbol forces this style 
             to override any global black text settings.
          */}
          <div className="space-y-16 !text-gray-100 uppercase tracking-widest font-light leading-[3rem]">
            
            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl mb-20 tracking-widest">
              Conversation with Adam
            </h1>
            {/* ADD THIS EMPTY SPACER DIV HERE */}
            <div className="h-[25px]"></div>

            {/* SECTION: PROJECT CONCEPT */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Project Concept
              </h2>
              <p>
                This interactive artwork draws inspiration from Michelangelo’s renowned painting The Creation of Adam. Our project transforms this iconic image into an interactive, narrative-driven experience, where the characters Adam and God engage in a brief exchange. Using Arduino and p5.js, we enhance the artwork by allowing viewers to trigger dialogue and voice responses from the characters, creating a dynamic storytelling effect.
              </p>
              <p>
                This documentation details the p5.js implementation, where the primary functions include displaying the painting, highlighting characters as they "speak," playing audio for their dialogues, and showing subtitles for the conversation.
              </p>
            </section>
             <div className="h-[25px]"></div>

            {/* SECTION: PREPARATION */}
            <section className="space-y-12">
              <h2 className="text-3xl px-4">
                Preparation: Setting Up Media Resources
              </h2>
              
              {/* Subsection */}
              <div>
                <h3 className="text-xl mb-6">Extracting Images for Character Highlights</h3>
                <p>
                  Using Adobe Photoshop, I separated the figures of Adam and God from the background of the original painting. This allowed me to create "mask" images of each character for use in overlay effects, enabling us to highlight them individually when their dialogue is played.
                </p>
              </div>

              {/* Subsection: Script */}
              <div>
                <h3 className="text-xl mb-6">Script for the Dialogue</h3>
                <p className="mb-10">
                  I created a custom five-line dialogue script to simulate a conversation between Adam and God. Each line reflects a humorous take on their interaction:
                </p>
                
                {/* Script Block */}
                <div className="space-y-6 px-4 md:px-12 py-8 bg-white/40 backdrop-blur-sm rounded-xl">
                  <p><span>Adam:</span> "Is this how everyone gets created? Just... a spark?"</p>
                  <p><span>God:</span> "Not everyone gets the direct touch, Adam. Consider yourself lucky."</p>
                  <p><span>Adam:</span> "So... what now? A garden tour? Some instructions?"</p>
                  <p><span>God:</span> "You'll figure it out. Just don't touch the apple."</p>
                  <p><span>Adam:</span> "An apple? Really? How tempting can a fruit be?"</p>
                </div>
              </div>

              {/* Subsection: Audio */}
              <div>
                <h3 className="text-xl mb-6">Audio Preparation</h3>
                <p>
                  I used AI voice generators from ElevenLabs to create audio files for each line in the script, selecting voice types that best matched the characters’ personalities. Additionally, a soft background track was sourced from YouTube, downloaded, and edited using Adobe Audition to complement the setting of the painting.
                </p>
                <p className="mt-8">
                  This interactive painting project creates a unique fusion of classical art and modern technology. By allowing users to "speak" with the painting through button presses, we bring Michelangelo’s The Creation of Adam to life, fostering an engaging, multisensory exploration of this timeless masterpiece.
                </p>
              </div>
            </section>

            {/* SECTION: LINKS */}
            <section className="space-y-4 pt-8">
              <div className="flex flex-col items-center gap-4">
                  <span className="text-xl pb-1">Final P5.js Sketch</span>
                  <a 
                    href="https://editor.p5js.org/Yash.r/sketches/4N3c6tKin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg lowercase hover:text-gray-800 transition-all break-all"
                  >
                    https://editor.p5js.org/Yash.r/sketches/4N3c6tKin
                  </a>
              </div>
            </section>
             <h2 className="text-3xl px-4">
                Demo
            </h2>

            

          </div>
          
        </div>
        {/* SECTION: DEMO VIDEO */}
            <section className="space-y-8 pt-8 pb-20 ml-[350px] mr-[250px]">
            <h2 className="text-3xl px-4">
                
            </h2>
            
            {/* Remove the centering wrapper and adjust positioning */}
            <div 
                className="w-full bg-black/5 shadow-2xl relative rounded-sm overflow-hidden border border-white/50"
                style={{ aspectRatio: '16/9', minHeight: '300px' }}
            >
                <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/aufv8xB3aNI" 
                title="Creation Of Adam - Interactive Painting"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                ></iframe>
            </div>
            </section>
      </div>
    </main>
  );
}

