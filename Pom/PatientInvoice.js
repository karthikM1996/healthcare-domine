

export class PatientInvoicePage {


/**
   * @param {import('playwright').Page} page
   */



    constructor(page) {
        this.page=page
       this.Admitedpatinvlink=page.locator("//strong[text()='Admited Patients Invoiceses']")
        this.opdpatinvlink=page.locator("//strong[text()='OPD Patients Invoiceses']")
        this.view=page.locator("//a[text()='View']")
        this.printbtn=page.locator("//button[text()='Print']")
        
    }
}