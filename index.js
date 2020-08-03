const {Builder} = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const options = new firefox.Options();

//SET my browser profile
options.setProfile('./profileSelenium')

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

