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

isCurrentYearLeapYear()