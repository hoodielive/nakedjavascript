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
