export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"smalls",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.exsmallshd }}",
		 regPrice: "{{ metadata.exsmallsreg }}",
	},
};
