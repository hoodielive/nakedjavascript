var text = 'Domo Arigato!'

function useless(ninjaCallback) {
	return ninjaCallback();
} 

console.assert(useless(function () { console.log( text ) }) === text, 
	"The useless function works! " + text); 


