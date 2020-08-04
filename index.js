const { Builder, By } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const options = new firefox.Options();

//SET my browser profile
// options.setProfile('./profileSelenium')

//Setting a PROXY
//https://free-proxy-list.net/
const proxy = require('selenium-webdriver/proxy');
const proxyServer = '110.164.253.85:8080'
// driver.get('https://www.whatismyip.com/');

//SETTING my browser options

// options.setPreference('browser.download.dir', 'C:\\Users\noname\Desktop\JavaScript');
// options.setPreference('browser.download.folderList', 2);
// options.setPreference('browser.helperApps.neverAsk.saveToDisk', 'text/csv');
// driver.get('https://www.stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2019-financial-year-provisional/Download-data/annual-enterprise-survey-2019-financial-year-provisional-csv.csv');


const driver = new Builder()
    .forBrowser('firefox')
    .setFirefoxOptions(options)
    .setProxy(proxy.manual({
        http: proxyServer,
        https: proxyServer
    }))
    .build();
driver.get('https://google.com');


//ASYNCHRONOUS OPERATION WITH MY TASKS
// async function openWebsites() {
//     try {
//         await driver.get('https://www.yahoo.com/');
//         await driver.get('https://www.google.com/')
//     } catch (error) {
//         console.log(error)
//     }
// }
// openWebsites();


//REGISTRATION FUNCTION 01
// async function registrationFunction() {
//     try {
//         (await driver).get('https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration');
//         (await driver).findElement(By.name('email')).sendKeys('myRegistrationEmail@gmail.com');
//         (await driver).findElement(By.id('password')).sendKeys('myRegistrationPassword42423#dsada');
//         (await driver).findElement(By.name('submit')).click();
//     } catch (error) {
//         console.log(error)
//     }
// }
// registrationFunction()


//SELECT RADIO BUTTON FORM 02
// async function radioButtonForm() {
//     try {
//         (await driver).get('https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form');
//         (await driver).findElement(By.css('#title')).sendKeys('title title title title');
//         (await driver).findElement(By.css('#description')).sendKeys('description description');
//         (await driver).findElement(By.css('div:nth-child(1) > label > span.custom-control-description')).click();
//         (await driver).findElement(By.css('#submit')).click()
//     } catch (error) {
//         console.log(error)
//     }
// }
// radioButtonForm()


//CHECKBOX FORM 03 by XPATH SELECTORS
async function checkboxForm() {
    try {
        (await driver).get('https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form');
        (await driver).findElement(By.xpath("//input[@id='name']")).sendKeys('My name');
        (await driver).findElement(By.xpath("//input[@id='comment']")).sendKeys('My comment');
        (await driver).findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click();
        (await driver).findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
        (await driver).findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
        (await driver).findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        console.log(error)
    }
}
checkboxForm()