const sumAll = function(startNum, endNum) {
    let sum = 0;

    if (startNum < 0 || endNum < 0 || typeof startNum !== 'number' || typeof endNum !== 'number') {
        return 'ERROR';
    }

    if (startNum > endNum) {
        let temp = startNum;
        startNum = endNum;
        endNum = temp;
    }

    for (let i = startNum; i <= endNum; i++) {
        sum += i; 
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
