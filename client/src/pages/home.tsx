import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import heroImage from "@/assets/home-butterfly.jpg";

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
          className="mb-16 md:mb-24 text-center max-w-3xl"
        >
          <h1 className="text-xl md:text-2xl font-display tracking-[0.1em] text-white uppercase mb-8 leading-relaxed">
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
            className="w-full relative aspect-video bg-neutral-900 overflow-hidden"
          >
            <motion.img 
              src={heroImage} 
              alt="Artistic Butterfly" 
              className="w-full h-full object-cover opacity-80"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ 
                duration: 40, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            {/* Box Shadow Overlay for Blended Edges */}
            <div className="absolute inset-0 shadow-[inset_0_0_250px_80px_#0d0d0d] pointer-events-none" />
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
