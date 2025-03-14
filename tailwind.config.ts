import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFFFFF", // White - primary color
          black: "#000000", // Black accent (replacing blue)
          gray: {
            100: "#F8F9FA",
            200: "#E9ECEF",
            300: "#DEE2E6",
            400: "#CED4DA",
            500: "#ADB5BD",
            600: "#6C757D",
            700: "#495057",
            800: "#343A40",
            900: "#212529",
          },
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(90deg, rgba(0,0,0,0.9) 0%, rgba(30,30,30,0.8) 50%, rgba(30,30,30,0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
