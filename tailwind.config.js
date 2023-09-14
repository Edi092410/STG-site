const { blackA, mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        "bg-light-blue": "#1d9cd380",
        "bg-pale-blue": "#8fcee957",
        "bg-transparent-white": "#ffffff00",
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: "translateX(2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: "translateY(2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: "translateX(-2px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
        down: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "50%": { opacity: 0.5, transform: "translateY(-5px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        appear: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        appearAndDissapear: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        revolveDrop: {
          "30%": {
            transform: "translate(0, -50px) rotate(180deg) scale(1)",
          },

          "60%": {
            transform: "translate(0, 20px) scale(.8) rotate(0deg)",
          },

          "100%": {
            transform: "translate(0) scale(1) rotate(0deg)",
            opacity: "1",
          },
        },
        drop: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        wiggle: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "50%": {
            transform: "scale(1.15)",
          },
        },
        redBorder: {
          "0%, 100%": {
            borderStyle: "none",
          },
          "50%": {
            borderWidth: "1px",
            borderColor: "rgb(239 68 68)",
          },
        },
      },
      animation: {
        slideDownAndFade:
          "slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideLeftAndFade:
          "slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideUpAndFade: "slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        slideRightAndFade:
          "slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        upToDown: "down 400ms",
        appear: "appear 1000ms ease-in-out",
        dissappear: "appearAndDissapear 1000ms ease-in-out",
        revolveDrop: "revolveDrop 300ms forwards",
        drop: "drop 1000ms forwards",
        wiggle: "wiggle 1500ms infinite",
        redBorder: "redBorder 1000ms",
      },
      screens: {
        "3xl": "1980px",
      },
    },
  },
  plugins: [],
};
