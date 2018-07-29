function list() { 
	const arr = Array.prototype.slice.call(arguments);
	console.log(arr); 
}; 

function list2() {
	const arr2 = Array.from(arguments);
	console.log(arr2);
};

arrayLike = [1,2,3,4]; 

list(arrayLike);
list2(arrayLike); 
