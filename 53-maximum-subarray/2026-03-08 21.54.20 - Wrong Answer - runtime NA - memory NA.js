/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0 ; 
    let maxsum = 0 ;
    for(let i = 0 ; i < nums.length ; i++){
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