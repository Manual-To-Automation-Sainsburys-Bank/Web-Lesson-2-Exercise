describe('Perform Login Operations', async () => {

  beforeEach('Open Page', () => {
    browser.url('https://practicetestautomation.com/practice-test-login/');
  });
  
  it('Login Successfully', async () => {
    await $("#username").setValue("student");
    await $("#password").setValue("Password123");
    await $("#submit").click();

    await expect(browser).toHaveUrl("https://practicetestautomation.com/logged-in-successfully/");
  });

  it('Failed Login - Username', async () => {
    await $("#username").setValue("wrongstudent");
    await $("#password").setValue("Password123");
    await $("#submit").click();

    let errorElement = await $("#error");
    await expect(errorElement).toHaveText("Your username is invalid!");
  });

  it('Failed Login - Password', async () => {
    await $("#username").setValue("student");
    await $("#password").setValue("WrongPassword123");
    await $("#submit").click();

    let errorElement = await $("#error");
    await expect(errorElement).toHaveText("Your password is invalid!");
  });
})
  
  