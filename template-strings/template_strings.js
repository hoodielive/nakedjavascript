// aka template literals

function getMessage() {
    const year = new Date().getFullYear();

    // refactored for ES6 return "The year is " + year;
    return `The year is ${year}`;

}

getMessage();
