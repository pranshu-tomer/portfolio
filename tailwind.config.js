/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(27,27,27)',
        foreground: 'rgb(225,225,225)',
        muted: 'rgb(115,115,115)',
        accent: 'rgb(254,254,91)'
      },
      boxShadow:{
        'glass-inset' : 'inset 0 17px 5px -9px rgba(254,254,91,0.05)',
        'glass-sm' : '5px 5px 20px 0 rgba(254,254,91,0.3)'
      }
    },
    fontFamily:{
      witch : ['Qwitcher Grypen','cursive']
    },
    animation:{
      'spin-slow': 'spin-front 40s linear infinite',
      'spin-slow-reverse': 'spin-reverse 40s linear infinite'
    },
    keyframes:{
      'spin-reverse' : {
        '0%' : {transform : 'rotate(0deg)'},
        '100%' : {transform : 'rotate(-360deg)'}
      },
      'spin-front' : {
        '0%' : {transform : 'rotate(0deg)'},
        '100%' : {transform : 'rotate(360deg)'}
      }
    }
  },
  plugins: [],
}




