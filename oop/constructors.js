// Factory Pattern 
function createCircle(radius) { 
	return { 
		radius, 
		draw: function() { 
			console.log('draw');
		} 
	}; 
}
const circle = createCircle(1); 

// Constructor Pattern Function 
function Circle(radius) {
	this.radius = radius; 
	this.draw = function() { 
		console.log('draw')
	} 
} 
const another = new Circle(1); 

