import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Play, Pause, Mic } from "lucide-react";
import audioBg from "@/assets/audio-bg.png";

export default function MusicVoice() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 md:pt-40 px-4 md:px-12 pb-20 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-2xl md:text-4xl font-display tracking-[0.2em] text-white uppercase mb-4">
            Music & Voice
          </h1>
          <p className="text-neutral-500 font-sans tracking-widest uppercase text-xs md:text-sm">
            Singing • Voice Over
          </p>
        </motion.div>

        {/* Featured Audio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {/* Audio Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-neutral-900/50 border border-neutral-800 p-6 md:p-8 flex flex-col gap-6"
            >
              <div className="aspect-video w-full bg-black relative overflow-hidden group cursor-pointer">
                <img src={audioBg} alt="Waveform" className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display text-white tracking-widest uppercase mb-2">Voice Acting</h3>
                <p className="text-xs text-neutral-500 font-sans tracking-wide">SINGING AUDITION</p>
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
                 <div className="absolute inset-0 bg-neutral-900 flex items-center justify-center">
                    <Mic className="w-12 h-12 text-neutral-700" />
                 </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-white fill-white ml-1" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-display text-white tracking-widest uppercase mb-2">Commercial Demo Reel</h3>
                <p className="text-xs text-neutral-500 font-sans tracking-wide">VOICE OVER • NARRATION</p>
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

      </main>
    </div>
  );
}
