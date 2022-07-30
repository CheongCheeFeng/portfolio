/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#121212",
      },
      backgroundImage: {
        "menu-background": "url('/images/menu-background.png')",
        banner: "url('/images/banner.png')",
        gradient1:
          "linear-gradient(90.21deg, rgba(170, 54, 124, 0.5) -5.91%, rgba(74, 47, 189, 0.5) 111.58%)",
        "project-bg": "url('/images/project-bg.png')",
        footer: "url('/images/footer.png')",
      },
      borderRadius: {
        half: "50%",
      },
      fontFamily: {
        default: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      animation: {
        cursor: "cursor 0.9s linear infinite alternate",
        wave: "wave 1.5s infinite",
        updown: "updown 1.5s linear infinite",
      },
      keyframes: {
        cursor: {
          "0% , 40%": { opacity: "0.75" },
          "60%, 100%": { opacity: "0" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "15%": { transform: "rotate(14.0deg)" },
          "30%": { transform: "rotate(-8.0deg)" },
          "40%": { transform: "rotate(14.0deg)" },
          "50%": { transform: "rotate(-4.0deg)" },
          "60%": { transform: "rotate(10.0deg)" },
          "70%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        updown: {
          "0%": {
            transform: "translateY(-20px)",
          },
          "50%": {
            transform: "translateY(20px)",
          },
          "100%": {
            transform: "translateY(-20px)",
          },
        },
      },
    },
  },
  plugins: [],
};
