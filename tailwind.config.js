/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'major-mono': ['"Major Mono Display"', 'serif']
      }
    },
  },
  plugins: [],
}

