// Create an array of every five numbers between 30 and 101
const array = {
    bumpyArr : ["hello", "maytag", [[[["sigmonster"]], "swizzle"]]],
    uncompactedArr : [ "hello", false, NaN, undefined, "quantom bogo-sort" ],
    numbers : [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
    arrToTransform : [[ "age", "location" ], [ NaN, undefined ]],

    createArray : function() {
        return _.range(30, 101, 5);
    },
    flattenBumpArray : function(){
        // Turn bumpyArr into one flat array (no nested arrays)
        return _.flatten(this.bumpyArr);
    },
    compactArray : function() {
        // Remove all of the falsey elements in the uncompactedArr
        return _.compact(this.uncompactedArr);
    },
    findUniqueElement : function() {
        // Find all of the unique elements in the following arrays - [ 1, 25, 100 ], [ 1, 14, 25 ] and 24, Infinity, -0
        const flatten = _.flatten([[ 1, 25, 100 ], [ 1, 14, 25 ], 24, Infinity, -0]);
        return _.uniq(flatten);
    },
    findIndex : function() {
        // Find the index of the first element in numbers that is over 7 and is even
        return _.findIndex(this.numbers, (nums) => {
            return nums > 7 && (nums % 2 === 0);
        });
    },
    arrayToObject : function() {
        // Turn arrToTransform into an object that looks like this - { age: NaN, location: undefined }
        return _.object(this.arrToTransform[0], this.arrToTransform[1]);
    }
}

console.log(array.arrayToObject());