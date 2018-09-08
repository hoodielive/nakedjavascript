// Start Walking to Store

function* shopping() {
  // stuff on sidewalk


  // walking down the sidewalk

  // go into the store with cash 

 const stuffFromStore = yield 'cash'; 

 const cleanClothes = yield 'laundry'; 

  // Headed back home

  return console.log([stuffFromStore, cleanclothes]);
}

// Stuff in the store 
const gen = shopping(); 
gen.next(); // leaving your house 
gen.next('groceries'); // leaving the store with groceries  
