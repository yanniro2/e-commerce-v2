import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Define your custom colors here
        primary: "#d87d4a",
        secondary: "#fbaf85",
        dark: "#101010",
        gray: "#f1f1f1",
        milkWhite: "#fafafa",
        white: "#ffffff",
        black: "#000000",
        bGray: "#cfcfcf",
        // You can add more colors as needed
      },
      fontFamily: {
        // Define your custom font families here
        Manrope: ["Manrope", "Arial", "sans"],
        serif: ["Georgia", "serif"],
        // You can add more font families as needed
      },
    },
  },
  safelist: ["border-primary", "border-bGray"],
  plugins: [],
};
export default config
