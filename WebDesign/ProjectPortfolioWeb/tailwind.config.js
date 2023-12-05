/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {

    },
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(198, 189, 240, 0.3), 0 2px 3px -1px rgba(198, 189, 240, 0.3)"
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ],
}

