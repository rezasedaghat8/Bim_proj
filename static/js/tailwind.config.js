/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        myFont: ["Noto Serif", "serif"],
      },
      colors: {
        "dark-gray": "#333333",
        teal: "#008080",
        bluewhte: "#0358a8",
        semiWhite: "#ecf0f1",
      },
      backgroundImage: {
        "gradinatDark-gray":
          "linear-gradient(109deg, rgba(85,94,99,1) 0%, rgba(26,26,48,1) 67%, rgba(19,37,41,1) 100%)",
      },
      margin: {
        "50%": "20%",
      },
      spacing: {
        70: "17.5rem",
        "94%": "94%",
      },
    },
  },
  plugins: [],
};
