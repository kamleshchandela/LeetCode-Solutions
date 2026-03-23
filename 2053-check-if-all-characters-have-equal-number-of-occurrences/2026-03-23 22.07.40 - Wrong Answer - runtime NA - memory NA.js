/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function(s) {
    let obj = {} ;
    for(let i = 0 ; i < s.length ; i++){
        if(!obj[s[i]]){
            obj[s[i]] = 1 ;
        }
        else{
            obj[s[i]] += 1 ;
        }
    }
    for(let i in obj){
        if(obj[i] % 2 == 1){
            return false ;
        }
    }
    return true ;
};