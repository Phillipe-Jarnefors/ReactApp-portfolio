/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        font: "#DADADA",
        primary: "#61DBFB",
        secondary: "#FF7777",
        background: "#001829",
        abstract: "#1B1A24",
      },
      spacing: {
        cards: "clamp(3.5rem, 3vw, 5rem)",
        logo: "clamp(1.5rem, 3vw, 3rem)",
      },
      transitionDuration: {
        4000: "4000ms",
      },
    },
    gridTemplateRows: {
      8: "repeat(8, minmax(0, 1fr))",
      layout: "4fr, 4fr, 1fr, 4fr, 4fr, 1fr, 4fr",
    },
    fontSize: {
      button: [
        "clamp(1.1rem, 5vw, 3rem)",
        {
          lineHeight: "2rem",
          letterSpacing: "0.03em",
          fontWeight: "600",
        },
      ],
      medium: [
        "clamp(0.9rem, 3vw, 2rem)",
        {
          lineHeight: "1.2rem",
        },
      ],
      xl: [
        "clamp(1.5rem, 5vw, 3rem)",
        {
          lineHeight: "2rem",
          letterSpacing: "0.03em",
          fontWeight: "bold",
        },
      ],
      "2xl": [
        "clamp(1.85rem, 5vw, 4.5rem)",
        {
          lineHeight: "2rem",
          letterSpacing: "0.03em",
          fontWeight: "bold",
        },
      ],
      "3xl": [
        "clamp(2.3rem, 5vw, 5rem)",
        {
          lineHeight: "2rem",
          letterSpacing: "0.03em",
          fontWeight: "bold",
        },
      ],
    },
  },
  plugins: [],
}
