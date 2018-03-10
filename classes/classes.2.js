class Date { 

    constructor(year, month, day) { 
        this.year = year;
        this.month = month; 
        this.day = day; 
    } 

}; 

class NewReunion extends Date { 
    constructor(options){ 
        super() 

        this.options = options 

    } 

} 


let callInstance = new Date(); 
callInstance.year = 1928

console.log(callInstance.year); 


let newreunite = new NewReunion(); 

newreunite.options = "This is a set of options" 

console.log(newreunite.options); 
