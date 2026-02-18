/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    var s = "abcdefghijklmnopqrstuvwxyz" ;

    for(let i = 0 ; i < s.length ; i++){
        var check = true ;
        for(let j = 0 ; j < sentence.length ; j++){
            if(s[i] == sentence[j]){
                check = false ;
                break ;
            }
        }
        if(check){
            return false ;
        }
    }

    return true ;
    





};