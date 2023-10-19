const sumAll = function(firstNumber, secondNumber) {

    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
