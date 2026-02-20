/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    var arr = s ;
    for (let i = 0 ; i < s.length ; i++){
        s[i] = arr[s.length - 1 - i]
    }
    return s ;
};