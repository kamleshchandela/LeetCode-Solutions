/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var check = true ;
    for(let j = 0 ; j < magazine.length ; j++){
        check = true ;
        if(ransomNote[0] == magazine[j]){
            for(let i = 0 ; i < ransomNote.length ; i++){
                if(!(ransomNote[i] == magazine[j + i])){
                    check = false ;
                    break ;
                }
            }
            if(check){
                return true ;
            }
        }
        
    }
    return false ;
    
};