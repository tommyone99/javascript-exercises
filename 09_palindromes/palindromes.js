function getUniformChar(char) {
    if (char == " " || char == "!" || char == "." || char == ",") {
        return false;
    }
    return char;
};

function areArraysSame(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0, len = arr1.length; i < len; i++){
        if (arr1[i] !== arr2[i]){
            return false;
        };
    };
    return true;
}

function palindromes(string) {
    let ogArray = string.toUpperCase().split("");

    let filteredOgArray = ogArray.filter(getUniformChar);

    let reversedArray = Array.from(filteredOgArray).reverse();

    if (areArraysSame(reversedArray, filteredOgArray)) return true;
    else return false;
};


// Do not edit below this line
module.exports = palindromes;
