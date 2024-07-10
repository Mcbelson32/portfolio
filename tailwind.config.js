/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': "480px",
        sm': "640px",
      },
      colors: {
        primary: "#E5DEED",
        secondary: "#16022D",
        "secondary-dark": "#110025",
        light: "#EEEEEE",
        dark: "#090113",
        purple: "#7B00FF",
      },
      width: {
        dscreen: "100dvw",
      },
      height: {
        dscreen: "100dvh",
      },
      backgroundColor: {
        "purple-50": "#5F00C46E", // Example with 50% opacity
      },
      backgroundImage: {
        main: "url('assets/img/bg.png')",
        "gradient-45": "linear-gradient(45deg, #7700FF, #176EF3)",
        "gradient-225": "linear-gradient(225deg, #7700FF, #176EF3)",
      },
    },
    corePlugins: {
      container: false, // Disable the default container to replace it with our custom one
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1280px", // Set the exact max-width to 1280px
        xl: "1280px",
      },
    },
  },
  plugins: [require("daisyui")], // require("daisyui")

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#E5DEED",
          secondary: "#16022D",
          light: "#EEEEEE",
          dark: "#090113",
          purple: "#7B00FF",
          "purple-50": "#5F00C46E",
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#E5DEED",
          secondary: "#EEEEEE",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#16022D",
          secondary: "#090113",
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
