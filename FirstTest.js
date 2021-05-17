const playwright = require('playwright');

(async () => {
	for (const browserType of [ 'chromium', 'firefox', 'webkit' ]) {
		const browser = await playwright[browserType].launch({
			headless: false,
			slowMo: 50
		});
		//Context
		const context = await browser.newContext();
		//Page
		const page = await context.newPage();
		//Navigate to the page
		await page.goto('https://web.gencat.cat/ca/inici');
		//screenshot page
		await page.screenshot({ path: `ea-${browserType}.png` });
		//close browser
		//await browser.close();
	}
})();
