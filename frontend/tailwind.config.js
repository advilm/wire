// tailwind.config.js

module.exports = {
	darkMode: false,
	theme: {
		colors: {
			'transparent': 'transparent',
			'current': 'currentColor',
			'primary': '#000000',
			'primary-text': '#ffffff',
		}
	},
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']
};
