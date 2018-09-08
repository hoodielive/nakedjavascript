var text = "Domo arigato!"; 
report('Before defining functions'); 

function useless(ninjacallback) {
    report('In useless function');
    return ninjacallback(); 
} 

function getText() { 
    report("In getext function"); 
    return text;
} 

report("Before making all the calls");

assert(useless(getText) === text; 
    "The useless function works! " + text) ; 

report("After the calls have been made!"); 
