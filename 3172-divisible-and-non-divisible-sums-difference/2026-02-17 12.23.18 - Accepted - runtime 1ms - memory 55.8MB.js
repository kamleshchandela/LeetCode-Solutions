/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    var sum1 = 0 ;
    var sum2 = 0 ;
    for (let i = 1 ; i <= n ; i++){
        if(i % m != 0){
            sum1 = sum1 + i ;
        }
        else{
            sum2 = sum2 + i ;
        }
        
    }
    return sum1 - sum2 ;
};