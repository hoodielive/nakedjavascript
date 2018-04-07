var listeners = ['Listen', 'Listen,Listen,Listen'] 

function list(events) {
    console.log(events)
} 

function listen() { 
    console.log('hello - I am speaking to you '); 
} 

var events = { 
    listeners: listeners, 
    listen: listen
} 

events.listen()
console.log(events.listeners[0])
list()
