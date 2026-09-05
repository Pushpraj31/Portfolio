/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#f4f6f8",
          100: "#e8ecf1",
          400: "#8b95a7",
          500: "#6b7589",
          700: "#2a3140",
          800: "#161b24",
          900: "#0b0e14",
          950: "#07090d",
        },
        accent: {
          DEFAULT: "#3d8bfd",
          soft: "#6aa8ff",
        },
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(61, 139, 253, 0.18), 0 24px 80px -32px rgba(61, 139, 253, 0.45)",
      },
    },
  },
  plugins: [],
};
