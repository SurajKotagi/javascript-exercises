const findTheOldest = function (arr) {
    let maxAge = 0;
    let maxAgePersonItem;
    let minUndefinedItemBirthYear = 20000;
    let undefinedDeathItem;
    let maxDeathYear = 0;
    arr.forEach((item) => {
        if (typeof item.yearOfBirth == "number") {
            if (typeof item.yearOfDeath == "undefined") {
                if (minUndefinedItemBirthYear > item.yearOfBirth) {
                    minUndefinedItemBirthYear = item.yearOfBirth;
                    undefinedDeathItem = item;
                }
            } else {
                let curPerson = item["name"];
                let curPersonAge = item["yearOfDeath"] - item["yearOfBirth"];
                if (curPersonAge > maxAge) {
                    maxAge = curPersonAge;
                    maxAgePersonItem = item;
                }
                maxDeathYear = Math.max(maxDeathYear, item.yearOfDeath);
            }
        }
    });
    if (maxDeathYear - minUndefinedItemBirthYear > maxAge) {
        return undefinedDeathItem;
    }
    return maxAgePersonItem;
};

// Do not edit below this line
module.exports = findTheOldest;
