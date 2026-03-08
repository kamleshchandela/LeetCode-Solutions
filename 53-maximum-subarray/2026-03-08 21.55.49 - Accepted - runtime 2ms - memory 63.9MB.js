/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = nums[0] ; 
    let maxsum = nums[0] ;
    for(let i = 1 ; i < nums.length ; i++){
        sum = sum + nums[i] ;
        if(sum < nums[i]){
            sum = nums[i] ;
        }
        if(sum >= maxsum){
            maxsum = sum ;
        }
    }
    return maxsum ; 
};