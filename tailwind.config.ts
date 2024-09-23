import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greenItaly: '#008C45',
        whiteItaly: '#FFFFFF',
        redItaly: '#CD212A',
      },
    },
  },
  plugins: [],
};
export default config;
