// fancy math calculations | fakeApi or Lib 

const MathLibrary = {
    calculateProduct(..rest) { 
        console.log('Please user the multiply method instead'); 
        return this.multiply(..rest); 
    }, 

    multiply(a, b) {
        return a * b; 
    }

}; 
