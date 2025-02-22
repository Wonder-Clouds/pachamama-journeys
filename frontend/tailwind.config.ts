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
        primary: "#7E4B00",
        secondary: "#ea8a00",
        accent: "",
        muted: "",
        error: "",
        success: "",
        warning: "",
        info: "",
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        merriweather: "var(--font-merriweather)",
        "dm-sans": "var(--font-dm-sans)"
      },
      keyframes: {
  			efecto: {
  				'0%': {
  					boxShadow: '0 0 0 0 rgba(9, 145, 5, 0.85)'
  				},
  				'100%': {
  					boxShadow: '0 0 0 20px rgba(50, 121, 3, 0)'
  				}
  			},
      },
      animation: {
  			efecto: 'efecto 1s infinite',
      }
    },
  },
  plugins: [],
} satisfies Config;
