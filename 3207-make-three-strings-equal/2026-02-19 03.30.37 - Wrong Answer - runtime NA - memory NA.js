/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {number}
 */
var findMinimumOperations = function(s1, s2, s3) {
    var count = 0 ; 
    var l = 0 ;
    if(s1.length < s2.length && s1.length < s3.length){
        l = s1.length ;
    }
    else if(s2.length < s1.length && s2.length < s3.length){
        l = s2.length ;
    }
    else{
        l = s3.length ;
    }
    for(let i = 0 ; i < l ; i++){
        if(s1[i] == s2[i] && s2[i] == s3[i]){
            count ++ ;
        }
        else{
            break ;
        }
    }
    if(count == 0){
        return -1 ;
    }
    return count ;
};