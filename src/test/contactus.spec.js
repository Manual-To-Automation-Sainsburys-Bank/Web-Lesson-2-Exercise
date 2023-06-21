describe('Perform Login Operations', async () => {
  beforeEach('Open the web page', () => {
    browser.url("https://automationexercise.com");
  })
  
  it('Submits  A Contact Form', async () => {
      const contactUsMenuItem = await $("//a[@href='/contact_us']");
      await contactUsMenuItem.waitForDisplayed({ timeout: 10000 });
      await contactUsMenuItem.click();

      await $('[name="name"]').setValue("FirstName LastName");
      await $('[name="email"]').setValue("automationtraining@sainsburys.com");
      await $('[name="subject"]').setValue("This is a Subject line");
      await $('#message').setValue("This is a custom message. Please revert back when you can.");
      await $('[name="submit"]').click();

      await browser.acceptAlert();

      const successMessage = await $("//div[@class='status alert alert-success']");
      await expect(successMessage).toBeDisplayed();
  });
})
  
  