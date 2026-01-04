/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var count = 0 ; 
    for(let i = s.length - 1  ; i > 0 ; i--){
        
        if(s[i] != " "){
            count ++ ;
        }
        else if (count > 0 || s[i] == undefined || s[i] == " " ){
            // console.log(count) ;
            return count ;
            
        }
    }
};