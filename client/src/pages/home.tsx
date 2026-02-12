import { Navbar } from "@/components/layout/Navbar";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Play, Mic } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import heroImage from "@/assets/home-butterfly-outline.png";
import audioBg from "@/assets/audio-bg.png";
import demoReelThumb from "@/assets/demo-reel-thumb.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-white selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-4 md:px-12 flex flex-col items-center min-h-screen">
        
        {/* SINGER • VOICE ARTIST • SONGWRITER moved here */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center w-full mb-8 md:mb-10"
        >
          <p className="text-xl md:text-3xl text-neutral-500 font-display tracking-[0.15em] uppercase font-medium">
            SINGER <span className="mx-2 text-neutral-700">•</span> VOICE ARTIST <span className="mx-2 text-neutral-700">•</span> SONGWRITER
          </p>
        </motion.div>

        {/* Page Title removed from here */}

        {/* Projects Grid */}
        <div className="w-full max-w-5xl flex flex-col gap-12 md:gap-16">
          
          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-[78%] mx-auto relative aspect-video bg-[#0d0d0d] overflow-hidden"
          >
            <motion.img 
              src={heroImage} 
              alt="Artistic Butterfly" 
              className="w-full h-full object-cover opacity-80"
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

          {/* Page Title moved here */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mb-0 md:mb-2 text-center max-w-3xl mx-auto"
          >
            <h1 className="text-xl md:text-2xl font-display tracking-[0.1em] text-white uppercase mb-0 leading-relaxed">
              Every word comes alive
            </h1>
          </motion.div>

          {/* Bio Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-center space-y-6 px-4"
          >
            <p className="text-neutral-400 font-sans italic text-[18.8px] md:text-[22.6px] leading-relaxed tracking-wide">
               Combining trained vocal ability with expressive voice acting and voice modulation.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
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
                    <p className="text-sm text-neutral-500 font-sans tracking-wide leading-relaxed">A 90-second showcase of vocal versatility and characterisation</p>
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
                    <p className="text-sm text-neutral-500 font-sans tracking-wide leading-relaxed">Original singing performance for fan musical - bringing melody, emotion, and personality to every role • Trained vocalist, character actor.</p>
                  </div>
                </motion.div>
            </div>

            {/* CTA Section */}
            <div className="w-full text-center py-10">
              <p className="text-white font-display uppercase tracking-widest mb-6 text-sm">
                Got a project, a collaboration? Reach out.
              </p>
              <Link href="/contact">
                <a className="inline-block border border-neutral-700 px-8 py-4 text-xs font-display uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-colors">
                  Get in touch →
                </a>
              </Link>
            </div>

            {/* Tracklist */}
            <div className="w-full">
               <h2 className="text-xl font-display text-white tracking-widest uppercase mb-2">VOCAL RANGE - ORIGINAL MUSIC</h2>
               <p className="text-sm text-neutral-500 font-sans tracking-wide leading-relaxed mb-8 border-b border-neutral-800 pb-4">Written and performed by Nyra Vale (as Alyorra)</p>
               
               {[
                 {
                   id: 1,
                   title: "Alyorra - A Sailors Story (prod meta)",
                   duration: "03:41",
                   url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alyorra/a-sailors-story-prod-meta&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                 },
                 { id: 2, title: "Alyorra - Believe Me (prod.violet)", duration: "03:42", url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alyorra/believe-me-prod-violet&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
                 { id: 3, title: "Alyorra - Ocean (prod.violet)", duration: "03:43", url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alyorra/ocean-prod-violet&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
                 { id: 4, title: "Alyorra - Winter (prod. bstrxy)", duration: "03:44", url: "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alyorra/winter-prod-bstrxy/s-2jVbCTAHFFJ%3Fsi%3D1c6517c345d24b98b5603185de1de2a7&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" },
               ].map((track, i) => (
                 <Dialog key={track.id}>
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
                   {track.url && (
                     <DialogContent className="sm:max-w-4xl p-0 bg-black border-neutral-800 overflow-hidden">
                       <div className="aspect-video w-full">
                         <iframe 
                           width="100%" 
                           height="100%" 
                           src={track.url}
                           title={track.title}
                           frameBorder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                           allowFullScreen 
                           className="w-full h-full"
                         />
                       </div>
                     </DialogContent>
                   )}
                 </Dialog>
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
