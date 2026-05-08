/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    fontFamily: {
      sans: ['Atkinson Hyperlegible', 'sans-serif'],
    },
    extend: {
      colors: {
        primary:  { DEFAULT: '#001c89', c: '#2337a0' },
        accent:   '#fcd400',
        surface:  { DEFAULT: '#dcf1fd', low: '#e7f6ff', page: '#f4faff' },
        ink:      { DEFAULT: '#091e27', muted: '#454653' },
      },
      boxShadow: {
        card:      '0 2px 8px rgba(9,30,39,0.07)',
        'card-lg': '0 6px 20px rgba(9,30,39,0.12)',
        nav:       '0 2px 12px rgba(0,0,0,0.20)',
      },
      borderRadius: {
        pill: '99px',
      },
    },
  },
  plugins: [],
}
