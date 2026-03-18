/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let arr1 = [
        1000 , 900 , 500 , 400 , 100 , 90 , 50 , 40 , 10 , 9 , 5 , 4 , 1
    ] ;
    let arr2 = [
        "M" , "CM" , "D" , "CD" , "C" , "xc" , "L" , "XL" , "X" , "IX" , "V" , "IV" , "I"  
    ] ;
    let n = 0 ;
    let i = 0 ; 
    let s = "" ; 
    while(n < num){
        for(let i = 0 ; i < arr1.length ; i++){
            if(num > arr1[i]){
                n = n + arr1[i] ;
                num = num - n ;
                s = s + arr2[i] ;
                break ;
            } 
        }
    }
    return s ;
};