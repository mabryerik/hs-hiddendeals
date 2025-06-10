export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"aaa"
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.aaahd | safe }}",
		 regPrice: "{{ metadata.aaareg | safe }}",
	}
};
