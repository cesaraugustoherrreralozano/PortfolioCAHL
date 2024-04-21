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
    },
    screens: {
      'sm': '755px',
      // => @media (min-width: 640px) { ... }

      'md': '840px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    
  },
  
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ],
}

