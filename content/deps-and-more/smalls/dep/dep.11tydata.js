export default {
	tags: [
		"posts",
		"flower",
		"deps",
		"smalls",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.depsmallshd }}",
		 regPrice: "{{ metadata.depsmallsreg }}",
	},
};
