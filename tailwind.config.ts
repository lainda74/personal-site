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
      }
    },
  },
  plugins: [],
} satisfies Config;
