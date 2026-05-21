import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ExternalLink, Code } from "lucide-react";
import { Github } from "./Icons";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "FIFA World Cup Analytics Dashboard",
      category: "Data Analytics",
      tags: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      date: "July 2025",
      summary: "Historical tournament and team analytics dashboard built in Power BI.",
      fullDescription: "An end-to-end Power BI analytics dashboard compiling FIFA World Cup matches and tournaments data from 1930 to 2022. Designed a relational model, cleaned raw tables using Power Query, and developed dynamic performance measures using DAX to report title counts, goal distributions, and team win-draw-loss percentages.",
      features: [
        "Interactive tournament filtering panels",
        "Calculated win-rate and goal-average metrics in DAX",
        "Team-wise attacking vs. defending comparisons",
        "Normalized multi-table star schema relationships"
      ],
      github: "https://github.com/igVigneshreddy/Football-Analytics-Dashboard",
      live: null
    },
    {
      title: "AI Esports Chatbot & strategic Advisor",
      category: "Artificial Intelligence",
      tags: ["Python", "Flask", "Hugging Face API", "Zephyr LLM"],
      date: "April 2025",
      summary: "Flask-powered strategic game coach chatbot using Hugging Face endpoints.",
      fullDescription: "A gaming strategy assistant serving real-time tactical recommendations. Features a Python Flask server communicating with the Hugging Face inference pipeline for the Zephyr-7b-beta model. Includes a neon cyber-themed chat interface with typing status animations.",
      features: [
        "Integrated Zephyr-7b-beta model completions",
        "Flask-proxy API handling async user queries",
        "Neon border shadows and responsive game theme UI",
        "Custom Canvas particle background support"
      ],
      github: "https://github.com/igVigneshreddy/AI-Esports-Project",
      live: null
    },
    {
      title: "Horror Hallway Environmental Exploration",
      category: "Game Dev & 3D",
      tags: ["Unity Engine", "Blender 3D", "C# Scripting", "Level Design"],
      date: "June 2025",
      summary: "First-person atmospheric horror game scene designed in Blender and built in Unity.",
      fullDescription: "A dark first-person game environment configured in Unity. All structural geometries, walls, and pillars were modeled, textured, and exported from Blender. Scripted C# camera movement, head-bobbing physics, boundary collisions, and collider-triggered jump scares.",
      features: [
        "Custom head-bob and step velocity tracking in C#",
        "High-poly meshes modeled and UV-unwrapped in Blender",
        "Dynamic collider trigger zones for audio and jump events",
        "High-contrast ambient fog and volumetric lighting setups"
      ],
      github: "https://github.com/igVigneshreddy/Horror-Hallway-project-made-in-blender",
      live: null
    },
    {
      title: "Student SQL Database Management System",
      category: "Data Analytics",
      tags: ["MySQL Workbench", "SQL Procedural", "Database Normalization"],
      date: "July 2025",
      summary: "Relational database model tracking registrations, transactions, and metrics.",
      fullDescription: "A fully normalized MySQL schema designed to coordinate student records, course lists, enrollments, teacher details, fees records, and library borrows. Includes sample transactional checks, automatic unreturned book warnings, and GPA aggregations.",
      features: [
        "10-table normalized relational layout",
        "Integrity checks and table key restrictions",
        "Advanced join, grouping, and averaging scripts",
        "Library transaction borrow logs and fine tracking"
      ],
      github: "https://github.com/igVigneshreddy/Student-Management-System-SQL",
      live: null
    },
    {
      title: "Sugarcane Production Yield Analysis",
      category: "Data Analytics",
      tags: ["Python", "Pandas", "Matplotlib", "Jupyter Notebook"],
      date: "April 2025",
      summary: "Exploratory Data Analysis and regional yield density mapping of agricultural yield data.",
      fullDescription: "A Python-based data science project analyzing global and regional sugarcane yield trends. Cleans raw dataset spreadsheets, handles missing values, detects and cleans outliers, and plots production charts using Matplotlib.",
      features: [
        "Robust outlier filtering and data interpolation",
        "Regional production yield density density metrics",
        "Matplotlib trend graphs and yield maps",
        "Structured Pandas data analytics pipeline"
      ],
      github: "https://github.com/igVigneshreddy/Sugarcane-analysis",
      live: null
    }
  ];

  const categories = ["All", "Data Analytics", "Artificial Intelligence", "Game Dev & 3D"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  // 3D Card Hover Tilt Mathematics Handler (Framer Motion)
  const handleMouseMove = (e, ref) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const rX = -(y / (rect.height / 2)) * 10;
    const rY = (x / (rect.width / 2)) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rX}deg) rotateY(${rY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-6 border-b border-white/5">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] text-cyber-cyan font-mono block">
              // PORTFOLIO
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Project Showcase</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-cyber-cyan to-cyber-violet rounded-full mt-2 mx-auto md:mx-0" />
          </div>

          {/* Categories Filter tab */}
          <div className="flex flex-wrap justify-center gap-2.5 p-1.5 bg-[#0b091f] border border-white/5 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider rounded-lg transition-all cursor-none ${
                  filter === cat
                    ? "bg-cyber-cyan text-[#030014] font-bold shadow-[0_0_15px_rgba(0,229,255,0.25)]"
                    : "text-cyber-muted hover:text-white"
                }`}
              >
                {cat === "Artificial Intelligence" ? "AI" : cat === "Game Dev & 3D" ? "3D & Game" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="interactive-card flex flex-col justify-between h-[380px] p-6 bg-[#0c0a21] border border-white/5 hover:border-cyber-cyan/30 rounded-2xl cursor-none transition-all duration-300 relative group overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setSelectedProject(project)}
              >
                {/* Visual back-glowing radial */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyber-cyan/0 via-cyber-cyan/0 to-cyber-violet/5 group-hover:to-cyber-cyan/5 transition-all duration-500 pointer-events-none" />
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyber-cyan">
                      <Folder className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-cyber-muted uppercase tracking-wider">
                      {project.date}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase text-cyber-cyan tracking-[0.15em] block">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-cyber-cyan transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-cyber-muted text-xs leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  {/* Tag List */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-[9px] font-mono px-2 py-0.5 bg-cyber-violet/10 text-cyber-violet rounded border border-cyber-violet/20">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons */}
                  <div className="flex justify-between items-center text-xs pt-1">
                    <span className="text-cyber-cyan group-hover:glow-cyan font-mono text-[10px] uppercase tracking-wider flex items-center gap-1">
                      <Code className="w-3.5 h-3.5" /> Details
                    </span>
                    <div className="flex gap-3 pointer-events-auto" onClick={(e) => e.stopPropagation()}>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg transition-colors cursor-none"
                          title="View Repository"
                        >
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Window */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

      </div>
    </section>
  );
}
