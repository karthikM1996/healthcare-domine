

import {test,expect} from "../customfixture/customfixture"
import { Homepage } from "../Pom/Homepage"
import { PatientInvoicePage } from "../Pom/PatientInvoice"



test('printingopdpatientInvoice',async({page,Loginfixture})=>{

  let hp=new Homepage(page)
  await hp.patientInvoice.click()
  
  let pinvo=new PatientInvoicePage(page)
  await pinvo.opdpatinvlink.click()
  

  let row=await page.locator("//tbody/tr",{has :page.locator('text=Amit Patel')})

  let [newpage]=await Promise.all([
          page.waitForEvent('popup'),
          row.locator("text=View").click()
        ])
  
    let pinvoice=new PatientInvoicePage(newpage)
    await pinvoice.printbtn.click()






})