import { motion } from "framer-motion";
import { Database, LineChart, Cpu, Layout } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Databases & Backend",
      icon: <Database className="w-5 h-5 text-cyber-cyan" />,
      skills: [
        { name: "MySQL / SQL Standard", level: 90 },
        { name: "Relational DB Modeling", level: 85 },
        { name: "Transaction Control & Triggers", level: 80 },
        { name: "Python Scripting", level: 85 }
      ]
    },
    {
      title: "Data Analytics & Libraries",
      icon: <LineChart className="w-5 h-5 text-cyber-amber" />,
      skills: [
        { name: "Pandas & Data Manipulation", level: 80 },
        { name: "NumPy Array Computing", level: 75 },
        { name: "Matplotlib Data Visuals", level: 80 },
        { name: "Scikit-Learn Machine Learning", level: 70 }
      ]
    },
    {
      title: "3D Design & Game Engines",
      icon: <Cpu className="w-5 h-5 text-cyber-violet" />,
      skills: [
        { name: "Blender 3D Asset Modeling", level: 85 },
        { name: "Unity Scene Configuration", level: 80 },
        { name: "C# Controller Scripting", level: 75 },
        { name: "FBX Rigging & Materials", level: 80 }
      ]
    },
    {
      title: "Developer Tools & Workflows",
      icon: <Layout className="w-5 h-5 text-emerald-400" />,
      skills: [
        { name: "VS Code & Git / GitHub", level: 90 },
        { name: "MySQL Workbench", level: 85 },
        { name: "Jupyter Notebooks", level: 80 },
        { name: "Problem-Solving & Management", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-cyber-violet font-mono block">
            // EXPERIENCE
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Skills Matrix</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-violet to-cyber-cyan rounded-full mt-2 mx-auto md:mx-0" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Card top-glow line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-violet/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white tracking-wide">
                  {category.title}
                </h3>
              </div>

              {/* Skills Bars */}
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="font-semibold text-cyber-muted group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="font-mono text-cyber-cyan">{skill.level}%</span>
                    </div>

                    {/* Progress track */}
                    <div className="w-full h-1.5 bg-[#0e0c21] rounded-full overflow-hidden border border-white/5 relative">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyber-violet to-cyber-cyan rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: sIdx * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
