// separate the data and logic from the interface 
var printPrice = function(price, label) {
  var node = document.createElement("li");
  var textnode = document.createElement(label+' price: $'+price); 
  node.appendChild(textnode); 
  document.getElementById('products').appendChild(node); 
}

// create function objects for each type of fruit
var grapes = function() {
  this.name = 'grapes';
  this.basePrice = 5
};
var oranges = function() {
  this.name = 'oranges';
  this.basePrice = 3
};
var bananas = function() {
  this.name = 'oranges';
  this.basePrice = 4
};

// create object literals for the different sizes 
var small = {
  getPrice = function() {return this.basePrice + 2},
  getLabel = function() {return this.name + ' small'} 
};
var medium = {
  getPrice = function() {return this.basePrice + 4},
  getLabel = function() {return this.name + ' medium'} 
}; 
var large = {
  getPrice = function() {return this.basePrice + 6},
  getLabel = function() {return this.name + ' large'} 
}; 

// put all the fruit (types|sizes) into arrays 
var fruitTypes = [grapes,oranges,bananas]; 
var fruitSizes = [small,medium,large]; 

// build 'new' objects that are combinations of the above ones and put them into a new array 
var fruits = fruitTypes.reduce(function(previous, current) {
  var newFruit = fruitSizes.map(function(mixin) {
    var newFruitObj = plusMixin(current, mixin);
    return new newFruitObj();
  }); 
  return previous.concat(newFruit);
}, []); 

// now defined how to get the price and label for each fruit (type|size) 'combos', now we can just print them 
fruits.forEach(function(fruit) { 
  printPrice(fruit.getPrice(),fruit.getLabel()); 
});
