// the idea about a class is bypassing the constructor functions and all sorts of weird boilerplate stuff 

class Car {
    constructor({ title }) { 
        this.title = title; 
     
    } 

    drive() { 

        return 'vroom'; 

    } 
}


class Toyota extends Car {
    constructor({ options }) {
        super(options ); 
        this.color = options.color;  
    } 


    honk() { 
        return 'beep'; 
    } 

} 

const toyota = new Toyota({ color: 'red', title: 'Daily Drive');
'----'; 

toyota.honk(); 
toyota.drive(); 
toyota; 
