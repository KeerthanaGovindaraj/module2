var currentDT = new Date();
console.log(currentDT);
var currentTimeUnix = currentDT.getTime();
var currentFullyr = currentDT.getFullYear();
var currentDate = currentDT.getDate();
var currentDay = currentDT.getDay();
var currentMonth = currentDT.getMonth();
var currentDateString = currentDT.toDateString();


console.log(currentTimeUnix);
console.log(currentFullyr);
console.log(currentDate);
console.log(currentDay);
console.log(currentMonth);
console.log(currentDateString);