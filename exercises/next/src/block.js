// use a free-standing block to keep a variable private

let read, write; 
{
  let data = {}; 
  write = function(key, val) { 
    data[key] = val;  
  }

  read = function(key) {
    return console.log(data[key]);  
  }
}

write('message', 'welcome to ES6!'); 

read('message'); 

//console.log(data); would generate an error because you would be referencing an object outside of a private block

