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
    let check = obj[s[0]] ; 
    for(let i in obj){
        if(obj[i] != check){
            return false ;
        }
    }
    return true ;
};