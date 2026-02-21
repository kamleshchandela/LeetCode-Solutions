/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    var f1 = 0 ; 
    var f2 = 1 ;
    var f3 = 0 ;
    for(let i = 1 ; i < n ; i++){
        f3 = f1 + f2 ;
        f1 = f2 ; 
        f2 = f3 ;
    }
    return f3 ;
};