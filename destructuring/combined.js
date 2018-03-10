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

// rest/spred operator works too 

const [ name, name2, ...rest ] = companies; 
rest; 
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

const companies = [
    { name: 'Google', location: 'Mountain View' }, 
    { name: 'Facebook', location: 'Menlo Park' }, 
    { name: 'Uber', location: 'San Francisco' }, 
]; 

const [{ location }] = companies; 

location; 


const Google = { 
    locations: [ 'Mountain View', 'New York', 'London' ] 

}; 

// how through destructuring do I get access to the Google object

const { locations: [ location] } = Google; 
location 
// Start with ES5 code and then refactor it to es6

var expense = {
    type: 'Business', 
    amount: '$45 USD', 

};

var type = expense.type; 
var amount = expense.amount; 

// ES6
// const { type } = expense; 
// const { amount } = expense; 

// ES6 Refactoring 
const { type, amount } = expense; 
var savedFile = {
    extension: 'jpg', 
    name: 'repost',
    size: 14040
}; 

function fileSummary({ name, extension, size }, { color } ) {
    return `The file ${name}.${extension} is of size ${size}`; 
}

fileSummary(savedFile); 

function signup({username, password, email, dob, city}) {
  // create new user  
}; 


const user = { 
    username: 'myName', 
    password: 'myPassword', 
    email: 'myExample@example.com', 
    dob: '5/25/1982',
    city: 'Florida'
} 

signup(user); 


