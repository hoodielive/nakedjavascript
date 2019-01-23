const dirtyMap = {};

const cleanMap = Object.create(null);

dirtyMap.constructor  // function object() {[native code]}
cleanMap.constructor  // undefined

// Iterating maps

for (const key in dirtyMap) {
    if (dirtyMap.hasOwnProperty(key)) {
        console.log(key + " -> " + dirtyMap[key]);
    }
}

for (const key in cleanMap) {
    console.log(key + " -> " + cleanMap[key]);
}
