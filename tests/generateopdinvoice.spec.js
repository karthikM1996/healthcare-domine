

import {test,expect} from '@playwright/test'
import login from "../DataDrive/Login.json"
import { LoginPage } from '../Pom/Login'
import { Homepage } from '../Pom/Homepage'
import { PatientInfo } from '../Pom/patientpage'


test('genetratingopdPatientInvoice',async({browser})=>{

let context=await browser.newContext()
let page=await context.newPage()

await page.goto("http://49.249.29.4:8081/TestServer/Build/Health_Care_Hospital_System/")


let username=login.username1
let password=login.password

let lp=new LoginPage(page)
await lp.LoginFunction(username,password)

let hp=new Homepage(page)
await hp.patientinfo.click()

let pp=new PatientInfo(page)
await pp.pinfolink.click()

let list=await page.locator("//div[@class='col-md-12 ']").textContent()
let name="kumarkumar k"

let newPage;
if(list.includes(name))
{
   [newPage]=  await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//td[text()='kumarkumar k']/parent::tr[@valign='middle']/descendant::a[text()='Make OPD Invoice']").click()

    ])
} 

await newPage.locator("//input[@name='mc']").fill("2000")
await newPage.locator("//input[@name='dc']").fill("550")
await newPage.locator("//button[text()='SUBMIT']").click()

await expect (newPage.locator("//div[text()='Registration Successful !']")).toBeVisible()

page.pause()

})
