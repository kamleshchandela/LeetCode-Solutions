/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj1 = {} ;
    let obj2 = {} ;
    if(s.length == t.length){
        for(let i = 0 ; i < s.length ; i ++){
            if(!obj1[s[i]]){
                obj1[s[i]] = 1 ;
            }
            else{
                obj1[s[i]] += 1 ;
            }
            if(!obj2[t[i]]){
                obj2[t[i]] = 1 ;
            }
            else{
                obj2[t[i]] += 1 ;
            }
        }
        let check = true ;
        for(let i in obj1){
            if(obj1[i] != obj2[i]){
                check = false ;
                break ;
            }
        }
        if(check){
            return true ;
        }
        return false ;
        
    }
    return false ;
};