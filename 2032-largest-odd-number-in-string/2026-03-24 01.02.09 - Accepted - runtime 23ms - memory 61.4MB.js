/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let s = "" ;
    let max = "" ;
    for(let i = 0 ; i < num.length ; i++){
        s = s + num[i] ;
        if(num[i]%2==1){
            if(max.length<s.length){
                max = s ;
            }
        }
    }
    return max ;
        
};