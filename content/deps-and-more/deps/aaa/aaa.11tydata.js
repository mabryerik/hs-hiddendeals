export default {
tags: [
	"deps",
	"depaaa",
	"flower",
	"posts"
],
"layout": "layouts/post-media.njk",
date: "git Last Modified",
eleventyComputed: {
	 hdPrice: "{{ metadata.depaaahd | safe }}",
	 regPrice: "{{ metadata.depaaareg | safe }}",
},
};
