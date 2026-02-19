/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    for(let i = 0 ; i < s.length ; i++){
        for(let j = 0 ; j < s.length ; j++ ){
            if(s.charCodeAt(i) + 32 == s.charCodeAt(j) && (i == j + 1 || i == j - 1 )){
                return s[i] ;
            }
            else if (s.charCodeAt(i) - 32 == s.charCodeAt(j) && (i == j + 1 || i == j - 1 )){
                return s[j] ;
            }
        }
        
    }

    return "" ;
};