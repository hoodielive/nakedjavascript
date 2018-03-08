// the idea about a class is bypassing the constructor functions and all sorts of weird boilerplate stuff 

class Car {
    constructor({ title }) { 
        this.title = title; 
     
    } 
    drive() { 

        return 'vroom'; 
    } 
}





const car = new Car({ title: 'Toyota' }); 
car; 
car.drive();  
