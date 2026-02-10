import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Link } from "wouter";
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
            <h1 className="text-2xl md:text-4xl font-display uppercase tracking-[0.2em] text-white">
              About The Artist
            </h1>
            
            <div className="space-y-6 text-neutral-400 font-sans leading-relaxed tracking-wide text-sm md:text-base">
              <p>
                Nyra Vale is a singer, songwriter, and voice artist from Texas who believes the best music and the best characters have one thing in common - they tell the truth.
              </p>
              <p>
                Her path to the mic began with a love of language, sharpened through a liberal arts degree in English, and a two-year singing scholarship in the United Kingdom that broadened her sound, her perspective, and her artistic ambition. Today, she writes and performs her own music, collaborates with fellow artists, and brings characters to life through voice work for digital content.
              </p>
              
              <div className="pt-6">
                <p className="text-white font-display uppercase tracking-widest mb-6 text-sm">
                  Got a project, a collaboration?
                </p>
                <Link href="/contact">
                  <a className="inline-block border border-neutral-700 px-8 py-4 text-xs font-display uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors">
                    Get in touch →
                  </a>
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
