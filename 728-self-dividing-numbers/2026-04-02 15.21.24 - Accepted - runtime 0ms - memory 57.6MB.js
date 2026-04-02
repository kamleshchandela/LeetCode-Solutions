/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
            let arr = [] ;
    for(let i = left ; i <= right ; i++ ){
            let n = i ;
            let check = true ;
        if(n > 9){
            
            let temp = 0 ;
            while(n>=1){
                temp = n % 10 ;
                n = parseInt(n/10) ;
                if(i%temp!=0){
                    check = false ;
                    break ;
                } 
            }
            if(check){
                arr.push(i) ;
            }

        }
        else {
            arr.push(i) ;
        }

    }
    return arr ;
};