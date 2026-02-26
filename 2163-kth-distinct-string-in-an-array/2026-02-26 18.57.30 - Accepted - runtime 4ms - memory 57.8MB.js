/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let obj = {} ;
    for(let i = 0 ; i < arr.length ; i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = 1 ;
        }
        else{
            obj[arr[i]] += 1 ;
        }
    }
    let count = 0 ;
    for(let i in obj){
        if(obj[i] == 1){
            count ++ ;
            if(count == k){
                return i ;
            }
        }
    }
    return "" ;
};