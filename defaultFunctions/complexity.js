function User(id) {
    this.id = id; 
} 

new User(1); 

function generateId() {
    return Math.random() * 9999999 
} 

function createAdminUser() {
    user.admin = true; 
    return user; 

} 


const user = new User(generateId()); 
createAdminUser(user); 
