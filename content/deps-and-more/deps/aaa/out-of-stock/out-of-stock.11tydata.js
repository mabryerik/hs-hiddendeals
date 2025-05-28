export default {
	tags: [
		"posts",
		"flower",
		"deps",
		"depaaa",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.depaaahd }}",
		 regPrice: "{{ metadata.depaaareg }}",
	},
};
