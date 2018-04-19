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

