const {Builder} = require("selenium-webdriver");
const firefox = require("selenium-webdriver/firefox")
const options = new firefox.Options();
options.setPreference("browser.download.dir", "C:\\mySeleniumDownloads");
options.setPreference("browser.download.folderList", 2);
options.setPreference("browser.helperApps.neverAsk.saveToDisk", "text/csv");
const driver = new Builder().forBrowser("firefox").setFirefoxOptions(options).build();
driver.get("https://www.stats.govt.nz/assets/Uploads/Annual-enterprise-survey/Annual-enterprise-survey-2019-financial-year-provisional/Download-data/annual-enterprise-survey-2019-financial-year-provisional-csv.csv");