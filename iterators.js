const array = [1,2,3,4,5,6,7];

function iteratoroverstuff(array) {
    var nextIndex = 0;
    return {
        next: function() {
            return nextIndex < array.length?
                { value: array[nextIndex++], done: false } :
                { done: true };
        }
    };
}

iteratoroverstuff();
