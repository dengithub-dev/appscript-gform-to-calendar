//Before using this pieces of code, you should set your trigger into form submit
const setCalendar = (e) => {
  const data = e.source.getActiveSheet().getRange(e.range.rowStart,1,1,5).getValues(); //get activesheet in your spreadsheet
  //let say we have 3 columns and we like to get its values
  const columnEvent = data[0][0]; //column A
  const columnstartDate = data[0][1]; //column B
  const columnendDate = data[0][2]; //column C
  const setEventInCalendar = CalendarApp.getDefaultCalendar();
  setEventInCalendar.createEvent(columnEvent,new Date(columnstartDate),new Date(columnendDate));
}

//Below code will GET all the data you submitted and will output it to JSON
//You can deploy using webapps if you want  to
const doGet = () => {
   const ss = SpreadsheetApp.getActiveSheet();
   const [header, ...values] = ss.getDataRange().getValues();
   const obj = values.map(r => r.reduce((o, c, j) => Object.assign(o, {[header[j]]: c}), {})); //functional paradigm style
   return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); 
}
