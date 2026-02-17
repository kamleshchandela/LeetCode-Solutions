/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    var arr = [] ;
    for(let i = 0 ; i < n ; i++){
        arr[i] = start + 2 * i ;
    }
    var ans = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        ans = ans ^ arr[i] ;
    }
    return ans ;
};