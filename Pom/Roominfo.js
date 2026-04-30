
export class RoomPage {



    /**
   * @param {import('playwright').Page} page
   */

    constructor(page) {
        
        this.page=page
       this.updateroominfo=page.locator("//a[text()='Update Room Informtion']")
       this.morshifdoc=page.locator("//select[@name='mrdo']")
       this.eveshifdoc=page.locator("//select[@name='erdo']")
       this.submitbtn=page.locator("//button[text()='Submit']")
    }
}