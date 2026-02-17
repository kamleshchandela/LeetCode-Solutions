/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    var arr = [] ;
    var k = 0 ; 
    for(let i = 0 ; i < words.length ; i++){
        for(let j = 0 ; j < words[i].length ; j++){
            if(words[i][j] == x){
                arr[k] = i ;
                k++ ;
                break ;
            }
        }
    }
    return arr ;
};