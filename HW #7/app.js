//The Spread Operator

//Takes every single item from an iterable 
//and applies it to the containing array

/* ['wes']
[...'wes'] = ['w', 'e', 's'] */

/* const featured = ['DD', 'Peperoni', 'Hawaiian Trash'];
const specialty = ['Meat', 'Spicy MAMA', 'Marg'];

const pizzas = [...featured, 'veg', ...specialty];

const fridayPizzas = [...pizzas]; */



//SPREADING A STRING EXERCISE

const heading = document.querySelector('.jump');
heading.innerHTML = sparanWrap(heading.textContent);


function sparanWrap(word) {
    return [...word].map(letter => `<span>${letter}</span>`).join('');
}