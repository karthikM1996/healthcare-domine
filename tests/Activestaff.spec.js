
import {test,expect}  from '@playwright/test'
import Login from "../DataDrive/Login.json"
import { LoginPage } from '../Pom/Login'
import { Homepage } from '../Pom/Homepage'
import { staffPage } from '../Pom/Staffmemregpage'




test('Activestaff',async({browser})=>{


let context=await browser.newContext()
let page=await context.newPage()

await page.goto("http://49.249.29.4:8081/TestServer/Build/Health_Care_Hospital_System/")

let username=Login.username1
let password=Login.password

let lp=new LoginPage(page)
await lp.LoginFunction(username,password)

let hp=new Homepage(page)
await hp.staffinfo.click()

let stpage=new staffPage(page)
await stpage.ActiveMember.click()

console.log("before")
await page.screenshot({path:'./screenshot/pic1.png',fullPage:true})
console.log("after")

let list=await page.locator("//div[@class='col-md-4 col-xs-4 alert-danger']").textContent()
console.log(list)

console.log("=========================================================")

let listofdoc=await page.locator("//table[@class='table table-striped table-hover table-bordered']").allInnerTexts()
console.log(listofdoc);

















})