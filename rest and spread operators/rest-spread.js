// we use rest and spread to write less code 

function addNumbers(...numbers) {
    
    return numbers.reduce(function(sum, number) {
        return sum + number; 
    }, 0); 
}

// although you could also use arrow functions return numbers.reduce((sum, number) => sum + number; 

addNumbers(1,2,3,4,5,6,7,8,9);

// my fucking return command does not work! ????? why?? 
