// var payer = prompt("Input the your names:");
// function lunchPayer(payer) {
//     var payerArray = payer.split(" ");
//     var randomNumber = Math.random();
//     randomNumber = randomNumber * payerArray.length;
//     randomNumber = Math.round(randomNumber);
//     var payerName = payerArray[randomNumber];

//     return payerName + " is going to buy us Lunch today!";
// }

// var payerName = lunchPayer(payer);
// alert(payerName);

// var randomNumber = Math.random();
// randomNumber = randomNumber * 6;
// randomNumber = Math.round(randomNumber) + 1;
// console.log(randomNumber);

// var players = "peter, paul maker, prince, chinasa";
// var nameArray = players.split(" ");

// var output = [];
// var count = 1;
// function fizzBuzz() {        
//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push("fizzbuzz");
//     } else if (count % 3 === 0) {
//         output.push("fizz");
//     } else if (count % 5 === 0) {
//         output.push("buzz");
//     } else {
//         output.push(count);
//     }
  
//     count++;
//     console.log(output);
// }


var message = "Welcome"
var yourName = prompt("what is your name?");
var userFirstChar = yourName.slice(0, 1);
var userFirstCharUpper = userFirstChar.toUpperCase();
var restOfUserName = yourName.slice(1, yourName.length);
var restOfMyNameToDisplay = restOfUserName.toLowerCase();
var yourNameToDisplay = userFirstCharUpper + restOfMyNameToDisplay;
var myName = "Xponential"
var myNameFirstChar = myName.slice(0, 1);
var myNameFirstCharUpper = myNameFirstChar.toUpperCase();
var restOfMyName = myName.slice(1, 10);
var myNameToDisplay = myNameFirstCharUpper + restOfMyName;
var welcomeMessage = "Hello!! " + yourNameToDisplay.slice(0, 6) + " " + "My Name is " + myNameToDisplay + ", " + "and you're welcome to my site. " + "Enjoy!!!";
alert(welcomeMessage);

