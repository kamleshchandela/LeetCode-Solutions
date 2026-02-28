/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    for(let i = 0 ; i < s.length - 1 ; i++){
        if(s[i] == s[i + 1]){
            return s[i] ;
        }
    }
};