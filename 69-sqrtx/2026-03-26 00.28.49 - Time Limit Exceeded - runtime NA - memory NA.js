/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x==1)return 1 ;
    for(let i = Math.floor(x/2) ; i >= 0 ; i--){
        if(x >= i * i){
            return i ;
        }
    }
};