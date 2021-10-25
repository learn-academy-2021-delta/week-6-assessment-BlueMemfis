// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")
const { Console } = require("console")
const { it } = require("jest-circus")
const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

var people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
describe("studentInfo", ()=>{
  it("returns an array with a sentence about each person with their name capitalized", ()=>{
    expect(studentInfo(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
  
})

//b) Create the function that makes the test pass.

function studentInfo(array){
  return array.map(value => {
    let firstString = (value.name).toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ') 
    return firstString + " " + `is ${value.occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

describe("filterMixed", ()=>{
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", ()=>{
    expect(filterMixed([23, "Heyyyy!", 45, -10, 0, "Yo", false])).toEqual([ 2, 0, -1, 0 ])
  })
  it("returns an array of only the REMAINDERS of the numbers when divided by 3", ()=>{
    expect(filterMixed([5, "Hola", 43, -34, "greetings", true])).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

/*
Algorithm-->filter the array and determine the reminder when the elements are divided by 3
        Input-->an array having different data types
        Output-->an array of remainders when each element is divided by 3
              create a function
              declare an empty array
              filter the array using typeof operator and store it
              loop over the new array and use module operator to find reminder
              push the reminder to the empty array
*/
function filterMixed(arr){
  let divisibleByThree=[]
   let newarr= arr.filter(value=>typeof(value)==="number")
   for(let i=0;i<newarr.length;i++){
    let num=newarr[i]%3
      divisibleByThree.push(num)
  }
  return divisibleByThree
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

var cubeAndSum1 = [2, 3, 4] 
// Expected output: 99
var cubeAndSum2 = [0, 5, 10]
//Expected output: 1125
describe("sumOfEach", ()=>{
  it("returns the sum of each element after cubed", ()=>{
    expect(sumOfEach([2, 3, 4])).toEqual(99)
  })
  it("returns the sum of each element after cubed", ()=>{
    expect(sumOfEach([0, 5, 10])).toEqual(1125)
  })
})
// b) Create the function that makes the test pass.
/*
  Algorithm-->sum of array
      Input-->
      Output-->sum of array after each element cubed itself
          create a function
          loop the array using map to cube each element of the array
          use reduce method to get the sum of the array
*/
function sumOfEach(array){
  let newarr=array.map(value=>{value**3
   return newarr.reduce((accumulator,current)=> accumulator + current,0)
})
}
