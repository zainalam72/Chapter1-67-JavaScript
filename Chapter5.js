var a = prompt("Enter Your Number : ");
var b = prompt("Enter Second Number : ");
res = c = a + b 
alert(c)



document.write("Sum of 3 and 5 is 8" + "<br>")
document.write("Subtraction of 3 from 5 is 2" + "<br>")
document.write("Multiplication of 3 and 5 is 15" + "<br>")
document.write("Division of 3 from 5 is 1.6666" + "<br>")

document.write("Value after decrement is undefined" + "<br>")

document.write("Initial Value is: 5" + "<br>");
document.write("Value after increment is: 6" + "<br>")
document.write("Value after addition is: 13" + "<br>")
document.write("Value  after decrement is: 12" + "<br>")
document.write("The remainder is: 0" + "<br>")

var movieticket = 600
a = prompt("How Many ticket do you want?")
document.write("The price of tickets is " + movieticket*a + "<br>")
alert(movieticket*a)


document.write("Table of 4" + "<br>")
for (let i = 1; i <= 10; i++) {
    document.write("4 " + "x " + i + " = " + 4*i + "<br>")  
}


var cel = 25
fah = cel*9/5 + 32
document.write("25'C is " + fah + "<br>")

var f = 70
c  = (f-32) * 5/9
document.write("70'F is " + c + "<br>")


var orderedquantityofitem1 = 3
var priceitem1 = 300

var orderedquantityofitem2 = 6
var priceitem2 = 400

var shippingcharges = 100
var Totalcost
Totalcost = priceitem1*orderedquantityofitem1 + priceitem2*orderedquantityofitem2 + shippingcharges
document.write("Total cost of your order is " +  Totalcost + "<br>")


document.write("Marks Sheet" + "<br>")
var marksobt = 804
var Totalmarks = 980
var percentage
percentage = (marksobt/Totalmarks*100)
document.write(percentage + "%" + "<br>")

document.write("Currency in PKR" + "<br>")
var USDollar = 104.80
var SR = 28
total = USDollar*10 + SR*25 
document.write("Total currency in PKR:" + total + "<br>")

var num = 5
total = num + 5*10 / 2
document.write(total + "<br>")

document.write("Age Calculator" + "<br>")
var  currentyear = 2020
var  birthyear = 1996
age  =  currentyear - birthyear
document.write(age + "<br>")


document.write("The Geometrizer" + "<br>")
var rad = 20
var circumference
circumference = 2 * 3.142 * rad
document.write("The Circumerence is " + circumference + "<br>")
var area = 3.142 * rad * rad
document.write("The Area is " + area + "<br>")

document.write("The Lifetime Supply Calculator" + "<br>")
fav_snack = "chocolate chip"
current_age = 23
max_age = 66
est_num_per_day = 12
cc = max_age - currentyear * est_num_per_day
document.write("You will need " + cc + " chocolate chip to last you until the ripe old age of 66" + "<br>")
