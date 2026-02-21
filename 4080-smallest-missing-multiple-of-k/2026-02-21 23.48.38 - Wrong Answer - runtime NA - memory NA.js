/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    for(let i = 1 ; i <= nums.length ; i++){
        var check = true ;
        for(let j = 0 ; j < nums.length ; j++){
            if(nums[j] == k * i){
                check = false ;
                break ;
            }
        }
        if(check){
            return k * i ;
        }
    }
};