///If no parameters, you can place empty parenthesis (or even nothing)

() => 42

//Single Parameters: () optional

x => 42
(x) => 42

//Multiple parameters require ()

(x, y) => 42

//This is a function statement, which performs an action
//With the arrow function, it is important to remember that statements need to have curly 
//braces. Once the curly braces are present, you always need to write return as well.

var feedTheCat = (cat) => {
    if (cat === 'hungry') {
        return 'Feed the cat';
    } else {
        return 'Do not feed the cat';
    }
}

//If function in a block, use return

var addValues = (x, y) => {
    return x + y
}

//Objects return in ()

x => ({ y: x })

//The arrows are harder to debug, for if you get an error, you can't reference the name of the function 
//or line it occurred

