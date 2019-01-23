// maps solves problems because it returns a new array housing the requested values

const array = [1,2,3,4,5,6];

const square1 = x => Math.pow(x, 2); 

console.log(square1(3))

const squares = array.map(square1)

console.log(`Original array: ${array}`); 

console.log(`Squared array: ${squares}`)
