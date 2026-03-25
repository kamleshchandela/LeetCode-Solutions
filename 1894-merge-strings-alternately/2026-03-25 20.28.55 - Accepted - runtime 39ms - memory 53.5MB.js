/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let i = 0 ; 
    let j = 0 ; 
    let k = 0 ;
    check = true ;
    let s = "" ;
    while(k < word1.length + word2.length - 1){
        if(i<word1.length && check == true){
            s = s + word1[i] ;
            i ++ ;
            check = false ; 
        }
        else if(j<word2.length && check == false){
            s = s + word2[j] ;
            j ++ ;
            check = true ; 
        }
        if(i==word1.length || j==word2.length){
            break ;
        }
        k++ ;
    }
    if(i==word1.length){
        for(let l = j ; l < word2.length ; l++){
            s = s + word2[j] ;
            j++ ;
        }
    }
    if(j==word2.length){
        for(let l = i ; l < word1.length ; l++){ 
            s = s + word1[i] ; 
            i++ ; 
        }
    }
    return s ;
};