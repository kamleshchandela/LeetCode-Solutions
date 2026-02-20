/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    
    for(let i = 0 ; i < 4 ** 31 ; i ++){
        if(n == 4 ** i){
            return true ;
        }
        if(4 ** i > n){
            return false ;
        }
    }
};