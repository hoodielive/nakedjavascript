// while loops
let index = 0;
const array = [1,2,3,4,5,6];

while (index < array.length) {
    console.log(array[index]);
    index++
}

// for loops
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
}

// forEach
array.forEach(function(current_value, index, array) {
    console.log(`At index ${index} in array ${array} the value is ${current_value}`);
})

// map
const square = x => Math.pow(x, 2);
const squares = array.map(square);
console.log(`Original array: ${array}`);
console.log(`Squared array: ${squares}`);

// reduce
const sum = (x, y) => x + y;
const array_sum = array.reduce(sum, 0);
console.log(`The sum of array: ${array} is ${array_sum}`);

// filter
const even = x => x % 2 === 0;
const even_array = array.filter(even);
console.log(`Even numbers in array ${array}: ${even_array}`);

// every
const under_seven = x => x < 7;

if (array.every(under_seven)) {
    console.log('Every element in the array is leass than 7');
}
else {
    console.log('At least one element in the array was bigger than 7');
}

// some
const over_seven = x => x > y;

if (array.some(over_seven)) {
    console.log('At least one element bigger than 7 was found');
}
else {
    console.log('No element bigger than 7 was found');
}
