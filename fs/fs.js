const fs = require('fs'); 

var output = fs.readFileSync('data.txt', 'utf-8').trim() 

console.log(output); 
