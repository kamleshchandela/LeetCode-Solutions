/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    var num = n ;
    var temp = 0 ;
    while(num >= 1){
        temp = temp * 10 + num % 10 ;
        num = parseInt(num /10) ;
    }
    var a = temp - n ;
    if(temp - n > 0){
        return a ;
    } 
    return a * (-1) ;
};