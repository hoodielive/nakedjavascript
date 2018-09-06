// Objects -> get, set, delete 

// get names.name1 
let names = {
	name1: "Joel",
	name2: "Vince", 
	name3: "Keith",
	name4: "Larry"

}

// set setNames.name = value; 
let setNames = {
	setname1: "Larry",
	setname2: "Daryl"
}

// delete delete object.name

delete names.name3
delete names['name4']

console.log(names)
console.log(setNames)

