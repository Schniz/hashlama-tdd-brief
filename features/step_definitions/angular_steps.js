const {defineSupportCode} = require('cucumber');
const {By} = require('selenium-webdriver')

defineSupportCode(({Then, Given, When}) => {
  Given('I am visiting the main page', function () {
    return this.driver.get('http://localhost:9001/')
  });

  When('I change the main page\'s textbox to {stringInDoubleQuotes}',
    function (stringInDoubleQuotes) {
    const element = this.findElement('[ng-model=mickey]')
    return element.clear()
      .then(() => element.sendKeys(stringInDoubleQuotes))
  });

  Then('I should see {stringInDoubleQuotes}', function (stringInDoubleQuotes) {
    return this.findElement('body').getText().then(text => {
      return text === stringInDoubleQuotes ?
        Promise.resolve(text) : Promise.reject(text)
    })
  });
})
