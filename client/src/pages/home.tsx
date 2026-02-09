import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Play } from "lucide-react";
import { motion } from "framer-motion";
import filmImage from "@/assets/film-project.png";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<"FILM" | "ORIGINAL COMPOSITION">("FILM");

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-40 pb-20 px-4 md:px-12 flex flex-col items-center min-h-screen">
        
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center"
        >
          <h1 className="text-sm md:text-base font-display tracking-[0.2em] text-white uppercase mb-8">
            Work
          </h1>

          {/* Category Filter */}
          <div className="flex flex-col gap-2 items-center">
            <button 
              onClick={() => setActiveCategory("FILM")}
              className={`text-[10px] md:text-[11px] font-sans tracking-[0.15em] uppercase transition-all duration-300 ${activeCategory === 'FILM' ? 'text-white' : 'text-neutral-600 hover:text-neutral-400'}`}
            >
              Film
            </button>
            <button 
              onClick={() => setActiveCategory("ORIGINAL COMPOSITION")}
              className={`text-[10px] md:text-[11px] font-sans tracking-[0.15em] uppercase transition-all duration-300 ${activeCategory === 'ORIGINAL COMPOSITION' ? 'text-white' : 'text-neutral-600 hover:text-neutral-400'}`}
            >
              Original Composition
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="w-full max-w-5xl flex flex-col gap-12 md:gap-24">
          
          {/* Project Item 1 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group w-full relative aspect-video bg-neutral-900 overflow-hidden cursor-pointer"
          >
            <img 
              src={filmImage} 
              alt="Film Project" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-700"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-500 group-hover:scale-110">
                <Play className="w-6 h-6 md:w-8 md:h-8 text-black fill-black ml-1" />
              </div>
            </div>

            {/* Hover Info (Optional, fitting the style) */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-between items-end">
               <span className="text-xs tracking-[0.2em] uppercase text-white font-display">Beadwork Documentary</span>
               <span className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-sans">2024</span>
            </div>
          </motion.div>

           {/* Project Item 2 (Placeholder) */}
           <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group w-full relative aspect-video bg-neutral-900/50 overflow-hidden cursor-pointer flex items-center justify-center border border-neutral-900"
          >
             <div className="text-center">
               <span className="block text-xs tracking-[0.2em] uppercase text-neutral-700 font-display mb-2">More Work Coming Soon</span>
             </div>
          </motion.div>

        </div>

      </main>

      <footer className="w-full py-12 text-center">
        <p className="text-[10px] text-neutral-700 tracking-[0.2em] uppercase font-sans">
          &copy; {new Date().getFullYear()} KB Audio. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
