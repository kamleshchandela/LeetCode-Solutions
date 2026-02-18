/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function(n) {
        let sum1 = 0 ;  
        let sum2 = 0 ;  
        for(let i = 1 ; i <= n * 2 ; i++){
            if(i % 2 == 0){
                sum1 = sum1 + i ;
            }
            else{
                sum2 = sum2 + i ;
            }
            
        }
        if(sum1 < sum2){
            for(let i = sum1 ; i > 0 ; i-- ){
                if(sum1 % i == 0 && sum2 % i == 0 ){
                    return i ;
                }
            }
        }
        else{
            for(let i = sum2 ; i > 0 ; i-- ){
                if(sum1 % i == 0 && sum2 % i == 0 ){
                    return i ;
                }
            }
        }


    // return n ; => sirf it na likha ne se bhi ye code chalta he .



};