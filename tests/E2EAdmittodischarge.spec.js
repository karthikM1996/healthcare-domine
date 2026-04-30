
import {test,expect} from '../customfixture/customfixture'
import { Homepage } from '../Pom/Homepage'
import { PatientInfo } from '../Pom/patientpage'
import { ReadDataFromExcel } from '../GenericUtility/excelutility'




test('E2EAdmitanddischarge',async({page,Loginfixture,Logoutfixture})=>{


let hp=new Homepage(page)
await hp.patientinfo.click()

await ReadDataFromExcel()

let pinfo=new PatientInfo(page)
await pinfo.Patientreguser()









    
})