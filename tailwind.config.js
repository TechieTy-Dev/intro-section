/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,js}",
		"./node_modules/flowbite/**/*.js",
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			colors: {
				white: "hsl(0, 0%, 98%)",
				black: "hsl(0, 0%, 8%)",
				gray: "hsl(0, 0%, 41%)",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
