/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  prefix: "",
  theme: {
    container: {
      padding: "15px",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbrainsMono)", // Fixed the variable reference
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion -up": "accordion-up 0.2s ease-out",
      },

      colors: {
        primary: "#1c1c22",
        accent: {
          DEFAULT: "cyan",
          hover: "#00ffe0",
        },
      },
    },
  },
  plugins: [],
};
