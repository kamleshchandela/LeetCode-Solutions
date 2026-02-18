/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    var f1 = 0 ;
    var f2 = 1 ;
    var f3 = 0 ;
    for(let i = 0 ; i < n ; i++){
        f3 = f1 + f2 ;
        f1 = f2 ;
        f2 = f3 ;
    }
    return f3 ;
};