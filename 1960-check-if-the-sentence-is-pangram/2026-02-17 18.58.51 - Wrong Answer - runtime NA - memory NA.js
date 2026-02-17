/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    var s = "abcdefghijklmnopqrstuvwxyz" ;
    var obj = {} ;

    for(let i = 0 ; i < sentence.length ; i ++){
        if(!obj[sentence[i]]){
            obj[sentence[i]] = sentence[i] ;
        }
    }

    var check = true ;
    for(let j = 0 ; j < s.length ; j++){
    for(let i in obj){
        check = true ;
        
            
            if(i == s[j]){
                check = false ;
                continue ;
            }
        
        
        
    }

    if(check){
            return false ;
        }
    }
    return true ;
};