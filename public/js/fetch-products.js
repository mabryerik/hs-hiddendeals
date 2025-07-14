import { writeFileSync } from 'fs';

const JSON_URL = 'https://script.google.com/macros/s/AKfycbxYc9tFL8aFv007KUXtFwGRRrhvqRYskJnTPFczNDMCurp-3u-FuTfINgSGyxizSNA/exec';

async function updateProducts() {
	const res = await fetch(JSON_URL);
	if (!res.ok) {
		console.error('❌ Error fetching JSON:', res.status);
		process.exit(1);
	}

	const products = await res.json();

	writeFileSync('./_data/products.json', JSON.stringify(products, null, 2));
	console.log(`✅ Fetched and saved ${products.length} products`);
}

updateProducts().catch(console.error);
