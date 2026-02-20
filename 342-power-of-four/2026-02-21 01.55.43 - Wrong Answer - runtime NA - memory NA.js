/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n == 0){
        return false ;
    }
    if(n == 1){
        return true ;
    }
    for(let i = 2 ; i <= n / 2 ; i++){
        if(n == 4 ** i){
            return true ;
        }
    }
    return false ;
};