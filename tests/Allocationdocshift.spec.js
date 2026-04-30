import {test,expect} from "../customfixture/customfixture"
import { Homepage } from "../Pom/Homepage"
import { RoomPage } from "../Pom/Roominfo"



test("CheckingAvailabilityofotRoom",async({page,Loginfixture})=>{

    let rp=new RoomPage(page)
    let hp=new Homepage(page)
    await hp.OtandRoominfo.click()


    let up=await page.locator("//tr",{has :page.locator("//td[text()='Room No: 1']")},{has :page.locator("//a[text()='Update Room Informtion']")})  

     await up.locator("text=Update Room Informtion").click()
    await rp.morshifdoc.selectOption("karthik M")
    await rp.eveshifdoc.selectOption("Hemanth Kumar")
    await rp.submitbtn.click()
})