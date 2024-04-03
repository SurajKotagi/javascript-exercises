const getTheTitles = function (arr) {
    let titles = [];
    arr.forEach((item) => {
        titles.push(item["title"]);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
