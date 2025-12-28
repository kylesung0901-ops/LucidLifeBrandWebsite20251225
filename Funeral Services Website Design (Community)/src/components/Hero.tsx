import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2E5C] via-[#1a4273] to-[#F5F5DC]" />
      
      {/* Overlay Image */}
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1763629665485-e0d5e5c70ff5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMGNhbmRsZXMlMjBtZW1vcmlhbHxlbnwxfHx8fDE3NjM4MDM2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080)`
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-20 left-10 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-32 right-20 w-40 h-40 bg-[#F5F5DC]/20 rounded-full blur-3xl"
      />
      
      {/* Content */}
      <div className="relative z-10 px-6 max-w-5xl mx-auto text-center flex flex-col items-center gap-6 sm:gap-7 md:gap-8 lg:gap-9">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-block"
          >
            <span className="text-[#D4AF37] tracking-widest uppercase">Since 2010</span>
          </motion.div>
          
          <h1 className="text-white leading-tight">
            Celebrating Life, Honoring Afterlife
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-white/90 max-w-2xl mx-auto leading-relaxed"
        >
          Thoughtfully Curated Funeral & Memorial Services
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-[#0A2E5C] px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:bg-[#e0bf4d] hover:shadow-2xl"
          >
            Get Immediate Assistance
            <ArrowRight size={20} />
          </motion.button>
          
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/80 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:bg-white/10 hover:border-white"
          >
            Explore Services
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}