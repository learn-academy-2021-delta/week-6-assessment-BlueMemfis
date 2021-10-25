// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// describe('weird named people', ()=>{
//   //     test(var people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }, ()=>{
//   //         expect["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
//   //     })
//   // })

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
  // { name: "just be kind", occupation: "a life saver"}
]

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// needing a for loop...using map to take in an array and get one back params is 
// I remembered seperating names in the first weeks, I remember John asking How to capitalize both letters...
//make new var split w/ a space to notate two strings in array
//charAT first letter of first word then upperCase
//same with next word
//return vars w/ expected

function professions(people){
  return people.map((person) => {
    var fullName = person.name.split(" "); // fullName[0] = "ford", fullName[1] = "prefect";
    var firstName =  fullName[0].charAt(0).toUpperCase() + fullName[0].slice(1);
    var secondName =  fullName[1].charAt(0).toUpperCase() + fullName[1].slice(1);
    //var secondName =  fullName[2].charAt(0).toUpperCase() + fullName[2].slice(1);
    return firstName + " " + secondName + " is " + person.occupation;
  })
}

console.log(professions(people));


// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

//describe('mixedArray', ()=>{
  //     test(var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false], ()=>{
  //         expect[ 2, 0, -1, 0 ]
  //     })
  // })

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]


//filter will be used to take in an array and spit out a whole new one. params are elements
//we want to return an array of only numbers another loop .map
//return that w/ mod 3

function remainders(mixedArray) {
  return mixedArray.filter((elem) => {
    return typeof elem == 'number';
  }).map( (num) => {
    return num % 3;
  })
}


console.log(remainders(hodgepodge2));

// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

//describe('addingCubed', ()=>{
  //     test(var cubeAndSum1 = [2, 3, 4] ()=>{
  //         expect(99)
  //     })
  // })

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4]
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
// Expected output: 1125



// b) Create the function that makes the test pass.

// we are going to us reduce which returns a single value and executes a reducer function for each value of an array
//it needs TWO arguments total will give us the sum and we NEED the initialValue...I keep wondering why is was not working...I needed to use "0"!!!!!!!! The last two were had to pseudocode just because they were legit math problems in my head. 


//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
function cubed(numbers){
  return numbers.reduce((total, elem) => {
    return total + (elem*elem*elem);
  }, 0)
}

console.log(cubed(cubeAndSum1));