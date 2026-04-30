
import {test,expect} from '../customfixture/customfixture'
import { AdmitPatientInfoPage } from '../Pom/AdmitinfoPage'
import { Homepage } from '../Pom/Homepage'





test("Discharingthepatient",async({page,Loginfixture})=>{

let hp=new Homepage(page)
await hp.Admittedpatientinfo.click()

await page.locator("//table//tbody/tr/td[5]").first().waitFor()
let listofname=await page.locator("//table//tbody/tr/td[5]").allTextContents()
console.log(listofname)

let name=await page.locator("//table//tbody/tr",{has :page.locator("//td[text()='Sneha Reddy '] ")})

 let [newpage]=await Promise.all([
    page.waitForEvent('popup'),
    name.locator("text=Discharge").click()
])


let A=new AdmitPatientInfoPage(newpage)
await A.medicinecharge.fill("2000")
await A.doctorcharge.fill("550")
await A.countdays.fill("2")
await A.submitbtn.click()


})