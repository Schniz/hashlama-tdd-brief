const {defineSupportCode} = require('cucumber')
const {By} = require('selenium-webdriver')

defineSupportCode(({Then, When, Given}) => {
  Given('I visit the calculator page', function () {
    return this.driver.get('http://localhost:9001/calc')
  });
})
