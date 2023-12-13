/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			height: {
				dscreen: 'calc(100dvh)'
			},
			colors: {
				dark: '#222454',
				beige: '#F3EED8',
				pink: '#FC94BB',
				blue: '#39BFDA',
				green: '#C7F4E7',
				background: '#E9E9E9',
			}
		}
	},
	plugins: []
};
