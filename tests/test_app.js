import { Builder, By } from 'selenium-webdriver';
import { expect } from 'chai';

describe('React App UI Test', function () {
    this.timeout(30000); // timeout for selenium

    let driver;

    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        await driver.get('http://localhost:3000'); // React default dev server
    });

    after(async function () {
        await driver.quit();
    });

    it('should load React App and display header', async function () {
        const header = await driver.findElement(By.css('h1')).getText();
        expect(header).to.contain('React');
    });
});
