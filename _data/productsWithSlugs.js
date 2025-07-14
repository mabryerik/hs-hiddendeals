import slugify from "slugify";

export default async () => {
	const { default: products } = await import("./products.json", {
		with: { type: "json" }
	});

	const seen = {};

	return products.map((product) => {
		const pricePart = slugify(String(product.priceLevel || 'unknown'), {
			lower: true,
			strict: true,
		});

		const strainPart = slugify(String(product.strain || 'unknown'), {
			lower: true,
			strict: true,
		});

		const baseSlug = `${pricePart}/${strainPart}`;
		let finalSlug = baseSlug;

		if (seen[baseSlug]) {
			seen[baseSlug]++;
			finalSlug = `${baseSlug}-${seen[baseSlug]}`;
		} else {
			seen[baseSlug] = 1;
		}

		return {
			...product,
			slug: finalSlug
		};
	});
};
