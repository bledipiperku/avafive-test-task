import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#1B4B66",
      cinder: "#171520",
      seaShell: "#f1f1f1",
      doveGray: "#626262",
      white: "#ffffff",
      black: "#000000",
      nobel: "#B6B6B6",
      gallery: "#F0F0F0",
      alto: "#DEDEDE",
      coralRed: "#FF404B",
      monza: "#B00020",
      coral: "#FF8C4B",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
