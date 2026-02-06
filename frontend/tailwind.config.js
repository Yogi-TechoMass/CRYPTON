module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00ff41',
        'cyber-blue': '#0ff0fc',
        'matrix-green': '#00ff41',
        'hacker-purple': '#9d00ff',
      },
      fontFamily: {
        'mono': ['Courier New', 'Fira Code', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
      },
      keyframes: {
        'glitch': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'matrix-rain': {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '0% 100%' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}
