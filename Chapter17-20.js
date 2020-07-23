
// for (let i = 1; i <= 10; i++) {
//     document.write(i + "<br>")




// fruits = ["apple" , "banana" , "mango" , "orange" , "strawberry"];
// document.write(fruits[0] + "<br>");
// document.write(fruits[1] + "<br>");
// document.write(fruits[2] + "<br>");
// document.write(fruits[3] + "<br>");
// document.write(fruits[4] + "<br>");

// document.write("Element at index 0 is " + fruits[0] + "<br>");
// document.write("Element at index 1 is " + fruits[1] + "<br>");
// document.write("Element at index 2 is " + fruits[2] + "<br>");
// document.write("Element at index 3 is " + fruits[3] + "<br>");
// document.write("Element at index 4 is " + fruits[4] + "<br>");

// document.write("Counting : " + "<br>")
// for (let i = 0; i < 16; i++) {
//     document.write(i + ",")
// }

// document.write("<br>" + "Reverse Counting : " + "<br>")
// for (let j = 10; j > 0; j--) {
//     document.write(j + ",")
// }

// document.write("<br>" + "Even : " + "<br>")
// for (let k = 2; k <= 20; k += 2) {
//     document.write(k + ",");
// }

// document.write("<br>" + "Odd : " + "<br>")
// var length = +1
// for (let l = 1; l < 20; l+=2) {
//     document.write(l + ",")
// }

// document.write("<br>" + "Series : " + "<br>")
// for (let m = 2; m < 20; m+=2) {
//     document.write(m + "k, ")
// }


// var result
// var table = prompt("Enter a number to show its multiplication table : ");
// var length = prompt("Enter Length Of Multiplication Table : ");

// document.write("Multiplication Table of : " + table + "<br>");
// document.write("Length is : " + length + "<br>");

// for (i = 1; i <= length; i++) {
//     document.write(table + " x " + i + " = " + table*i + "<br>")
//}












// 7. You have an array A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.After searching,
// prompt the user whether the given item is found in the list or not.Example:

// var a = ["cake", "apple pie", "cookie", "chips", "patties"];
// var user_input = prompt("Welcome To ABC Bakery. What do You Want to order SIR/MA'AM? ");

// for (var i = 0; i <= 4; i++) {
//     if (user_input === a[i]) {
//         for (let j = 0; j <= 4; j++) {
//             if (user_input === a[j]) {
//                 alert(user_input + " is available at index number " + a[j] + " in our bakery.");
//             }
//         }
//     } else {
//         alert("We are  Sorry.! " + j + "is not available in our Bakery");
//         break
//     }
// }


// . Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]. 


var a = [24, 53, 78, 91, 12];
document.write("The Largest Number is " + Math.min(...a) + "<br>");
var a = [24, 53, 78, 91, 12];
document.write("The Largest Number is " + Math.max(...a));



//  for (let i = 5; i <= 100; i+=5) {
    // document.write(i + "<br>")
//  }