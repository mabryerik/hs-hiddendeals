export default async () => {
	const { default: products } = await import('./products.json', {
		with: { type: 'json' }
	});

	const grouped = {};

	for (const item of products) {
		const key = item.priceLevel || 'Unknown';
		if (!grouped[key]) grouped[key] = [];
		grouped[key].push(item);
	}

	return grouped;
};
