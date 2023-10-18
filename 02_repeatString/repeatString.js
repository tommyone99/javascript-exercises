const repeatString = function(string, quantity) {
    if (quantity < 0) {
        return "ERROR";
    }

    let repeatedString = "";

    for (let i = 0; i < quantity; i++) {
        repeatedString = repeatedString + string;
    }
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
