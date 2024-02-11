/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "Helvetica", "sans-serif"],
        "source-serif": ['"Source Serif Pro"', "Times", "serif"],
      },
      colors: {
        orange: {
          0: "#FFF3E0",
          100: "#FFEDCC",
          200: "#FFDAA0",
          300: "#FFC773",
          400: "#FFB347",
          500: "#FF9F1A",
          600: "#E68900",
          700: "#CC7300",
          800: "#D04A01",
          900: "#994700",
          1000: "#7F2E00",
        },
        grey: {
          0: "#F8F9FA",
          100: "#E9ECEF",
          200: "#EFF6FF",
          300: "#CED4DA",
          400: "#ADB5BD",
          500: "#6C757D",
          600: "#495057",
          700: "#343A40",
          800: "#212529",
          900: "#121619",
          1000: "#000000",
        },
        black: {
          0: "#E3E5E5",
          100: "#C7CACB",
          200: "#ABAFB2",
          300: "#8F9498",
          400: "#73797E",
          500: "#575E64", // Mid-range, dark grey
          600: "#3B4349",
          700: "#1F282E",
          800: "#030D13",
          900: "#02080A",
          1000: "#000000", // True black
        },
        white: {
          0: "#FFFFFF",
          100: "#F9FAFB",
          200: "#F3F4F6",
          300: "#EDEFF1",
          400: "#E7E9EC",
          500: "#E1E3E6",
          600: "#DBDDDF",
          700: "#D5D7D8",
          800: "#CFCFD0",
          900: "#C9CACB",
          1000: "#C3C4C6",
        },
        blue: {
          0: "#E6F0FF", // Lightest blue
          100: "#B3D1FF",
          200: "#80B2FF",
          300: "#4D93FF",
          400: "#1A74FF", // Brighter blue
          500: "#0056E0", // Starting to get navy-ish
          600: "#0041B3",
          700: "#002D86",
          800: "#001859",
          900: "#000A2C",
          1000: "#081631", // Dark navy blue
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
