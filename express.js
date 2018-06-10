const express = require('express'); 
const app = express(); 

app.use('express', (req, res, next) => {
    console.log('Has')
});

app.get('/', (req, res) => {
    res.send('hi');
}); 

const port = 3000; 

app.listen(port, () => {
    console.log('Listening on port: ', port);
}); 
