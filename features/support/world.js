require('chromedriver')
const seleniumWebdriver = require('selenium-webdriver');
const {defineSupportCode} = require('cucumber');

function CustomWorld() {
  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build();

  this.findElement = css =>
    this.driver.findElement(seleniumWebdriver.By.css(css))
}

defineSupportCode(function({After, setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
  // After(function () {
  //   return this.driver.quit();
  // })
})
