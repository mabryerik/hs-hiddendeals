export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"mediums",
		"noStock",
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.exmediumshd | safe }}",
		 regPrice: "{{ metadata.exmediumsreg | safe }}",
	}
};
