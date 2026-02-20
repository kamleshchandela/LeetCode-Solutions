/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    var num = n.toString(2) ;
    var count = 0 ;
    for(let i = 0 ; i < num.length ; i++){
        if(num[i] == 1){
            count ++ ;
        }
    }
    return count ;
};