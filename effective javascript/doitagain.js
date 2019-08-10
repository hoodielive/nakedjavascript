dict = { fname: 'Nabi', lname: 'Sod' }

people = [] 

for (let name in dict) {
  people.push(name + ' : ' + dict[name])
  console.log(people);
}

