/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "40rem",
          md: "48rem",
          lg: "64rem",
          xl: "71.25rem",
          "xxl": "71.25rem",
        },
      },
      backgroundColor: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#ffbe33",
        secondary: "#222831",
        danger: "#ff0000",
        success: "#53bb55",
      },
      fontFamily: {
        dancing: ["Dancing Script", "cursive"],
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
