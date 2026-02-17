/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    var ans = "" ;
    for(let i = 0 ; i < s.length ; i++){
        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
            var value = s.charCodeAt(i) + 32 ; 
            ans = ans + String.fromCharCode(value) ; 
        }
        else{
            ans = ans + s[i] ; 
        }
    }
    return ans ;
};