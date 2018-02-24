// looking at lists of records | return new array or a single value (condensing) 

var computers = [ 
	{ name: 'Apple', ram: 24 }, 
	{ name: 'Compaq', ram: 4 }, 
	{ name: 'Acer', ram: 32 }
]; 

var allcomputersCanRunProgram = true; 

var onlySomeComputersCanRunProgram = false; 

for (var i = 0; i < computers.length; i++) {
	var computer = computers[i]; 

	if ( computer.ram < 16) { 
		allcomputersCanRunProgram = false; 
	} else {
		onlySomeComputersCanRunProgram = true; 
	} 
} 


allcomputersCanRunProgram; 
onlySomeComputersCanRunProgram; 


