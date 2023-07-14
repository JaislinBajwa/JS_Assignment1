//Arithmetic Operators
 let a = 10;
 let b = 3;

let sum = a + b;
let difference = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);


// Assignment Operator
a+=b
console.log(a)
a-=b
console.log(a)
a*=b
console.log(a)
a/=b
console.log(a)
a%=b
console.log(a)

//Comparison operator

let greaterThan = a > b;
let lessThan = a < b;
let greaterThanOrEqual = a >= b;
let lessThanOrEqual = a <= b;
let equal = a === b;
let notEqual = a !== b;

console.log("Greater than:", greaterThan);
console.log("Less than:", lessThan);
console.log("Greater than or equal to:", greaterThanOrEqual);
console.log("Less than or equal to:", lessThanOrEqual);
console.log("Equal:", equal);
console.log("Not equal:", notEqual);


//Ternary Operator
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

let result = (a > b) ? "a is greater than b" : "a is not greater than b";

console.log(result);

//Logical Operator
let logicalAnd = (a > 5) && (b < 2);
let logicalOr = (a > 5) || (b < 2);
let logicalNot = !(a > 5);

console.log("Logical AND:", logicalAnd);
console.log("Logical OR:", logicalOr);
console.log("Logical NOT:", logicalNot);
