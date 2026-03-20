/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let count = 1 ;
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] == arr[i+1]){
            count ++ ;
        }
        else{
            if(count > arr.length/4){
                return arr[i] ;
            }
            count = 1 ;
        }
    }
};