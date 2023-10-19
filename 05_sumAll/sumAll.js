const sumAll = function(firstNumber, secondNumber) {

    let sum = 0;

    if (Number.isInteger(firstNumber) != true || Number.isInteger(secondNumber) != true) {
        return "ERROR";
    }
    else if (firstNumber < 0 || secondNumber < 0) {
        return "ERROR";
    }
    else if (firstNumber < secondNumber) {
        for (let i = firstNumber; i <= secondNumber; i++) {
            sum = sum + i;
        }
    }
    else if (firstNumber > secondNumber) {
        for (let i = secondNumber; i <= firstNumber; i++) {
            sum = sum + i;
        }
    }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
