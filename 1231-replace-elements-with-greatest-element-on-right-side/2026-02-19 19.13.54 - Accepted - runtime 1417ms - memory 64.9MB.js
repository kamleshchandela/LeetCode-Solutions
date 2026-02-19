/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    for(let i = 0 ; i < arr.length ; i++){
        var max = -Infinity ;
        var index = i ;
        for(let j = i + 1 ; j < arr.length ; j++){
            if(max < arr[j]){
                max = arr[j] ;
                index = j ;
            }

        }
        
        arr[i] = arr[index] ;

    }
    arr[arr.length - 1] = -1 ;
    return arr ;
};