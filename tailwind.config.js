/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      night: {
        ...require("daisyui/src/theming/themes")["[data-theme=night]"],
        "neutral-content": "#111827;",
        "secondary" : "#111827",
      },
      winter: {
        ...require("daisyui/src/theming/themes")["[data-theme=winter]"],
        "primary-focus": "mediumblue",
        "secondary" : "#E5E7EB",
      },
    },]
  }
}

