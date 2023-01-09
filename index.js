console.log(123);

const pupeteer = require('puppeteer');

async function run() {
    const browser = await pupeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.24sata.hr/');


    // await page.screenshot({ path:'screenshots/example.png', fullPage: true});
    // await page.pdf({ path: 'example.pdf',format: 'A4'})
    // const html = await page.content();


    const pageTitle = await page.evaluate(() => document.title);
    console.log(pageTitle);


 


    await browser.close();
}


run();