//Before using this piece of code, you should set your trigger into form submit
const setCalendar = (e) => {
  const data = e.source.getActiveSheet().getRange(e.range.rowStart,1,1,5).getValues(); //get activesheet in your spreadsheet
  //let say we have 3 column and we like to get its values
  const columnA = data[0][0]; //column A
  const startDate = data[0][1]; //column B
  const endDate = data[0][2]; //column C
  const setEventInCalendar = CalendarApp.getDefaultCalendar();
  setEventInCalendar.createEvent(event,new Date(startDate),new Date(endDate));
}

//Below code will GET all the data you submitted and will output it to JSON
//You can deploy using webapps if you want  to
const doGet = () => {
   const ss = SpreadsheetApp.getActiveSheet();
   const [header, ...values] = ss.getDataRange().getValues();
   const obj = values.map(r => r.reduce((o, c, j) => Object.assign(o, {[header[j]]: c}), {})); //functional paradigm style
   return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON); 
}
