/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let check = true ;
    if(word[0].toUpperCase() == word[0]){
    for(let i = 1 ; i < word.length ; i++){
        if(word[i].toUpperCase() == word[i]){
            check = true ;
        }
        else{
            check = false ;
            break ;
        }
    }
    if(check) return true ;
    else{
        for(let i = 1 ; i < word.length ; i++){
        if(word[i].toLowerCase() == word[i]){
            check = true ;
        }
        else{
            check = false ;
            break ;
        }
    }
    if(check) return true ;
    return false ;
    }
    }
    else{
        for(let i = 0 ; i < word.length ; i++){
            if(word[i].toLowerCase() != word[i]){
                return false ;
            }
        }
        return true ;
    }
};