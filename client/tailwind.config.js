/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary-black':'#2C2C2C',
        'card-color':'#343434',
        'wallet-msg':'#1C1F26',
        'text-color':'#FFFFFF',
        'blue':'#0044CC',
        'button':'#00E472',
        'line':'#D9D9D9',
        'homecard':'#3A3A3A',
        'form':'#32F694',
        'formtext':'#CCCCCC',
      }
    },
  },
  plugins: [],
}
