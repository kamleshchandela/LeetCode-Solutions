/**
 * @param {string} s
 * @return {number}
 */
var maxDistinct = function(s) {
    var obj = {} ;
    var count = 0 ;
    for(let i = 0 ; i < s.length ; i++){
        if(!obj[s[i]]){
            obj[s[i]] = 1 ;
            count ++ ;
        }
    }
    return count ;
};