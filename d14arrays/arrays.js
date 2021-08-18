"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {maxOfThree, sum, multiply, generateArray }; //add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c){ 
    return c;
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr){
    let tot = 0;
    for (const number of arr){
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function multiply(arr){
    let tot = 1;

    return tot;

}

/**
 * 
 * @param {number} rows is number of rows
 * @param {number} cols is number of cols
 * @returns {Array} 2-d array
 */
function generateArray(rows, cols){
    let newArray = [];
    for (let i = 0; i < rows; i++) {
        newArray.push([]);
        for (let j = 0; j < cols; j++){
            // const rowNumber = i + 1;
            // cpmst colNumber = j + 1;
            newArray[i][j] = 1 + (i * cols) + j;
        }
    }
    return newArray;
}