const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless : false});
  const page = await browser.newPage();
  await page.goto('https://www.argentina.gob.ar/salud/coronavirus-COVID-19/sala-situacion');

  await page.mouse.click(478,281);

  


//   await browser.close();
})();
