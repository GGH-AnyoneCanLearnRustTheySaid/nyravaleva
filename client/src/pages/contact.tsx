import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required." }),
  email: z.string().email({ message: "Invalid email address." }),
  subject: z.string().min(2, { message: "Subject is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 md:pt-40 px-4 md:px-12 pb-20 max-w-4xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
        
        {/* Info Side */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full md:w-1/3 space-y-12"
        >
           <div>
             <h1 className="text-2xl md:text-3xl font-display uppercase tracking-wide text-white mb-6">
               Contact & Booking
             </h1>
             <p className="text-neutral-400 font-sans tracking-wide text-sm leading-relaxed">
               For inquiries regarding music, voice-over, bookings, or collaboration, please use the form or the contact details below.
             </p>
           </div>

           <div className="space-y-6">
             <div>
               <h3 className="text-xs font-display text-white tracking-[0.2em] uppercase mb-2">Email</h3>
               <p className="text-sm text-neutral-400 font-mono mb-4">nyravaleva@gmail.com</p>
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
               <h3 className="text-xs font-display text-white tracking-[0.2em] uppercase mb-2">Location</h3>
               <p className="text-sm text-neutral-400 font-mono">Texas, USA</p>
             </div>
             <div>
               <h3 className="text-xs font-display text-white tracking-[0.2em] uppercase mb-2">Socials</h3>
               <div className="flex gap-4 flex-wrap">
                 <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Instagram</a>
                 <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Discord</a>
                 <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">X</a>
                 <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">Casting Call Club</a>
               </div>
             </div>
           </div>
        </motion.div>

        {/* Form Side */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full md:w-2/3"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.2em] text-neutral-500">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="YOUR NAME" 
                          {...field} 
                          className="bg-transparent border-0 border-b border-neutral-800 rounded-none px-0 py-2 text-white focus-visible:ring-0 focus-visible:border-white transition-colors placeholder:text-neutral-800 font-sans tracking-wider"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs uppercase tracking-[0.2em] text-neutral-500">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="YOUR EMAIL" 
                          {...field} 
                          className="bg-transparent border-0 border-b border-neutral-800 rounded-none px-0 py-2 text-white focus-visible:ring-0 focus-visible:border-white transition-colors placeholder:text-neutral-800 font-sans tracking-wider"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-[0.2em] text-neutral-500">Subject</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="INQUIRY TYPE" 
                        {...field} 
                        className="bg-transparent border-0 border-b border-neutral-800 rounded-none px-0 py-2 text-white focus-visible:ring-0 focus-visible:border-white transition-colors placeholder:text-neutral-800 font-sans tracking-wider"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-xs uppercase tracking-[0.2em] text-neutral-500">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="TELL US ABOUT YOUR PROJECT..." 
                        {...field} 
                        className="bg-transparent border-0 border-b border-neutral-800 rounded-none px-0 py-2 text-white focus-visible:ring-0 focus-visible:border-white transition-colors placeholder:text-neutral-800 min-h-[150px] resize-none font-sans tracking-wider"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button 
                type="submit"
                className="text-xs font-display tracking-[0.2em] uppercase text-black bg-white px-8 py-4 hover:bg-neutral-200 transition-colors w-full md:w-auto"
              >
                Send Message
              </button>
            </form>
          </Form>
        </motion.div>

      </main>
    </div>
  );
}
