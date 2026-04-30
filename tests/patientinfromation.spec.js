

import {test,expect} from '@playwright/test'
import login from "../DataDrive/Login.json"
import { LoginPage } from '../Pom/Login'
import { Homepage } from '../Pom/Homepage'
import { PatientInfo } from '../Pom/patientpage'

test('patientinformation',async({browser})=>{

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

    await page.screenshot({path:'./screenshot/pinfo.png',fullPage:true})

    let patientname=await page.locator("//div[@class='col-md-12 ']").allInnerTexts()
    console.log(patientname)

let doctor = page.locator("text=karthik M");

if (await doctor.isVisible()) {
    console.log("doctor is available");
}






})