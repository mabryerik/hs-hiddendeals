export default {
	tags: [
		"posts",
		"flower",
		"deps",
		"light-assist"
	],
	"layout": "layouts/post-media.njk",
	ddate: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.lightassisthd | safe }}",
		 regPrice: "{{ metadata.lightassistreg | safe }}",
	},
};
