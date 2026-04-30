

import {test,expect} from '@playwright/test'
import login from "../DataDrive/Login.json"
import { LoginPage } from '../Pom/Login'
import { Homepage } from '../Pom/Homepage'
import { PatientInfo } from '../Pom/patientpage'
import { ReadDataFromExcel } from '../GenericUtility/excelutility'




test('Admittingtohosptial',async({browser})=>{

let context=await browser.newContext()
let page=await context.newPage()

await page.goto("http://49.249.29.4:8081/TestServer/Build/Health_Care_Hospital_System/")

let username=login.username1
let password=login.password

let lp=new LoginPage(page)
await lp.LoginFunction(username,password)

let hp=new Homepage(page)
await hp.patientinfo.click()

let name=await ReadDataFromExcel("DataDrive/exceldata.xlsx","Sheet1",4,1)

let pp=new PatientInfo(page)
await pp.psearchlink.click()
await pp.psearchtf.fill(name)
await pp.psubbtn.click()

let [newpage]=await Promise.all([
    page.waitForEvent('popup'),
     pp.Admittohosptial.click()
])
 
await newpage.getByPlaceholder("Diseases").fill("eye")
await newpage.locator("//select[@class='form-control']").selectOption("1")
await newpage.locator("//button[text()='Submit']").click()

await newpage.screenshot({path:'./screenshot/Admittedinfo.png'})






})