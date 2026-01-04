/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var count = 0 ; 
    for(let i = s.length - 1  ; i >= 0 ; i--){
        
        if(s.length == 1 && s[0] != " "){
            return 1 ;
        }
        if(s[i] != " "){
            count ++ ;
        }
        else idf (i == 0){
            return count ;
        }
        else if (count > 0){
            // console.log(count) ;
            return count ;
            
        }

    }
};