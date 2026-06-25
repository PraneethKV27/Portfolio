import React, { useEffect, useState, useRef } from 'react';

export default function AIAssistant() {
  const [position, setPosition] = useState({ x: window.innerWidth - 180, y: window.innerHeight - 200 });
  const [speech, setSpeech] = useState(true);
  const [isWaving, setIsWaving] = useState(false);
  const [speechText, setSpeechText] = useState("👋 Hello Everyone!\nWelcome to my portfolio.\nI'm your AI assistant.\nFeel free to explore my projects!");
  const targetPos = useRef({ x: window.innerWidth - 180, y: window.innerHeight - 200 });
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  const speechBubbles = [
    "👋 Welcome! I'm KVP's digital guide.\n🚀 Quest: Try navigating the tabs to see the page slide-fold like paper!",
    "💡 'Hardware is the body of technology, firmware is the soul, and software is the clothing.' Let's create!",
    "⚡ Quest: Toggle the lightbulb icon in the navbar to watch the PCB background circuits dynamically rewrite!",
    "🔮 'The microchip is to the 21st century what the steam engine was to the 19th.' ECE is everywhere!",
    "🛠️ Quest: Go to the 'Showcase' tab and find the STM32 board. Hover to check out its circuit layout!",
    "🧠 ECE Fun Fact: Transistors are basically microscopic electronic valves, and we can pack billions onto a fingernail!",
    "📧 Quest: Scroll to the 'Contact Terminal' and send a secure transmission to establish contact!",
    "🤖 'Programming is explaining to a computer what you want it to do, but electronics is giving it the hands to do it.'"
  ];

  const [isFollowing, setIsFollowing] = useState(false);
  const isFollowingRef = useRef(false);

  useEffect(() => {
    // Intermittent roaming path finder loop
    const moveInterval = setInterval(() => {
      // Occasional random gesture animations
      const randVal = Math.random();
      if (randVal > 0.6) {
        setIsWaving(true);
        setTimeout(() => setIsWaving(false), 2000);
      }
      
      if (randVal < 0.4) {
        const bubble = speechBubbles[Math.floor(Math.random() * speechBubbles.length)];
        setSpeechText(bubble);
        setSpeech(true);
        setTimeout(() => setSpeech(false), 6000);
      }

      // Roam randomly ONLY if NOT following the cursor
      if (!isFollowingRef.current) {
        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 220;
        targetPos.current = {
          x: Math.max(50, Math.random() * maxX),
          y: Math.max(window.innerHeight - 400, Math.random() * maxY)
        };
      }
    }, 5000);

    const mouseTracker = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      // Move targetPos to follow mouse cursor ONLY if active
      if (isFollowingRef.current) {
        targetPos.current = { 
          x: Math.min(window.innerWidth - 100, Math.max(20, e.clientX + 40)), 
          y: Math.min(window.innerHeight - 100, Math.max(20, e.clientY + 40)) 
        };
      }
    };

    window.addEventListener('mousemove', mouseTracker);

    // Smooth movement interpolation loop
    let animId;
    const updatePosition = () => {
      setPosition((prev) => {
        const dx = targetPos.current.x - (prev.x || 0);
        const dy = targetPos.current.y - (prev.y || 0);
        
        // Easing interpolation coefficient
        const ease = 0.02;
        const newX = (prev.x || 0) + dx * ease;
        const newY = (prev.y || 0) + dy * ease;

        // Fallback checks to prevent NaN crashes
        return {
          x: isNaN(newX) ? window.innerWidth - 180 : newX,
          y: isNaN(newY) ? window.innerHeight - 200 : newY
        };
      });
      animId = requestAnimationFrame(updatePosition);
    };
    updatePosition();

    return () => {
      clearInterval(moveInterval);
      window.removeEventListener('mousemove', mouseTracker);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Compute rotation angle to face mouse cursor
  const getFacingAngle = () => {
    if (!containerRef.current) return 0;
    const rect = containerRef.current.getBoundingClientRect();
    const assistantX = rect.left + rect.width / 2;
    const assistantY = rect.top + rect.height / 2;
    const angle = Math.atan2(mousePos.current.y - assistantY, mousePos.current.x - assistantX);
    // Convert to degrees and clamp slightly for subtle head tilt
    const deg = (angle * 180) / Math.PI;
    return Math.max(-30, Math.min(30, deg));
  };

  return (
    <div 
      ref={containerRef}
      className="fixed z-40 select-none pointer-events-auto transition-transform duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `translate3d(0, 0, 0)`
      }}
    >
      {/* Speech bubble */}
      {speech && (
        <div className="absolute bottom-[110%] left-[-40px] w-64 p-3 rounded-xl border border-cyan-400 bg-gray-900/90 text-xs text-cyan-200 shadow-glow-cyan backdrop-blur-md animate-fade-in font-mono whitespace-pre-line">
          <div className="absolute top-full left-[60px] border-[8px] border-transparent border-t-gray-900/95 border-r-gray-900/95"></div>
          {speechText}
        </div>
      )}

      <div 
        className="relative flex flex-col items-center justify-center cursor-pointer group"
        onClick={(e) => {
          e.stopPropagation();
          setIsWaving(true);
          setTimeout(() => setIsWaving(false), 2000);

          const nextFollowing = !isFollowing;
          setIsFollowing(nextFollowing);
          isFollowingRef.current = nextFollowing;

          if (nextFollowing) {
            setSpeechText("🎯 LOCKED ON CURSOR!\nI will now follow your movement.");
          } else {
            setSpeechText("👋 RELEASED!\nGoing back to autonomous exploration mode.");
          }
          setSpeech(true);
          setTimeout(() => setSpeech(false), 4000);
        }}
      >
        {/* Floating Ring Effect */}
        <div className="absolute -bottom-2 w-10 h-2 bg-cyan-500/20 rounded-full blur-[2px] animate-pulse"></div>

        {/* Robot Head */}
        <div 
          className="w-12 h-10 rounded-2xl bg-gradient-to-b from-gray-800 to-gray-950 border border-cyan-500 flex flex-col items-center justify-center shadow-glow-blue relative transition-all duration-300 hover:scale-105"
          style={{ transform: `rotate(${getFacingAngle()}deg)` }}
        >
          {/* Antenna */}
          <div className="absolute -top-3 w-0.5 h-3 bg-cyan-400">
            <div className="absolute -top-1 -left-1 w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping"></div>
          </div>
          
          {/* Eyes (Glowing LEDs) */}
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow-cyan animate-pulse"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-glow-cyan animate-pulse"></div>
          </div>
        </div>

        {/* Robot Body */}
        <div className="w-8 h-10 bg-gradient-to-b from-gray-800 to-gray-900 border-x border-b border-cyan-500 rounded-b-xl relative flex justify-between px-1.5 pt-1 mt-0.5 shadow-md">
          {/* Hands */}
          <div 
            className={`w-1.5 h-5 bg-cyan-400 rounded-full transition-transform duration-300 ${
              isWaving ? '-translate-y-2.5 -rotate-45' : 'translate-y-1'
            }`}
          ></div>
          <div className="w-1.5 h-5 bg-cyan-400 rounded-full translate-y-1"></div>
        </div>
      </div>
    </div>
  );
}
