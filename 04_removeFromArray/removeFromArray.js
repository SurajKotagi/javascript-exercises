const removeFromArray = function () {
    let originalArr = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        let elmnt = arguments[i];
        originalArr = originalArr.filter((i) => i !== elmnt);
    }
    return originalArr;
};

// Do not edit below this line
module.exports = removeFromArray;
