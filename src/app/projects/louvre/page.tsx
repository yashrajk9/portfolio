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

export default function LoveUniversalPage() {
  return (
    // MAIN CONTAINER
    <main className={`${inter.className} fixed inset-0 w-full h-full bg-white`}>
      
      <WaterCursor />

      {/* BACKGROUND IMAGE */}
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/bgimage2.png" 
          alt="Love Universal Language Background"
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
              LOVE – THE UNIVERSAL LANGUAGE
            </h1>
            
            {/* EMPTY SPACER DIV */}
            <div className="h-[25px]"></div>

            {/* SECTION: ABSTRACT */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Making the Intangible Tangible
              </h2>
              <div className="space-y-6">
                <p>
                  <strong>Abstract</strong>
                </p>
                <p>
                  Love – The Universal Language is an interactive exhibition that explores love as a sustainable, universal human experience—one that transcends time, language, and generations. Exhibited at the Louvre Museum Abu Dhabi, the project transforms love, an intangible and deeply personal emotion, into a tangible visual archive through real-time digital translation. 
                </p>
                <p>
                  By inviting participants to contribute their own stories and feelings of love, the installation converts these expressions into Morse code animations, creating a collective, evolving artwork that embodies both emotional continuity and cultural sustainability.
                </p>
              </div>
            </section>
            

            {/* IMAGE 1 INSERTION */}
            <div className="w-full bg-black/5 shadow-2xl relative rounded-sm overflow-hidden " style={{ minHeight: '400px' }}>
               <Image
                 src="/image1.jpeg"
                 alt="Exhibition Setup and Concept"
                 fill
                 className=" object-contain -rotate-90"
               />
            </div>
            
            <div className="h-[25px]"></div>


            {/* SECTION: CONCEPTUAL FRAMEWORK */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Conceptual Framework
              </h2>
              <p>
                Love is perhaps the most enduring emotion known to humanity. It is passed from generation to generation, unchanged in essence yet infinite in expression. While languages evolve, borders shift, and cultures transform, love retains its form—recognizable, powerful, and universally understood.
              </p>
              <div className="px-4 md:px-12 py-8 bg-white/40 backdrop-blur-sm rounded-xl">
                <p className="mb-4 font-semibold">This project emerged from a central question:</p>
                <p className="italic mb-6">"Can love, an emotion without physical form, be made tangible without losing its essence?"</p>
                <p>
                   The answer lies in translation—not between spoken languages, but between emotion and form. By translating personal expressions of love into Morse code—one of the earliest universal systems of communication—the project positions love as a language that exists beyond words.
                </p>
              </div>
              <p>
                 Morse code, composed of dots and dashes, becomes a visual rhythm through which emotions are rendered visible. In this transformation, love becomes something that can be seen, shared, and archived, while still retaining its intimacy and universality.
              </p>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: SUSTAINABILITY */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Sustainability and Intangibility
              </h2>
              <p>
                The project engages sustainability not through material conservation alone, but through emotional and cultural continuity.
              </p>
              <div className="space-y-6 px-4 text-left">
                <p>• <span className="font-bold">Love as a sustainable force:</span> Love survives time, geography, and generational shifts. It is endlessly renewable, carried through stories, memories, and shared experiences.</p>
                <p>• <span className="font-bold">Making the intangible tangible:</span> Participants’ emotions—often fleeting and internal—are transformed into visible digital artifacts.</p>
                <p>• <span className="font-bold">Making the tangible intangible:</span> Morse code, traditionally a functional communication system, is reimagined as an emotional and poetic visual language.</p>
              </div>
              <p>
                This dual transformation highlights sustainability as an act of preservation—not of objects, but of human experience.
              </p>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: AUDIENCE EXPERIENCE */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Audience Experience & Interaction
              </h2>
              <p>
                At the heart of Love – The Universal Language is participation. Visitors gather around the central artifact and are invited to:
              </p>
              <div className="space-y-2 px-8 py-4 border-l-2 border-white/50 text-left ml-8">
                <p>1. Scan a QR code</p>
                <p>2. Write a personal reflection, memory, or thought about love</p>
                <p>3. Witness their words translated live into Morse code animations</p>
              </div>
              <p>
                As participants submit their stories, their emotions are instantly converted into rhythmic light and motion, projected onto the exhibition surface. These animations unfold in real time, allowing participants to see their love materialize before them.
              </p>
            </section>

             {/* IMAGE 2 INSERTION */}
             <div className="w-full bg-black/5 shadow-2xl relative rounded-sm overflow-hidden " style={{ minHeight: '400px' }}>
               <Image
                 src="/image2.jpeg"
                 alt="Interaction and Morse Code Projection"
                 fill
                 className=" object-contain -rotate-90"
               />
            </div>

            <div className="h-[25px]"></div>

            {/* SECTION: THE ARCHIVE */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                The Archive as Artwork
              </h2>
              <p>
                The projected Morse code animations accumulate over time, transforming the exhibition space into a living archive. No two moments are the same. Each visitor leaves behind a trace—an emotional fingerprint—that contributes to the evolving composition.
              </p>
              <p>
                The archive reflects the diversity of love (romantic, familial, platonic, remembered, lost), the universality of emotion across cultures and languages, and the power of collective authorship in art-making. In this way, the audience is no longer a passive observer but an essential creator.
              </p>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: EDUCATIONAL DIMENSION */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Educational Dimension
              </h2>
              <p>
                Beyond its emotional impact, the project carries an educational purpose. By visualizing Morse code in an accessible and aesthetic manner, the installation introduces audiences to a historical communication system that predates modern digital language.
              </p>
              <p>
                Participants often begin to recognize patterns—dots, dashes, pauses—learning the structure of Morse code intuitively, without formal instruction. Emotion becomes the gateway to education, reinforcing the idea that learning is most powerful when rooted in personal experience.
              </p>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: INFLUENCES */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Artistic and Literary Influences
              </h2>
              <p>
                The project draws conceptual inspiration from Abū al-Ṭayyib Al-Mutanabbī, whose poetry reflects the power of silence, restraint, and unspoken emotion, and Judy Chicago, whose work emphasizes participation and collective memory.
              </p>
              <div className="px-4 md:px-12 py-8 bg-white/40 backdrop-blur-sm rounded-xl">
                 <p className="mb-4">An inscription encountered at the Louvre Abu Dhabi served as a pivotal conceptual anchor:</p>
                 <h3 className="text-2xl italic">“My enemies were deceived by my silence.”</h3>
                 <p className="mt-4 text-sm">
                   This line encapsulates the essence of non-verbal communication—the idea that what is left unsaid often carries the greatest meaning. Similarly, Morse code speaks without speaking, allowing love to exist beyond spoken language.
                 </p>
              </div>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: PHILOSOPHICAL CORE */}
            <section className="space-y-8">
              <h2 className="text-3xl px-4">
                Philosophical Core
              </h2>
              <p>
                At the center of the installation lies a shared human truth:
              </p>
              <h3 className="text-xl md:text-2xl tracking-widest font-normal">
                “Love is what prevents the tongue from speaking.”
              </h3>
              <p>
                Love often resists articulation. It lives in pauses, gestures, memories, and silence. By translating love into Morse code—an abstract, rhythmic language—the project honors this silence rather than attempting to overwrite it with words.
              </p>
            </section>

            <div className="h-[25px]"></div>

            {/* SECTION: CONCLUSION */}
            <section className="space-y-8 pb-20">
              <h2 className="text-3xl px-4">
                Conclusion
              </h2>
              <p>
                Love – The Universal Language is an exploration of emotion as archive, technology as poetry, and participation as authorship. By transforming love into a visible, shared, and sustainable form, the project bridges the gap between the intangible and the tangible, the personal and the collective, the past and the present.
              </p>
              <p>
                Exhibited within the Louvre Museum Abu Dhabi, the installation invites audiences from across the world to contribute to a growing testament of human connection—proving that while languages may differ, love remains the most universal language of all.
              </p>
            </section>

          </div>
          
        </div>
      </div>
    </main>
  );
}