/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				light: '#efefef',
				blue: '#D1E5F7',
				romance: '#DAF2D6',
				corn: '#FFF9DE',
				tana: {
					400: '#B2AFA1',
					800: '#69665C',
				},
				Lavender: '#D2CEFF',
				rose: '#FFCCEE',
				dark: {
					500: 'rgba(0, 0, 0, .5)',
				},
			},
			fontFamily: {
				adobeCleanRegular: ['adobeCleanRegular', 'sans-serif'],
				adobeCleanBold: ['adobeCleanBold', 'sans-serif'],
			},
			screens: {
				md: '769px',
				lg: '977px',
				xl: '1440px',
			},
		},
	},
	plugins: [],
};
