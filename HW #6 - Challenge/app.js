
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
    return ((parts[0] * 60) + (parts[1]));
});
    
//console.log(secondsTotal); 
const add = (a, b) => a + b;

const filtered = secondsTotal.reduce(add);

console.log(filtered);

///im going to sleep bye people 




