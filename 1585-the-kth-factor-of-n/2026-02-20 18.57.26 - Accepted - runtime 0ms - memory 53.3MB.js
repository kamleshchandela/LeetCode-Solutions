/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    var arr = [] ;
    var j = 0 ;
    for(let i = 0 ; i <= n ; i++){
        if(n % i == 0){
            arr[j] = i ;
            j++ ;
        }
    }
    if(k > arr.length){
        return -1 ;
    }
    return arr[k - 1] ;
};