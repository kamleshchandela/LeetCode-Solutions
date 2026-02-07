/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for(let i = 0 ; i < nums.length ; i++){
        // console.log(nums[i]) ;
        if (i==0 && target <= nums[i]){
            return i ;
        }
        else if (i==nums.length-1 && target >= nums[i]){
            return i+1 ;
        }
        else if(target <= nums[i+1] && target >= nums[i]){
            return i+1 ;
        }
        
    }
};