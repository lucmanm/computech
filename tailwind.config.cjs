// /** @type {import('tailwindcss').Config} */

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
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
    },
    extend: {
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#1D4ED8",
          dark: "#1E3A8A",
        },
        secondary: "#1D4ED8",
        success: "198754",
        danger: "D73444",
        warning: "FFC107",
        info: "#0DCAF0",
        light: "#F8F9FA",
        dark: "#212529",
        "light-gray": "#F7F7F7",
      },
      minWidth: {
      '5': '1.25rem',
    },
      maxWidth: {
      '14': '3.5rem',
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
