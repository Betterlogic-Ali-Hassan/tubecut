import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	extend: {
	  colors: {
		background: 'var(--background)',
		card: 'var(--card)',
		border: 'var(--border)',
		input: 'var(--card)',
		link: 'var(--link-color)',
		'text-foreground': 'var(--text-foreground)'
	  },
	  boxShadow: {
		custom: 'var(--shadow)', // Custom shadow class
	  },
	  borderRadius: {
		lg: 'calc(var(--radius) + 4px)',
		md: 'calc(var(--radius) + 2px)',
		sm: 'calc(var(--radius) - 4px)',
	  },
	},
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
