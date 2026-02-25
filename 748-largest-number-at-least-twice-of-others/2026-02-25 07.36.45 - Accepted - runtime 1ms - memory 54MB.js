/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    var check = true ;
    for(let i = 0 ; i < nums.length ; i++){
        check = true ;
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[i] < (nums[j] * 2) && i != j){
                check = false ;
                break ;
            }
        }
        if(check){
            return i ;
        }
    }
    return -1 ;
};