

import {test,expect} from "../customfixture/customfixture"
import { Homepage } from "../Pom/Homepage"
import { PatientInvoicePage } from "../Pom/PatientInvoice"




test('Admittedpatientinvoice',async({page,Loginfixture})=>{

    let hp=new Homepage(page)
    await hp.patientInvoice.click()

    let pinvo=new PatientInvoicePage(page)
    await pinvo.Admitedpatinvlink.click()

    let Text=await page.locator("//tbody/tr",{has :page.locator("//td[text()='HHHHH Kumar']")}).textContent()
    console.log(Text)


})