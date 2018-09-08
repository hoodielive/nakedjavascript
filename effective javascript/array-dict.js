function NaiveDict() { } 

NaiveDict.prototype.count = function() {
	var i = 0, name; 
	for (name in dict) { 
		i++; 
	} 
	console.log(i);
}; 

NaiveDict.prototype.toString = function() {
	console.log("[object NaiveDict]"); 
}; 

var dict = new NaiveDict(); 

dict.khu = 34, dict.enosh = 24, dict.osa = 62

dict.count(); 

console.log(dict.khu,dict.enosh, dict.osa); 

var dict = new Array(); 

dict.moseh = 'moses', dict.henoach = 'enoch', dict.yaacov = 'jacob'; 

Array.prototype.first = function() {
	return this[0]; 
}; 

Array.prototype.last = function() {
	console.log(this[this.length -1 ]); 
} 

var names = [], name; 

for (name in dict) {
	names.push(name);
} 

console.log(names); 
