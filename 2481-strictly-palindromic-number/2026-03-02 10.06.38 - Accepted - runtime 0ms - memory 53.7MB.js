/**
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function(n) {
    let num = Number(n.toString(2)) ;
    let temp = 0 ;
    while(num>=1){
        temp = temp * 10 + num % 10 ;
        num = parseInt(num / 10) ;
    }
    if(num == n.toString(2)){
        return true ;
    }
    return false ;

};