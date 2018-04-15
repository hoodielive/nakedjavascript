var text = "Domo Arigato!"; 

function report(anything) { console.log(anything);}; 
report("Before defining functions"); 

function useless(ninjaCallback) {
	report("In useless function"); 
	return ninjaCallback(); 
}

function getText() {
	report("in getText function"); 
	return text; 
} 

report("Before making all the calls"); 

console.assert(useless(getText) === text, 
	"The useless function works! " + text); 

report("After the calls have been made"); 
