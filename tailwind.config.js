/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        sand: "#f5f1e8",
        parchment: "#ebe4d8",
        surface: "#fffaf2",
        ink: "#111827",
        "ink-soft": "#475569",
        teal: {
          DEFAULT: "#0f766e",
          deep: "#115e59",
          soft: "#ccfbf1",
        },
        ember: "#c2410c",
        line: "#d6d3d1",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      boxShadow: {
        card: "0 24px 60px rgba(17, 24, 39, 0.08)",
        soft: "0 14px 40px rgba(15, 118, 110, 0.14)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(15, 118, 110, 0.22), transparent 32%), radial-gradient(circle at top right, rgba(194, 65, 12, 0.15), transparent 28%), linear-gradient(180deg, rgba(255, 250, 242, 0.96) 0%, rgba(245, 241, 232, 1) 100%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 10s linear infinite alternate",
      },
    },
  },
  plugins: [],
};
