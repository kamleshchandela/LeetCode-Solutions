/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    if(words.length == s.length){
        for(let i = 0 ; i < words.length ; i++){
            if(words[i][0]!==s[i]){
                return false ;
            }
        }
    }
    else{
        return false ;
    }
    return true ; 
};