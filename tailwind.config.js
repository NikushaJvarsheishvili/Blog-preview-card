/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainColor: "#f4d04e",
        black: "hsl(0, 0%, 7%)",
        gray: "hsl(0, 0%, 50%)",
      },
      height: {
        "custom-height": "30rem",
      },
      maxWidth: {
        customWidth: "22rem",
      },
      boxShadow: {
        customBoxShadow: "7px 7px 0px black",
      },
    },
  },
  plugins: [],
};
