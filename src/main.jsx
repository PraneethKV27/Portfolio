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

  // Set up low ambient oscillator background hum for premium ECE aesthetic
  const audioContextRef = useRef(null);
  const oscillatorRef = useRef(null);
  const gainNodeRef = useRef(null);

  const toggleAudio = () => {
    if (!audioPlaying) {
      if (!audioContextRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContextRef.current = new AudioContext();
        
        // Low sci-fi ambient hum
        const osc = audioContextRef.current.createOscillator();
        const gain = audioContextRef.current.createGain();
        
        osc.type = 'sine';
        osc.frequency.setValueAtTime(60, audioContextRef.current.currentTime); // 60Hz ECE power hum
        gain.gain.setValueAtTime(0.015, audioContextRef.current.currentTime); // Low volume
        
        osc.connect(gain);
        gain.connect(audioContextRef.current.destination);
        osc.start();
        
        oscillatorRef.current = osc;
        gainNodeRef.current = gain;
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
    document.documentElement.classList.toggle('light');
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
      <PCBBackground />
      <SparkCursor />
      <App activeSection={activeSection} />
      <AIAssistant />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Main />
)
