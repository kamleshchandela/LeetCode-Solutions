/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i = 0 ;
    var temp = 0 ; 
    while(i < digits.length){
        temp = temp * 10 + digits[i] ;
        i++ ;
    }
    var dig = temp + 1 ;
    var arr = [] ;
    var n = dig ;
    var i = 0 ;
    while (n>=1){
        arr[i] = n % 10 ;
        n = parseInt(n / 10) ;
        i ++ ;
    }
    var ans = [] ;
    for(let i = 0 ; i < arr.length ; i++){
        ans[i] = arr[arr.length - 1 - i] ;
    }
    return ans ;

    
};