/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    var str = "" ;
    for(let i = 0 ; i < s.length ; i++ ){
        if(s[i] >= "A" && s[i] <= "Z" || s[i] >= "a" && s[i] <= "z" || s[i] >= "0" && s[i] <= "9"){
        if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
            let a = s.charCodeAt(i) + 32 ;
            str = str + String.fromCharCode(a) ;
        }
        else{
            str = str + s[i] ;
        }
        }

    }
    if(str.length == 1) return true ;
    for(let i = 0 ; i < parseInt(s.length / 2) ; i++){
        if(str[i] != str[str.length - 1 - i]){
            return false ;
        }
    }
    return true ;
};