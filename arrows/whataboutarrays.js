const numbers = [1,2,3]; 

numbers.map(function(number) { 
    return 2 * number; 
}); 


// refactored 
console.log(numbers.map(number => 2 * number)); 


