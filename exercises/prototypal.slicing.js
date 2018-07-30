function list() { 
	const arr = Array.prototype.slice.call(arguments);
	console.log(arr); 
}; 

function list2() {
	const arr2 = Array.from(arguments);
	console.log(arr2);
};

function list3() {
	const arr3 = [].slice.call(arguments); 
	console.log(arr3); 
};


function checkArr() { 
	if (list == list) {
		list(arrayLike); 
	} 
	else {
		console.log('list is not present');
	} 
};

let unboundSlice = Array.prototype.slice; 
let slice = Function.prototype.call.bind(unboundSlice);

function list4() {
	console.log(slice(arguments)); 
};

arrayLike = [1,2,3,4]; 
arrayLike2 = ['this', 'is', 'just', 'so', 'I', 'would', 'have', 'more', 'interesting', 'data'];

checkArr(); 
list2(arrayLike); 
list3(arrayLike);
list4(arrayLike2); 
