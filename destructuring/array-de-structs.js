const companies = [ 
    'Google', 
    'Facebook',
    'Uber'
]; 

const [ name ] = companies; 
const [ name, name2, name3, name4 ] = companies; 

name; 
name2; 
name3; 
name4; 

// destructuring works too 

const [ name, name2, ...rest ] = companies; 
rest; 
