/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n == 0){
        return true ;
    }
    if(n == 1){
        return true ;
    }
    for(let i = 2 ; i <= n / 2 ; i++){
        if(n == i ** 4){
            return true ;
        }
    }
    return false ;
};