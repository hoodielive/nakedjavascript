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
