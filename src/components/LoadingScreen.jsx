import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onFinished }) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      // Exponential-ish scaling for cinematic delay
      const increment = Math.max(1, Math.floor((100 - current) / 8));
      current += increment;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsDone(true);
          setTimeout(() => {
            onFinished();
          }, 600); // Wait for fade-out exit transition
        }, 800); // Keep full loading screen on 100% briefly
      }
      setProgress(current);
    }, 80);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 bg-[#02010c] flex flex-col justify-center items-center z-[99999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Neon Logo / Icon Container */}
          <div className="relative mb-8">
            <motion.div
              className="w-20 h-20 border-2 border-cyber-cyan rounded-xl flex items-center justify-center"
              animate={{
                rotate: [0, 90, 180, 270, 360],
                boxShadow: [
                  "0 0 15px rgba(0, 229, 255, 0.3)",
                  "0 0 25px rgba(139, 92, 246, 0.5)",
                  "0 0 15px rgba(0, 229, 255, 0.3)"
                ]
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "linear"
              }}
            >
              <span className="text-2xl font-bold bg-gradient-to-r from-cyber-cyan to-cyber-violet bg-clip-text text-transparent">KV</span>
            </motion.div>
            
            {/* Pulsing ring indicator */}
            <div className="absolute inset-n-4 w-28 h-28 border border-cyber-violet/20 rounded-full animate-ping -translate-x-[15%] -translate-y-[15%]" />
          </div>

          {/* Text Title & Progress Bar */}
          <div className="w-64 flex flex-col items-center">
            <motion.h1
              className="text-xs tracking-[0.35em] text-cyber-muted uppercase font-mono mb-4 text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              Initializing Systems
            </motion.h1>
            
            {/* Progress Bar Track */}
            <div className="w-full h-1.5 bg-[#0f0e21] rounded-full overflow-hidden border border-white/5 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-violet to-cyber-amber rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Percentage Count Up */}
            <span className="mt-4 font-mono text-sm text-cyber-cyan glow-cyan">
              {progress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
