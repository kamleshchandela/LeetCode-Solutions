/**
 * @param {string} s
 * @return {number}
 */
var maxDifference = function(s) {
    let e1 = -Infinity ;
    let e2 = Infinity ;
    let o1 = -Infinity ;
    let o2 = Infinity ;
    for(let i = 0 ; i < s.length ; i ++) {
        let count = 0 ; 
        for(let j = 0 ; j < s.length ; j++){
            if(s[i] == s[j]){
                count ++ ;
            }
        }    
        if(count % 2 == 0){
            if(e1 < count){
                e1 = count ;
            }
            if(e2 > count){
                e2 = count ;
            }
        }
        else{
            if(o1 < count){
                o1 = count ;
            }
            if(o2 > count){
                o2 = count ;
            }
        }
    }
    let a = 0 ;
    let b = 0 ;
    if(o1 > o2){
        a = o1 ;
    }
    else{
        a = o2 ;
    }
    if(e1 > e2){
        b = e2 ;
    }
    else{
        b = e1 ;
    }
    return a - b ;
};