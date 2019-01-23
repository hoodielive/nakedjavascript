var fs = require('fs')

fs.readFile('./script.js', function(err, data) { 
    console.log('this is to show that scriptjs was found') 
        fs.readFile('./pyramid.js', function(err, data) { 
            console.log('this is to show that I have found the pyramid file') 
        })
})  
