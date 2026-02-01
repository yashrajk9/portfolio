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

export default function VirtualInstrumentPage() {
  return (
    // MAIN CONTAINER
    <main className={`${inter.className} fixed inset-0 w-full h-full bg-white`}>
      
      <WaterCursor />

      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/bgimage2.png" 
          alt="Virtual Instrument Background"
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
          
          {/* FORCE GRAY COLOR FIX */}
          <div className="space-y-16 !text-gray-100 uppercase tracking-widest font-light leading-[3rem]">
            
            {/* TITLE */}
            <h1 className="text-5xl md:text-7xl mb-20 tracking-widest">
              Virtual Musical Instrument
            </h1>
            
            {/* EMPTY SPACER DIV */}
            <div className="h-[25px]"></div>

            {/* SECTION: OVERVIEW */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Overview
              </h2>
              <p>
                This project aimed to explore the intersection of technology, interactivity, and art by creating a virtual musical instrument that integrates real-time webcam interaction and sound synthesis. Using the ml5.js library's Handpose model for gesture recognition and Tone.js for sound generation, the project evolved from a simple virtual instrument concept into an immersive experience inspired by Van Gogh’s Starry Night.
              </p>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: INITIAL CONCEPT */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Initial Concept
              </h2>
              <p>
                The initial idea was to create a virtual instrument where the interaction would be driven by webcam feed. I utilized ml5.js’s Handpose model to detect and track hand movements, enabling gesture-based interaction. For sound, I incorporated Tone.js to generate piano notes.
              </p>
              <p>To expand the scope, I developed two instruments:</p>
              
              {/* Instrument Details Block */}
              <div className="space-y-6 px-4 md:px-12 py-8 bg-white/40 backdrop-blur-sm rounded-xl text-left">
                <p>
                  <span className="font-bold">Piano:</span> Synthesized using Tone.js.
                </p>
                <p>
                  <span className="font-bold">Harp:</span> For this, I downloaded harp notes manually, as Tone.js does not natively support harp sounds.
                </p>
              </div>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: FEEDBACK */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Feedback and Iterative Development
              </h2>
              <div>
                <h3 className="text-xl mb-6">First Feedback Session </h3>
                <p>
                  The first feedback highlighted the lack of a narrative arc in my project. I was encouraged to design an immersive experience that would captivate users and encourage prolonged interaction. This insight led me to completely rethink the project’s design.
                </p>
              </div>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: FINAL CONCEPT */}
            <section className="space-y-12">
              <h2 className="text-3xl px-4">
                Final Concept
              </h2>
              <p>
                Inspired by the feedback, I incorporated Van Gogh’s Starry Night into the project to add an engaging narrative and visual component. The final design became:
              </p>

              {/* Concepts Block */}
              <div className="space-y-8 px-4 md:px-12 py-8 bg-white/40 backdrop-blur-sm rounded-xl text-left">
                <div>
                  <h3 className="text-xl mb-4 font-normal text-center">Interactive Gameplay</h3>
                  <p className="text-center">
                    The user plays the notes of Twinkle Twinkle Little Star, which appear alternately on the left and right sides of the screen. By making a wiping gesture, users interact with the webcam feed to hit the notes.
                  </p>
                </div>
                <hr className="border-white/30" />
                <div>
                  <h3 className="text-xl mb-4 font-normal text-center">Immersive Art Development</h3>
                  <p className="text-center">
                     With each note played, the Starry Night painting in the background begins to materialize, creating a sense of achievement and progress. This design gave users the impression of "painting" the artwork through music and interaction.
                  </p>
                </div>
              </div>
            </section>

            {/* SECTION: LINKS */}
            <section className="space-y-4 pt-8 pb-20">
              <div className="flex flex-col items-center gap-4">
                  <span className="text-xl pb-1">Project Link</span>
                  <a 
                    href="https://editor.p5js.org/Yash.r/sketches/mrWrwnkAE" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg lowercase hover:text-gray-800 transition-all break-all"
                  >
                    https://editor.p5js.org/Yash.r/sketches/mrWrwnkAE
                  </a>
              </div>
            </section>

          </div>
          
        </div>
      </div>
    </main>
  );
}