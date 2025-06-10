export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"aaa-plus",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.aaaplushd | safe }}",
		 regPrice: "{{ metadata.aaaplusreg | safe }}",
	},
};
