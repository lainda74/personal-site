import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryText: "#192735",
        secondaryText: "#65727d",
        buttonText: "#e46f6f",
        list: "#777171"
      },
      fontFamily: {
        Caveat_Brush: ["Caveat Brush", 'Arial', 'sans-serif'],
        Work_Sans: ["Work Sans", 'Arial', 'sans-serif'],
        Playfair_Display: ["Playfair Display", 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
} satisfies Config;
