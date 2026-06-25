import React, { useState, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Loader from './components/Loader.jsx'
import PCBBackground from './components/PCBBackground.jsx'
import AIAssistant from './components/AIAssistant.jsx'
import SparkCursor from './components/SparkCursor.jsx'
import Navbar from './components/Navbar.jsx'

function Main() {
  const [loading, setLoading] = useState(true);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  // Set up ambient oscillator background hum for premium ECE aesthetic
  const audioContextRef = useRef(null);
  const oscillatorsRef = useRef([]);
  const gainNodeRef = useRef(null);

  // Sync dark mode class to html element on mount and theme state change
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleAudio = () => {
    if (!audioPlaying) {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();
        
        // Dynamic dual-frequency sci-fi hum (audible on laptop speakers)
        const osc1 = audioContextRef.current.createOscillator();
        const osc2 = audioContextRef.current.createOscillator();
        const gainNode = audioContextRef.current.createGain();
        
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(110, audioContextRef.current.currentTime); // 110Hz clean fundamental
        
        osc2.type = 'triangle'; 
        osc2.frequency.setValueAtTime(220, audioContextRef.current.currentTime); // 220Hz rich overtone
        
        const gainOsc1 = audioContextRef.current.createGain();
        const gainOsc2 = audioContextRef.current.createGain();
        gainOsc1.gain.setValueAtTime(0.015, audioContextRef.current.currentTime);
        gainOsc2.gain.setValueAtTime(0.008, audioContextRef.current.currentTime);
        
        osc1.connect(gainOsc1);
        osc2.connect(gainOsc2);
        
        gainOsc1.connect(gainNode);
        gainOsc2.connect(gainNode);
        
        gainNode.gain.setValueAtTime(0.7, audioContextRef.current.currentTime);
        gainNode.connect(audioContextRef.current.destination);
        
        osc1.start();
        osc2.start();
        
        oscillatorsRef.current = [osc1, osc2];
        gainNodeRef.current = gainNode;
      } else if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }
      setAudioPlaying(true);
    } else {
      if (audioContextRef.current && audioContextRef.current.state === 'running') {
        audioContextRef.current.suspend();
      }
      setAudioPlaying(false);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        toggleAudio={toggleAudio} 
        audioPlaying={audioPlaying} 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode} 
      />
      <PCBBackground darkMode={darkMode} />
      <SparkCursor />
      <App activeSection={activeSection} setActiveSection={setActiveSection} />
      <AIAssistant />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Main />
)
