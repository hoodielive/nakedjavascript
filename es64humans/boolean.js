console.log("" == false)

console.log("" === false)

console.log(!!"" == false)

console.log(!!"" === false)

b = 'silence'

//console.log(b.p.constructor()) console.log(b.p.toString()) console.log(b.p.valueOf())

// checking to see if a variable exists 

var someVar = 123; 

if (someVar) {
  result = "yes"; 
  return console.log(result); 
}

someVar = ""

if (typeof someVar !== "undefined") {
  result = yes; 
  //console.log(result)
}

console.log(result);

var res = '\n'
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    res += '* ' ; 
  }
  res += '\n'; 
}


var res = '\n', i, j; 
for (i = 1; i <= 7;  i++) {
  for (j = 1; j <= 15; j++) {
    res += (i * j) % 8 ? ' ' : '*';
  }
  res += '\n'; 
}
