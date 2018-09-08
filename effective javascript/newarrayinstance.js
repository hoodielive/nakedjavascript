class PlayArray{

} 

var dict = new Array(); 

dict.moseh = 'moses', dict.henoach = 'enoch', dict.yaacov = 'jacob'; 

PlayArray.prototype.first = function() {
	return this[0]; 
}; 

PlayArray.prototype.last = function() {
	console.log(this[this.length -1 ]); 
} 

var names = [], name; 

for (name in dict) {
	names.push(name);
} 

console.log(names); 
