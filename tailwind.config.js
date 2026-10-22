/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './context/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'baer-bg': '#FAF8F5',
        'baer-surf': '#F4EEE5',
        'baer-cream': '#EFE8DC',
        'baer-bdr': '#E7DCCF',
        'baer-dark': '#1C1C1C',
        'baer-mid': '#7A7068',
        'baer-gold': '#C9A86F',
        'baer-ink': '#121212',
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        shell: '1280px',
      },
    },
  },
  plugins: [],
}
