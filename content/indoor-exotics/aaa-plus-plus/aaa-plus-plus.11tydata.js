export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"aaa-plus-plus",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.aaaplusplushd | safe }}",
		 regPrice: "{{ metadata.aaaplusplusreg | safe }}",
	},
};
