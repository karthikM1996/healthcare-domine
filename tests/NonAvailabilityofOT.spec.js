import {test,expect} from "../customfixture/customfixture"
import { Homepage } from "../Pom/Homepage"



test("CheckingAvailabilityofotRoom",async({page,Loginfixture})=>{

    let hp=new Homepage(page)
    await hp.OtandRoominfo.click()

    await page.locator("//tr").first().waitFor()
   
    let Room=await page.locator("//tr",{has :page.locator("//td[text()='NAV']")}).allTextContents()
    
    
    let count=await Room.length
    if(count>0)
    {
        console.log(count+" "+" Operation Theater are not available out of 10")
    }
    else{

        console.log("OT is not available")
    }
    console.log("================================================================================")

    let List=await page.locator("(//table)[2]//tr[contains(.,'NAV')]/td[2]").allTextContents()
    

   let Allrooms=await page.locator("(//table)[2]//tr/td[2]").allInnerTexts()


   let available=Allrooms.filter(x=>List.includes(x))
   console.log(available+" "+" are Not Available")



})