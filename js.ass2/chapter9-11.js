
//1.
let city = prompt("Please enter your city name:");

if (city === "karachi") 
{alert("Welcome to city of lights")}

else {alert("Welcome to " + city)}


//2.
let gender = prompt("Please enter your gender:");

if (gender === "male") 
    {alert("Good Morning Sir")}

else if (gender === "female") 
    {alert("Good Morning Ma’am")}

else { alert("Good Morning")}






//4.
let fuel = prompt("Please enter the remaining fuel in your car (in litres):");

fuel = Number(fuel);

//Condition as per mentioned :
if (fuel < 0.25) 
    {alert("Please refill the fuel in your car")}
     else { alert("You have enough fuel")}




var a =  4
if (++a === 5)
    {alert("given condition for variable a is true");}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");}






// Function to calculate percentage and grade
function calculateGrade() 
    {
    let mark1 = parseInt(prompt("Enter marks for Mathematics: "))
    let mark2 = parseInt(prompt("Enter marks for Physics: "))
    let mark3 = parseInt(prompt("Enter marks for Chemistry: "))
    

    let totalMarks = prompt('Enter your total marks ')
    

    let sum = mark1 + mark2 + mark3;
    let percentage = (sum / totalMarks) * 100;
    

    let grade, remarks;
     if (percentage >= 80) 
        {grade = 'A-one'
        remarks = 'Excellent'}
     else if (percentage >= 70)
         {grade = 'A'
        remarks = 'Good'}

        else if (percentage >= 60) { grade = 'C'
        remarks = 'Need Improvement'} 

    else 
    { grade = 'F'
     remarks = 'You failed, Sorry' } ;

    alert("Total Marks: " + totalMarks + "\nMarks Obtained: " + sum + "\nPercentage: " + percentage.toFixed(2) + 
    "%\nGrade: " + grade + "\nRemarks: " + remarks)}

calculateGrade();






function guessGame() {
    
    var secretNumber = 8; 
    var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10): "))
    
    
    if (userGuess === secretNumber) { alert("Bingo! Correct answer")
    } else if (userGuess + 1 === secretNumber)
{ alert("Close enough to the correct answer") } 
else { alert("Sorry, your guess is not close to the secret number. The secret number was " + secretNumber)}}

guessGame();



const temperatureInput = parseFloat(prompt("Enter the temperature:"));
function getWeatherMessage(temperature)
 {if (temperature > 40){alert( "It is too hot outside.")}
  else if (temperature > 30) {alert("The Weather today is Normal.")}
   else if (temperature > 20)
{alert("Today’s Weather is cool.")} 
   else if (temperature > 10) 
    {alert ("OMG! Today’s weather is so Cool.")} 
   else {alert("It's chilly out there.") }}



const weatherMessage = getWeatherMessage(temperatureInput);




let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operator = prompt("Enter the operator (+, -, *, /):");

let result 
if (operator === "+"){result = num1 + num2}
 else if (operator === "-") {result = num1 - num2} else if (operator === "*") 
{result = num1 * num2} 
 else if (operator === "/") 
{result = num1 / num2} 
  else {alert("Invalid operator entered.")}

if (result !== undefined) 
{alert('The result of ' + num1 + ' '+ operator +' ' + num2 + ' is ' + result  )}





