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

        {/* Google Form Embed Mockup */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full lg:w-2/3"
        >
          <div className="w-full h-full min-h-[600px] bg-[#f0ebf8] rounded-lg overflow-hidden relative shadow-xl">
             {/* Header Strip */}
             <div className="h-3 bg-[#673ab7] w-full"></div>
             
             <div className="p-4 md:p-8 max-w-2xl mx-auto pt-8">
                {/* Form Header Card */}
                <div className="bg-white rounded-lg border border-[#dadce0] p-6 mb-4 border-t-[10px] border-t-[#673ab7]">
                  <h2 className="text-3xl text-black mb-2 font-[Roboto,Arial,sans-serif]">Contact Nyra Vale</h2>
                  <p className="text-sm text-[#5f6368] font-[Roboto,Arial,sans-serif]">Please fill out this form for inquiries.</p>
                  <p className="text-xs text-[#d93025] mt-4 font-[Roboto,Arial,sans-serif]">* Required</p>
                </div>

                {/* Email Field */}
                <div className="bg-white rounded-lg border border-[#dadce0] p-6 mb-4">
                  <label className="text-base text-black mb-2 block font-[Roboto,Arial,sans-serif]">Email <span className="text-[#d93025]">*</span></label>
                  <div className="border-b border-[#dadce0] py-2 w-1/2">
                    <span className="text-[#5f6368] text-sm">Your email</span>
                  </div>
                </div>

                {/* Name Field */}
                <div className="bg-white rounded-lg border border-[#dadce0] p-6 mb-4">
                  <label className="text-base text-black mb-2 block font-[Roboto,Arial,sans-serif]">Name <span className="text-[#d93025]">*</span></label>
                  <div className="border-b border-[#dadce0] py-2 w-1/2">
                    <span className="text-[#5f6368] text-sm">Your answer</span>
                  </div>
                </div>

                {/* Message Field */}
                <div className="bg-white rounded-lg border border-[#dadce0] p-6 mb-4">
                  <label className="text-base text-black mb-2 block font-[Roboto,Arial,sans-serif]">Message <span className="text-[#d93025]">*</span></label>
                  <div className="border-b border-[#dadce0] py-2 w-full">
                    <span className="text-[#5f6368] text-sm">Your answer</span>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-between items-center mt-4">
                  <button className="bg-[#673ab7] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#5f35ac]">Submit</button>
                  <div className="text-xs text-[#5f6368]">Clear form</div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                   <p className="text-xs text-[#5f6368]">Never submit passwords through Google Forms.</p>
                   <p className="text-xs text-[#5f6368] mt-2">This content is neither created nor endorsed by Google.</p>
                   <h3 className="text-lg text-[#5f6368] font-bold mt-2 opacity-50">Google Forms</h3>
                </div>
             </div>

             {/* Overlay to indicate this is a preview */}
             <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-10 opacity-0 hover:opacity-100 transition-opacity cursor-not-allowed">
               <div className="bg-neutral-900 text-white p-4 rounded border border-neutral-700 max-w-sm text-center">
                 <p className="font-bold mb-2">Google Forms Preview</p>
                 <p className="text-sm text-neutral-400">This is how an embedded Google Form would appear. It typically retains the Google branding, white background, and standard styling, which may contrast with your site's dark aesthetic.</p>
               </div>
             </div>
          </div>
        </motion.div>

      </main>
    </div>
  );
}
