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

export default function SpaceImpactPage() {
  return (
    // MAIN CONTAINER
    <main className={`${inter.className} fixed inset-0 w-full h-full bg-white`}>
      
      <WaterCursor />

      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/bgimage2.png" 
          alt="Space Impact Background"
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
              Space Impact: A Modern Revival
            </h1>
            
            {/* EMPTY SPACER DIV */}
            <div className="h-[25px]"></div>

            {/* SECTION: PROJECT DESCRIPTION */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Project Description
              </h2>
              <p>
                Space Impact is a modern revival of a classic game that I remember playing on my grandfather's Nokia 3310. The concept revolves around nostalgia, bringing back fond memories of simpler times while enhancing the experience with improved graphics and gameplay. This project is designed for all age groups—adults who played the original can relive their memories, while younger generations can enjoy the excitement and challenges of the game.
              </p>
              <p>
                Unlike the original version on a small mobile screen with button controls, this version is designed for a laptop, offering a larger screen and keyboard-based controls (arrow keys for movement and the spacebar for shooting). The enhanced graphics and gameplay aim to provide a more immersive and visually appealing experience.
              </p>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: CONTEXT AND AUDIENCE */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Context and Audience
              </h2>
              <p>
                The game is intended for anyone who loves retro games or wants to experience a piece of gaming history reimagined. Adults who played the original can enjoy the nostalgia, while younger players can appreciate the engaging gameplay and challenges. By transitioning the game from a mobile device to a laptop, it not only broadens accessibility but also significantly improves the visual and interactive aspects of the experience.
              </p>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: USER EXPERIENCE */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                User Experience
              </h2>
              <p>
                Players will experience Space Impact on a laptop, where they can control the spaceship using the arrow keys and shoot using the spacebar. The game offers a scrolling background that creates a dynamic sense of motion and progression. The graphics and sound effects are designed to captivate the player and enhance their immersion, making it an enjoyable journey through space battles and challenging levels.
              </p>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: DEVELOPMENT PROCESS */}
            <section className="space-y-12">
              <h2 className="text-3xl px-4">
                Development Process
              </h2>
              
              {/* Subsection: Graphics */}
              <div>
                <h3 className="text-xl mb-6">Initial Stages: Graphics and Sprites</h3>
                <p>
                  The first step in development was collecting graphics and sprites from PNG Wing. To create the scrolling background, I edited a space image by splitting it in half and mirroring the halves to ensure seamless movement. This approach avoided distortion and maintained a continuous space-themed visual. Sound effects were gathered from Pixabay Music to add an auditory dimension.
                </p>
              </div>

              {/* Subsection: Coding */}
              <div>
                <h3 className="text-xl mb-6">Coding the Interface</h3>
                <p>
                  The coding process began with building the game interface and making the spaceship responsive to arrow key inputs. I implemented a Bullet class for shooting and an Enemy class to introduce adversaries. I chose to manually code the collision detection logic as a learning exercise rather than using external libraries.
                </p>
              </div>

              {/* Subsection: Enhancements */}
              <div>
                <h3 className="text-xl mb-6">Enhancements and Aesthetics</h3>
                <p>
                  Based on peer feedback, I added multiple levels where difficulty increases as the score rises. I introduced an Enemy Bullet class with a unique arc trajectory and a final Boss Battle. To polish the look, I added start/end screens, custom fonts, brighter bullet visibility, and a fullscreen mode for enhanced immersion.
                </p>
              </div>

              {/* Subsection: Challenges */}
              <div>
                <h3 className="text-xl mb-6">Challenges and Learning</h3>
                <p>
                  One of the biggest challenges was implementing collision detection without external libraries, which required a thorough understanding of game physics. Balancing difficulty levels was also key. This project taught me how coding can transform creative ideas into interactive media, blending technical and artistic skills.
                </p>
              </div>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: FINAL DOCUMENTATION */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Final Documentation
              </h2>
              <div className="space-y-6 px-4 md:px-12 py-8 bg-white/40 backdrop-blur-sm rounded-xl">
                <p>• A scrolling space background</p>
                <p>• Player-controlled spaceship with shooting mechanics</p>
                <p>• Enemy ships and bullets with collision detection</p>
                <p>• Multiple levels with increasing difficulty</p>
                <p>• A boss battle as the game’s finale</p>
                <p>• Custom graphics, sound effects, and music</p>
              </div>
            </section>

            {/* SECTION: LINKS */}
            <section className="space-y-4 pt-8">
              <div className="flex flex-col items-center gap-4">
                  <span className="text-xl pb-1">Code Repository</span>
                  <a 
                    href="https://editor.p5js.org/Yash.r/sketches/pKL-UWgJO" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg lowercase hover:text-gray-800 transition-all break-all"
                  >
                    https://editor.p5js.org/Yash.r/sketches/pKL-UWgJO
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
          <div 
              className="w-full bg-black/5 shadow-2xl relative rounded-sm overflow-hidden border border-white/50"
              style={{ aspectRatio: '16/9', minHeight: '300px' }}
          >
              <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/G70OxbCB65o" 
              title="Space Impact: A Modern Revival Demo"
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