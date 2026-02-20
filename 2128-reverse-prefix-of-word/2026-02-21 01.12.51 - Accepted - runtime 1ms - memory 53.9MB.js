/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    var count = 0 ;
    for(let i = 0 ; i < word.length ; i++){
        if(word[i] == ch){
            count = i ;
            break ;
        }
    }
    var s = "" ;
    for(let i = count ; i >= 0 ; i --){
        s = s + word[i] ;
    }
    for(let i = count + 1 ; i < word.length ; i++){
        s = s + word[i] ;
    }
    return s ;
};