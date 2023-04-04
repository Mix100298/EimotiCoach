const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#000000",
      white: '#ffffff',
      text: {
        DEFAULT: "#ffffff",
        light: "#333333",
      },
      light: {
        DEFAULT: "#ffffff",
        lighter: "#ffffff",
      },
    },
    extend: {},
  },
  plugins: [],
}