/**
1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Friday. 
Current time is : 4 PM : 50 : 22
**/


let today = new Date()

let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] 

let hour = today.getHours(), minutes = today.getMinutes(), seconds = today.getSeconds(); 

let day = today.getDay()

console.log("Today is: " + daylist[day] + " " + hour +  ":" + minutes + ":" + seconds)
