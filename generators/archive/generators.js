// What is a generator? What does it do? Iteration of generators, Generator delegation, Generators with Symbol.iterator

function* shopping() { 
    // stuff on sidewalk
    
    // walk down sidewalk

    // go into the store with cash 

    const stuffFromStore = yield 'cash'; 

    // walking back home
    
    return stuffFromStore
} 

const gen = shopping(); 
console.log(gen.next()); // leaving our house  
// walked into the store
// walking up and down the aisles.. 
// purchase stuff
console.log(gen.next('groceries')); // leaving the store with groceries 

