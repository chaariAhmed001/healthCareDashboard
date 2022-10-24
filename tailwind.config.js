module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      display: ["Mulish", "sans-serif"],
      body: ["Mulish", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },

      colors: {
        "primry-color": "#141B41",
        "secondary-color": "#3F8EFC",
        "tertiary-color": "#E08E45",
      },

      backgroundColor: {
        "main-bg": "#F7F7FF",
        "main-dark-bg": "#201A23",
        "secondary-dark-bg": "#2E2532",
        "light-gray": "#F7F7F7",
        "half-transparent": "rgba(0, 0, 0, 0.5)",
      },
      borderWidth: {
        1: "1px",
      },
      borderColor: {
        color: "rgba(0, 0, 0, 0.1)",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
    },
  },
  plugins: [],
};
