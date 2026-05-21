import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Bot,
  Building2,
  CheckCircle2,
  ChevronRight,
  Globe2,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Target,
  Users,
  UserCheck,
  ArrowUpRight,
  Activity,
  UserPlus,
  Layout,
  Zap,
  Globe,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const fadeIn = {
  hidden: { opacity: 0, scale: 0.85, y: 100, rotateY: 35, rotateX: 20, filter: "blur(12px)" },
  visible: { opacity: 1, scale: 1, y: 0, rotateY: 0, rotateX: 0, filter: "blur(0px)", transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const crazyHover = {
  hover: {
    scale: 1.04,
    rotateY: 12,
    rotateX: -8,
    skewX: 1,
    z: 50,
    boxShadow: "-15px 30px 50px rgba(0,0,0,0.25)",
    filter: "contrast(1.1) brightness(1.1)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const crazyFloat = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 2, -1, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseGlow = {
  animate: {
    scale: [1, 1.15, 1],
    opacity: [0.3, 0.7, 0.3],
    rotate: [0, 180, 360],
    transition: { repeat: Infinity, duration: 10, ease: "linear" }
  }
};

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 4);
    }, 4500); // cycle every 4.5 seconds
    return () => clearInterval(interval);
  }, []);

  const phoneNumber = "9054622278";
  const email = "sqbrandingco@gmail.com";
  // Assuming international format for WhatsApp (Canada/US code 1)
  const whatsappLink = `https://wa.me/1${phoneNumber}`; 
  const phoneLink = `tel:${phoneNumber}`;
  const emailLink = `mailto:${email}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex-shrink-0 flex items-center">
            {/* The logo should be placed in the public/ directory as logo.png */}
            <img src="/logo.png" alt="SQ Branding Logo" className="h-10 w-auto mr-3" onError={(e) => {
              // Fallback to text if image not found
              (e.currentTarget.parentElement as HTMLElement).innerHTML = '<span class="text-2xl font-bold tracking-tighter text-white">SQ BRANDING</span>';
            }} />
            <span className="text-2xl font-bold tracking-tighter text-white sr-only">
              SQ BRANDING
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">About Us</a>
            <a href="#why-us" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Why Us</a>
            <div className="flex items-center space-x-4">
              <a 
                href={phoneLink}
                className="inline-flex items-center justify-center px-4 py-2 border border-white/20 text-white text-sm font-medium rounded hover:bg-white/10 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                {phoneNumber}
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 bg-white text-black text-sm font-medium rounded hover:bg-gray-200 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        {/* Abstract 3D Hero Visual */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center pointer-events-none opacity-90 scale-[0.6] xl:scale-90 origin-right translate-x-[15%] xl:translate-x-[5%] -mt-10">
          <div className="relative w-[800px] h-[800px] flex items-center justify-center perspective-[1200px]">
            {/* Background spinning rings */}
            <motion.div 
               animate={{ rotate: 360, rotateX: 20, rotateY: 10 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
               className="absolute w-[600px] h-[600px] rounded-full border border-gray-300 border-dashed opacity-40"
            />
            <motion.div 
               animate={{ rotate: -360, rotateX: -10, rotateY: 20 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute w-[450px] h-[450px] rounded-full border-[1.5px] border-gray-200 opacity-60"
            />
            <motion.div 
               animate={{ rotate: 360, rotateX: 30, rotateY: 40 }}
               transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
               className="absolute w-[750px] h-[750px] rounded-full border border-gray-200 border-dotted opacity-50"
            />

            {/* Central Animated Node */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10 bg-black w-32 h-32 rounded-2xl flex items-center justify-center shadow-[0_0_40px_rgba(0,0,0,0.15)] shadow-black/80 rotate-45 border border-gray-800"
            >
               <motion.div 
                  animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-16 h-16 bg-white/10 rounded-xl relative flex items-center justify-center -rotate-45 overflow-hidden"
               >
                  <div className="absolute inset-0 bg-white/20 blur-md rounded-xl" />
                  <AnimatePresence mode="wait">
                    {activeIndex === 0 && <motion.div key="0" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="absolute"><Bot className="w-8 h-8 text-white relative z-10" /></motion.div>}
                    {activeIndex === 1 && <motion.div key="1" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="absolute"><Target className="w-8 h-8 text-white relative z-10" /></motion.div>}
                    {activeIndex === 2 && <motion.div key="2" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="absolute"><Layout className="w-8 h-8 text-white relative z-10" /></motion.div>}
                    {activeIndex === 3 && <motion.div key="3" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }} className="absolute"><Zap className="w-8 h-8 text-white relative z-10" /></motion.div>}
                  </AnimatePresence>
               </motion.div>
               <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap -rotate-45 font-bold text-[10px] tracking-widest uppercase text-black">
                  <AnimatePresence mode="wait">
                    {activeIndex === 0 && <motion.span key="0" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute left-1/2 -translate-x-1/2">AI RECEPTIONIST</motion.span>}
                    {activeIndex === 1 && <motion.span key="1" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute left-1/2 -translate-x-1/2">AD PERFORMANCE</motion.span>}
                    {activeIndex === 2 && <motion.span key="2" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute left-1/2 -translate-x-1/2">WEB DESIGN</motion.span>}
                    {activeIndex === 3 && <motion.span key="3" initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 5 }} className="absolute left-1/2 -translate-x-1/2">LEAD PIPELINE</motion.span>}
                  </AnimatePresence>
               </div>
            </motion.div>

            {/* Lines connecting center to node using SVG */}
            <svg className="absolute w-[800px] h-[800px] inset-0 z-0 pointer-events-none opacity-40" viewBox="0 0 800 800">
               <motion.line x1="400" y1="400" x2="200" y2="240" stroke="black" strokeWidth="2" strokeDasharray="6 6" animate={{ strokeDashoffset: [0, 24] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
            </svg>

            {/* Dynamic Floating Panel Structure */}
            <div className="absolute z-20 left-[5%] top-[15%]">
            <AnimatePresence mode="wait">
              {/* Panel 1 - AI Receptionist */}
              {activeIndex === 0 && (
              <motion.div 
                key="panel-1"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5 }}
                className="bg-white/70 backdrop-blur-2xl border border-white p-4 rounded-xl shadow-2xl w-[260px] flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-black uppercase tracking-wider">AI Receptionist</h4>
                    <p className="text-[9px] text-gray-500 font-medium">● 24/7 Active • Calls Managed</p>
                  </div>
                </div>
                <div className="space-y-2 mt-1">
                  <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["20%", "80%", "45%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="h-full bg-black rounded-full"
                      />
                  </div>
                  <div className="h-1.5 w-3/4 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        animate={{ width: ["40%", "90%", "60%"] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="h-full bg-gray-500 rounded-full"
                      />
                  </div>
                </div>
              </motion.div>
              )}

              {/* Panel 2 - Ad Performance */}
              {activeIndex === 1 && (
              <motion.div 
                key="panel-2"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5 }}
                className="bg-white/70 backdrop-blur-2xl border border-white p-4 rounded-xl shadow-2xl w-[260px] flex flex-col gap-3"
              >
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-black" />
                      <h4 className="text-[10px] font-bold text-black uppercase tracking-wider">Paid Ads / ROI</h4>
                    </div>
                    <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[9px] font-bold flex items-center gap-1">
                      <ArrowUpRight className="w-3 h-3" /> 412%
                    </div>
                </div>
                <div className="flex items-end gap-1 h-12 w-full">
                    {[40, 60, 45, 80, 55, 90, 70, 100].map((h, i) => (
                      <motion.div 
                        key={i}
                        animate={{ height: [`${h * 0.5}%`, `${h}%`, `${h * 0.7}%`] }}
                        transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-full bg-black rounded-t-sm"
                      />
                    ))}
                </div>
              </motion.div>
              )}

              {/* Panel 3 - Web Development */}
              {activeIndex === 2 && (
              <motion.div 
                key="panel-3"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5 }}
                className="bg-white/70 backdrop-blur-2xl border border-white p-4 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-[260px] flex flex-col gap-3"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                      <Layout className="w-5 h-5 text-black" />
                  </div>
                  <div>
                      <h4 className="text-[11px] font-bold text-black uppercase tracking-wider">Web Design</h4>
                      <p className="text-[9px] text-gray-500 font-medium">Conversion Optimized</p>
                  </div>
                </div>
                
                <div className="w-full h-24 bg-gray-100 rounded border border-gray-200 p-2 flex flex-col gap-2 relative overflow-hidden">
                  {/* Mini wireframe animation */}
                  <div className="w-full flex gap-2">
                    <div className="h-3 w-1/3 bg-gray-300 rounded-sm"></div>
                    <div className="h-3 w-2/3 bg-gray-200 rounded-sm"></div>
                  </div>
                  <div className="flex-1 w-full bg-gray-200 rounded-sm border border-gray-300/50 relative overflow-hidden">
                      <motion.div 
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12"
                      />
                  </div>
                </div>
              </motion.div>
              )}

              {/* Panel 4 - Lead Generation */}
              {activeIndex === 3 && (
              <motion.div 
                key="panel-4"
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5 }}
                className="bg-black backdrop-blur-xl p-5 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] w-[260px] text-white border border-gray-800"
              >
                <h4 className="text-[10px] font-medium text-gray-400 uppercase tracking-widest mb-4 flex items-center justify-between">
                    <span className="flex items-center gap-2"><Zap className="w-3 h-3 text-yellow-400" /> Lead Pipeline</span>
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                </h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-black tracking-tighter text-white">482</span>
                  <span className="text-xs text-gray-400 font-medium tracking-wide">Qualified</span>
                </div>
                <svg className="w-full h-10 mt-2 overflow-visible" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <motion.path 
                    d="M0,20 Q20,20 40,10 T80,0 T100,5" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="2"
                    animate={{ strokeDashoffset: [100, 0], d: ["M0,20 Q20,20 40,10 T80,0 T100,5", "M0,20 Q20,15 40,10 T80,5 T100,0", "M0,20 Q20,20 40,10 T80,0 T100,5"] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    strokeDasharray="100 100"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="max-w-3xl">
            <motion.div variants={fadeIn} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <Target className="w-4 h-4 text-gray-600" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                Private Brand Development
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl lg:text-7xl font-bold tracking-tight text-black mb-8 leading-[1.1] relative">
              <span className="block mb-2">Clarity in Brand.</span>
              <span className="block h-[1.2em] relative overflow-hidden whitespace-nowrap">
                <AnimatePresence mode="popLayout">
                  {activeIndex === 0 && <motion.span key="0" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">Strength in Growth</motion.span>}
                  {activeIndex === 1 && <motion.span key="1" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">24/7 Automation</motion.span>}
                  {activeIndex === 2 && <motion.span key="2" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">Modern Assets</motion.span>}
                  {activeIndex === 3 && <motion.span key="3" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -50, opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-black">Scalable ROI</motion.span>}
                </AnimatePresence>
              </span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-lg text-gray-600 mb-10 max-w-2xl leading-relaxed">
              We build high-performance digital systems for modern businesses, combining professional web design, AI receptionists, and targeted advertising to capture and convert more leads.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href={phoneLink}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-black text-white text-sm font-semibold rounded hover:bg-gray-900 transition-all group"
              >
                Call Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-gray-300 bg-white text-black text-sm font-semibold rounded hover:border-black transition-all"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Infinite Slideshow Animation */}
        <div className="mt-20 w-full relative flex flex-col justify-center overflow-hidden border-y border-gray-100 bg-white py-12 md:py-20">
            <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Top Band - Moving Left */}
              <div className="flex relative items-center w-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
                    className="flex whitespace-nowrap items-center w-max"
                  >
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center space-x-6 md:space-x-12 px-3 md:px-6">
                        <span className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase tracking-widest text-black">Brand Strategy</span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase tracking-widest text-gray-200">AI Receptionists</span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-200 rounded-full"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase tracking-widest text-black">Lead Generation</span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase tracking-widest text-gray-200">Web Development</span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-200 rounded-full"></span>
                      </div>
                    ))}
                  </motion.div>
              </div>

              {/* Bottom Band - Moving Right */}
              <div className="flex relative items-center w-full overflow-hidden">
                  <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
                    className="flex whitespace-nowrap items-center w-max"
                  >
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center space-x-6 md:space-x-12 px-3 md:px-6">
                        <span className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase tracking-widest text-gray-200">Modern Assets</span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-200 rounded-full"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase tracking-widest text-black">Scale Rapidly</span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase tracking-widest text-gray-200">Conversion Focus</span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-gray-200 rounded-full"></span>
                        <span className="text-xl md:text-2xl lg:text-4xl font-semibold uppercase tracking-widest text-black">Data Driven</span>
                        <span className="w-2 h-2 md:w-3 md:h-3 bg-black rounded-full"></span>
                      </div>
                    ))}
                  </motion.div>
              </div>
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-16 max-w-2xl"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-4">
              Modern Systems for Local Growth
            </h2>
            <p className="text-gray-600 text-lg">
              We implement professional digital infrastructure to elevate your brand presence and automate customer acquisition.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {/* Service 1 */}
            <motion.div variants={fadeIn} whileHover="hover" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-2xl transition-all">
              <motion.div variants={crazyFloat} animate="animate" className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6">
                <Bot className="w-6 h-6 text-black" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3">AI Receptionist Systems</h3>
              <p className="text-gray-600 leading-relaxed">
                Never miss a customer inquiry. We deploy intelligent AI agents to handle calls, book appointments, and answer common questions 24/7, behaving just like an office receptionist.
              </p>
            </motion.div>

            {/* Service 2 */}
            <motion.div variants={fadeIn} whileHover="hover" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-2xl transition-all">
              <motion.div variants={crazyFloat} animate="animate" className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-black" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3">Paid Advertising</h3>
              <p className="text-gray-600 leading-relaxed">
                Strategic ad campaigns designed for immediate return on investment. We target your exact customer demographic to bring high-intent traffic directly to your business.
              </p>
            </motion.div>

            {/* Service 3 */}
            <motion.div variants={fadeIn} whileHover="hover" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-2xl transition-all">
              <motion.div variants={crazyFloat} animate="animate" className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6">
                <Globe2 className="w-6 h-6 text-black" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3">Website Design & Redesign</h3>
              <p className="text-gray-600 leading-relaxed">
                Your digital storefront matters. We craft corporate-grade, conversion-optimized websites that establish trust and look flawless on every device.
              </p>
            </motion.div>

            {/* Service 4 */}
            <motion.div variants={fadeIn} whileHover="hover" className="bg-white p-8 border border-gray-100 rounded-lg shadow-sm hover:shadow-2xl transition-all">
              <motion.div variants={crazyFloat} animate="animate" className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center mb-6">
                <LineChart className="w-6 h-6 text-black" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-3">Lead Generation</h3>
              <p className="text-gray-600 leading-relaxed">
                Consistent, predictable pipelines. We capture prospect data and funnel qualified leads directly into your sales process, so you can focus on closing.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mb-6">
                Elevating Modern Businesses.
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At <strong>SQ Branding</strong>, we bridge the gap between strong brand presentation and measurable growth. We understand that a great brand must look professional and perform impeccably.
                </p>
                <p>
                  Our approach is deeply tailored to the realities of local business. Whether you need a corporate website overhaul or an AI system to capture after-hours inquiries, we build it to a premium standard. 
                </p>
                <p>
                  Our goal is simple: construct digital assets that command respect and generate quantifiable leads for your business.
                </p>
              </div>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Card 1: AI */}
                <motion.div variants={fadeIn} className="bg-[#0a0a0a] rounded-2xl p-5 border border-gray-800 flex flex-col gap-4 shadow-xl hover:border-gray-600 transition-colors">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">AI Receptionist<br/>Systems</h3>
                    <div className="w-6 h-[2px] bg-white/20 mb-3"></div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">24/7 AI-powered receptionists that answer calls, qualify leads, and book appointments automatically.</p>
                  </div>
                  <div className="mt-auto flex flex-col gap-2">
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-center gap-3">
                      <div className="bg-green-500/20 p-1.5 rounded-full"><Phone className="w-3.5 h-3.5 text-green-500" /></div>
                      <div><p className="text-[9px] text-gray-400">Incoming Call</p><p className="text-[11px] text-white tracking-wider">+1 (555) 123-4567</p></div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 flex items-start gap-2.5 w-[90%] self-end">
                      <div className="bg-white p-1 rounded-full shrink-0"><Bot className="w-3 h-3 text-black" /></div>
                      <div><p className="text-[10px] text-white">AI Receptionist</p><p className="text-[10px] text-gray-400 mt-1 leading-snug">Hi, how can I help you today?</p></div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: Ads */}
                <motion.div variants={fadeIn} className="bg-[#0a0a0a] rounded-2xl p-5 border border-gray-800 flex flex-col gap-4 shadow-xl hover:border-gray-600 transition-colors">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Paid<br/>Advertising</h3>
                    <div className="w-6 h-[2px] bg-white/20 mb-3"></div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Data-driven ad campaigns that maximize reach, generate quality leads, and scale your ROI.</p>
                  </div>
                  <div className="mt-auto bg-[#141414] border border-white/5 rounded-lg p-3 group">
                    <div className="flex justify-between items-start mb-4">
                      <div><p className="text-[9px] text-gray-500 mb-0.5">Total Spend</p><p className="text-sm text-white font-semibold">$24,500</p></div>
                      <div className="text-right"><p className="text-[9px] text-gray-500 mb-0.5">Leads</p><p className="text-sm border border-green-500/30 text-green-400 bg-green-500/10 px-1.5 rounded font-medium">312</p></div>
                    </div>
                    <div className="h-12 w-full flex items-end gap-1">
                      {[30, 45, 35, 60, 50, 80, 65, 90, 75, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-white/5 to-white/20 rounded-sm group-hover:from-white/10 group-hover:to-white/30 transition-all duration-500" style={{ height: `${h}%` }}></div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Card 3: Web */}
                <motion.div variants={fadeIn} className="bg-[#0a0a0a] rounded-2xl p-5 border border-gray-800 flex flex-col gap-4 shadow-xl hover:border-gray-600 transition-colors">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Website Design<br/>& Redesign</h3>
                    <div className="w-6 h-[2px] bg-white/20 mb-3"></div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">High-converting, premium websites that elevate your brand and turn visitors into customers.</p>
                  </div>
                  <div className="mt-auto bg-black border border-white/10 rounded-t-lg rounded-b-sm h-32 relative overflow-hidden pt-2 px-1 shadow-2xl">
                    <div className="flex gap-1 px-2 mb-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                    </div>
                    <div className="border border-white/10 h-full rounded-t px-3 py-4 bg-gradient-to-br from-gray-900 to-[#050505] relative group">
                      <p className="text-[7px] text-gray-500 tracking-widest uppercase mb-1.5">Brand</p>
                      <h4 className="text-[11px] sm:text-[10px] md:text-xs font-bold text-white leading-tight transition-transform duration-500 group-hover:scale-[1.02]">Elevate Your Brand.<br/>Drive Real Results.</h4>
                      <div className="mt-3 w-16 h-5 border border-white/20 rounded text-[8px] flex items-center justify-center text-white bg-white/5 transition-colors duration-300 group-hover:bg-white/20">Book a Call</div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: Lead Gen */}
                <motion.div variants={fadeIn} className="bg-[#0a0a0a] rounded-2xl p-5 border border-gray-800 flex flex-col gap-4 shadow-xl hover:border-gray-600 transition-colors">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Lead<br/>Generation</h3>
                    <div className="w-6 h-[2px] bg-white/20 mb-3"></div>
                    <p className="text-[11px] text-gray-400 leading-relaxed">Proven systems that attract, capture, and convert the right leads into paying customers.</p>
                  </div>
                  <div className="mt-auto flex flex-col items-center gap-1.5">
                    <div className="w-full bg-white/5 py-2 px-3 rounded-t-xl rounded-b-md border border-white/5 flex justify-between items-center transition-all hover:bg-white/10">
                      <div className="flex items-center gap-2"><Users className="w-3 h-3 text-gray-400"/><span className="text-[10px] text-gray-400">Traffic</span></div>
                      <span className="text-[11px] text-white">10,842</span>
                    </div>
                    <div className="w-[85%] bg-white/10 py-2 px-3 rounded-md border border-white/10 flex justify-between items-center transition-all hover:bg-white/20">
                      <div className="flex items-center gap-2"><UserCheck className="w-3 h-3 text-gray-300"/><span className="text-[10px] text-gray-300">Leads</span></div>
                      <span className="text-[11px] text-white">1,256</span>
                    </div>
                    <div className="w-[70%] bg-white py-2 px-3 rounded-t-md rounded-b-xl flex justify-between items-center border border-white hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-black"/><span className="text-[10px] text-black font-medium">Clients</span></div>
                      <span className="text-[11px] text-black font-bold">89</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section id="why-us" className="py-24 bg-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            <div>
              <motion.h2 variants={fadeIn} className="text-3xl lg:text-4xl font-bold tracking-tight mb-6">
                Built on Reliability.
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-400 text-lg mb-8 leading-relaxed">
                We operate with clarity and precision, without reliance on superficial messaging. Our strategies are built on established direct-response principles, reinforced by advanced systems, and executed with discipline. Every decision is guided by the metrics that materially impact business performance.
              </motion.p>
              
              <ul className="space-y-4">
                {[
                  "Corporate-Standard Execution & Professionalism",
                  "Data-Driven Advertising Strategies",
                  "Cutting-Edge AI Infrastructure",
                  "Dedicated Local Support"
                ].map((item, i) => (
                  <motion.li variants={fadeIn} key={i} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-gray-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotateY: 90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover="hover"
              variants={crazyHover}
              className="bg-white/5 border border-white/10 rounded-lg p-8 sm:p-12 flex flex-col justify-center relative overflow-hidden group"
            >
              <motion.div variants={pulseGlow} animate="animate" className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700 -mr-10 -mt-10"></motion.div>
              <motion.div variants={crazyFloat} animate="animate">
                <Building2 className="w-12 h-12 text-white/50 mb-6 relative z-10" />
              </motion.div>
              <h3 className="text-2xl font-semibold mb-4 relative z-10">Our Commitment</h3>
              <p className="text-gray-400 leading-relaxed relative z-10">
                "We guarantee transparent communication, uncompromising design quality, and a rigorous focus on transforming your digital presence into a measurable asset."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-6">
              Trusted by Local Businesses
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              See what our partners have to say about the growth and clarity we bring to their brands.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Testimonial 1 */}
            <motion.div variants={fadeIn} className="p-8 border border-gray-200 rounded-xl bg-gray-50 flex flex-col relative before:absolute before:-top-4 before:left-8 before:text-6xl before:text-gray-300 before:content-['\201C']">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 flex-1 italic relative z-10">
                "Working with SQ Branding transformed our online presence. The new website looks incredible, and our lead volume more than doubled in the first month. They truly understand local service businesses."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">JD</div>
                <div>
                  <h4 className="font-bold text-black">John D.</h4>
                  <p className="text-sm text-gray-500">Local HVAC Service</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div variants={fadeIn} className="p-8 border border-gray-200 rounded-xl bg-gray-50 flex flex-col relative before:absolute before:-top-4 before:left-8 before:text-6xl before:text-gray-300 before:content-['\201C']">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 flex-1 italic relative z-10">
                "They didn't just build us a website; they built a lead generation machine. The entire process was smooth, professional, and zero-headache. Highly recommended."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">SM</div>
                <div>
                  <h4 className="font-bold text-black">Sarah M.</h4>
                  <p className="text-sm text-gray-500">Auto Detailing Pros</p>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div variants={fadeIn} className="p-8 border border-gray-200 rounded-xl bg-gray-50 flex flex-col relative before:absolute before:-top-4 before:left-8 before:text-6xl before:text-gray-300 before:content-['\201C']">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-gray-700 mb-6 flex-1 italic relative z-10">
                "The AI receptionist feature alone saved us from missing so many after-hours calls. Everything feels incredibly premium, and it has elevated our entire brand perception."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold mr-4">MR</div>
                <div>
                  <h4 className="font-bold text-black">Mike R.</h4>
                  <p className="text-sm text-gray-500">Premium Plumbing</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Call to Action / Contact */}
      <section id="contact" className="py-24 bg-gray-50 border-t border-gray-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <motion.h2 variants={fadeIn} className="text-3xl lg:text-5xl font-bold tracking-tight text-black mb-6">
              Ready to Upgrade Your Systems?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-gray-600">
              Explore how we can elevate and scale your business through focused strategy and execution.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {/* Phone CTA */}
            <motion.a variants={fadeIn} whileHover="hover" href={phoneLink} className="group bg-white p-8 border border-gray-200 rounded-lg hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center">
              <motion.div variants={crazyFloat} animate="animate" className="w-16 h-16 bg-gray-50 rounded-full flex justify-center items-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <Phone className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
              <p className="text-gray-500 font-medium">{phoneNumber}</p>
            </motion.a>

            {/* WhatsApp CTA */}
            <motion.a variants={fadeIn} whileHover="hover" href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group bg-white p-8 border border-gray-200 rounded-lg hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center">
              <motion.div variants={crazyFloat} animate="animate" className="w-16 h-16 bg-gray-50 rounded-full flex justify-center items-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <MessageCircle className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-2">WhatsApp</h3>
              <p className="text-gray-500 font-medium">Message Now</p>
            </motion.a>

            {/* Email CTA */}
            <motion.a variants={fadeIn} whileHover="hover" href={emailLink} className="group bg-white p-8 border border-gray-200 rounded-lg hover:-translate-y-4 hover:shadow-2xl transition-all duration-300 text-center flex flex-col items-center">
              <motion.div variants={crazyFloat} animate="animate" className="w-16 h-16 bg-gray-50 rounded-full flex justify-center items-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                <Mail className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-bold text-black mb-2">Email</h3>
              <p className="text-gray-500 font-medium">{email}</p>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-3">
                <img src="/logo.png" alt="SQ Branding Logo" className="h-12 w-auto mr-3" onError={(e) => {
                  (e.currentTarget.parentElement as HTMLElement).innerHTML = '<span class="text-2xl font-bold tracking-tighter text-white block">SQ BRANDING</span>';
                }} />
                <span className="text-2xl font-bold tracking-tighter text-white block sr-only">SQ BRANDING</span>
              </div>
              <p className="text-gray-400 text-sm">Clarity in Brand. Strength in Growth.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
              <a href={phoneLink} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                {phoneNumber}
              </a>
              <a href={emailLink} className="flex items-center text-sm text-gray-300 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                {email}
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} SQ Branding. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

