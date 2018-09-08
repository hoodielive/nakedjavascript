function* numbers() { 
  
  yield; 

}

console.log(numbers())

// function *nummer() { }

const gen = numbers(); 
gen.next(); // true
gen.next(); // false 
