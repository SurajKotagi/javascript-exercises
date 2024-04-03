const palindromes = function (word) {
    word = word.toLowerCase();
    let strArr = word.split("");
    let newStrArr = [];
    strArr.forEach((item) => {
        if ((item >= "a" && item <= "z") || (item >= "0" && item <= "9"))
            newStrArr.push(item);
    });
    word = newStrArr.join("");
    let start = 0;
    let end = word.length - 1;
    // if (word.charAt(end) == "!") end--;
    while (start < end) {
        if (word.charAt(start) != word.charAt(end)) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
