// Math operators
var CurrentYear = 2025;
var AgeCalculation = CurrentYear - 2005;
console.log(AgeCalculation); // 20
// console.log(10 + 5); // 2030
// console.log(10 *5); // 2025
// console.log(10 ** 5); // 2020
var x = 10;
// x++ ; // whatever the valyues plus 1 in that value
// console.log(x); // 11
// x-- ; // whatever the valyues minus 1 in that value
// console.log(x); // 10
// // for multiply
// x *= 2; // whatever the valyues multiply by 2 in that value
// console.log(x); // 20
// x +=5
// console.log(x); // 25
// x -= 10;
// console.log(x); // 15
// x /=3;
// console.log(x); // 3.3333333333333335
// for getting that we have to write the code outside the print statement
// for getting it in the print statement we have to write it that way
// console.log(x++); //  remains the same
// console.log(++x); //  plus 1
// COMPARISON OPERATORS
var a = 5;
var b = 10;
var c = a < b;
console.log(c); // true
var d = CurrentYear - 2004 > CurrentYear - 1047;
console.log(d); // true
var e = x = 25 - 10 - 5;
console.log(e, x); // 10
var MyName = "John";
var YourName = "Doe";
// first method
console.log("hi my name is " + MyName + " and your name is " + YourName);
console.log("hi my name is " + MyName + " " + YourName);
// second method
console.log("hi my name is ".concat(MyName, " and your name is ").concat(YourName));
// if want to print
// hi my name is John and your name is Doe
