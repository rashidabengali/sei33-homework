function binarySearch(arr, element){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    let result = -1;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === element){
            result = index;
            break;
        }
    }

    return result;
}

function recursiveBinarySearch(arr, element, index=0){
    //  search through the array recursively for the element
    //  you may need to add more parameters to this function!
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    if (arr[index] === element){
        console.log('found index', index);
        return index;
    }
    if (arr.length < index){
        console.log('not found', -1);
        return -1;
    }
    index++;
    return recursiveBinarySearch(arr, element, index );
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}