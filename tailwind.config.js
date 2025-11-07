/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: "#732937",
      //   secondary: "#1B2B40",
      //   tertiary: "#0F1B26",
      //   quaternary: "#BF9E75",
      //   quinary: "#D9D5D2",
      // },
      colors: {
        primary: "#FF9E20",
        // primary: "#FFA51A",
        secondary: "#0A6CD1",
        tertiary: "#032445",
        quaternary: "#FF7549",
        quinary: "#D9D5D2",
      },
    },
  },
  plugins: [],
};
