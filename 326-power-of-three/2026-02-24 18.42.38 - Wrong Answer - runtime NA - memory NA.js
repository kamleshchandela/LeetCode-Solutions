/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n < 2) return false ;
    for(let i = 2 ; i < n ; i ++){
        if(n**1/3 == i){
            return true ;
        }
    }
    return false;
};