/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    
    
    return arr.sort((a,b)=>fn(a)-fn(b)) ; 


    // for(let i = 0 ; i < arr.length ; i++){
    //     let max = -Infinity ;
    //     let index = 0 ; 
    //     for(let j = 0 ; j < arr.length - i ; j++){
    //         let k = fn(arr[j]) ;
    //         if(max < k){
    //             max = k ;
    //             index = j ;
    //         }
    //     }
    //     let temp = arr[index] ;
    //     arr[index] = arr[arr.length - 1 - i] ;
    //     arr[arr.length - 1 - i] = temp ;
    // }
    // return arr ;


};