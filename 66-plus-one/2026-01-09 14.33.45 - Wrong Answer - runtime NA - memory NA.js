/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {


    var check = 1 ; 
    for(let i = 0 ; i < digits.length ; i++){
        if(digits[i] != 9){
            console.log(1)
            check = 0 ;
            break ;
        }
    }
    var l = digits.length ;
    if(check == 1){
        for(let k = 0 ; k <= l ; k++){
            if(k==0){
                console.log(k)
                digits[k] = 1 ;
            }
            else{
                digits[k] = 0 ; 
            }
            
        }
        
        return digits ;
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