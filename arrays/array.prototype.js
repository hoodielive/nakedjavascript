var keys = [];

with(Array.prototype) {
    keys.push('something');
}

Object.keys(Array.prototype[Symbol.unscopables]);
