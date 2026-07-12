import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#7C3AED",
          light: "#8B5CF6",
          lighter: "#A855F7",
        },
        accent: {
          DEFAULT: "#06B6D4",
          light: "#38BDF8",
        },
        bg: {
          darkest: "#EBF4FF",
          darker: "#DBEAFE",
          dark: "#BFDBFE",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "spin-slow": "spin 20s linear infinite",
        "spin-slower": "spin 30s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "gradient": "gradient 8s linear infinite",
        "typing": "typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(124, 58, 237, 0.5), 0 0 10px rgba(124, 58, 237, 0.3)" },
          "100%": { boxShadow: "0 0 10px rgba(124, 58, 237, 0.8), 0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.3)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
export default config;
