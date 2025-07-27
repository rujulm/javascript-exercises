/*
const removeFromArray = function(arr, num) {
    const count = arguments.length

    for (let i=1; i<count; i++) {
        do {
            let index = arr.indexOf(arguments[i]);
            if (index >= 0) {
                arr.splice(index, 1);
            } 
        } while (arr.includes(arguments[i]));
    }
    return arr;
};
*/

const removeFromArray = function(arr, ...args) {
    return arr.filter(item => !args.includes(item) );
};
// Do not edit below this line
module.exports = removeFromArray;
