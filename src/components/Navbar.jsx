import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background shading on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-[#0c0a1e] z-[9999]">
        <div 
          className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-violet to-cyber-amber" 
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl rounded-2xl z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-[#0b091db8] backdrop-blur-xl border border-white/5 shadow-2xl py-3"
            : "bg-transparent border border-transparent py-5"
        }`}
      >
        <div className="px-6 md:px-8 flex justify-between items-center">
          {/* Logo link */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyber-cyan to-cyber-violet flex items-center justify-center font-bold text-sm text-[#030014] shadow-lg shadow-cyber-cyan/20 group-hover:shadow-cyber-violet/30 transition-all duration-300">
              KV
            </div>
            <span className="font-mono text-sm tracking-[0.2em] font-semibold text-white group-hover:text-cyber-cyan transition-colors duration-300">
              VIGNESH
            </span>
          </a>

          {/* Desktop NavLinks */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-mono text-xs uppercase tracking-wider text-cyber-muted hover:text-cyber-cyan hover:glow-cyan transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="/karnavignesh_cv_final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 font-mono text-xs uppercase tracking-wider text-cyber-cyan border border-cyber-cyan/30 rounded-lg hover:bg-cyber-cyan/10 hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300"
            >
              Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger menu click */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyber-cyan transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-[105%] left-0 w-full bg-[#0a081aee] backdrop-blur-xl border border-white/5 rounded-2xl py-6 px-8 flex flex-col gap-6 md:hidden shadow-2xl"
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.2 }}
            >
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block font-mono text-sm uppercase tracking-wider text-cyber-muted hover:text-cyber-cyan transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href="/karnavignesh_cv_final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 font-mono text-sm uppercase tracking-wider text-cyber-cyan border border-cyber-cyan/30 rounded-xl hover:bg-cyber-cyan/10 transition-all"
              >
                Resume <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
