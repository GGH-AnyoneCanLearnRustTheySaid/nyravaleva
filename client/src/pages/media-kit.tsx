import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Download, FileText, Image as ImageIcon } from "lucide-react";

export default function MediaKit() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 md:pt-40 px-4 md:px-12 pb-20 max-w-5xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-display uppercase tracking-wide text-white mb-6">
            Media Kit
          </h1>
          <p className="text-neutral-400 font-sans tracking-wide max-w-xl mx-auto text-sm md:text-base">
            Download official bios, high-resolution photos, and press assets for KB Audio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* Asset Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="group border border-neutral-800 bg-neutral-900/20 p-8 flex flex-col items-center text-center gap-6 hover:border-neutral-600 transition-colors cursor-pointer"
          >
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all text-neutral-400">
               <FileText className="w-6 h-6" />
            </div>
            <div>
               <h3 className="text-lg font-display text-white tracking-widest uppercase mb-2">Artist Bio</h3>
               <p className="text-xs text-neutral-500 font-sans mb-6">PDF & DOCX Formats</p>
               <button className="text-[10px] tracking-[0.2em] uppercase border border-neutral-700 px-6 py-3 hover:bg-white hover:text-black transition-colors">
                 Download
               </button>
            </div>
          </motion.div>

          {/* Asset Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="group border border-neutral-800 bg-neutral-900/20 p-8 flex flex-col items-center text-center gap-6 hover:border-neutral-600 transition-colors cursor-pointer"
          >
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all text-neutral-400">
               <ImageIcon className="w-6 h-6" />
            </div>
            <div>
               <h3 className="text-lg font-display text-white tracking-widest uppercase mb-2">Press Photos</h3>
               <p className="text-xs text-neutral-500 font-sans mb-6">High Res JPGs</p>
               <button className="text-[10px] tracking-[0.2em] uppercase border border-neutral-700 px-6 py-3 hover:bg-white hover:text-black transition-colors">
                 Download
               </button>
            </div>
          </motion.div>

          {/* Asset Card 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="group border border-neutral-800 bg-neutral-900/20 p-8 flex flex-col items-center text-center gap-6 hover:border-neutral-600 transition-colors cursor-pointer"
          >
            <div className="w-16 h-16 bg-neutral-800 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all text-neutral-400">
               <Download className="w-6 h-6" />
            </div>
            <div>
               <h3 className="text-lg font-display text-white tracking-widest uppercase mb-2">Full Press Kit</h3>
               <p className="text-xs text-neutral-500 font-sans mb-6">ZIP Archive (45MB)</p>
               <button className="text-[10px] tracking-[0.2em] uppercase border border-neutral-700 px-6 py-3 hover:bg-white hover:text-black transition-colors">
                 Download
               </button>
            </div>
          </motion.div>

        </div>
      </main>
    </div>
  );
}
