class Calculation {
    constructor(name, age, location) {
        this.name = name;
        this.age = age;
        this.location = location;
    }

    findName(name) {
        return console.log(`His name shall be called: ${name}`)
    }

    findAge(age) {
        return console.log(`His age is ${age}`);
    }

    findLocation(location) {
        return console.log(`He lives in ${location}`);
    }
}

const newCalculation = new Calculation();
newCalculation.findName('Vincent');
newCalculation.findAge(35);
newCalculation.findLocation('Pittsburgh');
