const reverseString = function (word) {
    let revWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
        revWord += word.charAt(i);
    }
    return revWord;
};

// Do not edit below this line
module.exports = reverseString;
