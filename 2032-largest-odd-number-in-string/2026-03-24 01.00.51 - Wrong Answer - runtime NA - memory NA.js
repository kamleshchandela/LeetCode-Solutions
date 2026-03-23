/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {
    let s = "" ;
    let max = "" ;
    for(let i = 0 ; i < num.length ; i++){
        s = s + num[i] ;
        if(Number(s)%2==1){
            if(max<Number(s)){
                max = s ;
            }
        }
    }
    return max ;
        
};