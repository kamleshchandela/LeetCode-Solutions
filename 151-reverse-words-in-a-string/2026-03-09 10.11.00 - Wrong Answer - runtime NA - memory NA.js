/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let str = "" ;
    for(let i = s.length - 1 ; i >= 0 ; i--){
        if(s[i] == " "){
            let j = i + 1 ;
            
            while(s[j] != " " && s[j] != undefined){
                str = str + s[j] ;
                j ++ ;
            }
            if(i > 0 && s[i+1] !== " " && s[i-1] !== " " || (s[i + 1] == " " && s[i - 1] == " ")){
                str = str + " " ;
            }
            
        }
        if(i == 0 && s[i] != " "){
            let j = i ;
            while(s[j] != " " && s[j] != undefined){
                str = str + s[j] ;
                j ++ ;
            }
        }
    }
    return str ;
};