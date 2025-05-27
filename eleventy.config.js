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
		"aaaPlusPlusExoticsInStock",
	function (collectionsApi) {
		return collectionsApi.getFilteredByTags("exotics", "inStock", "aaa-plus-plus");
	}
	);
	eleventyConfig.addCollection(
		"aaaPlusExoticsInStock",
	function (collectionsApi) {
		return collectionsApi.getFilteredByTags("exotics", "inStock", "aaa-plus");
	}
	);
	eleventyConfig.addCollection(
		"aaaExoticsInStock",
	function (collectionsApi) {
		return collectionsApi.getFilteredByTags("exotics", "inStock", "aaa");
	}
	);
	eleventyConfig.addCollection(
		"premiumIndoorExoticsInStock",
	function (collectionsApi) {
		return collectionsApi.getFilteredByTags("exotics", "inStock", "premium-indoor-exotics");
	}
	);
	eleventyConfig.addCollection(
		"mediumsExoticsInStock",
	function (collectionsApi) {
		return collectionsApi.getFilteredByTags("exotics", "inStock", "mediums");
	}
	);
	eleventyConfig.addCollection(
		"smallsExoticsInStock",
	function (collectionsApi) {
		return collectionsApi.getFilteredByTags("exotics", "inStock", "smalls");
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
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/"
		})
		.addPassthroughCopy("./content/feed/pretty-atom-feed.xsl")
		.addPassthroughCopy("./content/2zd5uqd22dk4h16w18re6qpghm7rpumd.txt");
	eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif,avif}");
	eleventyConfig.addBundle("css", {
		toFileDirectory: "dist",
	});
	eleventyConfig.addBundle("js", {
		toFileDirectory: "dist",
	});
	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);

	eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
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

	eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "auto"],
		widths: ["auto"],
		failOnError: false,
		htmlOptions: {
			imgAttributes: {
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
