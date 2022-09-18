import { Config } from 'tailwindcss'
export default <Config> {
  darkMode: 'class', // or 'media' or false
  theme: {
    darkSelector: '.dark-mode',
    extend: {},
  },
  plugins: [],
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ]
}
