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
    if(num[num.length - 1] == "0" && num[num.length - 2] != 0){
        for(let i = 0 ; i < num.length - 1 ; i++){
            str = str + num[i] ;
        }
        return str ;
    }
    for(let i = 0 ; i < num.length - count ; i++){
        str = str + num[i] ; 
    }
    return (str) ;
};