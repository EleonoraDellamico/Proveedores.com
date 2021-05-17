const { chromium } = require('playwright');
(async () => {
	const browser = await chromium.launch({
		headless: false,
		slowMo: 50
	});
	const context = await browser.newContext();
	// Open new page
	const page = await context.newPage();
	// Go to https://web.gencat.cat/ca/inici
	await page.goto('https://web.gencat.cat/ca/inici');
	// Click input[type="search"]
	await page.click('input[type="search"]');
	// Fill input[type="search"]
	await page.type('input[type="search"]', 'Agenda cultural');
	// Click [aria-label="Cercar"]
	await page.click('[aria-label="Cercar"]');
	// assert.equal(page.url(), 'https://web.gencat.cat/ca/cercador/?q=Agenda+cultural&lr=lang_ca');
	// ---------------------
	//await context.close();
	//await browser.close();
})();
