/**
 * @param {number} num
 * @return {boolean}
 */
var isSameAfterReversals = function(num) {

    
    var n1 = num ;
    var temp1 = 0 ;
    var temp2 = 0 ;
    while(n1 >= 1){
        temp1 = temp1 * 10 + n1 % 10 ;
        n1 = parseInt(n1 / 10) ; 
    }
    while(temp1 >= 1){
        temp2 = temp2 * 10 + temp1 % 10 ;
        temp1 = parseInt(temp1 / 10) ; 
    }
    if(temp2 == num){
        return true ;
    }
    return false ;




}
    