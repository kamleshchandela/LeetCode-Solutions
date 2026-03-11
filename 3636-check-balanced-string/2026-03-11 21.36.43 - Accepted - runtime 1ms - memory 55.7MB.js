/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let s1 = 0 ; 
    let s2 = 0 ; 
    for(let i = 0 ; i < num.length ; i++){
        if(i%2==0){
            s1 = s1 + Number(num[i]) ;
        }
        else{
            s2 = s2 + Number(num[i]) ;
        }
    }
    if(s1 == s2){
        return true ;
    }
    else{
        return false ;
    }
};