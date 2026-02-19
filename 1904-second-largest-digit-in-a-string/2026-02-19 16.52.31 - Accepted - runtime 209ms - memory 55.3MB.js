/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    var max1 = -1 ; 
    var max2 = -1 ;
    for(let i = 0 ; i < s.length ; i++){
        for(let j = 0 ; j < s.length ; j++){
            if(max1 < Number(s[j]) && !isNaN(Number(s[j]))){
                max2 = max1 ;
                max1 = Number(s[j]) ;
            }
            else if (max2 < Number(s[j]) && Number(s[j]) < max1 && !isNaN(Number(s[j]))){
                max2 = Number(s[j]) ;
            }
        }
    } 

    return max2 ;

};