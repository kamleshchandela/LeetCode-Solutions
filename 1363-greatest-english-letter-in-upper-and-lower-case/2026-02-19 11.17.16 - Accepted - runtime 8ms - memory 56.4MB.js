/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    for(let i = 90 ; i >= 65 ; i--){
        for(let j = 0 ; j < s.length ; j++){
            if(s.charCodeAt(j) == i){
                for(let k = 0 ; k < s.length ; k ++){
                    if(s.charCodeAt(k) == i + 32){
                        return s[j] ;
                    }
                }
            }
            
        }
    }
    return "" ;
};