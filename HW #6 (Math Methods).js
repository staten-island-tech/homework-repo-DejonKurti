
const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

// Math Object
val = Math.PI;  //method is a function inside an object
val = Math.E;
val = Math.round(2.8);   //rounds to 3
val = Math.ceil(2.4);  //gives us 3
val = Math.floor(2.8)  //gives us 2
val = Math.sqrt(64);  //8
val = Math.abs(-5); //5
val = Math.pow(8, 2); //Squares it=64
val = Math.min(2,33,4,1,55,6,3,-2);  //returns -2
val = Math.max(2,33,4,69);
val = Math.random();  //gives us a random decimal

val = Math.floor(Math.random() * 20 + 1);  //Wrap in math.floor and you get a whole # between 1-20

console.log(val);