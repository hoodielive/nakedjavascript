var emitter = {
	events: {}, 
	on: function(type, fn) {
		if (this.events[type] === undefined) {
			this.events[type] = []; 
		} 
		this.events[type].push(fn)
	},
	emit: function(type, event) {
		if (this.events[type] === undefined) {
			this.events[type] = [];
			return
		} 

		this.events[type].forEach(function(fn) {
			fn(event)
		}) 
	}

}

emitter.on('function', function() { return "This is how" });  

console.log(emitter.events.function[0]()); 

