"use strict";

var searching = require("./searching.js");
var util = require("util");

function timeTrial(n) {
    let testArray = [];

    // generates an array with random elements
    for (let i = 0; i < n; i++) {
        testArray[i] = i;
    }

    // element to find
    let randomIndex = Math.floor((Math.random() * testArray.length - 1));
    let valueToFind = testArray[randomIndex];

    // measuring execution time
    var hrstart = process.hrtime();
    searching.binarySearch(valueToFind, testArray)
    var hrend = process.hrtime(hrstart);

    return hrend[1];
}

module.exports = function () {
    let prevHrtime = timeTrial(125);
    let prevRatio = 0;
    let nextSize = 0;

    for (let n = 250; true; n += n) {
        let currentHrtime = timeTrial(n);

        let ratio = prevHrtime === 0 ? 0 : Number((currentHrtime / prevHrtime).toFixed(1));
        let results = util.format("N=%d TIME=%d RATIO=%d", n, currentHrtime, ratio);

        console.log(results);

        prevHrtime = currentHrtime;

        if (ratio != 0 && ratio === prevRatio){
            prevRatio = ratio;
            nextSize = n + n;
            break;    
        }
        
        prevRatio = ratio;
    }

    var expected = nextSize * prevRatio;
    console.log("\nExpected for %d = %d", nextSize, expected);
    
    var realNext = timeTrial(nextSize);
    console.log("\nReal for %d = %d", nextSize, realNext);
}