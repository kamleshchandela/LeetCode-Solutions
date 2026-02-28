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
    for(let i = 0 ; i < s.length ; i++){
        for(let j = 0 ; j < s.length ; j++ ){
            if(s[i] == s[j] && i != j){
                return s[i] ;
            }
        }
    }
};