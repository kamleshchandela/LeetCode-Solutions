/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // if(s.length == 1){
    //     return 0 ;
    // }
    // for(let i = 0 ; i < s.length ; i++){
    //     var check = true ;
    //     for(let j = 0 ; j < s.length ; j++){
    //         if(s[i] == s[j] && i != j){
    //             check = false ;
    //             continue; 
    //         }
    //     }
    //     if(check){
    //         return i ;
    //     }
        
        
    // }
    // return -1 ;

     var obj = {} ;
   
    if(s.length == 1){
        return 0 ;
    }
    
    for(let i = 0 ; i < s.length ; i ++){
        if(!obj[s[i]]){
            obj[s[i]] = 1 ;
        }
        else{
            obj[s[i]] += 1 ;

        }
    }
    for(let i = 0 ; i < s.length ; i ++){
        if(obj[s[i]] == 1){
            return i ;
        }
    }

    return -1 ;




};