const sumAll = function (bound1, bound2) {
    if (
        typeof bound1 != "number" ||
        typeof bound2 != "number" ||
        bound1 < 0 ||
        bound2 < 0
    ) {
        return "ERROR";
    }
    if (bound1 > bound2) {
        let temp = bound1;
        bound1 = bound2;
        bound2 = temp;
    }
    let sum = 0;
    for (let i = bound1; i <= bound2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
