/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: {
    //   primary: "#107030",
    //   secondary: "#40BF6A",
    //   deepBlue: "#2D64B9",
    //   lightBlue: "#13C8EC",
    //   amber: " #FFFF00",
    //   lightCtreuse: "#DCFF64",
    //   deepKhaki: "#405000",
    //   gray: "#616161",
    //   lightGray: "#acacac",
    //   white: "#FFFFFF",
    //   whiteSmoke: "#f8f6f3",
    //   black: "#000000",
    //   red: "#F33725",
    //   purple: "#7D3C98",
    //   orange: "#FF5733",
    // },
    fontFamily: {
      Kanit: ["Kanit", "sans-serif"],
      Dancing: ["Dancing Script", "cursive"],
      Rubik: ["Rubik", "sans-serif"],
    },
    screens: {
      esm: "480px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1800px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
        "2xl": "9rem",
      },
    },
  },
  plugins: [],
};
