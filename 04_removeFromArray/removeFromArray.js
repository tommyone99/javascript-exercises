const removeFromArray = function(array, elementToRemove) {

    let i = 0;

    for (element of array) {
        if (element === elementToRemove) {
            array.splice(i, 1);
            i--;
        }
        i++;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
