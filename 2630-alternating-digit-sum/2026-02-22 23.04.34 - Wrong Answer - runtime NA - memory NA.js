/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    var sum1 = 0 ;
    var sum2 = 0 ;
    var check = true ;
    while (n >= 1){
        if(check){
            sum1 = sum1 + n % 10 ;
            check = false ;
        }
        else{
            sum2 = sum2 + n % 10 ;
            check = true ;
        }

        n = parseInt(n / 10) ;
        
    }
    if(sum1 - sum2 < 0) return -(sum1 - sum2) ;
    return sum1 - sum2 ;
};