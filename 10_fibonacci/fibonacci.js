const fibonacci = function(n) {
    let arrFib = [0, 1, 1];

    if (Number.isInteger(+n) != true || n < 0) return "OOPS";

    for (let i = 2; i < n; i++) {
        //next array element is the sum of the last two numbers in the array
        arrFib[i + 1] = arrFib[i] + arrFib[i-1];
    }

    return arrFib.pop();
};

// Do not edit below this line
module.exports = fibonacci;
