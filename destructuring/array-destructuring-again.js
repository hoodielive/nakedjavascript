const points = [ 
    [4, 5], 
    [10, 1], 
    [0, 40]
];



/**[ 
    { x: 4, y: 5}, 
    { x: 10, y: 1}, 
// graphs want to see it the following way but lets figure out how to do it with es6 destructuring
]; **/ 

points.map(([ x, y]) => {x, y}); 


