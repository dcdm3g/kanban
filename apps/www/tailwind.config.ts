import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['src/app/**/*.tsx', 'src/components/**/*.tsx'],
	darkMode: 'class',
	theme: {
		colors: {
			'indigo-echo': 'rgb(99, 95, 199)',
			'lavender-mist': 'rgb(168, 164, 255)',
			'midnight-abyss': 'rgb(0, 1, 18)',
			'shadow-blue': 'rgb(32, 33, 44)',
			'stormy-slate': 'rgb(43, 44, 55)',
			'twilight-gray': 'rgb(62, 63, 78)',
			'steel-mist': 'rgb(130, 143, 163)',
			'frosted-sky': 'rgb(228, 235, 250)',
			'pale-ice': 'rgb(244, 247, 253)',
			'pure-snow': 'rgb(255, 255, 255)',
			'crimson-blaze': 'rgb(234, 85, 85)',
			'blush-pink': 'rgb(255, 152, 152)',
			'verdant-spark': 'rgb(72, 187, 120)',
			'pure-ebony': 'rgb(0, 0, 0)',
		},
		fontSize: {
			'body-md': ['0.75rem', '0.9375rem'],
			'body-lg': ['0.8125rem', '1.4375rem'],
			'heading-md': ['0.9375rem', '1.1875rem'],
			'heading-lg': ['1.125rem', '1.4375rem'],
			'heading-xl': ['1.5rem', '1.875rem'],
		},
		boxShadow: {
			sm: '0 4px 6px 0 rgb(54, 78, 126 / 0.1015)',
			DEFAULT: '0 10px 20px 0 rgb(54 78 126 / 0.25)',
		},
		letterSpacing: {
			wide: '0.2em',
		},
		extend: {
			width: {
				dialog: 'min(30rem, calc(100% - 2rem))',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}

export default config
