module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        0: "0px",
      },
      backgroundColor: {
        bg: "#EEF4F7",
      },
      borderColor: {
        bg: "#EEF4F7",
      },
      width: {
        33: "30%",
      },
      colors: {
        primary: "#3F0CFF",
        tertiary: "#8D8C8C",

        primarydark: "#FF4532",
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
      width: ["group-hover"],
      height: ["group-hover"],
      fontSize: ["group-hover"],
    },
  },
  plugins: [],
};
