import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, Mail, MapPin, Phone } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import confetti from "canvas-confetti";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("sending");

    // Simulate server POST submission
    setTimeout(() => {
      setStatus("success");
      
      // Trigger canvas-confetti blast!
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#00e5ff", "#8b5cf6", "#f59e0b"]
      });

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      setTimeout(() => {
        setStatus("idle");
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Section Heading */}
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs uppercase tracking-[0.25em] text-cyber-amber font-mono block">
            // GET IN TOUCH
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Contact</h2>
          <div className="w-12 h-1 bg-gradient-to-r from-cyber-amber to-cyber-cyan rounded-full mt-2 mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Let's Discuss a Project</h3>
              <p className="text-cyber-muted text-sm leading-relaxed">
                I am looking for internship opportunities in **Data Analytics** and **SQL Database Engineering**. If you have an opening, or want to discuss my projects, drop me a message!
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4 font-mono text-xs">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-cyan/30 transition-all duration-300">
                <Mail className="w-5 h-5 text-cyber-cyan shrink-0" />
                <div>
                  <span className="text-[10px] text-cyber-muted uppercase block">Email Address</span>
                  <a href="mailto:vigneshreddy139@gmail.com" className="text-white hover:text-cyber-cyan transition-colors cursor-none">vigneshreddy139@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-cyan/30 transition-all duration-300">
                <Phone className="w-5 h-5 text-cyber-cyan shrink-0" />
                <div>
                  <span className="text-[10px] text-cyber-muted uppercase block">Mobile Phone</span>
                  <a href="tel:+917736955188" className="text-white hover:text-cyber-cyan transition-colors cursor-none">+91 7736955188</a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-cyan/30 transition-all duration-300">
                <MapPin className="w-5 h-5 text-cyber-cyan shrink-0" />
                <div>
                  <span className="text-[10px] text-cyber-muted uppercase block">Location</span>
                  <span className="text-white">Cochin, Kerala, India</span>
                </div>
              </div>
            </div>

            {/* Social Icons row */}
            <div className="flex gap-4">
              <a
                href="https://github.com/igVigneshreddy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 hover:bg-cyber-cyan/20 border border-white/10 hover:border-cyber-cyan/50 text-white hover:text-cyber-cyan flex items-center justify-center rounded-xl hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all cursor-none"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="http://www.linkedin.com/in/karnavignesh"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/5 hover:bg-cyber-violet/20 border border-white/10 hover:border-cyber-violet/50 text-white hover:text-cyber-violet flex items-center justify-center rounded-xl hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all cursor-none"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <form 
              onSubmit={handleSubmit} 
              className="glass-card p-6 md:p-8 rounded-2xl border border-white/5 space-y-6 relative overflow-hidden"
            >
              {/* Form top glowing line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-amber/30 to-transparent" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-cyber-muted tracking-wider block">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-[#0a081a] border border-white/10 hover:border-white/20 focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(0,229,255,0.15)] text-sm rounded-xl text-white outline-none transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase text-cyber-muted tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-[#0a081a] border border-white/10 hover:border-white/20 focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(0,229,255,0.15)] text-sm rounded-xl text-white outline-none transition-all duration-300"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase text-cyber-muted tracking-wider block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject title"
                  className="w-full px-4 py-3 bg-[#0a081a] border border-white/10 hover:border-white/20 focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(0,229,255,0.15)] text-sm rounded-xl text-white outline-none transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="font-mono text-[10px] uppercase text-cyber-muted tracking-wider block">Message Details</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Tell me about your project opportunity..."
                  className="w-full px-4 py-3 bg-[#0a081a] border border-white/10 hover:border-white/20 focus:border-cyber-cyan focus:shadow-[0_0_12px_rgba(0,229,255,0.15)] text-sm rounded-xl text-white outline-none resize-none transition-all duration-300"
                />
              </div>

              {/* Action Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 bg-cyber-amber hover:bg-[#e08f00] text-[#030014] font-bold rounded-xl hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-none disabled:opacity-50"
              >
                {status === "sending" ? (
                  <span className="w-5 h-5 border-2 border-[#030014] border-t-transparent rounded-full animate-spin" />
                ) : status === "success" ? (
                  <>
                    <CheckCircle className="w-5 h-5" /> Submitted!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" /> Send Message
                  </>
                )}
              </button>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl text-xs text-center font-mono"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    Thank you! Your message was submitted successfully. (Dummy simulation completed)
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
