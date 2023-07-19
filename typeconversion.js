// String to Number
let strNumber = "42";
let convertedNumber = Number(strNumber);
console.log("String to Number:", convertedNumber); // Output: 42

// Number to String
let num = 42;
let convertedString = String(num);
console.log("Number to String:", convertedString); // Output: "42"

// Boolean to String
let bool = true;
let convertedBoolToString = String(bool);
console.log("Boolean to String:", convertedBoolToString); // Output: "true"

// String to Boolean
let strBool = "false";
let convertedStrToBool = Boolean(strBool);
console.log("String to Boolean:", convertedStrToBool); // Output: true (since the string is not empty)

// Number to Boolean
let numBool = 0;
let convertedNumToBool = Boolean(numBool);
console.log("Number to Boolean:", convertedNumToBool); // Output: false (0 is considered as false)


// Date to Number (Timestamp)
let date = new Date();
let convertedDateToNumber = date.getTime();
console.log("Date to Number (Timestamp):", convertedDateToNumber);

// Number to Date
let timestamp = 1626712435000;
let convertedNumberToDate = new Date(timestamp);
console.log("Number to Date:", convertedNumberToDate);
