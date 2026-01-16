/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        linkedin: {
          primary: '#0A66C2',
          dark: '#004182',
          light: '#F3F2EF',
          gray: '#E5E5E1',
          text: '#000000',
          subtitle: '#666666',
        }
      }
    },
  },
  plugins: [require("tailwind-scrollbar")]
,
}
