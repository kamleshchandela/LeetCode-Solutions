/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let sum1 = 0 ;
    let sum2 = 0 ;
    let arr = [] ;
    let count = 0 ;
    for(let i = 0 ; i < num.length ; i ++){
        sum1 = sum1 * 10 + num[i] ;
    }
    sum2 = sum1 + k ;
    while(sum2 >= 1){
        arr[count] = sum2 % 10 ;
        count ++ ;
        sum2 = parseInt(sum2 / 10) ;
    }
    let arr1 = [] ;
    for(let i = 0 ; i < arr.length ; i++){
        arr1[i] = arr[arr.length - 1 - i] ;
    }
    return arr1 ;
    
};