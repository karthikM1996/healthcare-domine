
import{test,expect} from '@playwright/test'
import Login from "../DataDrive/Login.json"
import { LoginPage } from '../Pom/Login'
import { Homepage } from '../Pom/Homepage'
import { staffPage } from '../Pom/Staffmemregpage'

test('Registerstaffinfor',async({browser})=>{


let context=await browser.newContext()
let page=await context.newPage()

await page.goto("http://49.249.29.4:8081/TestServer/Build/Health_Care_Hospital_System/")

let username=Login.username1
let password=Login.password

let lp=new LoginPage(page)
await lp.LoginFunction(username,password)

let hp=new Homepage(page)
await hp.staffinfo.click()

let stfpage=new staffPage(page)
await stfpage.StaffMemberRegister("karthik","M","Mysore","123456789","karthik@gamil.com","1996-02-26")


})