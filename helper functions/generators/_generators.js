function* numbers() { 
  
  yield; 

}

console.log(numbers())

// function *nummer() { } is another way to create a generator 

const gen = numbers(); 

gen.next(); // true

gen.next(); // false -> it would be true if you get rid of yield  


