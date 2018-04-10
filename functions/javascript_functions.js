// factorials - curve
function curve(arr, amount) {
    for (var i = 0; i < arr.length; ++i) {
        arr[i] += amount;
    }
}

let grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades);
function factorial(number) {
    var product = 1;
    for (var i = number; i >=1; --i) {
        product *= i;
    }
    return product;
}

console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));

function invokeRem() { 

    if (diamond.forEach(function(diamon) {
        return diamon.length == 0; 

} 
const year = new Date().getFullYear(); 

function printLeapYearStatus() { 
	if (year % 4 == 0) console.log(`${year} is NOT a leap year.`) 
	else if (year % 100 != 0) console.log(`${year} IS a leap year. `) 
	else if (year % 400 != 0) console.log(`${year} IS NOT a leap year. `) 
	else console.log(`${year} IS a leap year`); 
}

function isCurrentYearLeapYear() { 
	const year = new Date().getFullYear(); 
		if (year % 4 !== 0 ) {
			return false 
		} else if { 
			(year % 100 != 0) { 
				return true; 
			} else if { 
				(year % 400 !== 0) {
					return false; 
				} else {
					return true; 
				}
			}
		}
}

const daysInMonth = [ 
	31, isCurrentYearLeapYear() ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
]; 

if(isCurrentYearLeapYear()) console.log('It is a leap year.'); 

const year = new Date().getFullYear(); 

if (year % 4 == 0) console.log(`${year} is NOT a leap year.`) 
else if (year % 100 != 0) console.log(`${year} IS a leap year. `) 
else if (year % 400 != 0) console.log(`${year} IS NOT a leap year. `) 
else console.log(`${year} IS a leap year`); 

