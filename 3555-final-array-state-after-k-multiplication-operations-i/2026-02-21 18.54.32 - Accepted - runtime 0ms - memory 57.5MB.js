/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    var count = 0 ;
    for(let i = 0 ; i < k ; i++){
            var min = Infinity ;
            var index = 0 ;
        for(let j = 0 ; j < nums.length ; j++){
                if(min > nums[j]){
                    min = nums[j] ;
                    index = j ;
                }
            
        }
        nums[index] = nums[index] * multiplier ;
        count ++ ;
        if(count == k){
            return nums ;
        }
    }
    return nums ;
};