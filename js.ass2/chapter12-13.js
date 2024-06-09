function checkInput(input) {
    let ascii = input.charCodeAt(0);

    if (ascii >= 48 && ascii <= 57) {
        console.log(input + " is a number.");} else if (ascii >= 65 && ascii <= 90)
             { console.log(input + " is an uppercase letter.");  } 
        
        else if (ascii >= 97 && ascii <= 122)
         {console.log(input + " is a lowercase letter.")}
         
        else {console.log(input + " is neither a number nor an English letter.");}}

checkInput('A')
checkInput('z')
checkInput('5')
checkInput('#')
checkInput('456') // and so onn.... 




//2.
function compareIntegers(a, b) 
{if (a > b) 
    {console.log(a + " is larger than " + b)}
         else if (a < b) 

     {console.log(b + " is larger than " + a)} 
     else {console.log("Both integers are equal") }}
;

compareIntegers(10, 20)
compareIntegers(30, 20)
compareIntegers(15, 15); // and so onn...






let num = prompt("Enter a number");
if (num > 0)  
{alert("Positive number")}

 else if (num == 0) {alert("Zero")} 

 else {alert("Negative number")} ;




// 4.
let vow = prompt("Enter a vowel");

if (vow == 'a' || vow == 'e' || vow == 'i' || vow == 'o' || vow == 'u') {
   alert("True, it is a vowel")} 
   
   else {alert("False, it is not a vowel")} ;




//5.
var corrPass = "yourCorrectPassword"

var userPass = prompt("Please enter your password")
if (userPass == "") 
    { alert("Please enter your password");} 
else {
    
    if (userPass == corrPass) 
        { alert("Correct! The password you entered matches the original password");}
     else {alert("Incorrect password");}} ;


//6.
/* incorrect code
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";
*/


 //(corrrect code)

     var greeting
     var hour = 13
     if (hour < 18) 
    { greeting = "Good day"} 
     else {  greeting = "Good evening"} ;
     



// 7.
var time = prompt("Please enter time in 24 hours format (e.g., 1900 for 7pm)")
time = Number(time);

if (isNaN(time) || time < 0 || time > 2400) {alert("Invalid input. Please enter a number between 0 and 2400.")} 
    else {var hours = Math.floor(time / 100);
    var minutes = time % 100

    var period = "AM"
    if (hours >= 12)

     { period = "PM"
        if (hours > 12) 

      {hours -= 12 }} 
        else if (hours == 0) 
     { hours = 12 }
    alert("The time in 12-hour format is " + hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + period)} ;