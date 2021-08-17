"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
module.exports = {double, times100, myMap }; //add all of your function names here that you need for the node mocha tests

/**
 * @param {number} num is any number
 * @returns {number} double the input
 */
 function double(num){
    return 2 * num;
}


/**
 * @param {number} num is any number
 * @returns {number} 100 times the input
 */
 function times100(num){
     return 100 * num;
 }


/**
 * @param {Array} arr is any array
 * @param {Function} func is any function
 * @returns {Array} creates a new array with function mapped to each element
 */
function myMap(arr, func){
    const newArr = [];
    for (let element of arr){
        newArr.push(func(element));
    }
    return newArr;
}



