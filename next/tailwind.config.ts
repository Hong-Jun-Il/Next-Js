import type { Config } from "tailwindcss";
import { colors } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      bgBlack: "#111111",
      inputBg: "#262626",
      inputFocusBg: "#00C13A1A",
      inputFocusBorder: "#00C13A80",

      baseGreen: "#00C13A",
      borderGray: "#767676",
      placeholderTextColor: "#999999",

      white: {
        1: "#ffffff",
      },
      black: {
        2: "#111111",
      },
      gray: {
        5: "#999999",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
