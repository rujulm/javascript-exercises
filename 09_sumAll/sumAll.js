const sumAll = function(a, b) {
    if (!Number.isInteger(a) || // parseInt(String(a))!==a
        !Number.isInteger(b) || // parseInt(String(b))!==b
        a < 0 || 
        b < 0) {
        return 'ERROR';
    }
    let sum = 0;
    let num1 = Math.min(a,b); //a<b ? a : b
    let num2 = Math.max(a,b); //a<b ? b : a
    for (let i = num1; i <= num2; i++) {
        sum += i;
    } 
    return sum;
};
// Do not edit below this line
module.exports = sumAll;
