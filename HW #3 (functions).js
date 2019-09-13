/////Functions

//Function Declarations

function greet() {
    //console.log('Hello.');  //scope
    return 'Hello';
}

//now call it
console.log(greet());

//parameters

function greet(firstName = 'John', lastName = 'Doe') {
    //the definitions in parameter serve as a default, but if I put anything else in to define the var, it overrides
    return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet('John', 'Doe'));  //John and Doe define the variables


// FUNCTION EXPRESSIONS

const square = function(x = 3){
    return x*x;
};

console.log(square(8));  //8 would override 3


// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs (function you declare and run at same time)

(function(){
    console.log('IIFE Ran...');
})();

(function(name) {
    console.log('Hello' `${name}`);
})('Brad');


// PROPERTY METHODS (when a function put inside of an object, it's called a method)

const todo = {
    add: function(){
        console.log('Add todo..');
    },
    edit: function(id){
        console.log(`Edit todo ${id}`);
    }
}

todo.delete = function(){
    console.log('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();