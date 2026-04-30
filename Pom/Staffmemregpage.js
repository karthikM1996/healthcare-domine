

export class staffPage {


/**
   * @param {import('playwright').Page} page
   */




    constructor(page) {
        this.page=page
       this.AddStaffMember=page.locator("//li[@class='active']")
       this.StaffMemDetails=page.locator("//strong[text()='Staff Memebers Details']")
       this.StaffMemSearch=page.locator("//strong[text()='Staff Memeber Search']")
       this.ActiveMember=page.locator("//strong[text()='Active Members']")
       this.StaffMemModification=page.locator("//strong[text()='Staff Memeber Modifications']")
       this.Staffname=page.getByPlaceholder("First Name")
       this.Stafflastname=page.getByPlaceholder("Last Name")
       this.Staffadress=page.getByPlaceholder("Address")
       this.Staffcontactnumber=page.getByPlaceholder("Contact Number")
       this.staffemail=page.getByPlaceholder("Email Address")
       this.staffgender=page.getByPlaceholder("Select your Gendere")
       this.staffbirthday=page.getByPlaceholder("Birthday")
       this.stafftype=page.getByPlaceholder("Select your Staff Type")
       this.worktime=page.locator("//select[@name='workt']")
       this.staffsubmittbtn=page.locator("//button[text()='SUBMIT']")
       this.staffinfomodify=page.locator("//strong[text()='Staff Information Modify']")
       this.patientinfomodiy=page.locator("//strong[text()='Patient Information Modify']")
       this.staffsearchbox=page.getByPlaceholder("Enter Registration No / Mobile Number/ Email / First name or Blood Group")
       this.staffsearchbtn=page.locator("//button[text()='Search']")
       this.updatebtn=page.locator("//a[text()='Update']")
       this.updatenametf=page.locator("//input[@id='patifn']")
       this.updatelasttf=page.locator("//input[@id='patsn']")
       this.activefield=page.locator("//select[@id='fieldsac']")
       this.stmdysubmitbtn=page.locator("//button[text()='Update']")

    }

    async StaffMemberRegister(name,lastname,adress,contactno,email,birthday) {
        await this.Staffname.fill(name)
        await this.Stafflastname.fill(lastname)
        await this.Staffadress.first().fill(adress)
        await this.Staffcontactnumber.fill(contactno)
        await this.staffemail.fill(email)
        await this.staffgender.selectOption("Male")
        await this.staffbirthday.fill(birthday)
        await this.stafftype.selectOption("Doctor")
        await this.worktime.selectOption("Full Time")
        await this.staffsubmittbtn.click()
        
        
    }
}