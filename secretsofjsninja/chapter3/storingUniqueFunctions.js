// keep track of the next available ID to be assigned

var store = {
	nextId: 1, 
	cache: {}, 
	add: function(fn) {
		if (!fn.id) {
			fn.id = this.nextId++; 
			this.cache[fn.id] = fn; 
			return true;   
		} 
	}
}; 

function osu() {} 

console.assert(store.add(osu), "Function was safely added."); 

console.assert(!store.add(osu), "But it was only added once."); 

