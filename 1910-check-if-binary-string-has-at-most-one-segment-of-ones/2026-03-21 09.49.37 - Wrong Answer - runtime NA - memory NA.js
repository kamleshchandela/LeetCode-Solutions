/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    for(let i = 0 ; i < s.length - 1 ; i++){
        if(s[i] == [1] && s[i+1] == "1"){
            return true ;
        }
    }
    return false ;
};