/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let obj = {
        "(" : ")" ,
        "[" : "]" ,
        "{" : "}" ,
    } ;
    let arr = [] ;
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] == "(" || s[i] == "[" || s[i] == "{"){
            arr.push(s[i]) ;
        }
        else{
            if(s[i] == ")" && arr.pop() != "("){
                return false ;
            }
            else if(s[i] == "]" && arr.pop() != "["){
                return false ;
            }
            else if(s[i] == "}" && arr.pop() != "{"){
                return false ;
            }
        }
    }
    return arr.length === 0 ;
    
};