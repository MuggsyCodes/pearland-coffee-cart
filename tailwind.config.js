/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#f8f3ea",
        paper: "#fffaf2",
        tan: "#cfa56f",
        clay: "#b46a3c",
        espresso: "#3d2a21",
        charcoal: "#22201e",
        sage: "#6f7d66",
        sky: "#dce9ea",
      },
      boxShadow: {
        soft: "0 18px 50px rgba(61, 42, 33, 0.11)",
      },
    },
  },
  plugins: [],
};
