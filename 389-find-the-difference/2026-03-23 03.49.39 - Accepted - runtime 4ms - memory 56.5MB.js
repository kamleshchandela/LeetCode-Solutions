/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let obj1 = {} ;
    let obj2 = {} ;
    for(let i = 0 ; i < s.length ; i++){
       if(!obj1[s[i]]){
        obj1[s[i]] = 1 ;
       }
       else {
        obj1[s[i]] += 1 ; 
       }
    }
    for(let i = 0 ; i < t.length ; i++){
       if(!obj2[t[i]]){
        obj2[t[i]] = 1 ;
       }
       else {
        obj2[t[i]] += 1 ; 
       }
    }
    for(let i in obj2){
        if(obj2[i] != obj1[i]){
            return i ;
        }
    }
};