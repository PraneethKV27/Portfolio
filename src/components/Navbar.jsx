import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Volume2, VolumeX, Moon, Sun } from 'lucide-react';

export default function Navbar({ toggleAudio, audioPlaying, toggleDarkMode, darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Showcase', href: '#showcase' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-950/90 border-b border-cyan-500/20 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Title Logo */}
        <a href="#home" className="flex items-center gap-2 font-cyber text-cyan-400 font-bold text-lg tracking-wider text-glow-cyan">
          <Cpu className="w-6 h-6 animate-pulse" />
          <span>PRANEETH</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="font-tech font-medium text-gray-300 hover:text-cyan-400 hover:text-glow-cyan transition-all duration-300 relative group text-base"
            >
              {item.label}
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Settings Buttons (Audio, Dark/Light Mode) */}
        <div className="hidden md:flex items-center gap-4 border-l border-cyan-500/20 pl-4">
          <button 
            onClick={toggleAudio}
            className="p-2 rounded-lg border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-sm"
            title="Toggle Ambient Audio"
          >
            {audioPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
          </button>
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-lg border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all shadow-sm"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Buttons */}
        <div className="flex items-center gap-2 md:hidden">
          <button 
            onClick={toggleAudio} 
            className="p-1.5 rounded-md border border-cyan-500/25 text-cyan-400 mr-2"
          >
            {audioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button 
            onClick={toggleDarkMode} 
            className="p-1.5 rounded-md border border-cyan-500/25 text-cyan-400 mr-2"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-1.5 rounded-md border border-cyan-500/25 text-cyan-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-950/95 border-b border-cyan-500/25 backdrop-blur-lg animate-slide-in">
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="font-tech text-gray-300 hover:text-cyan-400 font-semibold tracking-wider p-2 border-b border-cyan-500/5"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
