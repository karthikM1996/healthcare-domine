

import {test,expect} from '@playwright/test'
import login from "../DataDrive/Login.json"
import { LoginPage } from '../Pom/Login'
import { Homepage } from '../Pom/Homepage'
import { PatientInfo } from '../Pom/patientpage'


test('searchpatientbyname',async({browser})=>{

   let context=await browser.newContext()
   let page=await context.newPage()

   page.goto("http://49.249.29.4:8081/TestServer/Build/Health_Care_Hospital_System/")

let username=login.username1
let password=login.password

let lp=new LoginPage(page)
await lp.LoginFunction(username,password)

let hp=new Homepage(page)
await hp.patientinfo.click()

let pp=new PatientInfo(page)
await pp.psearchlink.click()
await pp.psearchtf.fill("kumarkumar")
await pp.psubbtn.click()

let patientdetails=await page.locator("//div[@class='col-md-5 col-md-push-1']")

await patientdetails.screenshot({path:'./screenshot/patientdetails.png'})

let details=await patientdetails.textContent()
console.log(details)







})