// // import './globals.css'
// // import type { Metadata } from 'next'
// // import { Inter, Parisienne } from 'next/font/google'

// // // Load the standard font
// // const inter = Inter({ 
// //   subsets: ['latin'], 
// //   variable: '--font-inter'
// // })

// // // Load the script font for the signature
// // const parisienne = Parisienne({ 
// //   weight: '400',
// //   subsets: ['latin'],
// //   variable: '--font-parisienne'
// // })

// // export const metadata: Metadata = {
// //   title: 'Yash Raj',
// //   description: 'Portfolio of Yash Raj, spanning creative projects and cinematography.',
// // }

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en" className={`${inter.variable} ${parisienne.variable}`}>
// //       <body className={inter.className}>{children}</body>
// //     </html>
// //   )
// // }







// // NEW 
// // import './globals.css'
// // import type { Metadata } from 'next'
// // import { Inter, Parisienne } from 'next/font/google'

// // // Load the standard font
// // const inter = Inter({ 
// //   subsets: ['latin'], 
// //   variable: '--font-inter'
// // })

// // // Load the script font for the signature
// // const parisienne = Parisienne({ 
// //   weight: '400',
// //   subsets: ['latin'],
// //   variable: '--font-parisienne'
// // })

// // export const metadata: Metadata = {
// //   title: 'Yash Raj',
// //   description: 'Portfolio of Yash Raj, spanning creative projects and cinematography.',
// // }

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en" className={`${inter.variable} ${parisienne.variable}`}>
// //       <body className={inter.className}>
        
// //         {/* LAYOUT WRAPPER: Creates a side-by-side layout */}
// //         <div className="flex h-screen overflow-hidden">
          
// //           {/* SIDEBAR */}
// //           {/* shrink-0 prevents it from getting squished */}
// //           <nav className="w-64 bg-white shrink-0 z-50 flex flex-col p-5">
// //              {/* TEMPORARY: Text to prove it's visible */}
// //              <h1 className="text-black font-bold">MY</h1>
// //           </nav>

// //           {/* MAIN CONTENT WRAPPER */}
// //           {/* flex-1 makes it fill the remaining screen width */}
// //           <div className="flex-1 relative overflow-hidden">
// //             {children}
// //           </div>
          
// //         </div>

// //       </body>
// //     </html>
// //   )
// // }




// // 1. We import Pinyon_Script which matches your image style better
// import { Inter, Pinyon_Script } from 'next/font/google'
// import './globals.css'
// import type { Metadata } from 'next'
// import WaterCursor from './components/WaterCursor'

// const inter = Inter({ 
//   subsets: ['latin'], 
//   variable: '--font-inter' 
// })

// // 2. Configure the new script font
// const pinyon = Pinyon_Script({ 
//   weight: '400', 
//   subsets: ['latin'], 
//   variable: '--font-pinyon' 
// })


// export const metadata: Metadata = {
//   title: 'Yash Raj',
//   description: 'Portfolio of Yash Raj',
// }

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en" className={`${inter.variable} ${parisienne.variable}`}>
// //       <body className={inter.className}>
        
        
// //         {/* LAYOUT WRAPPER */}
// //         {/* bg-transparent: Allows the page's video to show through the gaps */}
// //         <div className="flex h-screen overflow-hidden relative">
          
// //           {/* SIDEBAR */}
// //           {/* ml-8: Creates the gap on the left */}
// //           <nav className="absolute left-[100px] inset-y-0 w-64 bg-blue-500 shadow-2xl z-50 flex flex-col">

// //             <div className="flex-1 flex items-center justify-center">
// //               <span className="text-7xl font-extrabold">Y</span>
// //             </div>
            
// //           </nav>


// //           {/* MAIN CONTENT AREA */}
          

// //           <div className="flex-1 relative overflow-hidden">
// //             {children}
// //           </div>
          
// //         </div>

// //       </body>
// //     </html>
// //   )
// // }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className={`${inter.variable} ${pinyon.variable}`}>
//       <body className={inter.className}>
        
//         {/* --- THE INDESTRUCTIBLE BLUE RECTANGLE --- */}
//         {/* position: fixed -> Sticks to the screen, ignores all other elements */}
//         {/* zIndex: 9999 -> Forces it on top of EVERYTHING */}
//         <div 
//           style={{
//             // position: 'fixed',
//             // top: 0,
//             // bottom: 0,
//             // left: '100px', /* Adjust this to move left/right */
//             // width: '150px',
//             // backgroundColor: 'white', /* Forces blue color without relying on Tailwind */
//             // zIndex: 9999
//             position: 'fixed',
//             top: 0,
//             bottom: 0,
//             left: '100px',
//             width: '150px',
//             backgroundColor: 'white',
//             zIndex: 99999,
//             /* 3. FLEXBOX ALIGNMENT MAGIC STARTS HERE */
//             display: 'flex',           // Turns on the layout engine
//             flexDirection: 'column',   // Stacks items vertically
//             alignItems: 'center',      // Centers items Horizontally (Left/Right)
//             paddingTop: '30px',        // Pushes content down from the very top
//             /* Optional: Add a subtle shadow if you want it to pop */
//             boxShadow: '0 4px 30px rgba(0,0,0,0.15)'
//           }}
//         >
//              {/* Optional: Text inside to confirm it exists
//              <h1 className="text-white p-80">YR</h1> */}
//             <h1 className={`${pinyon.className} text-[70px] text-black`}>
//                YR
//             </h1>
//         </div>

//         {/* --- MAIN APP CONTENT --- */}
//         <div className="relative">
//             {children}
//         </div>
//         <WaterCursor /> 

//       </body>
//     </html>
//   )
// }


import { Inter, Pinyon_Script } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import WaterCursor from './components/WaterCursor'
// 1. Import your new animated Sidebar
import Sidebar from './components/Sidebar' 

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
})

const pinyon = Pinyon_Script({ 
  weight: '400', 
  subsets: ['latin'], 
  variable: '--font-pinyon' 
})

export const metadata: Metadata = {
  title: 'Yash Raj',
  description: 'Portfolio of Yash Raj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${pinyon.variable}`}>
      <body className={inter.className}>
        
        {/* REPLACED: The raw div is gone, now we use the animated component */}
        <Sidebar />

        {/* --- MAIN APP CONTENT --- */}
        <div className="relative">
            {children}
        </div>
        
        <WaterCursor /> 

      </body>
    </html>
  )
}