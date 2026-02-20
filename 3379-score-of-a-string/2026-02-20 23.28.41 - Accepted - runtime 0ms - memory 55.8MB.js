/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    var sum = 0 ; 
    for(let i = 0 ; i < s.length - 1 ; i ++){
        var a = s.charCodeAt(i) - s.charCodeAt(i + 1) ;
        if(a > 0){
            sum = sum + a ;
        }
        else{
            sum = sum + a * (-1) ;
        }
    }
    return sum ;
};