/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "grid-card-template": "minmax(1rem, 11.4%) 33.8rem minmax(1rem, 8.8%) auto minmax(1rem, 10%)"
      },
      gridTemplateRows: {
        "mobile-grid-template" : "331px auto",
      },
      colors: {
        'light-gray': 'hsl(278, 3%, 87%)',
        'light-grayish-violet': 'hsl(270, 3%, 87%)',
        'dark-grayish-violet': 'hsl(279, 6%, 55%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
        'light-blue': 'hsl(249, 99%, 64%)',
        'light-violet': 'hsl(278, 94%, 30%)',
        'red': 'hsl(0, 100%, 66%)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

