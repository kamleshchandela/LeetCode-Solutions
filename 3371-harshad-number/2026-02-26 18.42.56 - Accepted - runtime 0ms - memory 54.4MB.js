/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let temp = 0 ; 
    let num = x ;
    while(x>=1){
        temp = x % 10 + temp ;
        x = parseInt(x / 10) ;
    }
    if(num % temp == 0){
        return temp ;
    }
    return -1 ;
};