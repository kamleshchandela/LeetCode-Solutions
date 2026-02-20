/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {
    var n = num ;
    var temp = 0 ;
    while(n >= 1){
        temp = temp * 10 + n % 10 ;
        n = parseInt(n / 10) ; 
    }
    if(temp >= num){
        return true ;
    }
    return false ;
};