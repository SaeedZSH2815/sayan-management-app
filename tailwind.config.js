/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",

    "../node_modules/flowbite/**/*.js" // add this lin
    //../node_modules/flowbite/dist/flowbite.min.js
  ],
  theme: {
    extend: {},
  },
  plugins: [
     require('flowbite/plugin')
  ],
}

