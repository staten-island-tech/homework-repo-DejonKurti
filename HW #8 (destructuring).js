//HW 8    Array/Object Destructuring 

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

//const a = alphabet[0]
//const b = alphabet[1]

//destructuring array on left side to only provide elements a and b
const [a, b, c] = alphabet
const [a,, c] = alphabet //this says to skip the second element
const [a,, c,, ...rest] = alphabet

const newArray = [...alphabet, ...numbers]
//OR
const newArray = alphabet.concat(numbers)

console.log(a);
console.log(b);
console.log(c);
console.log(rest); //gives D, E, F (anything left)

console.log(newArray); //gives all the alphabet elements followed by the #s in a single array
//concat does the same thing, but its syntax is much more useful for combining two diff. objects together

/////Function Usefulness

function sumAndMultiply(a, b) {
    return [a+b, a*b]
}

const array = sumAndMultiply(2, 3)

console.log(array)

//destructure to our advantage now
const [sum, multiply] = sumAndMultiply(2, 3) //destructuring into two diff variables: 1 sum, and 1 multiply

console.log(sum)  //sum is 5
console.log(multiply)  //multiply is 6

//can also set default values using destructuring

const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3)
//By default, division will equal that string, but if we set something to it in the function, it'll be overruled

console.log(division) = 'No division'

function sumAndMultiply(a, b) {
    return [a + b, a * b, a/b]
}
const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3)

console.log(division) = 0.666666 //wow!



//Object destructuring

const personOne = {
    name: 'Kyle',
    age: 24,
    favoriteFood: 'Watermelon', //added in
    address: {
        city: 'Somewhere', 
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}

//use curly brackets to destructure object
const { name, age } = personTwo //getting personTwo's name and age

console.log(name) //Sally
console.log(age) //32

const { name: firstName, age, favoriteFood = 'Rice', ...rest} = personTwo 

console.log(firstName) //Still get Sally-you can rename the variable inside the brackets
console.log(age)
console.log(favoriteFood) //Rice until favoriteFood variable added into the object
console.log(rest) //gets the rest of the object

//Destructuring Nested Objects

const { name: firstName, address: { city } } = personTwo 

//address is the key, use another set of curly braces to destructure the new object

console.log(city) //gives us 'Somewhere else'
//all we did was nest our object deconstruction inside another

const personThree = { ...personOne, ...personTwo }
//combining, saying to put all of personOne inside of personThree, and to replace and add with personTwo 

console.log(personThree) 


//Ability to use it inside of functions inside of the argument

function printUser(user) {
    console.log(`Name is: ${user.name}.  Age is ${user.age}`)
}


//THIS IS MASSIVE!!!
function printUser({ name, age, favoriteFood = 'Watermelon' }) {
    console.log(`Name is: ${name}.  Age is ${age}.  Food is ${favoriteFood}`)
}


printUser(personOne)