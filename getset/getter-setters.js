
const person = {
    firstName: 'Larry',
    lastName: 'Something',
    get fullName() {
        return `${person.firstName} ${person.lastName} `
    },
    set fullName(value) {
       // make sure that you have a valid string 
        if (typeof value !== 'string') return; 
        const parts = value.split(' ')
        this.firstName = parts[0];
        this.lastName = parts[1]; 
    }
}; 

person.fullName = 'Jon Doe'; // when the setter is set, then you can 'set' the name as jon doe

// getters => access properties
// setters => change (mutate) them

console.log(person.fullName)
