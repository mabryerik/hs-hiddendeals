export default {
	tags: [
		"posts",
		"flower",
		"smalls",
		"premium",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.premsmallshd | safe }}",
		 regPrice: "{{ metadata.premsmallsreg | safe }}",
	},
};
