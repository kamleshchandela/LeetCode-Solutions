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
    let l = s1.length ;
    if(s1[l - 1] != s2[l - 1]){
        if(!((s1[l - 1] != s2[l - 1]) && (s1[l - 3] != s2[l - 3]))){
            return false ;
        }
    }
    if(s1[l - 2] != s2[l - 2]){
        if(!((s1[l - 2] != s2[l - 2]) && (s1[l - 4] != s2[l - 4]))){
            return false ;
        }
    }
    
    return true ;
};