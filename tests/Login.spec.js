
import{test,expect} from '@playwright/test'
import Login from "../DataDrive/Login.json"
import { LoginPage } from '../Pom/Login'


test("Loging",async({browser})=>{

let context=await browser.newContext()
 let page=await context.newPage()

 await page.goto("http://49.249.28.218:8081/TestServer/Build/Health_Care_Hospital_System/")
 
 let username=Login.username1
 let password=Login.password
 
let loginpageObj=new LoginPage(page)
await loginpageObj.LoginFunction(username,password)

 console.log("hai hello")

 






})
