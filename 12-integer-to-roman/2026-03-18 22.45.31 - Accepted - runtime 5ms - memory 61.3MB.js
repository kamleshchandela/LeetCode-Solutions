/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let arr1 = [
        1000 , 900 , 500 , 400 , 100 , 90 , 50 , 40 , 10 , 9 , 5 , 4 , 1
    ] ;
    let arr2 = [
        "M" , "CM" , "D" , "CD" , "C" , "XC" , "L" , "XL" , "X" , "IX" , "V" , "IV" , "I"  
    ] ;
    let i = 0 ; 
    let s = "" ; 
    
        for(let i = 0 ; i < arr1.length ; i++){
            while(num + 1 > arr1[i]){
                    num = num - arr1[i] ;
                    s = s + arr2[i] ;
            }
        }
    return s ;
};