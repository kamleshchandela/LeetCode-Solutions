/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    var n = num ;
    var count = 0 ;
    while (n >= 1){
        var temp = n % 10 ;
        if(num % temp == 0){
            count ++ ;
        }
        n = parseInt(n / 10) ;
    }
    return count ;
};