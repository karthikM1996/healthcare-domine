import {test as basetest} from '@playwright/test'

export const test=basetest.extend({
Loginfixture:async({page},use)=>{

await page.goto("http://49.249.29.4:8081/TestServer/Build/Health_Care_Hospital_System/")
await page.getByPlaceholder("Username").fill("superadmin")
await page.getByPlaceholder("Password").fill("123")
await page.getByText("SUBMIT").click()

await page.waitForLoadState('domcontentloaded');
await page.waitForLoadState('networkidle');


await use(page)
},

Logoutfixture:async({page},use)=>{

    await use(page)
  await page.locator("//a[text()='Logout']").click()  





}
})