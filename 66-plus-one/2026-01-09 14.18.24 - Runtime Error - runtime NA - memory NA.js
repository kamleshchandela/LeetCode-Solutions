/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


    var check = 1 ; 
    for(let i = 0 ; i < digits.length ; i++){
        if(digits[i] != 9){
            check = 0 ;
            break ;
        }
    }
    if(check == 1){
        for(let i = 0 ; i <= digits.length ; i++){
            if(i==0){
                digits[i] = 1 ;
            }
            else{
                digits[i] = 0 ; 
            }
            
        }
    }





    if(digits[digits.length - 1 ] != 9){
        digits[digits.length - 1 ] = digits[digits.length - 1 ] + 1 ;
    }
    else {
        digits[digits.length - 1 ] = 1 ;
        digits[digits.length ] = 0 ;
    }
    return digits ;
};