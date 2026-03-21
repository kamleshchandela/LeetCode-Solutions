/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    if(s.length == 1 || s.length == 2) return 1 ;
    for(let i = 0 ; i < s.length - 1 ; i++){
        if(s[i] == "0"){
            for(let j = 0 ; j < s.length - 1 ; j++){
                if(s[j] == "0" && s[j+1] != "0"){
                    for(let k = 0 ; k < s.length - 1 ; k++){
                        if (s[k] == "1" && s[k + 1] != "1"){
                            return false ;
                        }
                    }
                    return true ;
                }
            }
        }
        else{
            for(let j = 0 ; j < s.length - 1 ; j++){
                if(s[j] == "1" && s[j+1] != "1"){
                    for(let k = 0 ; k < s.length - 1 ; k++){
                        if (s[k] == "0" && s[k + 1] != "0"){
                            return false ;
                        }
                    }
                    return true ;
                }
            }
        }
        
    }
    return false ;
};