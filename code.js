///////////////////////////////////////////////////////////// Exercise 1 ////////////////////////////////////////////////////////////////////////////////
// Use `.map()` to iterate over the following array:


// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums2 = nums.map((currentElement) => {
    return currentElement * 2
})

console.log("Exercise 1: " + nums2)
///////////////////////////////////////////////////////////// Exercise 2 ////////////////////////////////////////////////////////////////////////////////

// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [horriblePizzaToppings1, horriblePizzaToppings2] = pizzaToppings
console.log("Exercise 2:", horriblePizzaToppings1, "," ,  horriblePizzaToppings2)

///////////////////////////////////////////////////////////// Exercise 3 ////////////////////////////////////////////////////////////////////////////////

// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
  
const { make, model } = car

console.log("Exercise 3;" , make, model)
console.log("Exercise 3 Alt;" , car.make, car.model)

///////////////////////////////////////////////////////////// Exercise 4 ////////////////////////////////////////////////////////////////////////////////

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

/* const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies']; 
*/
// Your code here

const controversialPizzaToppings = [...pizzaToppings]

console.log("Exercise 4:" , controversialPizzaToppings)

///////////////////////////////////////////////////////////// Exercise 5 ////////////////////////////////////////////////////////////////////////////////

// Duplicate the following object and spread its values into a new variable `myCar`.

/*const car = {
    make: 'Audi',
    model: 'q5',
  };
*/

  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  
const cloneCar = {...car}

cloneCar.model = "q7"

console.log("Exercise 5;", "original", car, "clone", cloneCar )

///////////////////////////////////////////////////////////// Exercise 6 ////////////////////////////////////////////////////////////////////////////////

// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here

const userProfile = {}

let propertyName = "username"

userProfile[propertyName] = 'John_Doe'

console.log("Exercise 6:" , userProfile)

///////////////////////////////////////////////////////////// Exercise 8 ////////////////////////////////////////////////////////////////////////////////

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here

function sentance(noun = 'cat' , adjective = "white") {
 console.log (`Exercise 8: The ${noun} is ${adjective}`)
}

sentance()

///////////////////////////////////////////////////////////// Exercise 9 ////////////////////////////////////////////////////////////////////////////////

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

console.log("Exercise 9:", pizza === 'tasty' ? 'yum' : 'yuck')
// Your code here