var person1 = {
    _name: 'Lawrence',
    
    get name() { 
        console.log("Reading Name"); 
        return this._name; 
    }, 

    set name(value) {
        console.log("Setting name to %s", value); 
        this._name = value; 
    }
};

console.log(person1._name)


var person2 = {
    _name: 'Larry',

    get name() => {
        console.log("Reading Name Again"); 
        return this._name;
    },

    setName(value) {
        console.log("Setting name");
        this._name = value;
    }
}; 
