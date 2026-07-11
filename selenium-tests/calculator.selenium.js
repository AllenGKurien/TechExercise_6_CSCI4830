const { Builder, By, until } = require("selenium-webdriver");

async function runSystemTest() {
  let driver;

  try {
    driver = await new Builder()
      .forBrowser("safari")
      .build();

    await driver.get("http://localhost:3000");

    await driver
      .findElement(By.id("first-number"))
      .sendKeys("8");

    await driver
      .findElement(By.id("second-number"))
      .sendKeys("5");

    await driver
      .findElement(By.id("add-button"))
      .click();

    const resultElement = await driver.findElement(By.id("result"));

    await driver.wait(
      until.elementTextIs(resultElement, "13"),
      5000
    );

    const result = await resultElement.getText();

    if (result === "13") {
      console.log("System test passed: 8 + 5 = 13");
    } else {
      console.error(
        `System test failed: expected 13 but received ${result}`
      );
      process.exitCode = 1;
    }
  } catch (error) {
    console.error("System test failed:");
    console.error(error.message);
    process.exitCode = 1;
  } finally {
    if (driver) {
      await driver.quit();
    }
  }
}

runSystemTest();