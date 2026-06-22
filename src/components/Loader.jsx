import React, { useEffect, useState } from 'react';

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [diagnosticText, setDiagnosticText] = useState('BOOTING SYSTEM...');

  const diagnostics = [
    'BOOTING SYSTEM...',
    'INITIALIZING PCB CANVAS BACKDROP...',
    'CALIBRATING OSCILLOSCOPE WAVEFORMS...',
    'LAUNCHING ROAMING AI ASSISTANT...',
    'SYNCING EMBEDDED SYSTEM REGISTERS...',
    'CONNECTING AWS CLOUD NODES...',
    'ESTABLISHING CYBERPUNK HUD INTERFACE...',
    'COMPILING PORTFOLIO COMPONENTS...',
    'SYSTEM ONLINE. WELCOME.'
  ];

  useEffect(() => {
    let index = 0;
    const textInterval = setInterval(() => {
      if (index < diagnostics.length - 1) {
        index++;
        setDiagnosticText(diagnostics[index]);
      }
    }, 450);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(textInterval);
          setTimeout(() => {
            onFinish();
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-950 font-mono select-none">
      <div className="relative mb-8 flex items-center justify-center">
        {/* Outer Glowing Rings */}
        <div className="absolute h-32 w-32 animate-spin rounded-full border-4 border-dashed border-cyan-500 opacity-60"></div>
        <div className="absolute h-24 w-24 animate-spin rounded-full border-2 border-double border-purple-500 opacity-40 [animation-direction:reverse]"></div>
        
        {/* Microchip Center */}
        <div className="z-10 flex h-16 w-16 items-center justify-center rounded-lg border-2 border-cyan-400 bg-gray-900 shadow-glow-cyan">
          <svg className="h-10 w-10 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
          </svg>
        </div>
      </div>

      <div className="w-80 text-center">
        {/* Boot details */}
        <div className="mb-2 text-xs tracking-widest text-cyan-400 text-glow-cyan h-6 overflow-hidden">
          {diagnosticText}
        </div>
        
        {/* Progress bar */}
        <div className="h-1.5 w-full rounded-full bg-gray-800 p-0.5">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 shadow-glow-cyan transition-all duration-75"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage */}
        <div className="mt-2 text-sm font-semibold tracking-wider text-purple-400">
          {progress}%
        </div>
      </div>
    </div>
  );
}
