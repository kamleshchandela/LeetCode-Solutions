/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    var check = true ;
    var n = original ;
    var first = true ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == n){
            first = false ;
        }
    }
    if(first){
        return n ;
    }
    while(check){
        check = false ;
        for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] == n * 2){
            check = true ;
            n = n * 2 ;
        }
        }
        if(check == false){
            return n * 2 ;
        }
    }
    
};