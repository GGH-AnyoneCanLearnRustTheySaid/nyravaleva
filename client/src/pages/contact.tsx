import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Copy } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 md:pt-40 px-4 md:px-12 pb-20 max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full space-y-12"
        >
           <div>
             <h1 className="text-2xl md:text-3xl font-display uppercase tracking-wide text-white mb-6">
               Contact & Booking
             </h1>
             <p className="text-neutral-400 font-sans tracking-wide text-base leading-relaxed">
               For inquiries regarding music, voice-over, bookings, or collaboration, please reach out!
             </p>
           </div>

           <div className="space-y-8">
             <div>
               <h3 className="text-xs font-display text-white tracking-[0.2em] uppercase mb-3">Email</h3>
               <button 
                 onClick={() => {
                   navigator.clipboard.writeText("nyravaleva@gmail.com");
                   toast({
                     title: "Email Copied",
                     description: "Email address copied to clipboard.",
                   });
                 }}
                 className="text-sm text-neutral-400 font-mono mb-4 hover:text-white transition-colors text-left flex items-center gap-2 group"
               >
                 <span>nyravaleva@gmail.com</span>
                 <Copy className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
               </button>
               <div className="space-y-1">
                 <p className="text-sm text-neutral-400 font-mono">
                   <strong className="text-neutral-300 font-sans uppercase tracking-wider text-xs">Artist Name:</strong> Nyra Vale
                 </p>
                 <p className="text-sm text-neutral-400 font-mono">
                   <strong className="text-neutral-300 font-sans uppercase tracking-wider text-xs">Legal Name:</strong> Aliyah Burlingame
                 </p>
               </div>
             </div>
             
             <div>
               <h3 className="text-xs font-display text-white tracking-[0.2em] uppercase mb-3">Location</h3>
               <p className="text-sm text-neutral-400 font-mono">Texas, USA</p>
             </div>
             
             <div>
               <h3 className="text-xs font-display text-white tracking-[0.2em] uppercase mb-3">Socials</h3>
               <div className="flex gap-4 flex-wrap mb-3">
                 <a href="https://www.instagram.com/a1yorra" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">Instagram</a>
                 <button 
                   onClick={() => {
                     navigator.clipboard.writeText("canyoufeelmysoul");
                     toast({
                       title: "Discord Username Copied",
                       description: "Username 'canyoufeelmysoul' copied to clipboard.",
                     });
                   }}
                   className="text-sm text-neutral-400 hover:text-white transition-colors text-left"
                 >
                   Discord
                 </button>
                 <a href="https://x.com/a1yorra" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">X</a>
               </div>
               <div>
                 <a href="https://www.castingcall.club/nyra-vale" target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-400 hover:text-white transition-colors">Casting Call Club</a>
               </div>
             </div>
           </div>
        </motion.div>

      </main>
    </div>
  );
}
