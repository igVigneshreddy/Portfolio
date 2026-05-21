import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      
      {loading ? (
        <LoadingScreen onFinished={() => setLoading(false)} />
      ) : (
        <div className="relative min-h-screen bg-cyber-bg overflow-x-hidden">
          {/* Animated dynamic grid/nodes backdrop */}
          <ParticlesBackground />

          {/* Floated custom geometric glow elements in body */}
          <div className="fixed top-[40%] right-[-10%] w-[350px] h-[350px] bg-cyber-violet/5 rounded-full filter blur-[100px] pointer-events-none" />
          <div className="fixed bottom-[30%] left-[-15%] w-[450px] h-[450px] bg-cyber-cyan/5 rounded-full filter blur-[120px] pointer-events-none" />

          <Navbar />
          
          <main className="relative z-10 px-4 md:px-8 max-w-6xl mx-auto space-y-12">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>

          {/* Premium Footer */}
          <footer className="relative z-10 py-12 mt-20 border-t border-white/5 bg-[#030014]/60 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Left branding */}
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-gradient-to-tr from-cyber-cyan to-cyber-violet flex items-center justify-center font-bold text-xs text-[#030014]">
                  KV
                </div>
                <span className="font-mono text-xs tracking-wider text-white">
                  Karna Vignesh &copy; {new Date().getFullYear()}
                </span>
              </div>

              {/* Middle status */}
              <div className="font-mono text-[10px] text-cyber-muted tracking-widest uppercase flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
                All Systems Operational
              </div>

              {/* Right links */}
              <div className="flex gap-6 text-[10px] font-mono uppercase tracking-wider text-cyber-muted">
                <a href="#home" className="hover:text-cyber-cyan transition-colors cursor-none">Top</a>
                <a href="mailto:vigneshreddy139@gmail.com" className="hover:text-cyber-cyan transition-colors cursor-none">Support</a>
                <a href="http://www.linkedin.com/in/karnavignesh" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-cyan transition-colors cursor-none">LinkedIn</a>
              </div>

            </div>
          </footer>
        </div>
      )}
    </>
  );
}
