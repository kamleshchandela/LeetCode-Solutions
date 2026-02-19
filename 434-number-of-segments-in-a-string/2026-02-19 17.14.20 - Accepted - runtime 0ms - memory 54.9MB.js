/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    var count = 0 ; 
    for(let i = 0 ; i < s.length ; i++){
        if(s[i] != " " && i == 0){
            count ++ ;
        }
        else if (s[i] == " " && s[i + 1] != " " && i + 1 != s.length){
            count ++ ;
        }


    }
    return count ;
};