////HW #4

//Global Scope

var a = 1;
let b = 2;
const c = 3;

function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);  //prints 4,5,6
}

test();

console.log('Global Scope: ', a, b, c);   //prints 1,2,3

//block level scope is anything wrapped in curly braces

if (true) {
    //Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('If Scope ', a, b, c)  //a is 4, but b and c is 2 and 3
    //var sucks in other words--changes value of the global a
}

for (let a = 0; a < 10; a++) {
    console.log(`Loop ${a}`);
}

console.log('Global Scope: ', a, b, c); 

//let and const have a block-level scope