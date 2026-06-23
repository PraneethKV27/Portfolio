import React, { useState } from 'react';
import { Mail, MapPin, Send, Cpu, Award, Briefcase, FileCode } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImg from './assets/profile.jpg';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const stats = [
    { label: 'Projects Completed', val: 12 },
    { label: 'Internships', val: 2 },
    { label: 'Hackathons', val: 3 },
    { label: 'Certifications', val: 15 },
  ];

  const skills = [
    { name: 'Embedded Systems', category: 'ECE Core' },
    { name: 'C Programming', category: 'Language' },
    { name: 'Embedded C', category: 'Language' },
    { name: 'Python', category: 'Language' },
    { name: 'IoT', category: 'ECE Core' },
    { name: 'Arduino', category: 'Hardware' },
    { name: 'ESP32', category: 'Hardware' },
    { name: 'STM32', category: 'Hardware' },
    { name: 'Microcontrollers', category: 'Hardware' },
    { name: 'Digital Electronics', category: 'ECE Core' },
    { name: 'Analog Electronics', category: 'ECE Core' },
    { name: 'VLSI Basics', category: 'ECE Core' },
    { name: 'PCB Design', category: 'Hardware' },
    { name: 'Communication Systems', category: 'ECE Core' },
    { name: 'AWS Cloud Basics', category: 'Web' },
    { name: 'Git & GitHub', category: 'Web' },
    { name: 'SQL', category: 'Database' },
  ];

  const projects = [
    {
      title: 'Smart Voting System using Fingerprint Authentication',
      desc: 'An advanced secure voting kiosk utilizing embedded fingerprint sensor scanner module for biometric identity validation and automated tally counts on an STM32 host processor.',
      tech: ['STM32', 'Fingerprint Module', 'C++', 'Firebase'],
      github: 'https://github.com/PraneethKV27/evm-system',
      live: 'https://github.com/PraneethKV27/evm-system#%EF%B8%8F-secevm--biometric-evm-secure-voting-system',
      icon: '🗳️'
    },
    {
      title: 'Climate Tech - Ecoo Monitor',
      desc: 'Real-time climate tracking and environmental monitoring hub integrating hardware-to-cloud interfaces for atmospheric metrics analysis.',
      tech: ['ESP32', 'Sensors', 'Cloud', 'Website'],
      github: 'https://github.com/PraneethKV27/ecoo-monitor',
      live: 'https://github.com/PraneethKV27/ecoo-monitor/blob/main/README.md',
      icon: '🌱'
    },
    {
      title: 'Embedded Automation Project',
      desc: 'A modular relay controller and servo gateway enabling automatic lighting, safety triggers, and motion activations inside prototyping lab setups.',
      tech: ['STM32', 'Relay Module', 'Servo Motor', 'C'],
      github: '#',
      live: '#',
      icon: '🤖'
    },
    {
      title: 'AI Powered Electronics Assistant',
      desc: 'Smart terminal tool processing custom voice commands and visual inputs using pre-trained convolutional neural networks to identify ECE resistors and microchips on real-time cameras.',
      tech: ['Python', 'OpenCV', 'Raspberry Pi', 'TensorFlow'],
      github: '#',
      live: '#',
      icon: '🧠'
    }
  ];

  const timeline = [
    {
      role: 'Documentation Team Lead',
      company: 'ISTE Champs (SVEC & MBU) - MOHAN BABU UNIVERSITY',
      period: 'Sep 2025 - Present',
      desc: 'Responsible for creating, curating, and managing all official records, reports, and content for ISTE activities and events, ensuring professional record-keeping and communications.',
      type: 'leadership'
    },
    {
      role: 'Web Development Team Member',
      company: 'ISTE Champs (SVEC & MBU) - Mohan Babu University',
      period: 'Feb 2025 - Present',
      desc: 'Collaborating on layout design, UI implementation, and deploying features for student portal web solutions combining human and AI collaboration tooling.',
      type: 'internship'
    },
    {
      role: 'Coordinator',
      company: 'ISTE Champs (SVEC & MBU) - MOHAN BABU UNIVERSITY',
      period: 'Dec 2024 - Present',
      desc: 'Coordinating events, management pipelines, and team tasks to ensure smooth execution of university technological society workshops.',
      type: 'leadership'
    }
  ];

  const handleForm = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen text-gray-100 cyber-grid select-none overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-20">
        <div className="z-10 text-left max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-3 py-1 bg-cyan-500/10 border border-cyan-400/30 rounded-full w-fit mb-6"
          >
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></span>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">ECE SYSTEM ONLINE</span>
          </motion.div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-2">
            <span className="font-tech text-gray-400 block text-lg uppercase tracking-[0.25em] mb-1">HELLO EVERYONE 👋 I'M</span>
            <span className="font-cyber text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
              KORNIPALLI VENKATESH PRANEETH
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl font-semibold font-tech text-gray-300 mt-4 tracking-wide">
            Electronics & Communication Engineering Student
          </h2>
          <p className="mt-4 text-gray-400 font-mono text-sm leading-relaxed max-w-xl">
            Embedded Systems • IoT • AI • Robotics • VLSI Enthusiast. Passionate about linking hardware boards, circuits, firmware chips, and web controllers together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a 
              href="#showcase" 
              className="px-8 py-3.5 rounded-lg font-cyber font-bold tracking-wider text-sm bg-cyan-500 text-gray-950 hover:bg-cyan-400 shadow-glow-cyan hover:shadow-cyan-400/50 transition-all duration-300 border border-cyan-300/40 uppercase"
            >
              Explore My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3.5 rounded-lg font-cyber font-bold tracking-wider text-sm border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/10 text-purple-300 hover:text-glow-purple shadow-glow-purple/20 transition-all duration-300 uppercase"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cyan-500/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-cyber text-glow-cyan text-cyan-400 font-extrabold uppercase tracking-widest mb-6">
              About Me
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed font-tech">
              KORNIPALLI VENKATESH PRANEETH is an Electronics and Communication Engineering student passionate about Embedded Systems, Internet of Things, Artificial Intelligence, Robotics, and modern electronic technologies. Dedicated to building innovative hardware-software solutions and continuously learning emerging technologies.
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl text-center border-cyan-500/10">
                  <span className="text-3xl font-extrabold font-mono text-cyan-400 text-glow-cyan">{s.val}+</span>
                  <span className="block text-xs font-tech text-gray-400 uppercase tracking-widest mt-1">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            {/* Holographic Profile card */}
            <div className="w-64 h-80 glass-panel rounded-3xl p-4 relative overflow-hidden border-cyan-400/30 shadow-glow-cyan flex flex-col justify-center items-center">
              <div className="absolute top-0 left-0 w-full h-full bg-cyan-500/5 backdrop-blur-[2px] -z-10"></div>
              
              {/* Corner tech accents */}
              <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-cyan-400 opacity-60"></div>
              <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-cyan-400 opacity-60"></div>
              <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-cyan-400 opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-cyan-400 opacity-60"></div>

              <div className="text-center">
                <div className="w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto flex items-center justify-center p-0.5 shadow-glow-cyan relative overflow-hidden">
                  <div className="w-full h-full bg-gray-950 rounded-full overflow-hidden flex items-center justify-center">
                    <img 
                      src={profileImg} 
                      alt="Kornipalli Venkatesh Praneeth" 
                      className="w-full h-full object-cover scale-[2.7] object-[center_35%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cyan-500/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-cyber text-glow-cyan text-cyan-400 font-extrabold uppercase tracking-widest">
            Skills Inventory
          </h2>
          <p className="text-gray-400 mt-2 font-tech text-lg max-w-xl mx-auto">
            Categorized technical stack spanning electronics design, embedded firmware, web development, and cloud networks.
          </p>
        </div>

        {/* Grouped Skills Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Hardware & Embedded Systems Category */}
          <div className="glass-panel p-6 rounded-2xl border-cyan-500/10">
            <h3 className="font-cyber font-bold text-cyan-400 text-glow-cyan text-lg mb-4 uppercase tracking-widest border-b border-cyan-500/20 pb-2">
              🔌 Hardware & IoT
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills
                .filter((s) => s.category === 'Hardware')
                .map((s, idx) => (
                  <span
                    key={idx}
                    className="font-tech text-gray-200 bg-cyan-500/5 border border-cyan-500/10 hover:border-cyan-400 hover:text-cyan-300 px-3.5 py-1.5 rounded-lg text-sm transition-all duration-300"
                  >
                    {s.name}
                  </span>
                ))}
            </div>
          </div>

          {/* Software, Programming & Web Category */}
          <div className="glass-panel p-6 rounded-2xl border-purple-500/10">
            <h3 className="font-cyber font-bold text-purple-400 text-glow-purple text-lg mb-4 uppercase tracking-widest border-b border-purple-500/20 pb-2">
              💻 Software & Web
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills
                .filter((s) => s.category === 'Language' || s.category === 'Web' || s.category === 'Database')
                .map((s, idx) => (
                  <span
                    key={idx}
                    className="font-tech text-gray-200 bg-purple-500/5 border border-purple-500/10 hover:border-purple-400 hover:text-purple-300 px-3.5 py-1.5 rounded-lg text-sm transition-all duration-300"
                  >
                    {s.name}
                  </span>
                ))}
            </div>
          </div>

          {/* ECE Core Fundamentals Category */}
          <div className="glass-panel p-6 rounded-2xl border-emerald-500/10">
            <h3 className="font-cyber font-bold text-emerald-400 text-glow-green text-lg mb-4 uppercase tracking-widest border-b border-emerald-500/20 pb-2">
              ⚙️ ECE Core
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {skills
                .filter((s) => s.category === 'ECE Core')
                .map((s, idx) => (
                  <span
                    key={idx}
                    className="font-tech text-gray-200 bg-emerald-500/5 border border-emerald-500/10 hover:border-emerald-400 hover:text-emerald-300 px-3.5 py-1.5 rounded-lg text-sm transition-all duration-300"
                  >
                    {s.name}
                  </span>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cyan-500/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-cyber text-glow-cyan text-cyan-400 font-extrabold uppercase tracking-widest">
            Hardware & Software Projects
          </h2>
          <p className="text-gray-400 mt-2 font-tech text-lg max-w-xl mx-auto">
            Interactive solutions built with modern embedded platforms and sensor modules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border-cyan-500/10 hover:border-purple-400 hover:shadow-glow-purple transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="font-cyber font-bold text-gray-100 text-lg group-hover:text-purple-400 transition-colors uppercase tracking-wider">{p.title}</h3>
                </div>
                <p className="text-sm font-tech text-gray-400 leading-relaxed mb-6">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-mono px-2.5 py-1 bg-purple-500/10 border border-purple-500/20 text-purple-300 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 border-t border-cyan-500/10 pt-4">
                <a href={p.github} className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg> Code
                </a>
                <a href={p.live} className="flex items-center gap-1.5 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors uppercase tracking-wider">
                  <FileCode className="w-4 h-4" /> Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cyan-500/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-cyber text-glow-cyan text-cyan-400 font-extrabold uppercase tracking-widest">
            Timeline & Experience
          </h2>
          <p className="text-gray-400 mt-2 font-tech text-lg max-w-xl mx-auto">
            Professional trajectory, leadership, and product prototyping phases.
          </p>
        </div>

        <div className="relative border-l border-cyan-500/20 max-w-3xl mx-auto pl-6 sm:pl-8">
          {timeline.map((item, i) => (
            <div key={i} className="mb-12 relative">
              {/* Timeline marker */}
              <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-gray-950 border border-cyan-400 flex items-center justify-center shadow-glow-cyan">
                {item.type === 'internship' ? <Briefcase className="w-3.5 h-3.5 text-cyan-400" /> : <Award className="w-3.5 h-3.5 text-purple-400" />}
              </div>

              <div className="glass-panel p-6 rounded-xl border-cyan-500/10">
                <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-400/20 px-2 py-0.5 rounded-md uppercase tracking-wider font-semibold">
                  {item.period}
                </span>
                <h3 className="font-cyber font-bold text-gray-100 text-lg mt-3 uppercase tracking-wider">{item.role}</h3>
                <h4 className="font-tech text-cyan-400 font-medium text-base mb-2">{item.company}</h4>
                <p className="text-sm font-tech text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section id="certifications" className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cyan-500/10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-cyber text-glow-cyan text-cyan-400 font-extrabold uppercase tracking-widest">
            Certifications
          </h2>
          <p className="text-gray-400 mt-2 font-tech text-lg max-w-xl mx-auto">
            Verified credentials, hardware safety courses, and technical programming badges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'AWS Cloud Practitioner', org: 'Amazon Web Services', date: '2025' },
            { title: 'Embedded System Architecture', org: 'Coursera', date: '2024' },
            { title: 'PCB Routing & Layout Pro', org: 'Altium Academy', date: '2024' },
            { title: 'ARM Microcontroller Interfacing', org: 'Udemy', date: '2023' },
            { title: 'VLSI Design Methodology', org: 'NPTEL India', date: '2023' },
            { title: 'Advanced IoT Security and Nodes', org: 'NPTEL India', date: '2023' }
          ].map((c, i) => (
            <div key={i} className="glass-panel p-5 rounded-xl border-cyan-500/10 hover:border-cyan-400 transition-colors">
              <span className="text-xs font-mono text-purple-400">{c.date}</span>
              <h3 className="font-cyber font-bold text-gray-100 text-base mt-1 uppercase tracking-wider">{c.title}</h3>
              <p className="text-xs font-tech text-gray-400 mt-2">{c.org}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-cyan-500/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-cyber text-glow-cyan text-cyan-400 font-extrabold uppercase tracking-widest mb-6">
              Contact Terminal
            </h2>
            <p className="text-gray-400 font-tech text-lg leading-relaxed mb-8">
              Initiate transmission. Reach out for collaboration, project design consulting, or hardware diagnostics tasks.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span className="font-mono text-sm text-gray-300">praneethkv27@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span className="font-mono text-sm text-gray-300">+91 6300185109</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span className="font-mono text-sm text-gray-300">India</span>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/PraneethKV27/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all" aria-label="GitHub">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/praneeth-kv-81983430b/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-lg border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>

          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleForm} className="glass-panel p-6 rounded-2xl border-cyan-400/20 shadow-glow-cyan space-y-6">
              <div>
                <label className="block text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">IDENTIFICATION NAME</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full bg-gray-950 border border-cyan-500/20 rounded-lg p-3 text-sm font-mono text-cyan-200 focus:outline-none focus:border-cyan-400 transition-colors" 
                  placeholder="e.g. USER"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full bg-gray-950 border border-cyan-500/20 rounded-lg p-3 text-sm font-mono text-cyan-200 focus:outline-none focus:border-cyan-400 transition-colors" 
                  placeholder="e.g. user@domain.com"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-cyan-400 uppercase tracking-widest mb-2">TRANSMISSION BODY</label>
                <textarea 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full bg-gray-950 border border-cyan-500/20 rounded-lg p-3 text-sm font-mono text-cyan-200 focus:outline-none focus:border-cyan-400 transition-colors" 
                  placeholder="e.g. Enter request details..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={submitting}
                className="w-full py-3.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-cyber font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-glow-cyan hover:shadow-cyan-400/50 transition-all duration-300 cursor-pointer"
              >
                {submitting ? 'SENDING...' : (
                  <>
                    <Send className="w-4 h-4" /> TRANSMIT DATA
                  </>
                )}
              </button>

              {submitted && (
                <div className="text-center font-mono text-xs text-green-400 mt-2 animate-pulse">
                  TRANSMISSION SECURELY SENT. THANK YOU.
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cyan-500/10 text-center font-mono text-xs text-gray-400">
        <p className="flex items-center justify-center gap-2">
          Made with <span className="text-red-500 heartbeat">❤️</span> by KORNIPALLI VENKATESH PRANEETH
        </p>
        <p className="mt-2 text-gray-600">
          © {new Date().getFullYear()} KVP.ECE. ALL CIRCUITS OPERATIONAL.
        </p>
      </footer>
    </div>
  );
}
