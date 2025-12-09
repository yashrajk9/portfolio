'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, Play, Code, FileText, X } from 'lucide-react';

// --- YOUR DATA GOES HERE ---
// Edit these lists to update your content without touching code.

const PROJECTS = [
  {
    id: 1,
    title: "The Louvre Experience",
    role: "Creative Technologist",
    desc: "An interactive installation making intangible art tangible for youth audiences.",
    tech: ["p5.js", "WebGL", "Node.js"],
    impact: "Engaged 5,000+ visitors",
    // In a real scenario, put your actual image path here like '/project1.jpg'
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "CDN Performance Engine",
    role: "Data Scientist",
    desc: "Machine learning model analyzing latency and throughput for global content delivery.",
    tech: ["Python", "Pandas", "Scikit-Learn"],
    impact: "Optimized routing by 15%",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Generative Bedouin Life",
    role: "AI Artist",
    desc: "A series exploring historical reconstruction using diffusion models.",
    tech: ["Stable Diffusion", "Midjourney", "RunwayML"],
    impact: "Featured in Digital Art Weekly",
    image: "https://images.unsplash.com/photo-1542259681-d2a33c09bb79?q=80&w=800&auto=format&fit=crop"
  }
];

const FILMS = [
  {
    id: 1,
    title: "Echoes of King David",
    genre: "Historical / AI",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ", // REPLACE THIS with your video embed link
    prompt: "Cinematic shot, wide angle, King David playing a harp in the desert, golden hour lighting, 8k resolution, hyperrealistic --ar 16:9"
  },
  {
    id: 2,
    title: "Neon Arabia",
    genre: "Sci-Fi Short",
    videoLink: "https://www.youtube.com/embed/dQw4w9WgXcQ", // REPLACE THIS with your video embed link
    prompt: "Cyberpunk diverse city, middle eastern architecture mixed with neon lights, flying cars, rainy night, blade runner style --v 5"
  }
];

// --- COMPONENTS ---

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'projects' | 'films'>('projects');
  const [selectedProject, setSelectedProject] = useState<typeof PROJECTS[0] | null>(null);

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-200 selection:bg-white selection:text-black">
      
      {/* 1. HEADER SECTION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter">
            YOUR NAME<span className="text-neutral-500">.XYZ</span>
          </div>
          
          <div className="flex gap-4">
             {/* Replace '#' with your actual links */}
            <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:you@example.com" className="hover:text-white transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white to-neutral-600 bg-clip-text text-transparent">
            Digital Architect. <br />
            Visual Storyteller.
          </h1>
          <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
            I bridge the gap between complex engineering and compelling narrative. 
            Currently building AI-driven creative tools and exploring cinematic history.
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="mt-16 flex border-b border-white/10">
          <button 
            onClick={() => setActiveTab('projects')}
            className={`pb-4 px-4 text-sm font-medium transition-all relative ${activeTab === 'projects' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            CREATIVE PROJECTS
            {activeTab === 'projects' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>
          <button 
            onClick={() => setActiveTab('films')}
            className={`pb-4 px-4 text-sm font-medium transition-all relative ${activeTab === 'films' ? 'text-white' : 'text-neutral-500 hover:text-neutral-300'}`}
          >
            FILM & CINEMATOGRAPHY
            {activeTab === 'films' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-white" />}
          </button>
        </div>
      </section>

      {/* 3. CONTENT AREA */}
      <section className="px-6 pb-32 max-w-5xl mx-auto min-h-[50vh]">
        <AnimatePresence mode="wait">
          
          {/* PROJECTS TAB */}
          {activeTab === 'projects' && (
            <motion.div 
              key="projects"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {PROJECTS.map((project) => (
                <div 
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-neutral-900/50 border border-white/5 hover:border-white/20 transition-all duration-300 overflow-hidden rounded-lg"
                >
                  {/* Image Area */}
                  <div className="h-48 bg-neutral-800 overflow-hidden relative">
                     <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                  </div>
                  {/* Text Area */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-neutral-500 uppercase">{project.role}</span>
                        <Code size={16} className="text-neutral-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{project.title}</h3>
                    <p className="text-neutral-400 text-sm line-clamp-2">{project.desc}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 bg-white/5 rounded text-neutral-400">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* FILMS TAB */}
          {activeTab === 'films' && (
            <motion.div 
              key="films"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="space-y-12"
            >
              {FILMS.map((film) => (
                <div key={film.id} className="bg-neutral-900/30 border border-white/5 rounded-xl overflow-hidden">
                  <div className="aspect-video w-full bg-black relative">
                    {/* VIDEO EMBED */}
                    <iframe 
                      src={film.videoLink} 
                      className="w-full h-full absolute top-0 left-0" 
                      title={film.title} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6 md:p-8">
                    <div className="flex items-baseline justify-between mb-4">
                        <h2 className="text-2xl font-bold">{film.title}</h2>
                        <span className="text-xs font-mono text-neutral-500 border border-neutral-800 px-2 py-1 rounded-full">{film.genre}</span>
                    </div>
                    
                    {/* THE PROMPT SECTION */}
                    <div className="bg-black/40 p-4 rounded-lg border-l-2 border-purple-500">
                        <div className="flex items-center gap-2 mb-2 text-purple-400 text-xs font-bold uppercase tracking-wider">
                            <Play size={12} /> Gen AI Prompt
                        </div>
                        <p className="font-mono text-sm text-neutral-300 italic">
                            "{film.prompt}"
                        </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </section>

      {/* 4. MODAL FOR PROJECT DETAILS */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className="bg-neutral-900 border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-xl p-6 md:p-10 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)} 
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                <span className="text-purple-400 font-mono text-sm uppercase tracking-wider">{selectedProject.role}</span>
                <h2 className="text-3xl font-bold mt-2">{selectedProject.title}</h2>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-lg font-medium text-white mb-2">The Concept</h3>
                <p className="text-neutral-400 mb-6">{selectedProject.desc}</p>
                
                <h3 className="text-lg font-medium text-white mb-2">Technical Implementation</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                   {selectedProject.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-neutral-300">{t}</span>
                   ))}
                </div>

                <div className="bg-green-900/20 border border-green-500/20 p-4 rounded-lg">
                    <h4 className="text-green-400 text-sm font-bold uppercase mb-1">Impact</h4>
                    <p className="text-green-100/80">{selectedProject.impact}</p>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}