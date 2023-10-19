const removeFromArray = function(array, elementToRemove, optionalElement) {
    let newArray = [];
    outer: for (let i = 0; i < array.length; i++) {
        if (array[i] === elementToRemove) {
            continue;
        }
        if (optionalElement != undefined) {
            if (array[i] === optionalElement) {
            continue outer;
            }
        }
        newArray.push(array[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
