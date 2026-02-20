/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    var obj = {} ;
    var str = "abcdefghijklmnopqrstuvwxyz" ;
    for(let i = 0 ; i < str.length ; i++){
        obj[str[str.length - 1 - i]] = i + 1 ;
    }
    var sum = 0 ; 
    for(let i = 0 ; i < s.length ; i++){
        sum = sum + obj[s[i]] * (i + 1) ;
    }
    return sum ;
};