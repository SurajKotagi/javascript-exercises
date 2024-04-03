const add = function (var1, var2) {
    return var1 + var2;
};

const subtract = function (var1, var2) {
    return var1 - var2;
};

const sum = function (arr) {
    let sum = 0;
    arr.forEach((item) => {
        sum += item;
    });
    return sum;
};

const multiply = function (arr) {
    let mul = 1;
    arr.forEach((item) => {
        mul *= item;
    });
    return mul;
};

const power = function (n, raiseTo) {
    return Math.pow(n, raiseTo);
};

const factorial = function (n) {
    if (n == 0 || n == 1) return 1;
    return factorial(n - 1) * n;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
