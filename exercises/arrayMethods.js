const array1 = ['i', 'am', 'an', 'array'] 

const arrayobj = [{ givenNames: 'veggie burger', surName: 'burger', status: 'single', age: 19, occupation: 'aggravating people'},
							{ givenNames: 'pineapple burger', surName: 'pineapple', status: 'married', age: 27, occupation: 'lifting up people'}]

const fraeyah = array1.forEach(function(elem) {
	console.log(elem);
	return;
}); 

const klaus = arrayobj.forEach(function(elem) { 
	console.log(elem);
	return;
}); 

function elijah(elem, index, array) {
	console.log('array_index[' + index + '] = ' + elem); 
	return;
};

console.log(fraeyah); 
console.log(klaus);
array1.forEach(elijah); 
