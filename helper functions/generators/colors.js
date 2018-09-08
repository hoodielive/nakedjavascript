function* colors() {
  
  yield 'red'
  yield 'blue'
  yield 'green'
}

const gen = colors(); 

gen.next(); 
gen.next();
gen.next();

myColors = [];

for (let color of colors()) {
  
  myColors.push(color); 

}
console.log(myColors)
