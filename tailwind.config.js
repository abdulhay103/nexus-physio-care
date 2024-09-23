/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },

    fontFamily: {
      Kanit: ["Kanit", "sans-serif"],
      Dancing: ["Dancing Script", "cursive"],
      Rubik: ["Rubik", "sans-serif"],
      siliguri: ["Hind Siliguri", "system-ui"],
      safodi: ["Sofadi One", "system-ui"],
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
