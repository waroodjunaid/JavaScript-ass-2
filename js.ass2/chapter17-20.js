//1.
let arr = [[], [], []];

//2.
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]  ]
  console.log(matrix)

  for(let i = 1; i <= 10; i++)
    console.log(i)  
  

  let fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for (let i = 0; i < fruits.length; i++) 
    console.log(fruits[i]);



console.log("Counting:")
for (let i = 1; i <= 15; i++) 
    console.log(i)

console.log("Reverse Counting:")
for (let i = 10; i >= 1; i--) 
    console.log(i)

console.log("Even:")
for (let i = 0; i <= 20; i += 2) 
    console.log(i);

console.log("Odd:")
for (let i = 1; i < 20; i += 2) 
    console.log(i)

console.log("Series:")
for (let i = 2; i <= 20; i += 2) 
    console.log(i + "k")





let A = ["cake", "apple pie", "cookie", "chips", "patties"]

let userSearch = prompt("Enter the item you want to search for:")
let index = A.indexOf(userSearch)

if (index !== -1) { alert(userSearch + " is found at index " + index + " in our bakery")}
     else {alert(userSearch + " We are sorry " + userSearch + " is not available in our bakery")}


//8.
let B = [24, 53, 78, 91, 12];
let lNmax = Math.max(...B);
console.log("The largest number in the array is: " + lNmax)


//9.
let C = [24, 53, 78, 91, 12];
let sNmin = Math.min(...C)
console.log("The smallest number in the array is: " + sNmin)


//10.
for(let i = 1; i <= 100; i++) {
if(i % 5 === 0) 
{console.log(i)}}
