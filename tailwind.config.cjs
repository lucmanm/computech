/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "640",
      tablet: "768px",
      desktop: "1280px",
    },
    container: {
      center: true,
    },

    extend: {
      fontFamily: {
        Mont: ["Montserrat", "sans-serif"],
      },
      backgroundColor: {
        primary: "#1e3a8a",
        pecondary: "#1d4ed8",
        darkmodebg: "#33373E",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
