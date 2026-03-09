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
            if(i > 0 && s[i-1] !== " " && i < s.length - 2){
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
    let s1 = "" ;
    if(str[0] == " "){
        
        for(let i = 1 ; i < str.length ; i++){
            s1 = s1 + str[i] ;
        }
        return s1 ;
    }
    return str ; ;
};