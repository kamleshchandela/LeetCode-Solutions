/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n < 2) return false ;
    for(let i = 2 ; i < n ; i ++){
        if(i**3 == n){
            return true ;
        }
    }
    return false;
};