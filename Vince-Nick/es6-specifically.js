// const obj = {}; 

// obj.key = 42; 

// console.log(obj.key); // 42 

// obj = {}; // will give you a type error, but you could make the value itself immutable by freezing it

const obj = Object.freeze({}); 

obj.key = 42; 

console.log(obj) 
