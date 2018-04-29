var fn = data => data; 

// first part of the left-hand side of assignment statement is the argument that is provided to the function
// the rule is that if you have only 1 arg, you do not need any additional syntax - next is the arrow and the exp that is
// to be returned -> in this case it just returns the argument. It's equivalent is:

var fn = function(data) {
	return data;
}; 


// consider another example 
let getNumber = () => 42; 

console.log(typeof getNumber); // function 

console.log(getNumber()); // 42 
