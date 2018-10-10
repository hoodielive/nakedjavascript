/** Generators 

  - a generator function is a special type of function. 
  - its a factory for returning new generator objects. 
  - Each generator object returned from a generator function behaves according to the body of the function
    it came from.
  - That is, the body of the generator function defines the blueprint for each generator that it returns: 
 */

function* myGeneratorFunction() {
  // ...  
}

const myGenerator = myGeneratorFunction(); 
