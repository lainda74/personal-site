import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
			bg: 'linear-gradient(#b4edd8, #a0e8cd 4%, #82e1be 8%, #6adbb1 13%, #61a5fa 22%, #3676e0 28%, #326dec 33%, #2663eb 57%, #1e4fd8 73%, #1f41af 89%, #1f3b8a 100%, #1f3b8a)',
  			foreground: 'hsl(var(--foreground))',
  			primaryText: '#192735',
  			secondaryText: '#65727d',
  			btnBg: '#edcd68',
			btnText: '#000',
  			list: '#777171',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			Caveat_Brush: 'var(--font-caveat)',
  			Work_Sans: 'var(--font-worksans)',
  			Playfair_Display: 'var(--font-playfair)'
  		},
  		keyframes: {
  			slideText: {
  				'0%, 20%': {
  					transform: 'translateY(0%)'
  				},
  				'25%, 45%': {
  					transform: 'translateY(-100%)'
  				},
  				'50%, 70%': {
  					transform: 'translateY(-200%)'
  				},
  				'75%, 95%': {
  					transform: 'translateY(-300%)'
  				},
  				'100%': {
  					transform: 'translateY(0%)'
  				}
  			}
  		},
  		animation: {
  			slideText: 'slideText 12s infinite ease-in-out'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
