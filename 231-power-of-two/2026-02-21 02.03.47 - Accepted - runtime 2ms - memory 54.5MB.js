/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    for(let i = 0 ; i < 2 ** 31 ; i ++){
        if(n == 2 ** i){
            return true ;
        }
        if(2 ** i > n){
            return false ;
        }
    }
    return false ;
};