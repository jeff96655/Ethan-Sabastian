/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple: "#7c0068",
        gray: "rgba(0, 0, 0, 0.3)",
        lime: "#27ff04",
        white: "#fff",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        "hepta-slab": "'Hepta Slab'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
      },
    },
    fontSize: {
      "21xl": "40px",
      "11xl": "30px",
      "6xl": "25px",
      mini: "15px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
