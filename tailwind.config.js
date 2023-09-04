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
        cards: "clamp(3.5rem, 5vw, 8rem)",
        heroSm: "13rem",
        hero: "clamp(13rem, 8vw, 22rem)",
        logo: "clamp(1.5rem, 3vw, 3rem)",
        layout: "clamp(0.5rem, 7vw, 36rem)",
        128: "28rem",
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
        "clamp(1.1rem, 4vw, 1.8rem)",
        {
          lineHeight: "2rem",
          letterSpacing: "0.03em",
          fontWeight: "600",
        },
      ],
      medium: [
        "clamp(0.9rem, 3vw, 2rem)",
        {
          lineHeight: "clamp(1.2rem, 4.5vw, 2rem)",
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
          lineHeight: "clamp(2rem, 5vw, 4.5rem)",
          letterSpacing: "0.03em",
          fontWeight: "bold",
        },
      ],
      "3xl": [
        "clamp(2.3rem, 6.2vw, 5.5rem)",
        {
          lineHeight: "clamp(2rem, 5vw, 4.5rem)",
          letterSpacing: "0.03em",
          fontWeight: "bold",
        },
      ],
      firstname: [
        "clamp(1.5rem, 7vw, 5rem)",
        {
          lineHeight: "2rem",
          letterSpacing: "0.03em",
          fontWeight: "bold",
        },
      ],
      lastname: [
        "clamp(0.9rem, 6vw, 4rem)",
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
