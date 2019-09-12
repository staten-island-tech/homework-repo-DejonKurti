///Switches

const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}

//sort of like a different if-else

let day;

switch(new Date().getDay()){
    case 0: 
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);


///Ternary and Switches
//Check the notes for ternary

const job = 'teacher';
switch (job) {
    case 'instructor':
    case 'teacher':
        console.log(`${firstName} teaches kids how to code.`);
        break;
    case 'driver':
        console.log(`${firstName} drives an uber.`);
        break;
    default:
        console.log(`get a job boomer`);
}
 

