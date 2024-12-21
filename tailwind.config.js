/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    backgroundImage: {
      "color-gradient":
        "linear-gradient(184.78deg, #fa709a 7.64%, #fee140 120.07%)",
      "header-img": "url('./imgaes/header-banner-img.png')",
      "header-shape": "url('./imgaes/header-banner-shape.svg')",
      "hightLight-shape": "url('./imgaes/highlight-section-shape.svg')",
      "circle-shape": "url('./imgaes/circle-shape.svg')",
      "sellsCountry-img": "url('./imgaes/sells-by-country-right-img.png')",
      "collaboration-img": "url('./imgaes/collaboration-img.png')",
      "thumbnail-img": "url('./imgaes/intro-thumbnail.png')",
    },
    fontFamily: {
      jost: ["Jost", "serif"],
      lobster: ["Lobster", "serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "15px",
        md: " 30px",
      },
    },
    extend: {
      colors: {
        "color-white": "#fff",
        "color-text": "rgb(34 34 34 )",
        "color-bg": "rgb(255, 255, 255)",
        "color-gray": "#888888",
        "color-highLight": "rgb(254 96 25 / 0.4)",
        "color-primary": "rgb(254 96 25 )",
        "color-transparent": "bg-transparent",
      },
    },
  },
  plugins: [],
};
