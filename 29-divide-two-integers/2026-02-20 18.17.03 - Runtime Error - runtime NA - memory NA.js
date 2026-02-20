/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if(dividend == INT_MIN && divisor == -1) return INT_MAX;
    if(dividend == INT_MIN && divisor == 1) return INT_MIN;
    return int(dividend / divisor) ;
};