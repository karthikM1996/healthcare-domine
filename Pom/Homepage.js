

export class Homepage {

/**
   * @param {import('playwright').Page} page
   */

    constructor(page) {
        this.page=page
        this.patientinfo=page.locator("//img[@class='img-responsive img-thumbnail']").first()
        this.OtandRoominfo=page.locator("//img[@class='img-responsive img-thumbnail']").nth(1)
         this.patientInvoice=page.locator("//img[@class='img-responsive img-thumbnail']").nth(2)
         this.staffinfo=page.locator("//img[@class='img-responsive img-thumbnail']").nth(3)
        this.Admittedpatientinfo=page.locator("//img[@class='img-responsive img-thumbnail']").nth(4)

    }
}