export class LoginPage {
 

  /**
   * @param {import('playwright').Page} page
   */


    constructor(page) {
        this.page=page
       this.UsernameTextFeild=page.getByPlaceholder("Username")
       this.PasswordTextFeild=page.getByPlaceholder("Password")
         this.SubmitButton=page.getByText("SUBMIT")
    }

    async LoginFunction(username,password) {
       await this.UsernameTextFeild.fill(username)
       await this.PasswordTextFeild.fill(password)
      await  this.SubmitButton.click()
    }
}