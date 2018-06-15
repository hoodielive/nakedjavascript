// obj literal 
const circle = { 
	radius: 1, 
	location: {
		x: 1, 
		y: 1
	}, 

	draw: function() { 
		console.log('draw')
	}
}; 

// or Factory ? //  
function createCircle() { 
	return {
		radius, // if the var name and value are the same, then just add name. Equiv to createCircle(radius) {
			// const circle = {
				// radius: radius
		// 	} 
