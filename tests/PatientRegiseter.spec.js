

import {test,expect} from '@playwright/test'
import login from "../DataDrive/Login.json"
import { LoginPage } from '../Pom/Login'
import { Homepage } from '../Pom/Homepage'
import { PatientInfo } from '../Pom/patientpage'



test('PatientRegistration',async({browser})=>{

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
await pp.Patientreguser("kumar","M","karthik M","Bangalore","123789456","kumar@gamil.com","Male","1995-03-25","B RhD positive (B+)")













})