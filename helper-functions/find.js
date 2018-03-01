var users = [
	{ name: 'khu' }, 
	{ name: 'atu' }, 
	{ name: 'ba' } 
]; 

var user; 

for (var i = 0; i < users.length; i++ ) { 
	if (users[i].name === 'Alex') {
		user = users[i]; 
	} 
} 

user;

// better way 

users.find(function(user) {
	return user.name === "khu"
}); 
