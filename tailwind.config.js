/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#030712',
          card: 'rgba(17, 24, 39, 0.7)',
          border: 'rgba(59, 130, 246, 0.2)',
          accent: '#3b82f6',
          cyan: '#06b6d4',
          purple: '#8b5cf6',
          green: '#10b981',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.4)',
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.4)',
        'glow-green': '0 0 15px rgba(16, 185, 129, 0.4)',
        'glow-blue': '0 0 15px rgba(59, 130, 246, 0.4)',
      },
      animation: {
        'pulse-fast': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' }
        }
      }
    },
  },
  plugins: [],
}
