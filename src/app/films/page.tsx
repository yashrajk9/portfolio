// 'use client';

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Inter } from 'next/font/google';

// // Load Font
// const inter = Inter({ 
//   subsets: ['latin'],
//   weight: ['300', '400', '500', '600'], 
// });

// const projects = [
//   {
//     id: 1,
//     title: 'Who Killed Sylvestor ?',
//     description: 'A short fictional scene built around performance, presence, and restraint. With only two actors and a single moment, this scene study explores how meaning emerges through dialogue, silence, and shared space.',
//     type: 'video', 
//     videoUrl: 'https://www.youtube.com/embed/vXDqs2YE1N8', 
//     link: '#' 
//   },
//   {
//     id: 2,
//     title: 'CONVERSATION WITH ADAM',
//     category: 'Interactive Installation',
//     image: '/project2.jpg',
//     link: '/projects/adam'
//   },
//   {
//     id: 3,
//     title: 'THE LYRE OF THIRST',
//     category: 'Interactive Installation',
//     image: '/project3.png',
//     link: 'https://desert.nyuadim.com/lyreofthirst/' 
//   },
//   {
//     id: 4,
//     title: 'SPACE IMPACT',
//     category: 'Game Design',
//     image: '/project4.jpg',
//     link: '/projects/space-impact'
//   },
//   {
//     id: 5,
//     title: 'AIRKEYS',
//     category: 'Interactive Installation',
//     image: '/project5.jpg',
//     link: '/projects/airkeys'
//   },
// ];

// export default function ProjectsPage() {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const maxIndex = projects.length - 1;

//   const nextSlide = () => {
//     if (currentIndex < maxIndex) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const prevSlide = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   return (
//     <main className={`${inter.className} min-h-screen w-full relative overflow-hidden flex flex-col justify-center`}>
      
//       {/* BACKGROUND IMAGE */}
//       <div className="fixed inset-0 w-full h-full z-0">
//         <Image
//           src="/bgimage.png" 
//           alt="Background"
//           fill
//           className="object-cover"
//           priority 
//         />
//       </div>

//       {/* CONTENT CONTAINER */}
//       <div className="relative z-10 ml-[350px] md:ml-[350px] w-[calc(100%-350px)] h-full flex flex-col justify-start items-center px-12 pt-32">
        
//         {/* CAROUSEL CONTAINER */}
//         {/* CHANGED: max-w-[700px] -> max-w-[500px] to fix stretching */}
//         <div className="w-full max-w-[700px]">
            
//             {/* CARDS WINDOW */}
//             <div className="overflow-hidden mb-8">
//                 <motion.div 
//                     className="flex gap-10 px-0"
//                     initial={false}
//                     animate={{ 
//                       x: `-${currentIndex * 100}%`, 
//                     }}
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                 >
//                     {projects.map((project) => (
//                         <motion.div
//                             key={project.id}
//                             className="min-w-full flex-shrink-0 px-4" 
//                         >
//                             {project.type === 'video' ? (
//                                 <div className="block h-full w-[700px]">
//                                     <ProjectCardContent project={project} />
//                                 </div>
//                             ) : (
//                                 <Link 
//                                     href={project.link} 
//                                     className="block group h-full no-underline"
//                                     style={{ color: 'inherit' }}
//                                     target={project.link.startsWith('http') ? '_blank' : undefined}
//                                     rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined} 
//                                 >
//                                     <ProjectCardContent project={project} />
//                                 </Link>
//                             )}
//                         </motion.div>
//                     ))}
//                 </motion.div>
//             </div>

//             {/* ARROWS BELOW - CENTERED */}
//             <div className="flex items-center justify-center gap-[50px] mt-4">
                
//                 {/* LEFT ARROW */}
//                 <button 
//                     onClick={prevSlide}
//                     disabled={currentIndex === 0}
//                     className={`group flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border-none outline-none transition-all duration-300 ${
//                       currentIndex === 0 
//                         ? 'opacity-40 cursor-not-allowed' 
//                         : 'opacity-100 hover:shadow-xl hover:scale-105'
//                     }`}
//                 >
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M19 12H5M12 19l-7-7 7-7"/>
//                     </svg>
//                     <span className="text-sm font-medium text-black">Previous   </span>
//                 </button>

//                 {/* POSITION INDICATOR */}
//                 <div className="flex gap-2">
//                     {Array.from({ length: projects.length }).map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentIndex(index)}
//                             className={`transition-all duration-300 rounded-full border-none ${
//                                 index === currentIndex 
//                                 ? 'bg-black w-8 h-2' 
//                                 : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
//                             }`}
//                         />
//                     ))}
//                 </div>

//                 {/* RIGHT ARROW */}
//                 <button 
//                     onClick={nextSlide}
//                     disabled={currentIndex === maxIndex}
//                     className={`group flex items-center gap-2 px-6 py-3 rounded-full bg-white shadow-lg border-none outline-none transition-all duration-300 ${
//                       currentIndex === maxIndex 
//                         ? 'opacity-40 cursor-not-allowed' 
//                         : 'opacity-100 hover:shadow-xl hover:scale-105'
//                     }`}
//                 >
//                     <span className="text-sm font-medium text-black">Next</span>
//                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                         <path d="M5 12h14M12 5l7 7-7 7"/>
//                     </svg>
//                 </button>

//             </div>

//         </div>

//       </div>
//     </main>
//   );
// }

// function ProjectCardContent({ project }) {
//     return (
//         <div 
//             // FIXED HEIGHT: Increased slightly to 500px to accommodate wrapped text gracefully
//             className="flex flex-col h-[500px] bg-white rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500"
//             style={{ backgroundColor: '#ffffff' }}
//         >
            
//             {/* MEDIA SECTION */}
//             {/* CHANGED: h-[280px] is roughly 16:9 for a 500px width card. */}
//             <div className="p-5 pb-0 h-[280px] shrink-0 w-full flex flex-col">
//                 <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-black">
//                     {project.type === 'video' ? (
//                         <iframe
//                             className="w-full h-full"
//                             src={project.videoUrl}
//                             title={project.title}
//                             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                             allowFullScreen
//                             style={{ border: 0 }}
//                         />
//                     ) : (
//                         <Image
//                             src={project.image}
//                             alt={project.title}
//                             fill
//                             className="object-cover transition-transform duration-700 group-hover:scale-105"
//                         />
//                     )}
//                 </div>
//             </div>

//             {/* TEXT SECTION */}
//             {/* Added overflow-y-auto in case text is very long, though line-clamp usually handles it */}
//             <div 
//                 className="flex flex-col justify-start items-start text-left px-8 py-6 flex-1 bg-white w-full"
//                 style={{ backgroundColor: '#ffffff' }}
//             >
//                 <h2 className="text-black text-xl font-semibold tracking-wide mb-2 w-full">
//                     {project.title}
//                 </h2>

//                 {project.description ? (
//                     // CHANGED: added 'whitespace-normal' and 'break-words' to force wrapping
//                     <p className="text-gray-500 text-xs font-normal leading-relaxed w-full whitespace-normal break-words">
//                         {project.description}
//                     </p>
//                 ) : (
//                     <p className="text-gray-500 text-xs tracking-[0.2em] font-medium uppercase w-full">
//                         {project.category}
//                     </p>
//                 )}
                
//                 {/* Decorative bar */}
//                 <div className="w-8 h-[2px] bg-gray-300 mt-4 group-hover:bg-black group-hover:w-16 transition-all duration-300 self-start" />
//             </div>

//         </div>
//     );
// }

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
    title: 'Who Killed Sylvestor ?',
    description: 'A short fictional scene built around performance, presence, and restraint. With only two actors and a single moment, this scene study explores how meaning emerges through dialogue, silence, and shared space.',
    type: 'video', 
    videoUrl: 'https://www.youtube.com/embed/vXDqs2YE1N8', 
    link: '#' 
  },
  {
    id: 2,
    title: 'The Ride',
    description: 'A three to four -minute, intimate portrait: I follow one person through small, honest moments that reveal more than words. Shot on iPhone for my film class, this short documentary finds meaning in gesture, rhythm and the quiet things that hold a life together.',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/ax1xqkKvVjg',
    link: '#'
  },
  {
    id: 3,
    title: 'A to B',
    description: 'The Director will choose two points in public space, A and B. The goal of the exercise is to make a tracking shot from A to B in public space, with body movement only (no zooms) and to comment the shot out loud. The aim is to stage a camera movement, and to work on the relation of what is filmed and the inner state of the film maker. How does one affect the other? How can we use the camera to represent our inner state, how does the frame influence our inner stream of consciousness? By screening these exercises students will get to know each other and decode their own inner voices.',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/kWa-dXy0CH0',
    link: '#'
  },
  {
    id: 4,
    title: 'Dose of Reality',
    description: 'A sequence of still photographs that relies on the tension between knowing and not knowing. Shot on smartphone, this Photo Roman uses dramatic irony to let the viewer read beyond the surface of each image.',
    type: 'video',
    videoUrl: 'https://www.youtube.com/embed/Vc50RFQCiAA',
    link: '#'
  }
];

export default function ProjectsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const maxIndex = projects.length - 1;

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
    <main className={`${inter.className} min-h-screen w-full relative overflow-hidden flex flex-col justify-center uppercase`}>
      
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
      <div className="relative z-10 ml-[350px] md:ml-[350px] w-[calc(100%-350px)] h-full flex flex-col justify-start items-center px-12 pt-32">
        
        {/* CAROUSEL CONTAINER */}
        <div className="w-full max-w-[700px]">
            
            {/* CARDS WINDOW */}
            <div className="overflow-hidden mb-8">
                <motion.div 
                    className="flex gap-10 px-0"
                    initial={false}
                    animate={{ 
                      x: `-${currentIndex * 100}%`, 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="min-w-full flex-shrink-0 px-4" 
                        >
                            <div className="block h-full w-[700px]">
                                <ProjectCardContent project={project} />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* ARROWS BELOW - CENTERED */}
            <div className="flex items-center justify-center gap-[50px] mt-4">
                
                {/* LEFT ARROW */}
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
                    {Array.from({ length: projects.length }).map((_, index) => (
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

function ProjectCardContent({ project }) {
    return (
        <div 
            className="flex flex-col h-[500px] bg-white rounded-[28px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-500"
            style={{ backgroundColor: '#ffffff' }}
        >
            
            {/* MEDIA SECTION */}
            <div className="p-5 pb-0 h-[280px] shrink-0 w-full flex flex-col">
                <div className="relative h-full w-full overflow-hidden rounded-[20px] bg-black">
                    <iframe
                        className="w-full h-full"
                        src={project.videoUrl}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ border: 0 }}
                    />
                </div>
            </div>

            {/* TEXT SECTION */}
            <div 
                className="flex flex-col justify-start items-center text-center px-8 py-6 flex-1 bg-white w-full overflow-y-auto"
                style={{ backgroundColor: '#ffffff' }}
            >
                <h2 className="text-black text-xl font-semibold tracking-wide mb-2 w-full uppercase">
                    {project.title}
                </h2>

                <p className="text-gray-500 text-xs font-normal leading-relaxed w-full whitespace-normal break-words uppercase">
                    {project.description}
                </p>
                
                {/* Decorative bar */}
                <div className="w-8 h-[2px] bg-gray-300 mt-4 group-hover:bg-black group-hover:w-16 transition-all duration-300" />
            </div>

        </div>
    );
}