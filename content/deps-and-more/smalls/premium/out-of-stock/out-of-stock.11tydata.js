export default {
	tags: [
		"posts",
		"flower",
		"deps",
		"smalls",
		"premium",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.premsmallshd }}",
		 regPrice: "{{ metadata.premsmallsreg }}",
	},
};
