var Workbook = require('xlsx-workbook').Workbook;
//GA Data output to excel
var workbook = new Workbook();
var newWeekDataXlsx = workbook.add("newWeekData");

var a = [1, 2, 3, 3, 4, 5]
newWeekDataXlsx[9][0] =

workbook.save('./test.xlsx');
console.log("產出週報")