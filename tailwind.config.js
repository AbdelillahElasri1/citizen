/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      minHeight: {
        'screen-85': '85vh',
        'screen-90': '90vh'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

