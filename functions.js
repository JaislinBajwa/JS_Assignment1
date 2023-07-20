// //Arrow function
// let multiply = (a, b) => a * b;
// console.log(multiply(2, 3)); 

// //anonymous function
// const numbers = [1, 2, 3];
// numbers.forEach(function(number) {
//   console.log(number);
// });
// //Immediately Invoked Function Expressions (IIFE)
// (function() {
//     const secret = "I am hidden";
//     console.log(secret);
//   })();

  
// // Named function expression
// let sum = function addNumbers(a, b) {
//     return a + b;
//   };
  
//   console.log(sum(2, 3)); 

//   //Recursive function
//   function factorial(n) {
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   console.log('Factorial of number is ',factorial(5)); 

//   //higher order function
//   function applyOperation(a, b, operation) {
//     return operation(a, b);
//   }
  
//   function add(a, b) {
//     return a + b;
//   }
  
//   function subtract(a, b) {
//     return a - b;
//   }
  
//   console.log(applyOperation(5, 3, add)); 
//   console.log(applyOperation(5, 3, subtract)); 


  //Generator function-Generator functions allow you to define an iterator using the function* syntax. 
  //The yield keyword is used to produce values one by one, allowing you to pause and resume the function's execution.
  
function* generatorFunc() {

    console.log("1. code before the first yield");
    yield 100;
    
   console.log("2. code before the second yield");
    yield 200;
}

const generator = generatorFunc();

console.log(generator.next());

//First class function-In JavaScript, functions are first-class citizens, which means they can be treated as variables, 
//passed as arguments to other functions, returned from functions, and assigned to variables.
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Function that takes another function as an argument
function performOperation(operation, a, b) {
  return operation(a, b);
}

const resultAdd = performOperation(add, 5, 3);
const resultSubtract = performOperation(subtract, 10, 4);

console.log(resultAdd); 
console.log(resultSubtract); 


//  Promise in JavaScript 
// Is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 
//It is a way to handle asynchronous operations in a more organized and manageable manner, avoiding callback hell and providing a cleaner syntax for handling asynchronous tasks.

// The Promise object has three states:

// Pending: The initial state when the Promise is created, and the asynchronous operation is ongoing.
// Fulfilled/Resolved: The state when the asynchronous operation successfully completes, and the Promise has a result/value.
// Rejected: The state when the asynchronous operation encounters an error or fails, and the Promise has a reason for the failure.
// A Promise can be in either the fulfilled or rejected state, but once it is in either of these states, it is considered "settled," and its state cannot be changed.
  

// Arrow functions{()=>} are a clear and concise method of writing normal/regular Javascript functions in a more accurate and shorter way.
//  Arrow functions were introduced in the ES6 version. 
// They make our code more structured and readable.
// Arrow functions are anonymous functions i.e. they are functions without a name and are not bound by an identifier.
//  Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.