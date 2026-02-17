/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    var mul = 1 ;
    var sum = 0 ;
    while (n>=1){
        var temp = n % 10 ;
        sum = sum + temp ;
        mul = mul * temp ;

        n = parseInt(n / 10) ;
    }
    return mul - sum ;
};