import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ShieldCheck, CheckCircle } from "lucide-react";
import { Github } from "./Icons";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop overlay */}
        <div 
          className="absolute inset-0 bg-[#02010bdc] backdrop-blur-md" 
          onClick={onClose}
        />

        {/* Modal body container */}
        <motion.div
          className="relative w-full max-w-3xl max-h-[85vh] bg-[#0c0a21] border border-white/10 rounded-2xl overflow-y-auto z-10 shadow-2xl"
          initial={{ scale: 0.9, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 220 }}
        >
          {/* Header image/gradient */}
          <div className="relative h-44 md:h-56 bg-gradient-to-tr from-cyber-violet/30 via-cyber-cyan/20 to-black/80 flex items-end p-6 border-b border-white/5">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-[#12102e] hover:bg-cyber-cyan/20 border border-white/10 hover:border-cyber-cyan/50 text-white rounded-lg transition-colors cursor-none"
            >
              <X className="w-5 h-5" />
            </button>
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-cyber-cyan glow-cyan mb-2 block">
                {project.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-xs font-mono uppercase text-cyber-muted tracking-[0.2em] mb-2">Description</h3>
              <p className="text-cyber-muted text-sm md:text-base leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Tech Stack Tags */}
            <div>
              <h3 className="text-xs font-mono uppercase text-cyber-muted tracking-[0.2em] mb-3">Key Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cyber-violet/10 border border-cyber-violet/20 hover:border-cyber-violet/60 text-xs font-mono text-cyber-violet rounded-md transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Deliverables / Features */}
            <div>
              <h3 className="text-xs font-mono uppercase text-cyber-muted tracking-[0.2em] mb-3">Features & Metrics</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-cyber-muted">
                    <CheckCircle className="w-4 h-4 text-cyber-cyan shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions Links */}
            <div className="pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs font-mono text-cyber-muted">
                Completed: <span className="text-white">{project.date}</span>
              </span>
              
              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg text-sm transition-colors cursor-none"
                  >
                    <Github className="w-4 h-4" /> View Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 bg-cyber-cyan hover:bg-[#00c2d8] text-[#030014] font-semibold rounded-lg text-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all cursor-none"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
