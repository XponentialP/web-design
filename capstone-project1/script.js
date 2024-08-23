// var message = "Welcome"
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

// var tweet = prompt("Type in your tweet here:");

// var tweetcount = ("you've typed " + tweet.length + " " + "letters, and you have " + (180-tweet.length) + " words remaining");
// alert(tweetcount);
