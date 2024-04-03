const repeatString = function (word, n) {
    if (n < 0) return "ERROR";
    let wordsNTimes = "";
    for (let i = 0; i < n; i++) {
        wordsNTimes += word;
    }
    return wordsNTimes;
};

// Do not edit below this line
module.exports = repeatString;
