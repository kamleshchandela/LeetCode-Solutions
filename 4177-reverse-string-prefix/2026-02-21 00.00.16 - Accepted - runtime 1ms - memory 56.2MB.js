/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reversePrefix = function(s, k) {
    var str = "" ;
    for(let i = k - 1 ; i >= 0 ; i --){
        str = str + s[i] ;
    }
    for(let i = k ; i < s.length ; i++){
        str = str + s[i] ;
    }
    return str ;
};