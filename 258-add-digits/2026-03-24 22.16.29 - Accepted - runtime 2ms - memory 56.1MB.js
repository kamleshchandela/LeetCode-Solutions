/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let check = true ;
    while(check){
        let temp = 0 ; 
        while(num>=1){
            temp = temp + num % 10 ; 
            num = parseInt(num / 10) ;
        }
        if(temp > 9){
            num = temp ;
            check = true ;
        }
        else {
            check = false ;
            return temp ;
        }
    }
};