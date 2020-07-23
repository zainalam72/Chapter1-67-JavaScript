// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

// var a , b
// function raised(a , b) {
//     var c = Math.pow(a , b);
//     document.write(c)
// }
// raised(5 , 3);

// 2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// Leap years ..., 2012, 2016, 2020, …

// function leapYear(year) {
//     let answer;
//     if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
//         answer = "Yes! It is Leap Year";
//     } else {
//         answer = "No.! It is not the Leap Year";
//     }
//     document.write(answer);
// }

// leapYear(2016);

// 3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions

// function triangle(S , a , b , c) {
//     var S , a , b , c
//     var S =  ( a + b + c ) / 2
//     document.write("Value Of S : " + S + "<br>")
// }
// function area(S , a , b , c) {
//     var S , a , b , c
//     var area = S*(S - a)*(S - b)*(S - c);
//     document.write("Area : " + area)
// }
// triangle(4 , 2 , 5 , 9);
// area(4 , 2 , 5 , 9);

// // 4. Write a function that receives marks received by a student in 3
// // subjects and returns the average and percentage of these
// // marks. there should be 3 functions one is the mainFunction
// // and other are for average and percentage. Call those functions
// // from mainFunction and display result in mainFunction.

// function mainFunction() {
//   var a = prompt("Enter The 1st Subject : ");
//   var b = prompt("Enter The 2nd Subject : ");
//   var c = prompt("Enter The 3rd Subject : ");
//   document.write("First Subject Marks : " + a + "<br>");
//   document.write("Second Subjects Marks : " + b + "<br>");
//   document.write("Third Subject Marks : " + c + "<br>");
//   var d = (a + b + c) / 3;
//   var e = (a + b + c)*100 / 300 ;
// average(d);
// percentage(e);}
// function average(d) {
//     document.write("Average : " + d + "<br>");}
// function percentage(e) {
//       document.write("Percentage : " + e + "<br>");
//     }
// mainFunction();




// 5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.


// var sentence = "function sentence"
// function indexOf() {
//     var n = sentence.indexOf("u");
//     document.write(n)
// }
// indexOf();




// 6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.


// var sentence = "Write a function to delete all vowels from a sentence"
// function del() {
//     var jn = sentence.replace(/[aeiou]/gi, '');
//     document.write(jn)
// }
// del();



// // 7. Write a function with switch statement to count the number of
// // occurrences of any two vowels in succession in a line of text.
// // For example, in the sentence

function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var count = 0;
    let haveSeenVowel = false;
  
    for (const letter of str.toLowerCase()) {
      switch (letter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          {
            if (haveSeenVowel) {
              count++;
              haveSeenVowel = false;
            } else {
              haveSeenVowel = true;
            }
            break;
          }
        default:
          haveSeenVowel = false
      }
    }
  
    return count
  }
  
  console.log(findOccurrences());
// Such occurrences are ea, ea, ui.



// 8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.

// var kl = prompt("Enter The Km : ")
// function meter() {
//     meters = kl / 1000
//     document.write("Value in Meters : " + meters + "<br>")
// }
// function feet() {
//     feets = kl * 3280.8
//     document.write("Value in Feet : " + feets + "<br>")
// }
// function inches() {
//     inch = kl * 39370.
//     document.write("Value in Inches : " + inch + "<br>")
// }
// function centimeters() {
//     cm = kl / 0.000010000
//     document.write("Value in Centimeters : " + cm + "<br>")
// }

// meter();
// feet();
// inches();
// centimeters();




// 9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// I Can't do this question



// // 10. A cashier has currency notes of denominations 10, 50 and
// // 100. If the amount to be withdrawn is input through the
// // keyboard in hundreds, find the total number of currency notes
// // of each denomination the cashier will have to give to the
// //// withdrawer


function currencyDenomination() {
    var cash = prompt("Enter The Number : ") //  prompt("Enter cash (in hundreds): ");          // You  can use prompt like this
    var hundred = parseInt(cash / 100);
    var fifty = parseInt((cash % 100) / 50);
    var ten = parseInt(((cash % 100) % 50) / 10);
    document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

}
currencyDenomination();















