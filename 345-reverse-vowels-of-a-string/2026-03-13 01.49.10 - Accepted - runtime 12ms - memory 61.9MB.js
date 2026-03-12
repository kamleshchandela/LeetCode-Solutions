/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = [] ;
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U"){
            arr.push(s[i]) ;
        }
    }
    let count = 0 ; 
    let str = "" ;
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u" || s[i] == "A" || s[i] == "E" || s[i] == "I" || s[i] == "O" || s[i] == "U"){
            str = str + arr[arr.length - 1 - count] ;
            count ++ ;
        }
        else{
            str = str + s[i] ;
        }
    }
    return str ;
    

};