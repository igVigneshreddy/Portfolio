import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Database, Gamepad2, LineChart, FileText } from "lucide-react";

export default function HeroSection() {
  const roles = ["Data Analyst", "Database Developer", "Game Designer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullRole = roles[roleIndex];

    const tick = () => {
      if (!isDeleting) {
        setDisplayText(currentFullRole.substring(0, displayText.length + 1));
        if (displayText === currentFullRole) {
          timer = setTimeout(() => setIsDeleting(true), 1500); // Wait on complete role
        }
      } else {
        setDisplayText(currentFullRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const delta = isDeleting ? 75 : 150;
    if (!timer) {
      timer = setTimeout(tick, delta);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 px-4 overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-cyber-cyan/10 rounded-full filter blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyber-violet/10 rounded-full filter blur-[120px] animate-pulse-slow" />

      {/* Main hero panel layout */}
      <div className="relative max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-12">
        <motion.div 
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-cyber-cyan/10 border border-cyber-cyan/20 text-cyber-cyan rounded-full font-mono text-xs uppercase tracking-widest">
            <span className="w-2 h-2 bg-cyber-cyan rounded-full animate-ping" />
            Available for Internships
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyber-cyan via-cyber-violet to-cyber-amber bg-clip-text text-transparent">
              Karna Vignesh
            </span>
          </h1>

          <div className="h-12 font-mono text-xl sm:text-2xl text-cyber-amber flex items-center justify-center lg:justify-start gap-2">
            <span>&gt; I build as a</span>
            <span className="border-r-2 border-cyber-amber pr-1 animate-pulse">
              {displayText}
            </span>
          </div>

          <p className="text-cyber-muted text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
            A B.Tech Computer Science student at Lovely Professional University. I bridge the gap between heavy database architectures and engaging interactive frontends.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-start pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-cyber-cyan text-cyber-bg font-semibold rounded-xl hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-105 hover:bg-[#00c5db] transition-all duration-300 flex items-center gap-2 cursor-none"
            >
              Explore Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-white/10 hover:border-cyber-violet/50 hover:bg-cyber-violet/10 text-white font-medium rounded-xl hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all duration-300 flex items-center gap-2 cursor-none"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>

        {/* Hero Interactive Floating Visual Panel */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center group">
            {/* Spinning glowing border rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyber-cyan/30 animate-[spin_30s_linear_infinite]" />
            <div className="absolute inset-3 rounded-full border border-double border-cyber-violet/40 animate-[spin_20s_linear_infinite_reverse]" />
            <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-cyber-cyan/10 to-cyber-violet/10 blur-xl group-hover:scale-110 transition-transform duration-500" />
            
            {/* Center Profile Image Frame */}
            <div className="relative w-[82%] h-[82%] rounded-full overflow-hidden border-4 border-[#030014] shadow-2xl z-10">
              <img 
                src="/photo.png" 
                alt="Karna Vignesh" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"; // Fallback image if user photo isn't loaded
                }}
              />
            </div>

            {/* Quick floating skill badges */}
            <div className="absolute -top-3 left-[15%] p-3 bg-[#0d0b25] border border-white/10 rounded-xl shadow-lg z-20 animate-float">
              <Database className="w-5 h-5 text-cyber-cyan" />
            </div>
            <div className="absolute top-[40%] -right-4 p-3 bg-[#0d0b25] border border-white/10 rounded-xl shadow-lg z-20 animate-float [animation-delay:2s]">
              <LineChart className="w-5 h-5 text-cyber-amber" />
            </div>
            <div className="absolute -bottom-2 left-[30%] p-3 bg-[#0d0b25] border border-white/10 rounded-xl shadow-lg z-20 animate-float [animation-delay:4s]">
              <Gamepad2 className="w-5 h-5 text-cyber-violet" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chevron scroll guide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-[0.25em] text-cyber-muted uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-cyber-cyan animate-bounce" />
      </div>
    </section>
  );
}
