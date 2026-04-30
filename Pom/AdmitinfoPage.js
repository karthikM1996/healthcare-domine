
export class AdmitPatientInfoPage {


/**
   * @param {import('playwright').Page} page
   */



    constructor(page) {
       this.page=page
       this.medicinecharge=page.locator("//input[@name='mc']")
       this.doctorcharge=page.locator("//input[@name='dc']")
       this.countdays=page.locator("//input[@name='cod']")
       this.submitbtn=page.locator("//button[text()='SUBMIT']")

        
    }
}