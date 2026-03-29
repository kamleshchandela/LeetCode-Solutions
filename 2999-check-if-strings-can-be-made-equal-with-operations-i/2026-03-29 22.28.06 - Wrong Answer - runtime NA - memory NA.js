/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let count = 0 ; 
    for(let i = 0 ; i < s1.length ; i++){
        if(s1[i] != s2[i]){
            count ++ ;
        }
    }
    if(count%2==0){
        return true ;
    }
    return false ; 
};