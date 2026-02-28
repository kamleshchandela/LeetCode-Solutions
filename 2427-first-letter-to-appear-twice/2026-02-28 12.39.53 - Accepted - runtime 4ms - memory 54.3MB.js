/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    
    let index = s.length ;
    let result = "" ;
    for(let i = 0 ; i < s.length ; i++){
        for(let j = i + 1 ; j < s.length ; j++ ){
            if(s[i] == s[j] && i != j){
                if(j < index){
                    index = j ;
                    result = s[i] ;
                }
            }
        }
    }
    return result ;
};