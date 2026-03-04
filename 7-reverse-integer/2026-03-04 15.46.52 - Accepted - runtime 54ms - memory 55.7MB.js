/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let temp = 0 ;
    let check = false ;
    if(x < 0){
        x = -x ;
        check = true ;
    }
    while(x>=1){
        temp = temp * 10 + x % 10 ;
        x = parseInt(x / 10) ;
    }
    if(temp >= 2147483647 || temp <= -2147483647){
        return 0 ;
    }
    if(check) {
        return -temp ;
    }
    return temp ;
};