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
