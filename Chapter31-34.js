var rn = new Date();
document.write(rn + "<br>");



var d = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];
document.write("Current Month : " + n + "<br>");



var z = new Date();
var weekday = new Array();
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";

var n = weekday[z.getDay()];
document.write("<br>" + "Today is : " + n + "<br>");

//// Write a program that displays a message “It’s Fun day” if
// //its Saturday or Sunday today.

// //var weekday = new Array();
// //weekday[0] = "Sun";
// //weekday[1] = "Mon";
// //weekday[2] = "Tue";
// //weekday[3] = "Wed";
// //weekday[4] = "Thu";
// //weekday[5] = "Fri";
// //weekday[6] = "Sat";
// //var ask_user = prompt("What is the day today : ");
// //if (ask_user == weekday[6]) {
//   //  alert("It's Funday..!!")
// //}



var laterDate = new Date();
laterDate.setMonth(5);
document.write("Later Date : " + laterDate + "<br>");



var currentdate, millisec, min, diffmilli, diffmin;
currentdate = new Date();
document.write("Current Date : " + currentdate + "<br>");
millisec = new Date();
diffmilli = millisec.getTime();
min = new Date();
diffmin = min.getTime();
document.write(
  "Elapsed milliseconds since January 1, 1970 : " + diffmin + "<br>"
);
document.write("Elapsed minutes since January 1, 1970 : " + diffmilli + "<br>");




var hours = new Date().getHours();
var hours = (hours + 24 - 2) % 24;
var mid = "AM";
if (hours == 0) {
  hours = 12;
} else if (hours > 12) {
  hours = hours % 12;
  mid = "AM";
}
document.write("It's " + mid + "<br>");



var kl = new Date();
km = kl.getDate()
if (km <=15) {
    document.write("First fifteen days of the month")
} else {
    document.write("Last days of the month" + "<br>")
}



// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015

var ram = new Date("Apr 24, 2015"); 
ramadan = ram.getDate();
var nowram = new Date("July 20, 2020 ");
nowramadan = nowram.getDate();
var difframadan = ramadan - nowramadan
// var difframadan = nowramadan - ramadan
document.write(difframadan + " days have passed since 1st Ramadan, 2020"  + "<br>")





var setdate = new Date("Dec 5, 2015 11:22:11");
setdate1 = setdate.getTime();
document.write("On reference date " + setdate + "<br>")
document.write(setdate1 + " seconds had passed since beginning of 2015" + "<br>")




var currentdate = new Date("Dec 5, 2015 23:08:16");
var hourago = new Date("Dec 5, 2015 22:08:16");
document.write("Current Date : " + currentdate + "<br>")
var currentdate1 = currentdate.getHours();
var hourago1 = hourago.getHours();
document.write("1 hour ago, it was " + hourago + "<br>")  



var years100 = new Date("Dec 5, 2015 23:08:16");
document.write("Current Date : " + years100 + "<br>")
yaars = years100.getFullYear();
years100back = new Date("Dec 5, 1915 23:08:16");
document.write("100 Years Back : " + years100back + "<br>")




var askdate = prompt("What Is Your Year of Birth : ");
dob = 2020 - askdate
document.write("Your age is : " + dob + "<br>")
document.write("Your Birth Year is : " + askdate + "<br>")




var nou = 410
var cpu = 16
var na , gap
var lp = 350

document.write("K-Electric Bill" + "<br>")
document.write("Customer Name : ABC Customer" + "<br>")
document.write("Month : February" + "<br>")
document.write("Number Of Units : " + nou + "<br>")
document.write("Charges per unit : " + cpu + "<br>")

na = nou * cpu
gap = na + lp

document. write("Net Amount Payable (within Due Date ): " + na + "<br>")
document.write("Late Payment Surcharge : " + lp + "<br>")
document.write("Gross Amount Payable (after Due Date) : " + gap + "<br>")

