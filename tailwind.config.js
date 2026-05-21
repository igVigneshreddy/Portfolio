/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#030014",
          card: "rgba(13, 12, 33, 0.7)",
          border: "rgba(255, 255, 255, 0.08)",
          cyan: "#00e5ff",
          violet: "#8b5cf6",
          amber: "#f59e0b",
          green: "#10b981",
          text: "#e2e8f0",
          muted: "#94a3b8"
        }
      },
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glowPulse: {
          '0%': { boxShadow: '0 0 10px rgba(0, 229, 255, 0.2), inset 0 0 5px rgba(0, 229, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 229, 255, 0.6), inset 0 0 10px rgba(0, 229, 255, 0.3)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    },
  },
  plugins: [],
}
