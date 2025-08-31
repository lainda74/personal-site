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
        Caveat_Brush: "var(--font-caveat)",
        Work_Sans: "var(--font-worksans)",
        Playfair_Display: "var(--font-playfair)",
      },
      keyframes: {
        slideText: {
          "0%, 20%": { transform: "translateY(0%)" },
          "25%, 45%": { transform: "translateY(-100%)" },
          "50%, 70%": { transform: "translateY(-200%)" },
          "75%, 95%": { transform: "translateY(-300%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      animation: {
        slideText: "slideText 12s infinite ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
