import { IdAttributePlugin, InputPathToUrlTransformPlugin, HtmlBasePlugin } from "@11ty/eleventy";
import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import pluginNavigation from "@11ty/eleventy-navigation";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginFilters from "./_config/filters.js";
import pluginSEO from "eleventy-plugin-seo";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
	eleventyConfig.addCollection(
		"exoticsNoStock",
	function (collectionsApi) {
		return collectionsApi.getFilteredByTags("exotics", "noStock");
	}
	);
	eleventyConfig.addCollection(
		"exoticsInStock",
	function (collectionsApi) {
		return collectionsApi.getFilteredByTags("exotics", "inStock");
	}
	);
	eleventyConfig.addCollection(
		"indoorNoStock",
		function (collectionsApi) {
			return collectionsApi.getFilteredByTags("indoor", "noStock");
		}
	);
	eleventyConfig.addCollection(
		"indoorInStock",
		function (collectionsApi) {
			return collectionsApi.getFilteredByTags("indoor", "inStock");
		}
	);
	eleventyConfig.addCollection(
		"depsNoStock",
		function (collectionsApi) {
			return collectionsApi.getFilteredByTags("deps", "noStock");
		}
	);
	eleventyConfig.addCollection(
		"depsInStock",
		function (collectionsApi) {
			return collectionsApi.getFilteredByTags("deps", "inStock");
		}
	);

	eleventyConfig.addPreprocessor("drafts", "*", (data, content) => {
		if(data.draft && process.env.ELEVENTY_RUN_MODE === "build") {
			return false;
		}
	});

	eleventyConfig.addFilter("capitalizeWords", function(value) {
		if (typeof value !== 'string') {
			return ''; // or handle the undefined case as needed
		}

		return value.replace(/\b\w/g, char => char.toUpperCase());
	});


	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/"
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl");

	// Run Eleventy when these files change:
	// https://www.11ty.dev/docs/watch-serve/#add-your-own-watch-targets

	// Watch images for the image pipeline.
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif,avif}");

	// Per-page bundles, see https://github.com/11ty/eleventy-plugin-bundle
	// Adds the {% css %} paired shortcode
	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
	});
	// Adds the {% js %} paired shortcode
	eleventyConfig.addBundle("js", {
		toFileDirectory: "dist",
	});

	// Official plugins
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom", // or "rss", "json"
		outputPath: "/feed/feed.xml",
		stylesheet: "pretty-atom-feed.xsl",
		templateData: {
			eleventyNavigation: {
				key: "Feed",
				order: 4
			}
		},
		collection: {
			name: "posts",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "Happy Shaman Hidden Deals",
			subtitle: "Great deals on orders of 5 lbs or more of THCa flower.",
			base: "https://bulkthca.deals/"
		}
	});
eleventyConfig.addPlugin(pluginSEO);

	// Image optimization: https://www.11ty.dev/docs/plugins/image/#eleventy-transform
	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		// Output formats for each image.
		formats: ["avif", "webp", "auto"],
		widths: ["auto"],
		failOnError: false,
		htmlOptions: {
			imgAttributes: {
				// e.g. <img loading decoding> assigned on the HTML tag will override these values.
				loading: "lazy",
				decoding: "async",
			}
		},

		sharpOptions: {
			animated: true,
		},
	});

	// Filters
	eleventyConfig.addPlugin(pluginFilters);


};

export const config = {
	templateFormats: [
		"md",
		"njk",
		"html",
		"liquid",
		"11ty.js",
	],
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",
	dir: {
		input: "content",
		includes: "../_includes",
		data: "../_data",
		output: "_site"
	},
};
