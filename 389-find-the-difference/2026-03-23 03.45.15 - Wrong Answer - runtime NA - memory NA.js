/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    for(let i = 0 ; i < t.length ; i++){
        let check = true ;
        for(let j = 0 ; j < s.length ; j++){
            if(t[i] == s[j]){
                check = false ;
                break ;
            }
        }
        if(check){
            return t[i] ;
        }
    }
};