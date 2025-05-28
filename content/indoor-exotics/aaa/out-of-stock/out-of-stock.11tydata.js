export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"aaa",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.aaahd }}",
		 regPrice: "{{ metadata.aaareg }}",
	},
};
