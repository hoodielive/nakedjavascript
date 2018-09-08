var dict = { khu: 34, enosh: 24, uyrii: 32 }; 

var people = []; 

for (var name in dict) {
	people.push(name + ": " + dict[name]); 
} 

console.log(people); 
