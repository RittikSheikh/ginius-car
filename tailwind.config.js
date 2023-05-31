/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#FF912C",

          "secondary": "#FF3811",

          "accent": "#29B170",

          "neutral": "#3D4451",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#F77272",
        },
      },
    ],
  },
  theme: {
    extend: {
    },
  },
  plugins: [require("daisyui")],
}

