/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ecgt': {
          'primary': '#1e3a5f',
          'secondary': '#2d5a87',
          'accent': '#e07b53',
          'ucpd': '#3b7a9e',
          'crd': '#7c5c99',
          'blacklist': '#c44536',
          'info': '#4a9b7f',
          'bg': '#f8f9fa',
          'card': '#ffffff',
          'text': '#2d3748',
          'muted': '#718096',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}