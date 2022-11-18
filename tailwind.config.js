/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./utils/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				vietnam: ["Be Vietnam Pro", "sans-serif"],
			},
		},
		screens: {
			xs: "375px",
			sm: "640px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			"2xl": "1440px",
		},
		colors: {
			brightred: "hsl(12, 88%, 59%)",
			darkblue: "hsl(228, 39%, 23%)",
			darkgrayblue: " hsl(227, 12%, 61%)",
			verydarkblue: "hsl(233, 12%, 13%)",
			lightgray: "hsl(0, 0%, 98%)",
			verypalered: "hsl(13, 100%, 96%)",
		},
		boxShadow: {
			getStartedBtnShadow: "rgba(240, 81, 41, 1) 0px 25px 20px -20px",
			mobileNavShadow: "rgba(0, 0, 0, 0.18) 0px 2px 4px",
		},
		backgroundImage: {
			// nav: "url('../../images/bg-tablet-pattern.svg')",
		},
	},
	plugins: [],
};
