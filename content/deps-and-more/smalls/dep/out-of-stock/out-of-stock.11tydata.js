export default {
	tags: [
		"posts",
		"flower",
		"deps",
		"smalls",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.depsmallshd | safe }}",
		 regPrice: "{{ metadata.depsmallsreg | safe }}",
	},
};
