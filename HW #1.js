// Type Conversions

let x = 2 + '2';
console.log(x) = "22"

// Converting number to a string is easy and do-able; concates them after number is converted

/* 
let x = 2 + 2 + '2';
console.log(x) = "42" here 
*/

let x = 2 + true;
console.log(x) = "3"

//Converts boolean into # b/c that's the easy path: true is 1, false is 0
//Converting number into boolean however... lol

let x = 2 + true + '2';
console.log(x) = "32"

//Concates number, boolean, and string

let x = true + '2';
console.log(x) = "true2"

//Easier to convert boolean into string, so boom

let x = Number('2');
//Number() converts string to a number

let x = Number('Hello');
//Not a number, get an error titled "NaN"

let x = Boolean(1);
//Gives true here, and true for every non-zero value (0 is false)

let x = Boolean('hello');
//Empty string gives false for boolean, all other strings true (unless it is undefined or null)

let x = '';
if( x !== undefined) || (x !== null) || (x !== 0)){

}

if ([]){

}

//If it is an object, like array, it will always convert to true--use arraylength instead or something
