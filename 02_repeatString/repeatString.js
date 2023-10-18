const repeatString = function(string, quantity) {

    let repeatedString ="";

    for (let i = 0; i < quantity; i++) {
        repeatedString = repeatedString + string;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
