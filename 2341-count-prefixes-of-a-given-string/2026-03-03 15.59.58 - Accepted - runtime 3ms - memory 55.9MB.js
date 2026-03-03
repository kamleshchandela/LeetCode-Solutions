/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let count = 0 ;
    for(let i = 0 ; i < words.length ; i++){
        let check = true ;
        for(let j = 0 ; j < words[i].length ; j++){
            if(words[i][j] != s[j]){
                check = false ;
            }
        }
        if(check){
            count ++ ;
        }
    }
    return count ;
};