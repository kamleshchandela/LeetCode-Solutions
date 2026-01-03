/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var num = 0 ;
    var ans = x ;
    while(x >= 1){
        var temp = x % 10 ;
        num = num * 10 + temp ;
        x = parseInt(x / 10) ;
        console.log(num)
    }
    if(num == ans){
        return true ;
    }
    else{
        return false ;

    }
};