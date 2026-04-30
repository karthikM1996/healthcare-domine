

export class PatientInfo {



/**
   * @param {import('playwright').Page} page
   */


    constructor(page) {

        this.page=page
        this.patientreglink=page.locator("//li[@class='active']")
        this.pinfolink=page.locator("//strong[text()='Patient Information']")
        this.psearchlink=page.locator("//strong[text()='Patient Search']")
        this.peditlink=page.locator('//strong[text()="Patient Information Edit and Delete"]')
        this.pname=page.locator("//input[@id='fname']")
        this.plname=page.locator("//input[@id='lname']")
        this.opddoc=page.locator("//select[@name='dnames']")
        this.paddress=page.locator("//input[@name='addr']")
         this.pcontact=page.getByPlaceholder("Contact Number")
         this.pemail=page.getByPlaceholder("Email Address")
         this.pgender=page.getByPlaceholder("Select your Gendere")
         this.pbirthday=page.getByPlaceholder("Birthday")
         this.pbloodgroup=page.getByPlaceholder("Select your Staff Type")
         this.psubbtn=page.locator("//button[@name='submit']")
         this.pinfomodify=page.locator("//strong[text()='Patient Information Modify']")
         this.pass=page.getByPlaceholder("Password")
         this.submit=page.locator("//button[text()='SUBMIT']")
         this.psearchtf=page.getByPlaceholder("Enter Registration No / Mobile Number/ Email / First name or Blood Group")
         this.psubbtn=page.locator("//button[text()='Search']")
         this.pupdatebtn=page.locator("//a[text()='Update']")
        this.editpname=page.locator("//input[@id='patifn']")
        this.editlpname=page.locator("//input[@id='patsn']")
         this.activefeild=page.locator("//select[@id='fieldsac']")
         this.updatebtn=page.locator("//button[text()='Update']")
         this.medicenecharge=page.locator("//input[@name='mc']")
         this.docharge=page.locator("//input[@name='dc']")
         this.Admittohosptial=page.locator("//a[text()='Admit to Hospitol']")


    }

    async Patientreguser(name,plastname,doc,address,number,email,gender,date,blood) {
        await this.patientreglink.click()
        // await this.pass.fill(pass)
        // await this.psubbtn.click()
        await this.pname.fill(name)
        await this.plname.fill(plastname)
        await this.opddoc.selectOption(doc)
        await this.paddress.fill(address)
        await this.pcontact.fill(number)
        await this.pemail.fill(email)
        await this.pgender.selectOption(gender)
        await this.pbirthday.fill(date)
        await this.pbloodgroup.selectOption(blood)
        await this.submit.click()       
    }

    async pInfoedit(pass,name,newname,lname,data) {

        await this.peditlink.click()
       await this.pass.fill(pass)
       await this.submit.click()
       await this.pinfomodify.click()
        await this.pseachtf.fill(name)
        await this.psubbtn.click()
        await this.pupdatebtn.click()
        await this.editpname.clear()
        await this.editpname.fill(newname)
        await this.editlpname.clear()
        await this.editlpname.fill(lname)
        await this.activefeild.selectOption(data)
        await this.updatebtn.click()
        
    }
}