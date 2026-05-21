import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, BookOpen, Star } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "5★", label: "MySQL Gold Badge", desc: "HackerRank rating" },
    { value: "10+", label: "SQL Tables Schema", desc: "Relational DB design" },
    { value: "4+", label: "Key Projects", desc: "Built end-to-end" },
    { value: "1", label: "3D walkthrough", desc: "Designed in Unity" }
  ];

  const education = [
    {
      role: "Bachelor of Technology — CSE",
      institution: "Lovely Professional University (Phagwara, Punjab)",
      period: "August 2023 - Present",
      metrics: "CGPA: 6.0",
      description: "Focused on database modeling, software architecture, algorithm design, and frontend development."
    },
    {
      role: "Intermediate (Class XII)",
      institution: "Cochin Public School (Thrikakkara, Cochin)",
      period: "April 2020 - March 2022",
      metrics: "Percentage: 72%",
      description: "Specialized in Science, Mathematics, and Computer Science studies."
    },
    {
      role: "Matriculation (Class X)",
      institution: "Cochin Public School (Thrikakkara, Cochin)",
      period: "April 2018 - March 2020",
      metrics: "Percentage: 74%",
      description: "Foundational general education and computer application basics."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-cyber-cyan font-mono block">
            // BACKGROUND
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">About Me</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-violet rounded-full mt-2 mx-auto md:mx-0" />
        </div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center relative group overflow-hidden"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              <span className="text-3xl md:text-4xl font-black bg-gradient-to-br from-cyber-cyan to-cyber-violet bg-clip-text text-transparent mb-1">
                {stat.value}
              </span>
              <span className="text-xs font-semibold text-white tracking-wide">
                {stat.label}
              </span>
              <span className="text-[10px] text-cyber-muted mt-1 font-mono">
                {stat.desc}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio & Education Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Bio Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-cyber-cyan" /> Accomplishments
            </h3>
            <p className="text-cyber-muted text-sm leading-relaxed">
              I am a driven software developer eager to deploy analytical tools and database architectures. Having earned a **Gold Badge and 5-star rating in MySQL on HackerRank**, I specialize in designing normalized table structures, managing indexes, and writing optimized join queries.
            </p>
            <p className="text-cyber-muted text-sm leading-relaxed">
              Beyond backends, I explore rendering limits. In game engines like Unity, I build environmental walk-throughs using assets that I model, texture, and export using Blender, bridging logic and 3D artwork.
            </p>

            {/* HackerRank / MySQL card callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-tr from-cyber-cyan/5 to-cyber-violet/10 border border-cyber-cyan/15 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan shrink-0">
                <Star className="w-6 h-6 fill-cyber-cyan" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">MySQL Gold Badge</h4>
                <p className="text-xs text-cyber-muted mt-0.5">Top-tier coding proficiency rating verified by HackerRank assessments.</p>
              </div>
            </div>
          </div>

          {/* Education Timeline Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-cyber-violet" /> Education Timeline
            </h3>

            <div className="relative pl-6 border-l border-white/10 space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1 w-[11px] h-[11px] rounded-full bg-cyber-bg border-2 border-cyber-violet group-hover:border-cyber-cyan transition-colors" />
                  
                  {/* Timeline content */}
                  <div className="space-y-1.5">
                    <span className="inline-block px-2.5 py-0.5 bg-cyber-violet/10 border border-cyber-violet/20 text-[10px] font-mono text-cyber-violet rounded-md">
                      {item.period}
                    </span>
                    <h4 className="text-base font-bold text-white group-hover:text-cyber-cyan transition-colors">
                      {item.role}
                    </h4>
                    <div className="flex items-center gap-4 text-xs font-semibold text-cyber-amber">
                      <span>{item.institution}</span>
                      <span className="px-2 py-0.5 bg-cyber-amber/15 rounded text-[10px] font-mono border border-cyber-amber/20">{item.metrics}</span>
                    </div>
                    <p className="text-cyber-muted text-xs leading-relaxed mt-2 pt-1 border-t border-white/5">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
