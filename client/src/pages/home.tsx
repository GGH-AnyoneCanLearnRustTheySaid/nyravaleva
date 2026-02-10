import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Play, Mic } from "lucide-react";
import heroImage from "@/assets/home-butterfly-new.jpg";
import audioBg from "@/assets/audio-bg.png";
import vaReelBg from "@/assets/va-reel-bg-new.jpg";
import vocalReelBg from "@/assets/vocal-reel-bg.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-28 pb-20 px-4 md:px-12 flex flex-col items-center min-h-screen">
        
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-3 md:mb-5 text-center max-w-3xl"
        >
          <h1 className="text-xl md:text-2xl font-display tracking-[0.1em] text-white uppercase mb-0 leading-relaxed">
            Every word comes alive
          </h1>

          {/* Latest Work Header removed */}
        </motion.div>

        {/* Projects Grid */}
        <div className="w-full max-w-5xl flex flex-col gap-12 md:gap-16">
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-1/2 mx-auto relative aspect-video bg-[#0d0d0d] overflow-hidden"
          >
            <motion.img 
              src={heroImage} 
              alt="Artistic Butterfly" 
              className="w-full h-full object-cover opacity-70"
              style={{
                maskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                maskComposite: "intersect",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent), linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
                WebkitMaskComposite: "source-in"
              }}
            />
            {/* Box Shadow Overlay for Blended Edges - Reduced opacity to avoid dimming */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_20px_#0d0d0d] pointer-events-none opacity-50" />
          </motion.div>

          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center space-y-6 px-4"
          >
             <p className="text-neutral-400 font-sans italic lowercase text-base md:text-lg leading-relaxed tracking-wide">
               <span className="capitalize">Nyra Vale</span> is a singer, songwriter, and voice artist from <span className="capitalize">Texas</span> with a simple philosophy: show up, be real, and sing like you mean it. <span className="capitalize">Whether</span> she's in the studio recording original music or voicing characters for digital content, she brings the same thing every time - all of herself.
             </p>
          </motion.div>

          {/* Featured Audio Section - Duplicated from Work Page */}
          <div className="w-full pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {/* Audio Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-neutral-900/50 border border-neutral-800 p-6 md:p-8 flex flex-col gap-6"
                >
                  <div className="aspect-video w-full bg-black relative overflow-hidden group cursor-pointer">
                    <img 
                      src={vaReelBg} 
                      alt="Waveform" 
                      className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-display text-white tracking-widest uppercase mb-2">VA Demo Reel</h3>
                  </div>
                </motion.div>

                {/* Audio Card 2 */}
                 <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-neutral-900/50 border border-neutral-800 p-6 md:p-8 flex flex-col gap-6"
                >
                  <div className="aspect-video w-full bg-black relative overflow-hidden group cursor-pointer">
                     <img 
                       src={vocalReelBg} 
                       alt="Vocal Talent Reel" 
                       className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" 
                     />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-display text-white tracking-widest uppercase mb-2">Vocal Talent Reel</h3>
                    <p className="text-xs text-neutral-500 font-sans tracking-wide">AUDITIONS • ACAPELLA</p>
                  </div>
                </motion.div>
            </div>

            {/* Tracklist */}
            <div className="w-full">
               <h2 className="text-xl font-display text-white tracking-widest uppercase mb-8 border-b border-neutral-800 pb-4">Latest Works</h2>
               
               {[1, 2, 3, 4].map((track, i) => (
                 <div key={track} className="flex items-center justify-between py-4 border-b border-neutral-800/50 group hover:bg-neutral-900/30 px-4 transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <span className="text-neutral-600 font-mono text-xs">0{track}</span>
                      <Play className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-neutral-300 font-sans tracking-wide text-sm group-hover:text-white transition-colors">Untitled Composition {track}</span>
                    </div>
                    <span className="text-neutral-600 font-mono text-xs">03:4{track}</span>
                 </div>
               ))}
            </div>
          </div>
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
