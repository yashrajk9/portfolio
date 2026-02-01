// 'use client';

// import { motion } from 'framer-motion';
// // We re-import the font here so we can use it in the client component
// import { Pinyon_Script } from 'next/font/google';

// const pinyon = Pinyon_Script({ 
//   weight: '400', 
//   subsets: ['latin'], 
// });

// export default function Sidebar() {
//   return (
//     <motion.div 
//       // 1. Box Animation: Fade in + Slide down slightly
//       initial={{ opacity: 0, y: -50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 1.5, ease: "easeOut" }}
      
//       style={{
//         position: 'fixed',
//         top: 0,
//         bottom: 0,
//         left: '100px',
//         width: '150px',
//         backgroundColor: 'white',
//         zIndex: 99999,
//         display: 'flex',           
//         flexDirection: 'column',   
//         alignItems: 'center',      
//         paddingTop: '30px',        
//         boxShadow: '0 4px 30px rgba(0,0,0,0.15)'
//       }}
//     >
//         {/* 2. Text Animation: Staggered (starts after the box) */}
//         <motion.h1 
//            initial={{ opacity: 0, scale: 0.8 }}
//            animate={{ opacity: 1, scale: 1 }}
//            transition={{ duration: 2, ease: "easeOut", delay: 0.5 }} // delay makes it appear after the box
//            className={`${pinyon.className} text-[70px] text-black`}
//         >
//            YR
//         </motion.h1>
//     </motion.div>
//   );
// }



// -------------------------------------------WORKING-----------------------------------
'use client';

import { motion } from 'framer-motion';
import { Pinyon_Script, Inter } from 'next/font/google'; 
import Link from 'next/link';

// Load Fonts
const pinyon = Pinyon_Script({ weight: '400', subsets: ['latin'] });
const inter = Inter({ subsets: ['latin'] });

// Navigation Items
const navItems = [
  { name: 'ABOUT', href: '/about' },
  { name: 'FILMS', href: '/films' },
  { name: 'PROJECTS', href: '/projects' },
];

export default function Sidebar() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.0, ease: "easeOut" }}
      
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: '100px',
        width: '150px',
        backgroundColor: 'white',
        zIndex: 99999,
        // We remove 'display: flex' for the main container 
        // so we can use absolute positioning for the links
        boxShadow: '0 4px 30px rgba(0,0,0,0.05)'
      }}
    >
        {/* 1. LOGO (Pinned to top) */}
        <div className="w-full flex justify-center pt-10">
          <motion.h1 
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
             className={`${pinyon.className} text-[70px] text-black`}
          >
             YR
          </motion.h1>
        </div>

        {/* 2. NAVIGATION LINKS (Pinned to exact center) */}
        <div 
          className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex flex-col items-center gap-[50px]"
        >
          {navItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 + (i * 0.1) }}
            >
              <Link 
                href={item.href}
                // STYLING UPDATES:
                // text-gray-500: Changed from black to gray
                // gap-12 (on parent): Adds significant space between tabs
                // no-underline: Ensures no lines appear
                className={`
                  ${inter.className} 
                  text-black-500 
                  uppercase 
                  tracking-[0.2em] 
                  text-xs 
                  font-medium
                  hover:text-black 
                  transition-colors 
                  duration-300
                  no-underline
                `}
              >
                {item.name}
              </Link>
              
            </motion.div>
          ))}
        </div>
        {/* =============================== */}
        {/* 3. FOOTER ICONS (Pinned Bottom) */}
        {/* =============================== */}
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5, duration: 1 }}
           // REMOVED 'absolute bottom-10' from className to avoid Tailwind issues
           className="left-0 w-full flex flex-col items-center gap-[20px]"
           // ADDED inline styles to FORCE the position
           style={{
             position: 'absolute',
             bottom: '40px', // Forces it 40px from the bottom
             left: 0,
             width: '100%'
           }}
        >
           {/* THE LINE SEPARATOR */}
           {/* Changed to bg-black to be visible, standard width */}
           <div className="w-[10px] h-[10px] bg-black mb-2" />

           {/* EMAIL ICON */}
           <Link href="mailto:yr2263@nyu.edu" className="group">
             <svg 
               xmlns="http://www.w3.org/2000/svg" 
               width="40" height="40" 
               viewBox="0 0 24 24" 
               fill="none" 
               stroke="black" 
               strokeWidth="1.5"
               strokeLinecap="round" 
               strokeLinejoin="round" 
               className="text-black transition-transform duration-300 group-hover:scale-110"
             >
               <rect width="20" height="16" x="2" y="4" rx="2" />
               <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
             </svg>
           </Link>

           {/* GITHUB ICON */}
           <Link href="https://github.com/yashrajk9" className="group">
             <svg 
               xmlns="http://www.w3.org/2000/svg" 
               width="50" height="50" 
               viewBox="0 0 24 24" 
               fill="black"
               className="text-black transition-transform duration-300 group-hover:scale-110"
             >
               <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
             </svg>
           </Link>
        </motion.div>
    </motion.div>
  );
}