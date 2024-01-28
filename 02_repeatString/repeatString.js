const repeatString = function(stringToRepeat, number) {
    let repeatedString = ""; 

    if (number < 0) {
        return "ERROR";
    } else if (number === 0) {
        return repeatedString;
    } else {
        for (let i = 0; i < number; i++) {
            repeatedString += stringToRepeat;
        }
    }

    return repeatedString;
};  

// Do not edit below this line
module.exports = repeatString;
