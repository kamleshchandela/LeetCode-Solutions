/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let count = 0 ; 
    for(let i = num.length - 1 ; i >= 0 ; i--){
        if(num[i] == "0" && num[i-1] == "0"){
            count++ ;
        }
        else{
            break ;
        }
    }
    if(count > 0){
        count ++ ;
    }
    let str = "" ;
    for(let i = 0 ; i < num.length - count ; i++){
        str = str + num[i] ; 
    }
    return (str) ;
};