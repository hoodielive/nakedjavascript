// Assign a new object to a variable

var ninja = {};

// Add a new object to an array 

var ninjaArray = []; 
ninjaArray.push({}); 

// Assign a new object as a property of another object 

ninja.data = {}; 

// A newly created object can be passed as an argument to a function 

function hide(ninja) {
	ninja.visibity = false; 
} 

hide({});

// They can be returned as values from functions

function returnNinja() {
	return {}; 
} 

// They can possess properties that can be dynamically created and assigned
var ninja = {}; 
ninja.name = "Lawrence"; 

// Functions are first-class objects 
function ninjaFunction() {}; 

// Assign it to a variable, array entity and properties of other objects 
var ninjaFunction = function() {}; 

ninjaArray.push(function(){}); 

ninja.data = function(){}; 

// Passed as arguments to other functions 
function call(ninjaFunction) {
	ninjaFunction(); 
} 
call(function(){}); 

// Returned as values from functions
function returnedNewNinjaFunction() {
	return function() {}; 
} 

// They can possess properties that can be dynamically created and assigned:
var ninjaFunction = function(){}; 
ninjaFunction.name = "Eso"; 

// Whatever we can do with objects, we can also do with functions as well! 

// We can pass a function as an argument to another function that might, at a later point in application execution, call passed-in functions - "callback"

function useless(ninjaCallback) {
	return ninjaCallback();
} 

var text = "Domo Arigato!"; 
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

assert(useless(getText) === text, 
	"The useless function works! " + text); 

report("After the calls have been made"); 
