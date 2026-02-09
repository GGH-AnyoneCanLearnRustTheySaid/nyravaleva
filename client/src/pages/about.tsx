import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import portraitImage from "@/assets/about-portrait.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 md:pt-40 px-4 md:px-12 pb-20 flex flex-col items-center">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[3/4] relative bg-neutral-900 overflow-hidden"
          >
            <img 
              src={portraitImage} 
              alt="Portrait of the artist" 
              className="w-full h-full object-cover opacity-80"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h1 className="text-3xl md:text-5xl font-display uppercase tracking-wide text-white">
              About The Artist
            </h1>
            
            <div className="space-y-6 text-neutral-400 font-sans leading-relaxed tracking-wide text-sm md:text-base">
              <p>
                KB Audio is a boutique sound design and composition studio focused on creating immersive auditory experiences for film, television, and interactive media.
              </p>
              <p>
                With a background in classical composition and modern electronic synthesis, the work bridges the gap between organic instrumentation and digital textures, crafting soundscapes that are both emotionally resonant and technically precise.
              </p>
              <p>
                Every project is approached with a unique sonic identity, ensuring that the audio not only supports the visual narrative but elevates it to new heights.
              </p>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
