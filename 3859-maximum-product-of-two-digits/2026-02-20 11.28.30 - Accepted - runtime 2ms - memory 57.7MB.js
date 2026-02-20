/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    var arr = [] ; 
    var count = 0 ; 
    while(n >= 1){
        var temp = n % 10 ;
        arr[count] = temp ;
        count++ ;
        n = parseInt(n / 10) ;
    }
    var max = -Infinity ;
    for(let i = 0 ; i < arr.length ; i ++){
        for(let j = 0 ; j < arr.length ; j ++){
            if(max < (arr[i] * arr[j]) && i != j) {
                max = arr[i] * arr[j] ;
            }
        }
    }
    return max ;
};