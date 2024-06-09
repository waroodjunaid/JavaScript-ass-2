//1.
let firstName = prompt("Please enter your first name")
let lastName = prompt("Please enter your last name")

let fullName = firstName + ' ' + lastName
alert("Hello, " + fullName + "!");

//2.
let favPhone = prompt("Please enter your favorite mobile phone model")
let userInputLength = favPhone.length

alert("The length of your input is: " + userInputLength);


//3.
let word1 = "Pakistani"
let ind = word1.indexOf("n")

alert("The index of 'n' in 'Pakistani' is: " + ind);

//4.
let string = "Hello World";
let lastIndex = string.lastIndexOf("l")

console.log("The last index of 'l' in 'Hello World' is: " + lastIndex);


//5.
let string2 = "Pakistani"
let charAtThirdIndex = string2.charAt(3)

console.log("The character at the 3rd index in 'Pakistani' is: " + charAtThirdIndex);



//6.
let firstNam = prompt("Please enter your first name:");
let lastNam = prompt("Please enter your last name:")
let fullNam = firstNam.concat(" ", lastNam)

alert("Hello, " + fullNam + "!");


//7.
let word2 = "Hyderabad"
let newWord = word2.replace("Hyder", "Islam")
console.log(newWord)


//8.
var message = "Ali and Sami are best friends. They play cricket and football together."
var newMessage = message.replace(/and/g, "&")
console.log(newMessage)


//8.
var str = "472"
var num = Number(str)
console.log("Value: " + str)
console.log("Type: " + typeof str  )
console.log("Value: " + num )
console.log("Type: " + typeof num)



//9.
let userInput = prompt("Please enter some text:")
let upperCaseInput = userInput.toUpperCase()
console.log("Input in uppercase: " + upperCaseInput) // displays on console box
document.write("Input in uppercase: " + upperCaseInput) //displays on web page



function toTitleCase(str) {return str.replace(/\w\S*/g, function(txt)
{return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();})}

let user_input = prompt("Enter your text: ")
let titleCaseInput = toTitleCase(user_input)
alert("Title Case: " + titleCaseInput)



//11.
let numb = 35.36;
let numbStr = numb.toString();

let result = numbStr.replace('.', '');
console.log("Result: " + result);




var username = prompt("Enter your username: ")

if (!validUsername(username)) 
    {alert("Please enter a valid username. Avoid special symbols [@ . , !]")}
     else { alert("Username is valid.")}



     let A = ["cake", "apple pie", "cookie", "chips", "patties"];

     function searchItem(item) 
     {let lowerCaseArray = A.map(i => i.toLowerCase())
         if (lowerCaseArray.includes(item.toLowerCase())) 
            { console.log(`Yes, the item '${item}' is found in the list.`)}
             else {console.log(`No, the item '${item}' is not found in the list.`)}}
     

     searchItem("cookie")
     searchItem("Cookie")
searchItem("COOKIe") //and so onn
     



function checkPassword() 
{let password = prompt("Enter your password:")
    if (password.length < 6) 
     {alert("Password must be at least 6 characters long.")
    return}
    if (!isNaN(password[0])) 
    {alert("Password should not start with a number.")
    return}

    let hasAlphabet = false
    let hasNumber = false
    for (let i = 0; i < password.length; i++) 
        {if (isNaN(password[i])) {hasAlphabet = true}
        else {hasNumber = true}}

    if (!hasAlphabet || !hasNumber) 
        {alert("Password should contain both alphabets and numbers.")
        return}
alert("Password is valid.")}
checkPassword()



let university = "University of Karachi"
let array = university.split(" ");

for (var i = 0; i < array.length; i++) 
    console.log(array[i])



var str = "The quick brown fox jumps over the lazy dog"
var count = (str.toLowerCase().match(/the/g) || []).length
console.log(`The word "the" occurs ${count} times in the string.`)