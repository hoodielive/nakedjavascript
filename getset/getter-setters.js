
const person = {
    firstName: 'Larry',
    lastName: 'Something',
    get fullName() {
        return `${person.firstName} ${person.lastName} `
    }
}

person.fullName = 'Jon Doe';

// getters => access properties
// setters => change (mutate) them

console.log(person.fullName)
