import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 md:pt-40 px-4 md:px-12 pb-20 max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full lg:w-1/3 space-y-12"
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
                 <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] bg-neutral-800 px-1 rounded">COPY</span>
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

        {/* Custom Contact Form (EmailJS Style) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-2/3"
        >
          <form className="bg-neutral-900/30 border border-neutral-800 p-8 md:p-10 space-y-8 backdrop-blur-sm">
             <div>
               <h2 className="text-xl md:text-2xl font-display text-white uppercase tracking-widest mb-2">Send a Message</h2>
               <p className="text-neutral-500 font-sans text-sm">Direct inquiry form</p>
             </div>

             <div className="space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-xs font-display text-neutral-400 uppercase tracking-widest">Name</label>
                   <input 
                     type="text" 
                     placeholder="Your name"
                     className="w-full bg-black/50 border border-neutral-800 focus:border-neutral-600 text-white px-4 py-3 text-sm font-sans outline-none transition-colors placeholder:text-neutral-700"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-display text-neutral-400 uppercase tracking-widest">Email</label>
                   <input 
                     type="email" 
                     placeholder="your@email.com"
                     className="w-full bg-black/50 border border-neutral-800 focus:border-neutral-600 text-white px-4 py-3 text-sm font-sans outline-none transition-colors placeholder:text-neutral-700"
                   />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-xs font-display text-neutral-400 uppercase tracking-widest">Subject</label>
                 <select className="w-full bg-black/50 border border-neutral-800 focus:border-neutral-600 text-white px-4 py-3 text-sm font-sans outline-none transition-colors appearance-none cursor-pointer">
                   <option>General Inquiry</option>
                   <option>Voice Over Booking</option>
                   <option>Music Collaboration</option>
                   <option>Other</option>
                 </select>
               </div>

               <div className="space-y-2">
                 <label className="text-xs font-display text-neutral-400 uppercase tracking-widest">Message</label>
                 <textarea 
                   rows={6}
                   placeholder="Write your message here..."
                   className="w-full bg-black/50 border border-neutral-800 focus:border-neutral-600 text-white px-4 py-3 text-sm font-sans outline-none transition-colors resize-none placeholder:text-neutral-700"
                 />
               </div>
             </div>

             <div className="flex justify-end">
               <button 
                 type="button"
                 onClick={(e) => {
                   e.preventDefault();
                   toast({
                     title: "Demo Form",
                     description: "This is a visual mockup. To make it work, we'd connect it to EmailJS.",
                   });
                 }}
                 className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors"
               >
                 Send Message
               </button>
             </div>
          </form>
        </motion.div>

      </main>
    </div>
  );
}
