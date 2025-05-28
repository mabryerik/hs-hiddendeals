export default {
	tags: [
		"posts",
		"flower",
		"deps",
		"dep5",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.dep5hd }}",
		 regPrice: "{{ metadata.dep5reg }}",
	},
};
