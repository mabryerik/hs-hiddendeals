export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"premium-indoor-exotics",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.piehd | safe }}",
		 regPrice: "{{ metadata.piereg | safe }}",
	},
};
