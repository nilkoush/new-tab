/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	safelist: [
		{
			pattern: /bg/,
		},
	],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				md: '2.5rem',
				lg: '5rem',
				xl: '10rem',
				'2xl': '20rem',
			},
		},
		extend: {
			colors: {
				'dark-gray': '#212121',
				'light-gray': '#DBDBDB',
			},
		},
	},
	plugins: [],
};
