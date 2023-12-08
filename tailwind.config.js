/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			},
			height: {
				'dscreen': 'calc(100dvh)'
			},
			colors: { 
				'dark': '#222454',
				'beige': '#F3EED8'
			}
		}
	},
	plugins: []
};
