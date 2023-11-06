const fibonacci = function(n) {
    let arrFib = [0, 1, 1];

    for (let i = 2; i < n; i++) {
        arrFib[i + 1] = arrFib[i] + arrFib[i-1];
    }

    return arrFib.pop();
};

// Do not edit below this line
module.exports = fibonacci;
