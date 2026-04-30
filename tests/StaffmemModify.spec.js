
import {test,expect} from '@playwright/test'
import Login from "../DataDrive/Login.json"
import { LoginPage } from '../Pom/Login'
import { Homepage } from '../Pom/Homepage'
import { staffPage } from '../Pom/Staffmemregpage'

test('staffmemberModify',async({browser})=>{
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
await stfpage.StaffMemModification.click()
await lp.PasswordTextFeild.fill("123")
await lp.SubmitButton.click()

await stfpage.staffinfomodify.click()
await stfpage.staffsearchbox.fill("karthi")
await stfpage.staffsearchbtn.click()
await stfpage.updatebtn.click()
await stfpage.updatenametf.clear()
await stfpage.updatenametf.fill("karthik")
await stfpage.updatelasttf.clear()
await stfpage.updatelasttf.fill("M")
await stfpage.activefield.selectOption("Enable Fields")
await stfpage.stmdysubmitbtn.click()

await stfpage.staffinfomodify.click()
await stfpage.staffsearchbox.fill("karthik")
await stfpage.staffsearchbtn.click()


let Text=await page.locator('//input[@id="patifn"]').inputValue()
console.log(Text)
await expect(page.locator('//input[@id="patifn"]')).toHaveValue('karthik')

















})