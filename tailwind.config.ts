import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a1628',
          mid: '#112240',
        },
        blue: {
          DEFAULT: '#1a3a6b',
          accent: '#3b82f6',
        },
        teal: '#06b6d4',
        light: '#e2e8f0',
        gray: {
          custom: '#94a3b8',
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a1628 0%, #112240 50%, #0d2845 100%)',
        'hero-radial': 'radial-gradient(ellipse at 70% 50%, rgba(59,130,246,0.15) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(6,182,212,0.1) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
