/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // if(s.length == t.length){
        for(let i = 0 ; i < s.length ; i ++){
            var check = true ;
            for(let j = 0 ; j < s.length ; j ++){
                if(s[i] == t[j]){
                    check = false ;
                    break ;
                }
            }
            if(check){
                return false ;
            }
        }
        return true ;
    // }
    
};