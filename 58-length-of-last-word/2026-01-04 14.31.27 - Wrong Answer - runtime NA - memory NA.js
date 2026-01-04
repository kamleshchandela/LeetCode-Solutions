/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var count = 0 ;
    var max = 0 ; 
    for(let i = 0 ; i < s.length ; i++){
        
        if(s[i] != " "){
            count ++ ;
        }
        else{
            count = 0 ;
        }
        if(max < count){
            max  = count ;
            // console.log(max) ;
            
        }
    }
    return max ;
};