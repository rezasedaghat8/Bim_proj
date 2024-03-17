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
        whiteBlue: " #C4FCEF",
        whiteBluelg: "#00C9A7",
        bluelg: "#008CCB",
        bestRed: "#eb2f06",
        bestGreen: "#78e08f",
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
        "150%": "150%",
        "200%": "200%",
        "80%": "80%",
        "85%": "85%",
        "88%": "88%",
        "90%": "90%",
        "70%": "70%",
        "60%": "60%",
        "55%": "55%",
        "50%": "50%",
        54: "13.5rem",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
    },
  },
  plugins: [],
};
