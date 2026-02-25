/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    var sum = 0 ;
    var mul = 1 ; 
    var num = n ;
    while(num >= 1){
        sum = sum + num % 10 ;
        mul = mul * (num % 10) ;
        num = parseInt(num / 10) ;
    }
    if(n % (sum + mul) == 0){
        return true ;
    }
    return false ;
};