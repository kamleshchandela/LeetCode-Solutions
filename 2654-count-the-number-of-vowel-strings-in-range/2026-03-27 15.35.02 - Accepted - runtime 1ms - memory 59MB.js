/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let count = 0 ; 
    for(let i = left ; i <= right ; i++){
        let l = words[i].length - 1 ;
        if((words[i][0] == 'a' || words[i][0] == 'e' || words[i][0] == 'i' || words[i][0] == 'o' || words[i][0] == 'u') && (words[i][l] == 'a' || words[i][l] == 'e' || words[i][l] == 'i' || words[i][l] == 'o' || words[i][l] == 'u')){
            count ++ ;
        }
    }
    return count ;
};