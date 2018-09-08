const makeSaluteClass = term => 
	class {
		constructor(x) {
			this.x = x; 
		} 
		salute(y) {
			console.log(`${this.x} says "${term}" to ${y}`); 
		} 
	}; 

	const MoorishLatin = makeSaluteClass("Hola!"); 
	new MoorishLatin("ALFA").salute("BETA"); 
