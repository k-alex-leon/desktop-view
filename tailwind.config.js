/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage : {
        'windows' : 'url(./images/windows-wallpaper.jpg)'
      },
    },
  },
  plugins: [],
};
