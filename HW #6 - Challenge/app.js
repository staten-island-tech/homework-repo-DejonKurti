const list = document.querySelectorAll('li');
const listArray = Array.from(list);
//console.log(listArray);    


const flexboxList = listArray.filter(item => {
    item = item.textContent;
    return item.includes('Flexbox') == true;
});

//console.log(flexboxList); 

const filteredTimeStamps = flexboxList.map(item => {
    const time = item.dataset.time;
    return time;
})

//console.log(filtered);

const secondsTotal = filteredTimeStamps.map(time => {
    const parts = time.split(':');
    return (parseInt(parts[0] * 60) + parseInt(parts[1]));
}).reduce((acc, val) => {
    return acc + val;
})

//console.log(secondsTotal);



 //Q2
  //Given this array: `[3,62,234,7,23,74,23,76,92]`, use the array filter method and an arrow function to create an array of the numbers greater than `70`

const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
const numbersFilter = numbers.filter(obj => {
    if (obj>70) {
        return obj;
    }
})

console.log(numbersFilter);