import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Play, Mic } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroImage from "@/assets/home-butterfly-v4.png";
import audioBg from "@/assets/audio-bg.png";
import demoReelThumb from "@/assets/demo-reel-thumb.png";
import { AudioPlayer } from "@/components/ui/AudioPlayer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-4 md:px-12 flex flex-col items-center min-h-screen">
        
        {/* Page Title */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 md:mb-8 text-center max-w-3xl"
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
            className="w-[94%] mx-auto relative aspect-video bg-[#0d0d0d] overflow-hidden flex items-center justify-center"
          >
            <motion.img 
              src={heroImage} 
              alt="Artistic Butterfly" 
              className="w-full h-full object-contain opacity-80"
              style={{
                maskImage: "radial-gradient(ellipse at center, black 60%, transparent 95%)",
                WebkitMaskImage: "radial-gradient(ellipse at center, black 60%, transparent 95%)"
              }}
            />
            {/* Box Shadow Overlay for Blended Edges */}
            <div className="absolute inset-0 shadow-[inset_0_0_80px_40px_#0d0d0d] pointer-events-none opacity-80" />
            
            {/* Darkened area for butterfly lower body */}
            <div 
              className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[15%] h-[25%] blur-2xl pointer-events-none opacity-80"
              style={{
                background: "radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, transparent 70%)"
              }}
            />
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

          {/* Grouped Voice Over Header and Audio Section to control spacing independently of parent gap */}
          <div className="w-full flex flex-col gap-6">
            {/* Sub-heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center w-full"
            >
              <h2 className="text-xl md:text-2xl font-display tracking-[0.1em] text-white uppercase mb-4 leading-relaxed">
                VOICE OVER
              </h2>
              
              <p className="text-xs text-neutral-500 font-sans tracking-[0.2em] uppercase mb-4">
                AVAILABLE FOR
              </p>
              
              <div className="text-neutral-400 font-sans tracking-wide text-xs md:text-sm leading-relaxed space-y-1">
                <p>Animation · Gaming · Musicals · Narration · Audiobooks</p>
              </div>
            </motion.div>

            {/* Featured Audio Section - Duplicated from Work Page */}
            <div className="w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {/* Audio Card 1 */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-neutral-900/50 border border-neutral-800 p-6 md:p-8 flex flex-col gap-6"
                >
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="aspect-video w-full bg-black relative overflow-hidden group cursor-pointer">
                        <img 
                          src={demoReelThumb} 
                          alt="VA Demo Reel Thumbnail" 
                          className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 text-white fill-white ml-1" />
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-4xl p-0 bg-black border-neutral-800 overflow-hidden">
                      <div className="aspect-video w-full">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/xpKP_Lv1BjQ?autoplay=1" 
                          title="VA Demo Reel" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen 
                          className="w-full h-full"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div>
                    <h3 className="text-lg font-display text-white tracking-widest uppercase mb-2">CHARACTER DEMO</h3>
                    <p className="text-xs text-neutral-500 font-sans tracking-wide leading-relaxed">A 90-second showcase of vocal versatility and characterisation</p>
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
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="aspect-video w-full bg-black relative overflow-hidden group cursor-pointer">
                        <img 
                          src={demoReelThumb} 
                          alt="Vocal Talent Reel Thumbnail" 
                          className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 text-white fill-white ml-1" />
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-4xl p-0 bg-black border-neutral-800 overflow-hidden">
                      <div className="aspect-video w-full">
                        <iframe 
                          width="100%" 
                          height="100%" 
                          src="https://www.youtube.com/embed/Su2-1-smRVU?autoplay=1" 
                          title="Vocal Talent Reel" 
                          frameBorder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowFullScreen 
                          className="w-full h-full"
                        />
                      </div>
                    </DialogContent>
                  </Dialog>
                  <div>
                    <h3 className="text-lg font-display text-white tracking-widest uppercase mb-2">VOCAL DEMO</h3>
                    <p className="text-xs text-neutral-500 font-sans tracking-wide leading-relaxed">Original singing performance for fan musical - bringing melody, emotion, and personality to every role • Trained vocalist, character actor.</p>
                  </div>
                </motion.div>
            </div>

            {/* Tracklist */}
            <div className="w-full">
               <h2 className="text-xl font-display text-white tracking-widest uppercase mb-2">VOCAL RANGE - ORIGINAL MUSIC</h2>
               <p className="text-xs text-neutral-500 font-sans tracking-wide leading-relaxed mb-8 border-b border-neutral-800 pb-4">Written and performed by Nyra Vale (as Alyorra)</p>
               
               {[
                 {
                   id: 1,
                   title: "Alyorra - A Sailors Story (prod meta)",
                   duration: "03:41",
                   file: "/audio/sailors-story.wav"
                 },
                 { id: 2, title: "Alyorra - Believe Me (prod.violet)", duration: "03:42", file: "/audio/believe-me.wav" },
                 { id: 3, title: "Alyorra - Ocean (prod.violet)", duration: "03:43", file: "/audio/ocean.wav" },
                 { id: 4, title: "Alyorra - Winter (prod. bstrxy)", duration: "03:44", file: "/audio/winter.wav" },
               ].map((track) => (
                 <div key={track.id} className="mb-4 last:mb-0">
                    <Dialog>
                      <DialogTrigger asChild>
                         <div className="flex items-center justify-between py-4 border-b border-neutral-800/50 group hover:bg-neutral-900/30 px-4 transition-colors cursor-pointer">
                            <div className="flex items-center gap-4">
                              <span className="text-neutral-600 font-mono text-xs">0{track.id}</span>
                              <Play className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                              <span className="text-neutral-300 font-sans tracking-wide text-sm group-hover:text-white transition-colors">{track.title}</span>
                            </div>
                            <span className="text-neutral-600 font-mono text-xs">{track.duration}</span>
                         </div>
                      </DialogTrigger>
                       <DialogContent className="sm:max-w-xl p-0 bg-transparent border-none shadow-none">
                         <AudioPlayer 
                            src={track.file} 
                            title={track.title} 
                            className="bg-black border border-neutral-800 shadow-2xl"
                         />
                       </DialogContent>
                    </Dialog>
                 </div>
               ))}
               
               <div className="w-full text-center py-6">
                 <p className="text-neutral-400 font-sans text-base font-bold italic tracking-wide">
                   Equipped with a professional home studio for fast, high-quality remote recording and delivery.
                 </p>
               </div>
            </div>
          </div>
          </div>
        </div>

      </main>

      <footer className="w-full py-12 text-center">
        <p className="text-[10px] text-neutral-700 tracking-[0.2em] uppercase font-sans">
          &copy; {new Date().getFullYear()} Nyra Vale. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
