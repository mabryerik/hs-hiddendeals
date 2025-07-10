export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"aaa-plus-plus-plus",
		"noStock"
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.aaaplusplusplushd | safe }}",
		 regPrice: "{{ metadata.aaaplusplusplusreg | safe }}",
	},
};
