export default {
	tags: [
		"posts",
		"flower",
		"deps",
		"light-assist",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.lightassisthd | safe }}",
		 regPrice: "{{ metadata.lightassistreg | safe }}",
	},
};
