// 1.
let studentNamesLiteral = [];


// 2. 
let nameObject = new Array();


// 3. 
let stringArray = ["Hello", "World"];


// 4. 
let numberArray = [1, 2, 3, 4, 5];


// 5. 
let booleanArray = [true, false, true, false];



// 6. 
let mixedArray = ["Hello", 1, true];



// 7. 
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
if (qualifications.includes("SSC")) {
    console.log ("Qualifications: SSC")
}


console.log ("                HSC")

console.log ("                BCS")

console.log ("                BS")

console.log ("                BCOM")

console.log ("                MS")

console.log ("                M. Phil.")

console.log("                PhD.")




let students = ["Micheal", "John", "Tony"];

let scores = [320, 230, 480]; 

let totalMarks = 500;

for(let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    console.log(`The score of ${students[i]} is: ${scores[i]}, Percentage: ${percentage}%`);
}





let colors = ["Red", "Green", "Blue"]
alert("Colors array: " + colors);

// a. 
let newColor = prompt("Enter a color you want to add to the beginning:")
colors.unshift(newColor)
alert("Updated colors array: " + colors)

// b. 
newColor = prompt("Enter a color you want to add to the end:")
colors.push(newColor)
alert("Updated colors array: " + colors)

// c. 
colors.unshift("Yellow", "Purple")
alert("Updated colors array: " + colors)

// d. 
colors.shift()
alert("Updated colors array: " + colors)

// e. 
colors.pop();
alert("Updated colors array: " + colors)

// f. 
let index = prompt("Enter the index at which you want to add a color:")
newColor = prompt("Enter the color you want to add:") ;



colors.splice(index, 0, newColor);
alert("Updated colors array: " + colors);

// g. 
index = prompt("Enter the index from which you want to delete colors:")
let deleteArray = prompt("Enter how many colors you want to delete:");


colors.splice(index, deleteArray)
alert("Updated colors array: " + colors) ;




// 10.
let studentScores = [320, 230, 480, 120,]
console.log(studentScores);
studentScores.sort(function(a, b) {
  return a - b
})
console.log("Ordered score of students: " + studentScores);



// 11.
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
let selectedCities = cities.slice(0, 3)
console.log(selectedCities);



//12.
var array1 = ["This ", " is ", " my ", " cat"];
var arr = array1.join()
console.log(arr)

var string = array1.join('');
console.log(string)


//13.
let arr2 = [];


arr2.push("Keyboard")
arr2.push("Mouse")
arr2.push("Printer")
arr2.push("Monitor");

console.log("Array after reserving values: ", arr2);


let value1 = arr2.shift()
console.log("Out: ", value1);

let value2 = arr2.shift()
console.log("Out: ", value2);

let value3 = arr2.shift()
console.log("Out: ", value3);

let value4 = arr2.shift()
console.log("Out: ", value4);

console.log("Array after removing values: ", arr2)


//15.
let phoneManufacturers = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony', 'Haier'];
document.write('<select>');

for(let i = 0; i < phoneManufacturers.length; i++) 
    {document.write('<option value="' + phoneManufacturers[i] + '">' +
  phoneManufacturers[i] + '</option>')}  

document.write('</select>');