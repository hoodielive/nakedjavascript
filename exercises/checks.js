let feature; 

console.log(typeof(feature)); 

function testVar() { 
	if(typeof feature === 'undefined') {
		feature = 'this is a new feature'
		console.log(feature)
	} 
	else {
		feature = 'this is not a new feature'; 
		console.log(feature) 
	}
}

testVar(); 
