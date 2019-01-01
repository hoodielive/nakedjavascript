let handler = { 
  get: function(obj, prop) {
    return prop in obj ? 
      obj[prop]:
      37; 
  }
}

let p = new Proxy({}, handler); 
p.a = 1; 
p.b = undefined; 

console.log(p.a, p.b); 
console.log('c' in p, p.c); 
