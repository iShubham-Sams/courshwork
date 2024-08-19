import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")


const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'xs': '360px',
      'sm': '810px',
      'md': '1024px',
      'lg': '1200px',
      'xl': '1440px',
      '2xl': '1920px',
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        bgPrimary: "#e5ecf3",
        bgSecondary: "#D6DFE4",
        primary: "#6947BF",
        textGrey: "#7A8196",
        buttonDisable: "#ADB8C9"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config