

import {test,expect} from '@playwright/test'
import login from "../DataDrive/Login.json"
import { ReadDataFromExcel } from '../GenericUtility/excelutility'
import { LoginPage } from '../Pom/Login'
import { Homepage } from '../Pom/Homepage'
import { PatientInfo } from '../Pom/patientpage'



test('patientinfomodiy',async({browser})=>{

let context=await browser.newContext()
let page=await context.newPage()

await page.goto("http://49.249.29.4:8081/TestServer/Build/Health_Care_Hospital_System/")

let username=login.username1
let password=login.password

let lp=new LoginPage(page)
await lp.LoginFunction(username,password)

let hp=new Homepage(page)
await hp.patientinfo.click()

let name=await ReadDataFromExcel("DataDrive/exceldata.xlsx","Sheet1",1,1)
let newname=await ReadDataFromExcel("DataDrive/exceldata.xlsx","Sheet1",2,1)
let lname=await ReadDataFromExcel("DataDrive/exceldata.xlsx","Sheet1",3,1)
console.log(name,newname,lname);



let pp=new PatientInfo(page)
await pp.pInfoedit("123",name,newname,lname,"Enable Fields")















})