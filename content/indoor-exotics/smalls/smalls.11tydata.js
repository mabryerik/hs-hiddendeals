export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"smalls"
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
		eleventyComputed: {
			 hdPrice: "{{ metadata.exsmallshd | safe }}",
			 regPrice: "{{ metadata.exsmallsreg | safe }}",
		},
	};
