const removeFromArray = function(array, elementToRemove, ...optionalElement) {
    let newArray = [];
    cursor:for (let i = 0; i < array.length; i++) {
        if (array[i] === elementToRemove) {
            continue;
        }
        if (optionalElement != undefined) {
            for (element of optionalElement) {
                if (array[i] === element) {
                    continue cursor;
                }
            }
        }
        newArray.push(array[i]);
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
