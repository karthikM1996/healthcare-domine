
import excel from 'exceljs'

export async function ReadDataFromExcel(path,sheetname,rownum,cellnum)

{
    let book=new excel.Workbook()
    await book.xlsx.readFile(path)
    let sheet=book.getWorksheet(sheetname)
   let data=sheet.getRow(rownum).getCell(cellnum).toString()
    return data;
}
    
