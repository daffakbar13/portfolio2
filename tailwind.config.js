const { fontFamily } = require("tailwindcss/defaultTheme");

const token = (name) => `rgb(var(--c-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Midnight Lime tokens
        canvas: token("canvas"),
        surface: token("surface"),
        "surface-2": token("surface-2"),
        well: token("well"),
        fg: token("fg"),
        "fg-2": token("fg-2"),
        mute: token("mute"),
        lime: token("lime"),
        "lime-ink": token("lime-ink"),
        violet: token("violet"),
        cyan: token("cyan"),
        track: token("track"),
        line: token("line"),
        "fill-dim": token("fill-dim"),
        ink: "#08090D",
        danger: token("danger"),
        // shadcn aliases mapped onto the palette
        border: token("border"),
        input: token("border"),
        ring: token("lime"),
        background: token("canvas"),
        foreground: token("fg"),
        primary: {
          DEFAULT: token("lime"),
          foreground: "#08090D",
        },
        secondary: {
          DEFAULT: token("surface-2"),
          foreground: token("fg"),
        },
        destructive: {
          DEFAULT: token("danger"),
          foreground: "#08090D",
        },
        muted: {
          DEFAULT: token("surface-2"),
          foreground: token("mute"),
        },
        accent: {
          DEFAULT: token("surface-2"),
          foreground: token("fg"),
        },
        popover: {
          DEFAULT: token("surface"),
          foreground: token("fg"),
        },
        card: {
          DEFAULT: token("surface"),
          foreground: token("fg"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        display: ["var(--font-display)", ...fontFamily.sans],
        heading: ["var(--font-display)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
