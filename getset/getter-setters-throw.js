
// getters => access properties
// setters => change (mutate) them

const person = {
    firstName: 'Larry',
    lastName: 'Something',
    get fullName() {
        return `${person.firstName} ${person.lastName} `
    },
    set fullName(value) {

       // make sure that you have a valid string 
        if (typeof value !== 'string') 
          throw new Error('Value is not a string.'); 
            
        const parts = value.split(' ')
        if (parts.length !== 2)
          throw new Error('Enter a first and last name');
        this.firstName = parts[0];
        this.lastName = parts[1]; 
    }
}; 

try {
  person.fullName = ''; // when the setter is set, then you can 'set' the name as jon doe
}

catch (e) {
  console.log(e);
}

console.log(person)
