/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    var obj = {} ;
    var arr1 = [] ;
    var count = 0 ;
    for(let i = 0 ; i < arr.length ; i++){
        
            if(!obj[arr[i]]){
                obj[arr[i]] = 1 ;
            }
            else{
                obj[arr[i]] += 1 ; 
            }
        
    }

    for(let i in obj){
        arr1[count] = obj[i] ;
        count++ ;
    }

    for(let i = 0 ; i < count - 1 ; i ++){
        for(let j = 0 ; j < arr1.length ; j++){
            if(arr1[i] == arr1[j] && i != j){
                return false ;
            }
        }
    }

    return true ;





};