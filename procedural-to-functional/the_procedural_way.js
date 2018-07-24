// create some objects to store data 
var grapes = { 
    name: 'grapes',
    basePrice: 5
}; 

var oranges = {
    name: 'oranges',
    basePrice: 3
};

var bananas = {
    name: 'bananas',
    basePrice: 2
}; 

// write an ugly ass helper function to calculate the cose according to size and print it to html list 
function printPrice(fruit, size) {
  if (size == 'small') {
    var price = fruit.basePrice + 2; 
  } 
  else if (size == 'medium') {
    var price = fruit.basePrice + 4; 
  }
  else {
    var price = fruit.basePrice + 6; 
  }

  // now create the new html list item 
  var node = document.createElement('li'); 
  var label = fruit.name + ' ' + size; 
  var textnode = document.createTextNode(label+' price: $'+price);
  node.appendChild(textnode); 
  document.getElementById('products').appendChild(node); 
} 

// now all we need to do is call the printPrice function for every single solitary combination of coffee (type|size) 
// sigh.. 
printPrice(grapes, 'small');
printPrice(grapes, 'medium');
printPrice(grapes, 'large');
printPrice(oranges, 'small');
printPrice(oranges, 'medium');
printPrice(oranges, 'large');
printPrice(banana, 'small');
printPrice(banana, 'medium');
printPrice(banana, 'large');
