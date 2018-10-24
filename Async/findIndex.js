let arr = [3, 4, 6, 2, 1]

function findIndex(arr, function(num, index, array) {
  return num === 6; 
});

let arr2 = [5, 11, 13, 8, 6, 7]; 

function findIndex2(arr, function(num, index, array) {
  return num % 2 === 0; 
})

let langs = ["Java", "C++", "Javascript"]
function findIndex3(langs, function(lang, index, arr) {
  return lang === "Javascript"; 
})

findIndex()
findIndex2()
findIndex3()


