/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let count = 0 ; 
    for(let i = 0 ; i < s1.length - 2 ; i++){
        if(s1[i] != s2[i]){
            if(s1[i+2] != s2[i+2]){
            count ++ ;
            }
            else{
                return false ;
            }
        }
    }
    if(count%2==0){
        return true ;
    }
    return false ; 
};