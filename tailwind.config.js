/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'brand-green': '#585943',
      'brand-green-light': 'rgba(88, 89, 67, 1)',
      'brand-yellow': 'rgba(211, 162, 0)',
      'brand-yellow-light': 'rgba(211, 162, 0, 1)',
      'brand-black': '#000000',
      'brand-white': '#ffffff',
      'brand-gray-dark': '#55585C',
      'brand-transparent': 'transparent',
    },
    fontFamily: {
			'sans': ['Quicksand', 'sans-serif'],
			'serif': ['DM Serif Display', 'serif'],
      'hand': ['Arial', 'sans'], //TODO
		},
  },
}

