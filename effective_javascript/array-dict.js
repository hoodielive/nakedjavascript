function someDictionary() { } 

someDictionary.prototype.count = function() { 
	var i = 0; 
	var name; 
	for (name in dict) {
		i++ 
	} 
return i; 
} 


