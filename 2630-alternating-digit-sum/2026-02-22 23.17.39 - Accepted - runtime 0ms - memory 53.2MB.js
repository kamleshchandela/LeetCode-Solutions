/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    var sum1 = [] ;
    var sum2 = [] ;
    var count = 0 ;
    var n1 = 0 ;
    var n2 = 0 ;
    var check = true ;
    while (n >= 1){
        if(check){
            sum1[n1] = n % 10 ;
            n1 ++ ;
            check = false ;
        }
        else{
            sum2[n2] = n % 10 ;
            n2 ++ ;
            check = true ;
        }

        n = parseInt(n / 10) ;
        count ++ ;
        
    }
    var a = 0 ;
    for(let i = 0 ; i < sum1.length ; i++){
        a = a + sum1[i] ;
    }
    var b = 0 ;
    for(let i = 0 ; i < sum2.length ; i++){
        b = b + sum2[i] ;
    }
    if(count % 2 == 1)return a - b ;

    return b - a ;
    
};