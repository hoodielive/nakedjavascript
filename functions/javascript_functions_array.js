var arr1 = [{
	FirstBorn : 'Vincent',
	Mother: 'Margaret', 
	SecondBorn: 'Amber',
	Youngin: 'Destiny', 
	Father: 'Vincent Sr', 
	KneeBaby: 'Evan'
}]; 

console.log(typeof(arr1));

function filterer(array) { 
	for (var i = 0; i < array.length; i++) { 
		console.log(array) } 
} 

filterer(arr1); 

var arr = filterer(); 

function curve(arr) {
	arr.filterer(function(array) { 
		return array[arr] === KneeBaby; 	
	}); 
}

curve(arr1) 
