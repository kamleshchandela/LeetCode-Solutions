/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
   for(let i = 0 ; i < haystack.length ; i++){
         var check = 1 ;
        for(let j = 0 ; j < needle.length ; j++){
            if(haystack[i + j] != needle[j]){
                check = 0 ;
            }
            
        }
        if(check == 1){
            // console.log(i) ;
            return i ;
            break ;
        }
    } 
    if(check == 0){
        return -1 ;
    }
};