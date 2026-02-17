/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0 ; i < words.length ; i++){
        var check = true ;
        for(let j = 0 ;  j < words[i].length ; j++){
            if(words[i][j] != words[i][words[i].length - 1 - j]){
                check = false ;
                break ;
            }
        }
        if(check){
            return words[i] ;
        }
    }
        return "" ;
    
};