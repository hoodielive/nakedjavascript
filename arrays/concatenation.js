var alpha = ['a', 'b', 'c', 'd'];
var numeric = [1,2,3,4];

alpha.concat(numeric);
console.log(alpha.concat(numeric));

var num1 = [[1]];
var num2 = [2, [3]];

var nums = num1.concat(num2);

console.log(nums);

num1[0].push(4);

console.log(nums);
