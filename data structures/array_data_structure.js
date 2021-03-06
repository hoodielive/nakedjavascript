function MyArray() {
    this.array = [];
}

MyArray.prototype.add = function(data) {
    this.array.push(data);
};

MyArray.prototype.remove = function(data) {
    this.array = this.array.filter(function(current) {
        return current !== data;
    });
};

console.log('the product of')

MyArray.prototype.search = function(data) {
    var foundIndex = this.array.indexOf(data);
    if(~foundIndex) {
        return foundIndex;
    }

    return null;
};

MyArray.prototype.getAtIndex = function(index) {
    return this.array[index];
};

MyArray.prototype.length = function() {
    return this.array.length;
};


MyArray.prototype.print = function() {
    console.log(this.array.join(' '));
};

var array = new MyArray();

array.add(1);
array.print();


// log your findings

console.log('search 3 gives index 2:', array.search(3));
