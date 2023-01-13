console.log(123);
const fs = require('fs')
const pupeteer = require('puppeteer');

async function run() {
    const browser = await pupeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.vecernji.hr');


    // await page.screenshot({ path:'screenshots/example.png', fullPage: true});
    // await page.pdf({ path: 'example.pdf',format: 'A4'})
    // const html = await page.content();


    // const pageTitle = await page.evaluate(() => document.title);
    // console.log(pageTitle);

    // const text = await page.evaluate(()=> document.body.innerText)
    const links = await page.evaluate(() => Array.from(document.querySelectorAll('a'), e => e.href))

    console.log(links)

    fs.writeFile('links.json', JSON.stringify(links),(err) => {
        if (err) throw err;
        console.log('Saved')
    })



 


    await browser.close();
}


run();