export default {
	tags: [
		"posts",
		"flower",
		"exotics",
		"mediums"
	],
	"layout": "layouts/post-media.njk",
	date: "git Last Modified",
	eleventyComputed: {
		 hdPrice: "{{ metadata.exmediumshd }}",
		 regPrice: "{{ metadata.exmediumsreg }}",
	}
};
