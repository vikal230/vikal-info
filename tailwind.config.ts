import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
        display: ["var(--font-clash)", "var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#f0f4ff",
          100: "#e0eaff",
          200: "#c7d6fe",
          300: "#a5b8fc",
          400: "#8190f8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        accent: {
          DEFAULT: "#06b6d4",
          light:   "#67e8f9",
          dark:    "#0891b2",
        },
        surface: {
          light: "#ffffff",
          "light-muted": "#f8fafc",
          dark:  "#0a0a0f",
          "dark-card": "#111118",
          "dark-border": "#1e1e2e",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, hsla(228,100%,74%,0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, hsla(189,100%,56%,0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, hsla(355,100%,93%,0.05) 0px, transparent 50%)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "0.4" },
          "50%":      { opacity: "0.8" },
        },
      },
      animation: {
        "fade-up":    "fade-up 0.6s ease-out forwards",
        shimmer:      "shimmer 2s infinite",
        float:        "float 4s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
      },
      boxShadow: {
        glass:
          "0 8px 32px 0 rgba(31, 38, 135, 0.10), inset 0 1px 0 0 rgba(255,255,255,0.08)",
        "glass-dark":
          "0 8px 32px 0 rgba(0, 0, 0, 0.40), inset 0 1px 0 0 rgba(255,255,255,0.06)",
        glow:   "0 0 24px 4px rgba(99, 102, 241, 0.25)",
        "glow-accent": "0 0 24px 4px rgba(6, 182, 212, 0.20)",
        card:   "0 2px 24px rgba(0,0,0,0.08)",
        "card-dark": "0 2px 24px rgba(0,0,0,0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
